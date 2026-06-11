import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CulteModalComponent_div_0_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.culte.message);
} }
function CulteModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function CulteModalComponent_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("click", function CulteModalComponent_div_0_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelement(3, "div", 4);
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5, "Annonce de l'\u00C9glise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 6);
    i0.ɵɵlistener("click", function CulteModalComponent_div_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(7, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 7)(9, "p", 8);
    i0.ɵɵtext(10, "\uD83D\uDCC5 Prochain Culte Pr\u00E9sentiel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h2", 9);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 10);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, CulteModalComponent_div_0_p_15_Template, 2, 1, "p", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 12)(17, "button", 13);
    i0.ɵɵlistener("click", function CulteModalComponent_div_0_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(18, "J'ai compris \u2014 \u00C0 bient\u00F4t !");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.culte.sujet);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.culte.date);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.culte.message);
} }
export class CulteModalComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.visible = false;
        this.culte = null;
    }
    ngOnInit() {
        if (sessionStorage.getItem('culte_modal_shown'))
            return;
        this.http.get(`${environment.apiBase}/settings/next-culte`).subscribe({
            next: (data) => {
                if (data) {
                    this.culte = data;
                    this.visible = true;
                    sessionStorage.setItem('culte_modal_shown', '1');
                }
            },
            error: () => { },
        });
    }
    close() {
        this.visible = false;
    }
}
CulteModalComponent.ɵfac = function CulteModalComponent_Factory(t) { return new (t || CulteModalComponent)(); };
CulteModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CulteModalComponent, selectors: [["app-culte-modal"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "cm-backdrop", 3, "click", 4, "ngIf"], [1, "cm-backdrop", 3, "click"], [1, "cm-card", 3, "click"], [1, "cm-header"], [1, "cm-pulse"], [1, "cm-eyebrow"], ["aria-label", "Fermer", 1, "cm-close", 3, "click"], [1, "cm-body"], [1, "cm-badge"], [1, "cm-title"], [1, "cm-date"], ["class", "cm-message", 4, "ngIf"], [1, "cm-footer"], [1, "cm-btn-primary", 3, "click"], [1, "cm-message"]], template: function CulteModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CulteModalComponent_div_0_Template, 19, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visible);
    } }, dependencies: [CommonModule, i1.NgIf], styles: [".cm-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n.cm-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  max-width: 500px;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { transform: translateY(40px); opacity: 0; }\n  to   { transform: translateY(0);    opacity: 1; }\n}\n\n\n\n.cm-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C 0%, #1A3D64 100%);\n  padding: 20px 24px 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n}\n\n.cm-pulse[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #00e5a0;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%   { box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4); }\n  70%  { box-shadow: 0 0 0 10px rgba(0, 229, 160, 0); }\n  100% { box-shadow: 0 0 0 0 rgba(0, 229, 160, 0); }\n}\n\n.cm-eyebrow[_ngcontent-%COMP%] {\n  color: #a8d8e8;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  flex: 1;\n}\n\n.cm-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 18px;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  transition: color 0.2s;\n}\n\n.cm-close[_ngcontent-%COMP%]:hover { color: #fff; }\n\n\n\n.cm-body[_ngcontent-%COMP%] {\n  padding: 28px 28px 20px;\n  text-align: center;\n}\n\n.cm-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #EEF6FA;\n  color: #1D546C;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 14px;\n  border-radius: 20px;\n  margin: 0 0 14px;\n  border: 1px solid #b0d4e8;\n}\n\n.cm-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #1A3D64;\n  margin: 0 0 10px;\n  line-height: 1.25;\n}\n\n.cm-date[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1D546C;\n  margin: 0 0 12px;\n  background: linear-gradient(135deg, #EEF6FA, #e0f0f8);\n  display: inline-block;\n  padding: 6px 18px;\n  border-radius: 8px;\n}\n\n.cm-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.65;\n  margin: 0 0 16px;\n}\n\n.cm-flyer[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  margin-top: 16px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n\n.cm-flyer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  max-height: 280px;\n  object-fit: cover;\n}\n\n\n\n.cm-footer[_ngcontent-%COMP%] {\n  padding: 0 28px 24px;\n  text-align: center;\n}\n\n.cm-btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 14px 32px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  width: 100%;\n  transition: opacity 0.2s, transform 0.15s;\n}\n\n.cm-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n\n@media (max-width: 480px) {\n  .cm-card[_ngcontent-%COMP%] { border-radius: 16px; }\n  .cm-title[_ngcontent-%COMP%] { font-size: 20px; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CulteModalComponent, [{
        type: Component,
        args: [{ selector: 'app-culte-modal', standalone: true, imports: [CommonModule], template: "<div class=\"cm-backdrop\" *ngIf=\"visible\" (click)=\"close()\">\n  <div class=\"cm-card\" (click)=\"$event.stopPropagation()\">\n\n    <div class=\"cm-header\">\n      <div class=\"cm-pulse\"></div>\n      <span class=\"cm-eyebrow\">Annonce de l'\u00C9glise</span>\n      <button class=\"cm-close\" (click)=\"close()\" aria-label=\"Fermer\">&#10005;</button>\n    </div>\n\n    <div class=\"cm-body\">\n      <p class=\"cm-badge\">\uD83D\uDCC5 Prochain Culte Pr\u00E9sentiel</p>\n      <h2 class=\"cm-title\">{{ culte.sujet }}</h2>\n      <p class=\"cm-date\">{{ culte.date }}</p>\n      <p class=\"cm-message\" *ngIf=\"culte.message\">{{ culte.message }}</p>\n\n    </div>\n\n    <div class=\"cm-footer\">\n      <button class=\"cm-btn-primary\" (click)=\"close()\">J'ai compris \u2014 \u00C0 bient\u00F4t !</button>\n    </div>\n\n  </div>\n</div>\n", styles: [".cm-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 20px;\n  animation: fadeIn 0.3s ease;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n.cm-card {\n  background: #fff;\n  border-radius: 20px;\n  max-width: 500px;\n  width: 100%;\n  overflow: hidden;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);\n  animation: slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n@keyframes slideUp {\n  from { transform: translateY(40px); opacity: 0; }\n  to   { transform: translateY(0);    opacity: 1; }\n}\n\n/* \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cm-header {\n  background: linear-gradient(135deg, #1D546C 0%, #1A3D64 100%);\n  padding: 20px 24px 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n}\n\n.cm-pulse {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #00e5a0;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4);\n  animation: pulse 2s infinite;\n}\n\n@keyframes pulse {\n  0%   { box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4); }\n  70%  { box-shadow: 0 0 0 10px rgba(0, 229, 160, 0); }\n  100% { box-shadow: 0 0 0 0 rgba(0, 229, 160, 0); }\n}\n\n.cm-eyebrow {\n  color: #a8d8e8;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  flex: 1;\n}\n\n.cm-close {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 18px;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  transition: color 0.2s;\n}\n\n.cm-close:hover { color: #fff; }\n\n/* \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cm-body {\n  padding: 28px 28px 20px;\n  text-align: center;\n}\n\n.cm-badge {\n  display: inline-block;\n  background: #EEF6FA;\n  color: #1D546C;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 14px;\n  border-radius: 20px;\n  margin: 0 0 14px;\n  border: 1px solid #b0d4e8;\n}\n\n.cm-title {\n  font-size: 24px;\n  font-weight: 800;\n  color: #1A3D64;\n  margin: 0 0 10px;\n  line-height: 1.25;\n}\n\n.cm-date {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1D546C;\n  margin: 0 0 12px;\n  background: linear-gradient(135deg, #EEF6FA, #e0f0f8);\n  display: inline-block;\n  padding: 6px 18px;\n  border-radius: 8px;\n}\n\n.cm-message {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.65;\n  margin: 0 0 16px;\n}\n\n.cm-flyer {\n  border-radius: 12px;\n  overflow: hidden;\n  margin-top: 16px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n\n.cm-flyer img {\n  width: 100%;\n  display: block;\n  max-height: 280px;\n  object-fit: cover;\n}\n\n/* \u2500\u2500 Footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cm-footer {\n  padding: 0 28px 24px;\n  text-align: center;\n}\n\n.cm-btn-primary {\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  padding: 14px 32px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  width: 100%;\n  transition: opacity 0.2s, transform 0.15s;\n}\n\n.cm-btn-primary:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n\n@media (max-width: 480px) {\n  .cm-card { border-radius: 16px; }\n  .cm-title { font-size: 20px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CulteModalComponent, { className: "CulteModalComponent", filePath: "app\\shared\\culte-modal\\culte-modal.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=culte-modal.component.js.map