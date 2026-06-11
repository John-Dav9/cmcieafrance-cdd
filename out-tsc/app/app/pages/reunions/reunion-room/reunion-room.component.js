import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminControlsComponent } from '../admin-controls/admin-controls.component';
import { MeetingOverlayComponent } from '../meeting-overlay/meeting-overlay.component';
import { NetworkIndicatorComponent } from '../network-indicator/network-indicator.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/meeting.service";
import * as i2 from "../../../core/services/reunions.service";
import * as i3 from "../../../core/services/member-auth.service";
import * as i4 from "../../../core/services/auth.service";
import * as i5 from "@angular/router";
import * as i6 from "../../../core/services/meeting-socket.service";
import * as i7 from "../../../core/services/network-quality.service";
import * as i8 from "../../../core/services/meeting-reconnect.service";
import * as i9 from "@angular/common";
function ReunionRoomComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function ReunionRoomComponent_button_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleAdminPanel()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 9);
    i0.ɵɵelement(2, "path", 45)(3, "path", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "R\u00E9gie");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r1.showAdminPanel);
} }
function ReunionRoomComponent_aside_31_a_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u00B7 code ", ctx_r1.dialIn.pin, "");
} }
function ReunionRoomComponent_aside_31_a_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 49);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ReunionRoomComponent_aside_31_a_6_span_2_Template, 2, 1, "span", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", "tel:" + ctx_r1.dialIn.number, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Appeler ", ctx_r1.dialIn.number, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dialIn.pin);
} }
function ReunionRoomComponent_aside_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "aside", 47)(1, "div")(2, "strong");
    i0.ɵɵtext(3, "Mode connexion faible activ\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "La vid\u00E9o a \u00E9t\u00E9 coup\u00E9e pour pr\u00E9server le son.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, ReunionRoomComponent_aside_31_a_6_Template, 3, 3, "a", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.quality === "critical" && ctx_r1.dialIn);
} }
function ReunionRoomComponent__svg_svg_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 9);
    i0.ɵɵelement(1, "rect", 51)(2, "path", 52);
    i0.ɵɵelementEnd();
} }
function ReunionRoomComponent__svg_svg_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 9);
    i0.ɵɵelement(1, "path", 53);
    i0.ɵɵelementEnd();
} }
function ReunionRoomComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54)(1, "div", 55)(2, "div", 56);
    i0.ɵɵtext(3, "\u271D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 57);
    i0.ɵɵtext(5, "CMCIEA France");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", 58);
    i0.ɵɵelementStart(7, "p", 59);
    i0.ɵɵtext(8, "Connexion en cours...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 60);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.jitsiData == null ? null : ctx_r1.jitsiData.meeting == null ? null : ctx_r1.jitsiData.meeting.title);
} }
function ReunionRoomComponent_app_admin_controls_88_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-admin-controls", 61);
    i0.ɵɵlistener("close", function ReunionRoomComponent_app_admin_controls_88_Template_app_admin_controls_close_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showAdminPanel = false); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("meetingId", ctx_r1.jitsiData.meeting.id)("jitsiRoomId", ctx_r1.jitsiData.roomId)("jitsiApi", ctx_r1.meeting.jitsiApi);
} }
function ReunionRoomComponent_app_meeting_overlay_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-meeting-overlay", 62);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("meetingId", ctx_r1.jitsiData.meeting.id)("isAdmin", ctx_r1.isAdmin);
} }
export class ReunionRoomComponent {
    constructor(meeting, reunionsService, memberAuth, adminAuth, router, zone, socket, networkQuality, reconnectService) {
        this.meeting = meeting;
        this.reunionsService = reunionsService;
        this.memberAuth = memberAuth;
        this.adminAuth = adminAuth;
        this.router = router;
        this.zone = zone;
        this.socket = socket;
        this.networkQuality = networkQuality;
        this.reconnectService = reconnectService;
        this.jitsiData = null;
        this.isAdmin = false;
        this.showAdminPanel = false;
        this.quality = 'high';
        this.participantCount = 1;
        this.micMuted = false;
        this.cameraMuted = false;
        this.sharingScreen = false;
        this.handRaised = false;
        this.tileView = false;
        this.lowBandwidthMode = false;
        this.qualitySubscription = null;
    }
    ngOnInit() {
        var _a, _b;
        const state = history.state;
        // Fallback to service data when re-entering from floating mode
        this.jitsiData = (_b = (_a = state === null || state === void 0 ? void 0 : state.jitsiData) !== null && _a !== void 0 ? _a : this.meeting.currentMeetingData) !== null && _b !== void 0 ? _b : null;
        if (!this.jitsiData) {
            this.router.navigate(['/reunions']);
            return;
        }
        this.isAdmin = this.jitsiData.isModerator || this.memberAuth.isAdmin() || this.adminAuth.isAdmin();
        this.networkQuality.start();
        this.qualitySubscription = this.networkQuality.quality$.subscribe(quality => {
            this.quality = quality;
            this.meeting.setQuality(quality);
            this.applyNetworkMode(quality);
        });
        if (!this.meeting.isActive) {
            this.meeting.currentMeetingData = this.jitsiData;
            this.meeting.startMeeting(this.jitsiData.meeting.title);
            this.socket.connect(this.jitsiData.meeting.id);
            this.loadJitsiScript();
        }
        else {
            this.meeting.setFloating(false);
        }
    }
    applyNetworkMode(quality) {
        var _a, _b;
        const shouldReduce = quality === 'low' || quality === 'critical';
        if (shouldReduce && !this.lowBandwidthMode) {
            this.lowBandwidthMode = true;
            try {
                if (!this.cameraMuted)
                    (_a = this.meeting.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleVideo');
                (_b = this.meeting.jitsiApi) === null || _b === void 0 ? void 0 : _b.executeCommand('overwriteConfig', {
                    startWithVideoMuted: true,
                    enableLayerSuspension: true,
                    p2p: { enabled: false },
                });
            }
            catch (_c) { }
        }
        else if (!shouldReduce) {
            this.lowBandwidthMode = false;
        }
    }
    ngOnDestroy() {
        var _a;
        if (!this.meeting.isFloating) {
            (_a = this.qualitySubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            if (this.jitsiData)
                this.socket.disconnect(this.jitsiData.meeting.id);
        }
    }
    loadJitsiScript() {
        if (typeof JitsiMeetExternalAPI !== 'undefined') {
            this.initJitsi();
            return;
        }
        const domain = this.jitsiData.jitsiUrl.replace(/https?:\/\//, '');
        const script = document.createElement('script');
        script.src = `https://${domain}/libs/external_api.min.js`;
        script.onload = () => this.zone.run(() => this.initJitsi());
        script.onerror = () => this.zone.run(() => {
            this.meeting['_isConnecting'].next(false);
        });
        document.head.appendChild(script);
    }
    initJitsi() {
        if (!this.jitsiData)
            return;
        const domain = this.jitsiData.jitsiUrl.replace(/https?:\/\//, '');
        const container = document.getElementById('jitsi-persistent-container');
        if (!container)
            return;
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
                displayName: this.jitsiData.displayName || 'Participant',
                email: this.jitsiData.email || '',
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
        api.addListener('videoConferenceJoined', (event) => {
            this.zone.run(() => {
                var _a, _b, _c;
                this.meeting.onJoined(api);
                this.startReconnectSession();
                if ((event === null || event === void 0 ? void 0 : event.id) && ((_a = this.jitsiData) === null || _a === void 0 ? void 0 : _a.participantId)) {
                    this.reunionsService.registerParticipantSession(this.jitsiData.meeting.id, this.jitsiData.participantId, event.id).subscribe({ error: () => undefined });
                }
                try {
                    this.participantCount = (_c = (_b = api.getNumberOfParticipants) === null || _b === void 0 ? void 0 : _b.call(api)) !== null && _c !== void 0 ? _c : 1;
                }
                catch (_d) {
                    this.participantCount = 1;
                }
                // Apply config overrides post-join in case Jitsi ignored them at init
                try {
                    api.executeCommand('overwriteConfig', {
                        toolbarButtons: [],
                        hideConferenceSubject: true,
                        hideConferenceTimer: true,
                    });
                    api.executeCommand('subject', ' ');
                }
                catch ( /* Jitsi version may not support overwriteConfig */_e) { /* Jitsi version may not support overwriteConfig */ }
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
        api.addListener('audioMuteStatusChanged', (event) => {
            this.zone.run(() => this.micMuted = event.muted);
        });
        api.addListener('videoMuteStatusChanged', (event) => {
            this.zone.run(() => this.cameraMuted = event.muted);
        });
        api.addListener('screenSharingStatusChanged', (event) => {
            this.zone.run(() => this.sharingScreen = event.on);
        });
        api.addListener('tileViewChanged', (event) => {
            this.zone.run(() => this.tileView = event.enabled);
        });
    }
    getJitsiConfig() {
        var _a, _b, _c;
        const base = {
            defaultLanguage: 'fr',
            prejoinPageEnabled: false,
            prejoinConfig: { enabled: false },
            disableDeepLinking: true,
            startWithAudioMuted: false,
            subject: (_c = (_b = (_a = this.jitsiData) === null || _a === void 0 ? void 0 : _a.meeting) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : '',
            hideConferenceSubject: true,
            hideConferenceTimer: true,
            // Modern Jitsi: toolbar buttons in configOverwrite (interfaceConfigOverwrite.TOOLBAR_BUTTONS is deprecated)
            toolbarButtons: [],
            theme: 'dark',
        };
        switch (this.quality) {
            case 'high': return Object.assign(Object.assign({}, base), { startWithVideoMuted: false, resolution: 720 });
            case 'medium': return Object.assign(Object.assign({}, base), { startWithVideoMuted: true, resolution: 360 });
            case 'low': return Object.assign(Object.assign({}, base), { startWithVideoMuted: true, p2p: { enabled: false }, enableLayerSuspension: true });
            default: return Object.assign(Object.assign({}, base), { startWithVideoMuted: true });
        }
    }
    // ── Actions topbar ──────────────────────────────────────────
    toggleFloat() {
        this.meeting.setFloating(true);
        this.router.navigate(['/']);
    }
    toggleAdminPanel() { this.showAdminPanel = !this.showAdminPanel; }
    toggleMicrophone() {
        var _a;
        (_a = this.meeting.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleAudio');
        this.micMuted = !this.micMuted;
    }
    toggleCamera() {
        var _a;
        (_a = this.meeting.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleVideo');
        this.cameraMuted = !this.cameraMuted;
    }
    toggleScreenShare() {
        var _a;
        (_a = this.meeting.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleShareScreen');
    }
    toggleChat() {
        var _a;
        (_a = this.meeting.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleChat');
    }
    toggleRaiseHand() {
        var _a;
        (_a = this.meeting.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleRaiseHand');
        this.handRaised = !this.handRaised;
    }
    toggleTileView() {
        var _a;
        (_a = this.meeting.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleTileView');
        this.tileView = !this.tileView;
    }
    toggleFullscreen() {
        var _a, _b, _c;
        (_a = this.meeting.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleFilmStrip');
        (_c = (_b = document.documentElement).requestFullscreen) === null || _c === void 0 ? void 0 : _c.call(_b);
    }
    leaveMeeting() {
        this.meeting.hangup();
    }
    get isConnecting() { return this.meeting['_isConnecting'].value; }
    get elapsedTime() { return this.meeting['_timer'].value; }
    get qualityLabel() {
        var _a;
        const map = { high: 'Excellente', medium: 'Correcte', low: 'Faible', critical: 'Déconnecté' };
        return (_a = map[this.quality]) !== null && _a !== void 0 ? _a : '';
    }
    get dialIn() { var _a, _b; return (_b = (_a = this.jitsiData) === null || _a === void 0 ? void 0 : _a.dialIn) !== null && _b !== void 0 ? _b : null; }
    startReconnectSession() {
        if (!this.jitsiData)
            return;
        this.reconnectService.start(this.jitsiData.meeting.id, this.jitsiData.participantId, this.jitsiData.reconnectToken);
    }
    // ── Reconnexion ─────────────────────────────────────────────
    async handleDisconnect() {
        if (!this.jitsiData)
            return;
        this.reconnectService.stop(false);
        const restored = await this.reconnectService.reconnect(this.jitsiData.meeting.id, this.jitsiData.reconnectToken);
        if (restored) {
            this.loadJitsiScript();
        }
    }
}
ReunionRoomComponent.ɵfac = function ReunionRoomComponent_Factory(t) { return new (t || ReunionRoomComponent)(i0.ɵɵdirectiveInject(i1.MeetingService), i0.ɵɵdirectiveInject(i2.ReunionsService), i0.ɵɵdirectiveInject(i3.MemberAuthService), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i6.MeetingSocketService), i0.ɵɵdirectiveInject(i7.NetworkQualityService), i0.ɵɵdirectiveInject(i8.MeetingReconnectService)); };
ReunionRoomComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReunionRoomComponent, selectors: [["app-reunion-room"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 90, vars: 25, consts: [[1, "meeting-shell"], [1, "meeting-header"], [1, "meeting-identity"], ["aria-hidden", "true", 1, "meeting-brand"], [1, "meeting-copy"], [1, "meeting-eyebrow"], [1, "live-dot"], [1, "meeting-status"], [1, "status-chip", "status-chip--timer"], ["viewBox", "0 0 24 24"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 7v5l3 2"], [3, "quality"], [1, "status-chip"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M22 21v-2a4 4 0 0 0-3-3.87"], ["class", "header-action header-action--admin", 3, "is-active", "click", 4, "ngIf"], [1, "header-action", 3, "click"], ["d", "M8 3H5a2 2 0 0 0-2 2v3M16 21h3a2 2 0 0 0 2-2v-3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3"], [1, "meeting-stage-frame"], ["class", "bandwidth-alert", 4, "ngIf"], ["aria-label", "Contr\u00F4les de la r\u00E9union", 1, "meeting-dock"], [1, "dock-control", 3, "click"], [1, "dock-icon"], ["viewBox", "0 0 24 24", 4, "ngIf"], ["x", "3", "y", "6", "width", "13", "height", "12", "rx", "2"], ["d", "m16 10 5-3v10l-5-3"], ["x", "3", "y", "3", "width", "18", "height", "14", "rx", "2"], ["d", "M8 21h8M12 17v4M8 10l4-4 4 4M12 6v7"], ["d", "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"], ["d", "M8 9h8M8 13h5"], [1, "dock-control", "dock-control--secondary", 3, "click"], ["d", "M7 11V6a2 2 0 0 1 4 0v4-6a2 2 0 0 1 4 0v6-4a2 2 0 0 1 4 0v8a8 8 0 0 1-8 8h-1a8 8 0 0 1-7-4l-2-4a2 2 0 0 1 3.4-2l2.6 3"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["d", "M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"], [1, "dock-control", "dock-control--leave", 3, "click"], ["d", "M4 14c5-4 11-4 16 0l-3 4-3-2v-3a12 12 0 0 0-4 0v3l-3 2z"], ["class", "rm-loading", 4, "ngIf"], [3, "meetingId", "jitsiRoomId", "jitsiApi", "close", 4, "ngIf"], [3, "meetingId", "isAdmin", 4, "ngIf"], [1, "header-action", "header-action--admin", 3, "click"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["d", "m9 12 2 2 4-4"], [1, "bandwidth-alert"], [3, "href", 4, "ngIf"], [3, "href"], [4, "ngIf"], ["x", "9", "y", "2", "width", "6", "height", "12", "rx", "3"], ["d", "M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8"], ["d", "m3 3 18 18M9 9v2a3 3 0 0 0 5.1 2.1M15 9V5a3 3 0 0 0-5.8-1M17 16.8A7 7 0 0 0 19 10M5 10a7 7 0 0 0 10 6.3M12 17v4M8 21h8"], [1, "rm-loading"], [1, "rm-loading__inner"], [1, "rm-loading__cross"], [1, "rm-loading__org"], [1, "rm-loading__spinner"], [1, "rm-loading__label"], [1, "rm-loading__meeting"], [3, "close", "meetingId", "jitsiRoomId", "jitsiApi"], [3, "meetingId", "isAdmin"]], template: function ReunionRoomComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
        i0.ɵɵtext(4, "C");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4)(6, "div", 5);
        i0.ɵɵelement(7, "span", 6);
        i0.ɵɵtext(8, " R\u00E9union en cours ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h1");
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(11, "div", 7)(12, "div", 8);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(13, "svg", 9);
        i0.ɵɵelement(14, "circle", 10)(15, "path", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(16);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelement(17, "app-network-indicator", 12);
        i0.ɵɵelementStart(18, "div", 13);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(19, "svg", 9);
        i0.ɵɵelement(20, "path", 14)(21, "circle", 15)(22, "path", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(24, ReunionRoomComponent_button_24_Template, 6, 2, "button", 17);
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(25, "button", 18);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_25_listener() { return ctx.toggleFloat(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(26, "svg", 9);
        i0.ɵɵelement(27, "path", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(28, "span");
        i0.ɵɵtext(29, "R\u00E9duire");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelement(30, "div", 20);
        i0.ɵɵtemplate(31, ReunionRoomComponent_aside_31_Template, 7, 1, "aside", 21);
        i0.ɵɵelementStart(32, "nav", 22)(33, "button", 23);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_33_listener() { return ctx.toggleMicrophone(); });
        i0.ɵɵelementStart(34, "span", 24);
        i0.ɵɵtemplate(35, ReunionRoomComponent__svg_svg_35_Template, 3, 0, "svg", 25)(36, ReunionRoomComponent__svg_svg_36_Template, 2, 0, "svg", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "span");
        i0.ɵɵtext(38);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(39, "button", 23);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_39_listener() { return ctx.toggleCamera(); });
        i0.ɵɵelementStart(40, "span", 24);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(41, "svg", 9);
        i0.ɵɵelement(42, "rect", 26)(43, "path", 27);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(44, "span");
        i0.ɵɵtext(45);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(46, "button", 23);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_46_listener() { return ctx.toggleScreenShare(); });
        i0.ɵɵelementStart(47, "span", 24);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(48, "svg", 9);
        i0.ɵɵelement(49, "rect", 28)(50, "path", 29);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(51, "span");
        i0.ɵɵtext(52, "Pr\u00E9senter");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(53, "button", 23);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_53_listener() { return ctx.toggleChat(); });
        i0.ɵɵelementStart(54, "span", 24);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(55, "svg", 9);
        i0.ɵɵelement(56, "path", 30)(57, "path", 31);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(58, "span");
        i0.ɵɵtext(59, "Discussion");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(60, "button", 32);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_60_listener() { return ctx.toggleRaiseHand(); });
        i0.ɵɵelementStart(61, "span", 24);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(62, "svg", 9);
        i0.ɵɵelement(63, "path", 33);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(64, "span");
        i0.ɵɵtext(65, "Main");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(66, "button", 32);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_66_listener() { return ctx.toggleTileView(); });
        i0.ɵɵelementStart(67, "span", 24);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(68, "svg", 9);
        i0.ɵɵelement(69, "rect", 34)(70, "rect", 35)(71, "rect", 36)(72, "rect", 37);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(73, "span");
        i0.ɵɵtext(74, "Grille");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(75, "button", 32);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_75_listener() { return ctx.toggleFullscreen(); });
        i0.ɵɵelementStart(76, "span", 24);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(77, "svg", 9);
        i0.ɵɵelement(78, "path", 38);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(79, "span");
        i0.ɵɵtext(80, "Plein \u00E9cran");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(81, "button", 39);
        i0.ɵɵlistener("click", function ReunionRoomComponent_Template_button_click_81_listener() { return ctx.leaveMeeting(); });
        i0.ɵɵelementStart(82, "span", 24);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(83, "svg", 9);
        i0.ɵɵelement(84, "path", 40);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(85, "span");
        i0.ɵɵtext(86, "Quitter");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(87, ReunionRoomComponent_div_87_Template, 11, 1, "div", 41)(88, ReunionRoomComponent_app_admin_controls_88_Template, 1, 3, "app-admin-controls", 42)(89, ReunionRoomComponent_app_meeting_overlay_89_Template, 1, 2, "app-meeting-overlay", 43);
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate(ctx.jitsiData == null ? null : ctx.jitsiData.meeting == null ? null : ctx.jitsiData.meeting.title);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.elapsedTime, " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("quality", ctx.quality);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.participantCount, " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.isAdmin);
        i0.ɵɵadvance(6);
        i0.ɵɵclassProp("with-panel", ctx.showAdminPanel);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.lowBandwidthMode);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("is-off", ctx.micMuted);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.micMuted);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.micMuted);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.micMuted ? "Activer" : "Micro");
        i0.ɵɵadvance();
        i0.ɵɵclassProp("is-off", ctx.cameraMuted);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.cameraMuted ? "Activer" : "Cam\u00E9ra");
        i0.ɵɵadvance();
        i0.ɵɵclassProp("is-active", ctx.sharingScreen);
        i0.ɵɵadvance(14);
        i0.ɵɵclassProp("is-active", ctx.handRaised);
        i0.ɵɵadvance(6);
        i0.ɵɵclassProp("is-active", ctx.tileView);
        i0.ɵɵadvance(21);
        i0.ɵɵproperty("ngIf", ctx.isConnecting);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.showAdminPanel && ctx.isAdmin && ctx.jitsiData);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.jitsiData);
    } }, dependencies: [CommonModule, i9.NgIf, AdminControlsComponent, MeetingOverlayComponent, NetworkIndicatorComponent], styles: ["$accent[_ngcontent-%COMP%]:   #e8a838[_ngcontent-%COMP%];\n$dark[_ngcontent-%COMP%]:   #111318[_ngcontent-%COMP%];\n$panel[_ngcontent-%COMP%]:   rgba(22[_ngcontent-%COMP%], 25[_ngcontent-%COMP%], 31[_ngcontent-%COMP%], 0.92)[_ngcontent-%COMP%];\n$white[_ngcontent-%COMP%]:   #fff[_ngcontent-%COMP%];\n$muted[_ngcontent-%COMP%]:   #aab0bb[_ngcontent-%COMP%];\n$danger[_ngcontent-%COMP%]:   #e5484d[_ngcontent-%COMP%];\n\n.meeting-shell[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  pointer-events: none;\n  color: $white;\n  font-family: Inter, \"Segoe UI\", sans-serif;\n}\n\n.meeting-header[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 0 auto;\n  min-height: 72px;\n  padding: 12px 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  background: linear-gradient(180deg, rgba(10, 12, 16, .96), rgba(10, 12, 16, .82));\n  border-bottom: 1px solid rgba(255,255,255,.08);\n  backdrop-filter: blur(18px);\n  pointer-events: auto;\n}\n\n.meeting-identity[_ngcontent-%COMP%], .meeting-status[_ngcontent-%COMP%], .meeting-eyebrow[_ngcontent-%COMP%], .status-chip[_ngcontent-%COMP%], .header-action[_ngcontent-%COMP%], .meeting-dock[_ngcontent-%COMP%], .dock-control[_ngcontent-%COMP%] { display: flex; align-items: center; }\n.meeting-identity[_ngcontent-%COMP%] { gap: 12px; min-width: 0; }\n.meeting-brand[_ngcontent-%COMP%] {\n  width: 42px; height: 42px; border-radius: 13px;\n  display: grid; place-items: center; flex: 0 0 auto;\n  color: #17120a; background: linear-gradient(145deg, #f5c15d, $accent);\n  font-family: Georgia, serif; font-weight: 800; font-size: 21px;\n  box-shadow: 0 8px 24px rgba(232,168,56,.18);\n}\n.meeting-copy[_ngcontent-%COMP%] { min-width: 0; }\n.meeting-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 2px 0 0; font-size: 16px; line-height: 1.2; font-weight: 650;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 360px;\n}\n.meeting-eyebrow[_ngcontent-%COMP%] {\n  gap: 7px; color: $muted; font-size: 10px; font-weight: 700;\n  letter-spacing: .11em; text-transform: uppercase;\n}\n.live-dot[_ngcontent-%COMP%] { width: 7px; height: 7px; border-radius: 50%; background: #38c172; box-shadow: 0 0 0 4px rgba(56,193,114,.12); }\n.meeting-status[_ngcontent-%COMP%] { gap: 8px; flex: 0 0 auto; }\n.status-chip[_ngcontent-%COMP%], .header-action[_ngcontent-%COMP%] {\n  height: 38px; gap: 8px; padding: 0 12px; border-radius: 11px;\n  border: 1px solid rgba(255,255,255,.09); background: rgba(255,255,255,.065);\n  color: #e7e9ed; font-size: 12px; font-weight: 600;\n}\n.status-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .header-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .dock-control[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8;\n  stroke-linecap: round; stroke-linejoin: round;\n}\n.header-action[_ngcontent-%COMP%] { cursor: pointer; pointer-events: auto; transition: .18s ease; }\n.header-action[_ngcontent-%COMP%]:hover, .header-action.is-active[_ngcontent-%COMP%] { background: rgba(232,168,56,.13); border-color: rgba(232,168,56,.35); color: #f2c66f; }\n.header-action--admin[_ngcontent-%COMP%] { color: #f2c66f; }\n.quality-bars[_ngcontent-%COMP%] { display: flex; align-items: end; gap: 2px; height: 13px; }\n.quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { width: 3px; border-radius: 2px; background: #3fd17d; }\n.quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1){height:5px}.quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2){height:9px}.quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3){height:13px}\n.status-chip--medium[_ngcontent-%COMP%]   .quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3), .status-chip--low[_ngcontent-%COMP%]   .quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(n+2) { background: rgba(255,255,255,.2); }\n.status-chip--medium[_ngcontent-%COMP%]   .quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { background: #f4bd50; }\n.status-chip--low[_ngcontent-%COMP%]   .quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child { background: $danger; }\n.status-chip--critical[_ngcontent-%COMP%]   .quality-bars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { background: rgba(255,255,255,.2); }\n\n.meeting-stage-frame[_ngcontent-%COMP%] {\n  position: absolute; inset: 72px 0 86px;\n  border: 1px solid rgba(255,255,255,.06);\n  box-shadow: inset 0 0 90px rgba(0,0,0,.12);\n  transition: right .25s ease;\n}\n.meeting-stage-frame.with-panel[_ngcontent-%COMP%] { right: 390px; }\n\n.meeting-dock[_ngcontent-%COMP%] {\n  position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);\n  gap: 6px; padding: 7px;\n  max-width: calc(100vw - 24px);\n  border-radius: 18px; background: rgba(15,17,22,.92);\n  border: 1px solid rgba(255,255,255,.1);\n  box-shadow: 0 16px 50px rgba(0,0,0,.44);\n  backdrop-filter: blur(20px); pointer-events: auto;\n}\n.dock-control[_ngcontent-%COMP%] {\n  flex-direction: column; justify-content: center; gap: 4px;\n  min-width: 64px; height: 58px; padding: 5px 8px;\n  border: 0; border-radius: 12px; background: transparent; color: #d9dce2;\n  cursor: pointer; font-size: 10px; font-weight: 600; transition: .16s ease;\n}\n.dock-control[_ngcontent-%COMP%]:hover, .dock-control.is-active[_ngcontent-%COMP%] { background: rgba(255,255,255,.1); color: $white; }\n.dock-control.is-off[_ngcontent-%COMP%] { background: rgba(229,72,77,.17); color: #ff8589; }\n.dock-control--secondary[_ngcontent-%COMP%] { color: #b9bec8; }\n.dock-control--leave[_ngcontent-%COMP%] { margin-left: 4px; min-width: 74px; background: $danger; color: $white; }\n.dock-control--leave[_ngcontent-%COMP%]:hover { background: #f05b60; }\n.dock-icon[_ngcontent-%COMP%] { display: grid; place-items: center; width: 25px; height: 25px; }\n.dock-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 22px; height: 22px; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   \u00C9cran[_ngcontent-%COMP%]   de[_ngcontent-%COMP%]   chargement[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.rm-loading[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 72px 0 0;\n  z-index: 10001;\n  background: linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rm-loading__inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: $white;\n}\n\n.rm-loading__cross[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: $accent;\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n  line-height: 1;\n}\n\n.rm-loading__org[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 2.5px;\n  text-transform: uppercase;\n  color: $accent;\n  opacity: 0.9;\n  margin: 0;\n}\n\n.rm-loading__spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba($white, 0.1);\n  border-top-color: $accent;\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n\n.rm-loading__label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba($white, 0.7);\n  margin: 0;\n  font-weight: 400;\n}\n\n.rm-loading__meeting[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba($white, 0.4);\n  margin: 0;\n  letter-spacing: 0.3px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Animations[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@keyframes[_ngcontent-%COMP%]   spin[_ngcontent-%COMP%] {\n  to { transform: rotate(360deg); }\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% { opacity: 1; transform: scale(1); }\n  50%       { opacity: 0.6; transform: scale(0.92); }\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  0%, 100% { opacity: 1; }\n  50%       { opacity: 0.25; }\n}\n\n@media (max-width: 900px) {\n  .meeting-header[_ngcontent-%COMP%] { min-height: 64px; padding: 9px 12px; }\n  .meeting-brand[_ngcontent-%COMP%] { width: 38px; height: 38px; border-radius: 11px; }\n  .meeting-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { max-width: 210px; font-size: 14px; }\n  .status-label[_ngcontent-%COMP%], .header-action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .status-chip--timer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { display: none; }\n  .status-chip[_ngcontent-%COMP%], .header-action[_ngcontent-%COMP%] { width: 38px; padding: 0; justify-content: center; }\n  .status-chip--timer[_ngcontent-%COMP%] { width: auto; padding: 0 10px; }\n  .meeting-stage-frame[_ngcontent-%COMP%] { inset: 64px 0 82px; }\n  .meeting-stage-frame.with-panel[_ngcontent-%COMP%] { right: 0; }\n  .rm-loading[_ngcontent-%COMP%] { inset: 64px 0 0; }\n  .meeting-dock[_ngcontent-%COMP%] {\n    bottom: max(10px, env(safe-area-inset-bottom)); gap: 3px; padding: 6px;\n    width: calc(100vw - 16px); justify-content: space-between; overflow-x: auto;\n  }\n  .dock-control[_ngcontent-%COMP%] { min-width: 56px; height: 56px; flex: 0 0 56px; }\n  .dock-control--secondary[_ngcontent-%COMP%] { display: none; }\n  .dock-control--leave[_ngcontent-%COMP%] { min-width: 62px; flex-basis: 62px; }\n}\n\n@media (max-width: 520px) {\n  .meeting-eyebrow[_ngcontent-%COMP%] { display: none; }\n  .meeting-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { max-width: 120px; }\n  .meeting-status[_ngcontent-%COMP%] { gap: 5px; }\n  .status-chip[_ngcontent-%COMP%]:nth-of-type(3) { display: none; }\n  .dock-control[_ngcontent-%COMP%] { min-width: 52px; flex-basis: 52px; font-size: 9px; }\n  .dock-control[_ngcontent-%COMP%]:nth-child(3) { display: none; }\n}\n.bandwidth-alert[_ngcontent-%COMP%] {\n  position: fixed; z-index: 10001; top: 88px; left: 50%; transform: translateX(-50%);\n  width: min(560px, calc(100vw - 24px)); padding: 11px 14px; display: flex;\n  align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px;\n  color: #f6f7f9; background: rgba(37,41,48,.94); border: 1px solid rgba(232,168,56,.28);\n  box-shadow: 0 12px 35px rgba(0,0,0,.3);\n  div { display: flex; flex-direction: column; gap: 2px; }\n  strong { font-size: 12px; }\n  span { color: #abb2bc; font-size: 10px; }\n  a { color: #f2c66f; font-size: 11px; font-weight: 750; text-decoration: none; white-space: nowrap; }\n}\n@media (max-width: 640px) {\n  .bandwidth-alert[_ngcontent-%COMP%] { top: 76px; align-items: flex-start; flex-direction: column; gap: 8px; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReunionRoomComponent, [{
        type: Component,
        args: [{ selector: 'app-reunion-room', standalone: true, imports: [CommonModule, AdminControlsComponent, MeetingOverlayComponent, NetworkIndicatorComponent], template: "<section class=\"meeting-shell\">\n  <header class=\"meeting-header\">\n    <div class=\"meeting-identity\">\n      <div class=\"meeting-brand\" aria-hidden=\"true\">C</div>\n      <div class=\"meeting-copy\">\n        <div class=\"meeting-eyebrow\">\n          <span class=\"live-dot\"></span>\n          R\u00E9union en cours\n        </div>\n        <h1>{{ jitsiData?.meeting?.title }}</h1>\n      </div>\n    </div>\n\n    <div class=\"meeting-status\">\n      <div class=\"status-chip status-chip--timer\">\n        <svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/></svg>\n        {{ elapsedTime }}\n      </div>\n      <app-network-indicator [quality]=\"quality\"></app-network-indicator>\n      <div class=\"status-chip\">\n        <svg viewBox=\"0 0 24 24\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/></svg>\n        {{ participantCount }}\n      </div>\n      <button class=\"header-action header-action--admin\" *ngIf=\"isAdmin\"\n              [class.is-active]=\"showAdminPanel\" (click)=\"toggleAdminPanel()\">\n        <svg viewBox=\"0 0 24 24\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/><path d=\"m9 12 2 2 4-4\"/></svg>\n        <span>R\u00E9gie</span>\n      </button>\n      <button class=\"header-action\" (click)=\"toggleFloat()\">\n        <svg viewBox=\"0 0 24 24\"><path d=\"M8 3H5a2 2 0 0 0-2 2v3M16 21h3a2 2 0 0 0 2-2v-3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3\"/></svg>\n        <span>R\u00E9duire</span>\n      </button>\n    </div>\n  </header>\n\n  <div class=\"meeting-stage-frame\" [class.with-panel]=\"showAdminPanel\"></div>\n\n  <aside class=\"bandwidth-alert\" *ngIf=\"lowBandwidthMode\">\n    <div>\n      <strong>Mode connexion faible activ\u00E9</strong>\n      <span>La vid\u00E9o a \u00E9t\u00E9 coup\u00E9e pour pr\u00E9server le son.</span>\n    </div>\n    <a *ngIf=\"quality === 'critical' && dialIn\" [href]=\"'tel:' + dialIn.number\">\n      Appeler {{ dialIn.number }}<span *ngIf=\"dialIn.pin\"> \u00B7 code {{ dialIn.pin }}</span>\n    </a>\n  </aside>\n\n  <nav class=\"meeting-dock\" aria-label=\"Contr\u00F4les de la r\u00E9union\">\n    <button class=\"dock-control\" [class.is-off]=\"micMuted\" (click)=\"toggleMicrophone()\">\n      <span class=\"dock-icon\">\n        <svg *ngIf=\"!micMuted\" viewBox=\"0 0 24 24\"><rect x=\"9\" y=\"2\" width=\"6\" height=\"12\" rx=\"3\"/><path d=\"M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8\"/></svg>\n        <svg *ngIf=\"micMuted\" viewBox=\"0 0 24 24\"><path d=\"m3 3 18 18M9 9v2a3 3 0 0 0 5.1 2.1M15 9V5a3 3 0 0 0-5.8-1M17 16.8A7 7 0 0 0 19 10M5 10a7 7 0 0 0 10 6.3M12 17v4M8 21h8\"/></svg>\n      </span>\n      <span>{{ micMuted ? 'Activer' : 'Micro' }}</span>\n    </button>\n    <button class=\"dock-control\" [class.is-off]=\"cameraMuted\" (click)=\"toggleCamera()\">\n      <span class=\"dock-icon\">\n        <svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"6\" width=\"13\" height=\"12\" rx=\"2\"/><path d=\"m16 10 5-3v10l-5-3\"/></svg>\n      </span>\n      <span>{{ cameraMuted ? 'Activer' : 'Cam\u00E9ra' }}</span>\n    </button>\n    <button class=\"dock-control\" [class.is-active]=\"sharingScreen\" (click)=\"toggleScreenShare()\">\n      <span class=\"dock-icon\"><svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8M12 17v4M8 10l4-4 4 4M12 6v7\"/></svg></span>\n      <span>Pr\u00E9senter</span>\n    </button>\n    <button class=\"dock-control\" (click)=\"toggleChat()\">\n      <span class=\"dock-icon\"><svg viewBox=\"0 0 24 24\"><path d=\"M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z\"/><path d=\"M8 9h8M8 13h5\"/></svg></span>\n      <span>Discussion</span>\n    </button>\n    <button class=\"dock-control dock-control--secondary\" [class.is-active]=\"handRaised\" (click)=\"toggleRaiseHand()\">\n      <span class=\"dock-icon\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 11V6a2 2 0 0 1 4 0v4-6a2 2 0 0 1 4 0v6-4a2 2 0 0 1 4 0v8a8 8 0 0 1-8 8h-1a8 8 0 0 1-7-4l-2-4a2 2 0 0 1 3.4-2l2.6 3\"/></svg></span>\n      <span>Main</span>\n    </button>\n    <button class=\"dock-control dock-control--secondary\" [class.is-active]=\"tileView\" (click)=\"toggleTileView()\">\n      <span class=\"dock-icon\"><svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/></svg></span>\n      <span>Grille</span>\n    </button>\n    <button class=\"dock-control dock-control--secondary\" (click)=\"toggleFullscreen()\">\n      <span class=\"dock-icon\"><svg viewBox=\"0 0 24 24\"><path d=\"M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5\"/></svg></span>\n      <span>Plein \u00E9cran</span>\n    </button>\n    <button class=\"dock-control dock-control--leave\" (click)=\"leaveMeeting()\">\n      <span class=\"dock-icon\"><svg viewBox=\"0 0 24 24\"><path d=\"M4 14c5-4 11-4 16 0l-3 4-3-2v-3a12 12 0 0 0-4 0v3l-3 2z\"/></svg></span>\n      <span>Quitter</span>\n    </button>\n  </nav>\n</section>\n\n<!-- \u2550\u2550 \u00C9CRAN DE CHARGEMENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div class=\"rm-loading\" *ngIf=\"isConnecting\">\n  <div class=\"rm-loading__inner\">\n    <div class=\"rm-loading__cross\">\u271D</div>\n    <p class=\"rm-loading__org\">CMCIEA France</p>\n    <div class=\"rm-loading__spinner\"></div>\n    <p class=\"rm-loading__label\">Connexion en cours...</p>\n    <p class=\"rm-loading__meeting\">{{ jitsiData?.meeting?.title }}</p>\n  </div>\n</div>\n\n<!-- \u2550\u2550 PANNEAU MOD\u00C9RATEUR (slide depuis la droite) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<app-admin-controls\n  *ngIf=\"showAdminPanel && isAdmin && jitsiData\"\n  [meetingId]=\"jitsiData.meeting.id\"\n  [jitsiRoomId]=\"jitsiData.roomId\"\n  [jitsiApi]=\"meeting.jitsiApi\"\n  (close)=\"showAdminPanel = false\">\n</app-admin-controls>\n\n<!-- \u2550\u2550 OVERLAY SPIRITUEL / SONDAGES / PRI\u00C8RE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<app-meeting-overlay\n  *ngIf=\"jitsiData\"\n  [meetingId]=\"jitsiData.meeting.id\"\n  [isAdmin]=\"isAdmin\">\n</app-meeting-overlay>\n", styles: ["$accent: #e8a838;\n$dark: #111318;\n$panel: rgba(22, 25, 31, 0.92);\n$white: #fff;\n$muted: #aab0bb;\n$danger: #e5484d;\n\n.meeting-shell {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  pointer-events: none;\n  color: $white;\n  font-family: Inter, \"Segoe UI\", sans-serif;\n}\n\n.meeting-header {\n  position: absolute;\n  inset: 0 0 auto;\n  min-height: 72px;\n  padding: 12px 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  background: linear-gradient(180deg, rgba(10, 12, 16, .96), rgba(10, 12, 16, .82));\n  border-bottom: 1px solid rgba(255,255,255,.08);\n  backdrop-filter: blur(18px);\n  pointer-events: auto;\n}\n\n.meeting-identity, .meeting-status, .meeting-eyebrow, .status-chip,\n.header-action, .meeting-dock, .dock-control { display: flex; align-items: center; }\n.meeting-identity { gap: 12px; min-width: 0; }\n.meeting-brand {\n  width: 42px; height: 42px; border-radius: 13px;\n  display: grid; place-items: center; flex: 0 0 auto;\n  color: #17120a; background: linear-gradient(145deg, #f5c15d, $accent);\n  font-family: Georgia, serif; font-weight: 800; font-size: 21px;\n  box-shadow: 0 8px 24px rgba(232,168,56,.18);\n}\n.meeting-copy { min-width: 0; }\n.meeting-copy h1 {\n  margin: 2px 0 0; font-size: 16px; line-height: 1.2; font-weight: 650;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 360px;\n}\n.meeting-eyebrow {\n  gap: 7px; color: $muted; font-size: 10px; font-weight: 700;\n  letter-spacing: .11em; text-transform: uppercase;\n}\n.live-dot { width: 7px; height: 7px; border-radius: 50%; background: #38c172; box-shadow: 0 0 0 4px rgba(56,193,114,.12); }\n.meeting-status { gap: 8px; flex: 0 0 auto; }\n.status-chip, .header-action {\n  height: 38px; gap: 8px; padding: 0 12px; border-radius: 11px;\n  border: 1px solid rgba(255,255,255,.09); background: rgba(255,255,255,.065);\n  color: #e7e9ed; font-size: 12px; font-weight: 600;\n}\n.status-chip svg, .header-action svg, .dock-control svg {\n  width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8;\n  stroke-linecap: round; stroke-linejoin: round;\n}\n.header-action { cursor: pointer; pointer-events: auto; transition: .18s ease; }\n.header-action:hover, .header-action.is-active { background: rgba(232,168,56,.13); border-color: rgba(232,168,56,.35); color: #f2c66f; }\n.header-action--admin { color: #f2c66f; }\n.quality-bars { display: flex; align-items: end; gap: 2px; height: 13px; }\n.quality-bars i { width: 3px; border-radius: 2px; background: #3fd17d; }\n.quality-bars i:nth-child(1){height:5px}.quality-bars i:nth-child(2){height:9px}.quality-bars i:nth-child(3){height:13px}\n.status-chip--medium .quality-bars i:nth-child(3), .status-chip--low .quality-bars i:nth-child(n+2) { background: rgba(255,255,255,.2); }\n.status-chip--medium .quality-bars i { background: #f4bd50; }\n.status-chip--low .quality-bars i:first-child { background: $danger; }\n.status-chip--critical .quality-bars i { background: rgba(255,255,255,.2); }\n\n.meeting-stage-frame {\n  position: absolute; inset: 72px 0 86px;\n  border: 1px solid rgba(255,255,255,.06);\n  box-shadow: inset 0 0 90px rgba(0,0,0,.12);\n  transition: right .25s ease;\n}\n.meeting-stage-frame.with-panel { right: 390px; }\n\n.meeting-dock {\n  position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);\n  gap: 6px; padding: 7px;\n  max-width: calc(100vw - 24px);\n  border-radius: 18px; background: rgba(15,17,22,.92);\n  border: 1px solid rgba(255,255,255,.1);\n  box-shadow: 0 16px 50px rgba(0,0,0,.44);\n  backdrop-filter: blur(20px); pointer-events: auto;\n}\n.dock-control {\n  flex-direction: column; justify-content: center; gap: 4px;\n  min-width: 64px; height: 58px; padding: 5px 8px;\n  border: 0; border-radius: 12px; background: transparent; color: #d9dce2;\n  cursor: pointer; font-size: 10px; font-weight: 600; transition: .16s ease;\n}\n.dock-control:hover, .dock-control.is-active { background: rgba(255,255,255,.1); color: $white; }\n.dock-control.is-off { background: rgba(229,72,77,.17); color: #ff8589; }\n.dock-control--secondary { color: #b9bec8; }\n.dock-control--leave { margin-left: 4px; min-width: 74px; background: $danger; color: $white; }\n.dock-control--leave:hover { background: #f05b60; }\n.dock-icon { display: grid; place-items: center; width: 25px; height: 25px; }\n.dock-icon svg { width: 22px; height: 22px; }\n\n// \u2500\u2500 \u00C9cran de chargement \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.rm-loading {\n  position: fixed;\n  inset: 72px 0 0;\n  z-index: 10001;\n  background: linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rm-loading__inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: $white;\n}\n\n.rm-loading__cross {\n  font-size: 52px;\n  color: $accent;\n  animation: pulse 2s ease-in-out infinite;\n  line-height: 1;\n}\n\n.rm-loading__org {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 2.5px;\n  text-transform: uppercase;\n  color: $accent;\n  opacity: 0.9;\n  margin: 0;\n}\n\n.rm-loading__spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba($white, 0.1);\n  border-top-color: $accent;\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n\n.rm-loading__label {\n  font-size: 15px;\n  color: rgba($white, 0.7);\n  margin: 0;\n  font-weight: 400;\n}\n\n.rm-loading__meeting {\n  font-size: 12px;\n  color: rgba($white, 0.4);\n  margin: 0;\n  letter-spacing: 0.3px;\n}\n\n// \u2500\u2500 Animations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n@keyframes pulse {\n  0%, 100% { opacity: 1; transform: scale(1); }\n  50%       { opacity: 0.6; transform: scale(0.92); }\n}\n\n@keyframes blink {\n  0%, 100% { opacity: 1; }\n  50%       { opacity: 0.25; }\n}\n\n@media (max-width: 900px) {\n  .meeting-header { min-height: 64px; padding: 9px 12px; }\n  .meeting-brand { width: 38px; height: 38px; border-radius: 11px; }\n  .meeting-copy h1 { max-width: 210px; font-size: 14px; }\n  .status-label, .header-action span, .status-chip--timer svg { display: none; }\n  .status-chip, .header-action { width: 38px; padding: 0; justify-content: center; }\n  .status-chip--timer { width: auto; padding: 0 10px; }\n  .meeting-stage-frame { inset: 64px 0 82px; }\n  .meeting-stage-frame.with-panel { right: 0; }\n  .rm-loading { inset: 64px 0 0; }\n  .meeting-dock {\n    bottom: max(10px, env(safe-area-inset-bottom)); gap: 3px; padding: 6px;\n    width: calc(100vw - 16px); justify-content: space-between; overflow-x: auto;\n  }\n  .dock-control { min-width: 56px; height: 56px; flex: 0 0 56px; }\n  .dock-control--secondary { display: none; }\n  .dock-control--leave { min-width: 62px; flex-basis: 62px; }\n}\n\n@media (max-width: 520px) {\n  .meeting-eyebrow { display: none; }\n  .meeting-copy h1 { max-width: 120px; }\n  .meeting-status { gap: 5px; }\n  .status-chip:nth-of-type(3) { display: none; }\n  .dock-control { min-width: 52px; flex-basis: 52px; font-size: 9px; }\n  .dock-control:nth-child(3) { display: none; }\n}\n.bandwidth-alert {\n  position: fixed; z-index: 10001; top: 88px; left: 50%; transform: translateX(-50%);\n  width: min(560px, calc(100vw - 24px)); padding: 11px 14px; display: flex;\n  align-items: center; justify-content: space-between; gap: 16px; border-radius: 12px;\n  color: #f6f7f9; background: rgba(37,41,48,.94); border: 1px solid rgba(232,168,56,.28);\n  box-shadow: 0 12px 35px rgba(0,0,0,.3);\n  div { display: flex; flex-direction: column; gap: 2px; }\n  strong { font-size: 12px; }\n  span { color: #abb2bc; font-size: 10px; }\n  a { color: #f2c66f; font-size: 11px; font-weight: 750; text-decoration: none; white-space: nowrap; }\n}\n@media (max-width: 640px) {\n  .bandwidth-alert { top: 76px; align-items: flex-start; flex-direction: column; gap: 8px; }\n}\n"] }]
    }], () => [{ type: i1.MeetingService }, { type: i2.ReunionsService }, { type: i3.MemberAuthService }, { type: i4.AuthService }, { type: i5.Router }, { type: i0.NgZone }, { type: i6.MeetingSocketService }, { type: i7.NetworkQualityService }, { type: i8.MeetingReconnectService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReunionRoomComponent, { className: "ReunionRoomComponent", filePath: "app\\pages\\reunions\\reunion-room\\reunion-room.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=reunion-room.component.js.map