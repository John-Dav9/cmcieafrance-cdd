import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { MemberAuthService } from '../../../core/services/member-auth.service';
import { ReunionsService, JoinResult } from '../../../core/services/reunions.service';
import { FloatingWindowComponent } from '../floating-window/floating-window.component';
import { AdminControlsComponent } from '../admin-controls/admin-controls.component';

declare const JitsiMeetExternalAPI: any;

type ConnectionQuality = 'high' | 'medium' | 'low' | 'critical';

@Component({
  selector: 'app-reunion-room',
  standalone: true,
  imports: [CommonModule, FloatingWindowComponent, AdminControlsComponent],
  templateUrl: './reunion-room.component.html',
  styleUrls: ['./reunion-room.component.scss'],
})
export class ReunionRoomComponent implements OnInit, OnDestroy {
  jitsiData: JoinResult | null = null;
  isFloating = false;
  isConnecting = true;
  quality: ConnectionQuality = 'high';
  isAdmin = false;
  showAdminPanel = false;

  api: any = null;
  private heartbeat$: Subscription | null = null;
  private qualityMonitor$: Subscription | null = null;

  constructor(
    private reunionsService: ReunionsService,
    private memberAuth: MemberAuthService,
    private router: Router,
    private zone: NgZone,
  ) {}

  ngOnInit() {
    const state = history.state;
    this.jitsiData = state?.jitsiData ?? null;

    if (!this.jitsiData) {
      this.router.navigate(['/reunions']);
      return;
    }

    this.isAdmin = this.jitsiData.isModerator || this.memberAuth.isAdmin();
    this.detectNetworkQuality();
    this.loadJitsiScript();
  }

  ngOnDestroy() {
    this.heartbeat$?.unsubscribe();
    this.qualityMonitor$?.unsubscribe();
    this.api?.dispose();
  }

  private loadJitsiScript() {
    if (typeof JitsiMeetExternalAPI !== 'undefined') {
      this.initJitsi();
      return;
    }
    const domain = this.jitsiData!.jitsiUrl.replace('https://', '').replace('http://', '');
    const script = document.createElement('script');
    script.src = `https://${domain}/libs/external_api.min.js`;
    script.onload = () => this.zone.run(() => this.initJitsi());
    script.onerror = () => this.zone.run(() => {
      this.isConnecting = false;
      console.error('Impossible de charger le script Jitsi depuis', script.src);
    });
    document.head.appendChild(script);
  }

  private initJitsi() {
    if (!this.jitsiData) return;
    const member = this.memberAuth.member;
    const domain = this.jitsiData.jitsiUrl.replace('https://', '').replace('http://', '');

    const config = this.getJitsiConfig();

    this.api = new JitsiMeetExternalAPI(domain, {
      roomName: this.jitsiData.roomId,
      jwt: this.jitsiData.jitsiToken,
      parentNode: document.getElementById('jitsi-container'),
      width: '100%',
      height: '100%',
      configOverwrite: config,
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          'microphone', 'camera', 'closedcaptions',
          'desktop', 'chat', 'raisehand',
          'videoquality', 'filmstrip', 'tileview',
          ...(this.isAdmin ? ['recording', 'livestreaming', 'mute-everyone'] : []),
        ],
        SHOW_JITSI_WATERMARK: false,
        DEFAULT_BACKGROUND: '#1D546C',
        APP_NAME: 'CMCIEA France',
        NATIVE_APP_NAME: 'CMCIEA France',
        SHOW_POWERED_BY: false,
      },
      userInfo: {
        displayName: member ? `${member.firstName} ${member.lastName}` : 'Participant',
        email: member?.email ?? '',
      },
    });

    setTimeout(() => {
      this.zone.run(() => {
        if (this.isConnecting) {
          this.isConnecting = false;
          console.warn('[CMCIEA] videoConferenceJoined non reçu après 8s');
        }
      });
    }, 8000);

    this.api.addListener('videoConferenceJoined', () => {
      this.zone.run(() => { this.isConnecting = false; this.startHeartbeat(); });
    });

    this.api.addListener('participantJoined', () => {
      this.zone.run(() => {
          if (this.isConnecting) {
              this.isConnecting = false;
              this.startHeartbeat();
          }
      });
    });

    this.api.addListener('videoConferenceLeft', () => {
      this.zone.run(() => { this.stopHeartbeat(); this.router.navigate(['/reunions']); });
    });

    this.api.addListener('connectionFailed', () => {
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
    };

    switch (this.quality) {
      case 'high':
        return { ...base, startWithVideoMuted: false, resolution: 720 };
      case 'medium':
        return { ...base, startWithVideoMuted: true, resolution: 360 };
      case 'low':
        return { ...base, startWithVideoMuted: true, p2p: { enabled: false }, enableLayerSuspension: true };
      default:
        return { ...base, startWithVideoMuted: true };
    }
  }

  toggleFloat() {
    this.isFloating = !this.isFloating;
  }

  toggleAdminPanel() {
    this.showAdminPanel = !this.showAdminPanel;
  }

  toggleMic() {
    this.api?.executeCommand('toggleAudio');
  }

  toggleCam() {
    this.api?.executeCommand('toggleVideo');
  }

  leaveReunion() {
    this.api?.executeCommand('hangup');
  }

  private startHeartbeat() {
    if (!this.jitsiData) return;
    const meetingId = this.jitsiData.meeting.id;
    this.heartbeat$ = interval(15000).subscribe(() => {
      this.reunionsService.heartbeat(meetingId).subscribe();
    });
  }

  private stopHeartbeat() {
    this.heartbeat$?.unsubscribe();
  }

  private async handleDisconnect() {
    if (!this.jitsiData) return;
    for (let i = 0; i < 3; i++) {
      await new Promise(r => setTimeout(r, 5000));
      try {
        const res = await this.reunionsService.reconnect(
          this.jitsiData.meeting.id,
          this.jitsiData.reconnectToken,
        ).toPromise();
        if (res?.restored) {
          this.loadJitsiScript();
          return;
        }
      } catch { /* continue */ }
    }
  }

  private detectNetworkQuality() {
    const conn = (navigator as any).connection;
    if (!conn) return;

    const check = () => {
      const { downlink, effectiveType, rtt } = conn;
      if (downlink > 2 && rtt < 200) this.quality = 'high';
      else if (downlink > 0.5 || effectiveType === '3g') this.quality = 'medium';
      else if (downlink > 0.1 || effectiveType === '2g') this.quality = 'low';
      else this.quality = 'critical';
    };

    check();
    conn.addEventListener('change', check);

    this.qualityMonitor$ = interval(30000).subscribe(async () => {
      const start = Date.now();
      try {
        await fetch('/api/health', { cache: 'no-store' });
        const latency = Date.now() - start;
        if (latency > 800) this.quality = 'low';
        else if (latency > 300) this.quality = 'medium';
        else this.quality = 'high';
      } catch { this.quality = 'critical'; }
    });
  }

  get qualityLabel(): string {
    const labels = { high: 'Connexion excellente', medium: 'Connexion correcte', low: 'Connexion faible', critical: 'Pas de connexion' };
    return labels[this.quality];
  }
}
