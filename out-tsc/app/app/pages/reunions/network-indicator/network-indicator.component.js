import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NetworkIndicatorComponent {
    constructor() {
        this.quality = 'high';
    }
    get label() {
        return {
            high: 'Connexion excellente',
            medium: 'Connexion correcte',
            low: 'Connexion faible',
            critical: 'Pas de connexion',
        }[this.quality];
    }
}
NetworkIndicatorComponent.ɵfac = function NetworkIndicatorComponent_Factory(t) { return new (t || NetworkIndicatorComponent)(); };
NetworkIndicatorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NetworkIndicatorComponent, selectors: [["app-network-indicator"]], inputs: { quality: "quality" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [["role", "status", 1, "network-indicator"], [1, "network-indicator__dot"]], template: function NetworkIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "span", 1);
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵattribute("data-quality", ctx.quality);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.label);
    } }, dependencies: [CommonModule], styles: [".network-indicator[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 7px;\n      min-height: 32px;\n      padding: 0 12px;\n      border-radius: 999px;\n      background: rgba(255,255,255,.08);\n      color: #e5e7eb;\n      font-size: 13px;\n      white-space: nowrap;\n    }\n    .network-indicator__dot[_ngcontent-%COMP%] {\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #22c55e;\n      box-shadow: 0 0 0 4px rgba(34,197,94,.12);\n    }\n    [data-quality=\"medium\"][_ngcontent-%COMP%]   .network-indicator__dot[_ngcontent-%COMP%] { background: #eab308; box-shadow: 0 0 0 4px rgba(234,179,8,.12); }\n    [data-quality=\"low\"][_ngcontent-%COMP%]   .network-indicator__dot[_ngcontent-%COMP%] { background: #f97316; box-shadow: 0 0 0 4px rgba(249,115,22,.12); }\n    [data-quality=\"critical\"][_ngcontent-%COMP%]   .network-indicator__dot[_ngcontent-%COMP%] { background: #ef4444; box-shadow: 0 0 0 4px rgba(239,68,68,.12); }\n    @media (max-width: 680px) {\n      .network-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child { display: none; }\n      .network-indicator[_ngcontent-%COMP%] { padding: 0 11px; }\n    }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NetworkIndicatorComponent, [{
        type: Component,
        args: [{ selector: 'app-network-indicator', standalone: true, imports: [CommonModule], template: `
    <div class="network-indicator" [attr.data-quality]="quality" role="status">
      <span class="network-indicator__dot"></span>
      <span>{{ label }}</span>
    </div>
  `, styles: ["\n    .network-indicator {\n      display: inline-flex;\n      align-items: center;\n      gap: 7px;\n      min-height: 32px;\n      padding: 0 12px;\n      border-radius: 999px;\n      background: rgba(255,255,255,.08);\n      color: #e5e7eb;\n      font-size: 13px;\n      white-space: nowrap;\n    }\n    .network-indicator__dot {\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #22c55e;\n      box-shadow: 0 0 0 4px rgba(34,197,94,.12);\n    }\n    [data-quality=\"medium\"] .network-indicator__dot { background: #eab308; box-shadow: 0 0 0 4px rgba(234,179,8,.12); }\n    [data-quality=\"low\"] .network-indicator__dot { background: #f97316; box-shadow: 0 0 0 4px rgba(249,115,22,.12); }\n    [data-quality=\"critical\"] .network-indicator__dot { background: #ef4444; box-shadow: 0 0 0 4px rgba(239,68,68,.12); }\n    @media (max-width: 680px) {\n      .network-indicator span:last-child { display: none; }\n      .network-indicator { padding: 0 11px; }\n    }\n  "] }]
    }], null, { quality: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NetworkIndicatorComponent, { className: "NetworkIndicatorComponent", filePath: "app\\pages\\reunions\\network-indicator\\network-indicator.component.ts", lineNumber: 44 }); })();
//# sourceMappingURL=network-indicator.component.js.map