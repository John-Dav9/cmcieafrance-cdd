import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    constructor(http) {
        this.http = http;
        this.TOKEN_KEY = 'cmciea_token';
        this.currentUser$ = new BehaviorSubject(this.loadUser());
    }
    loadUser() {
        try {
            const raw = localStorage.getItem(this.TOKEN_KEY);
            return raw ? JSON.parse(raw) : null;
        }
        catch (_a) {
            return null;
        }
    }
    login(email, password) {
        return this.http.post(`${environment.apiBase}/auth/login`, { email, password }).pipe(tap(result => {
            if ('access_token' in result)
                this.setSession(result);
        }));
    }
    verifyAdminLogin(challenge, code) {
        return this.http.post(`${environment.apiBase}/auth/login/verify`, { challenge, code }).pipe(tap(user => this.setSession(user)));
    }
    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.currentUser$.next(null);
    }
    revokeSession() {
        return this.http.post(`${environment.apiBase}/auth/logout`, {});
    }
    getToken() {
        var _a, _b;
        return (_b = (_a = this.currentUser$.value) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null;
    }
    isLoggedIn() {
        const user = this.currentUser$.value;
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
        const role = (_a = this.currentUser$.value) === null || _a === void 0 ? void 0 : _a.role;
        return role === 'admin' || role === 'super_admin';
    }
    isSuperAdmin() {
        var _a;
        return ((_a = this.currentUser$.value) === null || _a === void 0 ? void 0 : _a.role) === 'super_admin';
    }
    get user() {
        return this.currentUser$.value;
    }
    get user$() {
        return this.currentUser$.asObservable();
    }
    setSession(user) {
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(user));
        this.currentUser$.next(user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=auth.service.js.map