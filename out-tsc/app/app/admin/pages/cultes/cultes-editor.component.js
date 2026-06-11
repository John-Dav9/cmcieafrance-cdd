import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AdminAuthService } from '../../services/admin-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function CultesEditorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "Chargement\u2026");
    i0.ɵɵelementEnd();
} }
function CultesEditorComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17)(5, "button", 18);
    i0.ɵɵlistener("click", function CultesEditorComponent_div_9_div_1_Template_button_click_5_listener() { const i_r3 = i0.ɵɵrestoreView(_r2).index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.moveUp(i_r3)); });
    i0.ɵɵtext(6, "\u25B2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 19);
    i0.ɵɵlistener("click", function CultesEditorComponent_div_9_div_1_Template_button_click_7_listener() { const i_r3 = i0.ɵɵrestoreView(_r2).index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.moveDown(i_r3)); });
    i0.ɵɵtext(8, "\u25BC");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 20);
    i0.ɵɵlistener("click", function CultesEditorComponent_div_9_div_1_Template_button_click_9_listener() { const i_r3 = i0.ɵɵrestoreView(_r2).index; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.remove(i_r3)); });
    i0.ɵɵtext(10, "Supprimer");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 21)(12, "div", 22)(13, "label");
    i0.ɵɵtext(14, "Jour / P\u00E9riode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function CultesEditorComponent_div_9_div_1_Template_input_ngModelChange_15_listener($event) { const item_r5 = i0.ɵɵrestoreView(_r2).$implicit; i0.ɵɵtwoWayBindingSet(item_r5.jour, $event) || (item_r5.jour = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 22)(17, "label");
    i0.ɵɵtext(18, "Horaire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function CultesEditorComponent_div_9_div_1_Template_input_ngModelChange_19_listener($event) { const item_r5 = i0.ɵɵrestoreView(_r2).$implicit; i0.ɵɵtwoWayBindingSet(item_r5.heure, $event) || (item_r5.heure = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 25)(21, "label");
    i0.ɵɵtext(22, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function CultesEditorComponent_div_9_div_1_Template_input_ngModelChange_23_listener($event) { const item_r5 = i0.ɵɵrestoreView(_r2).$implicit; i0.ɵɵtwoWayBindingSet(item_r5.description, $event) || (item_r5.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 25)(25, "label");
    i0.ɵɵtext(26, "Lien (optionnel)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function CultesEditorComponent_div_9_div_1_Template_input_ngModelChange_27_listener($event) { const item_r5 = i0.ɵɵrestoreView(_r2).$implicit; i0.ɵɵtwoWayBindingSet(item_r5.lien, $event) || (item_r5.lien = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("#", i_r3 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", i_r3 === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", i_r3 === ctx_r3.items.length - 1);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", item_r5.jour);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", item_r5.heure);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", item_r5.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", item_r5.lien);
} }
function CultesEditorComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1, " Aucun cr\u00E9neau \u2014 cliquez sur \u00AB + Ajouter un cr\u00E9neau \u00BB pour commencer. ");
    i0.ɵɵelementEnd();
} }
function CultesEditorComponent_div_9_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.savedMsg);
} }
function CultesEditorComponent_div_9_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.errorMsg);
} }
function CultesEditorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CultesEditorComponent_div_9_div_1_Template, 28, 7, "div", 8)(2, CultesEditorComponent_div_9_div_2_Template, 2, 0, "div", 9);
    i0.ɵɵelementStart(3, "div", 10)(4, "button", 11);
    i0.ɵɵlistener("click", function CultesEditorComponent_div_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.save()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CultesEditorComponent_div_9_span_6_Template, 2, 1, "span", 12)(7, CultesEditorComponent_div_9_span_7_Template, 2, 1, "span", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.items);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.items.length === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r3.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.saving ? "Sauvegarde\u2026" : "\u2713 Sauvegarder", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.savedMsg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.errorMsg);
} }
export class CultesEditorComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.auth = inject(AdminAuthService);
        this.base = environment.apiBase;
        this.items = [];
        this.loading = true;
        this.saving = false;
        this.savedMsg = '';
        this.errorMsg = '';
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.http.get(`${this.base}/settings/cultes`).subscribe({
            next: (data) => { this.items = data.map(d => (Object.assign({}, d))); this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    add() {
        this.items.push({ id: Date.now().toString(), jour: '', heure: '', description: '', lien: '' });
    }
    remove(index) {
        this.items.splice(index, 1);
    }
    moveUp(index) {
        if (index === 0)
            return;
        [this.items[index - 1], this.items[index]] = [this.items[index], this.items[index - 1]];
    }
    moveDown(index) {
        if (index === this.items.length - 1)
            return;
        [this.items[index], this.items[index + 1]] = [this.items[index + 1], this.items[index]];
    }
    async save() {
        this.saving = true;
        this.savedMsg = '';
        this.errorMsg = '';
        const token = await this.auth.getToken();
        const headers = { Authorization: `Bearer ${token}` };
        this.http.patch(`${this.base}/settings/cultes`, { items: this.items }, { headers }).subscribe({
            next: () => {
                this.savedMsg = 'Horaires sauvegard\u00e9s avec succ\u00e8s.';
                this.saving = false;
                setTimeout(() => (this.savedMsg = ''), 3000);
            },
            error: (err) => {
                var _a, _b;
                this.errorMsg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de la sauvegarde.';
                this.saving = false;
            },
        });
    }
}
CultesEditorComponent.ɵfac = function CultesEditorComponent_Factory(t) { return new (t || CultesEditorComponent)(); };
CultesEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CultesEditorComponent, selectors: [["app-cultes-editor"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 2, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "btn-primary", 3, "click"], [1, "page-sub"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "loading-state"], ["class", "culte-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "save-row"], [1, "btn-primary", 3, "click", "disabled"], ["class", "saved-msg", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "culte-card"], [1, "culte-card__head"], [1, "culte-index"], [1, "culte-actions"], ["title", "Monter", 1, "btn-icon", 3, "click", "disabled"], ["title", "Descendre", 1, "btn-icon", 3, "click", "disabled"], [1, "btn-danger-sm", 3, "click"], [1, "culte-fields"], [1, "field"], ["type", "text", "placeholder", "Ex: DIMANCHE", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: 17H \u2013 18H", 3, "ngModelChange", "ngModel"], [1, "field", "field--wide"], ["type", "text", "placeholder", "Ex: C\u00C9L\u00C9BRATION EN LIGNE", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://t.me/...", 3, "ngModelChange", "ngModel"], [1, "empty-state"], [1, "saved-msg"], [1, "error-msg"]], template: function CultesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Horaires des cultes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function CultesEditorComponent_Template_button_click_4_listener() { return ctx.add(); });
        i0.ɵɵtext(5, "+ Ajouter un cr\u00E9neau");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "p", 4);
        i0.ɵɵtext(7, "Ces horaires sont affich\u00E9s sur la page d'accueil du site.");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, CultesEditorComponent_div_8_Template, 2, 0, "div", 5)(9, CultesEditorComponent_div_9_Template, 8, 6, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["@import '../../admin-shared.css';\n\n.page-sub[_ngcontent-%COMP%] { font-size: 13px; color: #5a6480; margin: -8px 0 20px; }\n\n.culte-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde6f0;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 12px;\n}\n\n.culte-card__head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n\n.culte-index[_ngcontent-%COMP%] { font-size: 12px; font-weight: 700; color: #aab0c4; }\n\n.culte-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; align-items: center; }\n\n.btn-icon[_ngcontent-%COMP%] {\n  background: #f4f6fb;\n  border: 1px solid #dde6f0;\n  border-radius: 6px;\n  padding: 4px 8px;\n  font-size: 11px;\n  cursor: pointer;\n  color: #5a6480;\n}\n.btn-icon[_ngcontent-%COMP%]:disabled { opacity: 0.4; cursor: default; }\n\n.btn-danger-sm[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.culte-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.field--wide[_ngcontent-%COMP%] { grid-column: 1 / -1; }\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #aab0c4;\n  font-size: 14px;\n  background: #f4f6fb;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n\n.save-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 14px; margin-top: 20px; }\n.saved-msg[_ngcontent-%COMP%] { font-size: 13px; color: #16a34a; font-weight: 600; }\n.error-msg[_ngcontent-%COMP%] { font-size: 13px; color: #dc2626; font-weight: 600; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CultesEditorComponent, [{
        type: Component,
        args: [{ selector: 'app-cultes-editor', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Horaires des cultes</h2>\n    <button class=\"btn-primary\" (click)=\"add()\">+ Ajouter un cr\u00E9neau</button>\n  </div>\n\n  <p class=\"page-sub\">Ces horaires sont affich\u00E9s sur la page d'accueil du site.</p>\n\n  <div class=\"loading-state\" *ngIf=\"loading\">Chargement\u2026</div>\n\n  <div *ngIf=\"!loading\">\n\n    <div class=\"culte-card\" *ngFor=\"let item of items; let i = index\">\n      <div class=\"culte-card__head\">\n        <span class=\"culte-index\">#{{ i + 1 }}</span>\n        <div class=\"culte-actions\">\n          <button class=\"btn-icon\" (click)=\"moveUp(i)\" title=\"Monter\" [disabled]=\"i === 0\">\u25B2</button>\n          <button class=\"btn-icon\" (click)=\"moveDown(i)\" title=\"Descendre\" [disabled]=\"i === items.length - 1\">\u25BC</button>\n          <button class=\"btn-danger-sm\" (click)=\"remove(i)\">Supprimer</button>\n        </div>\n      </div>\n\n      <div class=\"culte-fields\">\n        <div class=\"field\">\n          <label>Jour / P\u00E9riode</label>\n          <input type=\"text\" [(ngModel)]=\"item.jour\" placeholder=\"Ex: DIMANCHE\" />\n        </div>\n        <div class=\"field\">\n          <label>Horaire</label>\n          <input type=\"text\" [(ngModel)]=\"item.heure\" placeholder=\"Ex: 17H \u2013 18H\" />\n        </div>\n        <div class=\"field field--wide\">\n          <label>Description</label>\n          <input type=\"text\" [(ngModel)]=\"item.description\" placeholder=\"Ex: C\u00C9L\u00C9BRATION EN LIGNE\" />\n        </div>\n        <div class=\"field field--wide\">\n          <label>Lien (optionnel)</label>\n          <input type=\"url\" [(ngModel)]=\"item.lien\" placeholder=\"https://t.me/...\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"empty-state\" *ngIf=\"items.length === 0\">\n      Aucun cr\u00E9neau \u2014 cliquez sur \u00AB + Ajouter un cr\u00E9neau \u00BB pour commencer.\n    </div>\n\n    <div class=\"save-row\">\n      <button class=\"btn-primary\" (click)=\"save()\" [disabled]=\"saving\">\n        {{ saving ? 'Sauvegarde\u2026' : '\u2713 Sauvegarder' }}\n      </button>\n      <span class=\"saved-msg\" *ngIf=\"savedMsg\">{{ savedMsg }}</span>\n      <span class=\"error-msg\" *ngIf=\"errorMsg\">{{ errorMsg }}</span>\n    </div>\n\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.page-sub { font-size: 13px; color: #5a6480; margin: -8px 0 20px; }\n\n.culte-card {\n  background: #fff;\n  border: 1px solid #dde6f0;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 12px;\n}\n\n.culte-card__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n\n.culte-index { font-size: 12px; font-weight: 700; color: #aab0c4; }\n\n.culte-actions { display: flex; gap: 8px; align-items: center; }\n\n.btn-icon {\n  background: #f4f6fb;\n  border: 1px solid #dde6f0;\n  border-radius: 6px;\n  padding: 4px 8px;\n  font-size: 11px;\n  cursor: pointer;\n  color: #5a6480;\n}\n.btn-icon:disabled { opacity: 0.4; cursor: default; }\n\n.btn-danger-sm {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.culte-fields {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.field--wide { grid-column: 1 / -1; }\n\n.empty-state {\n  text-align: center;\n  padding: 40px;\n  color: #aab0c4;\n  font-size: 14px;\n  background: #f4f6fb;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n\n.save-row { display: flex; align-items: center; gap: 14px; margin-top: 20px; }\n.saved-msg { font-size: 13px; color: #16a34a; font-weight: 600; }\n.error-msg { font-size: 13px; color: #dc2626; font-weight: 600; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CultesEditorComponent, { className: "CultesEditorComponent", filePath: "app\\admin\\pages\\cultes\\cultes-editor.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=cultes-editor.component.js.map