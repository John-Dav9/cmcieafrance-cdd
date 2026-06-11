import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function RessourcesDecouvrirComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1, " Chargement du livret... ");
    i0.ɵɵelementEnd();
} }
function RessourcesDecouvrirComponent_div_3_div_5_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 18);
    i0.ɵɵlistener("error", function RessourcesDecouvrirComponent_div_3_div_5_img_1_Template_img_error_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onImgError($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const src_r4 = ctx.$implicit;
    i0.ɵɵproperty("src", src_r4, i0.ɵɵsanitizeUrl);
} }
function RessourcesDecouvrirComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, RessourcesDecouvrirComponent_div_3_div_5_img_1_Template, 1, 1, "img", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pages_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", pages_r5)("ngForTrackBy", ctx_r1.trackBySrc);
} }
function RessourcesDecouvrirComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 11);
    i0.ɵɵlistener("click", function RessourcesDecouvrirComponent_div_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.prev()); });
    i0.ɵɵtext(2, " \u2039 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 12)(4, "div", 13);
    i0.ɵɵlistener("transitionend", function RessourcesDecouvrirComponent_div_3_Template_div_transitionend_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onTransitionEnd()); });
    i0.ɵɵtemplate(5, RessourcesDecouvrirComponent_div_3_div_5_Template, 2, 2, "div", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 15);
    i0.ɵɵlistener("click", function RessourcesDecouvrirComponent_div_3_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵtext(7, " \u203A ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.isAnimating || ctx_r1.currentIndex === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("transform", "translateX(-" + ctx_r1.currentIndex * 100 + "%)");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.slides)("ngForTrackBy", ctx_r1.trackByIndex);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.isAnimating || ctx_r1.currentIndex === ctx_r1.maxIndex);
} }
function RessourcesDecouvrirComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function RessourcesDecouvrirComponent_div_4_button_1_Template_button_click_0_listener() { const i_r7 = i0.ɵɵrestoreView(_r6).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.goTo(i_r7)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r1.currentIndex === i_r7);
    i0.ɵɵproperty("disabled", ctx_r1.isAnimating);
} }
function RessourcesDecouvrirComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, RessourcesDecouvrirComponent_div_4_button_1_Template, 1, 3, "button", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.slides);
} }
export class RessourcesDecouvrirComponent {
    constructor() {
        this.ready = false;
        this.currentIndex = 0;
        this.maxIndex = 0;
        this.isAnimating = false;
        // ✅ stable pour mobile
        this.mediaQuery = window.matchMedia('(max-width: 900px)');
        this.isMobile = this.mediaQuery.matches;
        this.pages = [
            'assets/flipbook/page-01.png',
            'assets/flipbook/page-02.png',
            'assets/flipbook/page-03.png',
            'assets/flipbook/page-04.png',
            'assets/flipbook/page-05.png',
            'assets/flipbook/page-06.png',
        ];
        this.slides = [];
        this.trackByIndex = (i) => i;
        this.trackBySrc = (_, src) => src;
        this.onMediaChange = (e) => {
            const nextIsMobile = e.matches;
            if (nextIsMobile === this.isMobile)
                return;
            this.isMobile = nextIsMobile;
            // ✅ reset index pour éviter le “saut” et les pages manquantes
            this.currentIndex = 0;
            this.isAnimating = false;
            this.clearUnlockTimer();
            this.buildSlides(this.isMobile);
        };
    }
    async ngAfterViewInit() {
        await this.preloadImages(this.pages);
        // build initial
        this.buildSlides(this.isMobile);
        this.ready = true;
        // ✅ on écoute UNIQUEMENT le vrai passage mobile/desktop
        this.mediaQuery.addEventListener('change', this.onMediaChange);
    }
    ngOnDestroy() {
        this.mediaQuery.removeEventListener('change', this.onMediaChange);
        if (this.unlockTimer)
            clearTimeout(this.unlockTimer);
    }
    buildSlides(isMobile) {
        const newSlides = [];
        if (isMobile) {
            // ✅ 1 page = 1 slide
            for (const p of this.pages)
                newSlides.push([p]);
        }
        else {
            // ✅ 2 pages = 1 slide
            for (let i = 0; i < this.pages.length; i += 2) {
                newSlides.push([this.pages[i], this.pages[i + 1]].filter(Boolean));
            }
        }
        this.slides = newSlides;
        this.maxIndex = this.slides.length - 1;
        // clamp (au cas où)
        this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
    }
    preloadImages(urls) {
        return Promise.all(urls.map((url) => new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = url;
        })));
    }
    onImgError(e) {
        const el = e.target;
        el.src = 'assets/flipbook/fallback.png';
    }
    // ===== Navigation =====
    next() { this.moveTo(this.currentIndex + 1); }
    prev() { this.moveTo(this.currentIndex - 1); }
    goTo(i) { this.moveTo(i); }
    moveTo(target) {
        if (this.isAnimating)
            return;
        if (target < 0 || target > this.maxIndex)
            return;
        if (target === this.currentIndex)
            return;
        this.isAnimating = true;
        this.currentIndex = target;
        // fallback si transitionend ne fire pas
        this.clearUnlockTimer();
        this.unlockTimer = setTimeout(() => {
            this.isAnimating = false;
            this.unlockTimer = null;
        }, 600);
    }
    onTransitionEnd() {
        this.isAnimating = false;
        this.clearUnlockTimer();
    }
    clearUnlockTimer() {
        if (this.unlockTimer) {
            clearTimeout(this.unlockTimer);
            this.unlockTimer = null;
        }
    }
}
RessourcesDecouvrirComponent.ɵfac = function RessourcesDecouvrirComponent_Factory(t) { return new (t || RessourcesDecouvrirComponent)(); };
RessourcesDecouvrirComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RessourcesDecouvrirComponent, selectors: [["app-ressources-decouvrir"]], decls: 10, vars: 3, consts: [[1, "ressources-stack"], [1, "livret-block"], ["class", "loading", 4, "ngIf"], ["class", "carousel", 4, "ngIf"], ["class", "dots", 4, "ngIf"], [1, "video-block"], [1, "video-card"], ["src", "assets/images/youtube-thumbnail.png", "alt", "Playlist YouTube"], ["href", "https://www.youtube.com/playlist?list=PLuiootrwkQ8a1aesqwRo1iuJSDkeGq2gn", "target", "_blank", "rel", "noopener noreferrer", 1, "video-cta"], [1, "loading"], [1, "carousel"], ["type", "button", "aria-label", "Page pr\u00E9c\u00E9dente", 1, "nav-btn", "nav-left", 3, "click", "disabled"], [1, "viewport"], [1, "track", 3, "transitionend"], ["class", "slide", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "aria-label", "Page suivante", 1, "nav-btn", "nav-right", 3, "click", "disabled"], [1, "slide"], ["class", "page-img", "alt", "Page", "loading", "eager", "decoding", "async", 3, "src", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["alt", "Page", "loading", "eager", "decoding", "async", 1, "page-img", 3, "error", "src"], [1, "dots"], ["type", "button", "class", "dot", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dot", 3, "click", "disabled"]], template: function RessourcesDecouvrirComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, RessourcesDecouvrirComponent_div_2_Template, 2, 0, "div", 2)(3, RessourcesDecouvrirComponent_div_3_Template, 8, 6, "div", 3)(4, RessourcesDecouvrirComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5)(6, "div", 6);
        i0.ɵɵelement(7, "img", 7);
        i0.ɵɵelementStart(8, "a", 8);
        i0.ɵɵtext(9, " \u25B6 Voir la playlist YouTube ");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.ready);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.ready);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.ready);
    } }, dependencies: [i1.NgForOf, i1.NgIf], styles: ["\n\r\n.ressources-stack[_ngcontent-%COMP%]{\r\n  background:#E7ECEE;\r\n  min-height:100vh;\r\n  padding: 48px 24px 70px;\r\n  display:flex;\r\n  flex-direction:column;\r\n  align-items:center;\r\n  gap: 28px;\r\n}\r\n\r\n\n\r\n.livret-block[_ngcontent-%COMP%]{\r\n  width: min(1100px, 100%);\r\n  display:flex;\r\n  flex-direction:column;\r\n  align-items:center;\r\n  gap: 16px;\r\n}\r\n\r\n\n\r\n.carousel[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  position: relative;\r\n  display:flex;\r\n  align-items:center;\r\n  justify-content:center;\r\n  gap: 8px;\r\n}\r\n\r\n.viewport[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n\n\r\n.track[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  transition: transform .45s ease;\r\n  will-change: transform;\r\n}\r\n\r\n\n\r\n.slide[_ngcontent-%COMP%]{\r\n  flex: 0 0 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  \n\r\n  gap: 6px;\r\n  padding: 0;\r\n}\r\n\r\n\n\r\n.page-img[_ngcontent-%COMP%]{\r\n  width: 280px;              \n\r\n  max-width: 42vw;\r\n  height: auto;\r\n\r\n  max-height: min(72vh, 720px);\r\n  object-fit: contain;\r\n\r\n  background: transparent;  \n\r\n  display: block;\r\n}\r\n\r\n\n\r\n.nav-btn[_ngcontent-%COMP%]{\r\n  border: 1px solid #005461;\r\n  background: #FFFFFF;\r\n  color:#1D546C;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 26px;\r\n  line-height: 1;\r\n  cursor:pointer;\r\n  display:grid;\r\n  place-items:center;\r\n  backdrop-filter: blur(6px);\r\n  transition: transform .15s ease, background .2s ease;\r\n}\r\n\r\n.nav-btn[_ngcontent-%COMP%]:hover{\r\n  background: rgba(0,183,181,.12);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.nav-btn[_ngcontent-%COMP%]:disabled{\r\n  opacity:.45;\r\n  cursor:not-allowed;\r\n  transform:none;\r\n}\r\n\r\n\n\r\n.dots[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  gap: 10px;\r\n  align-items:center;\r\n  justify-content:center;\r\n}\r\n\r\n.dot[_ngcontent-%COMP%]{\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 999px;\r\n  border: none;\r\n  background: rgba(0,84,97,.25);\r\n  cursor:pointer;\r\n}\r\n\r\n.dot.active[_ngcontent-%COMP%]{ background: #00B7B5; }\r\n.dot[_ngcontent-%COMP%]:disabled{ cursor:not-allowed; }\r\n\r\n\n\r\n.video-block[_ngcontent-%COMP%]{\r\n  width: min(1100px, 100%);\r\n}\r\n\r\n.video-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  border-radius: 18px;\r\n  box-shadow: 0 25px 50px rgba(0,0,0,.25);\r\n  display:block;\r\n}\r\n\r\n.video-cta[_ngcontent-%COMP%]{\r\n  display:block;\r\n  margin-top: 14px;\r\n  text-align:center;\r\n  font-weight: 800;\r\n  color:#00B7B5;\r\n  text-decoration:none;\r\n}\r\n\r\n@media (max-width: 900px){\r\n  .slide[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n\r\n  .page-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 92vw;\r\n  }\r\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RessourcesDecouvrirComponent, [{
        type: Component,
        args: [{ selector: 'app-ressources-decouvrir', template: "<section class=\"ressources-stack\">\r\n\r\n  <!-- ===== LIVRET ===== -->\r\n  <div class=\"livret-block\">\r\n\r\n    <!-- Loading -->\r\n    <div class=\"loading\" *ngIf=\"!ready\">\r\n      Chargement du livret...\r\n    </div>\r\n\r\n    <!-- Carousel -->\r\n    <div class=\"carousel\" *ngIf=\"ready\">\r\n\r\n      <button\r\n        class=\"nav-btn nav-left\"\r\n        type=\"button\"\r\n        (click)=\"prev()\"\r\n        [disabled]=\"isAnimating || currentIndex === 0\"\r\n        aria-label=\"Page pr\u00E9c\u00E9dente\">\r\n        \u2039\r\n      </button>\r\n\r\n      <div class=\"viewport\">\r\n        <div\r\n          class=\"track\"\r\n          [style.transform]=\"'translateX(-' + (currentIndex * 100) + '%)'\"\r\n          (transitionend)=\"onTransitionEnd()\">\r\n\r\n          <!-- \u2705 1 slide = 1 tableau de pages (1 ou 2 images selon mobile/desktop) -->\r\n          <div class=\"slide\" *ngFor=\"let pages of slides; trackBy: trackByIndex\">\r\n            <img\r\n              *ngFor=\"let src of pages; trackBy: trackBySrc\"\r\n              class=\"page-img\"\r\n              [src]=\"src\"\r\n              alt=\"Page\"\r\n              loading=\"eager\"\r\n              decoding=\"async\"\r\n              (error)=\"onImgError($event)\"\r\n            />\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <button\r\n        class=\"nav-btn nav-right\"\r\n        type=\"button\"\r\n        (click)=\"next()\"\r\n        [disabled]=\"isAnimating || currentIndex === maxIndex\"\r\n        aria-label=\"Page suivante\">\r\n        \u203A\r\n      </button>\r\n\r\n    </div>\r\n\r\n    <!-- Dots -->\r\n    <div class=\"dots\" *ngIf=\"ready\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"dot\"\r\n        *ngFor=\"let _ of slides; let i = index\"\r\n        [class.active]=\"currentIndex === i\"\r\n        (click)=\"goTo(i)\"\r\n        [disabled]=\"isAnimating\">\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- ===== VIDEO EN DESSOUS ===== -->\r\n  <div class=\"video-block\">\r\n    <div class=\"video-card\">\r\n      <img src=\"assets/images/youtube-thumbnail.png\" alt=\"Playlist YouTube\" />\r\n      <a\r\n        href=\"https://www.youtube.com/playlist?list=PLuiootrwkQ8a1aesqwRo1iuJSDkeGq2gn\"\r\n        target=\"_blank\"\r\n        rel=\"noopener noreferrer\"\r\n        class=\"video-cta\">\r\n        \u25B6 Voir la playlist YouTube\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n", styles: ["/* ===== PAGE ===== */\r\n.ressources-stack{\r\n  background:#E7ECEE;\r\n  min-height:100vh;\r\n  padding: 48px 24px 70px;\r\n  display:flex;\r\n  flex-direction:column;\r\n  align-items:center;\r\n  gap: 28px;\r\n}\r\n\r\n/* ===== LIVRET ===== */\r\n.livret-block{\r\n  width: min(1100px, 100%);\r\n  display:flex;\r\n  flex-direction:column;\r\n  align-items:center;\r\n  gap: 16px;\r\n}\r\n\r\n/* ===== CAROUSEL ===== */\r\n.carousel{\r\n  width: 100%;\r\n  position: relative;\r\n  display:flex;\r\n  align-items:center;\r\n  justify-content:center;\r\n  gap: 8px;\r\n}\r\n\r\n.viewport{\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n/* \u26A0\uFE0F PAS DE WIDTH ICI */\r\n.track{\r\n  display: flex;\r\n  transition: transform .45s ease;\r\n  will-change: transform;\r\n}\r\n\r\n/* ===== SLIDE ===== */\r\n.slide{\r\n  flex: 0 0 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  /* \uD83D\uDD25 rapprochement r\u00E9el */\r\n  gap: 6px;\r\n  padding: 0;\r\n}\r\n\r\n/* ===== IMAGES ===== */\r\n.page-img{\r\n  width: 280px;              /* desktop */\r\n  max-width: 42vw;\r\n  height: auto;\r\n\r\n  max-height: min(72vh, 720px);\r\n  object-fit: contain;\r\n\r\n  background: transparent;  /* PAS de fond blanc */\r\n  display: block;\r\n}\r\n\r\n/* ===== NAVIGATION ===== */\r\n.nav-btn{\r\n  border: 1px solid #005461;\r\n  background: #FFFFFF;\r\n  color:#1D546C;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 26px;\r\n  line-height: 1;\r\n  cursor:pointer;\r\n  display:grid;\r\n  place-items:center;\r\n  backdrop-filter: blur(6px);\r\n  transition: transform .15s ease, background .2s ease;\r\n}\r\n\r\n.nav-btn:hover{\r\n  background: rgba(0,183,181,.12);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.nav-btn:disabled{\r\n  opacity:.45;\r\n  cursor:not-allowed;\r\n  transform:none;\r\n}\r\n\r\n/* ===== DOTS ===== */\r\n.dots{\r\n  display:flex;\r\n  gap: 10px;\r\n  align-items:center;\r\n  justify-content:center;\r\n}\r\n\r\n.dot{\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 999px;\r\n  border: none;\r\n  background: rgba(0,84,97,.25);\r\n  cursor:pointer;\r\n}\r\n\r\n.dot.active{ background: #00B7B5; }\r\n.dot:disabled{ cursor:not-allowed; }\r\n\r\n/* ===== VIDEO ===== */\r\n.video-block{\r\n  width: min(1100px, 100%);\r\n}\r\n\r\n.video-card img{\r\n  width: 100%;\r\n  border-radius: 18px;\r\n  box-shadow: 0 25px 50px rgba(0,0,0,.25);\r\n  display:block;\r\n}\r\n\r\n.video-cta{\r\n  display:block;\r\n  margin-top: 14px;\r\n  text-align:center;\r\n  font-weight: 800;\r\n  color:#00B7B5;\r\n  text-decoration:none;\r\n}\r\n\r\n@media (max-width: 900px){\r\n  .slide{\r\n    flex-direction: column;\r\n  }\r\n\r\n  .page-img{\r\n    width: 100%;\r\n    max-width: 92vw;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RessourcesDecouvrirComponent, { className: "RessourcesDecouvrirComponent", filePath: "app\\pages\\ressources-decouvrir\\ressources-decouvrir.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=ressources-decouvrir.component.js.map