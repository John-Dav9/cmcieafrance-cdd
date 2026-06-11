import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class MentionsLegalesComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
}
MentionsLegalesComponent.ɵfac = function MentionsLegalesComponent_Factory(t) { return new (t || MentionsLegalesComponent)(); };
MentionsLegalesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MentionsLegalesComponent, selectors: [["app-mentions-legales"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 62, vars: 1, consts: [[1, "legal-page"], [1, "legal-hero"], [1, "legal-hero-inner"], [1, "legal-content"], [1, "legal-section"], ["href", "mailto:contact@cmciea-france.com"], ["href", "https://firebase.google.com", "target", "_blank", "rel", "noopener"], [1, "legal-date"], ["routerLink", "/", 1, "legal-back"]], template: function MentionsLegalesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        i0.ɵɵtext(4, "Mentions l\u00E9gales");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "Informations l\u00E9gales relatives au site cmciea-france.com");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(7, "div", 3)(8, "section", 4)(9, "h2");
        i0.ɵɵtext(10, "1. \u00C9diteur du site");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "p")(12, "strong");
        i0.ɵɵtext(13, "CMCIEA-France \u2014 Chercheurs de Dieu");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "br");
        i0.ɵɵtext(15, " Communaut\u00E9 Missionnaire Chr\u00E9tienne Internationale et \u00C9glises Associ\u00E9es");
        i0.ɵɵelement(16, "br");
        i0.ɵɵtext(17, " 11 rue de l'\u00C9toile, 75017 Paris");
        i0.ɵɵelement(18, "br");
        i0.ɵɵtext(19, " Email : ");
        i0.ɵɵelementStart(20, "a", 5);
        i0.ɵɵtext(21, "contact@cmciea-france.com");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "br");
        i0.ɵɵtext(23, " T\u00E9l\u00E9phone : +33 7 44 89 68 18");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(24, "section", 4)(25, "h2");
        i0.ɵɵtext(26, "2. H\u00E9bergement");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "p");
        i0.ɵɵtext(28, "Le site est h\u00E9berg\u00E9 par :");
        i0.ɵɵelement(29, "br");
        i0.ɵɵelementStart(30, "strong");
        i0.ɵɵtext(31, "Google Firebase Hosting");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(32, " \u2014 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, \u00C9tats-Unis.");
        i0.ɵɵelement(33, "br");
        i0.ɵɵelementStart(34, "a", 6);
        i0.ɵɵtext(35, "firebase.google.com");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(36, "section", 4)(37, "h2");
        i0.ɵɵtext(38, "3. Propri\u00E9t\u00E9 intellectuelle");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "p");
        i0.ɵɵtext(40, "L'ensemble des contenus pr\u00E9sents sur ce site (textes, images, logos, vid\u00E9os, sons) sont la propri\u00E9t\u00E9 exclusive de CMCIEA-France ou de leurs auteurs respectifs et sont prot\u00E9g\u00E9s par les lois fran\u00E7aises et internationales relatives \u00E0 la propri\u00E9t\u00E9 intellectuelle.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "p");
        i0.ɵɵtext(42, "Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation pr\u00E9alable \u00E9crite est strictement interdite.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(43, "section", 4)(44, "h2");
        i0.ɵɵtext(45, "4. Liens hypertextes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "p");
        i0.ɵɵtext(47, "Le site peut contenir des liens vers des sites externes. CMCIEA-France n'est pas responsable du contenu de ces sites et ne peut \u00EAtre tenu responsable des dommages r\u00E9sultant de leur consultation.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(48, "section", 4)(49, "h2");
        i0.ɵɵtext(50, "5. Limitation de responsabilit\u00E9");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "p");
        i0.ɵɵtext(52, "CMCIEA-France s'efforce d'assurer l'exactitude et la mise \u00E0 jour des informations diffus\u00E9es sur ce site. Cependant, elle ne peut garantir l'exactitude, la pr\u00E9cision ou l'exhaustivit\u00E9 des informations mises \u00E0 la disposition sur ce site.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(53, "section", 4)(54, "h2");
        i0.ɵɵtext(55, "6. Droit applicable");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "p");
        i0.ɵɵtext(57, "Les pr\u00E9sentes mentions l\u00E9gales sont soumises au droit fran\u00E7ais. En cas de litige, les tribunaux fran\u00E7ais seront seuls comp\u00E9tents.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(58, "p", 7);
        i0.ɵɵtext(59);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "a", 8);
        i0.ɵɵtext(61, "\u2190 Retour \u00E0 l'accueil");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(59);
        i0.ɵɵtextInterpolate1("Derni\u00E8re mise \u00E0 jour : ", ctx.year, "");
    } }, dependencies: [CommonModule, RouterModule, i1.RouterLink], styles: ["\n\n.legal-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C 0%, #0f3547 100%);\n  color: #fff;\n  padding: 64px 24px 48px;\n  text-align: center;\n}\n.legal-hero-inner[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.legal-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 4vw, 2.4rem);\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.legal-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.85;\n  margin: 0;\n}\n\n\n\n.legal-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 48px 24px 64px;\n}\n\n\n\n.legal-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.legal-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #1D546C;\n  margin-bottom: 10px;\n  padding-bottom: 6px;\n  border-bottom: 2px solid #e8f0f4;\n}\n.legal-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.75;\n  color: #444;\n  margin-bottom: 8px;\n}\n.legal-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 8px 20px;\n  padding: 0;\n}\n.legal-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.7;\n  color: #444;\n  margin-bottom: 4px;\n}\n.legal-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1D546C;\n  text-decoration: underline;\n}\n.legal-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0f3547;\n}\n\n\n\n.legal-date[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #999;\n  margin-top: 48px;\n  margin-bottom: 24px;\n}\n.legal-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #1D546C;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.legal-back[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MentionsLegalesComponent, [{
        type: Component,
        args: [{ selector: 'app-mentions-legales', standalone: true, imports: [CommonModule, RouterModule], template: "<div class=\"legal-page\">\n  <div class=\"legal-hero\">\n    <div class=\"legal-hero-inner\">\n      <h1>Mentions l\u00E9gales</h1>\n      <p>Informations l\u00E9gales relatives au site cmciea-france.com</p>\n    </div>\n  </div>\n\n  <div class=\"legal-content\">\n\n    <section class=\"legal-section\">\n      <h2>1. \u00C9diteur du site</h2>\n      <p><strong>CMCIEA-France \u2014 Chercheurs de Dieu</strong><br>\n      Communaut\u00E9 Missionnaire Chr\u00E9tienne Internationale et \u00C9glises Associ\u00E9es<br>\n      11 rue de l'\u00C9toile, 75017 Paris<br>\n      Email : <a href=\"mailto:contact&#64;cmciea-france.com\">contact&#64;cmciea-france.com</a><br>\n      T\u00E9l\u00E9phone : +33 7 44 89 68 18</p>\n    </section>\n\n    <section class=\"legal-section\">\n      <h2>2. H\u00E9bergement</h2>\n      <p>Le site est h\u00E9berg\u00E9 par :<br>\n      <strong>Google Firebase Hosting</strong> \u2014 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, \u00C9tats-Unis.<br>\n      <a href=\"https://firebase.google.com\" target=\"_blank\" rel=\"noopener\">firebase.google.com</a></p>\n    </section>\n\n    <section class=\"legal-section\">\n      <h2>3. Propri\u00E9t\u00E9 intellectuelle</h2>\n      <p>L'ensemble des contenus pr\u00E9sents sur ce site (textes, images, logos, vid\u00E9os, sons) sont la propri\u00E9t\u00E9 exclusive de CMCIEA-France ou de leurs auteurs respectifs et sont prot\u00E9g\u00E9s par les lois fran\u00E7aises et internationales relatives \u00E0 la propri\u00E9t\u00E9 intellectuelle.</p>\n      <p>Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation pr\u00E9alable \u00E9crite est strictement interdite.</p>\n    </section>\n\n    <section class=\"legal-section\">\n      <h2>4. Liens hypertextes</h2>\n      <p>Le site peut contenir des liens vers des sites externes. CMCIEA-France n'est pas responsable du contenu de ces sites et ne peut \u00EAtre tenu responsable des dommages r\u00E9sultant de leur consultation.</p>\n    </section>\n\n    <section class=\"legal-section\">\n      <h2>5. Limitation de responsabilit\u00E9</h2>\n      <p>CMCIEA-France s'efforce d'assurer l'exactitude et la mise \u00E0 jour des informations diffus\u00E9es sur ce site. Cependant, elle ne peut garantir l'exactitude, la pr\u00E9cision ou l'exhaustivit\u00E9 des informations mises \u00E0 la disposition sur ce site.</p>\n    </section>\n\n    <section class=\"legal-section\">\n      <h2>6. Droit applicable</h2>\n      <p>Les pr\u00E9sentes mentions l\u00E9gales sont soumises au droit fran\u00E7ais. En cas de litige, les tribunaux fran\u00E7ais seront seuls comp\u00E9tents.</p>\n    </section>\n\n    <p class=\"legal-date\">Derni\u00E8re mise \u00E0 jour : {{ year }}</p>\n    <a routerLink=\"/\" class=\"legal-back\">\u2190 Retour \u00E0 l'accueil</a>\n  </div>\n</div>\n", styles: ["/* \u2500\u2500 Hero \u2500\u2500 */\n.legal-hero {\n  background: linear-gradient(135deg, #1D546C 0%, #0f3547 100%);\n  color: #fff;\n  padding: 64px 24px 48px;\n  text-align: center;\n}\n.legal-hero-inner {\n  max-width: 720px;\n  margin: 0 auto;\n}\n.legal-hero h1 {\n  font-size: clamp(1.6rem, 4vw, 2.4rem);\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.legal-hero p {\n  font-size: 1rem;\n  opacity: 0.85;\n  margin: 0;\n}\n\n/* \u2500\u2500 Content \u2500\u2500 */\n.legal-content {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 48px 24px 64px;\n}\n\n/* \u2500\u2500 Sections \u2500\u2500 */\n.legal-section {\n  margin-bottom: 40px;\n}\n.legal-section h2 {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #1D546C;\n  margin-bottom: 10px;\n  padding-bottom: 6px;\n  border-bottom: 2px solid #e8f0f4;\n}\n.legal-section p {\n  font-size: 0.95rem;\n  line-height: 1.75;\n  color: #444;\n  margin-bottom: 8px;\n}\n.legal-section ul {\n  margin: 8px 0 8px 20px;\n  padding: 0;\n}\n.legal-section li {\n  font-size: 0.95rem;\n  line-height: 1.7;\n  color: #444;\n  margin-bottom: 4px;\n}\n.legal-section a {\n  color: #1D546C;\n  text-decoration: underline;\n}\n.legal-section a:hover {\n  color: #0f3547;\n}\n\n/* \u2500\u2500 Footer \u2500\u2500 */\n.legal-date {\n  font-size: 0.82rem;\n  color: #999;\n  margin-top: 48px;\n  margin-bottom: 24px;\n}\n.legal-back {\n  display: inline-block;\n  color: #1D546C;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: opacity 0.2s;\n}\n.legal-back:hover {\n  opacity: 0.7;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MentionsLegalesComponent, { className: "MentionsLegalesComponent", filePath: "app\\pages\\legal\\mentions-legales.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=mentions-legales.component.js.map