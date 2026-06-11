import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/auth.service";
import * as i2 from "../services/member-auth.service";
export class AuthInterceptor {
    constructor(auth, memberAuth) {
        this.auth = auth;
        this.memberAuth = memberAuth;
    }
    intercept(req, next) {
        // Admin token takes priority so site admins get moderator rights in meetings
        const token = this.auth.getToken() || this.memberAuth.getToken();
        if (!token)
            return next.handle(req);
        return next.handle(req.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.MemberAuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable
    }], () => [{ type: i1.AuthService }, { type: i2.MemberAuthService }], null); })();
//# sourceMappingURL=auth.interceptor.js.map