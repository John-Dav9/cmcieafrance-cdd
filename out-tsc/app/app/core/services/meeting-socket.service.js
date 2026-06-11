import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { io } from 'socket.io-client';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "./member-auth.service";
export class MeetingSocketService {
    constructor(auth, memberAuth) {
        this.auth = auth;
        this.memberAuth = memberAuth;
        this.socket = null;
        this.joinedMeetingId = null;
        this.participantCount$ = new BehaviorSubject(0);
        this.spiritualEvent$ = new BehaviorSubject(null);
        this.spiritualDismiss$ = new Subject();
        this.pollStarted$ = new Subject();
        this.pollResults$ = new Subject();
        this.pollClosed$ = new Subject();
        this.prayerReceived$ = new Subject();
        this.prayerSupport$ = new Subject();
        this.recordingStatus$ = new Subject();
        this.streamingStatus$ = new Subject();
        this.mediaCommand$ = new Subject();
        this.meetingEnded$ = new Subject();
    }
    connect(meetingId) {
        var _a;
        if ((_a = this.socket) === null || _a === void 0 ? void 0 : _a.connected)
            return;
        const wsUrl = environment.apiBase.replace('/api', '');
        const token = this.auth.getToken() || this.memberAuth.getToken();
        this.socket = io(`${wsUrl}/meetings`, {
            transports: ['websocket'],
            auth: { token },
        });
        this.socket.on('connect', () => {
            this.socket.emit('join-meeting', { meetingId }, (response) => {
                if (response === null || response === void 0 ? void 0 : response.joined)
                    this.joinedMeetingId = meetingId;
            });
        });
        this.socket.on('participant-count', (d) => {
            this.participantCount$.next(d.count);
        });
        this.socket.on('spiritual-event', (e) => {
            this.spiritualEvent$.next(e);
        });
        this.socket.on('spiritual-dismissed', () => {
            this.spiritualEvent$.next(null);
            this.spiritualDismiss$.next();
        });
        this.socket.on('poll-started', (p) => {
            this.pollStarted$.next(p);
        });
        this.socket.on('poll-results', (r) => {
            this.pollResults$.next(r);
        });
        this.socket.on('poll-closed', (r) => {
            this.pollClosed$.next(r);
        });
        this.socket.on('prayer-received', (p) => {
            this.prayerReceived$.next(p);
        });
        this.socket.on('prayer-support', (d) => {
            this.prayerSupport$.next(d);
        });
        this.socket.on('recording-status', (d) => {
            this.recordingStatus$.next(d);
        });
        this.socket.on('streaming-status', (d) => {
            this.streamingStatus$.next(d);
        });
        this.socket.on('media-command', (command) => {
            this.mediaCommand$.next(command);
        });
        this.socket.on('meeting-ended', () => {
            this.spiritualEvent$.next(null);
            this.meetingEnded$.next();
        });
    }
    disconnect(meetingId) {
        var _a, _b;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('leave-meeting', { meetingId });
        (_b = this.socket) === null || _b === void 0 ? void 0 : _b.disconnect();
        this.socket = null;
        this.joinedMeetingId = null;
    }
    // ── Émissions admin ────────────────────────────────────────────────────────
    showVerse(meetingId, reference, content, backgroundId) {
        return this.emitWithAck('show-verse', { meetingId, reference, content, backgroundId });
    }
    showLyrics(meetingId, title, lines, backgroundId) {
        return this.emitWithAck('show-lyrics', { meetingId, title, lines, backgroundId });
    }
    showAnnouncement(meetingId, message, backgroundId) {
        return this.emitWithAck('show-announcement', { meetingId, message, backgroundId });
    }
    dismissSpiritualEvent(meetingId) {
        return this.emitWithAck('dismiss-spiritual', { meetingId });
    }
    sendPrayerRequest(meetingId, author, text) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('prayer-request', { meetingId, author, text });
    }
    joinPrayer(meetingId, prayerId, author) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('prayer-joined', { meetingId, prayerId, author });
    }
    startPoll(meetingId, question, options, durationSeconds) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('start-poll', {
            meetingId,
            poll: { question, options, durationSeconds },
        });
    }
    answerPoll(meetingId, pollId, optionIndex) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('poll-answer', { meetingId, pollId, optionIndex });
    }
    closePoll(meetingId) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('close-poll', { meetingId });
    }
    reportMediaStatus(meetingId, mode, status, error) {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.emit('media-status', { meetingId, mode, status, error });
    }
    emitWithAck(event, payload) {
        return new Promise((resolve, reject) => {
            var _a;
            if (!((_a = this.socket) === null || _a === void 0 ? void 0 : _a.connected) || this.joinedMeetingId !== payload.meetingId) {
                reject(new Error('La régie n’est pas connectée à la réunion.'));
                return;
            }
            this.socket.timeout(5000).emit(event, payload, (error, response) => {
                if (error)
                    reject(new Error('Le serveur n’a pas confirmé la diffusion.'));
                else
                    resolve(response);
            });
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
}
MeetingSocketService.ɵfac = function MeetingSocketService_Factory(t) { return new (t || MeetingSocketService)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.MemberAuthService)); };
MeetingSocketService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MeetingSocketService, factory: MeetingSocketService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeetingSocketService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.AuthService }, { type: i2.MemberAuthService }], null); })();
//# sourceMappingURL=meeting-socket.service.js.map