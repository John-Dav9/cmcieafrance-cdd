import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function BibliothequeComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "div", 21);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r0.uploadProgress, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.uploadProgress, "%");
} }
function BibliothequeComponent_p_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.successMsg);
} }
function BibliothequeComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function BibliothequeComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1, "Aucun livre.");
    i0.ɵɵelementEnd();
} }
function BibliothequeComponent_div_42_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 37);
} if (rf & 2) {
    const l_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", l_r3.coverUrl, i0.ɵɵsanitizeUrl)("alt", l_r3.titre);
} }
function BibliothequeComponent_div_42_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1, "\uD83D\uDCD6");
    i0.ɵɵelementEnd();
} }
function BibliothequeComponent_div_42_div_1_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r3.auteur);
} }
function BibliothequeComponent_div_42_div_1_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r3.categorie);
} }
function BibliothequeComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28);
    i0.ɵɵtemplate(2, BibliothequeComponent_div_42_div_1_img_2_Template, 1, 2, "img", 29)(3, BibliothequeComponent_div_42_div_1_div_3_Template, 2, 0, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 31)(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BibliothequeComponent_div_42_div_1_p_7_Template, 2, 1, "p", 32)(8, BibliothequeComponent_div_42_div_1_p_8_Template, 2, 1, "p", 33);
    i0.ɵɵelementStart(9, "div", 34)(10, "a", 35);
    i0.ɵɵtext(11, "Voir PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 36);
    i0.ɵɵlistener("click", function BibliothequeComponent_div_42_div_1_Template_button_click_12_listener() { const l_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.delete(l_r3.id)); });
    i0.ɵɵtext(13, "\u2715");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const l_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", l_r3.coverUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !l_r3.coverUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(l_r3.titre);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r3.auteur);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r3.categorie);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", l_r3.pdfUrl, i0.ɵɵsanitizeUrl);
} }
function BibliothequeComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, BibliothequeComponent_div_42_div_1_Template, 14, 6, "div", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.livres);
} }
export class BibliothequeComponent {
    constructor() {
        this.api = inject(ApiService);
        this.fb = inject(FormBuilder);
        this.livres = [];
        this.loading = true;
        this.uploading = false;
        this.uploadProgress = 0;
        this.successMsg = '';
        this.pdfFile = null;
        this.coverFile = null;
        this.form = this.fb.group({
            titre: ['', Validators.required],
            auteur: [''],
            description: [''],
            categorie: [''],
        });
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getLivres().subscribe({
            next: (data) => { this.livres = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    onPdfChange(e) {
        var _a, _b;
        this.pdfFile = (_b = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    onCoverChange(e) {
        var _a, _b;
        this.coverFile = (_b = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    submit() {
        if (this.form.invalid || !this.pdfFile)
            return;
        const fd = new FormData();
        Object.entries(this.form.value).forEach(([k, v]) => { if (v)
            fd.append(k, v); });
        fd.append('pdf', this.pdfFile);
        if (this.coverFile)
            fd.append('cover', this.coverFile);
        this.uploading = true;
        this.uploadProgress = 0;
        this.api.uploadLivre(fd).subscribe({
            next: (event) => {
                if (event.type === HttpEventType.UploadProgress && event.total) {
                    this.uploadProgress = Math.round((100 * event.loaded) / event.total);
                }
                else if (event.type === HttpEventType.Response) {
                    this.successMsg = 'Livre ajouté avec succès.';
                    this.form.reset();
                    this.pdfFile = null;
                    this.coverFile = null;
                    this.uploading = false;
                    this.load();
                    setTimeout(() => (this.successMsg = ''), 3000);
                }
            },
            error: () => { this.uploading = false; },
        });
    }
    delete(id) {
        if (!confirm('Supprimer ce livre ?'))
            return;
        this.api.deleteLivre(id).subscribe(() => {
            this.livres = this.livres.filter((l) => l.id !== id);
        });
    }
}
BibliothequeComponent.ɵfac = function BibliothequeComponent_Factory(t) { return new (t || BibliothequeComponent)(); };
BibliothequeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BibliothequeComponent, selectors: [["app-admin-bibliotheque"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 43, vars: 8, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "two-cols"], [1, "field"], ["type", "text", "formControlName", "titre", "placeholder", "Titre du livre"], ["type", "text", "formControlName", "auteur", "placeholder", "Nom de l'auteur"], ["formControlName", "description", "placeholder", "R\u00E9sum\u00E9..."], ["type", "text", "formControlName", "categorie", "placeholder", "Trait\u00E9, Bible, \u00C9tude..."], ["type", "file", "accept", ".pdf", 3, "change"], ["type", "file", "accept", "image/*", 3, "change"], ["class", "progress-bar", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "success-msg", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "livres-grid", 4, "ngIf"], [1, "progress-bar"], [1, "progress-fill"], [1, "success-msg"], [1, "loading"], [1, "empty"], [1, "livres-grid"], ["class", "livre-card", 4, "ngFor", "ngForOf"], [1, "livre-card"], [1, "livre-cover"], [3, "src", "alt", 4, "ngIf"], ["class", "cover-placeholder", 4, "ngIf"], [1, "livre-info"], ["class", "auteur", 4, "ngIf"], ["class", "categorie", 4, "ngIf"], [1, "livre-actions"], ["target", "_blank", 1, "btn-pdf", 3, "href"], [1, "btn-del", 3, "click"], [3, "src", "alt"], [1, "cover-placeholder"], [1, "auteur"], [1, "categorie"]], template: function BibliothequeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Biblioth\u00E8que");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3)(5, "h3");
        i0.ɵɵtext(6, "Ajouter un livre / trait\u00E9");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "form", 4);
        i0.ɵɵlistener("ngSubmit", function BibliothequeComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
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
        i0.ɵɵtext(19, "Description");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "textarea", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 5)(22, "div", 6)(23, "label");
        i0.ɵɵtext(24, "Cat\u00E9gorie");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(25, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "div", 5)(27, "div", 6)(28, "label");
        i0.ɵɵtext(29, "Fichier PDF *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "input", 11);
        i0.ɵɵlistener("change", function BibliothequeComponent_Template_input_change_30_listener($event) { return ctx.onPdfChange($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "div", 6)(32, "label");
        i0.ɵɵtext(33, "Image de couverture");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "input", 12);
        i0.ɵɵlistener("change", function BibliothequeComponent_Template_input_change_34_listener($event) { return ctx.onCoverChange($event); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(35, BibliothequeComponent_div_35_Template, 4, 3, "div", 13);
        i0.ɵɵelementStart(36, "div", 14)(37, "button", 15);
        i0.ɵɵtext(38);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(39, BibliothequeComponent_p_39_Template, 2, 1, "p", 16);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(40, BibliothequeComponent_div_40_Template, 2, 0, "div", 17)(41, BibliothequeComponent_div_41_Template, 2, 0, "div", 18)(42, BibliothequeComponent_div_42_Template, 2, 1, "div", 19);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(28);
        i0.ɵɵproperty("ngIf", ctx.uploading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.form.invalid || !ctx.pdfFile || ctx.uploading);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.uploading ? "Envoi..." : "Ajouter", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.successMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.livres.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.livres.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], styles: ["@import '../../admin-shared.css';\n\n.two-cols[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\ninput[type=\"file\"][_ngcontent-%COMP%] {\n  padding: 6px 0;\n  font-size: 13px;\n  color: #3d4663;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background: #eef0f7;\n  border-radius: 20px;\n  height: 20px;\n  position: relative;\n  overflow: hidden;\n  margin: 8px 0;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  background: #4f7dff;\n  height: 100%;\n  border-radius: 20px;\n  transition: width 0.2s;\n}\n\n.progress-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 2px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #1a1f2e;\n}\n\n.livres-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n\n.livre-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  border: 1px solid #eef0f7;\n}\n\n.livre-cover[_ngcontent-%COMP%] {\n  height: 140px;\n  background: #f4f6f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.livre-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; }\n\n.cover-placeholder[_ngcontent-%COMP%] { font-size: 48px; }\n\n.livre-info[_ngcontent-%COMP%] { padding: 14px; }\n.livre-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #1a1f2e; margin-bottom: 4px; }\n.auteur[_ngcontent-%COMP%] { font-size: 12px; color: #6b7898; }\n.categorie[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8b5cf6;\n  background: #f5f3ff;\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  margin-top: 4px;\n  font-weight: 600;\n}\n\n.livre-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 12px;\n}\n\n.btn-pdf[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4f7dff;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.btn-pdf[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n\n@media (max-width: 600px) {\n  .two-cols[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BibliothequeComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-bibliotheque', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Biblioth\u00E8que</h2>\n  </div>\n\n  <div class=\"form-card\">\n    <h3>Ajouter un livre / trait\u00E9</h3>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Titre *</label>\n          <input type=\"text\" formControlName=\"titre\" placeholder=\"Titre du livre\" />\n        </div>\n        <div class=\"field\">\n          <label>Auteur</label>\n          <input type=\"text\" formControlName=\"auteur\" placeholder=\"Nom de l'auteur\" />\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Description</label>\n        <textarea formControlName=\"description\" placeholder=\"R\u00E9sum\u00E9...\"></textarea>\n      </div>\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Cat\u00E9gorie</label>\n          <input type=\"text\" formControlName=\"categorie\" placeholder=\"Trait\u00E9, Bible, \u00C9tude...\" />\n        </div>\n      </div>\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Fichier PDF *</label>\n          <input type=\"file\" accept=\".pdf\" (change)=\"onPdfChange($event)\" />\n        </div>\n        <div class=\"field\">\n          <label>Image de couverture</label>\n          <input type=\"file\" accept=\"image/*\" (change)=\"onCoverChange($event)\" />\n        </div>\n      </div>\n\n      <div class=\"progress-bar\" *ngIf=\"uploading\">\n        <div class=\"progress-fill\" [style.width.%]=\"uploadProgress\"></div>\n        <span>{{ uploadProgress }}%</span>\n      </div>\n\n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn-primary\" [disabled]=\"form.invalid || !pdfFile || uploading\">\n          {{ uploading ? 'Envoi...' : 'Ajouter' }}\n        </button>\n      </div>\n      <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n    </form>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n  <div *ngIf=\"!loading && livres.length === 0\" class=\"empty\">Aucun livre.</div>\n\n  <div *ngIf=\"!loading && livres.length > 0\" class=\"livres-grid\">\n    <div *ngFor=\"let l of livres\" class=\"livre-card\">\n      <div class=\"livre-cover\">\n        <img *ngIf=\"l.coverUrl\" [src]=\"l.coverUrl\" [alt]=\"l.titre\" />\n        <div *ngIf=\"!l.coverUrl\" class=\"cover-placeholder\">\uD83D\uDCD6</div>\n      </div>\n      <div class=\"livre-info\">\n        <h4>{{ l.titre }}</h4>\n        <p class=\"auteur\" *ngIf=\"l.auteur\">{{ l.auteur }}</p>\n        <p class=\"categorie\" *ngIf=\"l.categorie\">{{ l.categorie }}</p>\n        <div class=\"livre-actions\">\n          <a [href]=\"l.pdfUrl\" target=\"_blank\" class=\"btn-pdf\">Voir PDF</a>\n          <button class=\"btn-del\" (click)=\"delete(l.id)\">\u2715</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.two-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\ninput[type=\"file\"] {\n  padding: 6px 0;\n  font-size: 13px;\n  color: #3d4663;\n}\n\n.progress-bar {\n  background: #eef0f7;\n  border-radius: 20px;\n  height: 20px;\n  position: relative;\n  overflow: hidden;\n  margin: 8px 0;\n}\n\n.progress-fill {\n  background: #4f7dff;\n  height: 100%;\n  border-radius: 20px;\n  transition: width 0.2s;\n}\n\n.progress-bar span {\n  position: absolute;\n  right: 10px;\n  top: 2px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #1a1f2e;\n}\n\n.livres-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n\n.livre-card {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  border: 1px solid #eef0f7;\n}\n\n.livre-cover {\n  height: 140px;\n  background: #f4f6f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.livre-cover img { width: 100%; height: 100%; object-fit: cover; }\n\n.cover-placeholder { font-size: 48px; }\n\n.livre-info { padding: 14px; }\n.livre-info h4 { font-size: 14px; font-weight: 600; color: #1a1f2e; margin-bottom: 4px; }\n.auteur { font-size: 12px; color: #6b7898; }\n.categorie {\n  font-size: 11px;\n  color: #8b5cf6;\n  background: #f5f3ff;\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  margin-top: 4px;\n  font-weight: 600;\n}\n\n.livre-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 12px;\n}\n\n.btn-pdf {\n  font-size: 12px;\n  color: #4f7dff;\n  text-decoration: none;\n  font-weight: 600;\n}\n\n.btn-pdf:hover { text-decoration: underline; }\n\n@media (max-width: 600px) {\n  .two-cols { grid-template-columns: 1fr; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BibliothequeComponent, { className: "BibliothequeComponent", filePath: "app\\admin\\pages\\bibliotheque\\bibliotheque.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=bibliotheque.component.js.map