import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AdminReplaysComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function AdminReplaysComponent_button_46_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelEdit()); });
    i0.ɵɵtext(1, "Annuler");
    i0.ɵɵelementEnd();
} }
function AdminReplaysComponent_p_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.successMsg);
} }
function AdminReplaysComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AdminReplaysComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtext(1, "Aucun replay.");
    i0.ɵɵelementEnd();
} }
function AdminReplaysComponent_div_50_tr_17_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r4);
} }
function AdminReplaysComponent_div_50_tr_17_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵtemplate(1, AdminReplaysComponent_div_50_tr_17_div_4_span_1_Template, 2, 1, "span", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", r_r5.tags);
} }
function AdminReplaysComponent_div_50_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AdminReplaysComponent_div_50_tr_17_div_4_Template, 2, 1, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "button", 31);
    i0.ɵɵlistener("click", function AdminReplaysComponent_div_50_tr_17_Template_button_click_10_listener() { const r_r5 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.togglePublic(r_r5)); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 32)(16, "button", 33);
    i0.ɵɵlistener("click", function AdminReplaysComponent_div_50_tr_17_Template_button_click_16_listener() { const r_r5 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.edit(r_r5)); });
    i0.ɵɵtext(17, "\u270E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 34);
    i0.ɵɵlistener("click", function AdminReplaysComponent_div_50_tr_17_Template_button_click_18_listener() { const r_r5 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.summarize(r_r5)); });
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 35);
    i0.ɵɵlistener("click", function AdminReplaysComponent_div_50_tr_17_Template_button_click_20_listener() { const r_r5 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.delete(r_r5.id)); });
    i0.ɵɵtext(21, "\u2715");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r5.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r5.tags == null ? null : r_r5.tags.length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r5.speakerName || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.formatDuration(r_r5.durationSeconds));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("publie", r_r5.isPublic);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", r_r5.isPublic ? "Publi\u00E9" : "Brouillon", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 10, r_r5.createdAt, "dd/MM/yyyy"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.summarizingId === r_r5.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.summarizingId === r_r5.id ? "..." : "\u2726", " ");
} }
function AdminReplaysComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Titre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Pr\u00E9dicateur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Dur\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Statut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵtemplate(17, AdminReplaysComponent_div_50_tr_17_Template, 22, 13, "tr", 29);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngForOf", ctx_r1.replays);
} }
export class AdminReplaysComponent {
    constructor() {
        this.api = inject(ApiService);
        this.fb = inject(FormBuilder);
        this.replays = [];
        this.loading = true;
        this.saving = false;
        this.editId = null;
        this.successMsg = '';
        this.form = this.fb.group({
            title: ['', Validators.required],
            speakerName: [''],
            description: [''],
            videoUrl: ['', Validators.required],
            thumbnailUrl: [''],
            durationSeconds: [null],
            tags: [''],
            isPublic: [false],
        });
        this.summarizingId = null;
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getReplaysAdmin().subscribe({
            next: (data) => { this.replays = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    submit() {
        if (this.form.invalid)
            return;
        this.saving = true;
        const val = this.form.value;
        const payload = Object.assign(Object.assign({}, val), { tags: val.tags ? val.tags.split(',').map((t) => t.trim()).filter(Boolean) : [], durationSeconds: val.durationSeconds ? Number(val.durationSeconds) : null });
        const obs = this.editId
            ? this.api.updateReplay(this.editId, payload)
            : this.api.createReplay(payload);
        obs.subscribe({
            next: () => {
                this.successMsg = this.editId ? 'Replay mis à jour.' : 'Replay ajouté.';
                this.form.reset({ isPublic: false });
                this.editId = null;
                this.saving = false;
                this.load();
                setTimeout(() => (this.successMsg = ''), 3000);
            },
            error: () => { this.saving = false; },
        });
    }
    edit(r) {
        var _a;
        this.editId = r.id;
        this.form.patchValue(Object.assign(Object.assign({}, r), { tags: Array.isArray(r.tags) ? r.tags.join(', ') : (_a = r.tags) !== null && _a !== void 0 ? _a : '' }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    cancelEdit() {
        this.editId = null;
        this.form.reset({ isPublic: false });
    }
    togglePublic(r) {
        this.api.toggleReplayPublic(r.id).subscribe({
            next: (res) => { r.isPublic = res.isPublic; },
        });
    }
    delete(id) {
        if (!confirm('Supprimer ce replay ?'))
            return;
        this.api.deleteReplay(id).subscribe(() => {
            this.replays = this.replays.filter(r => r.id !== id);
        });
    }
    summarize(r) {
        if (this.summarizingId)
            return;
        this.summarizingId = r.id;
        this.api.summarizeReplay(r.id).subscribe({
            next: (res) => {
                if (res === null || res === void 0 ? void 0 : res.description)
                    r.description = res.description;
                this.summarizingId = null;
                this.successMsg = 'Résumé généré avec succès.';
                setTimeout(() => (this.successMsg = ''), 4000);
            },
            error: () => { this.summarizingId = null; },
        });
    }
    formatDuration(s) {
        if (!s)
            return '—';
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${String(sec).padStart(2, '0')}`;
    }
}
AdminReplaysComponent.ɵfac = function AdminReplaysComponent_Factory(t) { return new (t || AdminReplaysComponent)(); };
AdminReplaysComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminReplaysComponent, selectors: [["app-admin-replays"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 51, vars: 9, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "two-cols"], [1, "field"], ["type", "text", "formControlName", "title", "placeholder", "Culte du dimanche 5 juin"], ["type", "text", "formControlName", "speakerName", "placeholder", "Pasteur Fernand"], ["type", "url", "formControlName", "videoUrl", "placeholder", "https://youtube.com/watch?v=..."], ["type", "url", "formControlName", "thumbnailUrl", "placeholder", "https://img.youtube.com/vi/..."], ["type", "number", "formControlName", "durationSeconds", "placeholder", "3600"], ["formControlName", "description", "placeholder", "R\u00E9sum\u00E9 du message...", 2, "min-height", "80px"], ["type", "text", "formControlName", "tags", "placeholder", "pri\u00E8re, foi, gu\u00E9rison"], [1, "field", 2, "justify-content", "flex-end"], [1, "check-label"], ["type", "checkbox", "formControlName", "isPublic"], [1, "form-actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "button", "class", "btn-secondary", 3, "click", 4, "ngIf"], ["class", "success-msg", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "success-msg"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], ["class", "tags", 4, "ngIf"], [1, "toggle-btn", 3, "click"], [1, "actions"], [1, "btn-edit", 3, "click"], ["title", "G\u00E9n\u00E9rer un r\u00E9sum\u00E9 IA", 1, "btn-summarize", 3, "click", "disabled"], [1, "btn-del", 3, "click"], [1, "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"]], template: function AdminReplaysComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Biblioth\u00E8que de replay");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 3)(5, "h3");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "form", 4);
        i0.ɵɵlistener("ngSubmit", function AdminReplaysComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        i0.ɵɵelementStart(8, "div", 5)(9, "div", 6)(10, "label");
        i0.ɵɵtext(11, "Titre *");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 6)(14, "label");
        i0.ɵɵtext(15, "Pr\u00E9dicateur");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "input", 8);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(17, "div", 6)(18, "label");
        i0.ɵɵtext(19, "URL vid\u00E9o * (YouTube, Vimeo ou lien direct)");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 5)(22, "div", 6)(23, "label");
        i0.ɵɵtext(24, "URL miniature");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(25, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "div", 6)(27, "label");
        i0.ɵɵtext(28, "Dur\u00E9e (secondes)");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(29, "input", 11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(30, "div", 6)(31, "label");
        i0.ɵɵtext(32, "Description");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "textarea", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "div", 5)(35, "div", 6)(36, "label");
        i0.ɵɵtext(37, "Tags (virgule s\u00E9par\u00E9s)");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(38, "input", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "div", 14)(40, "label", 15);
        i0.ɵɵelement(41, "input", 16);
        i0.ɵɵtext(42, " Publier imm\u00E9diatement ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(43, "div", 17)(44, "button", 18);
        i0.ɵɵtext(45);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(46, AdminReplaysComponent_button_46_Template, 2, 0, "button", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(47, AdminReplaysComponent_p_47_Template, 2, 1, "p", 20);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(48, AdminReplaysComponent_div_48_Template, 2, 0, "div", 21)(49, AdminReplaysComponent_div_49_Template, 2, 0, "div", 22)(50, AdminReplaysComponent_div_50_Template, 18, 1, "div", 23);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.editId ? "Modifier le replay" : "Ajouter un replay");
        i0.ɵɵadvance();
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(37);
        i0.ɵɵproperty("disabled", ctx.form.invalid || ctx.saving);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.saving ? "Enregistrement..." : ctx.editId ? "Mettre \u00E0 jour" : "Ajouter", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.editId);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.successMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.replays.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.replays.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName], styles: ["@import '../../admin-shared.css';\n\n.two-cols[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.check-label[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #3d4663; cursor: pointer; padding-top: 20px; }\n\n.toggle-btn[_ngcontent-%COMP%] { padding: 4px 10px; border-radius: 20px; border: none; font-size: 11px; font-weight: 600; cursor: pointer; background: #f4f6f9; color: #8b93a8; transition: background 0.15s; }\n.toggle-btn.publie[_ngcontent-%COMP%] { background: #f0fdf4; color: #16a34a; }\n\n.tags[_ngcontent-%COMP%] { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }\n.tag[_ngcontent-%COMP%] { font-size: 10px; padding: 2px 6px; background: #eff6ff; color: #1d4ed8; border-radius: 10px; }\n\n.actions[_ngcontent-%COMP%] { display: flex; gap: 6px; }\n.btn-edit[_ngcontent-%COMP%] { background: none; border: none; color: #4f7dff; cursor: pointer; font-size: 16px; padding: 4px 8px; border-radius: 6px; }\n.btn-edit[_ngcontent-%COMP%]:hover { background: #eff6ff; }\n\n@media (max-width: 600px) { .two-cols[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminReplaysComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-replays', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Biblioth\u00E8que de replay</h2>\n  </div>\n\n  <div class=\"form-card\">\n    <h3>{{ editId ? 'Modifier le replay' : 'Ajouter un replay' }}</h3>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Titre *</label>\n          <input type=\"text\" formControlName=\"title\" placeholder=\"Culte du dimanche 5 juin\" />\n        </div>\n        <div class=\"field\">\n          <label>Pr\u00E9dicateur</label>\n          <input type=\"text\" formControlName=\"speakerName\" placeholder=\"Pasteur Fernand\" />\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>URL vid\u00E9o * (YouTube, Vimeo ou lien direct)</label>\n        <input type=\"url\" formControlName=\"videoUrl\" placeholder=\"https://youtube.com/watch?v=...\" />\n      </div>\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>URL miniature</label>\n          <input type=\"url\" formControlName=\"thumbnailUrl\" placeholder=\"https://img.youtube.com/vi/...\" />\n        </div>\n        <div class=\"field\">\n          <label>Dur\u00E9e (secondes)</label>\n          <input type=\"number\" formControlName=\"durationSeconds\" placeholder=\"3600\" />\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Description</label>\n        <textarea formControlName=\"description\" placeholder=\"R\u00E9sum\u00E9 du message...\" style=\"min-height:80px\"></textarea>\n      </div>\n      <div class=\"two-cols\">\n        <div class=\"field\">\n          <label>Tags (virgule s\u00E9par\u00E9s)</label>\n          <input type=\"text\" formControlName=\"tags\" placeholder=\"pri\u00E8re, foi, gu\u00E9rison\" />\n        </div>\n        <div class=\"field\" style=\"justify-content:flex-end\">\n          <label class=\"check-label\">\n            <input type=\"checkbox\" formControlName=\"isPublic\" />\n            Publier imm\u00E9diatement\n          </label>\n        </div>\n      </div>\n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn-primary\" [disabled]=\"form.invalid || saving\">\n          {{ saving ? 'Enregistrement...' : (editId ? 'Mettre \u00E0 jour' : 'Ajouter') }}\n        </button>\n        <button type=\"button\" class=\"btn-secondary\" *ngIf=\"editId\" (click)=\"cancelEdit()\">Annuler</button>\n      </div>\n      <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n    </form>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n  <div *ngIf=\"!loading && replays.length === 0\" class=\"empty\">Aucun replay.</div>\n\n  <div *ngIf=\"!loading && replays.length > 0\" class=\"table-wrap\">\n    <table>\n      <thead>\n        <tr>\n          <th>Titre</th>\n          <th>Pr\u00E9dicateur</th>\n          <th>Dur\u00E9e</th>\n          <th>Statut</th>\n          <th>Date</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let r of replays\">\n          <td>\n            <strong>{{ r.title }}</strong>\n            <div class=\"tags\" *ngIf=\"r.tags?.length\">\n              <span class=\"tag\" *ngFor=\"let t of r.tags\">{{ t }}</span>\n            </div>\n          </td>\n          <td>{{ r.speakerName || '\u2014' }}</td>\n          <td>{{ formatDuration(r.durationSeconds) }}</td>\n          <td>\n            <button class=\"toggle-btn\" [class.publie]=\"r.isPublic\" (click)=\"togglePublic(r)\">\n              {{ r.isPublic ? 'Publi\u00E9' : 'Brouillon' }}\n            </button>\n          </td>\n          <td>{{ r.createdAt | date:'dd/MM/yyyy' }}</td>\n          <td class=\"actions\">\n            <button class=\"btn-edit\" (click)=\"edit(r)\">\u270E</button>\n            <button class=\"btn-summarize\" title=\"G\u00E9n\u00E9rer un r\u00E9sum\u00E9 IA\" [disabled]=\"summarizingId === r.id\" (click)=\"summarize(r)\">\n              {{ summarizingId === r.id ? '...' : '\u2726' }}\n            </button>\n            <button class=\"btn-del\" (click)=\"delete(r.id)\">\u2715</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.two-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.check-label { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #3d4663; cursor: pointer; padding-top: 20px; }\n\n.toggle-btn { padding: 4px 10px; border-radius: 20px; border: none; font-size: 11px; font-weight: 600; cursor: pointer; background: #f4f6f9; color: #8b93a8; transition: background 0.15s; }\n.toggle-btn.publie { background: #f0fdf4; color: #16a34a; }\n\n.tags { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }\n.tag { font-size: 10px; padding: 2px 6px; background: #eff6ff; color: #1d4ed8; border-radius: 10px; }\n\n.actions { display: flex; gap: 6px; }\n.btn-edit { background: none; border: none; color: #4f7dff; cursor: pointer; font-size: 16px; padding: 4px 8px; border-radius: 6px; }\n.btn-edit:hover { background: #eff6ff; }\n\n@media (max-width: 600px) { .two-cols { grid-template-columns: 1fr; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminReplaysComponent, { className: "AdminReplaysComponent", filePath: "app\\admin\\pages\\replays\\replays.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=replays.component.js.map