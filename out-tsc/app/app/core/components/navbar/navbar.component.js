import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import * as i0 from "@angular/core";
export class NavbarComponent {
    constructor() {
        this.host = inject((ElementRef));
        this.isMenuOpen = false;
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    closeMenu() {
        this.isMenuOpen = false;
    }
    onDocumentClick(event) {
        if (!this.isMenuOpen) {
            return;
        }
        const target = event.target;
        if (target && this.host.nativeElement.contains(target)) {
            return;
        }
        this.closeMenu();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NavbarComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, i0.ɵɵresolveDocument);
    } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 28, vars: 3, consts: [[1, "navbar"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo-cmciea-france.png", "alt", "CMCIEA France \u2014 Chercheurs de Dieu"], [1, "logo-text"], ["type", "button", "aria-label", "Ouvrir le menu", "aria-controls", "nav-menu", 1, "nav-toggle", 3, "click"], ["id", "nav-menu", 1, "navbar-links"], ["routerLink", "/premiere-visite", "routerLinkActive", "active", "aria-label", "Premiere visite", 3, "click"], ["routerLink", "/ressources/decouvrir", "routerLinkActive", "active", "aria-label", "Ressources", 3, "click"], ["routerLink", "/marathon-biblique", "routerLinkActive", "active", "aria-label", "Programmmes", 3, "click"], ["routerLink", "/ministere-enfants", "routerLinkActive", "active", "aria-label", "Departement", 3, "click"], ["routerLink", "/reunions", "routerLinkActive", "active", "aria-label", "R\u00E9unions en ligne", 1, "reunions-link", 3, "click"], ["routerLink", "/actualites", "routerLinkActive", "active", "aria-label", "Actualites de CMCIEA France", 1, "actualites", 3, "click"], ["routerLink", "/mon-espace", "routerLinkActive", "active", "aria-label", "Mon espace personnel", 1, "mon-espace", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "header", 0)(1, "a", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4, " COMMUNAUT\u00C9 MISSIONNAIRE");
        i0.ɵɵelement(5, "br");
        i0.ɵɵtext(6, " CHR\u00C9TIENNE INTERNATIONALE");
        i0.ɵɵelement(7, "br");
        i0.ɵɵtext(8, " & \u00C9GLISES ASSOCI\u00C9ES FRANCE ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "button", 4);
        i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_9_listener() { return ctx.toggleMenu(); });
        i0.ɵɵelement(10, "span")(11, "span")(12, "span");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "nav", 5)(14, "a", 6);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_14_listener() { return ctx.closeMenu(); });
        i0.ɵɵtext(15, " Premiere visite ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "a", 7);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_16_listener() { return ctx.closeMenu(); });
        i0.ɵɵtext(17, " Ressources ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "a", 8);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_18_listener() { return ctx.closeMenu(); });
        i0.ɵɵtext(19, " Marathon Biblique ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "a", 9);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_20_listener() { return ctx.closeMenu(); });
        i0.ɵɵtext(21, " Departement ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "a", 10);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_22_listener() { return ctx.closeMenu(); });
        i0.ɵɵtext(23, " \uD83D\uDCF9 R\u00C9UNIONS ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "a", 11);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_24_listener() { return ctx.closeMenu(); });
        i0.ɵɵtext(25, " \uD83D\uDD14 ACTUALITES ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "a", 12);
        i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_26_listener() { return ctx.closeMenu(); });
        i0.ɵɵtext(27, " \uD83D\uDC64 Mon Espace ");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵattribute("aria-expanded", ctx.isMenuOpen);
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("open", ctx.isMenuOpen);
    } }, dependencies: [RouterLink, RouterLinkActive], styles: [".navbar[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 100;\r\n  background: #1D546C;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  padding: 0.75rem 1.5rem;\r\n  border-bottom: 1px solid #005461;\r\n}\r\n\r\n\n\r\n.logo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  text-decoration: none;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 52px;\r\n  width: auto;\r\n  display: block;\r\n}\r\n\r\n\n\r\n.logo-text[_ngcontent-%COMP%] {\r\n  font-family: 'Lora', Georgia, serif;\r\n  font-size: 0.60rem;\r\n  font-weight: 600;\r\n  line-height: 1.2;\r\n  color: #FFFFFF;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.3px;\r\n  max-width: 280px;\r\n}\r\n\r\n\n\r\n.navbar-links[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #FFFFFF;\r\n  font-weight: 600;\r\n  padding: 0.55rem 0.9rem;\r\n  border-radius: 999px;\r\n  border: 0;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n.navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: rgba(0, 183, 181, 0.2);\r\n}\r\n\r\n.navbar-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background: rgba(0, 183, 181, 0.3);\r\n  color: #00B7B5;\r\n}\r\n\r\n.navbar-links[_ngcontent-%COMP%]   a.actualites[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: #0C2B4E;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  border-radius: 999px;\r\n  padding: 0.55rem 1rem;\r\n  border: 0;\r\n}\r\n\r\n.navbar-links[_ngcontent-%COMP%]   a.mon-espace[_ngcontent-%COMP%] {\r\n  background: rgba(0,183,181,0.18);\r\n  color: #a5f3fc;\r\n  font-weight: 700;\r\n  border-radius: 999px;\r\n  padding: 0.55rem 1rem;\r\n  border: 1px solid rgba(0,183,181,0.35);\r\n  transition: background 0.15s;\r\n}\r\n\r\n.navbar-links[_ngcontent-%COMP%]   a.mon-espace[_ngcontent-%COMP%]:hover, .navbar-links[_ngcontent-%COMP%]   a.mon-espace.active[_ngcontent-%COMP%] { background: rgba(0,183,181,0.32); }\r\n\r\n.nav-toggle[_ngcontent-%COMP%] {\r\n  display: none;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255, 255, 255, 0.4);\r\n  background: rgba(12, 43, 78, 0.6);\r\n  cursor: pointer;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n  padding: 0;\r\n  flex-direction: column;\r\n}\r\n\r\n.nav-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 20px;\r\n  height: 2px;\r\n  background: #ffffff;\r\n  border-radius: 999px;\r\n}\r\n\r\n\n\r\n.navbar-links[_ngcontent-%COMP%]   a.actualites[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 6px;\r\n  right: 8px;\r\n  width: 8px;\r\n  height: 8px;\r\n  background: #00B7B5;\r\n  border-radius: 50%;\r\n  animation: _ngcontent-%COMP%_pulse 1.6s infinite;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_pulse {\r\n  0% { transform: scale(1); opacity: 1; }\r\n  70% { transform: scale(1.6); opacity: 0; }\r\n  100% { opacity: 0; }\r\n}\r\n\r\n\r\n\n\r\n@media (max-width: 768px) {\r\n  .navbar[_ngcontent-%COMP%] {\r\n    padding: 0.7rem 1rem;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 46px;\r\n  }\r\n\r\n  .logo-text[_ngcontent-%COMP%] {\r\n    font-size: 0.55rem;\r\n    max-width: 190px;\r\n  }\r\n\r\n  .nav-toggle[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n  }\r\n\r\n  .navbar-links[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: calc(100% + 0.6rem);\r\n    right: 1rem;\r\n    display: none;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    gap: 0.4rem;\r\n    padding: 0.8rem;\r\n    border-radius: 14px;\r\n    background: #1D546C;\r\n    border: 1px solid #005461;\r\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\r\n    min-width: 220px;\r\n  }\r\n\r\n  .navbar-links.open[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n\r\n  .navbar-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 0.55rem 0.85rem;\r\n  }\r\n}\r\n\r\n\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  z-index: 9999;         \n\r\n  position: sticky;\r\n  pointer-events: auto;\r\n}\r\n\r\n\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  pointer-events: auto;\r\n  position: relative;\r\n  z-index: 10000;\r\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', standalone: true, imports: [RouterLink, RouterLinkActive], template: "<header class=\"navbar\">\r\n  <a routerLink=\"/\" class=\"logo\">\r\n    <img\r\n      src=\"assets/images/logo-cmciea-france.png\"\r\n      alt=\"CMCIEA France \u2014 Chercheurs de Dieu\"\r\n    />\r\n    <span class=\"logo-text\">\r\n      COMMUNAUT\u00C9 MISSIONNAIRE<br />\r\n      CHR\u00C9TIENNE INTERNATIONALE<br />\r\n      & \u00C9GLISES ASSOCI\u00C9ES FRANCE\r\n    </span>\r\n  </a>\r\n  <button\r\n    class=\"nav-toggle\"\r\n    type=\"button\"\r\n    aria-label=\"Ouvrir le menu\"\r\n    [attr.aria-expanded]=\"isMenuOpen\"\r\n    aria-controls=\"nav-menu\"\r\n    (click)=\"toggleMenu()\"\r\n  >\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </button>\r\n\r\n  <nav id=\"nav-menu\" class=\"navbar-links\" [class.open]=\"isMenuOpen\">\r\n    <a\r\n      routerLink=\"/premiere-visite\"\r\n      routerLinkActive=\"active\"\r\n      aria-label=\"Premiere visite\"\r\n      (click)=\"closeMenu()\"\r\n    >\r\n      Premiere visite\r\n    </a>\r\n    <a\r\n      routerLink=\"/ressources/decouvrir\"\r\n      routerLinkActive=\"active\"\r\n      aria-label=\"Ressources\"\r\n      (click)=\"closeMenu()\"\r\n    >\r\n      Ressources\r\n    </a>\r\n    <a\r\n      routerLink=\"/marathon-biblique\"\r\n      routerLinkActive=\"active\"\r\n      aria-label=\"Programmmes\"\r\n      (click)=\"closeMenu()\"\r\n    >\r\n      Marathon Biblique\r\n    </a>\r\n    <a\r\n      routerLink=\"/ministere-enfants\"\r\n      routerLinkActive=\"active\"\r\n      aria-label=\"Departement\"\r\n      (click)=\"closeMenu()\"\r\n    >\r\n      Departement\r\n    </a>\r\n    <a\r\n      routerLink=\"/reunions\"\r\n      routerLinkActive=\"active\"\r\n      class=\"reunions-link\"\r\n      aria-label=\"R\u00E9unions en ligne\"\r\n      (click)=\"closeMenu()\"\r\n    >\r\n      \uD83D\uDCF9 R\u00C9UNIONS\r\n    </a>\r\n    <!-- ? BOUTON ACTUALITES -->\r\n    <a\r\n      routerLink=\"/actualites\"\r\n      routerLinkActive=\"active\"\r\n      class=\"actualites\"\r\n      aria-label=\"Actualites de CMCIEA France\"\r\n      (click)=\"closeMenu()\"\r\n    >\r\n      \uD83D\uDD14 ACTUALITES\r\n    </a>\r\n    <a\r\n      routerLink=\"/mon-espace\"\r\n      routerLinkActive=\"active\"\r\n      class=\"mon-espace\"\r\n      aria-label=\"Mon espace personnel\"\r\n      (click)=\"closeMenu()\"\r\n    >\r\n      \uD83D\uDC64 Mon Espace\r\n    </a>\r\n  </nav>\r\n</header>\r\n\r\n\r\n", styles: [".navbar {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 100;\r\n  background: #1D546C;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  padding: 0.75rem 1.5rem;\r\n  border-bottom: 1px solid #005461;\r\n}\r\n\r\n/* Logo + texte */\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  text-decoration: none;\r\n}\r\n\r\n.logo img {\r\n  height: 52px;\r\n  width: auto;\r\n  display: block;\r\n}\r\n\r\n/* Texte du logo */\r\n.logo-text {\r\n  font-family: 'Lora', Georgia, serif;\r\n  font-size: 0.60rem;\r\n  font-weight: 600;\r\n  line-height: 1.2;\r\n  color: #FFFFFF;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.3px;\r\n  max-width: 280px;\r\n}\r\n\r\n/* Liens menu */\r\n.navbar-links {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.navbar-links a {\r\n  text-decoration: none;\r\n  color: #FFFFFF;\r\n  font-weight: 600;\r\n  padding: 0.55rem 0.9rem;\r\n  border-radius: 999px;\r\n  border: 0;\r\n  transition: background 0.2s ease;\r\n}\r\n\r\n.navbar-links a:hover {\r\n  background: rgba(0, 183, 181, 0.2);\r\n}\r\n\r\n.navbar-links a.active {\r\n  background: rgba(0, 183, 181, 0.3);\r\n  color: #00B7B5;\r\n}\r\n\r\n.navbar-links a.actualites {\r\n  position: relative;\r\n  background: #0C2B4E;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  border-radius: 999px;\r\n  padding: 0.55rem 1rem;\r\n  border: 0;\r\n}\r\n\r\n.navbar-links a.mon-espace {\r\n  background: rgba(0,183,181,0.18);\r\n  color: #a5f3fc;\r\n  font-weight: 700;\r\n  border-radius: 999px;\r\n  padding: 0.55rem 1rem;\r\n  border: 1px solid rgba(0,183,181,0.35);\r\n  transition: background 0.15s;\r\n}\r\n\r\n.navbar-links a.mon-espace:hover,\r\n.navbar-links a.mon-espace.active { background: rgba(0,183,181,0.32); }\r\n\r\n.nav-toggle {\r\n  display: none;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 12px;\r\n  border: 1px solid rgba(255, 255, 255, 0.4);\r\n  background: rgba(12, 43, 78, 0.6);\r\n  cursor: pointer;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n  padding: 0;\r\n  flex-direction: column;\r\n}\r\n\r\n.nav-toggle span {\r\n  display: block;\r\n  width: 20px;\r\n  height: 2px;\r\n  background: #ffffff;\r\n  border-radius: 999px;\r\n}\r\n\r\n/* Petit point anim\u00E9 */\r\n.navbar-links a.actualites::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 6px;\r\n  right: 8px;\r\n  width: 8px;\r\n  height: 8px;\r\n  background: #00B7B5;\r\n  border-radius: 50%;\r\n  animation: pulse 1.6s infinite;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% { transform: scale(1); opacity: 1; }\r\n  70% { transform: scale(1.6); opacity: 0; }\r\n  100% { opacity: 0; }\r\n}\r\n\r\n\r\n/* Mobile */\r\n@media (max-width: 768px) {\r\n  .navbar {\r\n    padding: 0.7rem 1rem;\r\n  }\r\n\r\n  .logo img {\r\n    height: 46px;\r\n  }\r\n\r\n  .logo-text {\r\n    font-size: 0.55rem;\r\n    max-width: 190px;\r\n  }\r\n\r\n  .nav-toggle {\r\n    display: inline-flex;\r\n  }\r\n\r\n  .navbar-links {\r\n    position: absolute;\r\n    top: calc(100% + 0.6rem);\r\n    right: 1rem;\r\n    display: none;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    gap: 0.4rem;\r\n    padding: 0.8rem;\r\n    border-radius: 14px;\r\n    background: #1D546C;\r\n    border: 1px solid #005461;\r\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\r\n    min-width: 220px;\r\n  }\r\n\r\n  .navbar-links.open {\r\n    display: flex;\r\n  }\r\n\r\n  .navbar-links a {\r\n    padding: 0.55rem 0.85rem;\r\n  }\r\n}\r\n\r\n/* \u2705 Garantit que la navbar re\u00E7oit les clics */\r\n.navbar {\r\n  z-index: 9999;         /* au-dessus de tout */\r\n  position: sticky;\r\n  pointer-events: auto;\r\n}\r\n\r\n/* \u2705 Garantit que les liens sont cliquables */\r\n.navbar a,\r\n.navbar button {\r\n  pointer-events: auto;\r\n  position: relative;\r\n  z-index: 10000;\r\n}\r\n\r\n"] }]
    }], null, { onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "app\\core\\components\\navbar\\navbar.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=navbar.component.js.map