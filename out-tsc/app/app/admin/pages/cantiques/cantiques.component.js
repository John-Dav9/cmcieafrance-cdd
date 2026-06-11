import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AdminCantiquesComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function AdminCantiquesComponent_button_38_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.reset()); });
    i0.ɵɵtext(1, "Annuler");
    i0.ɵɵelementEnd();
} }
function AdminCantiquesComponent_p_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.message);
} }
function AdminCantiquesComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AdminCantiquesComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1, "Aucun cantique enregistr\u00E9.");
    i0.ɵɵelementEnd();
} }
function AdminCantiquesComponent_div_46_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 28)(13, "button", 29);
    i0.ɵɵlistener("click", function AdminCantiquesComponent_div_46_tr_17_Template_button_click_13_listener() { const cantique_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.edit(cantique_r4)); });
    i0.ɵɵtext(14, "Modifier");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 30);
    i0.ɵɵlistener("click", function AdminCantiquesComponent_div_46_tr_17_Template_button_click_15_listener() { const cantique_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.remove(cantique_r4)); });
    i0.ɵɵtext(16, "Supprimer");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const cantique_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cantique_r4.number || "-");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(cantique_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cantique_r4.author || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cantique_r4.source || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cantique_r4.rightsNote || "Non renseign\u00E9s");
} }
function AdminCantiquesComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Titre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Auteur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Source");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Droits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵtemplate(17, AdminCantiquesComponent_div_46_tr_17_Template, 17, 5, "tr", 27);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngForOf", ctx_r1.cantiques);
} }
const EMPTY_FORM = {
    title: '',
    number: '',
    author: '',
    lyrics: '',
    source: '',
    rightsNote: '',
};
export class AdminCantiquesComponent {
    constructor() {
        this.api = inject(ApiService);
        this.cantiques = [];
        this.form = Object.assign({}, EMPTY_FORM);
        this.search = '';
        this.loading = true;
        this.saving = false;
        this.message = '';
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.loading = true;
        this.api.getCantiques(this.search).subscribe({
            next: data => {
                this.cantiques = data;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                this.message = 'Chargement du catalogue impossible.';
            },
        });
    }
    edit(cantique) {
        var _a, _b, _c, _d, _e, _f;
        this.form = {
            id: cantique.id,
            title: (_a = cantique.title) !== null && _a !== void 0 ? _a : '',
            number: (_b = cantique.number) !== null && _b !== void 0 ? _b : '',
            author: (_c = cantique.author) !== null && _c !== void 0 ? _c : '',
            lyrics: (_d = cantique.lyrics) !== null && _d !== void 0 ? _d : '',
            source: (_e = cantique.source) !== null && _e !== void 0 ? _e : '',
            rightsNote: (_f = cantique.rightsNote) !== null && _f !== void 0 ? _f : '',
        };
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    save() {
        if (!this.form.title.trim() || !this.form.lyrics.trim())
            return;
        this.saving = true;
        const request = this.form.id
            ? this.api.updateCantique(this.form.id, this.form)
            : this.api.createCantique(this.form);
        request.subscribe({
            next: () => {
                this.saving = false;
                this.message = 'Cantique enregistré.';
                this.reset();
                this.load();
            },
            error: () => {
                this.saving = false;
                this.message = 'Enregistrement impossible.';
            },
        });
    }
    remove(cantique) {
        if (!confirm(`Supprimer « ${cantique.title} » du catalogue ?`))
            return;
        this.api.deleteCantique(cantique.id).subscribe({
            next: () => this.load(),
        });
    }
    reset() {
        this.form = Object.assign({}, EMPTY_FORM);
    }
}
AdminCantiquesComponent.ɵfac = function AdminCantiquesComponent_Factory(t) { return new (t || AdminCantiquesComponent)(); };
AdminCantiquesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminCantiquesComponent, selectors: [["app-admin-cantiques"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 47, vars: 15, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "page-copy"], [1, "form-card"], [1, "form-grid"], [1, "field"], ["placeholder", "Titre du cantique", 3, "ngModelChange", "ngModel"], ["placeholder", "Ex. 125", 3, "ngModelChange", "ngModel"], ["placeholder", "Auteur ou compositeur", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom du recueil", 3, "ngModelChange", "ngModel"], ["rows", "10", "placeholder", "Une ligne par ligne...", 3, "ngModelChange", "ngModel"], ["placeholder", "Domaine public, autorisation, licence...", 3, "ngModelChange", "ngModel"], [1, "form-actions"], [1, "btn-primary", 3, "click", "disabled"], ["class", "btn-secondary", 3, "click", 4, "ngIf"], ["class", "success-msg", 4, "ngIf"], [1, "catalog-search"], ["placeholder", "Rechercher dans le catalogue", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-secondary", 3, "click"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "success-msg"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "actions"], [1, "btn-secondary", "btn-small", 3, "click"], [1, "btn-del", 3, "click"]], template: function AdminCantiquesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        i0.ɵɵtext(4, "Catalogue de cantiques");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p", 3);
        i0.ɵɵtext(6, "Ajoutez uniquement des paroles que la CMCIEA est autoris\u00E9e \u00E0 diffuser.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(7, "div", 4)(8, "h3");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 5)(11, "div", 6)(12, "label");
        i0.ɵɵtext(13, "Titre *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "input", 7);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminCantiquesComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.title, $event) || (ctx.form.title = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "div", 6)(16, "label");
        i0.ɵɵtext(17, "Num\u00E9ro");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "input", 8);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminCantiquesComponent_Template_input_ngModelChange_18_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.number, $event) || (ctx.form.number = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "div", 6)(20, "label");
        i0.ɵɵtext(21, "Auteur");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "input", 9);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminCantiquesComponent_Template_input_ngModelChange_22_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.author, $event) || (ctx.form.author = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "div", 6)(24, "label");
        i0.ɵɵtext(25, "Recueil / source");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "input", 10);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminCantiquesComponent_Template_input_ngModelChange_26_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.source, $event) || (ctx.form.source = $event); return $event; });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(27, "div", 6)(28, "label");
        i0.ɵɵtext(29, "Paroles *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "textarea", 11);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminCantiquesComponent_Template_textarea_ngModelChange_30_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.lyrics, $event) || (ctx.form.lyrics = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "div", 6)(32, "label");
        i0.ɵɵtext(33, "Mentions de droits");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "input", 12);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminCantiquesComponent_Template_input_ngModelChange_34_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.form.rightsNote, $event) || (ctx.form.rightsNote = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(35, "div", 13)(36, "button", 14);
        i0.ɵɵlistener("click", function AdminCantiquesComponent_Template_button_click_36_listener() { return ctx.save(); });
        i0.ɵɵtext(37);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(38, AdminCantiquesComponent_button_38_Template, 2, 0, "button", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(39, AdminCantiquesComponent_p_39_Template, 2, 1, "p", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 17)(41, "input", 18);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminCantiquesComponent_Template_input_ngModelChange_41_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
        i0.ɵɵlistener("keyup.enter", function AdminCantiquesComponent_Template_input_keyup_enter_41_listener() { return ctx.load(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "button", 19);
        i0.ɵɵlistener("click", function AdminCantiquesComponent_Template_button_click_42_listener() { return ctx.load(); });
        i0.ɵɵtext(43, "Rechercher");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(44, AdminCantiquesComponent_div_44_Template, 2, 0, "div", 20)(45, AdminCantiquesComponent_div_45_Template, 2, 0, "div", 21)(46, AdminCantiquesComponent_div_46_Template, 18, 1, "div", 22);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate(ctx.form.id ? "Modifier le cantique" : "Ajouter un cantique");
        i0.ɵɵadvance(5);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.title);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.number);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.author);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.source);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.lyrics);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.form.rightsNote);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.saving);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Enregistrement..." : "Enregistrer", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.form.id);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.message);
        i0.ɵɵadvance(2);
        i0.ɵɵtwoWayProperty("ngModel", ctx.search);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.cantiques.length);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.cantiques.length);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["@import '../../admin-shared.css';\n\n.page-copy[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #6b7898;\n  font-size: 13px;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0 16px;\n}\n\n.catalog-search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n\n.catalog-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px 12px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.btn-small[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n}\n\n@media (max-width: 700px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminCantiquesComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-cantiques', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <div>\n      <h2 class=\"page-title\">Catalogue de cantiques</h2>\n      <p class=\"page-copy\">Ajoutez uniquement des paroles que la CMCIEA est autoris\u00E9e \u00E0 diffuser.</p>\n    </div>\n  </div>\n\n  <div class=\"form-card\">\n    <h3>{{ form.id ? 'Modifier le cantique' : 'Ajouter un cantique' }}</h3>\n    <div class=\"form-grid\">\n      <div class=\"field\">\n        <label>Titre *</label>\n        <input [(ngModel)]=\"form.title\" placeholder=\"Titre du cantique\">\n      </div>\n      <div class=\"field\">\n        <label>Num\u00E9ro</label>\n        <input [(ngModel)]=\"form.number\" placeholder=\"Ex. 125\">\n      </div>\n      <div class=\"field\">\n        <label>Auteur</label>\n        <input [(ngModel)]=\"form.author\" placeholder=\"Auteur ou compositeur\">\n      </div>\n      <div class=\"field\">\n        <label>Recueil / source</label>\n        <input [(ngModel)]=\"form.source\" placeholder=\"Nom du recueil\">\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>Paroles *</label>\n      <textarea [(ngModel)]=\"form.lyrics\" rows=\"10\" placeholder=\"Une ligne par ligne...\"></textarea>\n    </div>\n    <div class=\"field\">\n      <label>Mentions de droits</label>\n      <input [(ngModel)]=\"form.rightsNote\" placeholder=\"Domaine public, autorisation, licence...\">\n    </div>\n    <div class=\"form-actions\">\n      <button class=\"btn-primary\" [disabled]=\"saving\" (click)=\"save()\">\n        {{ saving ? 'Enregistrement...' : 'Enregistrer' }}\n      </button>\n      <button class=\"btn-secondary\" *ngIf=\"form.id\" (click)=\"reset()\">Annuler</button>\n    </div>\n    <p class=\"success-msg\" *ngIf=\"message\">{{ message }}</p>\n  </div>\n\n  <div class=\"catalog-search\">\n    <input [(ngModel)]=\"search\" (keyup.enter)=\"load()\" placeholder=\"Rechercher dans le catalogue\">\n    <button class=\"btn-secondary\" (click)=\"load()\">Rechercher</button>\n  </div>\n\n  <div class=\"loading\" *ngIf=\"loading\">Chargement...</div>\n  <div class=\"empty\" *ngIf=\"!loading && !cantiques.length\">Aucun cantique enregistr\u00E9.</div>\n\n  <div class=\"table-wrap\" *ngIf=\"!loading && cantiques.length\">\n    <table>\n      <thead>\n        <tr>\n          <th>No</th>\n          <th>Titre</th>\n          <th>Auteur</th>\n          <th>Source</th>\n          <th>Droits</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let cantique of cantiques\">\n          <td>{{ cantique.number || '-' }}</td>\n          <td><strong>{{ cantique.title }}</strong></td>\n          <td>{{ cantique.author || '-' }}</td>\n          <td>{{ cantique.source || '-' }}</td>\n          <td>{{ cantique.rightsNote || 'Non renseign\u00E9s' }}</td>\n          <td class=\"actions\">\n            <button class=\"btn-secondary btn-small\" (click)=\"edit(cantique)\">Modifier</button>\n            <button class=\"btn-del\" (click)=\"remove(cantique)\">Supprimer</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.page-copy {\n  margin: 5px 0 0;\n  color: #6b7898;\n  font-size: 13px;\n}\n\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0 16px;\n}\n\n.catalog-search {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n\n.catalog-search input {\n  flex: 1;\n  padding: 9px 12px;\n  border: 1px solid #dde1ec;\n  border-radius: 8px;\n}\n\n.actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.btn-small {\n  padding: 6px 10px;\n}\n\n@media (max-width: 700px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminCantiquesComponent, { className: "AdminCantiquesComponent", filePath: "app\\admin\\pages\\cantiques\\cantiques.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=cantiques.component.js.map