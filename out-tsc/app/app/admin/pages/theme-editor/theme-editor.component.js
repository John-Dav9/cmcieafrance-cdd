import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { AdminAuthService } from '../../services/admin-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["previewFrame"];
function ThemeEditorComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 24);
    i0.ɵɵelement(4, "input", 25)(5, "input", 26);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r2.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", f_r2.key);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", f_r2.key);
} }
function ThemeEditorComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", f_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r3);
} }
function ThemeEditorComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", f_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r4);
} }
function ThemeEditorComponent_p_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.savedMsg);
} }
const FONTS = ['Lora', 'Inter', 'Source Serif 4', 'Playfair Display', 'Merriweather', 'Roboto'];
export class ThemeEditorComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.auth = inject(AdminAuthService);
        this.fb = inject(FormBuilder);
        this.base = environment.apiBase;
        this.fonts = FONTS;
        this.saving = false;
        this.colorFields = [
            { key: 'brand', label: 'Couleur principale' },
            { key: 'brandSecondary', label: 'Couleur secondaire' },
            { key: 'cta', label: 'Boutons (CTA)' },
            { key: 'accent', label: 'Accent / liens' },
            { key: 'primaryBg', label: 'Fond de page' },
            { key: 'surface', label: 'Fond des cartes' },
            { key: 'text', label: 'Texte principal' },
            { key: 'muted', label: 'Texte secondaire' },
        ];
        this.savedMsg = '';
        this.logoFile = null;
        this.heroFile = null;
        this.previewReady = false;
        this.form = this.fb.group({
            brand: ['#1D546C'],
            brandSecondary: ['#1A3D64'],
            cta: ['#0C2B4E'],
            accent: ['#00B7B5'],
            primaryBg: ['#F4F4F4'],
            surface: ['#FFFFFF'],
            text: ['#111111'],
            muted: ['#334155'],
            fontHeading: ['Lora'],
            fontBody: ['Inter'],
        });
    }
    ngOnInit() {
        this.http.get(`${this.base}/settings/theme`).subscribe({
            next: (t) => this.form.patchValue(t),
            error: () => { },
        });
        // Envoie le thème en preview dès que l'iframe est prête
        this.form.valueChanges.subscribe(() => this.sendPreview());
    }
    ngOnDestroy() {
        this.resetPreview();
    }
    onIframeLoad() {
        this.previewReady = true;
        this.sendPreview();
    }
    sendPreview() {
        var _a, _b;
        if (!this.previewReady || !((_b = (_a = this.previewFrame) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.contentWindow))
            return;
        this.previewFrame.nativeElement.contentWindow.postMessage({ type: 'THEME_PREVIEW', theme: this.form.value }, '*');
    }
    resetPreview() {
        var _a, _b, _c;
        (_c = (_b = (_a = this.previewFrame) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.contentWindow) === null || _c === void 0 ? void 0 : _c.postMessage({ type: 'THEME_RESET' }, '*');
    }
    onLogoChange(e) {
        var _a, _b;
        this.logoFile = (_b = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
        this.sendPreview();
    }
    onHeroChange(e) {
        var _a, _b;
        this.heroFile = (_b = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    async save() {
        this.saving = true;
        const token = await this.auth.getToken();
        const headers = { Authorization: `Bearer ${token}` };
        this.http.patch(`${this.base}/settings/theme`, this.form.value, { headers }).subscribe({
            next: async () => {
                if (this.logoFile)
                    await this.uploadImage('logoUrl', this.logoFile, headers);
                if (this.heroFile)
                    await this.uploadImage('heroImageUrl', this.heroFile, headers);
                this.savedMsg = 'Thème sauvegardé.';
                this.saving = false;
                setTimeout(() => (this.savedMsg = ''), 3000);
            },
            error: () => { this.saving = false; },
        });
    }
    uploadImage(field, file, headers) {
        return new Promise((resolve) => {
            const fd = new FormData();
            fd.append('file', file);
            this.http
                .post(`${this.base}/settings/theme/image/${field}`, fd, { headers })
                .subscribe(() => resolve());
        });
    }
}
ThemeEditorComponent.ɵfac = function ThemeEditorComponent_Factory(t) { return new (t || ThemeEditorComponent)(); };
ThemeEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ThemeEditorComponent, selectors: [["app-theme-editor"]], viewQuery: function ThemeEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.previewFrame = _t.first);
    } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 48, vars: 7, consts: [["previewFrame", ""], [1, "editor-shell"], [1, "controls-panel"], [1, "panel-header"], [1, "controls-form", 3, "formGroup"], [1, "section-label"], [1, "color-grid"], ["class", "color-field", 4, "ngFor", "ngForOf"], [1, "two-cols"], [1, "field"], ["formControlName", "fontHeading"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "fontBody"], ["type", "file", "accept", "image/*", 3, "change"], [1, "save-row"], [1, "btn-primary", 3, "click", "disabled"], ["class", "saved-msg", 4, "ngIf"], [1, "preview-panel"], [1, "preview-header"], [1, "preview-label"], [1, "preview-url"], [1, "preview-frame-wrap"], ["src", i0.ɵɵtrustConstantResourceUrl `/`, "title", "Aper\u00E7u du site", 1, "preview-iframe", 3, "load"], [1, "color-field"], [1, "color-input-wrap"], ["type", "color", 3, "formControlName"], ["type", "text", "maxlength", "7", 1, "hex-input", 3, "formControlName"], [3, "value"], [1, "saved-msg"]], template: function ThemeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
        i0.ɵɵtext(4, "Th\u00E8me & couleurs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Les changements sont visibles en direct dans l'aper\u00E7u.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "form", 4)(8, "div", 5);
        i0.ɵɵtext(9, "Couleurs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵtemplate(11, ThemeEditorComponent_div_11_Template, 6, 3, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 5);
        i0.ɵɵtext(13, "Typographie");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 8)(15, "div", 9)(16, "label");
        i0.ɵɵtext(17, "Police des titres");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "select", 10);
        i0.ɵɵtemplate(19, ThemeEditorComponent_option_19_Template, 2, 2, "option", 11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "div", 9)(21, "label");
        i0.ɵɵtext(22, "Police du corps");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "select", 12);
        i0.ɵɵtemplate(24, ThemeEditorComponent_option_24_Template, 2, 2, "option", 11);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(25, "div", 5);
        i0.ɵɵtext(26, "Images");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 9)(28, "label");
        i0.ɵɵtext(29, "Logo de l'\u00E9glise");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "input", 13);
        i0.ɵɵlistener("change", function ThemeEditorComponent_Template_input_change_30_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onLogoChange($event)); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "div", 9)(32, "label");
        i0.ɵɵtext(33, "Image hero (page d'accueil)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "input", 13);
        i0.ɵɵlistener("change", function ThemeEditorComponent_Template_input_change_34_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onHeroChange($event)); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(35, "div", 14)(36, "button", 15);
        i0.ɵɵlistener("click", function ThemeEditorComponent_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.save()); });
        i0.ɵɵtext(37);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(38, ThemeEditorComponent_p_38_Template, 2, 1, "p", 16);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(39, "div", 17)(40, "div", 18)(41, "span", 19);
        i0.ɵɵtext(42, "Aper\u00E7u live");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "span", 20);
        i0.ɵɵtext(44, "cmciea-france.com");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(45, "div", 21)(46, "iframe", 22, 0);
        i0.ɵɵlistener("load", function ThemeEditorComponent_Template_iframe_load_46_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onIframeLoad()); });
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.colorFields);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.fonts);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.fonts);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("disabled", ctx.saving);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Sauvegarde..." : "\u2713 Sauvegarder le th\u00E8me", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.savedMsg);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName], styles: [".editor-shell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  height: calc(100vh - 64px);\n  max-width: 1400px;\n}\n\n\n\n.controls-panel[_ngcontent-%COMP%] {\n  width: 380px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow-y: auto;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  padding: 20px 24px 0;\n  border-bottom: 1px solid #eef0f7;\n  padding-bottom: 16px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 17px; font-weight: 700; color: #1a1f2e; }\n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 12px; color: #8b93a8; margin-top: 3px; }\n\n.controls-form[_ngcontent-%COMP%] { padding: 20px 24px; display: flex; flex-direction: column; gap: 12px; }\n\n.section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #8b93a8;\n  margin-top: 8px;\n  margin-bottom: 2px;\n}\n\n.color-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.color-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #6b7898;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.color-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8f9fc;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  padding: 4px 8px;\n}\n\n.color-input-wrap[_ngcontent-%COMP%]   input[type=\"color\"][_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  border-radius: 4px;\n}\n\n.hex-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: none;\n  font-size: 12px;\n  font-family: monospace;\n  color: #3d4663;\n  outline: none;\n}\n\n.two-cols[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 5px; }\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 11px; font-weight: 500; color: #6b7898; }\n\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n\n.save-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 8px;\n  padding-top: 16px;\n  border-top: 1px solid #eef0f7;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #1a1f2e;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) { background: #4f7dff; }\n.btn-primary[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.saved-msg[_ngcontent-%COMP%] { font-size: 13px; color: #16a34a; }\n\n\n\n.preview-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow: hidden;\n  min-width: 0;\n}\n\n.preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: #f8f9fc;\n  border-bottom: 1px solid #eef0f7;\n}\n\n.preview-label[_ngcontent-%COMP%] { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7898; }\n.preview-url[_ngcontent-%COMP%] { font-size: 12px; color: #3d4663; font-family: monospace; }\n\n.preview-frame-wrap[_ngcontent-%COMP%] { flex: 1; overflow: hidden; }\n\n.preview-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  transform-origin: top left;\n}\n\n@media (max-width: 1024px) {\n  .editor-shell[_ngcontent-%COMP%] { flex-direction: column; height: auto; }\n  .controls-panel[_ngcontent-%COMP%] { width: 100%; }\n  .preview-panel[_ngcontent-%COMP%] { height: 500px; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeEditorComponent, [{
        type: Component,
        args: [{ selector: 'app-theme-editor', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"editor-shell\">\n\n  <!-- \u2500\u2500 Panneau gauche : contr\u00F4les \u2500\u2500 -->\n  <div class=\"controls-panel\">\n    <div class=\"panel-header\">\n      <h2>Th\u00E8me & couleurs</h2>\n      <p>Les changements sont visibles en direct dans l'aper\u00E7u.</p>\n    </div>\n\n    <form [formGroup]=\"form\" class=\"controls-form\">\n\n      <div class=\"section-label\">Couleurs</div>\n\n      <div class=\"color-grid\">\n        <div class=\"color-field\" *ngFor=\"let f of colorFields\">\n          <label>{{ f.label }}</label>\n          <div class=\"color-input-wrap\">\n            <input type=\"color\" [formControlName]=\"f.key\" />\n            <input type=\"text\" [formControlName]=\"f.key\" class=\"hex-input\" maxlength=\"7\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"section-label\">Typographie</div>\n\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Police des titres</label>\n          <select formControlName=\"fontHeading\">\n            <option *ngFor=\"let f of fonts\" [value]=\"f\">{{ f }}</option>\n          </select>\n        </div>\n        <div class=\"field\">\n          <label>Police du corps</label>\n          <select formControlName=\"fontBody\">\n            <option *ngFor=\"let f of fonts\" [value]=\"f\">{{ f }}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"section-label\">Images</div>\n\n      <div class=\"field\">\n        <label>Logo de l'\u00E9glise</label>\n        <input type=\"file\" accept=\"image/*\" (change)=\"onLogoChange($event)\" />\n      </div>\n\n      <div class=\"field\">\n        <label>Image hero (page d'accueil)</label>\n        <input type=\"file\" accept=\"image/*\" (change)=\"onHeroChange($event)\" />\n      </div>\n\n      <div class=\"save-row\">\n        <button class=\"btn-primary\" (click)=\"save()\" [disabled]=\"saving\">\n          {{ saving ? 'Sauvegarde...' : '\u2713 Sauvegarder le th\u00E8me' }}\n        </button>\n        <p class=\"saved-msg\" *ngIf=\"savedMsg\">{{ savedMsg }}</p>\n      </div>\n\n    </form>\n  </div>\n\n  <!-- \u2500\u2500 Panneau droit : pr\u00E9visualisation \u2500\u2500 -->\n  <div class=\"preview-panel\">\n    <div class=\"preview-header\">\n      <span class=\"preview-label\">Aper\u00E7u live</span>\n      <span class=\"preview-url\">cmciea-france.com</span>\n    </div>\n    <div class=\"preview-frame-wrap\">\n      <iframe\n        #previewFrame\n        src=\"/\"\n        (load)=\"onIframeLoad()\"\n        class=\"preview-iframe\"\n        title=\"Aper\u00E7u du site\"\n      ></iframe>\n    </div>\n  </div>\n\n</div>\n", styles: [".editor-shell {\n  display: flex;\n  gap: 24px;\n  height: calc(100vh - 64px);\n  max-width: 1400px;\n}\n\n/* \u2500\u2500 Panneau gauche \u2500\u2500 */\n.controls-panel {\n  width: 380px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow-y: auto;\n}\n\n.panel-header {\n  padding: 20px 24px 0;\n  border-bottom: 1px solid #eef0f7;\n  padding-bottom: 16px;\n}\n\n.panel-header h2 { font-size: 17px; font-weight: 700; color: #1a1f2e; }\n.panel-header p { font-size: 12px; color: #8b93a8; margin-top: 3px; }\n\n.controls-form { padding: 20px 24px; display: flex; flex-direction: column; gap: 12px; }\n\n.section-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #8b93a8;\n  margin-top: 8px;\n  margin-bottom: 2px;\n}\n\n.color-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.color-field label {\n  font-size: 11px;\n  font-weight: 500;\n  color: #6b7898;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.color-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8f9fc;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  padding: 4px 8px;\n}\n\n.color-input-wrap input[type=\"color\"] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  border-radius: 4px;\n}\n\n.hex-input {\n  flex: 1;\n  border: none;\n  background: none;\n  font-size: 12px;\n  font-family: monospace;\n  color: #3d4663;\n  outline: none;\n}\n\n.two-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n\n.field { display: flex; flex-direction: column; gap: 5px; }\n\n.field label { font-size: 11px; font-weight: 500; color: #6b7898; }\n\n.field select,\n.field input[type=\"file\"] {\n  padding: 8px 10px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 13px;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n\n.save-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 8px;\n  padding-top: 16px;\n  border-top: 1px solid #eef0f7;\n}\n\n.btn-primary {\n  padding: 10px 20px;\n  background: #1a1f2e;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-primary:hover:not(:disabled) { background: #4f7dff; }\n.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.saved-msg { font-size: 13px; color: #16a34a; }\n\n/* \u2500\u2500 Panneau droit (pr\u00E9visualisation) \u2500\u2500 */\n.preview-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow: hidden;\n  min-width: 0;\n}\n\n.preview-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: #f8f9fc;\n  border-bottom: 1px solid #eef0f7;\n}\n\n.preview-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7898; }\n.preview-url { font-size: 12px; color: #3d4663; font-family: monospace; }\n\n.preview-frame-wrap { flex: 1; overflow: hidden; }\n\n.preview-iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  transform-origin: top left;\n}\n\n@media (max-width: 1024px) {\n  .editor-shell { flex-direction: column; height: auto; }\n  .controls-panel { width: 100%; }\n  .preview-panel { height: 500px; }\n}\n"] }]
    }], null, { previewFrame: [{
            type: ViewChild,
            args: ['previewFrame']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ThemeEditorComponent, { className: "ThemeEditorComponent", filePath: "app\\admin\\pages\\theme-editor\\theme-editor.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=theme-editor.component.js.map