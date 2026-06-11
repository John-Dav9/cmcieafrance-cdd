import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function TemoignagesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function TemoignagesComponent_div_8_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u00B7 ", t_r1.ville, "");
} }
function TemoignagesComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "p", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 24)(4, "span", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TemoignagesComponent_div_8_div_1_span_6_Template, 2, 1, "span", 26);
    i0.ɵɵelementStart(7, "span", 27);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r1.contenu);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u2014 ", t_r1.nom || "Anonyme", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", t_r1.ville);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 4, t_r1.createdAt, "dd/MM/yyyy"));
} }
function TemoignagesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, TemoignagesComponent_div_8_div_1_Template, 10, 7, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.temoignages);
} }
function TemoignagesComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1, " Aucun t\u00E9moignage publi\u00E9 pour l'instant. ");
    i0.ɵɵelementEnd();
} }
function TemoignagesComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "label");
    i0.ɵɵtext(2, "Votre nom (optionnel)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function TemoignagesComponent_div_20_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.nom, $event) || (ctx_r1.form.nom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.nom);
} }
function TemoignagesComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.successMsg);
} }
function TemoignagesComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorMsg);
} }
export class TemoignagesComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.base = environment.apiBase;
        this.temoignages = [];
        this.loading = true;
        // Form matches backend entity: nom, contenu, ville
        this.form = { nom: '', contenu: '', ville: '', anonyme: false };
        this.sending = false;
        this.successMsg = '';
        this.errorMsg = '';
    }
    ngOnInit() {
        this.http.get(`${this.base}/temoignages`).subscribe({
            next: (data) => { this.temoignages = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    submit() {
        if (!this.form.contenu)
            return;
        this.sending = true;
        this.successMsg = '';
        this.errorMsg = '';
        const payload = {
            nom: this.form.anonyme ? 'Anonyme' : (this.form.nom || 'Anonyme'),
            contenu: this.form.contenu,
            ville: this.form.ville || undefined,
        };
        this.http.post(`${this.base}/temoignages`, payload).subscribe({
            next: () => {
                this.successMsg = 'Merci pour votre témoignage ! Il sera publié après modération.';
                this.sending = false;
                this.form = { nom: '', contenu: '', ville: '', anonyme: false };
            },
            error: (err) => {
                var _a, _b;
                this.errorMsg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Une erreur est survenue. Réessayez dans quelques instants.';
                this.sending = false;
            },
        });
    }
}
TemoignagesComponent.ɵfac = function TemoignagesComponent_Factory(t) { return new (t || TemoignagesComponent)(); };
TemoignagesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TemoignagesComponent, selectors: [["app-temoignages"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 35, vars: 12, consts: [[1, "temoignages-page"], [1, "container"], [1, "page-hero"], ["class", "loading", 4, "ngIf"], ["class", "temoignages-grid", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "form-section"], [1, "form-intro"], [1, "temoignage-form", 3, "ngSubmit"], [1, "field", "check-field"], ["type", "checkbox", "name", "anonyme", 3, "ngModelChange", "ngModel"], ["class", "field", 4, "ngIf"], [1, "field"], ["type", "text", "name", "ville", "placeholder", "Paris, Lyon, Yaound\u00E9...", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["name", "contenu", "rows", "7", "placeholder", "Partagez comment Dieu a travaill\u00E9 dans votre vie \u2014 gu\u00E9rison, d\u00E9livrance, b\u00E9n\u00E9diction, conversion...", "required", "", "maxlength", "5000", 3, "ngModelChange", "ngModel"], [1, "char-count"], ["class", "success-msg", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "loading"], [1, "temoignages-grid"], ["class", "temoignage-card", 4, "ngFor", "ngForOf"], [1, "temoignage-card"], [1, "temoignage-contenu"], [1, "temoignage-footer"], [1, "auteur"], ["class", "ville", 4, "ngIf"], [1, "date"], [1, "ville"], [1, "empty"], ["type", "text", "name", "nom", "placeholder", "Pr\u00E9nom et nom...", "maxlength", "100", 3, "ngModelChange", "ngModel"], [1, "success-msg"], [1, "error-msg"]], template: function TemoignagesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        i0.ɵɵtext(4, "T\u00E9moignages");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Des vies transform\u00E9es par la gr\u00E2ce de Dieu. Partagez votre t\u00E9moignage et encouragez la communaut\u00E9.");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(7, TemoignagesComponent_div_7_Template, 2, 0, "div", 3)(8, TemoignagesComponent_div_8_Template, 2, 1, "div", 4)(9, TemoignagesComponent_p_9_Template, 2, 0, "p", 5);
        i0.ɵɵelementStart(10, "div", 6)(11, "h2");
        i0.ɵɵtext(12, "Partagez votre t\u00E9moignage");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p", 7);
        i0.ɵɵtext(14, "Votre t\u00E9moignage sera relu par notre \u00E9quipe avant publication.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "form", 8);
        i0.ɵɵlistener("ngSubmit", function TemoignagesComponent_Template_form_ngSubmit_15_listener() { return ctx.submit(); });
        i0.ɵɵelementStart(16, "div", 9)(17, "label")(18, "input", 10);
        i0.ɵɵtwoWayListener("ngModelChange", function TemoignagesComponent_Template_input_ngModelChange_18_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.anonyme, $event) || (ctx.form.anonyme = $event); return $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(19, " Publier de mani\u00E8re anonyme ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(20, TemoignagesComponent_div_20_Template, 4, 1, "div", 11);
        i0.ɵɵelementStart(21, "div", 12)(22, "label");
        i0.ɵɵtext(23, "Ville (optionnel)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "input", 13);
        i0.ɵɵtwoWayListener("ngModelChange", function TemoignagesComponent_Template_input_ngModelChange_24_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.ville, $event) || (ctx.form.ville = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(25, "div", 12)(26, "label");
        i0.ɵɵtext(27, "Votre t\u00E9moignage *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "textarea", 14);
        i0.ɵɵtwoWayListener("ngModelChange", function TemoignagesComponent_Template_textarea_ngModelChange_28_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.contenu, $event) || (ctx.form.contenu = $event); return $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "span", 15);
        i0.ɵɵtext(30);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(31, TemoignagesComponent_p_31_Template, 2, 1, "p", 16)(32, TemoignagesComponent_p_32_Template, 2, 1, "p", 17);
        i0.ɵɵelementStart(33, "button", 18);
        i0.ɵɵtext(34);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.temoignages.length > 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.temoignages.length === 0);
        i0.ɵɵadvance(9);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.anonyme);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.form.anonyme);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.ville);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.contenu);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.form.contenu.length, " / 5000");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.successMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.errorMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", ctx.sending || !ctx.form.contenu);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.sending ? "Envoi en cours..." : "Envoyer mon t\u00E9moignage", " ");
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.NgModel, i2.NgForm], styles: [".temoignages-page[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: var(--bg-primary, #0d0d0d);\n  min-height: 100vh;\n  color: var(--text-primary, #fff);\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n.page-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n\n.page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: var(--color-gold, #c9a84c);\n}\n\n.page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #aaa);\n  font-size: 1.1rem;\n}\n\n.temoignages-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 60px;\n}\n\n.temoignage-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, #1a1a1a);\n  border: 1px solid var(--border, #333);\n  border-radius: 12px;\n  padding: 24px;\n}\n\n.temoignage-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-gold, #c9a84c);\n  margin-bottom: 12px;\n}\n\n.temoignage-message[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #ccc);\n  line-height: 1.7;\n  font-size: 0.95rem;\n  margin-bottom: 16px;\n}\n\n.temoignage-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  color: #777;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border, #333);\n  padding-top: 48px;\n  margin-top: 24px;\n}\n\n.form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-bottom: 8px;\n}\n\n.form-intro[_ngcontent-%COMP%] {\n  color: #888;\n  margin-bottom: 28px;\n}\n\n.temoignage-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #aaa;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  border: 1px solid #333;\n  border-radius: 8px;\n  color: #fff;\n  padding: 10px 14px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-gold, #c9a84c);\n}\n\n.check-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  color: #ccc;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background: var(--color-gold, #c9a84c);\n  color: #000;\n  border: none;\n  border-radius: 8px;\n  padding: 12px 28px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  align-self: flex-start;\n  transition: opacity 0.2s;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.success-msg[_ngcontent-%COMP%] { color: #4caf50; font-size: 0.9rem; }\n.error-msg[_ngcontent-%COMP%] { color: #f44336; font-size: 0.9rem; }\n.empty[_ngcontent-%COMP%] { text-align: center; color: #666; padding: 40px 0; }\n.loading[_ngcontent-%COMP%] { text-align: center; color: #888; padding: 40px 0; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemoignagesComponent, [{
        type: Component,
        args: [{ selector: 'app-temoignages', standalone: true, imports: [CommonModule, FormsModule], template: "<section class=\"temoignages-page\">\n  <div class=\"container\">\n    <div class=\"page-hero\">\n      <h1>T\u00E9moignages</h1>\n      <p>Des vies transform\u00E9es par la gr\u00E2ce de Dieu. Partagez votre t\u00E9moignage et encouragez la communaut\u00E9.</p>\n    </div>\n\n    <!-- Liste des t\u00E9moignages approuv\u00E9s -->\n    <div class=\"loading\" *ngIf=\"loading\">Chargement...</div>\n\n    <div class=\"temoignages-grid\" *ngIf=\"!loading && temoignages.length > 0\">\n      <div class=\"temoignage-card\" *ngFor=\"let t of temoignages\">\n        <p class=\"temoignage-contenu\">{{ t.contenu }}</p>\n        <div class=\"temoignage-footer\">\n          <span class=\"auteur\">\u2014 {{ t.nom || 'Anonyme' }}</span>\n          <span class=\"ville\" *ngIf=\"t.ville\">\u00B7 {{ t.ville }}</span>\n          <span class=\"date\">{{ t.createdAt | date:'dd/MM/yyyy' }}</span>\n        </div>\n      </div>\n    </div>\n\n    <p class=\"empty\" *ngIf=\"!loading && temoignages.length === 0\">\n      Aucun t\u00E9moignage publi\u00E9 pour l'instant.\n    </p>\n\n    <!-- Formulaire de soumission -->\n    <div class=\"form-section\">\n      <h2>Partagez votre t\u00E9moignage</h2>\n      <p class=\"form-intro\">Votre t\u00E9moignage sera relu par notre \u00E9quipe avant publication.</p>\n\n      <form class=\"temoignage-form\" (ngSubmit)=\"submit()\">\n        <div class=\"field check-field\">\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"form.anonyme\" name=\"anonyme\" />\n            Publier de mani\u00E8re anonyme\n          </label>\n        </div>\n\n        <div class=\"field\" *ngIf=\"!form.anonyme\">\n          <label>Votre nom (optionnel)</label>\n          <input type=\"text\" [(ngModel)]=\"form.nom\" name=\"nom\" placeholder=\"Pr\u00E9nom et nom...\" maxlength=\"100\" />\n        </div>\n\n        <div class=\"field\">\n          <label>Ville (optionnel)</label>\n          <input type=\"text\" [(ngModel)]=\"form.ville\" name=\"ville\" placeholder=\"Paris, Lyon, Yaound\u00E9...\" maxlength=\"100\" />\n        </div>\n\n        <div class=\"field\">\n          <label>Votre t\u00E9moignage *</label>\n          <textarea [(ngModel)]=\"form.contenu\" name=\"contenu\" rows=\"7\"\n            placeholder=\"Partagez comment Dieu a travaill\u00E9 dans votre vie \u2014 gu\u00E9rison, d\u00E9livrance, b\u00E9n\u00E9diction, conversion...\"\n            required maxlength=\"5000\"></textarea>\n          <span class=\"char-count\">{{ form.contenu.length }} / 5000</span>\n        </div>\n\n        <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n        <p class=\"error-msg\" *ngIf=\"errorMsg\">{{ errorMsg }}</p>\n\n        <button type=\"submit\" class=\"btn-submit\" [disabled]=\"sending || !form.contenu\">\n          {{ sending ? 'Envoi en cours...' : 'Envoyer mon t\u00E9moignage' }}\n        </button>\n      </form>\n    </div>\n  </div>\n</section>\n", styles: [".temoignages-page {\n  padding: 60px 0;\n  background: var(--bg-primary, #0d0d0d);\n  min-height: 100vh;\n  color: var(--text-primary, #fff);\n}\n\n.container {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n.page-hero {\n  text-align: center;\n  margin-bottom: 48px;\n}\n\n.page-hero h1 {\n  font-size: 2.4rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: var(--color-gold, #c9a84c);\n}\n\n.page-hero p {\n  color: var(--text-secondary, #aaa);\n  font-size: 1.1rem;\n}\n\n.temoignages-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n  margin-bottom: 60px;\n}\n\n.temoignage-card {\n  background: var(--bg-card, #1a1a1a);\n  border: 1px solid var(--border, #333);\n  border-radius: 12px;\n  padding: 24px;\n}\n\n.temoignage-card h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-gold, #c9a84c);\n  margin-bottom: 12px;\n}\n\n.temoignage-message {\n  color: var(--text-secondary, #ccc);\n  line-height: 1.7;\n  font-size: 0.95rem;\n  margin-bottom: 16px;\n}\n\n.temoignage-footer {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  color: #777;\n}\n\n.form-section {\n  border-top: 1px solid var(--border, #333);\n  padding-top: 48px;\n  margin-top: 24px;\n}\n\n.form-section h2 {\n  font-size: 1.6rem;\n  margin-bottom: 8px;\n}\n\n.form-intro {\n  color: #888;\n  margin-bottom: 28px;\n}\n\n.temoignage-form {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.field label {\n  font-size: 0.9rem;\n  color: #aaa;\n}\n\n.field input,\n.field textarea {\n  background: #1a1a1a;\n  border: 1px solid #333;\n  border-radius: 8px;\n  color: #fff;\n  padding: 10px 14px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.field input:focus,\n.field textarea:focus {\n  border-color: var(--color-gold, #c9a84c);\n}\n\n.check-field label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  color: #ccc;\n}\n\n.btn-submit {\n  background: var(--color-gold, #c9a84c);\n  color: #000;\n  border: none;\n  border-radius: 8px;\n  padding: 12px 28px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  align-self: flex-start;\n  transition: opacity 0.2s;\n}\n\n.btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.success-msg { color: #4caf50; font-size: 0.9rem; }\n.error-msg { color: #f44336; font-size: 0.9rem; }\n.empty { text-align: center; color: #666; padding: 40px 0; }\n.loading { text-align: center; color: #888; padding: 40px 0; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TemoignagesComponent, { className: "TemoignagesComponent", filePath: "app\\pages\\temoignages\\temoignages.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=temoignages.component.js.map