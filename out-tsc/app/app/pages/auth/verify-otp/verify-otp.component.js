import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/member-auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function VerifyOtpComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function VerifyOtpComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Valider le code");
    i0.ɵɵelementEnd();
} }
function VerifyOtpComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Connexion...");
    i0.ɵɵelementEnd();
} }
export class VerifyOtpComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.email = '';
        this.code = '';
        this.loading = false;
        this.error = '';
        this.redirectUrl = '/reunions';
    }
    ngOnInit() {
        var _a, _b;
        const state = history.state;
        this.email = (_a = state === null || state === void 0 ? void 0 : state.email) !== null && _a !== void 0 ? _a : '';
        this.redirectUrl = (_b = state === null || state === void 0 ? void 0 : state.redirectUrl) !== null && _b !== void 0 ? _b : '/reunions';
        if (!this.email)
            this.router.navigate(['/auth/login']);
    }
    submit() {
        if (this.code.length < 4)
            return;
        this.loading = true;
        this.error = '';
        this.auth.verifyOtp(this.email, this.code.trim()).subscribe({
            next: () => this.router.navigateByUrl(this.redirectUrl),
            error: () => { this.error = 'Code incorrect ou expiré. Réessayez.'; this.loading = false; },
        });
    }
    resend() {
        this.code = '';
        this.error = '';
        this.auth.sendOtp(this.email).subscribe({
            next: () => this.error = '',
            error: () => this.error = 'Erreur lors du renvoi.',
        });
    }
}
VerifyOtpComponent.ɵfac = function VerifyOtpComponent_Factory(t) { return new (t || VerifyOtpComponent)(i0.ɵɵdirectiveInject(i1.MemberAuthService), i0.ɵɵdirectiveInject(i2.Router)); };
VerifyOtpComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: VerifyOtpComponent, selectors: [["app-verify-otp"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 22, vars: 6, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-logo"], ["src", "assets/images/logo-cmciea-france.png", "alt", "CMCIEA France"], [1, "auth-subtitle"], [1, "auth-form", 3, "ngSubmit"], [1, "field"], ["for", "code"], ["id", "code", "type", "tel", "name", "code", "placeholder", "1234", "maxlength", "6", "autocomplete", "one-time-code", "autofocus", "", "required", "", 1, "input-code", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-primary", "btn-large", 3, "disabled"], [4, "ngIf"], ["type", "button", 1, "btn-link", 3, "click"], [1, "error-msg"]], template: function VerifyOtpComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h2");
        i0.ɵɵtext(5, "Code de connexion");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 4);
        i0.ɵɵtext(7, " Entrez le code \u00E0 4 chiffres envoy\u00E9 par SMS au num\u00E9ro associ\u00E9 \u00E0");
        i0.ɵɵelement(8, "br");
        i0.ɵɵelementStart(9, "strong");
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "form", 5);
        i0.ɵɵlistener("ngSubmit", function VerifyOtpComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        i0.ɵɵelementStart(12, "div", 6)(13, "label", 7);
        i0.ɵɵtext(14, "Code SMS");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "input", 8);
        i0.ɵɵtwoWayListener("ngModelChange", function VerifyOtpComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.code, $event) || (ctx.code = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(16, VerifyOtpComponent_div_16_Template, 2, 1, "div", 9);
        i0.ɵɵelementStart(17, "button", 10);
        i0.ɵɵtemplate(18, VerifyOtpComponent_span_18_Template, 2, 0, "span", 11)(19, VerifyOtpComponent_span_19_Template, 2, 0, "span", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "button", 12);
        i0.ɵɵlistener("click", function VerifyOtpComponent_Template_button_click_20_listener() { return ctx.resend(); });
        i0.ɵɵtext(21, " Renvoyer le code ");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate(ctx.email);
        i0.ɵɵadvance(5);
        i0.ɵɵtwoWayProperty("ngModel", ctx.code);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.error);
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", ctx.loading || ctx.code.length < 4);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
    } }, dependencies: [CommonModule, i3.NgIf, FormsModule, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.MaxLengthValidator, i4.NgModel, i4.NgForm], encapsulation: 2 });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VerifyOtpComponent, [{
        type: Component,
        args: [{ selector: 'app-verify-otp', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"auth-page\">\n  <div class=\"auth-card\">\n    <div class=\"auth-logo\">\n      <img src=\"assets/images/logo-cmciea-france.png\" alt=\"CMCIEA France\" />\n    </div>\n    <h2>Code de connexion</h2>\n    <p class=\"auth-subtitle\">\n      Entrez le code \u00E0 4 chiffres envoy\u00E9 par SMS au num\u00E9ro associ\u00E9 \u00E0<br/>\n      <strong>{{ email }}</strong>\n    </p>\n\n    <form (ngSubmit)=\"submit()\" class=\"auth-form\">\n      <div class=\"field\">\n        <label for=\"code\">Code SMS</label>\n        <input\n          id=\"code\"\n          type=\"tel\"\n          [(ngModel)]=\"code\"\n          name=\"code\"\n          placeholder=\"1234\"\n          maxlength=\"6\"\n          autocomplete=\"one-time-code\"\n          autofocus\n          class=\"input-code\"\n          required\n        />\n      </div>\n\n      <div class=\"error-msg\" *ngIf=\"error\">{{ error }}</div>\n\n      <button type=\"submit\" class=\"btn-primary btn-large\" [disabled]=\"loading || code.length < 4\">\n        <span *ngIf=\"!loading\">Valider le code</span>\n        <span *ngIf=\"loading\">Connexion...</span>\n      </button>\n\n      <button type=\"button\" class=\"btn-link\" (click)=\"resend()\">\n        Renvoyer le code\n      </button>\n    </form>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.MemberAuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(VerifyOtpComponent, { className: "VerifyOtpComponent", filePath: "app\\pages\\auth\\verify-otp\\verify-otp.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=verify-otp.component.js.map