import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AnnoncesComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.successMsg);
} }
function AnnoncesComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AnnoncesComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1, "Aucune annonce.");
    i0.ɵɵelementEnd();
} }
function AnnoncesComponent_div_29_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "br");
    i0.ɵɵelementStart(5, "span", 23);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td")(9, "button", 24);
    i0.ɵɵlistener("click", function AnnoncesComponent_div_29_tr_13_Template_button_click_9_listener() { const a_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.togglePubliee(a_r3)); });
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "button", 25);
    i0.ɵɵlistener("click", function AnnoncesComponent_div_29_tr_13_Template_button_click_15_listener() { const a_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.delete(a_r3.id)); });
    i0.ɵɵtext(16, "\u2715");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r3.titre);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind3(7, 6, a_r3.contenu, 0, 80), "...");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("publiee", a_r3.publiee);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", a_r3.publiee ? "Publi\u00E9e" : "Brouillon", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 10, a_r3.createdAt, "dd/MM/yyyy"));
} }
function AnnoncesComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Titre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Statut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "tbody");
    i0.ɵɵtemplate(13, AnnoncesComponent_div_29_tr_13_Template, 17, 13, "tr", 22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngForOf", ctx_r0.annonces);
} }
export class AnnoncesComponent {
    constructor() {
        this.api = inject(ApiService);
        this.fb = inject(FormBuilder);
        this.annonces = [];
        this.loading = true;
        this.saving = false;
        this.successMsg = '';
        this.form = this.fb.group({
            titre: ['', Validators.required],
            contenu: ['', Validators.required],
            publiee: [false],
            envoyerEmail: [false],
        });
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getAnnoncesAdmin().subscribe({
            next: (data) => { this.annonces = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    submit() {
        if (this.form.invalid || this.saving)
            return;
        this.saving = true;
        this.api.createAnnonce(this.form.value).subscribe({
            next: () => {
                this.successMsg = 'Annonce créée avec succès.';
                this.form.reset({ publiee: false, envoyerEmail: false });
                this.saving = false;
                this.load();
                setTimeout(() => (this.successMsg = ''), 3000);
            },
            error: () => { this.saving = false; },
        });
    }
    togglePubliee(a) {
        this.api.updateAnnonce(a.id, { publiee: !a.publiee }).subscribe(() => {
            a.publiee = !a.publiee;
        });
    }
    delete(id) {
        if (!confirm('Supprimer cette annonce ?'))
            return;
        this.api.deleteAnnonce(id).subscribe(() => {
            this.annonces = this.annonces.filter((a) => a.id !== id);
        });
    }
}
AnnoncesComponent.ɵfac = function AnnoncesComponent_Factory(t) { return new (t || AnnoncesComponent)(); };
AnnoncesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnnoncesComponent, selectors: [["app-admin-annonces"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 30, vars: 7, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "field"], ["type", "text", "formControlName", "titre", "placeholder", "Titre de l'annonce"], ["formControlName", "contenu", "placeholder", "Contenu de l'annonce..."], [1, "checkboxes"], [1, "check-label"], ["type", "checkbox", "formControlName", "publiee"], ["type", "checkbox", "formControlName", "envoyerEmail"], [1, "form-actions"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], ["class", "success-msg", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "success-msg"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "excerpt"], [1, "toggle-btn", 3, "click"], [1, "btn-del", 3, "click"]], template: function AnnoncesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Annonces");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3)(5, "h3");
        i0.ɵɵtext(6, "Nouvelle annonce");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "form", 4);
        i0.ɵɵlistener("ngSubmit", function AnnoncesComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        i0.ɵɵelementStart(8, "div", 5)(9, "label");
        i0.ɵɵtext(10, "Titre");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 5)(13, "label");
        i0.ɵɵtext(14, "Contenu");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "textarea", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 8)(17, "label", 9);
        i0.ɵɵelement(18, "input", 10);
        i0.ɵɵtext(19, " Publier sur le site ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "label", 9);
        i0.ɵɵelement(21, "input", 11);
        i0.ɵɵtext(22, " Envoyer par email \u00E0 tous les inscrits ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "div", 12)(24, "button", 13);
        i0.ɵɵlistener("click", function AnnoncesComponent_Template_button_click_24_listener() { return ctx.submit(); });
        i0.ɵɵtext(25);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(26, AnnoncesComponent_p_26_Template, 2, 1, "p", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(27, AnnoncesComponent_div_27_Template, 2, 0, "div", 15)(28, AnnoncesComponent_div_28_Template, 2, 0, "div", 16)(29, AnnoncesComponent_div_29_Template, 14, 1, "div", 17);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("disabled", ctx.form.invalid || ctx.saving);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Envoi en cours..." : "Publier", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.successMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.annonces.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.annonces.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.SlicePipe, i1.DatePipe, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], styles: ["@import '../../admin-shared.css';\n\n.checkboxes[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; margin: 4px 0 8px; }\n\n.check-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #3d4663;\n  cursor: pointer;\n}\n\n.check-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { cursor: pointer; }\n\n.excerpt[_ngcontent-%COMP%] { color: #8b93a8; font-size: 12px; }\n\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  background: #f4f6f9;\n  color: #8b93a8;\n  transition: background 0.15s;\n}\n\n.toggle-btn.publiee[_ngcontent-%COMP%] { background: #f0fdf4; color: #16a34a; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnnoncesComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-annonces', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Annonces</h2>\n  </div>\n\n  <!-- Formulaire -->\n  <div class=\"form-card\">\n    <h3>Nouvelle annonce</h3>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <div class=\"field\">\n        <label>Titre</label>\n        <input type=\"text\" formControlName=\"titre\" placeholder=\"Titre de l'annonce\" />\n      </div>\n      <div class=\"field\">\n        <label>Contenu</label>\n        <textarea formControlName=\"contenu\" placeholder=\"Contenu de l'annonce...\"></textarea>\n      </div>\n      <div class=\"checkboxes\">\n        <label class=\"check-label\">\n          <input type=\"checkbox\" formControlName=\"publiee\" />\n          Publier sur le site\n        </label>\n        <label class=\"check-label\">\n          <input type=\"checkbox\" formControlName=\"envoyerEmail\" />\n          Envoyer par email \u00E0 tous les inscrits\n        </label>\n      </div>\n      <div class=\"form-actions\">\n        <button type=\"button\" class=\"btn-primary\" [disabled]=\"form.invalid || saving\" (click)=\"submit()\">\n          {{ saving ? 'Envoi en cours...' : 'Publier' }}\n        </button>\n      </div>\n      <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n    </form>\n  </div>\n\n  <!-- Liste -->\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n  <div *ngIf=\"!loading && annonces.length === 0\" class=\"empty\">Aucune annonce.</div>\n\n  <div *ngIf=\"!loading && annonces.length > 0\" class=\"table-wrap\">\n    <table>\n      <thead>\n        <tr>\n          <th>Titre</th>\n          <th>Statut</th>\n          <th>Date</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let a of annonces\">\n          <td><strong>{{ a.titre }}</strong><br /><span class=\"excerpt\">{{ a.contenu | slice:0:80 }}...</span></td>\n          <td>\n            <button class=\"toggle-btn\" [class.publiee]=\"a.publiee\" (click)=\"togglePubliee(a)\">\n              {{ a.publiee ? 'Publi\u00E9e' : 'Brouillon' }}\n            </button>\n          </td>\n          <td>{{ a.createdAt | date:'dd/MM/yyyy' }}</td>\n          <td><button class=\"btn-del\" (click)=\"delete(a.id)\">\u2715</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.checkboxes { display: flex; flex-direction: column; gap: 8px; margin: 4px 0 8px; }\n\n.check-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #3d4663;\n  cursor: pointer;\n}\n\n.check-label input { cursor: pointer; }\n\n.excerpt { color: #8b93a8; font-size: 12px; }\n\n.toggle-btn {\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  background: #f4f6f9;\n  color: #8b93a8;\n  transition: background 0.15s;\n}\n\n.toggle-btn.publiee { background: #f0fdf4; color: #16a34a; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnnoncesComponent, { className: "AnnoncesComponent", filePath: "app\\admin\\pages\\annonces\\annonces.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=annonces.component.js.map