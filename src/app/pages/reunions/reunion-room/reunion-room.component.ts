import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { MemberAuthService } from '../../../core/services/member-auth.service';
import { MeetingReconnectService } from '../../../core/services/meeting-reconnect.service';
import { MeetingService } from '../../../core/services/meeting.service';
import { MeetingSocketService } from '../../../core/services/meeting-socket.service';
import { ConnectionQuality, NetworkQualityService } from '../../../core/services/network-quality.service';
import { ReunionsService, JoinResult } from '../../../core/services/reunions.service';
import { AdminControlsComponent } from '../admin-controls/admin-controls.component';
import { MeetingOverlayComponent } from '../meeting-overlay/meeting-overlay.component';
import { NetworkIndicatorComponent } from '../network-indicator/network-indicator.component';

declare const JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-reunion-room',
  standalone: true,
  imports: [CommonModule, AdminControlsComponent, MeetingOverlayComponent, NetworkIndicatorComponent],
  templateUrl: './reunion-room.component.html',
  styleUrls: ['./reunion-room.component.scss'],
})
export class ReunionRoomComponent implements OnInit, OnDestroy {
  jitsiData: JoinResult | null = null;
  isAdmin = false;
  showAdminPanel = false;
  quality: ConnectionQuality = 'high';
  participantCount = 1;
  micMuted = false;
  cameraMuted = false;
  sharingScreen = false;
  handRaised = false;
  tileView = false;

  private qualitySubscription: Subscription | null = null;

  constructor(
    public meeting: MeetingService,
    private reunionsService: ReunionsService,
    private memberAuth: MemberAuthService,
    private adminAuth: AuthService,
    private router: Router,
    private zone: NgZone,
    private socket: MeetingSocketService,
    private networkQuality: NetworkQualityService,
    private reconnectService: MeetingReconnectService,
  ) {}

  ngOnInit() {
    const state = history.state;
    // Fallback to service data when re-entering from floating mode
    this.jitsiData = state?.jitsiData ?? this.meeting.currentMeetingData ?? null;

    if (!this.jitsiData) {
      this.router.navigate(['/reunions']);
      return;
    }

    this.isAdmin = this.jitsiData.isModerator || this.memberAuth.isAdmin() || this.adminAuth.isAdmin();
    this.networkQuality.start();
    this.qualitySubscription = this.networkQuality.quality$.subscribe(quality => {
      this.quality = quality;
      this.meeting.setQuality(quality);
    });

    if (!this.meeting.isActive) {
      this.meeting.currentMeetingData = this.jitsiData;
      this.meeting.startMeeting(this.jitsiData.meeting.title);
      this.socket.connect(this.jitsiData.meeting.id);
      this.loadJitsiScript();
    } else {
      this.meeting.setFloating(false);
    }
  }

  ngOnDestroy() {
    if (!this.meeting.isFloating) {
      this.qualitySubscription?.unsubscribe();
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
        TOOLBAR_BUTTONS: [],
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
        DISABLE_VIDEO_BACKGROUND: false,
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
          this.startReconnectSession();
        }
      });
    }, 8000);

    api.addListener('videoConferenceJoined', (event: { id?: string }) => {
      this.zone.run(() => {
        this.meeting.onJoined(api);
        this.startReconnectSession();
        if (event?.id && this.jitsiData?.participantId) {
          this.reunionsService.registerParticipantSession(
            this.jitsiData.meeting.id,
            this.jitsiData.participantId,
            event.id,
          ).subscribe({ error: () => undefined });
        }
        try {
          this.participantCount = api.getNumberOfParticipants?.() ?? 1;
        } catch { this.participantCount = 1; }
        // Apply config overrides post-join in case Jitsi ignored them at init
        try {
          api.executeCommand('overwriteConfig', {
            toolbarButtons: [],
            hideConferenceSubject: true,
            hideConferenceTimer: true,
          });
          api.executeCommand('subject', ' ');
        } catch { /* Jitsi version may not support overwriteConfig */ }
      });
    });

    api.addListener('participantJoined', () => {
      this.zone.run(() => {
        this.participantCount++;
        if (!this.meeting.jitsiApi) {
          this.meeting.onJoined(api);
          this.startReconnectSession();
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
        this.reconnectService.stop();
        this.networkQuality.stop();
        this.meeting.endMeeting();
      });
    });

    api.addListener('connectionFailed', () => {
      this.zone.run(() => this.handleDisconnect());
    });

    api.addListener('audioMuteStatusChanged', (event: { muted: boolean }) => {
      this.zone.run(() => this.micMuted = event.muted);
    });

    api.addListener('videoMuteStatusChanged', (event: { muted: boolean }) => {
      this.zone.run(() => this.cameraMuted = event.muted);
    });

    api.addListener('screenSharingStatusChanged', (event: { on: boolean }) => {
      this.zone.run(() => this.sharingScreen = event.on);
    });

    api.addListener('tileViewChanged', (event: { enabled: boolean }) => {
      this.zone.run(() => this.tileView = event.enabled);
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
      hideConferenceSubject: true,
      hideConferenceTimer: true,
      // Modern Jitsi: toolbar buttons in configOverwrite (interfaceConfigOverwrite.TOOLBAR_BUTTONS is deprecated)
      toolbarButtons: [],
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

  toggleMicrophone() {
    this.meeting.jitsiApi?.executeCommand('toggleAudio');
    this.micMuted = !this.micMuted;
  }

  toggleCamera() {
    this.meeting.jitsiApi?.executeCommand('toggleVideo');
    this.cameraMuted = !this.cameraMuted;
  }

  toggleScreenShare() {
    this.meeting.jitsiApi?.executeCommand('toggleShareScreen');
  }

  toggleChat() {
    this.meeting.jitsiApi?.executeCommand('toggleChat');
  }

  toggleRaiseHand() {
    this.meeting.jitsiApi?.executeCommand('toggleRaiseHand');
    this.handRaised = !this.handRaised;
  }

  toggleTileView() {
    this.meeting.jitsiApi?.executeCommand('toggleTileView');
    this.tileView = !this.tileView;
  }

  toggleFullscreen() {
    this.meeting.jitsiApi?.executeCommand('toggleFilmStrip');
    document.documentElement.requestFullscreen?.();
  }

  leaveMeeting() {
    this.meeting.hangup();
  }

  get isConnecting()  { return this.meeting['_isConnecting'].value; }
  get elapsedTime()   { return this.meeting['_timer'].value; }
  get qualityLabel()  {
    const map: Record<string, string> = { high: 'Excellente', medium: 'Correcte', low: 'Faible', critical: 'Déconnecté' };
    return map[this.quality] ?? '';
  }

  private startReconnectSession() {
    if (!this.jitsiData) return;
    this.reconnectService.start(
      this.jitsiData.meeting.id,
      this.jitsiData.participantId,
      this.jitsiData.reconnectToken,
    );
  }

  // ── Reconnexion ─────────────────────────────────────────────
  private async handleDisconnect() {
    if (!this.jitsiData) return;
    this.reconnectService.stop(false);
    const restored = await this.reconnectService.reconnect(
      this.jitsiData.meeting.id,
      this.jitsiData.reconnectToken,
    );
    if (restored) {
      this.loadJitsiScript();
    }
  }
}
