import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../core/services/member-auth.service";
import * as i3 from "@angular/common";
function MagicLinkComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Connexion en cours...");
    i0.ɵɵelementEnd()();
} }
function MagicLinkComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "p", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 8);
    i0.ɵɵtext(4, "Recommencer");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function MagicLinkComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 9);
    i0.ɵɵtext(2, "\u2709\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Email envoy\u00E9 !");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "V\u00E9rifiez votre boite mail et cliquez sur le lien de connexion.");
    i0.ɵɵelement(7, "br");
    i0.ɵɵtext(8, "Le lien est valable 15 minutes.");
    i0.ɵɵelementEnd()();
} }
export class MagicLinkComponent {
    constructor(route, auth, router) {
        this.route = route;
        this.auth = auth;
        this.router = router;
        this.loading = false;
        this.error = '';
    }
    ngOnInit() {
        const token = this.route.snapshot.queryParamMap.get('token');
        if (token) {
            this.loading = true;
            this.auth.verifyMagicLink(token).subscribe({
                next: () => this.router.navigate(['/reunions']),
                error: () => { this.error = 'Lien invalide ou expiré.'; this.loading = false; },
            });
        }
    }
}
MagicLinkComponent.ɵfac = function MagicLinkComponent_Factory(t) { return new (t || MagicLinkComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.MemberAuthService), i0.ɵɵdirectiveInject(i1.Router)); };
MagicLinkComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MagicLinkComponent, selectors: [["app-magic-link"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 3, consts: [[1, "auth-page"], [1, "auth-card", "auth-card--center"], [1, "auth-logo"], ["src", "assets/images/logo-cmciea-france.png", "alt", "CMCIEA France"], ["class", "auth-status", 4, "ngIf"], [1, "auth-status"], [1, "spinner"], [1, "error-msg"], ["routerLink", "/auth/login", 1, "btn-primary"], [1, "auth-sent-icon"]], template: function MagicLinkComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, MagicLinkComponent_div_4_Template, 4, 0, "div", 4)(5, MagicLinkComponent_div_5_Template, 5, 1, "div", 4)(6, MagicLinkComponent_div_6_Template, 9, 0, "div", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.error);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.error);
    } }, dependencies: [CommonModule, i3.NgIf], encapsulation: 2 });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MagicLinkComponent, [{
        type: Component,
        args: [{
                selector: 'app-magic-link',
                standalone: true,
                imports: [CommonModule],
                template: `
    <div class="auth-page">
      <div class="auth-card auth-card--center">
        <div class="auth-logo">
          <img src="assets/images/logo-cmciea-france.png" alt="CMCIEA France" />
        </div>
        <div *ngIf="loading" class="auth-status">
          <div class="spinner"></div>
          <p>Connexion en cours...</p>
        </div>
        <div *ngIf="error" class="auth-status">
          <p class="error-msg">{{ error }}</p>
          <a routerLink="/auth/login" class="btn-primary">Recommencer</a>
        </div>
        <div *ngIf="!loading && !error" class="auth-status">
          <div class="auth-sent-icon">✉️</div>
          <h2>Email envoyé !</h2>
          <p>Vérifiez votre boite mail et cliquez sur le lien de connexion.<br/>Le lien est valable 15 minutes.</p>
        </div>
      </div>
    </div>
  `,
            }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.MemberAuthService }, { type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MagicLinkComponent, { className: "MagicLinkComponent", filePath: "app\\pages\\auth\\magic-link\\magic-link.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=magic-link.component.js.map