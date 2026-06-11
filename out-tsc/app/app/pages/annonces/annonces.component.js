import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AnnoncesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AnnoncesComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 10);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 11);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r1.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r1.contenu);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(7, 3, a_r1.createdAt, "dd MMMM yyyy", "", "fr"));
} }
function AnnoncesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, AnnoncesComponent_div_8_div_1_Template, 8, 8, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.annonces);
} }
function AnnoncesComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, " Aucune annonce pour le moment. ");
    i0.ɵɵelementEnd();
} }
export class AnnoncesComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.base = environment.apiBase;
        this.annonces = [];
        this.loading = true;
    }
    ngOnInit() {
        this.http.get(`${this.base}/annonces`).subscribe({
            next: (data) => { this.annonces = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
}
AnnoncesComponent.ɵfac = function AnnoncesComponent_Factory(t) { return new (t || AnnoncesComponent)(); };
AnnoncesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnnoncesComponent, selectors: [["app-annonces"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 3, consts: [[1, "annonces-page"], [1, "container"], [1, "page-hero"], ["class", "loading", 4, "ngIf"], ["class", "annonces-list", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "loading"], [1, "annonces-list"], ["class", "annonce-card", 4, "ngFor", "ngForOf"], [1, "annonce-card"], [1, "contenu"], [1, "date"], [1, "empty"]], template: function AnnoncesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        i0.ɵɵtext(4, "Annonces");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Actualit\u00E9s et informations de la communaut\u00E9 CMCIEA France.");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(7, AnnoncesComponent_div_7_Template, 2, 0, "div", 3)(8, AnnoncesComponent_div_8_Template, 2, 1, "div", 4)(9, AnnoncesComponent_p_9_Template, 2, 0, "p", 5);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.annonces.length > 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.annonces.length === 0);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe], styles: [".annonces-page[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: var(--bg-primary, #0d0d0d);\n  min-height: 100vh;\n  color: var(--text-primary, #fff);\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n.page-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n\n.page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: var(--color-gold, #c9a84c);\n}\n\n.page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #aaa);\n}\n\n.annonces-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.annonce-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, #1a1a1a);\n  border: 1px solid var(--border, #333);\n  border-left: 4px solid var(--color-gold, #c9a84c);\n  border-radius: 8px;\n  padding: 24px;\n}\n\n.annonce-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.contenu[_ngcontent-%COMP%] {\n  color: #ccc;\n  line-height: 1.7;\n  white-space: pre-line;\n  margin-bottom: 12px;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #666;\n}\n\n.empty[_ngcontent-%COMP%] { text-align: center; color: #666; padding: 40px 0; }\n.loading[_ngcontent-%COMP%] { text-align: center; color: #888; padding: 40px 0; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnnoncesComponent, [{
        type: Component,
        args: [{ selector: 'app-annonces', standalone: true, imports: [CommonModule], template: "<section class=\"annonces-page\">\n  <div class=\"container\">\n    <div class=\"page-hero\">\n      <h1>Annonces</h1>\n      <p>Actualit\u00E9s et informations de la communaut\u00E9 CMCIEA France.</p>\n    </div>\n\n    <div class=\"loading\" *ngIf=\"loading\">Chargement...</div>\n\n    <div class=\"annonces-list\" *ngIf=\"!loading && annonces.length > 0\">\n      <div class=\"annonce-card\" *ngFor=\"let a of annonces\">\n        <h3>{{ a.titre }}</h3>\n        <p class=\"contenu\">{{ a.contenu }}</p>\n        <span class=\"date\">{{ a.createdAt | date:'dd MMMM yyyy' : '' : 'fr' }}</span>\n      </div>\n    </div>\n\n    <p class=\"empty\" *ngIf=\"!loading && annonces.length === 0\">\n      Aucune annonce pour le moment.\n    </p>\n  </div>\n</section>\n", styles: [".annonces-page {\n  padding: 60px 0;\n  background: var(--bg-primary, #0d0d0d);\n  min-height: 100vh;\n  color: var(--text-primary, #fff);\n}\n\n.container {\n  max-width: 780px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n.page-hero {\n  text-align: center;\n  margin-bottom: 48px;\n}\n\n.page-hero h1 {\n  font-size: 2.4rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: var(--color-gold, #c9a84c);\n}\n\n.page-hero p {\n  color: var(--text-secondary, #aaa);\n}\n\n.annonces-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.annonce-card {\n  background: var(--bg-card, #1a1a1a);\n  border: 1px solid var(--border, #333);\n  border-left: 4px solid var(--color-gold, #c9a84c);\n  border-radius: 8px;\n  padding: 24px;\n}\n\n.annonce-card h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.contenu {\n  color: #ccc;\n  line-height: 1.7;\n  white-space: pre-line;\n  margin-bottom: 12px;\n}\n\n.date {\n  font-size: 0.82rem;\n  color: #666;\n}\n\n.empty { text-align: center; color: #666; padding: 40px 0; }\n.loading { text-align: center; color: #888; padding: 40px 0; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnnoncesComponent, { className: "AnnoncesComponent", filePath: "app\\pages\\annonces\\annonces.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=annonces.component.js.map