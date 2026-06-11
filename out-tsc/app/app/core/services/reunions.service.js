import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ReunionsService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${environment.apiBase}/reunions`);
    }
    getAllAdmin() {
        return this.http.get(`${environment.apiBase}/reunions/admin/all`);
    }
    getCurrent() {
        return this.http.get(`${environment.apiBase}/reunions/current`);
    }
    getUpcoming() {
        return this.http.get(`${environment.apiBase}/reunions/upcoming`);
    }
    getCalendar(from, to) {
        const params = new URLSearchParams({
            from: from.toISOString(),
            to: to.toISOString(),
        });
        return this.http.get(`${environment.apiBase}/reunions/calendar?${params}`);
    }
    getOne(id) {
        return this.http.get(`${environment.apiBase}/reunions/${id}`);
    }
    create(data) {
        return this.http.post(`${environment.apiBase}/reunions`, data);
    }
    update(id, data) {
        return this.http.put(`${environment.apiBase}/reunions/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${environment.apiBase}/reunions/${id}`);
    }
    join(id) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/join`, {});
    }
    getAdmissionStatus(id, participantId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/admission/status`, { participantId });
    }
    end(id) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/end`, {});
    }
    startRecording(id) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/record/start`, {});
    }
    stopRecording(id) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/record/stop`, {});
    }
    getRecordingStatus(id) {
        return this.http.get(`${environment.apiBase}/reunions/${id}/record/status`);
    }
    heartbeat(id, participantId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/heartbeat`, { participantId });
    }
    registerParticipantSession(id, participantId, jitsiParticipantId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/participant-session`, { participantId, jitsiParticipantId });
    }
    reconnect(id, token) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/reconnect`, { token });
    }
    getParticipants(id) {
        return this.http.get(`${environment.apiBase}/reunions/${id}/participants`);
    }
    getWaitingParticipants(id) {
        return this.http.get(`${environment.apiBase}/reunions/${id}/waiting-participants`);
    }
    admitParticipant(id, participantId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/admit/${participantId}`, {});
    }
    rejectParticipant(id, participantId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/reject/${participantId}`, {});
    }
    sendReminders(id) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/send-reminders`, {});
    }
    muteParticipant(id, participantJitsiId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/mute/${participantJitsiId}`, {});
    }
    kickParticipant(id, participantId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/kick/${participantId}`, {});
    }
    grantModerator(id, memberId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/grant-moderator/${memberId}`, {});
    }
    createModeratorInvite(id, memberId) {
        return this.http.post(`${environment.apiBase}/reunions/${id}/invitations`, { memberId });
    }
    getModeratorInvites(id) {
        return this.http.get(`${environment.apiBase}/reunions/${id}/invitations`);
    }
    revokeModeratorInvite(id, inviteId) {
        return this.http.delete(`${environment.apiBase}/reunions/${id}/invitations/${inviteId}`);
    }
}
ReunionsService.ɵfac = function ReunionsService_Factory(t) { return new (t || ReunionsService)(i0.ɵɵinject(i1.HttpClient)); };
ReunionsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ReunionsService, factory: ReunionsService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReunionsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=reunions.service.js.map