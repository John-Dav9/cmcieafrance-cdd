import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../core/services/member-auth.service";
import * as i3 from "../../../core/services/reunions.service";
import * as i4 from "@angular/common";
function InvitationEntryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
function InvitationEntryComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function InvitationEntryComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goToMeetings()); });
    i0.ɵɵtext(1, "Voir les r\u00E9unions");
    i0.ɵɵelementEnd();
} }
export class InvitationEntryComponent {
    constructor(route, router, auth, reunions) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.reunions = reunions;
        this.failed = false;
        this.message = 'Patientez un instant. Aucun code ni mot de passe n’est nécessaire.';
    }
    ngOnInit() {
        const token = this.route.snapshot.queryParamMap.get('token');
        if (!token) {
            this.fail('Le lien d’invitation est incomplet.');
            return;
        }
        history.replaceState({}, '', '/reunions/invitation');
        this.auth.acceptMeetingInvite(token).subscribe({
            next: session => {
                this.reunions.join(session.meetingId).subscribe({
                    next: result => {
                        if ('jitsiToken' in result) {
                            this.router.navigate(['/reunions', session.meetingId, 'salle'], { state: { jitsiData: result }, replaceUrl: true });
                        }
                        else {
                            this.fail('La réunion ne peut pas être ouverte pour le moment.');
                        }
                    },
                    error: err => { var _a, _b; return this.fail((_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Impossible de rejoindre la réunion.'); },
                });
            },
            error: err => { var _a, _b; return this.fail((_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Ce lien a expiré ou a été révoqué.'); },
        });
    }
    goToMeetings() {
        this.router.navigate(['/reunions']);
    }
    fail(message) {
        this.failed = true;
        this.message = message;
    }
}
InvitationEntryComponent.ɵfac = function InvitationEntryComponent_Factory(t) { return new (t || InvitationEntryComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.MemberAuthService), i0.ɵɵdirectiveInject(i3.ReunionsService)); };
InvitationEntryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InvitationEntryComponent, selectors: [["app-invitation-entry"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 5, consts: [[1, "entry"], [1, "mark"], ["class", "loader", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "loader"], [3, "click"]], template: function InvitationEntryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "main", 0)(1, "section")(2, "div", 1);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h1");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, InvitationEntryComponent_div_8_Template, 1, 0, "div", 2)(9, InvitationEntryComponent_button_9_Template, 2, 0, "button", 3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.failed ? "!" : "C");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.failed ? "Lien non valide" : "Ouverture de la r\u00E9union");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.failed);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.failed);
    } }, dependencies: [CommonModule, i4.NgIf], styles: [".entry[_ngcontent-%COMP%]{min-height:100vh;display:grid;place-items:center;padding:20px;background:#171a20;color:#fff;font-family:Inter,\"Segoe UI\",sans-serif}\n    section[_ngcontent-%COMP%]{width:min(440px,100%);padding:38px 28px;text-align:center;border:1px solid rgba(255,255,255,.1);border-radius:22px;background:#20242b}\n    .mark[_ngcontent-%COMP%]{width:64px;height:64px;margin:0 auto 20px;display:grid;place-items:center;border-radius:18px;background:rgba(232,168,56,.14);color:#efbd5c;font-size:28px;font-weight:800}\n    h1[_ngcontent-%COMP%]{margin:0 0 10px;font-size:25px}p[_ngcontent-%COMP%]{color:#adb4bf;line-height:1.6}.loader[_ngcontent-%COMP%]{width:30px;height:30px;margin:24px auto 0;border:3px solid rgba(255,255,255,.12);border-top-color:#e8a838;border-radius:50%;animation:_ngcontent-%COMP%_spin .8s linear infinite}\n    button[_ngcontent-%COMP%]{margin-top:18px;padding:12px 18px;border:0;border-radius:10px;background:#e8a838;color:#172028;font-weight:750;cursor:pointer}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InvitationEntryComponent, [{
        type: Component,
        args: [{ selector: 'app-invitation-entry', standalone: true, imports: [CommonModule], template: `
    <main class="entry">
      <section>
        <div class="mark">{{ failed ? '!' : 'C' }}</div>
        <h1>{{ failed ? 'Lien non valide' : 'Ouverture de la réunion' }}</h1>
        <p>{{ message }}</p>
        <div class="loader" *ngIf="!failed"></div>
        <button *ngIf="failed" (click)="goToMeetings()">Voir les réunions</button>
      </section>
    </main>
  `, styles: ["\n    .entry{min-height:100vh;display:grid;place-items:center;padding:20px;background:#171a20;color:#fff;font-family:Inter,\"Segoe UI\",sans-serif}\n    section{width:min(440px,100%);padding:38px 28px;text-align:center;border:1px solid rgba(255,255,255,.1);border-radius:22px;background:#20242b}\n    .mark{width:64px;height:64px;margin:0 auto 20px;display:grid;place-items:center;border-radius:18px;background:rgba(232,168,56,.14);color:#efbd5c;font-size:28px;font-weight:800}\n    h1{margin:0 0 10px;font-size:25px}p{color:#adb4bf;line-height:1.6}.loader{width:30px;height:30px;margin:24px auto 0;border:3px solid rgba(255,255,255,.12);border-top-color:#e8a838;border-radius:50%;animation:spin .8s linear infinite}\n    button{margin-top:18px;padding:12px 18px;border:0;border-radius:10px;background:#e8a838;color:#172028;font-weight:750;cursor:pointer}@keyframes spin{to{transform:rotate(360deg)}}\n  "] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.MemberAuthService }, { type: i3.ReunionsService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InvitationEntryComponent, { className: "InvitationEntryComponent", filePath: "app\\pages\\reunions\\invitation-entry\\invitation-entry.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=invitation-entry.component.js.map