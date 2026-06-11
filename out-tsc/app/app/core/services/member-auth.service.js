import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class MemberAuthService {
    constructor(http) {
        this.http = http;
        this.TOKEN_KEY = 'cmciea_member_token';
        this.currentMember$ = new BehaviorSubject(this.loadMember());
    }
    loadMember() {
        try {
            const raw = localStorage.getItem(this.TOKEN_KEY);
            return raw ? JSON.parse(raw) : null;
        }
        catch (_a) {
            return null;
        }
    }
    // ── Vérifier si l'email existe en BDD ────────────────────
    checkEmail(email) {
        return this.http.post(`${environment.apiBase}/auth/check-email`, { email });
    }
    // ── Inscription rapide (nouveau membre) ───────────────────
    register(data) {
        return this.http.post(`${environment.apiBase}/auth/register`, data).pipe(tap(res => this.setSession(res)));
    }
    guest(displayName) {
        return this.http.post(`${environment.apiBase}/auth/guest`, { displayName }).pipe(tap(res => this.setSession(res)));
    }
    acceptMeetingInvite(token) {
        return this.http.post(`${environment.apiBase}/reunions/invitations/accept`, { token }).pipe(tap(res => this.setSession(Object.assign(Object.assign({}, res), { member: Object.assign(Object.assign({}, res.member), { meetingModeratorFor: res.meetingId }) }))));
    }
    // ── Anciens endpoints (conservés pour compatibilité) ──────
    sendOtp(email) {
        return this.http.post(`${environment.apiBase}/auth/send-otp`, { email });
    }
    verifyOtp(email, code) {
        return this.http.post(`${environment.apiBase}/auth/verify-otp`, { email, code }).pipe(tap(res => this.setSession(res)));
    }
    verifyMagicLink(token) {
        return this.http.post(`${environment.apiBase}/auth/magic-link/verify`, { token }).pipe(tap(res => this.setSession(res)));
    }
    // ── Session ───────────────────────────────────────────────
    setSession(res) {
        const user = Object.assign(Object.assign({}, res.member), { access_token: res.access_token });
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(user));
        this.currentMember$.next(user);
    }
    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.currentMember$.next(null);
    }
    getToken() {
        var _a, _b;
        return (_b = (_a = this.currentMember$.value) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null;
    }
    isLoggedIn() {
        const user = this.currentMember$.value;
        if (!user)
            return false;
        try {
            const payload = JSON.parse(atob(user.access_token.split('.')[1]));
            if (payload.exp * 1000 < Date.now()) {
                this.logout();
                return false;
            }
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    isAdmin() {
        var _a;
        const role = (_a = this.currentMember$.value) === null || _a === void 0 ? void 0 : _a.role;
        return role === 'admin' || role === 'super_admin';
    }
    get member() { return this.currentMember$.value; }
    get member$() { return this.currentMember$.asObservable(); }
}
MemberAuthService.ɵfac = function MemberAuthService_Factory(t) { return new (t || MemberAuthService)(i0.ɵɵinject(i1.HttpClient)); };
MemberAuthService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MemberAuthService, factory: MemberAuthService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MemberAuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=member-auth.service.js.map