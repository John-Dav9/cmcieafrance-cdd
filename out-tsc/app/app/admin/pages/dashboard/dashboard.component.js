import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function DashboardComponent_div_38_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 19)(2, "span", 20);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 22);
    i0.ɵɵelement(7, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 24);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 25);
    i0.ɵɵtext(11, "G\u00E9rer \u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r1.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r1.dateDebut, " \u2192 ", m_r1.dateFin, "");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", (m_r1.nbInscrits || 0) > 0 ? 100 : 0, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", m_r1.nbInscrits, " inscrit(s)");
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", "/espace-admin/marathon");
} }
function DashboardComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "h3", 12);
    i0.ɵɵtext(2, "Marathons actifs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16);
    i0.ɵɵtemplate(4, DashboardComponent_div_38_div_4_Template, 12, 7, "div", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.marathonsActifs);
} }
function DashboardComponent_a_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 26)(1, "span", 27);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", c_r3.route);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", c_r3.color + "18")("color", c_r3.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", c_r3.icon, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r3.desc);
} }
export class DashboardComponent {
    constructor() {
        this.api = inject(ApiService);
        this.cards = [
            { label: 'Inscriptions', desc: 'Marathon, culte, lecture biblique', route: '/espace-admin/inscriptions', icon: '✎', color: '#4f7dff' },
            { label: 'Annonces', desc: 'Publier & envoyer aux inscrits', route: '/espace-admin/annonces', icon: '📢', color: '#f59e0b' },
            { label: 'Actualités', desc: 'Articles & publications', route: '/espace-admin/actualites', icon: '📰', color: '#10b981' },
            { label: 'Bibliothèque', desc: 'Livres & traités PDF', route: '/espace-admin/bibliotheque', icon: '📖', color: '#8b5cf6' },
            { label: 'Témoignages', desc: 'Modérer les soumissions', route: '/espace-admin/temoignages', icon: '💬', color: '#ef4444' },
            { label: 'Marathons', desc: 'Créer & gérer les marathons', route: '/espace-admin/marathon', icon: '🏃', color: '#1D546C' },
            { label: 'Demandes de prière', desc: 'Voir & prendre en charge', route: '/espace-admin/prieres', icon: '🙏', color: '#7c3aed' },
            { label: 'Newsletter', desc: 'Abonnés & envois', route: '/espace-admin/newsletter', icon: '📧', color: '#0891b2' },
        ];
        this.stats = {
            marathonsActifs: 0,
            totalInscritsMarathon: 0,
            demandesPriere: 0,
            abonnesNewsletter: 0,
            tauxCompletionMoyen: 0,
        };
        this.marathonsActifs = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loadStats();
    }
    loadStats() {
        this.loading = true;
        this.api.getMarathonsAdmin().subscribe({
            next: (marathons) => {
                const actifs = marathons.filter((m) => m.statut === 'ACTIF');
                this.marathonsActifs = actifs.slice(0, 5);
                this.stats.marathonsActifs = actifs.length;
                this.stats.totalInscritsMarathon = marathons.reduce((s, m) => { var _a; return s + ((_a = m.nbInscrits) !== null && _a !== void 0 ? _a : 0); }, 0);
                const completed = marathons.filter((m) => m.nbInscrits > 0);
                if (completed.length > 0) {
                    this.stats.tauxCompletionMoyen = Math.round(completed.reduce((s, m) => { var _a; return s + ((_a = m.completionRate) !== null && _a !== void 0 ? _a : 0); }, 0) / completed.length);
                }
                this.loading = false;
            },
            error: () => { this.loading = false; },
        });
        this.api.getPrieres().subscribe({
            next: (data) => {
                this.stats.demandesPriere = data.filter((p) => p.statut === 'en_attente').length;
            },
            error: () => { },
        });
        this.api.getNewsletterSubscribers().subscribe({
            next: (data) => { this.stats.abonnesNewsletter = data.length; },
            error: () => { },
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 43, vars: 6, consts: [[1, "page"], [1, "page-title"], [1, "page-sub"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", 2, "background", "#EEF6FA", "color", "#1D546C"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", 2, "background", "#f0fdf4", "color", "#16a34a"], [1, "stat-icon", 2, "background", "#faf5ff", "color", "#7c3aed"], [1, "stat-icon", 2, "background", "#ecfeff", "color", "#0891b2"], ["class", "section", 4, "ngIf"], [1, "section-title"], [1, "cards"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "section"], [1, "marathon-rows"], ["class", "m-row", 4, "ngFor", "ngForOf"], [1, "m-row"], [1, "m-info"], [1, "m-name"], [1, "m-dates"], [1, "m-bar-wrap"], [1, "m-bar-fill"], [1, "m-count"], [1, "m-link", 3, "routerLink"], [1, "card", 3, "routerLink"], [1, "card-icon"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h2", 1);
        i0.ɵɵtext(2, "Tableau de bord");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 2);
        i0.ɵɵtext(4, "Bienvenue dans l'espace d'administration CMCIEA France.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3)(6, "div", 4)(7, "span", 5);
        i0.ɵɵtext(8, "\uD83C\uDFC3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div")(10, "p", 6);
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "p", 7);
        i0.ɵɵtext(13, "Marathon(s) actif(s)");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(14, "div", 4)(15, "span", 8);
        i0.ɵɵtext(16, "\uD83D\uDC65");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div")(18, "p", 6);
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "p", 7);
        i0.ɵɵtext(21, "Inscrits au total");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(22, "div", 4)(23, "span", 9);
        i0.ɵɵtext(24, "\uD83D\uDE4F");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div")(26, "p", 6);
        i0.ɵɵtext(27);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "p", 7);
        i0.ɵɵtext(29, "Pri\u00E8res en attente");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(30, "div", 4)(31, "span", 10);
        i0.ɵɵtext(32, "\uD83D\uDCE7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div")(34, "p", 6);
        i0.ɵɵtext(35);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "p", 7);
        i0.ɵɵtext(37, "Abonn\u00E9s newsletter");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(38, DashboardComponent_div_38_Template, 5, 1, "div", 11);
        i0.ɵɵelementStart(39, "h3", 12);
        i0.ɵɵtext(40, "Navigation rapide");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div", 13);
        i0.ɵɵtemplate(42, DashboardComponent_a_42_Template, 8, 8, "a", 14);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(11);
        i0.ɵɵtextInterpolate(ctx.stats.marathonsActifs);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(ctx.stats.totalInscritsMarathon);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(ctx.stats.demandesPriere);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(ctx.stats.abonnesNewsletter);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.marathonsActifs.length > 0);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.cards);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RouterModule, i2.RouterLink], styles: [".page[_ngcontent-%COMP%] { max-width: 1000px; }\n.page-title[_ngcontent-%COMP%] { font-size: 24px; font-weight: 700; color: #1a1f2e; }\n.page-sub[_ngcontent-%COMP%] { color: #8b93a8; margin-top: 4px; margin-bottom: 32px; font-size: 14px; }\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 36px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  border: 1px solid #eef0f7;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.stat-value[_ngcontent-%COMP%] { font-size: 28px; font-weight: 800; color: #1a1f2e; margin: 0; }\n.stat-label[_ngcontent-%COMP%] { font-size: 12px; color: #8b93a8; margin: 2px 0 0; }\n\n\n\n.section[_ngcontent-%COMP%] { margin-bottom: 36px; }\n.section-title[_ngcontent-%COMP%], h3.section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0 0 16px;\n}\n\n\n\n.marathon-rows[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n\n.m-row[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  border: 1px solid #eef0f7;\n}\n\n.m-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.m-name[_ngcontent-%COMP%] { display: block; font-size: 14px; font-weight: 600; color: #1a1f2e; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.m-dates[_ngcontent-%COMP%] { font-size: 12px; color: #8b93a8; }\n\n.m-bar-wrap[_ngcontent-%COMP%] { width: 120px; height: 6px; background: #f0f0f0; border-radius: 3px; flex-shrink: 0; }\n.m-bar-fill[_ngcontent-%COMP%] { height: 100%; background: linear-gradient(90deg, #1D546C, #00B7B5); border-radius: 3px; transition: width 0.5s; }\n\n.m-count[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #1D546C; white-space: nowrap; }\n.m-link[_ngcontent-%COMP%] { font-size: 12px; color: #1D546C; text-decoration: none; white-space: nowrap; }\n.m-link[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n\n\n\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  text-decoration: none;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  transition: box-shadow 0.15s, transform 0.15s;\n  border: 1px solid #eef0f7;\n}\n\n.card[_ngcontent-%COMP%]:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }\n\n.card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #1a1f2e; margin: 0; }\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 12px; color: #8b93a8; margin: 2px 0 0; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-dashboard', standalone: true, imports: [CommonModule, RouterModule], template: "<div class=\"page\">\n  <h2 class=\"page-title\">Tableau de bord</h2>\n  <p class=\"page-sub\">Bienvenue dans l'espace d'administration CMCIEA France.</p>\n\n  <!-- \u2500\u2500 Stats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"stats-grid\">\n    <div class=\"stat-card\">\n      <span class=\"stat-icon\" style=\"background:#EEF6FA;color:#1D546C;\">\uD83C\uDFC3</span>\n      <div>\n        <p class=\"stat-value\">{{ stats.marathonsActifs }}</p>\n        <p class=\"stat-label\">Marathon(s) actif(s)</p>\n      </div>\n    </div>\n    <div class=\"stat-card\">\n      <span class=\"stat-icon\" style=\"background:#f0fdf4;color:#16a34a;\">\uD83D\uDC65</span>\n      <div>\n        <p class=\"stat-value\">{{ stats.totalInscritsMarathon }}</p>\n        <p class=\"stat-label\">Inscrits au total</p>\n      </div>\n    </div>\n    <div class=\"stat-card\">\n      <span class=\"stat-icon\" style=\"background:#faf5ff;color:#7c3aed;\">\uD83D\uDE4F</span>\n      <div>\n        <p class=\"stat-value\">{{ stats.demandesPriere }}</p>\n        <p class=\"stat-label\">Pri\u00E8res en attente</p>\n      </div>\n    </div>\n    <div class=\"stat-card\">\n      <span class=\"stat-icon\" style=\"background:#ecfeff;color:#0891b2;\">\uD83D\uDCE7</span>\n      <div>\n        <p class=\"stat-value\">{{ stats.abonnesNewsletter }}</p>\n        <p class=\"stat-label\">Abonn\u00E9s newsletter</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Marathons actifs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"section\" *ngIf=\"!loading && marathonsActifs.length > 0\">\n    <h3 class=\"section-title\">Marathons actifs</h3>\n    <div class=\"marathon-rows\">\n      <div class=\"m-row\" *ngFor=\"let m of marathonsActifs\">\n        <div class=\"m-info\">\n          <span class=\"m-name\">{{ m.titre }}</span>\n          <span class=\"m-dates\">{{ m.dateDebut }} \u2192 {{ m.dateFin }}</span>\n        </div>\n        <div class=\"m-bar-wrap\">\n          <div class=\"m-bar-fill\" [style.width.%]=\"(m.nbInscrits || 0) > 0 ? 100 : 0\"></div>\n        </div>\n        <span class=\"m-count\">{{ m.nbInscrits }} inscrit(s)</span>\n        <a [routerLink]=\"'/espace-admin/marathon'\" class=\"m-link\">G\u00E9rer \u2192</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Navigation rapide \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <h3 class=\"section-title\">Navigation rapide</h3>\n  <div class=\"cards\">\n    <a *ngFor=\"let c of cards\" [routerLink]=\"c.route\" class=\"card\">\n      <span class=\"card-icon\" [style.background]=\"c.color + '18'\" [style.color]=\"c.color\">\n        {{ c.icon }}\n      </span>\n      <div>\n        <h3>{{ c.label }}</h3>\n        <p>{{ c.desc }}</p>\n      </div>\n    </a>\n  </div>\n</div>\n", styles: [".page { max-width: 1000px; }\n.page-title { font-size: 24px; font-weight: 700; color: #1a1f2e; }\n.page-sub { color: #8b93a8; margin-top: 4px; margin-bottom: 32px; font-size: 14px; }\n\n/* \u2500\u2500 Stats grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 36px;\n}\n\n.stat-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  border: 1px solid #eef0f7;\n}\n\n.stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.stat-value { font-size: 28px; font-weight: 800; color: #1a1f2e; margin: 0; }\n.stat-label { font-size: 12px; color: #8b93a8; margin: 2px 0 0; }\n\n/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.section { margin-bottom: 36px; }\n.section-title, h3.section-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1f2e;\n  margin: 0 0 16px;\n}\n\n/* \u2500\u2500 Marathon rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.marathon-rows { display: flex; flex-direction: column; gap: 10px; }\n\n.m-row {\n  background: #fff;\n  border-radius: 10px;\n  padding: 14px 18px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  border: 1px solid #eef0f7;\n}\n\n.m-info { flex: 1; min-width: 0; }\n.m-name { display: block; font-size: 14px; font-weight: 600; color: #1a1f2e; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.m-dates { font-size: 12px; color: #8b93a8; }\n\n.m-bar-wrap { width: 120px; height: 6px; background: #f0f0f0; border-radius: 3px; flex-shrink: 0; }\n.m-bar-fill { height: 100%; background: linear-gradient(90deg, #1D546C, #00B7B5); border-radius: 3px; transition: width 0.5s; }\n\n.m-count { font-size: 13px; font-weight: 600; color: #1D546C; white-space: nowrap; }\n.m-link { font-size: 12px; color: #1D546C; text-decoration: none; white-space: nowrap; }\n.m-link:hover { text-decoration: underline; }\n\n/* \u2500\u2500 Navigation cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n\n.card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  text-decoration: none;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  transition: box-shadow 0.15s, transform 0.15s;\n  border: 1px solid #eef0f7;\n}\n\n.card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: translateY(-2px); }\n\n.card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.card h3 { font-size: 14px; font-weight: 600; color: #1a1f2e; margin: 0; }\n.card p { font-size: 12px; color: #8b93a8; margin: 2px 0 0; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app\\admin\\pages\\dashboard\\dashboard.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=dashboard.component.js.map