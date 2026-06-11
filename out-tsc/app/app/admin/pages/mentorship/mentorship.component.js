import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function MentorshipAdminComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1, "Aucune demande de mentorat.");
    i0.ɵɵelementEnd();
} }
function MentorshipAdminComponent_article_10_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const member_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", member_r3.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", member_r3.firstName, " ", member_r3.lastName, "");
} }
function MentorshipAdminComponent_article_10_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function MentorshipAdminComponent_article_10_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const request_r2 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close(request_r2)); });
    i0.ɵɵtext(1, "Cl\u00F4turer");
    i0.ɵɵelementEnd();
} }
function MentorshipAdminComponent_article_10_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "div", 5)(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "em");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "h2");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 6)(14, "select", 7);
    i0.ɵɵtwoWayListener("ngModelChange", function MentorshipAdminComponent_article_10_Template_select_ngModelChange_14_listener($event) { const request_r2 = i0.ɵɵrestoreView(_r1).$implicit; i0.ɵɵtwoWayBindingSet(request_r2.selectedMentorId, $event) || (request_r2.selectedMentorId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(15, "option", 8);
    i0.ɵɵtext(16, "Choisir un mentor");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, MentorshipAdminComponent_article_10_option_17_Template, 2, 3, "option", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 10);
    i0.ɵɵlistener("click", function MentorshipAdminComponent_article_10_Template_button_click_18_listener() { const request_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.assign(request_r2)); });
    i0.ɵɵtext(19, "Affecter");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, MentorshipAdminComponent_article_10_button_20_Template, 2, 0, "button", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const request_r2 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", request_r2.requester == null ? null : request_r2.requester.firstName, " ", request_r2.requester == null ? null : request_r2.requester.lastName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(request_r2.requester == null ? null : request_r2.requester.email);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("assigned", request_r2.status === "assigned");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.label(request_r2.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(request_r2.topic);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(request_r2.message);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", request_r2.selectedMentorId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r3.members);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !request_r2.selectedMentorId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", request_r2.status !== "closed");
} }
export class MentorshipAdminComponent {
    constructor(http) {
        this.http = http;
        this.requests = [];
        this.members = [];
        this.loading = true;
    }
    ngOnInit() { this.load(); this.http.get(`${environment.apiBase}/membres`).subscribe(m => this.members = m); }
    load() { this.http.get(`${environment.apiBase}/mentorship`).subscribe(r => { this.requests = r; this.loading = false; }); }
    assign(request) {
        this.http.patch(`${environment.apiBase}/mentorship/${request.id}/assign`, { mentorId: request.selectedMentorId })
            .subscribe(() => this.load());
    }
    close(request) {
        this.http.patch(`${environment.apiBase}/mentorship/${request.id}/status`, { status: 'closed' })
            .subscribe(() => this.load());
    }
    label(status) { return status === 'pending' ? 'En attente' : status === 'assigned' ? 'Assigné' : 'Clôturé'; }
}
MentorshipAdminComponent.ɵfac = function MentorshipAdminComponent_Factory(t) { return new (t || MentorshipAdminComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
MentorshipAdminComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MentorshipAdminComponent, selectors: [["app-mentorship-admin"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 11, vars: 2, consts: [[1, "page"], [3, "click"], ["class", "empty", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "empty"], [1, "request-head"], [1, "actions"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click", "disabled"], ["class", "close", 3, "click", 4, "ngIf"], [3, "value"], [1, "close", 3, "click"]], template: function MentorshipAdminComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "header")(2, "div")(3, "span");
        i0.ɵɵtext(4, "Communaut\u00E9");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "h1");
        i0.ɵɵtext(6, "Demandes de mentorat");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "button", 1);
        i0.ɵɵlistener("click", function MentorshipAdminComponent_Template_button_click_7_listener() { return ctx.load(); });
        i0.ɵɵtext(8, "Actualiser");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(9, MentorshipAdminComponent_p_9_Template, 2, 0, "p", 2)(10, MentorshipAdminComponent_article_10_Template, 21, 12, "article", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.requests.length);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngForOf", ctx.requests);
    } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: [".page[_ngcontent-%COMP%]{max-width:980px;padding:26px}.page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}\n    header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#a36d13;font-size:11px;font-weight:800;text-transform:uppercase}h1[_ngcontent-%COMP%]{margin:4px 0;font-size:24px}\n    header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:9px 13px;border:0;border-radius:8px;cursor:pointer}\n    article[_ngcontent-%COMP%]{margin-bottom:12px;padding:20px;border:1px solid #e2e6ea;border-radius:14px;background:#fff}\n    .request-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.request-head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.request-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#7a838d;font-size:12px}\n    em[_ngcontent-%COMP%]{color:#9a6a19;font-style:normal;font-size:12px}.assigned[_ngcontent-%COMP%]{color:#14733b}h2[_ngcontent-%COMP%]{margin:16px 0 7px;font-size:17px}p[_ngcontent-%COMP%]{color:#59636e;line-height:1.55}\n    .actions[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:16px}.actions[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{min-width:240px;padding:9px;border:1px solid #d6dce2;border-radius:8px}\n    .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;background:#1d546c}.actions[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background:#eceff2;color:#4e5660}.empty[_ngcontent-%COMP%]{color:#7b858f}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MentorshipAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-mentorship-admin', standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="page">
      <header><div><span>Communauté</span><h1>Demandes de mentorat</h1></div><button (click)="load()">Actualiser</button></header>
      <p class="empty" *ngIf="!loading && !requests.length">Aucune demande de mentorat.</p>
      <article *ngFor="let request of requests">
        <div class="request-head">
          <div><strong>{{ request.requester?.firstName }} {{ request.requester?.lastName }}</strong><span>{{ request.requester?.email }}</span></div>
          <em [class.assigned]="request.status==='assigned'">{{ label(request.status) }}</em>
        </div>
        <h2>{{ request.topic }}</h2><p>{{ request.message }}</p>
        <div class="actions">
          <select [(ngModel)]="request.selectedMentorId">
            <option value="">Choisir un mentor</option>
            <option *ngFor="let member of members" [value]="member.id">{{ member.firstName }} {{ member.lastName }}</option>
          </select>
          <button (click)="assign(request)" [disabled]="!request.selectedMentorId">Affecter</button>
          <button class="close" (click)="close(request)" *ngIf="request.status!=='closed'">Clôturer</button>
        </div>
      </article>
    </div>`, styles: ["\n    .page{max-width:980px;padding:26px}.page header{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}\n    header span{color:#a36d13;font-size:11px;font-weight:800;text-transform:uppercase}h1{margin:4px 0;font-size:24px}\n    header button,.actions button{padding:9px 13px;border:0;border-radius:8px;cursor:pointer}\n    article{margin-bottom:12px;padding:20px;border:1px solid #e2e6ea;border-radius:14px;background:#fff}\n    .request-head{display:flex;justify-content:space-between}.request-head div{display:flex;flex-direction:column}.request-head span{color:#7a838d;font-size:12px}\n    em{color:#9a6a19;font-style:normal;font-size:12px}.assigned{color:#14733b}h2{margin:16px 0 7px;font-size:17px}p{color:#59636e;line-height:1.55}\n    .actions{display:flex;gap:8px;margin-top:16px}.actions select{min-width:240px;padding:9px;border:1px solid #d6dce2;border-radius:8px}\n    .actions button{color:#fff;background:#1d546c}.actions .close{background:#eceff2;color:#4e5660}.empty{color:#7b858f}\n  "] }]
    }], () => [{ type: i1.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MentorshipAdminComponent, { className: "MentorshipAdminComponent", filePath: "app\\admin\\pages\\mentorship\\mentorship.component.ts", lineNumber: 42 }); })();
//# sourceMappingURL=mentorship.component.js.map