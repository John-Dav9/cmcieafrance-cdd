import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CulteModalComponent } from './shared/culte-modal/culte-modal.component';
import { ChatWidgetComponent } from './shared/chat-widget/chat-widget.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FloatingWindowComponent } from './pages/reunions/floating-window/floating-window.component';
import * as i0 from "@angular/core";
import * as i1 from "./core/services/meeting.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function AppComponent_app_navbar_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-navbar");
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
} }
function AppComponent_app_floating_window_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-floating-window", 7);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵlistener("expand", function AppComponent_app_floating_window_14_Template_app_floating_window_expand_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFloatExpand()); })("leave", function AppComponent_app_floating_window_14_Template_app_floating_window_leave_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFloatLeave()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 3, ctx_r1.meetingTitle$) || "")("quality", i0.ɵɵpipeBind1(2, 5, ctx_r1.meetingQuality$) || "high")("jitsiApi", ctx_r1.meetingService.jitsiApi);
} }
function AppComponent_footer_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "footer", 8)(1, "div", 9)(2, "div", 10)(3, "p", 11);
    i0.ɵɵtext(4, "CMCIEA-FRANCE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 12);
    i0.ɵɵtext(6, " Une communaute d'adoration, de disciples et de service. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 12);
    i0.ɵɵtext(8, " 11 rue de l'etoile, 75017 Paris ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 12)(10, "a", 13);
    i0.ɵɵtext(11, "contact@cmciea-france.com");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 14)(13, "p", 11);
    i0.ɵɵtext(14, "Liens utiles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 15);
    i0.ɵɵtext(16, "Accueil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "a", 16);
    i0.ɵɵtext(18, "Premiere visite");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "a", 17);
    i0.ɵɵtext(20, "Marathon Biblique");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 18);
    i0.ɵɵtext(22, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "a", 19);
    i0.ɵɵtext(24, "D\u00E9partements");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "a", 20);
    i0.ɵɵtext(26, "Actualit\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "a", 21);
    i0.ɵɵtext(28, "Bible en ligne");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "a", 22);
    i0.ɵɵtext(30, "En direct");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "a", 23);
    i0.ɵɵtext(32, "Groupes de cellule");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div", 14)(34, "p", 11);
    i0.ɵɵtext(35, "Contact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "a", 24);
    i0.ɵɵtext(37, "+33 7 44 89 68 18");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "a", 13);
    i0.ɵɵtext(39, "Nous contacter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "a", 25);
    i0.ɵɵtext(41, "Ouvrir sur Google Maps");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "div", 26)(43, "p");
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div", 27)(46, "a", 28);
    i0.ɵɵtext(47, "Mentions l\u00E9gales");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "span");
    i0.ɵɵtext(49, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "a", 29);
    i0.ɵɵtext(51, "Politique de confidentialit\u00E9");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(44);
    i0.ɵɵtextInterpolate1("(c) ", ctx_r1.currentYear, " CMCIEA-FRANCE Chercheurs de Dieu. Tous droits r\u00E9serv\u00E9s.");
} }
export class AppComponent {
    constructor(meetingService, router) {
        this.meetingService = meetingService;
        this.router = router;
        this.currentYear = new Date().getFullYear();
        this.meetingActive$ = this.meetingService.isActive$;
        this.meetingFloating$ = this.meetingService.isFloating$;
        this.meetingTitle$ = this.meetingService.title$;
        this.meetingQuality$ = this.meetingService.quality$;
    }
    ngOnInit() { }
    onFloatExpand() {
        const data = this.meetingService.currentMeetingData;
        if (!data)
            return;
        this.meetingService.setFloating(false);
        this.router.navigate(['/reunions', data.meeting.id, 'salle'], { state: { jitsiData: data } });
    }
    onFloatLeave() {
        this.meetingService.hangup();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.MeetingService), i0.ɵɵdirectiveInject(i2.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 19, vars: 28, consts: [[4, "ngIf"], [1, "main-layout"], ["id", "jitsi-persistent-container"], ["class", "jitsi-logo-mask", 4, "ngIf"], [3, "title", "quality", "jitsiApi", "expand", "leave", 4, "ngIf"], ["class", "footer", 4, "ngIf"], [1, "jitsi-logo-mask"], [3, "expand", "leave", "title", "quality", "jitsiApi"], [1, "footer"], [1, "footer-inner"], [1, "footer-brand"], [1, "footer-title"], [1, "footer-text"], ["href", "mailto:contact@cmciea-france.com"], [1, "footer-links"], ["routerLink", "/"], ["routerLink", "/premiere-visite"], ["routerLink", "/marathon-biblique"], ["routerLink", "/ressources/decouvrir"], ["routerLink", "/departements"], ["routerLink", "/actualites"], ["routerLink", "/bible"], ["routerLink", "/en-direct"], ["routerLink", "/groupes-de-cellule"], ["href", "tel:+33744896818"], ["href", "https://www.google.com/maps?q=11+rue+de+l'%C3%A9toile+75017+paris", "target", "_blank", "rel", "noopener"], [1, "footer-bottom"], [1, "footer-legal"], ["routerLink", "/mentions-legales"], ["routerLink", "/politique-confidentialite"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AppComponent_app_navbar_0_Template, 1, 0, "app-navbar", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementStart(3, "main", 1);
        i0.ɵɵelement(4, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "app-culte-modal")(6, "app-chat-widget")(7, "div", 2);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵpipe(9, "async");
        i0.ɵɵpipe(10, "async");
        i0.ɵɵtemplate(11, AppComponent_div_11_Template, 1, 0, "div", 3);
        i0.ɵɵpipe(12, "async");
        i0.ɵɵpipe(13, "async");
        i0.ɵɵtemplate(14, AppComponent_app_floating_window_14_Template, 3, 7, "app-floating-window", 4);
        i0.ɵɵpipe(15, "async");
        i0.ɵɵtemplate(16, AppComponent_footer_16_Template, 52, 1, "footer", 5);
        i0.ɵɵpipe(17, "async");
        i0.ɵɵpipe(18, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(1, 8, ctx.meetingActive$) || i0.ɵɵpipeBind1(2, 10, ctx.meetingFloating$));
        i0.ɵɵadvance(7);
        i0.ɵɵclassProp("jitsi-active", i0.ɵɵpipeBind1(8, 12, ctx.meetingActive$) && !i0.ɵɵpipeBind1(9, 14, ctx.meetingFloating$))("jitsi-pip-active", i0.ɵɵpipeBind1(10, 16, ctx.meetingFloating$));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(12, 18, ctx.meetingActive$) && !i0.ɵɵpipeBind1(13, 20, ctx.meetingFloating$));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(15, 22, ctx.meetingFloating$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(17, 24, ctx.meetingActive$) || i0.ɵɵpipeBind1(18, 26, ctx.meetingFloating$));
    } }, dependencies: [CommonModule, i3.NgIf, i3.AsyncPipe, RouterOutlet,
        RouterLink,
        CulteModalComponent,
        ChatWidgetComponent,
        NavbarComponent,
        FloatingWindowComponent], styles: ["\n\r\n[_nghost-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n\n\r\n.main-layout[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\n\r\n.footer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 2.5rem 0 1.2rem;\r\n  background: #1D546C;\r\n  color: #FFFFFF;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #00B7B5;\r\n  text-decoration: none;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #018790;\r\n}\r\n\r\n.footer-inner[_ngcontent-%COMP%] {\r\n  width: min(1100px, calc(100% - 2.2rem));\r\n  margin: 0 auto;\r\n  display: grid;\r\n  grid-template-columns: 1.4fr 1fr 1fr;\r\n  gap: 2rem;\r\n}\r\n\r\n.footer-title[_ngcontent-%COMP%] {\r\n  margin: 0 0 0.65rem;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.footer-text[_ngcontent-%COMP%] {\r\n  margin: 0 0 0.6rem;\r\n  color: #E2E8F0;\r\n  line-height: 1.6;\r\n}\r\n\r\n.footer-links[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 0.6rem;\r\n  align-content: start;\r\n}\r\n\r\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  line-height: 1.5;\r\n}\r\n\r\n.footer-bottom[_ngcontent-%COMP%] {\r\n  width: min(1100px, calc(100% - 2.2rem));\r\n  margin: 2rem auto 0;\r\n  padding-top: 1rem;\r\n  border-top: 1px solid rgba(0, 183, 181, 0.25);\r\n  text-align: center;\r\n  color: #E2E8F0;\r\n  font-size: 0.85rem;\r\n}\r\n\r\n.footer-legal[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.footer-legal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgba(226, 232, 240, 0.7);\r\n  text-decoration: none;\r\n  transition: color 0.2s;\r\n}\r\n\r\n.footer-legal[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #E2E8F0;\r\n}\r\n\r\n.footer-legal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: rgba(226, 232, 240, 0.4);\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .footer-inner[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\n\r\n\r\n.jitsi-logo-mask[_ngcontent-%COMP%] {\n  position: fixed;\r\n  top: 72px;\n  left: 0;\r\n  width: 150px;\n  height: 48px;\n  background: linear-gradient(135deg, rgba(17,19,24,.98), rgba(17,19,24,.86));\n  z-index: 9999;\n  pointer-events: none;\n}\n\n.jitsi-logo-mask[_ngcontent-%COMP%]::after {\n  content: \"CMCIEA FRANCE\";\n  position: absolute;\n  top: 10px;\n  left: 14px;\n  padding: 7px 10px;\n  border: 1px solid rgba(232, 168, 56, 0.28);\n  border-radius: 9px;\n  color: #efc36d;\n  background: rgba(17, 19, 24, 0.72);\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  white-space: nowrap;\n}\n\r\n\n\r\n@media (max-width: 768px) {\n  .jitsi-logo-mask[_ngcontent-%COMP%] {\n    top: 64px;\n    width: 112px;\n    height: 44px;\n  }\n\n  .jitsi-logo-mask[_ngcontent-%COMP%]::after {\n    top: 8px;\n    left: 9px;\n    padding: 6px 8px;\n    font-size: 8px;\n  }\n}\n\r\n\r\n\r\n\r\n\n\r\n\r\n#jitsi-persistent-container[_ngcontent-%COMP%] {\r\n  display: none;\r\n\r\n  \n\r\n  &.jitsi-active {\n    display: block;\r\n    position: fixed;\r\n    top: 72px;\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 9998;\r\n    background: #0d1b2a;\r\n\r\n    iframe {\r\n      width: 100% !important;\r\n      height: 100% !important;\r\n      border: none !important;\r\n      display: block;\r\n    }\r\n\r\n  }\n\r\n  \n\r\n  &.jitsi-pip-active {\n    display: block;\n    position: fixed;\n    bottom: 116px;\n    right: 20px;\n    width: 320px;\n    height: 180px;\n    z-index: 9997;\n    border-radius: 14px 14px 0 0;\n    overflow: hidden;\n    box-sizing: border-box;\n    box-shadow: 0 12px 38px rgba(0, 0, 0, 0.48);\n    border: 1px solid rgba(255, 255, 255, 0.12);\n    border-bottom: 0;\n\r\n    iframe {\r\n      width: 100% !important;\r\n      height: 100% !important;\r\n      border: none !important;\r\n      display: block;\r\n    }\r\n\r\n    @media (max-width: 480px) {\n      width: min(300px, calc(100vw - 20px));\n      height: min(169px, calc((100vw - 20px) * 0.5625));\n      bottom: 106px;\n      right: 10px;\n    }\n  }\n}\n\n@media (max-width: 900px) {\n  #jitsi-persistent-container.jitsi-active[_ngcontent-%COMP%] {\n    top: 64px;\n    bottom: 76px;\n  }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [
                    CommonModule,
                    RouterOutlet,
                    RouterLink,
                    CulteModalComponent,
                    ChatWidgetComponent,
                    NavbarComponent,
                    FloatingWindowComponent,
                ], template: "<!-- Navbar \u2014 cach\u00E9e pendant une r\u00E9union en plein \u00E9cran -->\r\n<app-navbar *ngIf=\"!(meetingActive$ | async) || (meetingFloating$ | async)\"></app-navbar>\r\n\r\n<main class=\"main-layout\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<app-culte-modal></app-culte-modal>\r\n<app-chat-widget></app-chat-widget>\r\n\r\n<!-- \u2550\u2550 CONTAINER JITSI PERSISTANT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n<!-- Ne JAMAIS supprimer ce div \u2014 l'iframe Jitsi y vit       -->\r\n<div id=\"jitsi-persistent-container\"\r\n     [class.jitsi-active]=\"(meetingActive$ | async) && !(meetingFloating$ | async)\"\r\n     [class.jitsi-pip-active]=\"meetingFloating$ | async\">\r\n</div>\r\n\r\n<!-- \u2550\u2550 MASQUE LOGO JITSI \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n<div class=\"jitsi-logo-mask\"\r\n     *ngIf=\"(meetingActive$ | async) && !(meetingFloating$ | async)\">\r\n</div>\r\n\r\n<!-- \u2550\u2550 FEN\u00CATRE FLOTTANTE (mode pip) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r\n<app-floating-window\r\n  *ngIf=\"(meetingFloating$ | async)\"\r\n  [title]=\"(meetingTitle$ | async) || ''\"\r\n  [quality]=\"$any(meetingQuality$ | async) || 'high'\"\r\n  [jitsiApi]=\"meetingService.jitsiApi\"\r\n  (expand)=\"onFloatExpand()\"\r\n  (leave)=\"onFloatLeave()\">\r\n</app-floating-window>\r\n\r\n<footer class=\"footer\" *ngIf=\"!(meetingActive$ | async) || (meetingFloating$ | async)\">\r\n  <div class=\"footer-inner\">\r\n    <div class=\"footer-brand\">\r\n      <p class=\"footer-title\">CMCIEA-FRANCE</p>\r\n      <p class=\"footer-text\">\r\n        Une communaute d'adoration, de disciples et de service.\r\n      </p>\r\n      <p class=\"footer-text\">\r\n        11 rue de l'etoile, 75017 Paris\r\n      </p>\r\n      <p class=\"footer-text\">\r\n        <a href=\"mailto:contact&#64;cmciea-france.com\">contact&#64;cmciea-france.com</a>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"footer-links\">\r\n      <p class=\"footer-title\">Liens utiles</p>\r\n      <a routerLink=\"/\">Accueil</a>\r\n      <a routerLink=\"/premiere-visite\">Premiere visite</a>\r\n      <a routerLink=\"/marathon-biblique\">Marathon Biblique</a>\r\n      <a routerLink=\"/ressources/decouvrir\">Ressources</a>\r\n      <a routerLink=\"/departements\">D\u00E9partements</a>\r\n      <a routerLink=\"/actualites\">Actualit\u00E9s</a>\r\n      <a routerLink=\"/bible\">Bible en ligne</a>\r\n      <a routerLink=\"/en-direct\">En direct</a>\r\n      <a routerLink=\"/groupes-de-cellule\">Groupes de cellule</a>\r\n    </div>\r\n\r\n    <div class=\"footer-links\">\r\n      <p class=\"footer-title\">Contact</p>\r\n      <a href=\"tel:+33744896818\">+33 7 44 89 68 18</a>\r\n      <a href=\"mailto:contact&#64;cmciea-france.com\">Nous contacter</a>\r\n      <a href=\"https://www.google.com/maps?q=11+rue+de+l'%C3%A9toile+75017+paris\" target=\"_blank\" rel=\"noopener\">Ouvrir sur Google Maps</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"footer-bottom\">\r\n    <p>(c) {{ currentYear }} CMCIEA-FRANCE Chercheurs de Dieu. Tous droits r\u00E9serv\u00E9s.</p>\r\n    <div class=\"footer-legal\">\r\n      <a routerLink=\"/mentions-legales\">Mentions l\u00E9gales</a>\r\n      <span>\u00B7</span>\r\n      <a routerLink=\"/politique-confidentialite\">Politique de confidentialit\u00E9</a>\r\n    </div>\r\n  </div>\r\n</footer>\r\n", styles: ["/* styles sp\u00E9cifiques \u00E0 l'app si besoin */\r\n:host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* zone centrale qui contient les pages */\r\n.main-layout {\r\n  flex: 1;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* footer sur toute la largeur */\r\n.footer {\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 2.5rem 0 1.2rem;\r\n  background: #1D546C;\r\n  color: #FFFFFF;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.footer a {\r\n  color: #00B7B5;\r\n  text-decoration: none;\r\n}\r\n\r\n.footer a:hover {\r\n  color: #018790;\r\n}\r\n\r\n.footer-inner {\r\n  width: min(1100px, calc(100% - 2.2rem));\r\n  margin: 0 auto;\r\n  display: grid;\r\n  grid-template-columns: 1.4fr 1fr 1fr;\r\n  gap: 2rem;\r\n}\r\n\r\n.footer-title {\r\n  margin: 0 0 0.65rem;\r\n  font-size: 1rem;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.footer-text {\r\n  margin: 0 0 0.6rem;\r\n  color: #E2E8F0;\r\n  line-height: 1.6;\r\n}\r\n\r\n.footer-links {\r\n  display: grid;\r\n  gap: 0.6rem;\r\n  align-content: start;\r\n}\r\n\r\n.footer-links a {\r\n  display: block;\r\n  line-height: 1.5;\r\n}\r\n\r\n.footer-bottom {\r\n  width: min(1100px, calc(100% - 2.2rem));\r\n  margin: 2rem auto 0;\r\n  padding-top: 1rem;\r\n  border-top: 1px solid rgba(0, 183, 181, 0.25);\r\n  text-align: center;\r\n  color: #E2E8F0;\r\n  font-size: 0.85rem;\r\n}\r\n\r\n.footer-legal {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.footer-legal a {\r\n  color: rgba(226, 232, 240, 0.7);\r\n  text-decoration: none;\r\n  transition: color 0.2s;\r\n}\r\n\r\n.footer-legal a:hover {\r\n  color: #E2E8F0;\r\n}\r\n\r\n.footer-legal span {\r\n  color: rgba(226, 232, 240, 0.4);\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .footer-inner {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   MASQUE LOGO JITSI\r\n   Div d\u00E9di\u00E9 positionn\u00E9 au-dessus de l'iframe pour cacher le logo\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n\r\n.jitsi-logo-mask {\n  position: fixed;\r\n  top: 72px;\n  left: 0;\r\n  width: 150px;\n  height: 48px;\n  background: linear-gradient(135deg, rgba(17,19,24,.98), rgba(17,19,24,.86));\n  z-index: 9999;\n  pointer-events: none;\n}\n\n.jitsi-logo-mask::after {\n  content: \"CMCIEA FRANCE\";\n  position: absolute;\n  top: 10px;\n  left: 14px;\n  padding: 7px 10px;\n  border: 1px solid rgba(232, 168, 56, 0.28);\n  border-radius: 9px;\n  color: #efc36d;\n  background: rgba(17, 19, 24, 0.72);\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  white-space: nowrap;\n}\n\r\n/* Sur mobile le logo Jitsi est souvent plus grand et centr\u00E9 */\r\n@media (max-width: 768px) {\n  .jitsi-logo-mask {\n    top: 64px;\n    width: 112px;\n    height: 44px;\n  }\n\n  .jitsi-logo-mask::after {\n    top: 8px;\n    left: 9px;\n    padding: 6px 8px;\n    font-size: 8px;\n  }\n}\n\r\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r\n   CONTAINER JITSI PERSISTANT\r\n   Ne jamais supprimer ce bloc \u2014 l'iframe de r\u00E9union y vit\r\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\r\n\r\n#jitsi-persistent-container {\r\n  display: none;\r\n\r\n  /* Plein \u00E9cran pendant la r\u00E9union */\r\n  &.jitsi-active {\n    display: block;\r\n    position: fixed;\r\n    top: 72px;\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 9998;\r\n    background: #0d1b2a;\r\n\r\n    iframe {\r\n      width: 100% !important;\r\n      height: 100% !important;\r\n      border: none !important;\r\n      display: block;\r\n    }\r\n\r\n  }\n\r\n  /* Mini-lecteur flottant (mode r\u00E9duit) */\r\n  &.jitsi-pip-active {\n    display: block;\n    position: fixed;\n    bottom: 116px;\n    right: 20px;\n    width: 320px;\n    height: 180px;\n    z-index: 9997;\n    border-radius: 14px 14px 0 0;\n    overflow: hidden;\n    box-sizing: border-box;\n    box-shadow: 0 12px 38px rgba(0, 0, 0, 0.48);\n    border: 1px solid rgba(255, 255, 255, 0.12);\n    border-bottom: 0;\n\r\n    iframe {\r\n      width: 100% !important;\r\n      height: 100% !important;\r\n      border: none !important;\r\n      display: block;\r\n    }\r\n\r\n    @media (max-width: 480px) {\n      width: min(300px, calc(100vw - 20px));\n      height: min(169px, calc((100vw - 20px) * 0.5625));\n      bottom: 106px;\n      right: 10px;\n    }\n  }\n}\n\n@media (max-width: 900px) {\n  #jitsi-persistent-container.jitsi-active {\n    top: 64px;\n    bottom: 76px;\n  }\n}\n"] }]
    }], () => [{ type: i1.MeetingService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=app.component.js.map