import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function TemoignagesComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", s_r1.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r1.label);
} }
function TemoignagesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function TemoignagesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Aucun t\u00E9moignage ", ctx_r1.filtre === "EN_ATTENTE" ? "en attente" : "", ". ");
} }
function TemoignagesComponent_div_9_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2014 ", t_r4.ville, "");
} }
function TemoignagesComponent_div_9_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function TemoignagesComponent_div_9_div_1_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const t_r4 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.approuver(t_r4.id)); });
    i0.ɵɵtext(1, " \u2713 Approuver ");
    i0.ɵɵelementEnd();
} }
function TemoignagesComponent_div_9_div_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function TemoignagesComponent_div_9_div_1_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const t_r4 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.rejeter(t_r4.id)); });
    i0.ɵɵtext(1, " \u2715 Rejeter ");
    i0.ɵɵelementEnd();
} }
function TemoignagesComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "div")(3, "span", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TemoignagesComponent_div_9_div_1_span_5_Template, 2, 1, "span", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 18)(7, "span", 19);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 20);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "p", 21);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 22);
    i0.ɵɵtemplate(15, TemoignagesComponent_div_9_div_1_button_15_Template, 2, 0, "button", 23)(16, TemoignagesComponent_div_9_div_1_button_16_Template, 2, 0, "button", 24);
    i0.ɵɵelementStart(17, "button", 25);
    i0.ɵɵlistener("click", function TemoignagesComponent_div_9_div_1_Template_button_click_17_listener() { const t_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.delete(t_r4.id)); });
    i0.ɵɵtext(18, "Supprimer");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(t_r4.nom);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", t_r4.ville);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("statut-" + t_r4.statut);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statutLabel(t_r4.statut));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 9, t_r4.createdAt, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r4.contenu);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", t_r4.statut !== "APPROUVE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", t_r4.statut !== "REJETE");
} }
function TemoignagesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, TemoignagesComponent_div_9_div_1_Template, 19, 12, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.temoignages);
} }
export class TemoignagesComponent {
    constructor() {
        this.api = inject(ApiService);
        this.temoignages = [];
        this.loading = true;
        this.filtre = 'EN_ATTENTE';
        this.statuts = [
            { value: '', label: 'Tous' },
            { value: 'EN_ATTENTE', label: 'En attente' },
            { value: 'APPROUVE', label: 'Approuvés' },
            { value: 'REJETE', label: 'Rejetés' },
        ];
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getTemoignagesAdmin(this.filtre || undefined).subscribe({
            next: (data) => { this.temoignages = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    approuver(id) {
        this.api.modererTemoignage(id, 'APPROUVE').subscribe(() => {
            const t = this.temoignages.find((t) => t.id === id);
            if (t)
                t.statut = 'APPROUVE';
        });
    }
    rejeter(id) {
        this.api.modererTemoignage(id, 'REJETE').subscribe(() => {
            const t = this.temoignages.find((t) => t.id === id);
            if (t)
                t.statut = 'REJETE';
        });
    }
    delete(id) {
        if (!confirm('Supprimer ce témoignage ?'))
            return;
        this.api.deleteTemoignage(id).subscribe(() => {
            this.temoignages = this.temoignages.filter((t) => t.id !== id);
        });
    }
    statutLabel(s) {
        var _a, _b;
        return (_b = (_a = this.statuts.find((st) => st.value === s)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : s;
    }
}
TemoignagesComponent.ɵfac = function TemoignagesComponent_Factory(t) { return new (t || TemoignagesComponent)(); };
TemoignagesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TemoignagesComponent, selectors: [["app-admin-temoignages"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "filters"], [3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "temoignages-list", 4, "ngIf"], [3, "value"], [1, "loading"], [1, "empty"], [1, "temoignages-list"], ["class", "temoignage-card", 4, "ngFor", "ngForOf"], [1, "temoignage-card"], [1, "temo-header"], [1, "temo-nom"], ["class", "temo-ville", 4, "ngIf"], [1, "temo-meta"], [1, "statut-badge"], [1, "temo-date"], [1, "temo-contenu"], [1, "temo-actions"], ["class", "btn-approuver", 3, "click", 4, "ngIf"], ["class", "btn-rejeter", 3, "click", 4, "ngIf"], [1, "btn-del", 3, "click"], [1, "temo-ville"], [1, "btn-approuver", 3, "click"], [1, "btn-rejeter", 3, "click"]], template: function TemoignagesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "T\u00E9moignages");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3)(5, "select", 4);
        i0.ɵɵtwoWayListener("ngModelChange", function TemoignagesComponent_Template_select_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filtre, $event) || (ctx.filtre = $event); return $event; });
        i0.ɵɵlistener("change", function TemoignagesComponent_Template_select_change_5_listener() { return ctx.load(); });
        i0.ɵɵtemplate(6, TemoignagesComponent_option_6_Template, 2, 2, "option", 5);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(7, TemoignagesComponent_div_7_Template, 2, 0, "div", 6)(8, TemoignagesComponent_div_8_Template, 2, 1, "div", 7)(9, TemoignagesComponent_div_9_Template, 2, 1, "div", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtwoWayProperty("ngModel", ctx.filtre);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngForOf", ctx.statuts);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.temoignages.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.temoignages.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["@import '../../admin-shared.css';\n\n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n}\n\n.temoignages-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n\n.temoignage-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  border: 1px solid #eef0f7;\n}\n\n.temo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.temo-nom[_ngcontent-%COMP%] { font-weight: 600; color: #1a1f2e; font-size: 14px; }\n.temo-ville[_ngcontent-%COMP%] { color: #8b93a8; font-size: 13px; }\n.temo-meta[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n.temo-date[_ngcontent-%COMP%] { color: #8b93a8; font-size: 12px; }\n\n.statut-badge[_ngcontent-%COMP%] {\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.statut-EN_ATTENTE[_ngcontent-%COMP%] { background: #fef3c7; color: #d97706; }\n.statut-APPROUVE[_ngcontent-%COMP%] { background: #f0fdf4; color: #16a34a; }\n.statut-REJETE[_ngcontent-%COMP%] { background: #fef2f2; color: #ef4444; }\n\n.temo-contenu[_ngcontent-%COMP%] {\n  color: #3d4663;\n  font-size: 14px;\n  line-height: 1.6;\n  margin-bottom: 14px;\n  border-left: 3px solid #eef0f7;\n  padding-left: 12px;\n}\n\n.temo-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; align-items: center; }\n\n.btn-approuver[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-approuver[_ngcontent-%COMP%]:hover { background: #dcfce7; }\n\n.btn-rejeter[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  background: #fef2f2;\n  color: #ef4444;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-rejeter[_ngcontent-%COMP%]:hover { background: #fee2e2; }\n\n.btn-del[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #8b93a8;\n  cursor: pointer;\n  font-size: 12px;\n  padding: 4px 8px;\n  margin-left: auto;\n  border-radius: 6px;\n  transition: color 0.15s;\n}\n\n.btn-del[_ngcontent-%COMP%]:hover { color: #ef5350; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemoignagesComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-temoignages', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">T\u00E9moignages</h2>\n    <div class=\"filters\">\n      <select [(ngModel)]=\"filtre\" (change)=\"load()\">\n        <option *ngFor=\"let s of statuts\" [value]=\"s.value\">{{ s.label }}</option>\n      </select>\n    </div>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n  <div *ngIf=\"!loading && temoignages.length === 0\" class=\"empty\">\n    Aucun t\u00E9moignage {{ filtre === 'EN_ATTENTE' ? 'en attente' : '' }}.\n  </div>\n\n  <div *ngIf=\"!loading && temoignages.length > 0\" class=\"temoignages-list\">\n    <div *ngFor=\"let t of temoignages\" class=\"temoignage-card\">\n      <div class=\"temo-header\">\n        <div>\n          <span class=\"temo-nom\">{{ t.nom }}</span>\n          <span class=\"temo-ville\" *ngIf=\"t.ville\"> \u2014 {{ t.ville }}</span>\n        </div>\n        <div class=\"temo-meta\">\n          <span class=\"statut-badge\" [class]=\"'statut-' + t.statut\">{{ statutLabel(t.statut) }}</span>\n          <span class=\"temo-date\">{{ t.createdAt | date:'dd/MM/yyyy' }}</span>\n        </div>\n      </div>\n      <p class=\"temo-contenu\">{{ t.contenu }}</p>\n      <div class=\"temo-actions\">\n        <button class=\"btn-approuver\" *ngIf=\"t.statut !== 'APPROUVE'\" (click)=\"approuver(t.id)\">\n          \u2713 Approuver\n        </button>\n        <button class=\"btn-rejeter\" *ngIf=\"t.statut !== 'REJETE'\" (click)=\"rejeter(t.id)\">\n          \u2715 Rejeter\n        </button>\n        <button class=\"btn-del\" (click)=\"delete(t.id)\">Supprimer</button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.filters select {\n  padding: 8px 12px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n}\n\n.temoignages-list { display: flex; flex-direction: column; gap: 12px; }\n\n.temoignage-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  border: 1px solid #eef0f7;\n}\n\n.temo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.temo-nom { font-weight: 600; color: #1a1f2e; font-size: 14px; }\n.temo-ville { color: #8b93a8; font-size: 13px; }\n.temo-meta { display: flex; align-items: center; gap: 10px; }\n.temo-date { color: #8b93a8; font-size: 12px; }\n\n.statut-badge {\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.statut-EN_ATTENTE { background: #fef3c7; color: #d97706; }\n.statut-APPROUVE { background: #f0fdf4; color: #16a34a; }\n.statut-REJETE { background: #fef2f2; color: #ef4444; }\n\n.temo-contenu {\n  color: #3d4663;\n  font-size: 14px;\n  line-height: 1.6;\n  margin-bottom: 14px;\n  border-left: 3px solid #eef0f7;\n  padding-left: 12px;\n}\n\n.temo-actions { display: flex; gap: 8px; align-items: center; }\n\n.btn-approuver {\n  padding: 7px 14px;\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-approuver:hover { background: #dcfce7; }\n\n.btn-rejeter {\n  padding: 7px 14px;\n  background: #fef2f2;\n  color: #ef4444;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-rejeter:hover { background: #fee2e2; }\n\n.btn-del {\n  background: none;\n  border: none;\n  color: #8b93a8;\n  cursor: pointer;\n  font-size: 12px;\n  padding: 4px 8px;\n  margin-left: auto;\n  border-radius: 6px;\n  transition: color 0.15s;\n}\n\n.btn-del:hover { color: #ef5350; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TemoignagesComponent, { className: "TemoignagesComponent", filePath: "app\\admin\\pages\\temoignages\\temoignages.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=temoignages.component.js.map