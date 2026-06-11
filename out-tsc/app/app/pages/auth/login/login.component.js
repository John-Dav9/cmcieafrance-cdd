import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/member-auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function LoginComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Continuer \u2192");
    i0.ɵɵelementEnd();
} }
function LoginComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "V\u00E9rification...");
    i0.ɵɵelementEnd();
} }
export class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.email = '';
        this.loading = false;
        this.error = '';
    }
    submit() {
        if (!this.email.trim())
            return;
        this.loading = true;
        this.error = '';
        this.auth.checkEmail(this.email.trim().toLowerCase()).subscribe({
            next: (res) => {
                if (!res.exists) {
                    if (!res.isOpen) {
                        this.error = 'Les inscriptions sont fermées. Contactez-nous.';
                        this.loading = false;
                        return;
                    }
                    this.router.navigate(['/auth/register'], { state: { email: this.email } });
                    return;
                }
                this.auth.sendOtp(this.email.trim().toLowerCase()).subscribe({
                    next: (otp) => {
                        if (otp.method === 'sms') {
                            this.router.navigate(['/auth/verify-otp'], { state: { email: this.email, method: 'sms' } });
                        }
                        else {
                            this.router.navigate(['/auth/magic-link-sent'], { state: { email: this.email } });
                        }
                    },
                    error: () => { this.error = 'Erreur lors de l\'envoi. Réessayez.'; this.loading = false; },
                });
            },
            error: () => { this.error = 'Erreur de connexion. Réessayez.'; this.loading = false; },
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.MemberAuthService), i0.ɵɵdirectiveInject(i2.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 17, vars: 5, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-logo"], ["src", "assets/images/logo-cmciea-france.png", "alt", "CMCIEA France"], [1, "auth-subtitle"], [1, "auth-form", 3, "ngSubmit"], [1, "field"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "placeholder", "votre@email.com", "autocomplete", "email", "autofocus", "", "required", "", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-primary", "btn-large", 3, "disabled"], [4, "ngIf"], [1, "error-msg"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h2");
        i0.ɵɵtext(5, "Rejoindre la r\u00E9union");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 4);
        i0.ɵɵtext(7, "Entrez votre adresse email pour continuer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "form", 5);
        i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.submit(); });
        i0.ɵɵelementStart(9, "div", 6)(10, "label", 7);
        i0.ɵɵtext(11, "Adresse email");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 8);
        i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(13, LoginComponent_div_13_Template, 2, 1, "div", 9);
        i0.ɵɵelementStart(14, "button", 10);
        i0.ɵɵtemplate(15, LoginComponent_span_15_Template, 2, 0, "span", 11)(16, LoginComponent_span_16_Template, 2, 0, "span", 11);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵtwoWayProperty("ngModel", ctx.email);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.error);
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", ctx.loading || !ctx.email.trim());
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
    } }, dependencies: [CommonModule, i3.NgIf, FormsModule, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm], encapsulation: 2 });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"auth-page\">\n  <div class=\"auth-card\">\n    <div class=\"auth-logo\">\n      <img src=\"assets/images/logo-cmciea-france.png\" alt=\"CMCIEA France\" />\n    </div>\n    <h2>Rejoindre la r\u00E9union</h2>\n    <p class=\"auth-subtitle\">Entrez votre adresse email pour continuer</p>\n\n    <form (ngSubmit)=\"submit()\" class=\"auth-form\">\n      <div class=\"field\">\n        <label for=\"email\">Adresse email</label>\n        <input\n          id=\"email\"\n          type=\"email\"\n          [(ngModel)]=\"email\"\n          name=\"email\"\n          placeholder=\"votre@email.com\"\n          autocomplete=\"email\"\n          autofocus\n          required\n        />\n      </div>\n\n      <div class=\"error-msg\" *ngIf=\"error\">{{ error }}</div>\n\n      <button type=\"submit\" class=\"btn-primary btn-large\" [disabled]=\"loading || !email.trim()\">\n        <span *ngIf=\"!loading\">Continuer \u2192</span>\n        <span *ngIf=\"loading\">V\u00E9rification...</span>\n      </button>\n    </form>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.MemberAuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\pages\\auth\\login\\login.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=login.component.js.map