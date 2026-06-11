import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
function EnDirectComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "span", 8);
    i0.ɵɵtext(2, " EN DIRECT ");
    i0.ɵɵelementEnd();
} }
function EnDirectComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Aucune r\u00E9union en cours actuellement.");
    i0.ɵɵelementEnd();
} }
function EnDirectComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementEnd();
} }
function EnDirectComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "iframe", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.jitsiEmbedUrl, i0.ɵɵsanitizeResourceUrl);
} }
function EnDirectComponent_div_7_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.meeting.description);
} }
function EnDirectComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, EnDirectComponent_div_7_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵtemplate(3, EnDirectComponent_div_7_p_3_Template, 2, 1, "p", 14);
    i0.ɵɵelementStart(4, "a", 15);
    i0.ɵɵtext(5, " Rejoindre la r\u00E9union compl\u00E8te \u2192 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 16);
    i0.ɵɵtext(7, " Pour participer activement (micro, cam\u00E9ra), rejoignez la r\u00E9union compl\u00E8te. Vous observez ici en mode spectateur. ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.jitsiEmbedUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.meeting.description);
} }
function EnDirectComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21);
    i0.ɵɵtext(2, "\u271D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Pas de r\u00E9union en ce moment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Revenez bient\u00F4t ou consultez nos r\u00E9unions programm\u00E9es.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 15);
    i0.ɵɵtext(8, "Voir le calendrier \u2192");
    i0.ɵɵelementEnd()();
} }
export class EnDirectComponent {
    constructor(http) {
        this.http = http;
        this.meeting = null;
        this.loading = true;
    }
    ngOnInit() {
        this.http.get(`${environment.apiBase}/reunions/current`).subscribe({
            next: m => { this.meeting = m; this.loading = false; },
            error: () => this.loading = false,
        });
    }
    get jitsiEmbedUrl() {
        var _a;
        if (!((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.jitsiRoomId))
            return null;
        const base = environment.apiBase.includes('localhost')
            ? 'https://meet.cmciea-france.com'
            : 'https://meet.cmciea-france.com';
        return `${base}/${this.meeting.jitsiRoomId}#config.toolbarButtons=[]&config.prejoinPageEnabled=false`;
    }
}
EnDirectComponent.ɵfac = function EnDirectComponent_Factory(t) { return new (t || EnDirectComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
EnDirectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EnDirectComponent, selectors: [["app-en-direct"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 9, vars: 6, consts: [[1, "live-page"], [1, "live-header"], ["class", "live-badge", 4, "ngIf"], [4, "ngIf"], ["class", "live-loading", 4, "ngIf"], ["class", "live-content", 4, "ngIf"], ["class", "no-meeting", 4, "ngIf"], [1, "live-badge"], [1, "live-dot"], [1, "live-loading"], [1, "spinner"], [1, "live-content"], ["class", "jitsi-embed", 4, "ngIf"], [1, "live-info"], ["class", "live-description", 4, "ngIf"], ["routerLink", "/reunions", 1, "btn-join"], [1, "live-note"], [1, "jitsi-embed"], ["allow", "camera; microphone; fullscreen; display-capture", "allowfullscreen", "", 3, "src"], [1, "live-description"], [1, "no-meeting"], [1, "no-meeting-icon"]], template: function EnDirectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, EnDirectComponent_div_2_Template, 3, 0, "div", 2);
        i0.ɵɵelementStart(3, "h1");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, EnDirectComponent_p_5_Template, 2, 0, "p", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, EnDirectComponent_div_6_Template, 2, 0, "div", 4)(7, EnDirectComponent_div_7_Template, 8, 2, "div", 5)(8, EnDirectComponent_div_8_Template, 9, 0, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.meeting == null ? null : ctx.meeting.status) === "live");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate((ctx.meeting == null ? null : ctx.meeting.title) || "R\u00E9union CMCIEA France");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.meeting && !ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.meeting && !ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.meeting && !ctx.loading);
    } }, dependencies: [CommonModule, i2.NgIf, RouterLink], styles: ["$primary[_ngcontent-%COMP%]:   #1D546C[_ngcontent-%COMP%];\n$accent[_ngcontent-%COMP%]:   #E8A838[_ngcontent-%COMP%];\n$bg[_ngcontent-%COMP%]:   #F7F5F0[_ngcontent-%COMP%];\n$dark[_ngcontent-%COMP%]:   #1a1a2e[_ngcontent-%COMP%];\n\n.live-page[_ngcontent-%COMP%] { max-width: 960px; margin: 0 auto; padding: 32px 16px; }\n\n.live-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n  h1 { font-size: clamp(22px, 5vw, 36px); color: $dark; margin: 8px 0; }\n}\n\n.live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(#ea4335, 0.12);\n  border: 1px solid rgba(#ea4335, 0.3);\n  color: #c0392b;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n\n.live-dot[_ngcontent-%COMP%] {\n  width: 8px; height: 8px;\n  background: #ea4335;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_blink 1s ease-in-out infinite;\n}\n\n.live-loading[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 60px; }\n.spinner[_ngcontent-%COMP%] { width: 40px; height: 40px; border: 3px solid rgba($primary, 0.2); border-top-color: $primary; border-radius: 50%; animation: _ngcontent-%COMP%_spin 0.9s linear infinite; }\n\n.live-content[_ngcontent-%COMP%] {}\n\n.jitsi-embed[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 16/9;\n  border-radius: 12px;\n  overflow: hidden;\n  background: $dark;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.15);\n\n  iframe { width: 100%; height: 100%; border: none; }\n}\n\n.live-info[_ngcontent-%COMP%] { text-align: center; }\n.live-description[_ngcontent-%COMP%] { color: #555; margin-bottom: 16px; font-size: 15px; }\n\n.btn-join[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: $primary;\n  color: white;\n  padding: 12px 28px;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 15px;\n  transition: background 0.2s;\n  &:hover { background: darken($primary, 8%); }\n}\n\n.live-note[_ngcontent-%COMP%] { font-size: 12px; color: #888; margin-top: 12px; }\n\n.no-meeting[_ngcontent-%COMP%] { text-align: center; padding: 60px 20px; }\n.no-meeting-icon[_ngcontent-%COMP%] { font-size: 48px; color: $accent; margin-bottom: 16px; }\n.no-meeting[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { color: $dark; margin-bottom: 8px; }\n.no-meeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]  { color: #666; margin-bottom: 20px; }\n\n@keyframes _ngcontent-%COMP%_blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }\n@keyframes _ngcontent-%COMP%_spin  { to { transform: rotate(360deg); } }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnDirectComponent, [{
        type: Component,
        args: [{ selector: 'app-en-direct', standalone: true, imports: [CommonModule, RouterLink], template: "<div class=\"live-page\">\n\n  <div class=\"live-header\">\n    <div class=\"live-badge\" *ngIf=\"meeting?.status === 'live'\">\n      <span class=\"live-dot\"></span> EN DIRECT\n    </div>\n    <h1>{{ meeting?.title || 'R\u00E9union CMCIEA France' }}</h1>\n    <p *ngIf=\"!meeting && !loading\">Aucune r\u00E9union en cours actuellement.</p>\n  </div>\n\n  <div class=\"live-loading\" *ngIf=\"loading\">\n    <div class=\"spinner\"></div>\n  </div>\n\n  <div class=\"live-content\" *ngIf=\"meeting && !loading\">\n\n    <!-- Viewer Jitsi en lecture seule -->\n    <div class=\"jitsi-embed\" *ngIf=\"jitsiEmbedUrl\">\n      <iframe\n        [src]=\"jitsiEmbedUrl\"\n        allow=\"camera; microphone; fullscreen; display-capture\"\n        allowfullscreen>\n      </iframe>\n    </div>\n\n    <div class=\"live-info\">\n      <p class=\"live-description\" *ngIf=\"meeting.description\">{{ meeting.description }}</p>\n      <a routerLink=\"/reunions\" class=\"btn-join\">\n        Rejoindre la r\u00E9union compl\u00E8te \u2192\n      </a>\n      <p class=\"live-note\">\n        Pour participer activement (micro, cam\u00E9ra), rejoignez la r\u00E9union compl\u00E8te.\n        Vous observez ici en mode spectateur.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"no-meeting\" *ngIf=\"!meeting && !loading\">\n    <div class=\"no-meeting-icon\">\u271D</div>\n    <h2>Pas de r\u00E9union en ce moment</h2>\n    <p>Revenez bient\u00F4t ou consultez nos r\u00E9unions programm\u00E9es.</p>\n    <a routerLink=\"/reunions\" class=\"btn-join\">Voir le calendrier \u2192</a>\n  </div>\n\n</div>\n", styles: ["$primary: #1D546C;\n$accent:  #E8A838;\n$bg:      #F7F5F0;\n$dark:    #1a1a2e;\n\n.live-page { max-width: 960px; margin: 0 auto; padding: 32px 16px; }\n\n.live-header {\n  text-align: center;\n  margin-bottom: 24px;\n  h1 { font-size: clamp(22px, 5vw, 36px); color: $dark; margin: 8px 0; }\n}\n\n.live-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(#ea4335, 0.12);\n  border: 1px solid rgba(#ea4335, 0.3);\n  color: #c0392b;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n\n.live-dot {\n  width: 8px; height: 8px;\n  background: #ea4335;\n  border-radius: 50%;\n  animation: blink 1s ease-in-out infinite;\n}\n\n.live-loading { display: flex; justify-content: center; padding: 60px; }\n.spinner { width: 40px; height: 40px; border: 3px solid rgba($primary, 0.2); border-top-color: $primary; border-radius: 50%; animation: spin 0.9s linear infinite; }\n\n.live-content {}\n\n.jitsi-embed {\n  width: 100%;\n  aspect-ratio: 16/9;\n  border-radius: 12px;\n  overflow: hidden;\n  background: $dark;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.15);\n\n  iframe { width: 100%; height: 100%; border: none; }\n}\n\n.live-info { text-align: center; }\n.live-description { color: #555; margin-bottom: 16px; font-size: 15px; }\n\n.btn-join {\n  display: inline-block;\n  background: $primary;\n  color: white;\n  padding: 12px 28px;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 15px;\n  transition: background 0.2s;\n  &:hover { background: darken($primary, 8%); }\n}\n\n.live-note { font-size: 12px; color: #888; margin-top: 12px; }\n\n.no-meeting { text-align: center; padding: 60px 20px; }\n.no-meeting-icon { font-size: 48px; color: $accent; margin-bottom: 16px; }\n.no-meeting h2 { color: $dark; margin-bottom: 8px; }\n.no-meeting p  { color: #666; margin-bottom: 20px; }\n\n@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }\n@keyframes spin  { to { transform: rotate(360deg); } }\n"] }]
    }], () => [{ type: i1.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EnDirectComponent, { className: "EnDirectComponent", filePath: "app\\pages\\en-direct\\en-direct.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=en-direct.component.js.map