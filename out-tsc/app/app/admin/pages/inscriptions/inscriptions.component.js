import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function InscriptionsComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", t_r1.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r1.label);
} }
function InscriptionsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function InscriptionsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, " Aucune inscription trouv\u00E9e. ");
    i0.ɵɵelementEnd();
} }
function InscriptionsComponent_div_9_tr_18_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r3.dateCulte);
} }
function InscriptionsComponent_div_9_tr_18_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", "@", "", i_r3.pseudoTelegram, "");
} }
function InscriptionsComponent_div_9_tr_18_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2014");
    i0.ɵɵelementEnd();
} }
function InscriptionsComponent_div_9_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "a", 14);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td")(9, "span", 15);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtemplate(12, InscriptionsComponent_div_9_tr_18_span_12_Template, 2, 1, "span", 16)(13, InscriptionsComponent_div_9_tr_18_span_13_Template, 2, 2, "span", 16)(14, InscriptionsComponent_div_9_tr_18_span_14_Template, 2, 0, "span", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "button", 17);
    i0.ɵɵlistener("click", function InscriptionsComponent_div_9_tr_18_Template_button_click_19_listener() { const i_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.delete(i_r3.id)); });
    i0.ɵɵtext(20, "\u2715");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i_r3.prenom, " ", i_r3.nom, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", "mailto:" + i_r3.email, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r3.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r3.telephone || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("badge-" + i_r3.type);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.typeLabel(i_r3.type));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i_r3.dateCulte);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r3.pseudoTelegram);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !i_r3.dateCulte && !i_r3.pseudoTelegram);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(17, 12, i_r3.createdAt, "dd/MM/yyyy"));
} }
function InscriptionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Nom");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "T\u00E9l\u00E9phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "D\u00E9tails");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "th");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵtemplate(18, InscriptionsComponent_div_9_tr_18_Template, 21, 15, "tr", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", ctx_r3.inscriptions);
} }
export class InscriptionsComponent {
    constructor() {
        this.api = inject(ApiService);
        this.inscriptions = [];
        this.loading = true;
        this.filtre = '';
        this.types = [
            { value: '', label: 'Tous' },
            { value: 'MARATHON', label: 'Marathon biblique' },
            { value: 'CULTE', label: 'Venir au culte' },
            { value: 'LECTURE_BIBLIQUE', label: 'Lecture biblique' },
        ];
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getInscriptions(this.filtre || undefined).subscribe({
            next: (data) => { this.inscriptions = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    delete(id) {
        if (!confirm('Supprimer cette inscription ?'))
            return;
        this.api.deleteInscription(id).subscribe(() => {
            this.inscriptions = this.inscriptions.filter((i) => i.id !== id);
        });
    }
    typeLabel(type) {
        var _a, _b;
        return (_b = (_a = this.types.find((t) => t.value === type)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : type;
    }
}
InscriptionsComponent.ɵfac = function InscriptionsComponent_Factory(t) { return new (t || InscriptionsComponent)(); };
InscriptionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InscriptionsComponent, selectors: [["app-admin-inscriptions"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "filters"], [3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [3, "value"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "badge"], [4, "ngIf"], [1, "btn-del", 3, "click"]], template: function InscriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Inscriptions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3)(5, "select", 4);
        i0.ɵɵtwoWayListener("ngModelChange", function InscriptionsComponent_Template_select_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filtre, $event) || (ctx.filtre = $event); return $event; });
        i0.ɵɵlistener("change", function InscriptionsComponent_Template_select_change_5_listener() { return ctx.load(); });
        i0.ɵɵtemplate(6, InscriptionsComponent_option_6_Template, 2, 2, "option", 5);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(7, InscriptionsComponent_div_7_Template, 2, 0, "div", 6)(8, InscriptionsComponent_div_8_Template, 2, 0, "div", 7)(9, InscriptionsComponent_div_9_Template, 19, 1, "div", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtwoWayProperty("ngModel", ctx.filtre);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngForOf", ctx.types);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.inscriptions.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.inscriptions.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["@import '../../admin-shared.css';\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.badge-MARATHON[_ngcontent-%COMP%] { background: #eff6ff; color: #3b82f6; }\n.badge-CULTE[_ngcontent-%COMP%] { background: #fef3c7; color: #d97706; }\n.badge-LECTURE_BIBLIQUE[_ngcontent-%COMP%] { background: #f0fdf4; color: #16a34a; }\n\ntable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: #4f7dff; text-decoration: none; }\ntable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { text-decoration: underline; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InscriptionsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-inscriptions', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Inscriptions</h2>\n    <div class=\"filters\">\n      <select [(ngModel)]=\"filtre\" (change)=\"load()\">\n        <option *ngFor=\"let t of types\" [value]=\"t.value\">{{ t.label }}</option>\n      </select>\n    </div>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n\n  <div *ngIf=\"!loading && inscriptions.length === 0\" class=\"empty\">\n    Aucune inscription trouv\u00E9e.\n  </div>\n\n  <div *ngIf=\"!loading && inscriptions.length > 0\" class=\"table-wrap\">\n    <table>\n      <thead>\n        <tr>\n          <th>Nom</th>\n          <th>Email</th>\n          <th>T\u00E9l\u00E9phone</th>\n          <th>Type</th>\n          <th>D\u00E9tails</th>\n          <th>Date</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let i of inscriptions\">\n          <td>{{ i.prenom }} {{ i.nom }}</td>\n          <td><a [href]=\"'mailto:' + i.email\">{{ i.email }}</a></td>\n          <td>{{ i.telephone || '\u2014' }}</td>\n          <td><span class=\"badge\" [class]=\"'badge-' + i.type\">{{ typeLabel(i.type) }}</span></td>\n          <td>\n            <span *ngIf=\"i.dateCulte\">{{ i.dateCulte }}</span>\n            <span *ngIf=\"i.pseudoTelegram\">{{\"@\"}}{{ i.pseudoTelegram }}</span>\n            <span *ngIf=\"!i.dateCulte && !i.pseudoTelegram\">\u2014</span>\n          </td>\n          <td>{{ i.createdAt | date:'dd/MM/yyyy' }}</td>\n          <td>\n            <button class=\"btn-del\" (click)=\"delete(i.id)\">\u2715</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.filters select {\n  padding: 8px 12px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n}\n\n.badge {\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.badge-MARATHON { background: #eff6ff; color: #3b82f6; }\n.badge-CULTE { background: #fef3c7; color: #d97706; }\n.badge-LECTURE_BIBLIQUE { background: #f0fdf4; color: #16a34a; }\n\ntable a { color: #4f7dff; text-decoration: none; }\ntable a:hover { text-decoration: underline; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InscriptionsComponent, { className: "InscriptionsComponent", filePath: "app\\admin\\pages\\inscriptions\\inscriptions.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=inscriptions.component.js.map