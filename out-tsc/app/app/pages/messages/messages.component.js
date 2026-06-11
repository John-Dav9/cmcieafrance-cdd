import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/messages.service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
function MessagesComponent_section_0_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function MessagesComponent_section_0_button_17_Template_button_click_0_listener() { const i_r4 = i0.ɵɵrestoreView(_r3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.currentIndex = i_r4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", i_r4 === ctx_r1.currentIndex);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", msg_r5.title, " ");
} }
function MessagesComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2)(1, "h1");
    i0.ɵɵtext(2, "Messages");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3)(4, "button", 4);
    i0.ɵɵlistener("click", function MessagesComponent_section_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.prev()); });
    i0.ɵɵtext(5, "\u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 5)(7, "h2");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 6);
    i0.ɵɵelement(13, "iframe", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "button", 4);
    i0.ɵɵlistener("click", function MessagesComponent_section_0_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵtext(15, "\u203A");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 8);
    i0.ɵɵtemplate(17, MessagesComponent_section_0_button_17_Template, 2, 3, "button", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.messages[ctx_r1.currentIndex].title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.messages[ctx_r1.currentIndex].speaker, " \u2013 ", i0.ɵɵpipeBind2(11, 5, ctx_r1.messages[ctx_r1.currentIndex].date, "longDate"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r1.messages[ctx_r1.currentIndex].safeUrl, i0.ɵɵsanitizeResourceUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function MessagesComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Aucun message pour le moment.");
    i0.ɵɵelementEnd();
} }
export class MessagesComponent {
    constructor(messagesService, sanitizer) {
        this.messagesService = messagesService;
        this.sanitizer = sanitizer;
        this.messages = [];
        this.currentIndex = 0;
        this.videoIdPattern = /^[A-Za-z0-9_-]{11}$/;
    }
    ngOnInit() {
        this.messagesService.getMessages().subscribe((msgs) => {
            this.messages = msgs
                .map((m) => {
                const safeUrl = this.buildSafeUrl(m.videoId);
                return safeUrl ? Object.assign(Object.assign({}, m), { safeUrl }) : null;
            })
                .filter((m) => m !== null);
        });
    }
    prev() {
        if (!this.messages.length)
            return;
        this.currentIndex =
            (this.currentIndex - 1 + this.messages.length) % this.messages.length;
    }
    next() {
        if (!this.messages.length)
            return;
        this.currentIndex = (this.currentIndex + 1) % this.messages.length;
    }
    buildSafeUrl(videoId) {
        const normalized = (videoId || '').trim();
        if (!/^[a-zA-Z0-9_-]{11}$/.test(normalized)) {
            return null;
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${normalized}`);
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(i0.ɵɵdirectiveInject(i1.MessagesService), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessagesComponent, selectors: [["app-messages"]], decls: 2, vars: 2, consts: [["class", "messages", 4, "ngIf"], [4, "ngIf"], [1, "messages"], [1, "carousel"], [3, "click"], [1, "slide"], [1, "video-wrapper"], ["frameborder", "0", "allowfullscreen", "", 3, "src"], [1, "thumbnails"], [3, "active", "click", 4, "ngFor", "ngForOf"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MessagesComponent_section_0_Template, 18, 8, "section", 0)(1, MessagesComponent_p_1_Template, 2, 0, "p", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.messages.length);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.messages.length);
    } }, dependencies: [i3.NgForOf, i3.NgIf, i3.DatePipe], styles: [".messages[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.slide[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n\n.video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n}\n\n.video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.thumbnails[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.thumbnails[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  border: 1px solid #ccc;\n  background: #fff;\n}\n\n.thumbnails[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #333;\n  color: #fff;\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessagesComponent, [{
        type: Component,
        args: [{ selector: 'app-messages', template: "<section class=\"messages\" *ngIf=\"messages.length\">\n  <h1>Messages</h1>\n\n  <div class=\"carousel\">\n    <button (click)=\"prev()\">\u2039</button>\n\n    <div class=\"slide\">\n      <h2>{{ messages[currentIndex].title }}</h2>\n      <p>\n        {{ messages[currentIndex].speaker }} \u2013\n        {{ messages[currentIndex].date | date: 'longDate' }}\n      </p>\n\n      <div class=\"video-wrapper\">\n        <iframe\n          [src]=\"messages[currentIndex].safeUrl\"\n          frameborder=\"0\"\n          allowfullscreen\n        ></iframe>\n      </div>\n    </div>\n\n    <button (click)=\"next()\">\u203A</button>\n  </div>\n\n  <div class=\"thumbnails\">\n    <button\n      *ngFor=\"let msg of messages; let i = index\"\n      [class.active]=\"i === currentIndex\"\n      (click)=\"currentIndex = i\"\n    >\n      {{ msg.title }}\n    </button>\n  </div>\n</section>\n\n<p *ngIf=\"!messages.length\">Aucun message pour le moment.</p>", styles: [".messages {\n  margin-top: 1.5rem;\n}\n\n.carousel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.slide {\n  max-width: 640px;\n}\n\n.video-wrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n}\n\n.video-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.thumbnails {\n  margin-top: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.thumbnails button {\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  border: 1px solid #ccc;\n  background: #fff;\n}\n\n.thumbnails button.active {\n  background: #333;\n  color: #fff;\n}"] }]
    }], () => [{ type: i1.MessagesService }, { type: i2.DomSanitizer }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MessagesComponent, { className: "MessagesComponent", filePath: "app\\pages\\messages\\messages.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=messages.component.js.map