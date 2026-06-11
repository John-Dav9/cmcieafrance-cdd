import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AdminActualitesComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function AdminActualitesComponent_button_42_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelEdit()); });
    i0.ɵɵtext(1, "Annuler");
    i0.ɵɵelementEnd();
} }
function AdminActualitesComponent_p_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.successMsg);
} }
function AdminActualitesComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AdminActualitesComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtext(1, "Aucun article.");
    i0.ɵɵelementEnd();
} }
function AdminActualitesComponent_div_46_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td")(7, "button", 29);
    i0.ɵɵlistener("click", function AdminActualitesComponent_div_46_tr_15_Template_button_click_7_listener() { const a_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.togglePubliee(a_r4)); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 30)(13, "button", 31);
    i0.ɵɵlistener("click", function AdminActualitesComponent_div_46_tr_15_Template_button_click_13_listener() { const a_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.edit(a_r4)); });
    i0.ɵɵtext(14, "\u270E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 32);
    i0.ɵɵlistener("click", function AdminActualitesComponent_div_46_tr_15_Template_button_click_15_listener() { const a_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.delete(a_r4.id)); });
    i0.ɵɵtext(16, "\u2715");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r4.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r4.auteur || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("publiee", a_r4.publiee);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", a_r4.publiee ? "Publi\u00E9" : "Brouillon", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 6, a_r4.createdAt, "dd/MM/yyyy"));
} }
function AdminActualitesComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Titre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Auteur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Statut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵtemplate(15, AdminActualitesComponent_div_46_tr_15_Template, 17, 9, "tr", 28);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngForOf", ctx_r1.actualites);
} }
export class AdminActualitesComponent {
    constructor() {
        this.api = inject(ApiService);
        this.fb = inject(FormBuilder);
        this.actualites = [];
        this.loading = true;
        this.saving = false;
        this.editId = null;
        this.successMsg = '';
        this.form = this.fb.group({
            titre: ['', Validators.required],
            contenu: ['', Validators.required],
            auteur: [''],
            imageUrl: [''],
            videoId: [''],
            tags: [''],
            publiee: [false],
        });
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getActualitesAdmin().subscribe({
            next: (data) => { this.actualites = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    submit() {
        if (this.form.invalid)
            return;
        this.saving = true;
        const obs = this.editId
            ? this.api.updateActualite(this.editId, this.form.value)
            : this.api.createActualite(this.form.value);
        obs.subscribe({
            next: () => {
                this.successMsg = this.editId ? 'Article mis à jour.' : 'Article créé.';
                this.form.reset({ publiee: false });
                this.editId = null;
                this.saving = false;
                this.load();
                setTimeout(() => (this.successMsg = ''), 3000);
            },
            error: () => { this.saving = false; },
        });
    }
    edit(a) {
        this.editId = a.id;
        this.form.patchValue(a);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    cancelEdit() {
        this.editId = null;
        this.form.reset({ publiee: false });
    }
    togglePubliee(a) {
        this.api.updateActualite(a.id, { publiee: !a.publiee }).subscribe(() => {
            a.publiee = !a.publiee;
        });
    }
    delete(id) {
        if (!confirm('Supprimer cet article ?'))
            return;
        this.api.deleteActualite(id).subscribe(() => {
            this.actualites = this.actualites.filter((a) => a.id !== id);
        });
    }
}
AdminActualitesComponent.ɵfac = function AdminActualitesComponent_Factory(t) { return new (t || AdminActualitesComponent)(); };
AdminActualitesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminActualitesComponent, selectors: [["app-admin-actualites"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 47, vars: 9, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "two-cols"], [1, "field"], ["type", "text", "formControlName", "titre", "placeholder", "Titre de l'article"], ["type", "text", "formControlName", "auteur", "placeholder", "Pasteur Fernand..."], ["formControlName", "contenu", "placeholder", "Corps de l'article...", 2, "min-height", "140px"], ["type", "text", "formControlName", "imageUrl", "placeholder", "https://..."], ["type", "text", "formControlName", "videoId", "placeholder", "dQw4w9WgXcQ"], ["type", "text", "formControlName", "tags", "placeholder", "bible, pri\u00E8re, culte"], [1, "field", 2, "justify-content", "flex-end"], [1, "check-label"], ["type", "checkbox", "formControlName", "publiee"], [1, "form-actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "button", "class", "btn-secondary", 3, "click", 4, "ngIf"], ["class", "success-msg", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "success-msg"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "toggle-btn", 3, "click"], [1, "actions"], [1, "btn-edit", 3, "click"], [1, "btn-del", 3, "click"]], template: function AdminActualitesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Actualit\u00E9s");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3)(5, "h3");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "form", 4);
        i0.ɵɵlistener("ngSubmit", function AdminActualitesComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        i0.ɵɵelementStart(8, "div", 5)(9, "div", 6)(10, "label");
        i0.ɵɵtext(11, "Titre *");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 6)(14, "label");
        i0.ɵɵtext(15, "Auteur");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "input", 8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "div", 6)(18, "label");
        i0.ɵɵtext(19, "Contenu *");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "textarea", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 5)(22, "div", 6)(23, "label");
        i0.ɵɵtext(24, "URL image de couverture");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(25, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 6)(27, "label");
        i0.ɵɵtext(28, "ID vid\u00E9o YouTube");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(29, "input", 11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(30, "div", 5)(31, "div", 6)(32, "label");
        i0.ɵɵtext(33, "Tags (virgule s\u00E9par\u00E9s)");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(34, "input", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 13)(36, "label", 14);
        i0.ɵɵelement(37, "input", 15);
        i0.ɵɵtext(38, " Publier imm\u00E9diatement ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(39, "div", 16)(40, "button", 17);
        i0.ɵɵtext(41);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(42, AdminActualitesComponent_button_42_Template, 2, 0, "button", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(43, AdminActualitesComponent_p_43_Template, 2, 1, "p", 19);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(44, AdminActualitesComponent_div_44_Template, 2, 0, "div", 20)(45, AdminActualitesComponent_div_45_Template, 2, 0, "div", 21)(46, AdminActualitesComponent_div_46_Template, 16, 1, "div", 22);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.editId ? "Modifier l'article" : "Nouvel article");
        i0.ɵɵadvance();
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(33);
        i0.ɵɵproperty("disabled", ctx.form.invalid || ctx.saving);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Enregistrement..." : ctx.editId ? "Mettre \u00E0 jour" : "Cr\u00E9er", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.editId);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.successMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.actualites.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.actualites.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], styles: ["@import '../../admin-shared.css';\n\n.two-cols[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n.check-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #3d4663;\n  cursor: pointer;\n  padding-top: 20px;\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  background: #f4f6f9;\n  color: #8b93a8;\n  transition: background 0.15s;\n}\n\n.toggle-btn.publiee[_ngcontent-%COMP%] { background: #f0fdf4; color: #16a34a; }\n\n.actions[_ngcontent-%COMP%] { display: flex; gap: 6px; }\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #4f7dff;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover { background: #eff6ff; }\n\n@media (max-width: 600px) {\n  .two-cols[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminActualitesComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-actualites', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Actualit\u00E9s</h2>\n  </div>\n\n  <div class=\"form-card\">\n    <h3>{{ editId ? 'Modifier l\\'article' : 'Nouvel article' }}</h3>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Titre *</label>\n          <input type=\"text\" formControlName=\"titre\" placeholder=\"Titre de l'article\" />\n        </div>\n        <div class=\"field\">\n          <label>Auteur</label>\n          <input type=\"text\" formControlName=\"auteur\" placeholder=\"Pasteur Fernand...\" />\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Contenu *</label>\n        <textarea formControlName=\"contenu\" placeholder=\"Corps de l'article...\" style=\"min-height:140px\"></textarea>\n      </div>\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>URL image de couverture</label>\n          <input type=\"text\" formControlName=\"imageUrl\" placeholder=\"https://...\" />\n        </div>\n        <div class=\"field\">\n          <label>ID vid\u00E9o YouTube</label>\n          <input type=\"text\" formControlName=\"videoId\" placeholder=\"dQw4w9WgXcQ\" />\n        </div>\n      </div>\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Tags (virgule s\u00E9par\u00E9s)</label>\n          <input type=\"text\" formControlName=\"tags\" placeholder=\"bible, pri\u00E8re, culte\" />\n        </div>\n        <div class=\"field\" style=\"justify-content:flex-end\">\n          <label class=\"check-label\">\n            <input type=\"checkbox\" formControlName=\"publiee\" />\n            Publier imm\u00E9diatement\n          </label>\n        </div>\n      </div>\n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn-primary\" [disabled]=\"form.invalid || saving\">\n          {{ saving ? 'Enregistrement...' : (editId ? 'Mettre \u00E0 jour' : 'Cr\u00E9er') }}\n        </button>\n        <button type=\"button\" class=\"btn-secondary\" *ngIf=\"editId\" (click)=\"cancelEdit()\">Annuler</button>\n      </div>\n      <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n    </form>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n  <div *ngIf=\"!loading && actualites.length === 0\" class=\"empty\">Aucun article.</div>\n\n  <div *ngIf=\"!loading && actualites.length > 0\" class=\"table-wrap\">\n    <table>\n      <thead>\n        <tr>\n          <th>Titre</th>\n          <th>Auteur</th>\n          <th>Statut</th>\n          <th>Date</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let a of actualites\">\n          <td><strong>{{ a.titre }}</strong></td>\n          <td>{{ a.auteur || '\u2014' }}</td>\n          <td>\n            <button class=\"toggle-btn\" [class.publiee]=\"a.publiee\" (click)=\"togglePubliee(a)\">\n              {{ a.publiee ? 'Publi\u00E9' : 'Brouillon' }}\n            </button>\n          </td>\n          <td>{{ a.createdAt | date:'dd/MM/yyyy' }}</td>\n          <td class=\"actions\">\n            <button class=\"btn-edit\" (click)=\"edit(a)\">\u270E</button>\n            <button class=\"btn-del\" (click)=\"delete(a.id)\">\u2715</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.two-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n.check-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #3d4663;\n  cursor: pointer;\n  padding-top: 20px;\n}\n\n.toggle-btn {\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  background: #f4f6f9;\n  color: #8b93a8;\n  transition: background 0.15s;\n}\n\n.toggle-btn.publiee { background: #f0fdf4; color: #16a34a; }\n\n.actions { display: flex; gap: 6px; }\n\n.btn-edit {\n  background: none;\n  border: none;\n  color: #4f7dff;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n\n.btn-edit:hover { background: #eff6ff; }\n\n@media (max-width: 600px) {\n  .two-cols { grid-template-columns: 1fr; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminActualitesComponent, { className: "AdminActualitesComponent", filePath: "app\\admin\\pages\\actualites\\actualites.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=actualites.component.js.map