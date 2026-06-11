import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "label");
    i0.ɵɵtext(2, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 10);
    i0.ɵɵelementEnd();
} }
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "label");
    i0.ɵɵtext(2, "Mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 11);
    i0.ɵɵelementEnd();
} }
function LoginComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "Un code de s\u00E9curit\u00E9 a \u00E9t\u00E9 envoy\u00E9 \u00E0 ");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, ".");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9)(7, "label");
    i0.ɵɵtext(8, "Code de s\u00E9curit\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.emailHint);
} }
function LoginComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function LoginComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function LoginComponent_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.restart()); });
    i0.ɵɵtext(1, " Revenir \u00E0 la connexion ");
    i0.ɵɵelementEnd();
} }
export class LoginComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.auth = inject(AdminAuthService);
        this.router = inject(Router);
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            code: [''],
        });
        this.loading = false;
        this.error = '';
        this.challenge = '';
        this.emailHint = '';
    }
    get waitingForCode() { return !!this.challenge; }
    submit() {
        if (this.waitingForCode) {
            this.verifyCode();
            return;
        }
        if (this.form.controls.email.invalid || this.form.controls.password.invalid)
            return;
        this.loading = true;
        this.error = '';
        const { email, password } = this.form.value;
        this.auth.login(email, password).subscribe({
            next: result => {
                if ('requires_2fa' in result) {
                    this.challenge = result.challenge;
                    this.emailHint = result.email_hint;
                    this.form.controls.code.setValidators([
                        Validators.required,
                        Validators.pattern(/^\d{6}$/),
                    ]);
                    this.form.controls.code.updateValueAndValidity();
                    this.loading = false;
                    return;
                }
                this.router.navigate(['/espace-admin/dashboard']);
            },
            error: err => {
                var _a, _b;
                this.error = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Email ou mot de passe incorrect.';
                this.loading = false;
            },
        });
    }
    verifyCode() {
        var _a, _b;
        const code = (_b = (_a = this.form.controls.code.value) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
        if (!/^\d{6}$/.test(code)) {
            this.error = 'Saisissez le code à 6 chiffres reçu par email.';
            return;
        }
        this.loading = true;
        this.error = '';
        this.auth.verifyLogin(this.challenge, code).subscribe({
            next: () => this.router.navigate(['/espace-admin/dashboard']),
            error: err => {
                var _a, _b;
                this.error = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Code invalide ou expiré.';
                this.loading = false;
            },
        });
    }
    restart() {
        this.challenge = '';
        this.emailHint = '';
        this.form.controls.code.clearValidators();
        this.form.controls.code.setValue('');
        this.form.controls.code.updateValueAndValidity();
        this.error = '';
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-admin-login"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 8, consts: [[1, "login-page"], [1, "login-card"], [1, "login-header"], [1, "login-form", 3, "ngSubmit", "formGroup"], ["class", "field", 4, "ngIf"], [4, "ngIf"], ["class", "error", 4, "ngIf"], ["type", "submit", 1, "btn-login", 3, "disabled"], ["type", "button", "class", "btn-login", "style", "margin-top:10px;background:#e5e7eb;color:#374151", 3, "click", 4, "ngIf"], [1, "field"], ["type", "email", "formControlName", "email", "placeholder", "admin@cmciea-france.com", "autocomplete", "email"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password"], ["type", "text", "formControlName", "code", "inputmode", "numeric", "maxlength", "6", "placeholder", "000000", "autocomplete", "one-time-code", "autofocus", ""], [1, "error"], ["type", "button", 1, "btn-login", 2, "margin-top", "10px", "background", "#e5e7eb", "color", "#374151", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        i0.ɵɵtext(4, "CMCIEA");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Espace administration");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "form", 3);
        i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        i0.ɵɵtemplate(8, LoginComponent_div_8_Template, 4, 0, "div", 4)(9, LoginComponent_div_9_Template, 4, 0, "div", 4)(10, LoginComponent_ng_container_10_Template, 10, 1, "ng-container", 5)(11, LoginComponent_p_11_Template, 2, 1, "p", 6);
        i0.ɵɵelementStart(12, "button", 7);
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, LoginComponent_button_14_Template, 2, 0, "button", 8);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.waitingForCode);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.waitingForCode);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.waitingForCode);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.error);
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", ctx.loading || (ctx.waitingForCode ? ctx.form.controls.code.invalid : ctx.form.controls.email.invalid || ctx.form.controls.password.invalid));
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.loading ? "V\u00E9rification..." : ctx.waitingForCode ? "Valider le code" : "Se connecter", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.waitingForCode);
    } }, dependencies: [CommonModule, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName], styles: [".login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #1a1f2e;\n  font-family: 'Inter', sans-serif;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 40px;\n  width: 100%;\n  max-width: 380px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.3);\n}\n\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1f2e;\n  letter-spacing: 2px;\n}\n\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8b93a8;\n  margin-top: 4px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.login-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 16px; }\n\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #3d4663;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n  transition: border 0.15s;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus { border-color: #4f7dff; }\n\n.error[_ngcontent-%COMP%] {\n  color: #ef5350;\n  font-size: 13px;\n  text-align: center;\n}\n\n.btn-login[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #1a1f2e;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  letter-spacing: 0.5px;\n  transition: background 0.15s;\n  margin-top: 4px;\n}\n\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) { background: #4f7dff; }\n.btn-login[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-login', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"login-page\">\n  <div class=\"login-card\">\n    <div class=\"login-header\">\n      <h1>CMCIEA</h1>\n      <p>Espace administration</p>\n    </div>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" class=\"login-form\">\n      <div class=\"field\" *ngIf=\"!waitingForCode\">\n        <label>Email</label>\n        <input type=\"email\" formControlName=\"email\" placeholder=\"admin@cmciea-france.com\" autocomplete=\"email\" />\n      </div>\n\n      <div class=\"field\" *ngIf=\"!waitingForCode\">\n        <label>Mot de passe</label>\n        <input type=\"password\" formControlName=\"password\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\" autocomplete=\"current-password\" />\n      </div>\n\n      <ng-container *ngIf=\"waitingForCode\">\n        <p>Un code de s\u00E9curit\u00E9 a \u00E9t\u00E9 envoy\u00E9 \u00E0 <strong>{{ emailHint }}</strong>.</p>\n        <div class=\"field\">\n          <label>Code de s\u00E9curit\u00E9</label>\n          <input type=\"text\" formControlName=\"code\" inputmode=\"numeric\" maxlength=\"6\"\n                 placeholder=\"000000\" autocomplete=\"one-time-code\" autofocus />\n        </div>\n      </ng-container>\n\n      <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n\n      <button type=\"submit\"\n              [disabled]=\"loading || (waitingForCode ? form.controls.code.invalid : form.controls.email.invalid || form.controls.password.invalid)\"\n              class=\"btn-login\">\n        {{ loading ? 'V\u00E9rification...' : (waitingForCode ? 'Valider le code' : 'Se connecter') }}\n      </button>\n      <button type=\"button\" *ngIf=\"waitingForCode\" (click)=\"restart()\" class=\"btn-login\"\n              style=\"margin-top:10px;background:#e5e7eb;color:#374151\">\n        Revenir \u00E0 la connexion\n      </button>\n    </form>\n  </div>\n</div>\n", styles: [".login-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #1a1f2e;\n  font-family: 'Inter', sans-serif;\n}\n\n.login-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 40px;\n  width: 100%;\n  max-width: 380px;\n  box-shadow: 0 20px 60px rgba(0,0,0,0.3);\n}\n\n.login-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n\n.login-header h1 {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a1f2e;\n  letter-spacing: 2px;\n}\n\n.login-header p {\n  font-size: 13px;\n  color: #8b93a8;\n  margin-top: 4px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.login-form { display: flex; flex-direction: column; gap: 16px; }\n\n.field { display: flex; flex-direction: column; gap: 6px; }\n\n.field label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #3d4663;\n}\n\n.field input {\n  padding: 10px 14px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n  transition: border 0.15s;\n}\n\n.field input:focus { border-color: #4f7dff; }\n\n.error {\n  color: #ef5350;\n  font-size: 13px;\n  text-align: center;\n}\n\n.btn-login {\n  padding: 12px;\n  background: #1a1f2e;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  letter-spacing: 0.5px;\n  transition: background 0.15s;\n  margin-top: 4px;\n}\n\n.btn-login:hover:not(:disabled) { background: #4f7dff; }\n.btn-login:disabled { opacity: 0.5; cursor: not-allowed; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\admin\\pages\\login\\login.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=login.component.js.map