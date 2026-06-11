import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AdminPrieresComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.enAttente.length, " en attente");
} }
function AdminPrieresComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "Chargement\u2026");
    i0.ɵɵelementEnd();
} }
function AdminPrieresComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, " Aucune demande de pri\u00E8re pour l'instant. ");
    i0.ɵɵelementEnd();
} }
function AdminPrieresComponent_div_7_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "div")(3, "span", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 18);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 19);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 20)(13, "button", 21);
    i0.ɵɵlistener("click", function AdminPrieresComponent_div_7_div_1_div_3_Template_button_click_13_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.updateStatut(p_r3.id, "pris_en_charge")); });
    i0.ɵɵtext(14, "\u2713 Prendre en charge");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 22);
    i0.ɵɵlistener("click", function AdminPrieresComponent_div_7_div_1_div_3_Template_button_click_15_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.updateStatut(p_r3.id, "ferme")); });
    i0.ɵɵtext(16, "Fermer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 23);
    i0.ɵɵlistener("click", function AdminPrieresComponent_div_7_div_1_div_3_Template_button_click_17_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.supprimer(p_r3.id)); });
    i0.ɵɵtext(18, "\u2715");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(p_r3.anonyme ? "Anonyme" : p_r3.prenom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r3.sujet);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 4, p_r3.createdAt, "dd/MM/yy HH:mm"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r3.message);
} }
function AdminPrieresComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "h3", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AdminPrieresComponent_div_7_div_1_div_3_Template, 19, 7, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83D\uDE4F En attente (", ctx_r0.enAttente.length, ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.enAttente);
} }
function AdminPrieresComponent_div_7_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 15)(2, "div")(3, "span", 16);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 18);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 19);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 20)(13, "button", 22);
    i0.ɵɵlistener("click", function AdminPrieresComponent_div_7_div_2_div_3_Template_button_click_13_listener() { const p_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.updateStatut(p_r5.id, "ferme")); });
    i0.ɵɵtext(14, "Fermer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 23);
    i0.ɵɵlistener("click", function AdminPrieresComponent_div_7_div_2_div_3_Template_button_click_15_listener() { const p_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.supprimer(p_r5.id)); });
    i0.ɵɵtext(16, "\u2715");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(p_r5.anonyme ? "Anonyme" : p_r5.prenom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r5.sujet);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 4, p_r5.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r5.message);
} }
function AdminPrieresComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "h3", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AdminPrieresComponent_div_7_div_2_div_3_Template, 17, 7, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u2705 Pris en charge (", ctx_r0.prisEnCharge.length, ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.prisEnCharge);
} }
function AdminPrieresComponent_div_7_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "div", 15)(2, "span", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 18);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 30);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 20)(10, "button", 23);
    i0.ɵɵlistener("click", function AdminPrieresComponent_div_7_div_3_div_3_Template_button_click_10_listener() { const p_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.supprimer(p_r7.id)); });
    i0.ɵɵtext(11, "\u2715 Supprimer");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r7.anonyme ? "Anonyme" : p_r7.prenom);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 3, p_r7.createdAt, "dd/MM/yy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r7.sujet);
} }
function AdminPrieresComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "h3", 27);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AdminPrieresComponent_div_7_div_3_div_3_Template, 12, 6, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83D\uDD12 Ferm\u00E9es (", ctx_r0.fermes.length, ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fermes);
} }
function AdminPrieresComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AdminPrieresComponent_div_7_div_1_Template, 4, 2, "div", 10)(2, AdminPrieresComponent_div_7_div_2_Template, 4, 2, "div", 10)(3, AdminPrieresComponent_div_7_div_3_Template, 4, 2, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.enAttente.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.prisEnCharge.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fermes.length > 0);
} }
export class AdminPrieresComponent {
    constructor() {
        this.api = inject(ApiService);
        this.prieres = [];
        this.loading = true;
        this.statutLabels = {
            en_attente: 'En attente',
            pris_en_charge: 'Pris en charge',
            ferme: 'Fermé',
        };
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getPrieres().subscribe({
            next: (data) => { this.prieres = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    updateStatut(id, statut) {
        this.api.updatePriereStatut(id, statut).subscribe({ next: () => this.load() });
    }
    supprimer(id) {
        if (!confirm('Supprimer cette demande de prière ?'))
            return;
        this.api.deletePriere(id).subscribe({ next: () => this.load() });
    }
    get enAttente() { return this.prieres.filter(p => p.statut === 'en_attente'); }
    get prisEnCharge() { return this.prieres.filter(p => p.statut === 'pris_en_charge'); }
    get fermes() { return this.prieres.filter(p => p.statut === 'ferme'); }
}
AdminPrieresComponent.ɵfac = function AdminPrieresComponent_Factory(t) { return new (t || AdminPrieresComponent)(); };
AdminPrieresComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminPrieresComponent, selectors: [["app-admin-prieres"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 8, vars: 4, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], ["class", "badge-count", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [4, "ngIf"], [1, "badge-count"], [1, "loading"], [1, "empty"], ["class", "section", 4, "ngIf"], [1, "section"], [1, "section-label", "section-label--urgent"], ["class", "priere-card", 4, "ngFor", "ngForOf"], [1, "priere-card"], [1, "priere-top"], [1, "priere-prenom"], [1, "priere-sujet"], [1, "priere-date"], [1, "priere-message"], [1, "priere-actions"], [1, "btn-charge", 3, "click"], [1, "btn-ferme", 3, "click"], [1, "btn-del", 3, "click"], [1, "section-label"], ["class", "priere-card priere-card--done", 4, "ngFor", "ngForOf"], [1, "priere-card", "priere-card--done"], [1, "section-label", "section-label--muted"], ["class", "priere-card priere-card--muted", 4, "ngFor", "ngForOf"], [1, "priere-card", "priere-card--muted"], [1, "priere-sujet-inline"]], template: function AdminPrieresComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Demandes de pri\u00E8re");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, AdminPrieresComponent_span_4_Template, 2, 1, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, AdminPrieresComponent_div_5_Template, 2, 0, "div", 4)(6, AdminPrieresComponent_div_6_Template, 2, 0, "div", 5)(7, AdminPrieresComponent_div_7_Template, 4, 3, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.enAttente.length > 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.prieres.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.prieres.length > 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe], styles: [".page[_ngcontent-%COMP%] { max-width: 800px; }\n.page-header[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }\n.page-title[_ngcontent-%COMP%] { font-size: 24px; font-weight: 700; color: #1a1f2e; margin: 0; }\n.badge-count[_ngcontent-%COMP%] { background: #7c3aed; color: #fff; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }\n.loading[_ngcontent-%COMP%] { color: #888; padding: 40px; text-align: center; }\n.empty[_ngcontent-%COMP%] { color: #888; padding: 40px; text-align: center; }\n\n.section[_ngcontent-%COMP%] { margin-bottom: 32px; }\n.section-label[_ngcontent-%COMP%] { font-size: 14px; font-weight: 700; margin: 0 0 14px; color: #1a1f2e; }\n.section-label--urgent[_ngcontent-%COMP%] { color: #7c3aed; }\n.section-label--muted[_ngcontent-%COMP%] { color: #888; }\n\n.priere-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e8e8f0;\n  border-radius: 12px;\n  padding: 18px 20px;\n  margin-bottom: 12px;\n}\n\n.priere-card--done[_ngcontent-%COMP%] { opacity: 0.85; }\n.priere-card--muted[_ngcontent-%COMP%] { opacity: 0.6; }\n\n.priere-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n\n.priere-prenom[_ngcontent-%COMP%] { font-weight: 700; color: #1A3D64; font-size: 14px; margin-right: 8px; }\n.priere-sujet[_ngcontent-%COMP%] { font-size: 14px; color: #444; }\n.priere-sujet-inline[_ngcontent-%COMP%] { font-size: 13px; color: #666; margin: 0 0 10px; }\n.priere-date[_ngcontent-%COMP%] { font-size: 11px; color: #aaa; white-space: nowrap; }\n.priere-message[_ngcontent-%COMP%] { font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 14px; }\n\n.priere-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; flex-wrap: wrap; }\n\n.btn-charge[_ngcontent-%COMP%] {\n  padding: 7px 14px; border: none; border-radius: 6px;\n  background: #7c3aed; color: #fff; font-size: 13px; font-weight: 600; cursor: pointer;\n}\n.btn-ferme[_ngcontent-%COMP%] {\n  padding: 7px 14px; border: 1.5px solid #ccc; border-radius: 6px;\n  background: #fff; color: #555; font-size: 13px; cursor: pointer;\n}\n.btn-del[_ngcontent-%COMP%] {\n  padding: 7px 12px; border: none; border-radius: 6px;\n  background: #fee2e2; color: #991b1b; font-size: 13px; cursor: pointer;\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminPrieresComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-prieres', standalone: true, imports: [CommonModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Demandes de pri\u00E8re</h2>\n    <span class=\"badge-count\" *ngIf=\"enAttente.length > 0\">{{ enAttente.length }} en attente</span>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement\u2026</div>\n\n  <div *ngIf=\"!loading && prieres.length === 0\" class=\"empty\">\n    Aucune demande de pri\u00E8re pour l'instant.\n  </div>\n\n  <div *ngIf=\"!loading && prieres.length > 0\">\n\n    <!-- En attente -->\n    <div *ngIf=\"enAttente.length > 0\" class=\"section\">\n      <h3 class=\"section-label section-label--urgent\">\uD83D\uDE4F En attente ({{ enAttente.length }})</h3>\n      <div class=\"priere-card\" *ngFor=\"let p of enAttente\">\n        <div class=\"priere-top\">\n          <div>\n            <span class=\"priere-prenom\">{{ p.anonyme ? 'Anonyme' : p.prenom }}</span>\n            <span class=\"priere-sujet\">{{ p.sujet }}</span>\n          </div>\n          <span class=\"priere-date\">{{ p.createdAt | date:'dd/MM/yy HH:mm' }}</span>\n        </div>\n        <p class=\"priere-message\">{{ p.message }}</p>\n        <div class=\"priere-actions\">\n          <button class=\"btn-charge\" (click)=\"updateStatut(p.id, 'pris_en_charge')\">\u2713 Prendre en charge</button>\n          <button class=\"btn-ferme\"  (click)=\"updateStatut(p.id, 'ferme')\">Fermer</button>\n          <button class=\"btn-del\"    (click)=\"supprimer(p.id)\">\u2715</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Pris en charge -->\n    <div *ngIf=\"prisEnCharge.length > 0\" class=\"section\">\n      <h3 class=\"section-label\">\u2705 Pris en charge ({{ prisEnCharge.length }})</h3>\n      <div class=\"priere-card priere-card--done\" *ngFor=\"let p of prisEnCharge\">\n        <div class=\"priere-top\">\n          <div>\n            <span class=\"priere-prenom\">{{ p.anonyme ? 'Anonyme' : p.prenom }}</span>\n            <span class=\"priere-sujet\">{{ p.sujet }}</span>\n          </div>\n          <span class=\"priere-date\">{{ p.createdAt | date:'dd/MM/yy' }}</span>\n        </div>\n        <p class=\"priere-message\">{{ p.message }}</p>\n        <div class=\"priere-actions\">\n          <button class=\"btn-ferme\" (click)=\"updateStatut(p.id, 'ferme')\">Fermer</button>\n          <button class=\"btn-del\"   (click)=\"supprimer(p.id)\">\u2715</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Ferm\u00E9s -->\n    <div *ngIf=\"fermes.length > 0\" class=\"section\">\n      <h3 class=\"section-label section-label--muted\">\uD83D\uDD12 Ferm\u00E9es ({{ fermes.length }})</h3>\n      <div class=\"priere-card priere-card--muted\" *ngFor=\"let p of fermes\">\n        <div class=\"priere-top\">\n          <span class=\"priere-prenom\">{{ p.anonyme ? 'Anonyme' : p.prenom }}</span>\n          <span class=\"priere-date\">{{ p.createdAt | date:'dd/MM/yy' }}</span>\n        </div>\n        <p class=\"priere-sujet-inline\">{{ p.sujet }}</p>\n        <div class=\"priere-actions\">\n          <button class=\"btn-del\" (click)=\"supprimer(p.id)\">\u2715 Supprimer</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n", styles: [".page { max-width: 800px; }\n.page-header { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }\n.page-title { font-size: 24px; font-weight: 700; color: #1a1f2e; margin: 0; }\n.badge-count { background: #7c3aed; color: #fff; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }\n.loading { color: #888; padding: 40px; text-align: center; }\n.empty { color: #888; padding: 40px; text-align: center; }\n\n.section { margin-bottom: 32px; }\n.section-label { font-size: 14px; font-weight: 700; margin: 0 0 14px; color: #1a1f2e; }\n.section-label--urgent { color: #7c3aed; }\n.section-label--muted { color: #888; }\n\n.priere-card {\n  background: #fff;\n  border: 1.5px solid #e8e8f0;\n  border-radius: 12px;\n  padding: 18px 20px;\n  margin-bottom: 12px;\n}\n\n.priere-card--done { opacity: 0.85; }\n.priere-card--muted { opacity: 0.6; }\n\n.priere-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n\n.priere-prenom { font-weight: 700; color: #1A3D64; font-size: 14px; margin-right: 8px; }\n.priere-sujet { font-size: 14px; color: #444; }\n.priere-sujet-inline { font-size: 13px; color: #666; margin: 0 0 10px; }\n.priere-date { font-size: 11px; color: #aaa; white-space: nowrap; }\n.priere-message { font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 14px; }\n\n.priere-actions { display: flex; gap: 8px; flex-wrap: wrap; }\n\n.btn-charge {\n  padding: 7px 14px; border: none; border-radius: 6px;\n  background: #7c3aed; color: #fff; font-size: 13px; font-weight: 600; cursor: pointer;\n}\n.btn-ferme {\n  padding: 7px 14px; border: 1.5px solid #ccc; border-radius: 6px;\n  background: #fff; color: #555; font-size: 13px; cursor: pointer;\n}\n.btn-del {\n  padding: 7px 12px; border: none; border-radius: 6px;\n  background: #fee2e2; color: #991b1b; font-size: 13px; cursor: pointer;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminPrieresComponent, { className: "AdminPrieresComponent", filePath: "app\\admin\\pages\\prieres\\prieres.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=prieres.component.js.map