import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FloatingWindowComponent__svg_svg_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 14);
    i0.ɵɵelement(1, "rect", 19)(2, "path", 20);
    i0.ɵɵelementEnd();
} }
function FloatingWindowComponent__svg_svg_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 14);
    i0.ɵɵelement(1, "path", 21);
    i0.ɵɵelementEnd();
} }
export class FloatingWindowComponent {
    constructor() {
        this.title = '';
        this.quality = 'high';
        this.expand = new EventEmitter();
        this.leave = new EventEmitter();
        this.micOn = true;
        this.camOn = true;
        this._jitsiApi = null;
    }
    set jitsiApi(api) {
        this._jitsiApi = api;
        if (api)
            this.syncStateFromApi();
    }
    clickToggleMic() {
        var _a;
        this.micOn = !this.micOn;
        (_a = this._jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleAudio');
    }
    clickToggleCam() {
        var _a;
        this.camOn = !this.camOn;
        (_a = this._jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('toggleVideo');
    }
    get qualityDotClass() {
        return `quality-dot quality-dot--${this.quality}`;
    }
    syncStateFromApi() {
        var _a, _b, _c, _d;
        try {
            const status = (_b = (_a = this._jitsiApi) === null || _a === void 0 ? void 0 : _a.getAudioStatus) === null || _b === void 0 ? void 0 : _b.call(_a);
            if (status !== undefined)
                this.micOn = !status.muted;
            const vstatus = (_d = (_c = this._jitsiApi) === null || _c === void 0 ? void 0 : _c.getVideoStatus) === null || _d === void 0 ? void 0 : _d.call(_c);
            if (vstatus !== undefined)
                this.camOn = !vstatus.muted;
        }
        catch ( /* pas de données disponibles avant join */_e) { /* pas de données disponibles avant join */ }
    }
}
FloatingWindowComponent.ɵfac = function FloatingWindowComponent_Factory(t) { return new (t || FloatingWindowComponent)(); };
FloatingWindowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FloatingWindowComponent, selectors: [["app-floating-window"]], inputs: { title: "title", quality: "quality", jitsiApi: "jitsiApi" }, outputs: { expand: "expand", leave: "leave" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 30, vars: 11, consts: [[1, "float-window"], [1, "float-main"], [1, "float-identity"], [1, "float-title"], ["title", "Revenir \u00E0 la salle", 1, "float-expand-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2"], ["points", "15 3 21 3 21 9"], ["points", "9 21 3 21 3 15"], ["x1", "21", "y1", "3", "x2", "14", "y2", "10"], ["x1", "3", "y1", "21", "x2", "10", "y2", "14"], [1, "float-controls"], ["title", "Activer ou couper le micro", 1, "float-btn", 3, "click"], ["viewBox", "0 0 24 24", 4, "ngIf"], ["title", "Activer ou couper la cam\u00E9ra", 1, "float-btn", 3, "click"], ["viewBox", "0 0 24 24"], ["x", "3", "y", "6", "width", "13", "height", "12", "rx", "2"], ["d", "m16 10 5-3v10l-5-3"], ["title", "Quitter la r\u00E9union", 1, "float-btn", "float-btn--leave", 3, "click"], ["d", "M4 14c5-4 11-4 16 0l-3 4-3-2v-3a12 12 0 0 0-4 0v3l-3 2z"], ["x", "9", "y", "2", "width", "6", "height", "12", "rx", "3"], ["d", "M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8"], ["d", "m3 3 18 18M9 9v2a3 3 0 0 0 5.1 2.1M15 9V5a3 3 0 0 0-5.8-1M17 16.8A7 7 0 0 0 19 10M5 10a7 7 0 0 0 10 6.3M12 17v4M8 21h8"]], template: function FloatingWindowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵelement(3, "span");
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function FloatingWindowComponent_Template_button_click_6_listener() { return ctx.expand.emit(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(7, "svg", 5);
        i0.ɵɵelement(8, "polyline", 6)(9, "polyline", 7)(10, "line", 8)(11, "line", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(12, " Agrandir ");
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(13, "div", 10)(14, "button", 11);
        i0.ɵɵlistener("click", function FloatingWindowComponent_Template_button_click_14_listener() { return ctx.clickToggleMic(); });
        i0.ɵɵtemplate(15, FloatingWindowComponent__svg_svg_15_Template, 3, 0, "svg", 12)(16, FloatingWindowComponent__svg_svg_16_Template, 2, 0, "svg", 12);
        i0.ɵɵelementStart(17, "span");
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "button", 13);
        i0.ɵɵlistener("click", function FloatingWindowComponent_Template_button_click_19_listener() { return ctx.clickToggleCam(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(20, "svg", 14);
        i0.ɵɵelement(21, "rect", 15)(22, "path", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(23, "span");
        i0.ɵɵtext(24);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(25, "button", 17);
        i0.ɵɵlistener("click", function FloatingWindowComponent_Template_button_click_25_listener() { return ctx.leave.emit(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(26, "svg", 14);
        i0.ɵɵelement(27, "path", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(28, "span");
        i0.ɵɵtext(29, "Quitter");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵclassMap(ctx.qualityDotClass);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(9);
        i0.ɵɵclassProp("float-btn--off", !ctx.micOn);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.micOn);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.micOn);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.micOn ? "Micro" : "Muet");
        i0.ɵɵadvance();
        i0.ɵɵclassProp("float-btn--off", !ctx.camOn);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.camOn ? "Cam\u00E9ra" : "Coup\u00E9e");
    } }, dependencies: [CommonModule, i1.NgIf], styles: ["$width[_ngcontent-%COMP%]:   320px[_ngcontent-%COMP%];\n$edge[_ngcontent-%COMP%]:   20px[_ngcontent-%COMP%];\n$footer-height[_ngcontent-%COMP%]:   96px[_ngcontent-%COMP%];\n\n[_nghost-%COMP%] {\n  position: fixed;\n  right: $edge;\n  bottom: $edge;\n  width: $width;\n  z-index: 9999;\n  font-family: Inter, \"Segoe UI\", sans-serif;\n}\n\n.float-window[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-top: 0;\n  border-radius: 0 0 14px 14px;\n  color: #f8fafc;\n  background: rgba(17, 19, 24, .97);\n  box-shadow: 0 18px 48px rgba(0, 0, 0, .42);\n  backdrop-filter: blur(18px);\n}\n\n.float-main[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 7px 8px 6px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n}\n\n.float-identity[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.float-title[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  color: rgba(255, 255, 255, .88);\n  font-size: 12px;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.float-expand-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  padding: 0 11px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  flex: 0 0 auto;\n  border: 0;\n  border-radius: 8px;\n  color: #211707;\n  background: #e8a838;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n\n  &:hover { background: #f0b84a; }\n  &:active { transform: translateY(1px); }\n  svg { width: 14px; height: 14px; }\n}\n\n.float-controls[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 6px 8px 8px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1.15fr;\n  gap: 6px;\n  box-sizing: border-box;\n}\n\n.float-btn[_ngcontent-%COMP%] {\n  min-width: 0;\n  height: 36px;\n  padding: 0 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .1);\n  border-radius: 9px;\n  color: #dfe3ea;\n  background: rgba(255, 255, 255, .065);\n  font-size: 10px;\n  font-weight: 700;\n  cursor: pointer;\n\n  &:hover { background: rgba(255, 255, 255, .13); }\n  svg {\n    width: 16px;\n    height: 16px;\n    flex: 0 0 auto;\n    fill: none;\n    stroke: currentColor;\n    stroke-width: 1.8;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n  }\n  span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  &--off {\n    color: #ff9a9e;\n    border-color: rgba(229, 72, 77, .32);\n    background: rgba(229, 72, 77, .14);\n  }\n\n  &--leave {\n    color: #fff;\n    border-color: #d83d45;\n    background: #c9343c;\n    &:hover { background: #df454d; }\n  }\n}\n\n.quality-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  flex: 0 0 auto;\n  border-radius: 50%;\n\n  &--high { background: #34c66c; box-shadow: 0 0 0 4px rgba(52, 198, 108, .1); }\n  &--medium { background: #fbbc04; }\n  &--low { background: #ea4335; animation: _ngcontent-%COMP%_blink 1.2s ease-in-out infinite; }\n  &--critical { background: #707681; }\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  50% { opacity: .25; }\n}\n\n@media (max-width: 480px) {\n  [_nghost-%COMP%] {\n    right: 10px;\n    bottom: 10px;\n    width: min(300px, calc(100vw - 20px));\n  }\n\n  .float-main[_ngcontent-%COMP%] { padding-left: 10px; }\n  .float-expand-btn[_ngcontent-%COMP%] { padding: 0 9px; }\n  .float-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FloatingWindowComponent, [{
        type: Component,
        args: [{ selector: 'app-floating-window', standalone: true, imports: [CommonModule], template: "<div class=\"float-window\">\n  <div class=\"float-main\">\n    <div class=\"float-identity\">\n      <span [class]=\"qualityDotClass\"></span>\n      <span class=\"float-title\">{{ title }}</span>\n    </div>\n\n    <button class=\"float-expand-btn\" (click)=\"expand.emit()\" title=\"Revenir \u00E0 la salle\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\">\n        <polyline points=\"15 3 21 3 21 9\"/>\n        <polyline points=\"9 21 3 21 3 15\"/>\n        <line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"/>\n        <line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"/>\n      </svg>\n      Agrandir\n    </button>\n  </div>\n\n  <div class=\"float-controls\">\n    <button class=\"float-btn\" [class.float-btn--off]=\"!micOn\" (click)=\"clickToggleMic()\" title=\"Activer ou couper le micro\">\n      <svg *ngIf=\"micOn\" viewBox=\"0 0 24 24\"><rect x=\"9\" y=\"2\" width=\"6\" height=\"12\" rx=\"3\"/><path d=\"M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8\"/></svg>\n      <svg *ngIf=\"!micOn\" viewBox=\"0 0 24 24\"><path d=\"m3 3 18 18M9 9v2a3 3 0 0 0 5.1 2.1M15 9V5a3 3 0 0 0-5.8-1M17 16.8A7 7 0 0 0 19 10M5 10a7 7 0 0 0 10 6.3M12 17v4M8 21h8\"/></svg>\n      <span>{{ micOn ? 'Micro' : 'Muet' }}</span>\n    </button>\n    <button class=\"float-btn\" [class.float-btn--off]=\"!camOn\" (click)=\"clickToggleCam()\" title=\"Activer ou couper la cam\u00E9ra\">\n      <svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"6\" width=\"13\" height=\"12\" rx=\"2\"/><path d=\"m16 10 5-3v10l-5-3\"/></svg>\n      <span>{{ camOn ? 'Cam\u00E9ra' : 'Coup\u00E9e' }}</span>\n    </button>\n    <button class=\"float-btn float-btn--leave\" (click)=\"leave.emit()\" title=\"Quitter la r\u00E9union\">\n      <svg viewBox=\"0 0 24 24\"><path d=\"M4 14c5-4 11-4 16 0l-3 4-3-2v-3a12 12 0 0 0-4 0v3l-3 2z\"/></svg>\n      <span>Quitter</span>\n    </button>\n  </div>\n</div>\n", styles: ["$width: 320px;\n$edge: 20px;\n$footer-height: 96px;\n\n:host {\n  position: fixed;\n  right: $edge;\n  bottom: $edge;\n  width: $width;\n  z-index: 9999;\n  font-family: Inter, \"Segoe UI\", sans-serif;\n}\n\n.float-window {\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-top: 0;\n  border-radius: 0 0 14px 14px;\n  color: #f8fafc;\n  background: rgba(17, 19, 24, .97);\n  box-shadow: 0 18px 48px rgba(0, 0, 0, .42);\n  backdrop-filter: blur(18px);\n}\n\n.float-main {\n  min-height: 44px;\n  padding: 7px 8px 6px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, .07);\n}\n\n.float-identity {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.float-title {\n  min-width: 0;\n  overflow: hidden;\n  color: rgba(255, 255, 255, .88);\n  font-size: 12px;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.float-expand-btn {\n  height: 32px;\n  padding: 0 11px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  flex: 0 0 auto;\n  border: 0;\n  border-radius: 8px;\n  color: #211707;\n  background: #e8a838;\n  font-size: 11px;\n  font-weight: 800;\n  cursor: pointer;\n\n  &:hover { background: #f0b84a; }\n  &:active { transform: translateY(1px); }\n  svg { width: 14px; height: 14px; }\n}\n\n.float-controls {\n  height: 50px;\n  padding: 6px 8px 8px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1.15fr;\n  gap: 6px;\n  box-sizing: border-box;\n}\n\n.float-btn {\n  min-width: 0;\n  height: 36px;\n  padding: 0 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .1);\n  border-radius: 9px;\n  color: #dfe3ea;\n  background: rgba(255, 255, 255, .065);\n  font-size: 10px;\n  font-weight: 700;\n  cursor: pointer;\n\n  &:hover { background: rgba(255, 255, 255, .13); }\n  svg {\n    width: 16px;\n    height: 16px;\n    flex: 0 0 auto;\n    fill: none;\n    stroke: currentColor;\n    stroke-width: 1.8;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n  }\n  span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  &--off {\n    color: #ff9a9e;\n    border-color: rgba(229, 72, 77, .32);\n    background: rgba(229, 72, 77, .14);\n  }\n\n  &--leave {\n    color: #fff;\n    border-color: #d83d45;\n    background: #c9343c;\n    &:hover { background: #df454d; }\n  }\n}\n\n.quality-dot {\n  width: 8px;\n  height: 8px;\n  flex: 0 0 auto;\n  border-radius: 50%;\n\n  &--high { background: #34c66c; box-shadow: 0 0 0 4px rgba(52, 198, 108, .1); }\n  &--medium { background: #fbbc04; }\n  &--low { background: #ea4335; animation: blink 1.2s ease-in-out infinite; }\n  &--critical { background: #707681; }\n}\n\n@keyframes blink {\n  50% { opacity: .25; }\n}\n\n@media (max-width: 480px) {\n  :host {\n    right: 10px;\n    bottom: 10px;\n    width: min(300px, calc(100vw - 20px));\n  }\n\n  .float-main { padding-left: 10px; }\n  .float-expand-btn { padding: 0 9px; }\n  .float-btn span { display: none; }\n}\n"] }]
    }], null, { title: [{
            type: Input
        }], quality: [{
            type: Input
        }], jitsiApi: [{
            type: Input
        }], expand: [{
            type: Output
        }], leave: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FloatingWindowComponent, { className: "FloatingWindowComponent", filePath: "app\\pages\\reunions\\floating-window\\floating-window.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=floating-window.component.js.map