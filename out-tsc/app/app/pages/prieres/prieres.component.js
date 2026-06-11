import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function PrieresComponent_p_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.successMsg);
} }
function PrieresComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMsg);
} }
export class PrieresComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.base = environment.apiBase;
        this.form = { prenom: '', sujet: '', message: '', anonyme: false };
        this.sending = false;
        this.successMsg = '';
        this.errorMsg = '';
    }
    submit() {
        if (!this.form.sujet || !this.form.message)
            return;
        this.sending = true;
        this.successMsg = '';
        this.errorMsg = '';
        this.http.post(`${this.base}/prieres`, this.form).subscribe({
            next: () => {
                this.successMsg = 'Votre demande a été transmise. Nous prions avec vous 🙏';
                this.sending = false;
                this.form = { prenom: '', sujet: '', message: '', anonyme: false };
            },
            error: (err) => {
                var _a, _b;
                this.errorMsg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Une erreur est survenue. Réessayez dans quelques instants.';
                this.sending = false;
            },
        });
    }
}
PrieresComponent.ɵfac = function PrieresComponent_Factory(t) { return new (t || PrieresComponent)(); };
PrieresComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PrieresComponent, selectors: [["app-prieres"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 50, vars: 10, consts: [[1, "prieres-page"], [1, "page-hero"], [1, "hero-inner"], [1, "hero-eyebrow"], [1, "hero-title"], [1, "hero-sub"], [1, "form-section"], [1, "form-card"], [1, "form-title"], [1, "field"], [1, "opt"], ["type", "text", "placeholder", "Ex : Marie", 3, "ngModelChange", "ngModel", "disabled"], [1, "anon-toggle"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "req"], ["type", "text", "placeholder", "Ex : Gu\u00E9rison, Direction de vie, Famille\u2026", "maxlength", "120", 3, "ngModelChange", "ngModel"], ["rows", "5", "placeholder", "D\u00E9crivez votre besoin en pri\u00E8re\u2026", "maxlength", "1000", 3, "ngModelChange", "ngModel"], [1, "char-count"], [1, "privacy-note"], [1, "btn-submit", 3, "click", "disabled"], ["class", "success-msg", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "encourage-card"], [1, "success-msg"], [1, "error-msg"]], template: function PrieresComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        i0.ɵɵtext(4, "COMMUNION");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "h1", 4);
        i0.ɵɵtext(6, "Demandes de pri\u00E8re");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "p", 5);
        i0.ɵɵtext(8, "Partagez vos besoins en pri\u00E8re avec notre communaut\u00E9. Chaque demande est trait\u00E9e avec soin et bienveillance.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "div", 6)(10, "div", 7)(11, "h2", 8);
        i0.ɵɵtext(12, "\uD83D\uDE4F Soumettre une demande");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9)(14, "label");
        i0.ɵɵtext(15, "Votre pr\u00E9nom ");
        i0.ɵɵelementStart(16, "span", 10);
        i0.ɵɵtext(17, "(optionnel)");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(18, "input", 11);
        i0.ɵɵtwoWayListener("ngModelChange", function PrieresComponent_Template_input_ngModelChange_18_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.prenom, $event) || (ctx.form.prenom = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "div", 12)(20, "label", 13)(21, "input", 14);
        i0.ɵɵtwoWayListener("ngModelChange", function PrieresComponent_Template_input_ngModelChange_21_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.anonyme, $event) || (ctx.form.anonyme = $event); return $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(22, " Soumettre de fa\u00E7on anonyme ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "div", 9)(24, "label");
        i0.ɵɵtext(25, "Sujet de pri\u00E8re ");
        i0.ɵɵelementStart(26, "span", 15);
        i0.ɵɵtext(27, "*");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(28, "input", 16);
        i0.ɵɵtwoWayListener("ngModelChange", function PrieresComponent_Template_input_ngModelChange_28_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.sujet, $event) || (ctx.form.sujet = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(29, "div", 9)(30, "label");
        i0.ɵɵtext(31, "Votre demande ");
        i0.ɵɵelementStart(32, "span", 15);
        i0.ɵɵtext(33, "*");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(34, "textarea", 17);
        i0.ɵɵtwoWayListener("ngModelChange", function PrieresComponent_Template_textarea_ngModelChange_34_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.message, $event) || (ctx.form.message = $event); return $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "span", 18);
        i0.ɵɵtext(36);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(37, "p", 19);
        i0.ɵɵtext(38, " \uD83D\uDD12 Vos donn\u00E9es sont confidentielles et accessibles uniquement \u00E0 l'\u00E9quipe pastorale. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "button", 20);
        i0.ɵɵlistener("click", function PrieresComponent_Template_button_click_39_listener() { return ctx.submit(); });
        i0.ɵɵtext(40);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(41, PrieresComponent_p_41_Template, 2, 1, "p", 21)(42, PrieresComponent_p_42_Template, 2, 1, "p", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "div", 23)(44, "blockquote");
        i0.ɵɵtext(45, " \u00AB Ne vous inqui\u00E9tez de rien ; mais en toute chose faites conna\u00EEtre vos besoins \u00E0 Dieu par des pri\u00E8res et des supplications, avec des actions de gr\u00E2ces. \u00BB ");
        i0.ɵɵelementStart(46, "cite");
        i0.ɵɵtext(47, "\u2014 Philippiens 4:6");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(48, "p");
        i0.ɵɵtext(49, "Notre \u00E9quipe s'engage \u00E0 interc\u00E9der pour chaque demande re\u00E7ue.");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(18);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.prenom);
        i0.ɵɵproperty("disabled", ctx.form.anonyme);
        i0.ɵɵadvance(3);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.anonyme);
        i0.ɵɵadvance(7);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.sujet);
        i0.ɵɵadvance(6);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.message);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.form.message.length, "/1000");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.sending || !ctx.form.sujet || !ctx.form.message);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.sending ? "Envoi en cours\u2026" : "Envoyer ma demande", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.successMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.errorMsg);
    } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.MaxLengthValidator, i2.NgModel], styles: [".prieres-page[_ngcontent-%COMP%] { min-height: 100vh; background: #f8f9fc; }\n\n\n\n.page-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C 0%, #0f3347 100%);\n  color: #fff;\n  padding: 80px 24px 60px;\n  text-align: center;\n}\n.hero-inner[_ngcontent-%COMP%] { max-width: 640px; margin: 0 auto; }\n.hero-eyebrow[_ngcontent-%COMP%] { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; opacity: 0.7; margin-bottom: 12px; }\n.hero-title[_ngcontent-%COMP%] { font-size: 38px; font-weight: 800; margin: 0 0 16px; }\n.hero-sub[_ngcontent-%COMP%] { font-size: 16px; opacity: 0.85; line-height: 1.6; margin: 0; }\n\n\n\n.form-section[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin: 0 auto;\n  padding: 48px 24px 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n\n\n\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 36px 40px;\n  box-shadow: 0 4px 24px rgba(0,0,0,0.06);\n}\n\n.form-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0 0 28px;\n}\n\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #3d4663;\n}\n\n.opt[_ngcontent-%COMP%] { font-weight: 400; color: #aab0c4; }\n.req[_ngcontent-%COMP%] { color: #e74c3c; }\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1px solid #dde0ec;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 14px;\n  color: #1a1f2e;\n  background: #fff;\n  outline: none;\n  transition: border-color 0.15s;\n  font-family: inherit;\n  resize: vertical;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus { border-color: #1D546C; box-shadow: 0 0 0 3px rgba(29,84,108,0.1); }\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled { background: #f4f6f9; color: #aab0c4; }\n\n.char-count[_ngcontent-%COMP%] { font-size: 11px; color: #aab0c4; text-align: right; }\n\n.anon-toggle[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #5a6480;\n  cursor: pointer;\n}\n.toggle-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { cursor: pointer; width: 15px; height: 15px; }\n\n.privacy-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8b93a8;\n  background: #f8f9fc;\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-bottom: 24px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: #1D546C;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) { opacity: 0.88; }\n.btn-submit[_ngcontent-%COMP%]:disabled { opacity: 0.45; cursor: not-allowed; }\n\n.success-msg[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #dcfce7;\n  color: #16a34a;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #fee2e2;\n  color: #991b1b;\n  border-radius: 8px;\n  font-size: 14px;\n}\n\n\n\n.encourage-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px 36px;\n  box-shadow: 0 4px 24px rgba(0,0,0,0.06);\n  border-left: 4px solid #1D546C;\n}\n\nblockquote[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-style: italic;\n  color: #3d4663;\n  line-height: 1.7;\n  margin: 0 0 12px;\n}\n\ncite[_ngcontent-%COMP%] { display: block; font-size: 13px; font-weight: 700; color: #1D546C; margin-top: 8px; font-style: normal; }\n\n.encourage-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 14px; color: #5a6480; margin: 0; }\n\n\n\n@media (max-width: 600px) {\n  .hero-title[_ngcontent-%COMP%] { font-size: 28px; }\n  .form-card[_ngcontent-%COMP%] { padding: 24px 20px; }\n  .encourage-card[_ngcontent-%COMP%] { padding: 24px 20px; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PrieresComponent, [{
        type: Component,
        args: [{ selector: 'app-prieres', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"prieres-page\">\n\n  <!-- En-t\u00EAte -->\n  <div class=\"page-hero\">\n    <div class=\"hero-inner\">\n      <p class=\"hero-eyebrow\">COMMUNION</p>\n      <h1 class=\"hero-title\">Demandes de pri\u00E8re</h1>\n      <p class=\"hero-sub\">Partagez vos besoins en pri\u00E8re avec notre communaut\u00E9. Chaque demande est trait\u00E9e avec soin et bienveillance.</p>\n    </div>\n  </div>\n\n  <!-- Formulaire -->\n  <div class=\"form-section\">\n    <div class=\"form-card\">\n      <h2 class=\"form-title\">\uD83D\uDE4F Soumettre une demande</h2>\n\n      <div class=\"field\">\n        <label>Votre pr\u00E9nom <span class=\"opt\">(optionnel)</span></label>\n        <input type=\"text\" [(ngModel)]=\"form.prenom\" placeholder=\"Ex : Marie\" [disabled]=\"form.anonyme\" />\n      </div>\n\n      <div class=\"anon-toggle\">\n        <label class=\"toggle-label\">\n          <input type=\"checkbox\" [(ngModel)]=\"form.anonyme\" />\n          Soumettre de fa\u00E7on anonyme\n        </label>\n      </div>\n\n      <div class=\"field\">\n        <label>Sujet de pri\u00E8re <span class=\"req\">*</span></label>\n        <input type=\"text\" [(ngModel)]=\"form.sujet\" placeholder=\"Ex : Gu\u00E9rison, Direction de vie, Famille\u2026\" maxlength=\"120\" />\n      </div>\n\n      <div class=\"field\">\n        <label>Votre demande <span class=\"req\">*</span></label>\n        <textarea [(ngModel)]=\"form.message\" rows=\"5\" placeholder=\"D\u00E9crivez votre besoin en pri\u00E8re\u2026\" maxlength=\"1000\"></textarea>\n        <span class=\"char-count\">{{ form.message.length }}/1000</span>\n      </div>\n\n      <p class=\"privacy-note\">\n        \uD83D\uDD12 Vos donn\u00E9es sont confidentielles et accessibles uniquement \u00E0 l'\u00E9quipe pastorale.\n      </p>\n\n      <button class=\"btn-submit\" [disabled]=\"sending || !form.sujet || !form.message\" (click)=\"submit()\">\n        {{ sending ? 'Envoi en cours\u2026' : 'Envoyer ma demande' }}\n      </button>\n\n      <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n      <p class=\"error-msg\"   *ngIf=\"errorMsg\">{{ errorMsg }}</p>\n    </div>\n\n    <!-- Bloc d'encouragement -->\n    <div class=\"encourage-card\">\n      <blockquote>\n        \u00AB Ne vous inqui\u00E9tez de rien ; mais en toute chose faites conna\u00EEtre vos besoins \u00E0 Dieu par des pri\u00E8res et des supplications, avec des actions de gr\u00E2ces. \u00BB\n        <cite>\u2014 Philippiens 4:6</cite>\n      </blockquote>\n      <p>Notre \u00E9quipe s'engage \u00E0 interc\u00E9der pour chaque demande re\u00E7ue.</p>\n    </div>\n  </div>\n\n</div>\n", styles: [".prieres-page { min-height: 100vh; background: #f8f9fc; }\n\n/* \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.page-hero {\n  background: linear-gradient(135deg, #1D546C 0%, #0f3347 100%);\n  color: #fff;\n  padding: 80px 24px 60px;\n  text-align: center;\n}\n.hero-inner { max-width: 640px; margin: 0 auto; }\n.hero-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; opacity: 0.7; margin-bottom: 12px; }\n.hero-title { font-size: 38px; font-weight: 800; margin: 0 0 16px; }\n.hero-sub { font-size: 16px; opacity: 0.85; line-height: 1.6; margin: 0; }\n\n/* \u2500\u2500 Layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.form-section {\n  max-width: 780px;\n  margin: 0 auto;\n  padding: 48px 24px 80px;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n\n/* \u2500\u2500 Carte formulaire \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.form-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 36px 40px;\n  box-shadow: 0 4px 24px rgba(0,0,0,0.06);\n}\n\n.form-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0 0 28px;\n}\n\n.field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }\n\n.field label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #3d4663;\n}\n\n.opt { font-weight: 400; color: #aab0c4; }\n.req { color: #e74c3c; }\n\n.field input,\n.field textarea {\n  border: 1px solid #dde0ec;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 14px;\n  color: #1a1f2e;\n  background: #fff;\n  outline: none;\n  transition: border-color 0.15s;\n  font-family: inherit;\n  resize: vertical;\n}\n\n.field input:focus,\n.field textarea:focus { border-color: #1D546C; box-shadow: 0 0 0 3px rgba(29,84,108,0.1); }\n\n.field input:disabled { background: #f4f6f9; color: #aab0c4; }\n\n.char-count { font-size: 11px; color: #aab0c4; text-align: right; }\n\n.anon-toggle { margin-bottom: 20px; }\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #5a6480;\n  cursor: pointer;\n}\n.toggle-label input { cursor: pointer; width: 15px; height: 15px; }\n\n.privacy-note {\n  font-size: 12px;\n  color: #8b93a8;\n  background: #f8f9fc;\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-bottom: 24px;\n}\n\n.btn-submit {\n  width: 100%;\n  padding: 14px;\n  background: #1D546C;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.btn-submit:hover:not(:disabled) { opacity: 0.88; }\n.btn-submit:disabled { opacity: 0.45; cursor: not-allowed; }\n\n.success-msg {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #dcfce7;\n  color: #16a34a;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.error-msg {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #fee2e2;\n  color: #991b1b;\n  border-radius: 8px;\n  font-size: 14px;\n}\n\n/* \u2500\u2500 Bloc citation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.encourage-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 32px 36px;\n  box-shadow: 0 4px 24px rgba(0,0,0,0.06);\n  border-left: 4px solid #1D546C;\n}\n\nblockquote {\n  font-size: 16px;\n  font-style: italic;\n  color: #3d4663;\n  line-height: 1.7;\n  margin: 0 0 12px;\n}\n\ncite { display: block; font-size: 13px; font-weight: 700; color: #1D546C; margin-top: 8px; font-style: normal; }\n\n.encourage-card p { font-size: 14px; color: #5a6480; margin: 0; }\n\n/* \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media (max-width: 600px) {\n  .hero-title { font-size: 28px; }\n  .form-card { padding: 24px 20px; }\n  .encourage-card { padding: 24px 20px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PrieresComponent, { className: "PrieresComponent", filePath: "app\\pages\\prieres\\prieres.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=prieres.component.js.map