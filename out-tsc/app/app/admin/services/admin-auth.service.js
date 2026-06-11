import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { MemberAuthService } from '../../core/services/member-auth.service';
import * as i0 from "@angular/core";
export class AdminAuthService {
    constructor() {
        this.authService = inject(AuthService);
        this.memberAuth = inject(MemberAuthService);
        this.router = inject(Router);
        this.user$ = this.authService.user$;
    }
    login(email, password) {
        return this.authService.login(email, password);
    }
    verifyLogin(challenge, code) {
        return this.authService.verifyAdminLogin(challenge, code);
    }
    async logout() {
        await firstValueFrom(this.authService.revokeSession()).catch(() => undefined);
        this.authService.logout();
        this.memberAuth.logout();
        this.router.navigate(['/espace-admin/login']);
    }
    getToken() {
        return this.authService.getToken() || (this.memberAuth.isAdmin() ? this.memberAuth.getToken() : null);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn() || (this.memberAuth.isLoggedIn() && this.memberAuth.isAdmin());
    }
    isDevLoggedIn() {
        return false;
    }
}
AdminAuthService.ɵfac = function AdminAuthService_Factory(t) { return new (t || AdminAuthService)(); };
AdminAuthService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminAuthService, factory: AdminAuthService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=admin-auth.service.js.map