import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class MeetingService {
    constructor(zone, router) {
        this.zone = zone;
        this.router = router;
        this._isActive = new BehaviorSubject(false);
        this._isFloating = new BehaviorSubject(false);
        this._isConnecting = new BehaviorSubject(true);
        this._title = new BehaviorSubject('');
        this._timer = new BehaviorSubject('00:00');
        this._quality = new BehaviorSubject('high');
        this.isActive$ = this._isActive.asObservable();
        this.isFloating$ = this._isFloating.asObservable();
        this.isConnecting$ = this._isConnecting.asObservable();
        this.title$ = this._title.asObservable();
        this.timer$ = this._timer.asObservable();
        this.quality$ = this._quality.asObservable();
        this.jitsiApi = null;
        this.currentMeetingData = null;
        this.elapsed = 0;
        this.timerRef = null;
    }
    // ── Démarrer la réunion ────────────────────────────────
    startMeeting(title) {
        this._title.next(title);
        this._isActive.next(true);
        this._isConnecting.next(true);
        this._isFloating.next(false);
    }
    // ── Appelé quand Jitsi confirme la connexion ──────────
    onJoined(api) {
        this.jitsiApi = api;
        this._isConnecting.next(false);
        this.startTimer();
    }
    // ── Basculer mode flottant ────────────────────────────
    setFloating(val) {
        this._isFloating.next(val);
    }
    get isFloating() {
        return this._isFloating.value;
    }
    get isActive() {
        return this._isActive.value;
    }
    // ── Terminer la réunion ───────────────────────────────
    endMeeting() {
        var _a;
        (_a = this.jitsiApi) === null || _a === void 0 ? void 0 : _a.dispose();
        this.jitsiApi = null;
        this._isActive.next(false);
        this._isFloating.next(false);
        this._isConnecting.next(true);
        this._title.next('');
        this.stopTimer();
        this.router.navigate(['/reunions']);
    }
    // ── Quitter (raccourci hangup) ────────────────────────
    hangup() {
        var _a;
        (_a = this.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('hangup');
    }
    // ── Qualité réseau ────────────────────────────────────
    setQuality(q) {
        this._quality.next(q);
    }
    // ── Timer ─────────────────────────────────────────────
    startTimer() {
        this.elapsed = 0;
        this.timerRef = setInterval(() => {
            this.zone.run(() => {
                this.elapsed++;
                const h = Math.floor(this.elapsed / 3600);
                const m = Math.floor((this.elapsed % 3600) / 60).toString().padStart(2, '0');
                const s = (this.elapsed % 60).toString().padStart(2, '0');
                this._timer.next(h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`);
            });
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.timerRef);
        this._timer.next('00:00');
        this.elapsed = 0;
    }
}
MeetingService.ɵfac = function MeetingService_Factory(t) { return new (t || MeetingService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1.Router)); };
MeetingService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MeetingService, factory: MeetingService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeetingService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i0.NgZone }, { type: i1.Router }], null); })();
//# sourceMappingURL=meeting.service.js.map