import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function EmailTemplatesComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "Chargement\u2026");
    i0.ɵɵelementEnd();
} }
function EmailTemplatesComponent_div_0_div_10_div_1_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", "{{", "", v_r4, "", "}}", "");
} }
function EmailTemplatesComponent_div_0_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function EmailTemplatesComponent_div_0_div_10_div_1_Template_div_click_0_listener() { const t_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.select(t_r2)); });
    i0.ɵɵelementStart(1, "div", 11)(2, "span", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 13);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 14);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 15);
    i0.ɵɵtemplate(9, EmailTemplatesComponent_div_0_div_10_div_1_span_9_Template, 2, 3, "span", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 17);
    i0.ɵɵtext(11, "Modifier \u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r2.label);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("et-badge--custom", t_r2.customized);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", t_r2.customized ? "Personnalis\u00E9" : "Par d\u00E9faut", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r2.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", t_r2.variables);
} }
function EmailTemplatesComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, EmailTemplatesComponent_div_0_div_10_div_1_Template, 12, 6, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.templates);
} }
function EmailTemplatesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
    i0.ɵɵtext(3, "Mod\u00E8les d'emails");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 4);
    i0.ɵɵtext(5, "Personnalisez les emails envoy\u00E9s automatiquement. Les variables entre ");
    i0.ɵɵelementStart(6, "code");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " sont remplac\u00E9es dynamiquement.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, EmailTemplatesComponent_div_0_div_9_Template, 2, 0, "div", 5)(10, EmailTemplatesComponent_div_0_div_10_Template, 2, 1, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", "{{", "\u2026", "}}", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.loading);
} }
function EmailTemplatesComponent_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", "{{", "", v_r6, "", "}}", "");
} }
function EmailTemplatesComponent_div_1_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2705 ", ctx_r2.successMsg, "");
} }
function EmailTemplatesComponent_div_1_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u26A0\uFE0F ", ctx_r2.errorMsg, "");
} }
function EmailTemplatesComponent_div_1_textarea_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function EmailTemplatesComponent_div_1_textarea_30_Template_textarea_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.editBody, $event) || (ctx_r2.editBody = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editBody);
} }
function EmailTemplatesComponent_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelement(1, "iframe", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("srcdoc", ctx_r2.previewHtml, i0.ɵɵsanitizeHtml);
} }
function EmailTemplatesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "button", 19);
    i0.ɵɵlistener("click", function EmailTemplatesComponent_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.back()); });
    i0.ɵɵtext(2, "\u2190 Retour aux mod\u00E8les");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 20)(4, "div")(5, "h2", 21);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 22);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 13);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 23)(12, "span", 24);
    i0.ɵɵtext(13, "Variables disponibles :");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, EmailTemplatesComponent_div_1_span_14_Template, 2, 3, "span", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, EmailTemplatesComponent_div_1_p_15_Template, 2, 1, "p", 25)(16, EmailTemplatesComponent_div_1_p_16_Template, 2, 1, "p", 26);
    i0.ɵɵelementStart(17, "div", 27)(18, "label", 28);
    i0.ɵɵtext(19, "Objet de l'email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function EmailTemplatesComponent_div_1_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.editSubject, $event) || (ctx_r2.editSubject = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 27)(22, "div", 30)(23, "label", 28);
    i0.ɵɵtext(24, "Corps de l'email (HTML)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 31)(26, "button", 32);
    i0.ɵɵlistener("click", function EmailTemplatesComponent_div_1_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showPreview = false); });
    i0.ɵɵtext(27, "\u00C9diter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 32);
    i0.ɵɵlistener("click", function EmailTemplatesComponent_div_1_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showPreview = true); });
    i0.ɵɵtext(29, "Aper\u00E7u");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(30, EmailTemplatesComponent_div_1_textarea_30_Template, 1, 1, "textarea", 33)(31, EmailTemplatesComponent_div_1_div_31_Template, 2, 1, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 35)(33, "button", 36);
    i0.ɵɵlistener("click", function EmailTemplatesComponent_div_1_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.reset()); });
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "button", 37);
    i0.ɵɵlistener("click", function EmailTemplatesComponent_div_1_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.save()); });
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.selected.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selected.description);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("et-badge--custom", ctx_r2.selected.customized);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.selected.customized ? "Personnalis\u00E9" : "Par d\u00E9faut", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r2.selected.variables);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.successMsg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.errorMsg);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.editSubject);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("et-tab--active", !ctx_r2.showPreview);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("et-tab--active", ctx_r2.showPreview);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.showPreview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showPreview);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.resetting || !ctx_r2.selected.customized);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.resetting ? "R\u00E9initialisation\u2026" : "\u21BA Remettre par d\u00E9faut", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.saving ? "Sauvegarde\u2026" : "\uD83D\uDCBE Sauvegarder", " ");
} }
export class EmailTemplatesComponent {
    constructor() {
        this.api = inject(ApiService);
        this.templates = [];
        this.loading = true;
        this.selected = null;
        this.editSubject = '';
        this.editBody = '';
        this.saving = false;
        this.resetting = false;
        this.successMsg = '';
        this.errorMsg = '';
        this.showPreview = false;
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.listEmailTemplates().subscribe({
            next: (data) => { this.templates = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    select(t) {
        this.loading = true;
        this.successMsg = '';
        this.errorMsg = '';
        this.api.getEmailTemplate(t.key).subscribe({
            next: (data) => {
                this.selected = data;
                this.editSubject = data.subject;
                this.editBody = data.body;
                this.loading = false;
                this.showPreview = false;
            },
            error: () => { this.loading = false; },
        });
    }
    back() {
        this.selected = null;
        this.successMsg = '';
        this.errorMsg = '';
        this.load();
    }
    save() {
        if (!this.selected)
            return;
        this.saving = true;
        this.successMsg = '';
        this.errorMsg = '';
        this.api.saveEmailTemplate(this.selected.key, this.editSubject, this.editBody).subscribe({
            next: () => {
                this.saving = false;
                this.successMsg = 'Modèle sauvegardé avec succès.';
                if (this.selected)
                    this.selected.customized = true;
            },
            error: () => {
                this.saving = false;
                this.errorMsg = 'Erreur lors de la sauvegarde.';
            },
        });
    }
    reset() {
        if (!this.selected)
            return;
        if (!confirm('Remettre ce modèle à sa valeur par défaut ?'))
            return;
        this.resetting = true;
        this.errorMsg = '';
        this.successMsg = '';
        this.api.resetEmailTemplate(this.selected.key).subscribe({
            next: () => {
                this.resetting = false;
                this.successMsg = 'Modèle remis par défaut. Rechargement…';
                setTimeout(() => this.select(this.selected), 800);
            },
            error: () => {
                this.resetting = false;
                this.errorMsg = 'Erreur lors de la réinitialisation.';
            },
        });
    }
    get previewHtml() {
        return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">${this.editBody}</div>`;
    }
}
EmailTemplatesComponent.ɵfac = function EmailTemplatesComponent_Factory(t) { return new (t || EmailTemplatesComponent)(); };
EmailTemplatesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmailTemplatesComponent, selectors: [["app-email-templates"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 2, consts: [["class", "et-page", 4, "ngIf"], [1, "et-page"], [1, "et-header"], [1, "et-title"], [1, "et-subtitle"], ["class", "et-loading", 4, "ngIf"], ["class", "et-grid", 4, "ngIf"], [1, "et-loading"], [1, "et-grid"], ["class", "et-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "et-card", 3, "click"], [1, "et-card-top"], [1, "et-card-label"], [1, "et-badge"], [1, "et-card-desc"], [1, "et-card-vars"], ["class", "et-var", 4, "ngFor", "ngForOf"], [1, "et-card-footer"], [1, "et-var"], [1, "et-back-btn", 3, "click"], [1, "et-editor-header"], [1, "et-editor-title"], [1, "et-editor-desc"], [1, "et-vars-block"], [1, "et-vars-label"], ["class", "et-success", 4, "ngIf"], ["class", "et-error", 4, "ngIf"], [1, "et-field"], [1, "et-label"], ["type", "text", "placeholder", "Sujet de l'email\u2026", 1, "et-input", 3, "ngModelChange", "ngModel"], [1, "et-body-header"], [1, "et-tabs"], [1, "et-tab", 3, "click"], ["class", "et-textarea", "placeholder", "HTML du corps de l'email\u2026", "rows", "20", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "et-preview", 4, "ngIf"], [1, "et-actions"], [1, "et-btn-reset", 3, "click", "disabled"], [1, "et-btn-save", 3, "click", "disabled"], [1, "et-success"], [1, "et-error"], ["placeholder", "HTML du corps de l'email\u2026", "rows", "20", 1, "et-textarea", 3, "ngModelChange", "ngModel"], [1, "et-preview"], ["title", "Aper\u00E7u email", 1, "et-preview-frame", 3, "srcdoc"]], template: function EmailTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EmailTemplatesComponent_div_0_Template, 11, 4, "div", 0)(1, EmailTemplatesComponent_div_1_Template, 37, 19, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.selected);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.selected);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".et-page[_ngcontent-%COMP%] { padding: 32px; max-width: 1100px; margin: 0 auto; }\n\n.et-header[_ngcontent-%COMP%] { margin-bottom: 32px; }\n.et-title[_ngcontent-%COMP%] { font-size: 26px; font-weight: 800; color: #1A3D64; margin: 0 0 8px; }\n.et-subtitle[_ngcontent-%COMP%] { color: #666; font-size: 14px; margin: 0; }\n.et-subtitle[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n\n.et-loading[_ngcontent-%COMP%] { color: #888; padding: 40px; text-align: center; }\n\n\n\n.et-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n.et-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid #e8e8e8;\n  border-radius: 14px;\n  padding: 20px;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.et-card[_ngcontent-%COMP%]:hover {\n  border-color: #1A3D64;\n  box-shadow: 0 4px 16px rgba(26,61,100,0.12);\n  transform: translateY(-2px);\n}\n\n.et-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.et-card-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1A3D64;\n}\n\n.et-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #eee;\n  color: #888;\n  white-space: nowrap;\n}\n\n.et-badge--custom[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n\n.et-card-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n  margin: 0;\n  line-height: 1.5;\n  flex: 1;\n}\n\n.et-card-vars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.et-var[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-family: monospace;\n  background: #EEF6FA;\n  color: #1D546C;\n  padding: 2px 8px;\n  border-radius: 4px;\n  border: 1px solid #b0d4e8;\n}\n\n.et-card-footer[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1D546C;\n  text-align: right;\n  margin-top: 4px;\n}\n\n\n\n.et-back-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1D546C;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 24px;\n  display: inline-block;\n}\n\n.et-back-btn[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n\n.et-editor-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.et-editor-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1A3D64;\n  margin: 0 0 6px;\n}\n\n.et-editor-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n\n.et-vars-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 24px;\n}\n\n.et-vars-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #666;\n  white-space: nowrap;\n}\n\n.et-field[_ngcontent-%COMP%] { margin-bottom: 20px; }\n\n.et-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: #444;\n  margin-bottom: 8px;\n}\n\n.et-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #222;\n  background: #fafafa;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n\n.et-input[_ngcontent-%COMP%]:focus { border-color: #1A3D64; background: #fff; }\n\n.et-body-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.et-tabs[_ngcontent-%COMP%] { display: flex; gap: 4px; }\n\n.et-tab[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  background: #fff;\n  color: #666;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.et-tab--active[_ngcontent-%COMP%] {\n  background: #1A3D64;\n  border-color: #1A3D64;\n  color: #fff;\n}\n\n.et-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: 'Courier New', monospace;\n  color: #222;\n  background: #fafafa;\n  outline: none;\n  box-sizing: border-box;\n  resize: vertical;\n  line-height: 1.6;\n  transition: border-color 0.2s;\n}\n\n.et-textarea[_ngcontent-%COMP%]:focus { border-color: #1A3D64; background: #fff; }\n\n.et-preview[_ngcontent-%COMP%] {\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n}\n\n.et-preview-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  border: none;\n  display: block;\n}\n\n.et-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n\n.et-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n\n.et-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  padding-top: 8px;\n  border-top: 1px solid #eee;\n}\n\n.et-btn-save[_ngcontent-%COMP%] {\n  padding: 11px 28px;\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n\n.et-btn-save[_ngcontent-%COMP%]:hover:not([disabled]) { opacity: 0.88; }\n.et-btn-save[disabled][_ngcontent-%COMP%] { opacity: 0.5; cursor: not-allowed; }\n\n.et-btn-reset[_ngcontent-%COMP%] {\n  padding: 11px 20px;\n  background: #fff;\n  color: #666;\n  border: 1.5px solid #ccc;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.et-btn-reset[_ngcontent-%COMP%]:hover:not([disabled]) { border-color: #999; color: #333; }\n.et-btn-reset[disabled][_ngcontent-%COMP%] { opacity: 0.45; cursor: not-allowed; }\n\n@media (max-width: 640px) {\n  .et-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .et-editor-header[_ngcontent-%COMP%] { flex-direction: column; }\n  .et-actions[_ngcontent-%COMP%] { flex-direction: column-reverse; }\n  .et-btn-save[_ngcontent-%COMP%], .et-btn-reset[_ngcontent-%COMP%] { width: 100%; text-align: center; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailTemplatesComponent, [{
        type: Component,
        args: [{ selector: 'app-email-templates', standalone: true, imports: [CommonModule, FormsModule], template: "<!-- \u2500\u2500 Liste des mod\u00E8les \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<div *ngIf=\"!selected\" class=\"et-page\">\n  <div class=\"et-header\">\n    <h1 class=\"et-title\">Mod\u00E8les d'emails</h1>\n    <p class=\"et-subtitle\">Personnalisez les emails envoy\u00E9s automatiquement. Les variables entre <code>{{\"{{\"}}\u2026{{\"}}\"}}</code> sont remplac\u00E9es dynamiquement.</p>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"et-loading\">Chargement\u2026</div>\n\n  <div *ngIf=\"!loading\" class=\"et-grid\">\n    <div *ngFor=\"let t of templates\" class=\"et-card\" (click)=\"select(t)\">\n      <div class=\"et-card-top\">\n        <span class=\"et-card-label\">{{ t.label }}</span>\n        <span class=\"et-badge\" [class.et-badge--custom]=\"t.customized\">\n          {{ t.customized ? 'Personnalis\u00E9' : 'Par d\u00E9faut' }}\n        </span>\n      </div>\n      <p class=\"et-card-desc\">{{ t.description }}</p>\n      <div class=\"et-card-vars\">\n        <span *ngFor=\"let v of t.variables\" class=\"et-var\">{{\"{{\"}}{{ v }}{{\"}}\"}}</span>\n      </div>\n      <div class=\"et-card-footer\">Modifier \u2192</div>\n    </div>\n  </div>\n</div>\n\n<!-- \u2500\u2500 \u00C9diteur \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<div *ngIf=\"selected\" class=\"et-page\">\n  <button class=\"et-back-btn\" (click)=\"back()\">\u2190 Retour aux mod\u00E8les</button>\n\n  <div class=\"et-editor-header\">\n    <div>\n      <h2 class=\"et-editor-title\">{{ selected.label }}</h2>\n      <p class=\"et-editor-desc\">{{ selected.description }}</p>\n    </div>\n    <span class=\"et-badge\" [class.et-badge--custom]=\"selected.customized\">\n      {{ selected.customized ? 'Personnalis\u00E9' : 'Par d\u00E9faut' }}\n    </span>\n  </div>\n\n  <!-- Variables disponibles -->\n  <div class=\"et-vars-block\">\n    <span class=\"et-vars-label\">Variables disponibles :</span>\n    <span *ngFor=\"let v of selected.variables\" class=\"et-var\">{{\"{{\"}}{{ v }}{{\"}}\"}}</span>\n  </div>\n\n  <!-- Messages -->\n  <p *ngIf=\"successMsg\" class=\"et-success\">\u2705 {{ successMsg }}</p>\n  <p *ngIf=\"errorMsg\" class=\"et-error\">\u26A0\uFE0F {{ errorMsg }}</p>\n\n  <!-- Sujet -->\n  <div class=\"et-field\">\n    <label class=\"et-label\">Objet de l'email</label>\n    <input class=\"et-input\" type=\"text\" [(ngModel)]=\"editSubject\" placeholder=\"Sujet de l'email\u2026\" />\n  </div>\n\n  <!-- Corps HTML -->\n  <div class=\"et-field\">\n    <div class=\"et-body-header\">\n      <label class=\"et-label\">Corps de l'email (HTML)</label>\n      <div class=\"et-tabs\">\n        <button class=\"et-tab\" [class.et-tab--active]=\"!showPreview\" (click)=\"showPreview=false\">\u00C9diter</button>\n        <button class=\"et-tab\" [class.et-tab--active]=\"showPreview\" (click)=\"showPreview=true\">Aper\u00E7u</button>\n      </div>\n    </div>\n\n    <textarea *ngIf=\"!showPreview\"\n      class=\"et-textarea\"\n      [(ngModel)]=\"editBody\"\n      placeholder=\"HTML du corps de l'email\u2026\"\n      rows=\"20\"\n    ></textarea>\n\n    <div *ngIf=\"showPreview\" class=\"et-preview\">\n      <iframe [srcdoc]=\"previewHtml\" class=\"et-preview-frame\" title=\"Aper\u00E7u email\"></iframe>\n    </div>\n  </div>\n\n  <!-- Actions -->\n  <div class=\"et-actions\">\n    <button class=\"et-btn-reset\" (click)=\"reset()\" [disabled]=\"resetting || !selected.customized\">\n      {{ resetting ? 'R\u00E9initialisation\u2026' : '\u21BA Remettre par d\u00E9faut' }}\n    </button>\n    <button class=\"et-btn-save\" (click)=\"save()\" [disabled]=\"saving\">\n      {{ saving ? 'Sauvegarde\u2026' : '\uD83D\uDCBE Sauvegarder' }}\n    </button>\n  </div>\n</div>\n", styles: [".et-page { padding: 32px; max-width: 1100px; margin: 0 auto; }\n\n.et-header { margin-bottom: 32px; }\n.et-title { font-size: 26px; font-weight: 800; color: #1A3D64; margin: 0 0 8px; }\n.et-subtitle { color: #666; font-size: 14px; margin: 0; }\n.et-subtitle code { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n\n.et-loading { color: #888; padding: 40px; text-align: center; }\n\n/* \u2500\u2500 Card grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.et-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n\n.et-card {\n  background: #fff;\n  border: 2px solid #e8e8e8;\n  border-radius: 14px;\n  padding: 20px;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.et-card:hover {\n  border-color: #1A3D64;\n  box-shadow: 0 4px 16px rgba(26,61,100,0.12);\n  transform: translateY(-2px);\n}\n\n.et-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.et-card-label {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1A3D64;\n}\n\n.et-badge {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: #eee;\n  color: #888;\n  white-space: nowrap;\n}\n\n.et-badge--custom {\n  background: #d1fae5;\n  color: #065f46;\n}\n\n.et-card-desc {\n  font-size: 13px;\n  color: #555;\n  margin: 0;\n  line-height: 1.5;\n  flex: 1;\n}\n\n.et-card-vars {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.et-var {\n  font-size: 11px;\n  font-family: monospace;\n  background: #EEF6FA;\n  color: #1D546C;\n  padding: 2px 8px;\n  border-radius: 4px;\n  border: 1px solid #b0d4e8;\n}\n\n.et-card-footer {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1D546C;\n  text-align: right;\n  margin-top: 4px;\n}\n\n/* \u2500\u2500 Editor \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.et-back-btn {\n  background: none;\n  border: none;\n  color: #1D546C;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 24px;\n  display: inline-block;\n}\n\n.et-back-btn:hover { text-decoration: underline; }\n\n.et-editor-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.et-editor-title {\n  font-size: 22px;\n  font-weight: 800;\n  color: #1A3D64;\n  margin: 0 0 6px;\n}\n\n.et-editor-desc {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n\n.et-vars-block {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 24px;\n}\n\n.et-vars-label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #666;\n  white-space: nowrap;\n}\n\n.et-field { margin-bottom: 20px; }\n\n.et-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: #444;\n  margin-bottom: 8px;\n}\n\n.et-input {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #222;\n  background: #fafafa;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n\n.et-input:focus { border-color: #1A3D64; background: #fff; }\n\n.et-body-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.et-tabs { display: flex; gap: 4px; }\n\n.et-tab {\n  padding: 6px 14px;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  background: #fff;\n  color: #666;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.et-tab--active {\n  background: #1A3D64;\n  border-color: #1A3D64;\n  color: #fff;\n}\n\n.et-textarea {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 13px;\n  font-family: 'Courier New', monospace;\n  color: #222;\n  background: #fafafa;\n  outline: none;\n  box-sizing: border-box;\n  resize: vertical;\n  line-height: 1.6;\n  transition: border-color 0.2s;\n}\n\n.et-textarea:focus { border-color: #1A3D64; background: #fff; }\n\n.et-preview {\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #fff;\n}\n\n.et-preview-frame {\n  width: 100%;\n  height: 500px;\n  border: none;\n  display: block;\n}\n\n.et-success {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n\n.et-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n\n.et-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  padding-top: 8px;\n  border-top: 1px solid #eee;\n}\n\n.et-btn-save {\n  padding: 11px 28px;\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n\n.et-btn-save:hover:not([disabled]) { opacity: 0.88; }\n.et-btn-save[disabled] { opacity: 0.5; cursor: not-allowed; }\n\n.et-btn-reset {\n  padding: 11px 20px;\n  background: #fff;\n  color: #666;\n  border: 1.5px solid #ccc;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.et-btn-reset:hover:not([disabled]) { border-color: #999; color: #333; }\n.et-btn-reset[disabled] { opacity: 0.45; cursor: not-allowed; }\n\n@media (max-width: 640px) {\n  .et-grid { grid-template-columns: 1fr; }\n  .et-editor-header { flex-direction: column; }\n  .et-actions { flex-direction: column-reverse; }\n  .et-btn-save, .et-btn-reset { width: 100%; text-align: center; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "app\\admin\\pages\\email-templates\\email-templates.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=email-templates.component.js.map