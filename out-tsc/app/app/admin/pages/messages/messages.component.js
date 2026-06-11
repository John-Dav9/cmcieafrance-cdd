import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AdminMessagesComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function AdminMessagesComponent_button_33_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelEdit()); });
    i0.ɵɵtext(1, "Annuler");
    i0.ɵɵelementEnd();
} }
function AdminMessagesComponent_p_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.successMsg);
} }
function AdminMessagesComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AdminMessagesComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1, "Aucun message.");
    i0.ɵɵelementEnd();
} }
function AdminMessagesComponent_div_37_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "button", 27);
    i0.ɵɵlistener("click", function AdminMessagesComponent_div_37_tr_15_Template_button_click_10_listener() { const m_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.togglePublie(m_r4)); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td", 28)(13, "button", 29);
    i0.ɵɵlistener("click", function AdminMessagesComponent_div_37_tr_15_Template_button_click_13_listener() { const m_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.edit(m_r4)); });
    i0.ɵɵtext(14, "\u270E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 30);
    i0.ɵɵlistener("click", function AdminMessagesComponent_div_37_tr_15_Template_button_click_15_listener() { const m_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.delete(m_r4.id)); });
    i0.ɵɵtext(16, "\u2715");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r4.speaker);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 6, m_r4.date, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("publie", m_r4.publie);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", m_r4.publie ? "Publi\u00E9" : "Brouillon", " ");
} }
function AdminMessagesComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Titre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Pr\u00E9dicateur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Statut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵtemplate(15, AdminMessagesComponent_div_37_tr_15_Template, 17, 9, "tr", 26);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
export class AdminMessagesComponent {
    constructor() {
        this.api = inject(ApiService);
        this.fb = inject(FormBuilder);
        this.messages = [];
        this.loading = true;
        this.saving = false;
        this.editId = null;
        this.successMsg = '';
        this.form = this.fb.group({
            title: ['', Validators.required],
            speaker: ['', Validators.required],
            date: ['', Validators.required],
            videoId: ['', Validators.required],
            publie: [true],
        });
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getMessagesAdmin().subscribe({
            next: (data) => { this.messages = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    submit() {
        if (this.form.invalid)
            return;
        this.saving = true;
        const obs = this.editId
            ? this.api.updateMessage(this.editId, this.form.value)
            : this.api.createMessage(this.form.value);
        obs.subscribe({
            next: () => {
                this.successMsg = this.editId ? 'Message mis à jour.' : 'Message créé.';
                this.form.reset({ publie: true });
                this.editId = null;
                this.saving = false;
                this.load();
                setTimeout(() => (this.successMsg = ''), 3000);
            },
            error: () => { this.saving = false; },
        });
    }
    edit(m) {
        this.editId = m.id;
        this.form.patchValue(m);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    cancelEdit() {
        this.editId = null;
        this.form.reset({ publie: true });
    }
    togglePublie(m) {
        this.api.updateMessage(m.id, { publie: !m.publie }).subscribe(() => {
            m.publie = !m.publie;
        });
    }
    delete(id) {
        if (!confirm('Supprimer ce message ?'))
            return;
        this.api.deleteMessage(id).subscribe(() => {
            this.messages = this.messages.filter((m) => m.id !== id);
        });
    }
}
AdminMessagesComponent.ɵfac = function AdminMessagesComponent_Factory(t) { return new (t || AdminMessagesComponent)(); };
AdminMessagesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminMessagesComponent, selectors: [["app-admin-messages"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 38, vars: 9, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "two-cols"], [1, "field"], ["type", "text", "formControlName", "title", "placeholder", "Esp\u00E9rer en Dieu en toute saison"], ["type", "text", "formControlName", "speaker", "placeholder", "Pasteur Fernand"], ["type", "date", "formControlName", "date"], ["type", "text", "formControlName", "videoId", "placeholder", "dQw4w9WgXcQ"], [1, "field", 2, "justify-content", "flex-end"], [1, "check-label"], ["type", "checkbox", "formControlName", "publie"], [1, "form-actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "button", "class", "btn-secondary", 3, "click", 4, "ngIf"], ["class", "success-msg", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "success-msg"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "toggle-btn", 3, "click"], [1, "actions"], [1, "btn-edit", 3, "click"], [1, "btn-del", 3, "click"]], template: function AdminMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Messages / Pr\u00E9dications");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3)(5, "h3");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "form", 4);
        i0.ɵɵlistener("ngSubmit", function AdminMessagesComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        i0.ɵɵelementStart(8, "div", 5)(9, "div", 6)(10, "label");
        i0.ɵɵtext(11, "Titre *");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 6)(14, "label");
        i0.ɵɵtext(15, "Pr\u00E9dicateur *");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "input", 8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "div", 5)(18, "div", 6)(19, "label");
        i0.ɵɵtext(20, "Date *");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 6)(23, "label");
        i0.ɵɵtext(24, "ID vid\u00E9o YouTube *");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(25, "input", 10);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "div", 11)(27, "label", 12);
        i0.ɵɵelement(28, "input", 13);
        i0.ɵɵtext(29, " Publier imm\u00E9diatement ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(30, "div", 14)(31, "button", 15);
        i0.ɵɵtext(32);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, AdminMessagesComponent_button_33_Template, 2, 0, "button", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(34, AdminMessagesComponent_p_34_Template, 2, 1, "p", 17);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(35, AdminMessagesComponent_div_35_Template, 2, 0, "div", 18)(36, AdminMessagesComponent_div_36_Template, 2, 0, "div", 19)(37, AdminMessagesComponent_div_37_Template, 16, 1, "div", 20);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.editId ? "Modifier le message" : "Nouveau message");
        i0.ɵɵadvance();
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(24);
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
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.messages.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.messages.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], styles: ["@import '../../admin-shared.css';\n\n.two-cols[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n.check-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #3d4663;\n  cursor: pointer;\n  padding-top: 20px;\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  background: #f4f6f9;\n  color: #8b93a8;\n  transition: background 0.15s;\n}\n\n.toggle-btn.publie[_ngcontent-%COMP%] { background: #f0fdf4; color: #16a34a; }\n\n.actions[_ngcontent-%COMP%] { display: flex; gap: 6px; }\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #4f7dff;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover { background: #eff6ff; }\n\n@media (max-width: 600px) {\n  .two-cols[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminMessagesComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-messages', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Messages / Pr\u00E9dications</h2>\n  </div>\n\n  <div class=\"form-card\">\n    <h3>{{ editId ? 'Modifier le message' : 'Nouveau message' }}</h3>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Titre *</label>\n          <input type=\"text\" formControlName=\"title\" placeholder=\"Esp\u00E9rer en Dieu en toute saison\" />\n        </div>\n        <div class=\"field\">\n          <label>Pr\u00E9dicateur *</label>\n          <input type=\"text\" formControlName=\"speaker\" placeholder=\"Pasteur Fernand\" />\n        </div>\n      </div>\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Date *</label>\n          <input type=\"date\" formControlName=\"date\" />\n        </div>\n        <div class=\"field\">\n          <label>ID vid\u00E9o YouTube *</label>\n          <input type=\"text\" formControlName=\"videoId\" placeholder=\"dQw4w9WgXcQ\" />\n        </div>\n      </div>\n      <div class=\"field\" style=\"justify-content:flex-end\">\n        <label class=\"check-label\">\n          <input type=\"checkbox\" formControlName=\"publie\" />\n          Publier imm\u00E9diatement\n        </label>\n      </div>\n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn-primary\" [disabled]=\"form.invalid || saving\">\n          {{ saving ? 'Enregistrement...' : (editId ? 'Mettre \u00E0 jour' : 'Cr\u00E9er') }}\n        </button>\n        <button type=\"button\" class=\"btn-secondary\" *ngIf=\"editId\" (click)=\"cancelEdit()\">Annuler</button>\n      </div>\n      <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n    </form>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n  <div *ngIf=\"!loading && messages.length === 0\" class=\"empty\">Aucun message.</div>\n\n  <div *ngIf=\"!loading && messages.length > 0\" class=\"table-wrap\">\n    <table>\n      <thead>\n        <tr>\n          <th>Titre</th>\n          <th>Pr\u00E9dicateur</th>\n          <th>Date</th>\n          <th>Statut</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let m of messages\">\n          <td><strong>{{ m.title }}</strong></td>\n          <td>{{ m.speaker }}</td>\n          <td>{{ m.date | date:'dd/MM/yyyy' }}</td>\n          <td>\n            <button class=\"toggle-btn\" [class.publie]=\"m.publie\" (click)=\"togglePublie(m)\">\n              {{ m.publie ? 'Publi\u00E9' : 'Brouillon' }}\n            </button>\n          </td>\n          <td class=\"actions\">\n            <button class=\"btn-edit\" (click)=\"edit(m)\">\u270E</button>\n            <button class=\"btn-del\" (click)=\"delete(m.id)\">\u2715</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.two-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n\n.check-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #3d4663;\n  cursor: pointer;\n  padding-top: 20px;\n}\n\n.toggle-btn {\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  background: #f4f6f9;\n  color: #8b93a8;\n  transition: background 0.15s;\n}\n\n.toggle-btn.publie { background: #f0fdf4; color: #16a34a; }\n\n.actions { display: flex; gap: 6px; }\n\n.btn-edit {\n  background: none;\n  border: none;\n  color: #4f7dff;\n  cursor: pointer;\n  font-size: 16px;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n\n.btn-edit:hover { background: #eff6ff; }\n\n@media (max-width: 600px) {\n  .two-cols { grid-template-columns: 1fr; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminMessagesComponent, { className: "AdminMessagesComponent", filePath: "app\\admin\\pages\\messages\\messages.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=messages.component.js.map