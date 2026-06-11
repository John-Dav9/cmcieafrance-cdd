import { Injectable } from '@angular/core';
import { firstValueFrom, interval } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./reunions.service";
export class MeetingReconnectService {
    constructor(reunions) {
        this.reunions = reunions;
        this.heartbeat = null;
        this.meetingId = null;
        this.participantId = null;
    }
    start(meetingId, participantId, reconnectToken) {
        this.stop(false);
        this.meetingId = meetingId;
        this.participantId = participantId;
        sessionStorage.setItem(this.storageKey(meetingId), reconnectToken);
        this.sendHeartbeat();
        this.heartbeat = interval(15000).subscribe(() => this.sendHeartbeat());
    }
    async reconnect(meetingId, reconnectToken) {
        var _a;
        const token = reconnectToken !== null && reconnectToken !== void 0 ? reconnectToken : sessionStorage.getItem(this.storageKey(meetingId));
        if (!token)
            return false;
        for (let attempt = 0; attempt < 3; attempt++) {
            if (attempt > 0)
                await this.wait(5000);
            try {
                const result = await firstValueFrom(this.reunions.reconnect(meetingId, token));
                if (result === null || result === void 0 ? void 0 : result.restored) {
                    const participantId = (_a = this.participantId) !== null && _a !== void 0 ? _a : sessionStorage.getItem(this.participantStorageKey(meetingId));
                    if (participantId)
                        this.start(meetingId, participantId, token);
                    return true;
                }
            }
            catch (_b) {
                // The next attempt is intentionally delayed.
            }
        }
        return false;
    }
    stop(clearToken = true) {
        var _a;
        (_a = this.heartbeat) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.heartbeat = null;
        if (clearToken && this.meetingId) {
            sessionStorage.removeItem(this.storageKey(this.meetingId));
            sessionStorage.removeItem(this.participantStorageKey(this.meetingId));
        }
        this.meetingId = null;
        this.participantId = null;
    }
    sendHeartbeat() {
        if (!this.meetingId || !this.participantId)
            return;
        sessionStorage.setItem(this.participantStorageKey(this.meetingId), this.participantId);
        this.reunions.heartbeat(this.meetingId, this.participantId).subscribe({ error: () => undefined });
    }
    storageKey(meetingId) {
        return `cmciea_meeting_reconnect_${meetingId}`;
    }
    participantStorageKey(meetingId) {
        return `cmciea_meeting_participant_${meetingId}`;
    }
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
MeetingReconnectService.ɵfac = function MeetingReconnectService_Factory(t) { return new (t || MeetingReconnectService)(i0.ɵɵinject(i1.ReunionsService)); };
MeetingReconnectService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MeetingReconnectService, factory: MeetingReconnectService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeetingReconnectService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.ReunionsService }], null); })();
//# sourceMappingURL=meeting-reconnect.service.js.map