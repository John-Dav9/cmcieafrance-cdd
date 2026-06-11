import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { AdminAuthService } from '../../services/admin-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["previewFrame"];
function PagesEditorComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function PagesEditorComponent_button_6_Template_button_click_0_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectPage(p_r3.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", p_r3.id === ctx_r3.selectedPageId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r3.label);
} }
function PagesEditorComponent_ng_container_8_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "input", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r5.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", f_r5.key);
} }
function PagesEditorComponent_ng_container_8_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "textarea", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r5.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("formControlName", f_r5.key);
} }
function PagesEditorComponent_ng_container_8_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 23);
    i0.ɵɵlistener("change", function PagesEditorComponent_ng_container_8_ng_container_3_div_3_Template_input_change_3_listener($event) { i0.ɵɵrestoreView(_r6); const f_r5 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onImageChange(f_r5.field, $event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r5.label);
} }
function PagesEditorComponent_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PagesEditorComponent_ng_container_8_ng_container_3_div_1_Template, 4, 2, "div", 19)(2, PagesEditorComponent_ng_container_8_ng_container_3_div_2_Template, 4, 2, "div", 19)(3, PagesEditorComponent_ng_container_8_ng_container_3_div_3_Template, 4, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", f_r5.type === "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", f_r5.type === "textarea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", f_r5.type === "image");
} }
function PagesEditorComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, PagesEditorComponent_ng_container_8_ng_container_3_Template, 4, 3, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const section_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.fieldsForSection(section_r7));
} }
function PagesEditorComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.savedMsg);
} }
export const PAGE_SCHEMAS = {
    home: {
        label: 'Accueil',
        route: '/',
        fields: [
            { section: 'Héro', key: 'heroTagline', label: 'Accroche (petite ligne)', type: 'text' },
            { section: 'Héro', key: 'heroTitle', label: 'Titre principal', type: 'text' },
            { section: 'Héro', key: 'heroText', label: 'Texte d\'intro', type: 'textarea' },
            { section: 'Héro', key: 'heroImageUrl', label: 'Image de fond', type: 'image', field: 'heroImageUrl' },
            { section: 'Vision', key: 'visionHeading', label: 'Citation / Vision', type: 'textarea' },
            { section: 'Médias', key: 'mediaTitle', label: 'Titre section médias', type: 'text' },
            { section: 'Médias', key: 'mediaText', label: 'Texte médias', type: 'textarea' },
            { section: 'Médias', key: 'mediaYoutubeUrl', label: 'Lien chaîne YouTube', type: 'text' },
            { section: 'Médias', key: 'mediaButtonText', label: 'Texte du bouton', type: 'text' },
            { section: 'Contact', key: 'contactTitle', label: 'Titre contact', type: 'text' },
            { section: 'Contact', key: 'contactIntro', label: 'Intro contact', type: 'textarea' },
            { section: 'Contact', key: 'whatsappNumber', label: 'Numéro WhatsApp (ex: 33744896818)', type: 'text' },
            { section: 'Contact', key: 'contactEmail', label: 'Email de contact', type: 'text' },
        ],
    },
    'nous-connaitre': {
        label: 'Nous connaître',
        route: '/nous-connaitre',
        fields: [
            { section: 'Histoire', key: 'histoireTitle', label: 'Titre', type: 'text' },
            { section: 'Histoire', key: 'histoireContent', label: 'Contenu', type: 'textarea' },
            { section: 'Vision', key: 'visionTitle', label: 'Titre vision', type: 'text' },
            { section: 'Vision', key: 'visionContent', label: 'Contenu vision', type: 'textarea' },
        ],
    },
    'vie-de-leglise': {
        label: 'Vie de l\'église',
        route: '/vie-de-leglise',
        fields: [
            { section: 'Général', key: 'pageTitle', label: 'Titre de la page', type: 'text' },
            { section: 'Général', key: 'pageIntro', label: 'Introduction', type: 'textarea' },
            { section: 'Adresse', key: 'adresse', label: 'Adresse', type: 'text' },
            { section: 'Adresse', key: 'horaires', label: 'Horaires', type: 'textarea' },
        ],
    },
    'marathon-biblique': {
        label: 'Marathon Biblique',
        route: '/marathon-biblique',
        fields: [
            { section: 'Général', key: 'heroTitle', label: 'Titre', type: 'text' },
            { section: 'Général', key: 'heroSubtitle', label: 'Sous-titre', type: 'text' },
            { section: 'Général', key: 'description', label: 'Description', type: 'textarea' },
            { section: 'Dates', key: 'dateDebut', label: 'Date de début', type: 'text' },
            { section: 'Dates', key: 'dateFin', label: 'Date de fin', type: 'text' },
        ],
    },
    'premiere-visite': {
        label: 'Première visite',
        route: '/premiere-visite',
        fields: [
            { section: 'Général', key: 'heroTitle', label: 'Titre', type: 'text' },
            { section: 'Général', key: 'intro', label: 'Introduction', type: 'textarea' },
            { section: 'Infos pratiques', key: 'infosPratiques', label: 'Infos pratiques', type: 'textarea' },
        ],
    },
    'ministere-enfants': {
        label: 'Ministère Enfants',
        route: '/ministere-enfants',
        fields: [
            { section: 'Général', key: 'heroTitle', label: 'Titre', type: 'text' },
            { section: 'Général', key: 'description', label: 'Description', type: 'textarea' },
            { section: 'Image', key: 'imageUrl', label: 'Image principale', type: 'image', field: 'imageUrl' },
        ],
    },
};
export class PagesEditorComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.auth = inject(AdminAuthService);
        this.fb = inject(FormBuilder);
        this.base = environment.apiBase;
        this.pages = Object.entries(PAGE_SCHEMAS).map(([id, s]) => (Object.assign({ id }, s)));
        this.selectedPageId = 'home';
        this.schema = PAGE_SCHEMAS['home'];
        this.form = this.fb.group({});
        this.saving = false;
        this.savedMsg = '';
        this.previewReady = false;
        this.imageFiles = {};
    }
    get sections() {
        return [...new Set(this.schema.fields.map((f) => f.section))];
    }
    fieldsForSection(section) {
        return this.schema.fields.filter((f) => f.section === section);
    }
    ngOnInit() { this.loadPage(); }
    selectPage(id) {
        this.selectedPageId = id;
        this.schema = PAGE_SCHEMAS[id];
        this.imageFiles = {};
        this.buildForm();
        this.loadPage();
        this.previewReady = false;
    }
    buildForm() {
        const controls = {};
        this.schema.fields.forEach((f) => { if (f.type !== 'image')
            controls[f.key] = ['']; });
        this.form = this.fb.group(controls);
        this.form.valueChanges.subscribe(() => this.sendContentPreview());
    }
    loadPage() {
        this.http
            .get(`${this.base}/settings/pages/${this.selectedPageId}`)
            .subscribe({ next: (data) => { if (data)
                this.form.patchValue(data); } });
    }
    onIframeLoad() {
        this.previewReady = true;
        this.sendContentPreview();
    }
    sendContentPreview() {
        var _a, _b;
        if (!this.previewReady || !((_b = (_a = this.previewFrame) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.contentWindow))
            return;
        this.previewFrame.nativeElement.contentWindow.postMessage({ type: 'CONTENT_PREVIEW', pageId: this.selectedPageId, content: this.form.value }, '*');
    }
    onImageChange(field, e) {
        var _a;
        const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file)
            this.imageFiles[field] = file;
    }
    async save() {
        this.saving = true;
        const token = await this.auth.getToken();
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        this.http
            .patch(`${this.base}/settings/pages/${this.selectedPageId}`, this.form.value, { headers })
            .subscribe({
            next: async () => {
                for (const [field, file] of Object.entries(this.imageFiles)) {
                    await this.uploadImage(field, file, headers);
                }
                this.savedMsg = 'Page sauvegardée.';
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
                .post(`${this.base}/settings/pages/${this.selectedPageId}/image/${field}`, fd, { headers })
                .subscribe(() => resolve());
        });
    }
    get previewRoute() {
        return this.schema.route;
    }
}
PagesEditorComponent.ɵfac = function PagesEditorComponent_Factory(t) { return new (t || PagesEditorComponent)(); };
PagesEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagesEditorComponent, selectors: [["app-pages-editor"]], viewQuery: function PagesEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.previewFrame = _t.first);
    } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 22, vars: 8, consts: [["previewFrame", ""], [1, "editor-shell"], [1, "controls-panel"], [1, "panel-header"], [1, "page-tabs"], ["class", "page-tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "controls-form", 3, "formGroup"], [4, "ngFor", "ngForOf"], [1, "save-row"], [1, "btn-primary", 3, "click", "disabled"], ["class", "saved-msg", 4, "ngIf"], [1, "preview-panel"], [1, "preview-header"], [1, "preview-label"], [1, "preview-url"], [1, "preview-frame-wrap"], ["title", "Aper\u00E7u de la page", 1, "preview-iframe", 3, "load", "src"], [1, "page-tab", 3, "click"], [1, "section-label"], ["class", "field", 4, "ngIf"], [1, "field"], ["type", "text", 3, "formControlName"], [3, "formControlName"], ["type", "file", "accept", "image/*", 3, "change"], [1, "saved-msg"]], template: function PagesEditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2");
        i0.ɵɵtext(4, "\u00C9diteur de pages");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtemplate(6, PagesEditorComponent_button_6_Template, 2, 3, "button", 5);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "form", 6);
        i0.ɵɵtemplate(8, PagesEditorComponent_ng_container_8_Template, 4, 2, "ng-container", 7);
        i0.ɵɵelementStart(9, "div", 8)(10, "button", 9);
        i0.ɵɵlistener("click", function PagesEditorComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.save()); });
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, PagesEditorComponent_p_12_Template, 2, 1, "p", 10);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 11)(14, "div", 12)(15, "span", 13);
        i0.ɵɵtext(16, "Aper\u00E7u live");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "span", 14);
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "div", 15)(20, "iframe", 16, 0);
        i0.ɵɵlistener("load", function PagesEditorComponent_Template_iframe_load_20_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onIframeLoad()); });
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.pages);
        i0.ɵɵadvance();
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngForOf", ctx.sections);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.saving);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Sauvegarde..." : "\u2713 Sauvegarder", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.savedMsg);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.schema.route);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.previewRoute, i0.ɵɵsanitizeResourceUrl);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], styles: [".editor-shell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  height: calc(100vh - 64px);\n  max-width: 1400px;\n}\n\n.controls-panel[_ngcontent-%COMP%] {\n  width: 400px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow-y: auto;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #eef0f7;\n  position: sticky;\n  top: 0;\n  background: #fff;\n  z-index: 10;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 16px; font-weight: 700; color: #1a1f2e; margin-bottom: 10px; }\n\n.page-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.page-tab[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  border-radius: 20px;\n  border: 1px solid #dde1ec;\n  background: #f8f9fc;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7898;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\n.page-tab[_ngcontent-%COMP%]:hover { border-color: #4f7dff; color: #4f7dff; }\n.page-tab.active[_ngcontent-%COMP%] { background: #1a1f2e; color: #fff; border-color: #1a1f2e; }\n\n.controls-form[_ngcontent-%COMP%] { padding: 16px 20px; display: flex; flex-direction: column; gap: 10px; }\n\n.section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #8b93a8;\n  margin-top: 6px;\n}\n\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 5px; }\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 11px; font-weight: 500; color: #6b7898; }\n\n.field[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: inherit;\n  outline: none;\n  transition: border 0.15s;\n  background: #fff;\n}\n\n.field[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus { border-color: #4f7dff; }\n\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { min-height: 80px; resize: vertical; }\n\n.field[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] { font-size: 12px; color: #3d4663; padding: 4px 0; }\n\n.save-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 8px;\n  padding-top: 14px;\n  border-top: 1px solid #eef0f7;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #1a1f2e;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) { background: #4f7dff; }\n.btn-primary[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.saved-msg[_ngcontent-%COMP%] { font-size: 13px; color: #16a34a; }\n\n\n\n.preview-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow: hidden;\n  min-width: 0;\n}\n\n.preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: #f8f9fc;\n  border-bottom: 1px solid #eef0f7;\n}\n\n.preview-label[_ngcontent-%COMP%] { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7898; }\n.preview-url[_ngcontent-%COMP%] { font-size: 12px; color: #3d4663; font-family: monospace; }\n\n.preview-frame-wrap[_ngcontent-%COMP%] { flex: 1; overflow: hidden; }\n\n.preview-iframe[_ngcontent-%COMP%] { width: 100%; height: 100%; border: none; }\n\n@media (max-width: 1024px) {\n  .editor-shell[_ngcontent-%COMP%] { flex-direction: column; height: auto; }\n  .controls-panel[_ngcontent-%COMP%] { width: 100%; }\n  .preview-panel[_ngcontent-%COMP%] { height: 500px; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagesEditorComponent, [{
        type: Component,
        args: [{ selector: 'app-pages-editor', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"editor-shell\">\n\n  <!-- \u2500\u2500 Panneau gauche \u2500\u2500 -->\n  <div class=\"controls-panel\">\n    <div class=\"panel-header\">\n      <h2>\u00C9diteur de pages</h2>\n      <!-- S\u00E9lecteur de page -->\n      <div class=\"page-tabs\">\n        <button\n          *ngFor=\"let p of pages\"\n          class=\"page-tab\"\n          [class.active]=\"p.id === selectedPageId\"\n          (click)=\"selectPage(p.id)\"\n        >{{ p.label }}</button>\n      </div>\n    </div>\n\n    <form [formGroup]=\"form\" class=\"controls-form\">\n      <ng-container *ngFor=\"let section of sections\">\n        <div class=\"section-label\">{{ section }}</div>\n\n        <ng-container *ngFor=\"let f of fieldsForSection(section)\">\n\n          <!-- Champ texte -->\n          <div class=\"field\" *ngIf=\"f.type === 'text'\">\n            <label>{{ f.label }}</label>\n            <input type=\"text\" [formControlName]=\"f.key\" />\n          </div>\n\n          <!-- Champ textarea -->\n          <div class=\"field\" *ngIf=\"f.type === 'textarea'\">\n            <label>{{ f.label }}</label>\n            <textarea [formControlName]=\"f.key\"></textarea>\n          </div>\n\n          <!-- Champ image -->\n          <div class=\"field\" *ngIf=\"f.type === 'image'\">\n            <label>{{ f.label }}</label>\n            <input type=\"file\" accept=\"image/*\" (change)=\"onImageChange(f.field, $event)\" />\n          </div>\n\n        </ng-container>\n      </ng-container>\n\n      <div class=\"save-row\">\n        <button class=\"btn-primary\" (click)=\"save()\" [disabled]=\"saving\">\n          {{ saving ? 'Sauvegarde...' : '\u2713 Sauvegarder' }}\n        </button>\n        <p class=\"saved-msg\" *ngIf=\"savedMsg\">{{ savedMsg }}</p>\n      </div>\n    </form>\n  </div>\n\n  <!-- \u2500\u2500 Panneau droit : aper\u00E7u \u2500\u2500 -->\n  <div class=\"preview-panel\">\n    <div class=\"preview-header\">\n      <span class=\"preview-label\">Aper\u00E7u live</span>\n      <span class=\"preview-url\">{{ schema.route }}</span>\n    </div>\n    <div class=\"preview-frame-wrap\">\n      <iframe\n        #previewFrame\n        [src]=\"previewRoute\"\n        (load)=\"onIframeLoad()\"\n        class=\"preview-iframe\"\n        title=\"Aper\u00E7u de la page\"\n      ></iframe>\n    </div>\n  </div>\n\n</div>\n", styles: [".editor-shell {\n  display: flex;\n  gap: 24px;\n  height: calc(100vh - 64px);\n  max-width: 1400px;\n}\n\n.controls-panel {\n  width: 400px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow-y: auto;\n}\n\n.panel-header {\n  padding: 16px 20px;\n  border-bottom: 1px solid #eef0f7;\n  position: sticky;\n  top: 0;\n  background: #fff;\n  z-index: 10;\n}\n\n.panel-header h2 { font-size: 16px; font-weight: 700; color: #1a1f2e; margin-bottom: 10px; }\n\n.page-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.page-tab {\n  padding: 5px 12px;\n  border-radius: 20px;\n  border: 1px solid #dde1ec;\n  background: #f8f9fc;\n  font-size: 12px;\n  font-weight: 500;\n  color: #6b7898;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\n.page-tab:hover { border-color: #4f7dff; color: #4f7dff; }\n.page-tab.active { background: #1a1f2e; color: #fff; border-color: #1a1f2e; }\n\n.controls-form { padding: 16px 20px; display: flex; flex-direction: column; gap: 10px; }\n\n.section-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #8b93a8;\n  margin-top: 6px;\n}\n\n.field { display: flex; flex-direction: column; gap: 5px; }\n.field label { font-size: 11px; font-weight: 500; color: #6b7898; }\n\n.field input[type=\"text\"],\n.field textarea {\n  padding: 8px 10px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: inherit;\n  outline: none;\n  transition: border 0.15s;\n  background: #fff;\n}\n\n.field input[type=\"text\"]:focus,\n.field textarea:focus { border-color: #4f7dff; }\n\n.field textarea { min-height: 80px; resize: vertical; }\n\n.field input[type=\"file\"] { font-size: 12px; color: #3d4663; padding: 4px 0; }\n\n.save-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 8px;\n  padding-top: 14px;\n  border-top: 1px solid #eef0f7;\n}\n\n.btn-primary {\n  padding: 10px 20px;\n  background: #1a1f2e;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-primary:hover:not(:disabled) { background: #4f7dff; }\n.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }\n\n.saved-msg { font-size: 13px; color: #16a34a; }\n\n/* \u2500\u2500 Pr\u00E9visualisation \u2500\u2500 */\n.preview-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow: hidden;\n  min-width: 0;\n}\n\n.preview-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: #f8f9fc;\n  border-bottom: 1px solid #eef0f7;\n}\n\n.preview-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6b7898; }\n.preview-url { font-size: 12px; color: #3d4663; font-family: monospace; }\n\n.preview-frame-wrap { flex: 1; overflow: hidden; }\n\n.preview-iframe { width: 100%; height: 100%; border: none; }\n\n@media (max-width: 1024px) {\n  .editor-shell { flex-direction: column; height: auto; }\n  .controls-panel { width: 100%; }\n  .preview-panel { height: 500px; }\n}\n"] }]
    }], null, { previewFrame: [{
            type: ViewChild,
            args: ['previewFrame']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PagesEditorComponent, { className: "PagesEditorComponent", filePath: "app\\admin\\pages\\pages-editor\\pages-editor.component.ts", lineNumber: 86 }); })();
//# sourceMappingURL=pages-editor.component.js.map