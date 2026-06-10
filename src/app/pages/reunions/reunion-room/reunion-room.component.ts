import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, interval, Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { MemberAuthService } from '../../../core/services/member-auth.service';
import { MeetingService } from '../../../core/services/meeting.service';
import { MeetingSocketService } from '../../../core/services/meeting-socket.service';
import { ReunionsService, JoinResult } from '../../../core/services/reunions.service';
import { AdminControlsComponent } from '../admin-controls/admin-controls.component';
import { MeetingOverlayComponent } from '../meeting-overlay/meeting-overlay.component';

declare const JitsiMeetExternalAPI: any;
type ConnectionQuality = 'high' | 'medium' | 'low' | 'critical';

@Component({
  selector: 'app-reunion-room',
  standalone: true,
  imports: [CommonModule, AdminControlsComponent, MeetingOverlayComponent],
  templateUrl: './reunion-room.component.html',
  styleUrls: ['./reunion-room.component.scss'],
})
export class ReunionRoomComponent implements OnInit, OnDestroy {
  jitsiData: JoinResult | null = null;
  isAdmin = false;
  showAdminPanel = false;
  quality: ConnectionQuality = 'high';
  participantCount = 1;

  private heartbeat$: Subscription | null = null;
  private qualityMonitor$: Subscription | null = null;

  constructor(
    public meeting: MeetingService,
    private reunionsService: ReunionsService,
    private memberAuth: MemberAuthService,
    private adminAuth: AuthService,
    private router: Router,
    private zone: NgZone,
    private socket: MeetingSocketService,
  ) {}

  ngOnInit() {
    const state = history.state;
    this.jitsiData = state?.jitsiData ?? null;

    if (!this.jitsiData) {
      this.router.navigate(['/reunions']);
      return;
    }

    this.isAdmin = this.jitsiData.isModerator || this.memberAuth.isAdmin() || this.adminAuth.isAdmin();

    if (!this.meeting.isActive) {
      this.meeting.currentMeetingData = this.jitsiData;
      this.meeting.startMeeting(this.jitsiData.meeting.title);
      this.socket.connect(this.jitsiData.meeting.id);
      this.detectNetworkQuality();
      this.loadJitsiScript();
    } else {
      this.meeting.setFloating(false);
    }
  }

  ngOnDestroy() {
    if (!this.meeting.isFloating) {
      this.heartbeat$?.unsubscribe();
      this.qualityMonitor$?.unsubscribe();
      if (this.jitsiData) this.socket.disconnect(this.jitsiData.meeting.id);
    }
  }

  private loadJitsiScript() {
    if (typeof JitsiMeetExternalAPI !== 'undefined') {
      this.initJitsi();
      return;
    }
    const domain = this.jitsiData!.jitsiUrl.replace(/https?:\/\//, '');
    const script = document.createElement('script');
    script.src = `https://${domain}/libs/external_api.min.js`;
    script.onload  = () => this.zone.run(() => this.initJitsi());
    script.onerror = () => this.zone.run(() => {
      this.meeting['_isConnecting'].next(false);
    });
    document.head.appendChild(script);
  }

  private initJitsi() {
    if (!this.jitsiData) return;
    const member = this.memberAuth.member;
    const domain = this.jitsiData.jitsiUrl.replace(/https?:\/\//, '');

    const container = document.getElementById('jitsi-persistent-container');
    if (!container) return;

    const api = new JitsiMeetExternalAPI(domain, {
      roomName: this.jitsiData.roomId,
      jwt: this.jitsiData.jitsiToken,
      parentNode: container,
      width: '100%',
      height: '100%',
      configOverwrite: this.getJitsiConfig(),
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          'microphone', 'camera', 'desktop', 'chat',
          'tileview', 'fullscreen', 'hangup',
          'videoquality',
          ...(this.isAdmin ? ['mute-everyone'] : []),
        ],
        SHOW_JITSI_WATERMARK: false,
        SHOW_BRAND_WATERMARK: false,
        SHOW_POWERED_BY: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        HIDE_INVITE_MORE_HEADER: true,
        RECENT_LIST_ENABLED: false,
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        DEFAULT_BACKGROUND: '#202124',
        APP_NAME: 'CMCIEA France',
        NATIVE_APP_NAME: 'CMCIEA France',
        DEFAULT_REMOTE_DISPLAY_NAME: 'Participant',
        TOOLBAR_ALWAYS_VISIBLE: false,
      },
      userInfo: {
        displayName: member ? `${member.firstName} ${member.lastName}` : 'Participant',
        email: member?.email ?? '',
      },
    });

    // Fallback spinner après 8s
    setTimeout(() => {
      this.zone.run(() => {
        if (!this.meeting.jitsiApi) {
          this.meeting.onJoined(api);
          this.startHeartbeat();
        }
      });
    }, 8000);

    api.addListener('videoConferenceJoined', () => {
      this.zone.run(() => {
        this.meeting.onJoined(api);
        this.startHeartbeat();
        // Récupère le nombre de participants réels à la connexion
        try {
          this.participantCount = api.getNumberOfParticipants?.() ?? 1;
        } catch { this.participantCount = 1; }
      });
    });

    api.addListener('participantJoined', () => {
      this.zone.run(() => {
        this.participantCount++;
        if (!this.meeting.jitsiApi) {
          this.meeting.onJoined(api);
          this.startHeartbeat();
        }
      });
    });

    api.addListener('participantLeft', () => {
      this.zone.run(() => {
        this.participantCount = Math.max(1, this.participantCount - 1);
      });
    });

    api.addListener('videoConferenceLeft', () => {
      this.zone.run(() => {
        this.stopHeartbeat();
        this.meeting.endMeeting();
      });
    });

    api.addListener('connectionFailed', () => {
      this.zone.run(() => this.handleDisconnect());
    });
  }

