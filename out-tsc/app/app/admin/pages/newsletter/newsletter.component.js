import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AdminNewsletterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "Chargement\u2026");
    i0.ɵɵelementEnd();
} }
function AdminNewsletterComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, "Aucun abonn\u00E9 pour l'instant.");
    i0.ɵɵelementEnd();
} }
function AdminNewsletterComponent_div_11_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 12);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td")(9, "button", 13);
    i0.ɵɵlistener("click", function AdminNewsletterComponent_div_11_tr_12_Template_button_click_9_listener() { const s_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.desabonner(s_r2.id)); });
    i0.ɵɵtext(10, "D\u00E9sabonner");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.prenom || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 3, s_r2.createdAt, "dd/MM/yyyy"));
} }
function AdminNewsletterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Pr\u00E9nom");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Inscrit le");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "tbody");
    i0.ɵɵtemplate(12, AdminNewsletterComponent_div_11_tr_12_Template, 11, 6, "tr", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngForOf", ctx_r2.subscribers);
} }
export class AdminNewsletterComponent {
    constructor() {
        this.api = inject(ApiService);
        this.subscribers = [];
        this.loading = true;
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getNewsletterSubscribers().subscribe({
            next: (data) => { this.subscribers = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    desabonner(id) {
        if (!confirm('Désabonner cet abonné ?'))
            return;
        this.api.deleteNewsletterSubscriber(id).subscribe({ next: () => this.load() });
    }
    exportCSV() {
        const header = ['Prénom', 'Email', 'Inscrit le'];
        const rows = this.subscribers.map(s => {
            var _a;
            return [
                (_a = s.prenom) !== null && _a !== void 0 ? _a : '',
                s.email,
                s.createdAt ? new Date(s.createdAt).toLocaleDateString('fr-FR') : '',
            ].join(';');
        });
        const csv = [header.join(';'), ...rows].join('\n');
        const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'newsletter-abonnes.csv';
        a.click();
        URL.revokeObjectURL(url);
    }
}
AdminNewsletterComponent.ɵfac = function AdminNewsletterComponent_Factory(t) { return new (t || AdminNewsletterComponent)(); };
AdminNewsletterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminNewsletterComponent, selectors: [["app-admin-newsletter"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 12, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], [1, "btn-export", 3, "click", "disabled"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "email-cell"], [1, "btn-del", 3, "click"]], template: function AdminNewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        i0.ɵɵtext(4, "Abonn\u00E9s Newsletter");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p", 3);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "button", 4);
        i0.ɵɵlistener("click", function AdminNewsletterComponent_Template_button_click_7_listener() { return ctx.exportCSV(); });
        i0.ɵɵtext(8, " \u2B07 Exporter CSV ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(9, AdminNewsletterComponent_div_9_Template, 2, 0, "div", 5)(10, AdminNewsletterComponent_div_10_Template, 2, 0, "div", 6)(11, AdminNewsletterComponent_div_11_Template, 13, 1, "div", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1("", ctx.subscribers.length, " abonn\u00E9(s) au total");
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", ctx.subscribers.length === 0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.subscribers.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.subscribers.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe], styles: [".page[_ngcontent-%COMP%] { max-width: 800px; }\n.page-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 28px; gap: 16px; }\n.page-title[_ngcontent-%COMP%] { font-size: 24px; font-weight: 700; color: #1a1f2e; margin: 0; }\n.page-sub[_ngcontent-%COMP%] { font-size: 13px; color: #888; margin: 4px 0 0; }\n.loading[_ngcontent-%COMP%] { color: #888; padding: 40px; text-align: center; }\n.empty[_ngcontent-%COMP%] { color: #888; padding: 40px; text-align: center; }\n\n.btn-export[_ngcontent-%COMP%] {\n  padding: 10px 20px; background: #1D546C; color: #fff; border: none;\n  border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap;\n}\n.btn-export[_ngcontent-%COMP%]:hover { opacity: 0.88; }\n.btn-export[disabled][_ngcontent-%COMP%] { opacity: 0.4; cursor: not-allowed; }\n\n.table-wrap[_ngcontent-%COMP%] { overflow-x: auto; }\n\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\nth[_ngcontent-%COMP%] { text-align: left; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 14px; border-bottom: 2px solid #eee; }\ntd[_ngcontent-%COMP%] { padding: 12px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #f0f0f0; }\n.email-cell[_ngcontent-%COMP%] { color: #1D546C; }\n\n.btn-del[_ngcontent-%COMP%] {\n  padding: 5px 12px; border: none; border-radius: 6px;\n  background: #fee2e2; color: #991b1b; font-size: 12px; cursor: pointer;\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminNewsletterComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-newsletter', standalone: true, imports: [CommonModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <div>\n      <h2 class=\"page-title\">Abonn\u00E9s Newsletter</h2>\n      <p class=\"page-sub\">{{ subscribers.length }} abonn\u00E9(s) au total</p>\n    </div>\n    <button class=\"btn-export\" (click)=\"exportCSV()\" [disabled]=\"subscribers.length === 0\">\n      \u2B07 Exporter CSV\n    </button>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement\u2026</div>\n  <div *ngIf=\"!loading && subscribers.length === 0\" class=\"empty\">Aucun abonn\u00E9 pour l'instant.</div>\n\n  <div *ngIf=\"!loading && subscribers.length > 0\" class=\"table-wrap\">\n    <table>\n      <thead>\n        <tr>\n          <th>Pr\u00E9nom</th>\n          <th>Email</th>\n          <th>Inscrit le</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of subscribers\">\n          <td>{{ s.prenom || '\u2014' }}</td>\n          <td class=\"email-cell\">{{ s.email }}</td>\n          <td>{{ s.createdAt | date:'dd/MM/yyyy' }}</td>\n          <td>\n            <button class=\"btn-del\" (click)=\"desabonner(s.id)\">D\u00E9sabonner</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: [".page { max-width: 800px; }\n.page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 28px; gap: 16px; }\n.page-title { font-size: 24px; font-weight: 700; color: #1a1f2e; margin: 0; }\n.page-sub { font-size: 13px; color: #888; margin: 4px 0 0; }\n.loading { color: #888; padding: 40px; text-align: center; }\n.empty { color: #888; padding: 40px; text-align: center; }\n\n.btn-export {\n  padding: 10px 20px; background: #1D546C; color: #fff; border: none;\n  border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap;\n}\n.btn-export:hover { opacity: 0.88; }\n.btn-export[disabled] { opacity: 0.4; cursor: not-allowed; }\n\n.table-wrap { overflow-x: auto; }\n\ntable { width: 100%; border-collapse: collapse; }\nth { text-align: left; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 14px; border-bottom: 2px solid #eee; }\ntd { padding: 12px 14px; font-size: 14px; color: #333; border-bottom: 1px solid #f0f0f0; }\n.email-cell { color: #1D546C; }\n\n.btn-del {\n  padding: 5px 12px; border: none; border-radius: 6px;\n  background: #fee2e2; color: #991b1b; font-size: 12px; cursor: pointer;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminNewsletterComponent, { className: "AdminNewsletterComponent", filePath: "app\\admin\\pages\\newsletter\\newsletter.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=newsletter.component.js.map