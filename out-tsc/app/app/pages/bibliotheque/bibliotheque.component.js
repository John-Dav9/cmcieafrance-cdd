import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BibliothequeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function BibliothequeComponent_div_8_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "img", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", l_r2.coverUrl, i0.ɵɵsanitizeUrl)("alt", l_r2.titre);
} }
function BibliothequeComponent_div_8_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "span");
    i0.ɵɵtext(2, "\uD83D\uDCD6");
    i0.ɵɵelementEnd()();
} }
function BibliothequeComponent_div_8_div_1_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r2.auteur);
} }
function BibliothequeComponent_div_8_div_1_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r2.description);
} }
function BibliothequeComponent_div_8_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r2.categorie);
} }
function BibliothequeComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function BibliothequeComponent_div_8_div_1_Template_div_click_0_listener() { const l_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.open(l_r2)); });
    i0.ɵɵtemplate(1, BibliothequeComponent_div_8_div_1_div_1_Template, 2, 2, "div", 11)(2, BibliothequeComponent_div_8_div_1_div_2_Template, 3, 0, "div", 12);
    i0.ɵɵelementStart(3, "div", 13)(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, BibliothequeComponent_div_8_div_1_p_6_Template, 2, 1, "p", 14)(7, BibliothequeComponent_div_8_div_1_p_7_Template, 2, 1, "p", 15)(8, BibliothequeComponent_div_8_div_1_span_8_Template, 2, 1, "span", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const l_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r2.coverUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !l_r2.coverUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(l_r2.titre);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r2.auteur);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r2.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r2.categorie);
} }
function BibliothequeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BibliothequeComponent_div_8_div_1_Template, 9, 6, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.livres);
} }
function BibliothequeComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1, " Aucune ressource disponible pour l'instant. ");
    i0.ɵɵelementEnd();
} }
function BibliothequeComponent_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelement(1, "img", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r2.selected.coverUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r2.selected.titre);
} }
function BibliothequeComponent_div_10_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.selected.auteur);
} }
function BibliothequeComponent_div_10_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.selected.description);
} }
function BibliothequeComponent_div_10_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32);
    i0.ɵɵtext(1, " T\u00E9l\u00E9charger ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r2.selected.pdfUrl, i0.ɵɵsanitizeUrl);
} }
function BibliothequeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵlistener("click", function BibliothequeComponent_div_10_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵlistener("click", function BibliothequeComponent_div_10_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r4); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "button", 26);
    i0.ɵɵlistener("click", function BibliothequeComponent_div_10_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(3, "\u2715");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BibliothequeComponent_div_10_div_4_Template, 2, 2, "div", 27);
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BibliothequeComponent_div_10_p_7_Template, 2, 1, "p", 14)(8, BibliothequeComponent_div_10_p_8_Template, 2, 1, "p", 15);
    i0.ɵɵelementStart(9, "div", 28);
    i0.ɵɵtemplate(10, BibliothequeComponent_div_10_a_10_Template, 2, 1, "a", 29);
    i0.ɵɵelementStart(11, "button", 30);
    i0.ɵɵlistener("click", function BibliothequeComponent_div_10_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(12, "Fermer");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.selected.coverUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selected.titre);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.selected.auteur);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.selected.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.selected.pdfUrl);
} }
export class BibliothequeComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.base = environment.apiBase;
        this.livres = [];
        this.loading = true;
        this.selected = null;
    }
    ngOnInit() {
        this.http.get(`${this.base}/bibliotheque`).subscribe({
            next: (data) => { this.livres = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    open(livre) {
        this.selected = livre;
    }
    close() {
        this.selected = null;
    }
}
BibliothequeComponent.ɵfac = function BibliothequeComponent_Factory(t) { return new (t || BibliothequeComponent)(); };
BibliothequeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BibliothequeComponent, selectors: [["app-bibliotheque"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 11, vars: 4, consts: [[1, "biblio-page"], [1, "container"], [1, "page-hero"], ["class", "loading", 4, "ngIf"], ["class", "livres-grid", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "loading"], [1, "livres-grid"], ["class", "livre-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "livre-card", 3, "click"], ["class", "livre-cover", 4, "ngIf"], ["class", "livre-cover livre-cover--placeholder", 4, "ngIf"], [1, "livre-info"], ["class", "auteur", 4, "ngIf"], ["class", "description", 4, "ngIf"], ["class", "categorie", 4, "ngIf"], [1, "livre-cover"], [3, "src", "alt"], [1, "livre-cover", "livre-cover--placeholder"], [1, "auteur"], [1, "description"], [1, "categorie"], [1, "empty"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-close", 3, "click"], ["class", "modal-cover", 4, "ngIf"], [1, "modal-actions"], ["target", "_blank", "rel", "noopener", "class", "btn-download", 3, "href", 4, "ngIf"], [1, "btn-secondary", 3, "click"], [1, "modal-cover"], ["target", "_blank", "rel", "noopener", 1, "btn-download", 3, "href"]], template: function BibliothequeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        i0.ɵɵtext(4, "Biblioth\u00E8que");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Ressources spirituelles et documents de la CMCIEA France disponibles en t\u00E9l\u00E9chargement.");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(7, BibliothequeComponent_div_7_Template, 2, 0, "div", 3)(8, BibliothequeComponent_div_8_Template, 2, 1, "div", 4)(9, BibliothequeComponent_p_9_Template, 2, 0, "p", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, BibliothequeComponent_div_10_Template, 13, 5, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.livres.length > 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.livres.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.selected);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], styles: [".biblio-page[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: var(--bg-primary, #0d0d0d);\n  min-height: 100vh;\n  color: var(--text-primary, #fff);\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n.page-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n\n.page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: var(--color-gold, #c9a84c);\n}\n\n.page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #aaa);\n  font-size: 1.1rem;\n}\n\n.livres-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 24px;\n}\n\n.livre-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, #1a1a1a);\n  border: 1px solid var(--border, #333);\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.livre-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.4);\n}\n\n.livre-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 3/4;\n  overflow: hidden;\n  background: #222;\n}\n\n.livre-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.livre-cover--placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n}\n\n.livre-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.livre-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.auteur[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-gold, #c9a84c);\n  margin-bottom: 6px;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #888;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.categorie[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  background: #2a2a2a;\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  color: #aaa;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 24px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  background: #1a1a1a;\n  border-radius: 16px;\n  padding: 32px;\n  max-width: 480px;\n  width: 100%;\n  position: relative;\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: none;\n  border: none;\n  color: #aaa;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.modal-cover[_ngcontent-%COMP%] {\n  width: 120px;\n  margin: 0 auto 16px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.modal-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 8px;\n  text-align: center;\n}\n\n.modal[_ngcontent-%COMP%]   .auteur[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.modal[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  -webkit-line-clamp: unset;\n  color: #ccc;\n  margin: 12px 0;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.btn-download[_ngcontent-%COMP%] {\n  background: var(--color-gold, #c9a84c);\n  color: #000;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 24px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #333;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.empty[_ngcontent-%COMP%] { text-align: center; color: #666; padding: 40px 0; }\n.loading[_ngcontent-%COMP%] { text-align: center; color: #888; padding: 40px 0; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BibliothequeComponent, [{
        type: Component,
        args: [{ selector: 'app-bibliotheque', standalone: true, imports: [CommonModule], template: "<section class=\"biblio-page\">\n  <div class=\"container\">\n    <div class=\"page-hero\">\n      <h1>Biblioth\u00E8que</h1>\n      <p>Ressources spirituelles et documents de la CMCIEA France disponibles en t\u00E9l\u00E9chargement.</p>\n    </div>\n\n    <div class=\"loading\" *ngIf=\"loading\">Chargement...</div>\n\n    <div class=\"livres-grid\" *ngIf=\"!loading && livres.length > 0\">\n      <div class=\"livre-card\" *ngFor=\"let l of livres\" (click)=\"open(l)\">\n        <div class=\"livre-cover\" *ngIf=\"l.coverUrl\">\n          <img [src]=\"l.coverUrl\" [alt]=\"l.titre\" />\n        </div>\n        <div class=\"livre-cover livre-cover--placeholder\" *ngIf=\"!l.coverUrl\">\n          <span>\uD83D\uDCD6</span>\n        </div>\n        <div class=\"livre-info\">\n          <h3>{{ l.titre }}</h3>\n          <p class=\"auteur\" *ngIf=\"l.auteur\">{{ l.auteur }}</p>\n          <p class=\"description\" *ngIf=\"l.description\">{{ l.description }}</p>\n          <span class=\"categorie\" *ngIf=\"l.categorie\">{{ l.categorie }}</span>\n        </div>\n      </div>\n    </div>\n\n    <p class=\"empty\" *ngIf=\"!loading && livres.length === 0\">\n      Aucune ressource disponible pour l'instant.\n    </p>\n  </div>\n\n  <!-- Modale d\u00E9tail -->\n  <div class=\"modal-backdrop\" *ngIf=\"selected\" (click)=\"close()\">\n    <div class=\"modal\" (click)=\"$event.stopPropagation()\">\n      <button class=\"modal-close\" (click)=\"close()\">\u2715</button>\n      <div class=\"modal-cover\" *ngIf=\"selected.coverUrl\">\n        <img [src]=\"selected.coverUrl\" [alt]=\"selected.titre\" />\n      </div>\n      <h2>{{ selected.titre }}</h2>\n      <p class=\"auteur\" *ngIf=\"selected.auteur\">{{ selected.auteur }}</p>\n      <p class=\"description\" *ngIf=\"selected.description\">{{ selected.description }}</p>\n      <div class=\"modal-actions\">\n        <a *ngIf=\"selected.pdfUrl\" [href]=\"selected.pdfUrl\" target=\"_blank\" rel=\"noopener\" class=\"btn-download\">\n          T\u00E9l\u00E9charger\n        </a>\n        <button class=\"btn-secondary\" (click)=\"close()\">Fermer</button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: [".biblio-page {\n  padding: 60px 0;\n  background: var(--bg-primary, #0d0d0d);\n  min-height: 100vh;\n  color: var(--text-primary, #fff);\n}\n\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\n.page-hero {\n  text-align: center;\n  margin-bottom: 48px;\n}\n\n.page-hero h1 {\n  font-size: 2.4rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: var(--color-gold, #c9a84c);\n}\n\n.page-hero p {\n  color: var(--text-secondary, #aaa);\n  font-size: 1.1rem;\n}\n\n.livres-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 24px;\n}\n\n.livre-card {\n  background: var(--bg-card, #1a1a1a);\n  border: 1px solid var(--border, #333);\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.livre-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.4);\n}\n\n.livre-cover {\n  width: 100%;\n  aspect-ratio: 3/4;\n  overflow: hidden;\n  background: #222;\n}\n\n.livre-cover img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.livre-cover--placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n}\n\n.livre-info {\n  padding: 16px;\n}\n\n.livre-info h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n\n.auteur {\n  font-size: 0.85rem;\n  color: var(--color-gold, #c9a84c);\n  margin-bottom: 6px;\n}\n\n.description {\n  font-size: 0.82rem;\n  color: #888;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.categorie {\n  display: inline-block;\n  margin-top: 8px;\n  background: #2a2a2a;\n  border-radius: 4px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  color: #aaa;\n}\n\n/* Modal */\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 24px;\n}\n\n.modal {\n  background: #1a1a1a;\n  border-radius: 16px;\n  padding: 32px;\n  max-width: 480px;\n  width: 100%;\n  position: relative;\n}\n\n.modal-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: none;\n  border: none;\n  color: #aaa;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.modal-cover {\n  width: 120px;\n  margin: 0 auto 16px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.modal-cover img {\n  width: 100%;\n  display: block;\n}\n\n.modal h2 {\n  font-size: 1.3rem;\n  margin-bottom: 8px;\n  text-align: center;\n}\n\n.modal .auteur {\n  text-align: center;\n}\n\n.modal .description {\n  -webkit-line-clamp: unset;\n  color: #ccc;\n  margin: 12px 0;\n}\n\n.modal-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.btn-download {\n  background: var(--color-gold, #c9a84c);\n  color: #000;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 24px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n\n.btn-secondary {\n  background: #333;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.empty { text-align: center; color: #666; padding: 40px 0; }\n.loading { text-align: center; color: #888; padding: 40px 0; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BibliothequeComponent, { className: "BibliothequeComponent", filePath: "app\\pages\\bibliotheque\\bibliotheque.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=bibliotheque.component.js.map