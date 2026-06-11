import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AdminAuthService } from '../../services/admin-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ProchainCulteComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1, "Chargement\u2026");
    i0.ɵɵelementEnd();
} }
function ProchainCulteComponent_ng_container_7_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.savedMsg);
} }
function ProchainCulteComponent_ng_container_7_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorMsg);
} }
function ProchainCulteComponent_ng_container_7_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "img", 31);
    i0.ɵɵelementStart(2, "p", 32);
    i0.ɵɵtext(3, "Flyer actuel \u2014 uploadez une nouvelle image pour le remplacer.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.flyerUrl, i0.ɵɵsanitizeUrl);
} }
function ProchainCulteComponent_ng_container_7_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "img", 33);
    i0.ɵɵelementStart(2, "p", 32);
    i0.ɵɵtext(3, "Aper\u00E7u \u2014 cliquez sur \"Uploader\" pour confirmer.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.flyerPreview, i0.ɵɵsanitizeUrl);
} }
function ProchainCulteComponent_ng_container_7_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtext(1, " Aucun flyer pour l'instant. ");
    i0.ɵɵelementEnd();
} }
function ProchainCulteComponent_ng_container_7_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "button", 16);
    i0.ɵɵlistener("click", function ProchainCulteComponent_ng_container_7_div_35_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.uploadFlyer()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.uploadingFlyer);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.uploadingFlyer ? "Upload en cours\u2026" : "Uploader le flyer", " ");
} }
function ProchainCulteComponent_ng_container_7_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.broadcastMsg);
} }
function ProchainCulteComponent_ng_container_7_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorMsg);
} }
function ProchainCulteComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7)(2, "h2", 8);
    i0.ɵɵtext(3, "Informations du culte");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 9)(5, "span", 10);
    i0.ɵɵtext(6, "Sujet / Titre de l'annonce *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 11);
    i0.ɵɵtwoWayListener("ngModelChange", function ProchainCulteComponent_ng_container_7_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.sujet, $event) || (ctx_r1.form.sujet = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label", 9)(9, "span", 10);
    i0.ɵɵtext(10, "Date et heure * (texte affich\u00E9 sur le site)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 12);
    i0.ɵɵtwoWayListener("ngModelChange", function ProchainCulteComponent_ng_container_7_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.date, $event) || (ctx_r1.form.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label", 9)(13, "span", 10);
    i0.ɵɵtext(14, "Date machine (pour le bouton \"Ajouter \u00E0 mon agenda\")");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function ProchainCulteComponent_ng_container_7_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.dateISO, $event) || (ctx_r1.form.dateISO = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label", 9)(17, "span", 10);
    i0.ɵɵtext(18, "Message (affich\u00E9 dans l'email et sur le site)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "textarea", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function ProchainCulteComponent_ng_container_7_Template_textarea_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.message, $event) || (ctx_r1.form.message = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 15)(21, "button", 16);
    i0.ɵɵlistener("click", function ProchainCulteComponent_ng_container_7_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save()); });
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, ProchainCulteComponent_ng_container_7_span_23_Template, 2, 1, "span", 17)(24, ProchainCulteComponent_ng_container_7_span_24_Template, 2, 1, "span", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 7)(26, "h2", 8);
    i0.ɵɵtext(27, "Flyer du culte");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, ProchainCulteComponent_ng_container_7_div_28_Template, 4, 1, "div", 19)(29, ProchainCulteComponent_ng_container_7_div_29_Template, 4, 1, "div", 19)(30, ProchainCulteComponent_ng_container_7_div_30_Template, 2, 0, "div", 20);
    i0.ɵɵelementStart(31, "label", 21)(32, "span", 10);
    i0.ɵɵtext(33, "Choisir une image (PNG, JPG\u2026)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "input", 22);
    i0.ɵɵlistener("change", function ProchainCulteComponent_ng_container_7_Template_input_change_34_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFlyerChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(35, ProchainCulteComponent_ng_container_7_div_35_Template, 3, 2, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 24)(37, "h2", 8);
    i0.ɵɵtext(38, "\uD83D\uDCE3 Envoyer \u00E0 tous les inscrits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "p", 25);
    i0.ɵɵtext(40, " Cet email sera envoy\u00E9 \u00E0 ");
    i0.ɵɵelementStart(41, "strong");
    i0.ɵɵtext(42, "toutes les adresses email");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(43, " pr\u00E9sentes dans la base de donn\u00E9es (inscrits aux marathons et aux autres programmes). Assurez-vous que les informations ci-dessus sont sauvegard\u00E9es avant d'envoyer. ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(44, ProchainCulteComponent_ng_container_7_div_44_Template, 2, 1, "div", 26)(45, ProchainCulteComponent_ng_container_7_div_45_Template, 2, 1, "div", 18);
    i0.ɵɵelementStart(46, "button", 27);
    i0.ɵɵlistener("click", function ProchainCulteComponent_ng_container_7_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.broadcast()); });
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.sujet);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.date);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.dateISO);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.message);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Sauvegarde\u2026" : "Sauvegarder", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.savedMsg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.errorMsg);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.flyerUrl && !ctx_r1.flyerPreview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.flyerPreview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.flyerUrl && !ctx_r1.flyerPreview);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.flyerFile);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.broadcastMsg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.errorMsg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.broadcasting);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.broadcasting ? "Envoi en cours\u2026" : "\uD83D\uDCE8 Envoyer l'email \u00E0 tous", " ");
} }
export class ProchainCulteComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.auth = inject(AdminAuthService);
        this.base = environment.apiBase;
        this.form = { sujet: '', date: '', dateISO: '', message: '' };
        this.flyerUrl = null;
        this.flyerFile = null;
        this.flyerPreview = null;
        this.loading = true;
        this.saving = false;
        this.uploadingFlyer = false;
        this.broadcasting = false;
        this.savedMsg = '';
        this.broadcastMsg = '';
        this.errorMsg = '';
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.http.get(`${this.base}/settings/next-culte`).subscribe({
            next: (data) => {
                var _a, _b, _c, _d, _e;
                if (data) {
                    this.form = { sujet: (_a = data.sujet) !== null && _a !== void 0 ? _a : '', date: (_b = data.date) !== null && _b !== void 0 ? _b : '', dateISO: (_c = data.dateISO) !== null && _c !== void 0 ? _c : '', message: (_d = data.message) !== null && _d !== void 0 ? _d : '' };
                    this.flyerUrl = (_e = data.flyerUrl) !== null && _e !== void 0 ? _e : null;
                }
                this.loading = false;
            },
            error: () => { this.loading = false; },
        });
    }
    onFlyerChange(event) {
        var _a;
        const input = event.target;
        const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        this.flyerFile = file;
        const reader = new FileReader();
        reader.onload = (e) => { var _a; this.flyerPreview = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; };
        reader.readAsDataURL(file);
    }
    async save() {
        this.saving = true;
        this.savedMsg = '';
        this.errorMsg = '';
        const token = await this.auth.getToken();
        const headers = { Authorization: `Bearer ${token}` };
        this.http.patch(`${this.base}/settings/next-culte`, this.form, { headers }).subscribe({
            next: () => {
                this.saving = false;
                this.savedMsg = 'Informations sauvegardées.';
                setTimeout(() => (this.savedMsg = ''), 3000);
            },
            error: (err) => {
                var _a, _b;
                this.saving = false;
                this.errorMsg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de la sauvegarde.';
            },
        });
    }
    async uploadFlyer() {
        if (!this.flyerFile)
            return;
        this.uploadingFlyer = true;
        this.errorMsg = '';
        const token = await this.auth.getToken();
        const headers = { Authorization: `Bearer ${token}` };
        const fd = new FormData();
        fd.append('file', this.flyerFile);
        this.http.post(`${this.base}/settings/next-culte/flyer`, fd, { headers }).subscribe({
            next: (res) => {
                this.flyerUrl = res.url;
                this.flyerPreview = null;
                this.flyerFile = null;
                this.uploadingFlyer = false;
                this.savedMsg = 'Flyer uploadé avec succès.';
                setTimeout(() => (this.savedMsg = ''), 3000);
            },
            error: (err) => {
                var _a, _b;
                this.uploadingFlyer = false;
                this.errorMsg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de l\'upload.';
            },
        });
    }
    async broadcast() {
        if (!confirm('Envoyer cet email à TOUS les inscrits de la base de données ? Cette action est irréversible.'))
            return;
        this.broadcasting = true;
        this.broadcastMsg = '';
        this.errorMsg = '';
        const token = await this.auth.getToken();
        const headers = { Authorization: `Bearer ${token}` };
        this.http.post(`${this.base}/settings/next-culte/broadcast`, {}, { headers }).subscribe({
            next: (res) => {
                this.broadcasting = false;
                this.broadcastMsg = `✅ Email envoyé à ${res.envoyes} destinataire(s).`;
            },
            error: (err) => {
                var _a, _b;
                this.broadcasting = false;
                this.errorMsg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de l\'envoi.';
            },
        });
    }
}
ProchainCulteComponent.ɵfac = function ProchainCulteComponent_Factory(t) { return new (t || ProchainCulteComponent)(); };
ProchainCulteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProchainCulteComponent, selectors: [["app-prochain-culte"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 8, vars: 2, consts: [[1, "pc-page"], [1, "pc-header"], [1, "pc-title"], [1, "pc-subtitle"], ["class", "pc-loading", 4, "ngIf"], [4, "ngIf"], [1, "pc-loading"], [1, "pc-card"], [1, "pc-card-title"], [1, "pc-field"], [1, "pc-label"], ["type", "text", "placeholder", "Ex: Notre prochain culte en pr\u00E9sentiel", 1, "pc-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: Dimanche 26 avril 2026 \u00E0 17h00", 1, "pc-input", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", 1, "pc-input", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Rejoignez-nous pour notre culte en pr\u00E9sentiel. Nous vous attendons avec joie !", 1, "pc-textarea", 3, "ngModelChange", "ngModel"], [1, "pc-actions"], [1, "btn-primary", 3, "click", "disabled"], ["class", "msg-success", 4, "ngIf"], ["class", "msg-error", 4, "ngIf"], ["class", "flyer-zone", 4, "ngIf"], ["class", "flyer-empty", 4, "ngIf"], [1, "pc-field", 2, "margin-top", "16px"], ["type", "file", "accept", "image/*", 1, "pc-file-input", 3, "change"], ["class", "pc-actions", 4, "ngIf"], [1, "pc-card", "pc-card--broadcast"], [1, "broadcast-info"], ["class", "msg-success broadcast-result", 4, "ngIf"], [1, "btn-broadcast", 3, "click", "disabled"], [1, "msg-success"], [1, "msg-error"], [1, "flyer-zone"], ["alt", "Flyer actuel", 1, "flyer-preview", 3, "src"], [1, "flyer-caption"], ["alt", "Aper\u00E7u", 1, "flyer-preview", 3, "src"], [1, "flyer-empty"], [1, "msg-success", "broadcast-result"]], template: function ProchainCulteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        i0.ɵɵtext(3, "\uD83D\uDCC5 Prochain culte en pr\u00E9sentiel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p", 3);
        i0.ɵɵtext(5, "Configurez l'annonce du prochain culte, uploadez le flyer et envoyez l'email \u00E0 tous les inscrits.");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, ProchainCulteComponent_div_6_Template, 2, 0, "div", 4)(7, ProchainCulteComponent_ng_container_7_Template, 48, 16, "ng-container", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
    } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".pc-page[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n\n.pc-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.pc-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1A3D64;\n  margin: 0 0 6px;\n}\n\n.pc-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin: 0;\n}\n\n.pc-loading[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #888;\n}\n\n.pc-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 10px;\n  padding: 28px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n}\n\n.pc-card--broadcast[_ngcontent-%COMP%] {\n  border-color: #1D546C;\n  background: linear-gradient(135deg, #eef6fa 0%, #f8fbfd 100%);\n}\n\n.pc-card-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1A3D64;\n  margin: 0 0 20px;\n}\n\n.pc-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n\n.pc-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #444;\n  margin-bottom: 6px;\n}\n\n.pc-input[_ngcontent-%COMP%], .pc-textarea[_ngcontent-%COMP%] {\n  border: 1px solid #d0d0d0;\n  border-radius: 6px;\n  padding: 10px 14px;\n  font-size: 14px;\n  color: #222;\n  transition: border-color 0.2s;\n  font-family: inherit;\n  resize: vertical;\n}\n\n.pc-input[_ngcontent-%COMP%]:focus, .pc-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1D546C;\n}\n\n.pc-file-input[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n}\n\n.pc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 8px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-broadcast[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C, #00B7B5);\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 13px 32px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  margin-top: 16px;\n}\n\n.btn-broadcast[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.msg-success[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.msg-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 13px;\n}\n\n.broadcast-info[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0 0 8px;\n}\n\n.broadcast-result[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 15px;\n}\n\n.flyer-zone[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  text-align: center;\n}\n\n.flyer-preview[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 300px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n}\n\n.flyer-caption[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin: 8px 0 0;\n}\n\n.flyer-empty[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 13px;\n  padding: 16px 0;\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProchainCulteComponent, [{
        type: Component,
        args: [{ selector: 'app-prochain-culte', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"pc-page\">\n  <div class=\"pc-header\">\n    <h1 class=\"pc-title\">\uD83D\uDCC5 Prochain culte en pr\u00E9sentiel</h1>\n    <p class=\"pc-subtitle\">Configurez l'annonce du prochain culte, uploadez le flyer et envoyez l'email \u00E0 tous les inscrits.</p>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"pc-loading\">Chargement\u2026</div>\n\n  <ng-container *ngIf=\"!loading\">\n\n    <!-- \u2500\u2500 Info card \u2500\u2500 -->\n    <div class=\"pc-card\">\n      <h2 class=\"pc-card-title\">Informations du culte</h2>\n\n      <label class=\"pc-field\">\n        <span class=\"pc-label\">Sujet / Titre de l'annonce *</span>\n        <input class=\"pc-input\" type=\"text\" [(ngModel)]=\"form.sujet\" placeholder=\"Ex: Notre prochain culte en pr\u00E9sentiel\" />\n      </label>\n\n      <label class=\"pc-field\">\n        <span class=\"pc-label\">Date et heure * (texte affich\u00E9 sur le site)</span>\n        <input class=\"pc-input\" type=\"text\" [(ngModel)]=\"form.date\" placeholder=\"Ex: Dimanche 26 avril 2026 \u00E0 17h00\" />\n      </label>\n\n      <label class=\"pc-field\">\n        <span class=\"pc-label\">Date machine (pour le bouton \"Ajouter \u00E0 mon agenda\")</span>\n        <input class=\"pc-input\" type=\"datetime-local\" [(ngModel)]=\"form.dateISO\" />\n      </label>\n\n      <label class=\"pc-field\">\n        <span class=\"pc-label\">Message (affich\u00E9 dans l'email et sur le site)</span>\n        <textarea class=\"pc-textarea\" rows=\"4\" [(ngModel)]=\"form.message\"\n          placeholder=\"Rejoignez-nous pour notre culte en pr\u00E9sentiel. Nous vous attendons avec joie !\"></textarea>\n      </label>\n\n      <div class=\"pc-actions\">\n        <button class=\"btn-primary\" (click)=\"save()\" [disabled]=\"saving\">\n          {{ saving ? 'Sauvegarde\u2026' : 'Sauvegarder' }}\n        </button>\n        <span class=\"msg-success\" *ngIf=\"savedMsg\">{{ savedMsg }}</span>\n        <span class=\"msg-error\"   *ngIf=\"errorMsg\">{{ errorMsg }}</span>\n      </div>\n    </div>\n\n    <!-- \u2500\u2500 Flyer card \u2500\u2500 -->\n    <div class=\"pc-card\">\n      <h2 class=\"pc-card-title\">Flyer du culte</h2>\n\n      <div class=\"flyer-zone\" *ngIf=\"flyerUrl && !flyerPreview\">\n        <img [src]=\"flyerUrl\" alt=\"Flyer actuel\" class=\"flyer-preview\" />\n        <p class=\"flyer-caption\">Flyer actuel \u2014 uploadez une nouvelle image pour le remplacer.</p>\n      </div>\n\n      <div class=\"flyer-zone\" *ngIf=\"flyerPreview\">\n        <img [src]=\"flyerPreview\" alt=\"Aper\u00E7u\" class=\"flyer-preview\" />\n        <p class=\"flyer-caption\">Aper\u00E7u \u2014 cliquez sur \"Uploader\" pour confirmer.</p>\n      </div>\n\n      <div *ngIf=\"!flyerUrl && !flyerPreview\" class=\"flyer-empty\">\n        Aucun flyer pour l'instant.\n      </div>\n\n      <label class=\"pc-field\" style=\"margin-top:16px;\">\n        <span class=\"pc-label\">Choisir une image (PNG, JPG\u2026)</span>\n        <input type=\"file\" accept=\"image/*\" (change)=\"onFlyerChange($event)\" class=\"pc-file-input\" />\n      </label>\n\n      <div class=\"pc-actions\" *ngIf=\"flyerFile\">\n        <button class=\"btn-primary\" (click)=\"uploadFlyer()\" [disabled]=\"uploadingFlyer\">\n          {{ uploadingFlyer ? 'Upload en cours\u2026' : 'Uploader le flyer' }}\n        </button>\n      </div>\n    </div>\n\n    <!-- \u2500\u2500 Broadcast card \u2500\u2500 -->\n    <div class=\"pc-card pc-card--broadcast\">\n      <h2 class=\"pc-card-title\">\uD83D\uDCE3 Envoyer \u00E0 tous les inscrits</h2>\n      <p class=\"broadcast-info\">\n        Cet email sera envoy\u00E9 \u00E0 <strong>toutes les adresses email</strong> pr\u00E9sentes dans la base de donn\u00E9es\n        (inscrits aux marathons et aux autres programmes).\n        Assurez-vous que les informations ci-dessus sont sauvegard\u00E9es avant d'envoyer.\n      </p>\n\n      <div *ngIf=\"broadcastMsg\" class=\"msg-success broadcast-result\">{{ broadcastMsg }}</div>\n      <div *ngIf=\"errorMsg\"     class=\"msg-error\">{{ errorMsg }}</div>\n\n      <button class=\"btn-broadcast\" (click)=\"broadcast()\" [disabled]=\"broadcasting\">\n        {{ broadcasting ? 'Envoi en cours\u2026' : '\uD83D\uDCE8 Envoyer l\\'email \u00E0 tous' }}\n      </button>\n    </div>\n\n  </ng-container>\n</div>\n", styles: [".pc-page {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: 32px 24px;\n}\n\n.pc-header {\n  margin-bottom: 32px;\n}\n\n.pc-title {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1A3D64;\n  margin: 0 0 6px;\n}\n\n.pc-subtitle {\n  color: #666;\n  font-size: 14px;\n  margin: 0;\n}\n\n.pc-loading {\n  padding: 40px;\n  text-align: center;\n  color: #888;\n}\n\n.pc-card {\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 10px;\n  padding: 28px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n}\n\n.pc-card--broadcast {\n  border-color: #1D546C;\n  background: linear-gradient(135deg, #eef6fa 0%, #f8fbfd 100%);\n}\n\n.pc-card-title {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1A3D64;\n  margin: 0 0 20px;\n}\n\n.pc-field {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n\n.pc-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #444;\n  margin-bottom: 6px;\n}\n\n.pc-input,\n.pc-textarea {\n  border: 1px solid #d0d0d0;\n  border-radius: 6px;\n  padding: 10px 14px;\n  font-size: 14px;\n  color: #222;\n  transition: border-color 0.2s;\n  font-family: inherit;\n  resize: vertical;\n}\n\n.pc-input:focus,\n.pc-textarea:focus {\n  outline: none;\n  border-color: #1D546C;\n}\n\n.pc-file-input {\n  font-size: 13px;\n  color: #555;\n}\n\n.pc-actions {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 8px;\n}\n\n.btn-primary {\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-broadcast {\n  background: linear-gradient(135deg, #1D546C, #00B7B5);\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 13px 32px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  margin-top: 16px;\n}\n\n.btn-broadcast:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.msg-success {\n  color: #16a34a;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.msg-error {\n  color: #dc2626;\n  font-size: 13px;\n}\n\n.broadcast-info {\n  color: #555;\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0 0 8px;\n}\n\n.broadcast-result {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 15px;\n}\n\n.flyer-zone {\n  margin-bottom: 16px;\n  text-align: center;\n}\n\n.flyer-preview {\n  max-width: 100%;\n  max-height: 300px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n}\n\n.flyer-caption {\n  font-size: 12px;\n  color: #888;\n  margin: 8px 0 0;\n}\n\n.flyer-empty {\n  color: #aaa;\n  font-size: 13px;\n  padding: 16px 0;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProchainCulteComponent, { className: "ProchainCulteComponent", filePath: "app\\admin\\pages\\prochain-culte\\prochain-culte.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=prochain-culte.component.js.map