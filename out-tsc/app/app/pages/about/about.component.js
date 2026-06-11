import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/pages.service";
import * as i2 from "../../core/services/page-content.service";
import * as i3 from "@angular/common";
function AboutComponent_section_10_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const valeur_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(valeur_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(valeur_r1.description);
} }
function AboutComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h2");
    i0.ɵɵtext(2, "Valeurs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul");
    i0.ɵɵtemplate(4, AboutComponent_section_10_li_4_Template, 5, 2, "li", 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.data.valeurs);
} }
export class AboutComponent {
    constructor(pagesService, pageContent) {
        this.pagesService = pagesService;
        this.pageContent = pageContent;
        this.c = {};
    }
    ngOnInit() {
        this.pagesService.getAbout().subscribe((res) => (this.data = res));
        this.pageContent.getPage('nous-connaitre').subscribe((res) => { if (res)
            this.c = res; });
    }
    get histoireTitle() { var _a, _b; return this.c.histoireTitle || ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.histoire) === null || _b === void 0 ? void 0 : _b.title) || 'Notre histoire'; }
    get histoireContent() { var _a, _b; return this.c.histoireContent || ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.histoire) === null || _b === void 0 ? void 0 : _b.content) || ''; }
    get visionTitle() { var _a, _b; return this.c.visionTitle || ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.vision) === null || _b === void 0 ? void 0 : _b.title) || 'Notre vision'; }
    get visionContent() { var _a, _b; return this.c.visionContent || ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.vision) === null || _b === void 0 ? void 0 : _b.content) || ''; }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(i0.ɵɵdirectiveInject(i1.PagesService), i0.ɵɵdirectiveInject(i2.PageContentService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutComponent, selectors: [["app-about"]], decls: 11, vars: 5, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section")(1, "h1");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "section")(6, "h2");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(10, AboutComponent_section_10_Template, 5, 1, "section", 0);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.histoireTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.histoireContent);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.visionTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.visionContent);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.data == null ? null : ctx.data.valeurs == null ? null : ctx.data.valeurs.length);
    } }, dependencies: [i3.NgForOf, i3.NgIf], styles: ["section[_ngcontent-%COMP%] { margin-bottom: 1.5rem; }\nul[_ngcontent-%COMP%] { list-style: none; padding: 0; }\nli[_ngcontent-%COMP%] { margin-bottom: 1rem; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutComponent, [{
        type: Component,
        args: [{ selector: 'app-about', template: "<section>\n  <h1>{{ histoireTitle }}</h1>\n  <p>{{ histoireContent }}</p>\n</section>\n\n<section>\n  <h2>{{ visionTitle }}</h2>\n  <p>{{ visionContent }}</p>\n</section>\n\n<section *ngIf=\"data?.valeurs?.length\">\n  <h2>Valeurs</h2>\n  <ul>\n    <li *ngFor=\"let valeur of data.valeurs\">\n      <h3>{{ valeur.title }}</h3>\n      <p>{{ valeur.description }}</p>\n    </li>\n  </ul>\n</section>\n", styles: ["section { margin-bottom: 1.5rem; }\nul { list-style: none; padding: 0; }\nli { margin-bottom: 1rem; }\n"] }]
    }], () => [{ type: i1.PagesService }, { type: i2.PageContentService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "app\\pages\\about\\about.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=about.component.js.map