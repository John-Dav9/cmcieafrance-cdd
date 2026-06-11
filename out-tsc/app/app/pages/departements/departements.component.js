import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DEPARTEMENTS } from './departements.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = a0 => ["/departements", a0];
function DepartementsComponent_a_10_li_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r1);
} }
function DepartementsComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13)(1, "div", 14)(2, "span", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 16);
    i0.ɵɵtext(5, "D\u00E9couvrir");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h2", 17);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 18);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "ul", 19);
    i0.ɵɵtemplate(11, DepartementsComponent_a_10_li_11_Template, 2, 1, "li", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 21)(13, "span");
    i0.ɵɵtext(14, "Rejoindre ce d\u00E9partement \u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const d_r2 = ctx.$implicit;
    i0.ɵɵstyleProp("--dept-color", d_r2.color)("--dept-color-light", d_r2.colorLight);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(13, _c0, d_r2.slug));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(d_r2.emoji);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", d_r2.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(d_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r2.tagline);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", d_r2.activites.slice(0, 2));
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", d_r2.color);
} }
export class DepartementsComponent {
    constructor() {
        this.departements = DEPARTEMENTS;
    }
}
DepartementsComponent.ɵfac = function DepartementsComponent_Factory(t) { return new (t || DepartementsComponent)(); };
DepartementsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DepartementsComponent, selectors: [["app-departements"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 19, vars: 1, consts: [[1, "dept-hero"], [1, "dept-hero-inner"], [1, "dept-hero-badge"], [1, "dept-hero-title"], [1, "dept-hero-sub"], [1, "dept-grid-section"], [1, "dept-grid"], ["class", "dept-card", 3, "routerLink", "--dept-color", "--dept-color-light", 4, "ngFor", "ngForOf"], [1, "dept-cta"], [1, "dept-cta-inner"], [1, "dept-cta-verse"], [1, "dept-cta-ref"], [1, "dept-cta-text"], [1, "dept-card", 3, "routerLink"], [1, "dept-card-top"], [1, "dept-card-emoji"], [1, "dept-card-badge"], [1, "dept-card-name"], [1, "dept-card-tagline"], [1, "dept-card-activities"], [4, "ngFor", "ngForOf"], [1, "dept-card-footer"]], template: function DepartementsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
        i0.ɵɵtext(3, "Notre communaut\u00E9");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h1", 3);
        i0.ɵɵtext(5, "Nos D\u00E9partements");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 4);
        i0.ɵɵtext(7, " La CMCIEA France est organis\u00E9e en d\u00E9partements pour mieux accompagner chaque membre selon son \u00E2ge, sa vocation et ses besoins. Trouve ta famille spirituelle et rejoins-nous. ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "section", 5)(9, "div", 6);
        i0.ɵɵtemplate(10, DepartementsComponent_a_10_Template, 15, 15, "a", 7);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "section", 8)(12, "div", 9)(13, "p", 10);
        i0.ɵɵtext(14, " \u00AB Et chacun sert selon le don qu'il a re\u00E7u, comme un bon administrateur des diverses gr\u00E2ces de Dieu. \u00BB ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "p", 11);
        i0.ɵɵtext(16, "1 Pierre 4:10");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "p", 12);
        i0.ɵɵtext(18, " Chaque d\u00E9partement est un endroit o\u00F9 tes dons trouvent leur place. Prends contact avec nous \u2014 ensemble, nous grandissons. ");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngForOf", ctx.departements);
    } }, dependencies: [CommonModule, i1.NgForOf, RouterModule, i2.RouterLink], styles: ["\n\n.dept-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1A3D64 0%, #1D546C 60%, #00B7B5 100%);\n  padding: 80px 24px 72px;\n  text-align: center;\n}\n\n.dept-hero-inner[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.dept-hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(0,183,181,0.25);\n  color: #00B7B5;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 4px 16px;\n  border-radius: 20px;\n  margin-bottom: 18px;\n}\n\n.dept-hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 5vw, 52px);\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0 0 18px;\n  line-height: 1.15;\n}\n\n.dept-hero-sub[_ngcontent-%COMP%] {\n  color: #c0d8e8;\n  font-size: 16px;\n  line-height: 1.7;\n  margin: 0;\n}\n\n\n\n.dept-grid-section[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 64px 24px;\n}\n\n.dept-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 28px;\n}\n\n.dept-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0,0,0,0.07);\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  border: 2px solid transparent;\n}\n\n.dept-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(0,0,0,0.12);\n  border-color: var(--dept-color);\n}\n\n.dept-card-top[_ngcontent-%COMP%] {\n  padding: 28px 24px 8px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.dept-card-emoji[_ngcontent-%COMP%] {\n  font-size: 44px;\n  line-height: 1;\n}\n\n.dept-card-badge[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  align-self: center;\n}\n\n.dept-card[_ngcontent-%COMP%]:hover   .dept-card-badge[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.dept-card-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #1A3D64;\n  margin: 8px 24px 6px;\n  line-height: 1.25;\n}\n\n.dept-card-tagline[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--dept-color);\n  font-weight: 600;\n  margin: 0 24px 14px;\n  font-style: italic;\n}\n\n.dept-card-activities[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 24px 0;\n  padding: 0;\n  list-style: none;\n}\n\n.dept-card-activities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n  line-height: 1.5;\n  padding: 5px 0 5px 18px;\n  position: relative;\n  border-top: 1px solid #f0f0f0;\n}\n\n.dept-card-activities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: '\u203A';\n  position: absolute;\n  left: 0;\n  color: var(--dept-color);\n  font-weight: 700;\n}\n\n.dept-card-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 14px 24px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 0.3px;\n}\n\n\n\n.dept-cta[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1A3D64, #1D546C);\n  padding: 60px 24px;\n  text-align: center;\n}\n\n.dept-cta-inner[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n.dept-cta-verse[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ffffff;\n  font-style: italic;\n  line-height: 1.7;\n  margin: 0 0 8px;\n}\n\n.dept-cta-ref[_ngcontent-%COMP%] {\n  color: #00B7B5;\n  font-weight: 700;\n  font-size: 14px;\n  margin: 0 0 20px;\n}\n\n.dept-cta-text[_ngcontent-%COMP%] {\n  color: #c0d8e8;\n  font-size: 15px;\n  line-height: 1.6;\n  margin: 0;\n}\n\n@media (max-width: 640px) {\n  .dept-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DepartementsComponent, [{
        type: Component,
        args: [{ selector: 'app-departements', standalone: true, imports: [CommonModule, RouterModule], template: "<!-- \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<section class=\"dept-hero\">\n  <div class=\"dept-hero-inner\">\n    <span class=\"dept-hero-badge\">Notre communaut\u00E9</span>\n    <h1 class=\"dept-hero-title\">Nos D\u00E9partements</h1>\n    <p class=\"dept-hero-sub\">\n      La CMCIEA France est organis\u00E9e en d\u00E9partements pour mieux accompagner\n      chaque membre selon son \u00E2ge, sa vocation et ses besoins.\n      Trouve ta famille spirituelle et rejoins-nous.\n    </p>\n  </div>\n</section>\n\n<!-- \u2500\u2500 Grid des d\u00E9partements \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<section class=\"dept-grid-section\">\n  <div class=\"dept-grid\">\n    <a\n      *ngFor=\"let d of departements\"\n      [routerLink]=\"['/departements', d.slug]\"\n      class=\"dept-card\"\n      [style.--dept-color]=\"d.color\"\n      [style.--dept-color-light]=\"d.colorLight\"\n    >\n      <div class=\"dept-card-top\">\n        <span class=\"dept-card-emoji\">{{ d.emoji }}</span>\n        <div class=\"dept-card-badge\" [style.background]=\"d.color\">D\u00E9couvrir</div>\n      </div>\n      <h2 class=\"dept-card-name\">{{ d.name }}</h2>\n      <p class=\"dept-card-tagline\">{{ d.tagline }}</p>\n      <ul class=\"dept-card-activities\">\n        <li *ngFor=\"let a of d.activites.slice(0, 2)\">{{ a }}</li>\n      </ul>\n      <div class=\"dept-card-footer\" [style.background]=\"d.color\">\n        <span>Rejoindre ce d\u00E9partement \u2192</span>\n      </div>\n    </a>\n  </div>\n</section>\n\n<!-- \u2500\u2500 Verset / Call-to-action bas de page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<section class=\"dept-cta\">\n  <div class=\"dept-cta-inner\">\n    <p class=\"dept-cta-verse\">\n      \u00AB Et chacun sert selon le don qu'il a re\u00E7u, comme un bon administrateur\n      des diverses gr\u00E2ces de Dieu. \u00BB\n    </p>\n    <p class=\"dept-cta-ref\">1 Pierre 4:10</p>\n    <p class=\"dept-cta-text\">\n      Chaque d\u00E9partement est un endroit o\u00F9 tes dons trouvent leur place.\n      Prends contact avec nous \u2014 ensemble, nous grandissons.\n    </p>\n  </div>\n</section>\n", styles: ["/* \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dept-hero {\n  background: linear-gradient(135deg, #1A3D64 0%, #1D546C 60%, #00B7B5 100%);\n  padding: 80px 24px 72px;\n  text-align: center;\n}\n\n.dept-hero-inner {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.dept-hero-badge {\n  display: inline-block;\n  background: rgba(0,183,181,0.25);\n  color: #00B7B5;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 4px 16px;\n  border-radius: 20px;\n  margin-bottom: 18px;\n}\n\n.dept-hero-title {\n  font-size: clamp(32px, 5vw, 52px);\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0 0 18px;\n  line-height: 1.15;\n}\n\n.dept-hero-sub {\n  color: #c0d8e8;\n  font-size: 16px;\n  line-height: 1.7;\n  margin: 0;\n}\n\n/* \u2500\u2500 Grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dept-grid-section {\n  background: #f4f4f4;\n  padding: 64px 24px;\n}\n\n.dept-grid {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 28px;\n}\n\n.dept-card {\n  background: #ffffff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0,0,0,0.07);\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n  color: inherit;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  border: 2px solid transparent;\n}\n\n.dept-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(0,0,0,0.12);\n  border-color: var(--dept-color);\n}\n\n.dept-card-top {\n  padding: 28px 24px 8px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n\n.dept-card-emoji {\n  font-size: 44px;\n  line-height: 1;\n}\n\n.dept-card-badge {\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  align-self: center;\n}\n\n.dept-card:hover .dept-card-badge {\n  opacity: 1;\n}\n\n.dept-card-name {\n  font-size: 18px;\n  font-weight: 800;\n  color: #1A3D64;\n  margin: 8px 24px 6px;\n  line-height: 1.25;\n}\n\n.dept-card-tagline {\n  font-size: 13px;\n  color: var(--dept-color);\n  font-weight: 600;\n  margin: 0 24px 14px;\n  font-style: italic;\n}\n\n.dept-card-activities {\n  flex: 1;\n  margin: 0 24px 0;\n  padding: 0;\n  list-style: none;\n}\n\n.dept-card-activities li {\n  font-size: 13px;\n  color: #555;\n  line-height: 1.5;\n  padding: 5px 0 5px 18px;\n  position: relative;\n  border-top: 1px solid #f0f0f0;\n}\n\n.dept-card-activities li::before {\n  content: '\u203A';\n  position: absolute;\n  left: 0;\n  color: var(--dept-color);\n  font-weight: 700;\n}\n\n.dept-card-footer {\n  margin-top: 20px;\n  padding: 14px 24px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 0.3px;\n}\n\n/* \u2500\u2500 CTA bas \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dept-cta {\n  background: linear-gradient(135deg, #1A3D64, #1D546C);\n  padding: 60px 24px;\n  text-align: center;\n}\n\n.dept-cta-inner {\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n.dept-cta-verse {\n  font-size: 18px;\n  color: #ffffff;\n  font-style: italic;\n  line-height: 1.7;\n  margin: 0 0 8px;\n}\n\n.dept-cta-ref {\n  color: #00B7B5;\n  font-weight: 700;\n  font-size: 14px;\n  margin: 0 0 20px;\n}\n\n.dept-cta-text {\n  color: #c0d8e8;\n  font-size: 15px;\n  line-height: 1.6;\n  margin: 0;\n}\n\n@media (max-width: 640px) {\n  .dept-grid { grid-template-columns: 1fr; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DepartementsComponent, { className: "DepartementsComponent", filePath: "app\\pages\\departements\\departements.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=departements.component.js.map