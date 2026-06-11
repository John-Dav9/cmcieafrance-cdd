import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/member-auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function RegisterComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function RegisterComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Rejoindre la r\u00E9union \u2192");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Inscription en cours...");
    i0.ɵɵelementEnd();
} }
export class RegisterComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.form = { email: '', firstName: '', lastName: '', phone: '', city: '' };
        this.loading = false;
        this.error = '';
        this.redirectUrl = '/reunions';
    }
    ngOnInit() {
        var _a, _b;
        const state = history.state;
        this.form.email = (_a = state === null || state === void 0 ? void 0 : state.email) !== null && _a !== void 0 ? _a : '';
        this.redirectUrl = (_b = state === null || state === void 0 ? void 0 : state.redirectUrl) !== null && _b !== void 0 ? _b : '/reunions';
    }
    submit() {
        if (!this.form.firstName || !this.form.lastName || !this.form.phone)
            return;
        this.loading = true;
        this.error = '';
        this.auth.register(this.form).subscribe({
            next: () => this.router.navigateByUrl(this.redirectUrl),
            error: (err) => {
                var _a, _b;
                this.error = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de l\'inscription.';
                this.loading = false;
            },
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(i0.ɵɵdirectiveInject(i1.MemberAuthService), i0.ɵɵdirectiveInject(i2.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 33, vars: 10, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-logo"], ["src", "assets/images/logo-cmciea-france.png", "alt", "CMCIEA France"], [1, "auth-subtitle"], [1, "auth-form", 3, "ngSubmit"], [1, "field"], ["type", "text", "name", "firstName", "placeholder", "Votre pr\u00E9nom", "required", "", "autofocus", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "placeholder", "Votre nom de famille", "required", "", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "+33 6 12 34 56 78", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "city", "placeholder", "Paris, Lyon...", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 3, "ngModelChange", "ngModel", "readonly"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-primary", "btn-large", 3, "disabled"], [4, "ngIf"], [1, "error-msg"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h2");
        i0.ɵɵtext(5, "Bienvenue !");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 4);
        i0.ɵɵtext(7, "Remplissez ces informations pour rejoindre la r\u00E9union");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "form", 5);
        i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() { return ctx.submit(); });
        i0.ɵɵelementStart(9, "div", 6)(10, "label");
        i0.ɵɵtext(11, "Pr\u00E9nom *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 7);
        i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.firstName, $event) || (ctx.form.firstName = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 6)(14, "label");
        i0.ɵɵtext(15, "Nom *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "input", 8);
        i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.lastName, $event) || (ctx.form.lastName = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "div", 6)(18, "label");
        i0.ɵɵtext(19, "Num\u00E9ro de t\u00E9l\u00E9phone *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "input", 9);
        i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(21, "div", 6)(22, "label");
        i0.ɵɵtext(23, "Ville");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "input", 10);
        i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.city, $event) || (ctx.form.city = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(25, "div", 6)(26, "label");
        i0.ɵɵtext(27, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "input", 11);
        i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_28_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(29, RegisterComponent_div_29_Template, 2, 1, "div", 12);
        i0.ɵɵelementStart(30, "button", 13);
        i0.ɵɵtemplate(31, RegisterComponent_span_31_Template, 2, 0, "span", 14)(32, RegisterComponent_span_32_Template, 2, 0, "span", 14);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.firstName);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.lastName);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.phone);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.city);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.email);
        i0.ɵɵproperty("readonly", !!ctx.form.email);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.error);
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", ctx.loading || !ctx.form.firstName || !ctx.form.lastName || !ctx.form.phone);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
    } }, dependencies: [CommonModule, i3.NgIf, FormsModule, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm], encapsulation: 2 });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-register', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"auth-page\">\n  <div class=\"auth-card\">\n    <div class=\"auth-logo\">\n      <img src=\"assets/images/logo-cmciea-france.png\" alt=\"CMCIEA France\" />\n    </div>\n    <h2>Bienvenue !</h2>\n    <p class=\"auth-subtitle\">Remplissez ces informations pour rejoindre la r\u00E9union</p>\n\n    <form (ngSubmit)=\"submit()\" class=\"auth-form\">\n      <div class=\"field\">\n        <label>Pr\u00E9nom *</label>\n        <input type=\"text\" [(ngModel)]=\"form.firstName\" name=\"firstName\" placeholder=\"Votre pr\u00E9nom\" required autofocus />\n      </div>\n      <div class=\"field\">\n        <label>Nom *</label>\n        <input type=\"text\" [(ngModel)]=\"form.lastName\" name=\"lastName\" placeholder=\"Votre nom de famille\" required />\n      </div>\n      <div class=\"field\">\n        <label>Num\u00E9ro de t\u00E9l\u00E9phone *</label>\n        <input type=\"tel\" [(ngModel)]=\"form.phone\" name=\"phone\" placeholder=\"+33 6 12 34 56 78\" required />\n      </div>\n      <div class=\"field\">\n        <label>Ville</label>\n        <input type=\"text\" [(ngModel)]=\"form.city\" name=\"city\" placeholder=\"Paris, Lyon...\" />\n      </div>\n      <div class=\"field\">\n        <label>Email</label>\n        <input type=\"email\" [(ngModel)]=\"form.email\" name=\"email\" [readonly]=\"!!form.email\" />\n      </div>\n\n      <div class=\"error-msg\" *ngIf=\"error\">{{ error }}</div>\n\n      <button type=\"submit\" class=\"btn-primary btn-large\"\n        [disabled]=\"loading || !form.firstName || !form.lastName || !form.phone\">\n        <span *ngIf=\"!loading\">Rejoindre la r\u00E9union \u2192</span>\n        <span *ngIf=\"loading\">Inscription en cours...</span>\n      </button>\n    </form>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.MemberAuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app\\pages\\auth\\register\\register.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=register.component.js.map