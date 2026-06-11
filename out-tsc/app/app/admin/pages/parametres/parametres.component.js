import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AdminParametresComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AdminParametresComponent_div_5_strong_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 21);
    i0.ɵɵtext(1, "Communaut\u00E9 ouverte");
    i0.ɵɵelementEnd();
} }
function AdminParametresComponent_div_5_strong_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong", 22);
    i0.ɵɵtext(1, "Communaut\u00E9 ferm\u00E9e");
    i0.ɵɵelementEnd();
} }
function AdminParametresComponent_div_5_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Les nouveaux visiteurs peuvent s'inscrire et rejoindre les r\u00E9unions directement.");
    i0.ɵɵelementEnd();
} }
function AdminParametresComponent_div_5_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Les inscriptions sont ferm\u00E9es. Seuls les membres existants peuvent rejoindre les r\u00E9unions.");
    i0.ɵɵelementEnd();
} }
function AdminParametresComponent_div_5_p_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Un nouveau visiteur qui saisit son email et remplit le formulaire rejoint imm\u00E9diatement la communaut\u00E9.");
    i0.ɵɵelementEnd();
} }
function AdminParametresComponent_div_5_p_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Un nouveau visiteur verra le message : \"Les inscriptions sont ferm\u00E9es. Contactez-nous.\" Son email ne sera pas enregistr\u00E9.");
    i0.ɵɵelementEnd();
} }
function AdminParametresComponent_div_5_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.successMsg);
} }
function AdminParametresComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "h3", 9);
    i0.ɵɵtext(5, "Mode d'acc\u00E8s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 10);
    i0.ɵɵtemplate(7, AdminParametresComponent_div_5_strong_7_Template, 2, 0, "strong", 11)(8, AdminParametresComponent_div_5_strong_8_Template, 2, 0, "strong", 12);
    i0.ɵɵtext(9, " \u2014 ");
    i0.ɵɵtemplate(10, AdminParametresComponent_div_5_span_10_Template, 2, 0, "span", 4)(11, AdminParametresComponent_div_5_span_11_Template, 2, 0, "span", 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 13)(13, "label", 14)(14, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminParametresComponent_div_5_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.isOpen, $event) || (ctx_r1.isOpen = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AdminParametresComponent_div_5_Template_input_ngModelChange_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleMode()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "span", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 17);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 18)(19, "span", 19);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div")(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, AdminParametresComponent_div_5_p_24_Template, 2, 0, "p", 4)(25, AdminParametresComponent_div_5_p_25_Template, 2, 0, "p", 4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(26, AdminParametresComponent_div_5_p_26_Template, 2, 1, "p", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.isOpen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isOpen);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isOpen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isOpen);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.isOpen);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("open", ctx_r1.isOpen)("closed", !ctx_r1.isOpen);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.isOpen ? "Ouvert" : "Ferm\u00E9", " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("info-open", ctx_r1.isOpen)("info-closed", !ctx_r1.isOpen);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.isOpen ? "\u2139\uFE0F" : "\uD83D\uDD12");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.isOpen ? "Mode ouvert actif" : "Mode ferm\u00E9 actif");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isOpen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isOpen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.successMsg);
} }
export class AdminParametresComponent {
    constructor() {
        this.api = inject(ApiService);
        this.isOpen = true;
        this.loading = true;
        this.saving = false;
        this.successMsg = '';
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getSettings().subscribe({
            next: (s) => { this.isOpen = s.isOpen; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    toggleMode() {
        this.saving = true;
        this.api.updateSettings(this.isOpen).subscribe({
            next: () => {
                this.saving = false;
                this.successMsg = this.isOpen
                    ? 'Communauté ouverte — les nouveaux visiteurs peuvent rejoindre.'
                    : 'Communauté fermée — seuls les membres existants peuvent rejoindre.';
                setTimeout(() => (this.successMsg = ''), 4000);
            },
            error: () => { this.saving = false; },
        });
    }
}
AdminParametresComponent.ɵfac = function AdminParametresComponent_Factory(t) { return new (t || AdminParametresComponent)(); };
AdminParametresComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminParametresComponent, selectors: [["app-admin-parametres"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 2, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], ["class", "loading", 4, "ngIf"], [4, "ngIf"], [1, "loading"], [1, "settings-card"], [1, "setting-row"], [1, "setting-info"], [1, "setting-title"], [1, "setting-desc"], ["class", "open", 4, "ngIf"], ["class", "closed", 4, "ngIf"], [1, "setting-control"], [1, "toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "slider"], [1, "toggle-label"], [1, "info-box"], [1, "info-icon"], ["class", "success-msg", 4, "ngIf"], [1, "open"], [1, "closed"], [1, "success-msg"]], template: function AdminParametresComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Param\u00E8tres de la communaut\u00E9");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(4, AdminParametresComponent_div_4_Template, 2, 0, "div", 3)(5, AdminParametresComponent_div_5_Template, 27, 20, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
    } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["@import '../../admin-shared.css';\n\n.settings-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  padding: 28px;\n  margin-bottom: 20px;\n}\n\n.setting-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.setting-info[_ngcontent-%COMP%] { flex: 1; min-width: 200px; }\n\n.setting-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 6px;\n}\n\n.setting-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.setting-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n\n\n\n.toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 28px;\n  cursor: pointer;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { opacity: 0; width: 0; height: 0; }\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #d1d5db;\n  border-radius: 28px;\n  transition: background 0.3s;\n}\n.slider[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: 4px;\n  top: 4px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.3s;\n}\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] { background: #1D546C; }\n.toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before { transform: translateX(24px); }\n\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  min-width: 50px;\n}\n.toggle-label.open[_ngcontent-%COMP%] { color: #16a34a; }\n.toggle-label.closed[_ngcontent-%COMP%] { color: #dc2626; }\n\nstrong.open[_ngcontent-%COMP%] { color: #16a34a; }\nstrong.closed[_ngcontent-%COMP%] { color: #dc2626; }\n\n\n\n.info-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 14px 18px;\n  border-radius: 10px;\n  font-size: 14px;\n  line-height: 1.6;\n  align-items: flex-start;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 4px 0 0; color: #4b5563; }\n.info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; font-size: 14px; }\n.info-open[_ngcontent-%COMP%] { background: #f0fdf4; border: 1px solid #bbf7d0; }\n.info-closed[_ngcontent-%COMP%] { background: #fef2f2; border: 1px solid #fecaca; }\n.info-icon[_ngcontent-%COMP%] { font-size: 20px; flex-shrink: 0; margin-top: 2px; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminParametresComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-parametres', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Param\u00E8tres de la communaut\u00E9</h2>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n\n  <div *ngIf=\"!loading\">\n\n    <div class=\"settings-card\">\n      <div class=\"setting-row\">\n        <div class=\"setting-info\">\n          <h3 class=\"setting-title\">Mode d'acc\u00E8s</h3>\n          <p class=\"setting-desc\">\n            <strong *ngIf=\"isOpen\" class=\"open\">Communaut\u00E9 ouverte</strong>\n            <strong *ngIf=\"!isOpen\" class=\"closed\">Communaut\u00E9 ferm\u00E9e</strong>\n            \u2014\n            <span *ngIf=\"isOpen\">Les nouveaux visiteurs peuvent s'inscrire et rejoindre les r\u00E9unions directement.</span>\n            <span *ngIf=\"!isOpen\">Les inscriptions sont ferm\u00E9es. Seuls les membres existants peuvent rejoindre les r\u00E9unions.</span>\n          </p>\n        </div>\n        <div class=\"setting-control\">\n          <label class=\"toggle\">\n            <input type=\"checkbox\" [(ngModel)]=\"isOpen\" (ngModelChange)=\"toggleMode()\" [disabled]=\"saving\" />\n            <span class=\"slider\"></span>\n          </label>\n          <span class=\"toggle-label\" [class.open]=\"isOpen\" [class.closed]=\"!isOpen\">\n            {{ isOpen ? 'Ouvert' : 'Ferm\u00E9' }}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"info-box\" [class.info-open]=\"isOpen\" [class.info-closed]=\"!isOpen\">\n        <span class=\"info-icon\">{{ isOpen ? '\u2139\uFE0F' : '\uD83D\uDD12' }}</span>\n        <div>\n          <strong>{{ isOpen ? 'Mode ouvert actif' : 'Mode ferm\u00E9 actif' }}</strong>\n          <p *ngIf=\"isOpen\">Un nouveau visiteur qui saisit son email et remplit le formulaire rejoint imm\u00E9diatement la communaut\u00E9.</p>\n          <p *ngIf=\"!isOpen\">Un nouveau visiteur verra le message : \"Les inscriptions sont ferm\u00E9es. Contactez-nous.\" Son email ne sera pas enregistr\u00E9.</p>\n        </div>\n      </div>\n    </div>\n\n    <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.settings-card {\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  padding: 28px;\n  margin-bottom: 20px;\n}\n\n.setting-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.setting-info { flex: 1; min-width: 200px; }\n\n.setting-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a2e;\n  margin: 0 0 6px;\n}\n\n.setting-desc {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.setting-control {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n\n/* Toggle switch */\n.toggle {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 28px;\n  cursor: pointer;\n}\n.toggle input { opacity: 0; width: 0; height: 0; }\n.slider {\n  position: absolute;\n  inset: 0;\n  background: #d1d5db;\n  border-radius: 28px;\n  transition: background 0.3s;\n}\n.slider::before {\n  content: '';\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: 4px;\n  top: 4px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.3s;\n}\n.toggle input:checked + .slider { background: #1D546C; }\n.toggle input:checked + .slider::before { transform: translateX(24px); }\n\n.toggle-label {\n  font-size: 14px;\n  font-weight: 600;\n  min-width: 50px;\n}\n.toggle-label.open { color: #16a34a; }\n.toggle-label.closed { color: #dc2626; }\n\nstrong.open { color: #16a34a; }\nstrong.closed { color: #dc2626; }\n\n/* Info box */\n.info-box {\n  display: flex;\n  gap: 12px;\n  padding: 14px 18px;\n  border-radius: 10px;\n  font-size: 14px;\n  line-height: 1.6;\n  align-items: flex-start;\n}\n.info-box p { margin: 4px 0 0; color: #4b5563; }\n.info-box strong { display: block; font-size: 14px; }\n.info-open { background: #f0fdf4; border: 1px solid #bbf7d0; }\n.info-closed { background: #fef2f2; border: 1px solid #fecaca; }\n.info-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminParametresComponent, { className: "AdminParametresComponent", filePath: "app\\admin\\pages\\parametres\\parametres.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=parametres.component.js.map