  private getJitsiConfig() {
    const base = {
      defaultLanguage: 'fr',
      prejoinPageEnabled: false,
      prejoinConfig: { enabled: false },
      disableDeepLinking: true,
      startWithAudioMuted: false,
      subject: this.jitsiData?.meeting?.title ?? '',
      theme: 'dark',
    };
    switch (this.quality) {
      case 'high':   return { ...base, startWithVideoMuted: false, resolution: 720 };
      case 'medium': return { ...base, startWithVideoMuted: true,  resolution: 360 };
      case 'low':    return { ...base, startWithVideoMuted: true,  p2p: { enabled: false }, enableLayerSuspension: true };
      default:       return { ...base, startWithVideoMuted: true };
    }
  }

  // ── Actions topbar ──────────────────────────────────────────
  toggleFloat() {
    this.meeting.setFloating(true);
    this.router.navigate(['/']);
  }

  toggleAdminPanel() { this.showAdminPanel = !this.showAdminPanel; }

  get isConnecting()  { return this.meeting['_isConnecting'].value; }
  get elapsedTime()   { return this.meeting['_timer'].value; }
  get qualityLabel()  {
    const map: Record<string, string> = { high: 'Excellente', medium: 'Correcte', low: 'Faible', critical: 'Déconnecté' };
    return map[this.quality] ?? '';
  }

  // ── Heartbeat ───────────────────────────────────────────────
  private startHeartbeat() {
    if (!this.jitsiData) return;
    const id = this.jitsiData.meeting.id;
    this.heartbeat$ = interval(15000).subscribe(() =>
      this.reunionsService.heartbeat(id).subscribe()
    );
  }

  private stopHeartbeat() { this.heartbeat$?.unsubscribe(); }

  // ── Reconnexion ─────────────────────────────────────────────
  private async handleDisconnect() {
    if (!this.jitsiData) return;
    for (let i = 0; i < 3; i++) {
      await new Promise(r => setTimeout(r, 5000));
      try {
        const res = await firstValueFrom(this.reunionsService.reconnect(
          this.jitsiData.meeting.id,
          this.jitsiData.reconnectToken,
        ));
        if (res?.restored) { this.loadJitsiScript(); return; }
      } catch { /* continue */ }
    }
  }

  // ── Qualité réseau ──────────────────────────────────────────
  private detectNetworkQuality() {
    const conn = (navigator as any).connection;
    if (!conn) return;
    const check = () => {
      const { downlink, effectiveType, rtt } = conn;
      if (downlink > 2 && rtt < 200)                   this.quality = 'high';
      else if (downlink > 0.5 || effectiveType === '3g') this.quality = 'medium';
      else if (downlink > 0.1 || effectiveType === '2g') this.quality = 'low';
      else                                               this.quality = 'critical';
      this.meeting.setQuality(this.quality);
    };
    check();
    conn.addEventListener('change', check);
    this.qualityMonitor$ = interval(30000).subscribe(async () => {
      const t = Date.now();
      try {
        await fetch('/api/health', { cache: 'no-store' });
        const ms = Date.now() - t;
        this.quality = ms > 800 ? 'low' : ms > 300 ? 'medium' : 'high';
        this.meeting.setQuality(this.quality);
      } catch { this.quality = 'critical'; this.meeting.setQuality('critical'); }
    });
  }
}
