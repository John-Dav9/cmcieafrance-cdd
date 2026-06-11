import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
function CellGroupsPublicComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "div", 8);
    i0.ɵɵelementEnd();
} }
function CellGroupsPublicComponent_div_9_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const g_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(g_r1.description);
} }
function CellGroupsPublicComponent_div_9_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "strong");
    i0.ɵɵtext(2, "Responsable :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const g_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", g_r1.leaderName, "");
} }
function CellGroupsPublicComponent_div_9_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "strong");
    i0.ɵɵtext(2, "R\u00E9union :");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const g_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", g_r1.meetingDay, " \u00E0 ", g_r1.meetingTime, "");
} }
function CellGroupsPublicComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13);
    i0.ɵɵtext(2, "\uD83D\uDE4F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CellGroupsPublicComponent_div_9_div_1_p_5_Template, 2, 1, "p", 14);
    i0.ɵɵelementStart(6, "div", 15);
    i0.ɵɵtemplate(7, CellGroupsPublicComponent_div_9_div_1_span_7_Template, 4, 1, "span", 14)(8, CellGroupsPublicComponent_div_9_div_1_span_8_Template, 4, 2, "span", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r1 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(g_r1.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", g_r1.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", g_r1.leaderName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", g_r1.meetingDay);
} }
function CellGroupsPublicComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "p");
    i0.ɵɵtext(2, "Les groupes de cellule seront bient\u00F4t disponibles.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Contactez-nous : ");
    i0.ɵɵelementStart(5, "a", 17);
    i0.ɵɵtext(6, "contact@cmciea-france.com");
    i0.ɵɵelementEnd()()();
} }
function CellGroupsPublicComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, CellGroupsPublicComponent_div_9_div_1_Template, 9, 4, "div", 10)(2, CellGroupsPublicComponent_div_9_div_2_Template, 7, 0, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.groups);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.groups.length === 0);
} }
export class CellGroupsPublicComponent {
    constructor(http) {
        this.http = http;
        this.groups = [];
        this.loading = true;
    }
    ngOnInit() {
        this.http.get(`${environment.apiBase}/cell-groups`).subscribe({
            next: g => { this.groups = g; this.loading = false; },
            error: () => this.loading = false,
        });
    }
}
CellGroupsPublicComponent.ɵfac = function CellGroupsPublicComponent_Factory(t) { return new (t || CellGroupsPublicComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
CellGroupsPublicComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CellGroupsPublicComponent, selectors: [["app-cell-groups-public"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 17, vars: 2, consts: [[1, "cg-public-page"], [1, "cg-hero"], [1, "cg-icon"], ["class", "loading", 4, "ngIf"], ["class", "groups-grid", 4, "ngIf"], [1, "cg-cta"], ["href", "mailto:contact@cmciea-france.com", 1, "btn-contact"], [1, "loading"], [1, "spinner"], [1, "groups-grid"], ["class", "group-card", 4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [1, "group-card"], [1, "group-icon"], [4, "ngIf"], [1, "group-meta"], [1, "empty"], ["href", "mailto:contact@cmciea-france.com"]], template: function CellGroupsPublicComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵtext(3, "\u271D");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h1");
        i0.ɵɵtext(5, "Groupes de cellule");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "Des espaces intimes de fellowship, d'\u00E9tude biblique et de pri\u00E8re. Rejoignez une cellule pr\u00E8s de chez vous.");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(8, CellGroupsPublicComponent_div_8_Template, 2, 0, "div", 3)(9, CellGroupsPublicComponent_div_9_Template, 3, 2, "div", 4);
        i0.ɵɵelementStart(10, "div", 5)(11, "h2");
        i0.ɵɵtext(12, "Int\u00E9ress\u00E9(e) ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p");
        i0.ɵɵtext(14, "Contactez-nous pour rejoindre un groupe de cellule ou en cr\u00E9er un nouveau.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "a", 6);
        i0.ɵɵtext(16, "Nous contacter");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
    } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf], styles: ["$primary[_ngcontent-%COMP%]:   #1D546C[_ngcontent-%COMP%]; $accent[_ngcontent-%COMP%]:   #E8A838[_ngcontent-%COMP%]; $dark[_ngcontent-%COMP%]:   #1a1a2e[_ngcontent-%COMP%];\n\n.cg-public-page[_ngcontent-%COMP%] { max-width: 900px; margin: 0 auto; padding: 32px 16px; }\n\n.cg-hero[_ngcontent-%COMP%] { text-align: center; margin-bottom: 40px; }\n.cg-icon[_ngcontent-%COMP%] { font-size: 40px; color: $accent; margin-bottom: 12px; }\n.cg-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 32px; color: $dark; margin-bottom: 10px; }\n.cg-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #666; font-size: 16px; max-width: 560px; margin: 0 auto; }\n\n.loading[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 40px; }\n.spinner[_ngcontent-%COMP%] { width: 36px; height: 36px; border: 3px solid rgba($primary,.2); border-top-color: $primary; border-radius: 50%; animation: _ngcontent-%COMP%_spin .9s linear infinite; }\n\n.groups-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; margin-bottom: 48px; }\n\n.group-card[_ngcontent-%COMP%] {\n  background: white; border-radius: 14px; padding: 24px; border: 1px solid #e5e7eb;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.06); text-align: center;\n  transition: transform 0.2s, box-shadow 0.2s;\n  &:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.1); }\n}\n.group-icon[_ngcontent-%COMP%] { font-size: 28px; margin-bottom: 10px; }\n.group-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; color: $dark; margin-bottom: 8px; }\n.group-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 14px; color: #666; margin-bottom: 12px; }\n.group-meta[_ngcontent-%COMP%] { font-size: 13px; color: #555; display: flex; flex-direction: column; gap: 4px; }\n\n.empty[_ngcontent-%COMP%] { grid-column: 1 / -1; text-align: center; color: #888; padding: 32px; font-size: 15px; a { color: $primary; } }\n\n.cg-cta[_ngcontent-%COMP%] { text-align: center; background: linear-gradient(135deg, $primary 0%, darken($primary,10%) 100%); color: white; border-radius: 16px; padding: 40px 24px; }\n.cg-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 26px; margin-bottom: 10px; }\n.cg-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]  { opacity: 0.85; margin-bottom: 20px; }\n.btn-contact[_ngcontent-%COMP%] { display: inline-block; background: $accent; color: $dark; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; transition: background 0.2s; &:hover { background: lighten($accent, 8%); } }\n\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CellGroupsPublicComponent, [{
        type: Component,
        args: [{ selector: 'app-cell-groups-public', standalone: true, imports: [CommonModule], template: "<div class=\"cg-public-page\">\n  <div class=\"cg-hero\">\n    <div class=\"cg-icon\">\u271D</div>\n    <h1>Groupes de cellule</h1>\n    <p>Des espaces intimes de fellowship, d'\u00E9tude biblique et de pri\u00E8re. Rejoignez une cellule pr\u00E8s de chez vous.</p>\n  </div>\n\n  <div class=\"loading\" *ngIf=\"loading\"><div class=\"spinner\"></div></div>\n\n  <div class=\"groups-grid\" *ngIf=\"!loading\">\n    <div class=\"group-card\" *ngFor=\"let g of groups\">\n      <div class=\"group-icon\">\uD83D\uDE4F</div>\n      <h3>{{ g.name }}</h3>\n      <p *ngIf=\"g.description\">{{ g.description }}</p>\n      <div class=\"group-meta\">\n        <span *ngIf=\"g.leaderName\"><strong>Responsable :</strong> {{ g.leaderName }}</span>\n        <span *ngIf=\"g.meetingDay\"><strong>R\u00E9union :</strong> {{ g.meetingDay }} \u00E0 {{ g.meetingTime }}</span>\n      </div>\n    </div>\n\n    <div class=\"empty\" *ngIf=\"groups.length === 0\">\n      <p>Les groupes de cellule seront bient\u00F4t disponibles.</p>\n      <p>Contactez-nous : <a href=\"mailto:contact&#64;cmciea-france.com\">contact&#64;cmciea-france.com</a></p>\n    </div>\n  </div>\n\n  <div class=\"cg-cta\">\n    <h2>Int\u00E9ress\u00E9(e) ?</h2>\n    <p>Contactez-nous pour rejoindre un groupe de cellule ou en cr\u00E9er un nouveau.</p>\n    <a href=\"mailto:contact&#64;cmciea-france.com\" class=\"btn-contact\">Nous contacter</a>\n  </div>\n</div>\n", styles: ["$primary: #1D546C; $accent: #E8A838; $dark: #1a1a2e;\n\n.cg-public-page { max-width: 900px; margin: 0 auto; padding: 32px 16px; }\n\n.cg-hero { text-align: center; margin-bottom: 40px; }\n.cg-icon { font-size: 40px; color: $accent; margin-bottom: 12px; }\n.cg-hero h1 { font-size: 32px; color: $dark; margin-bottom: 10px; }\n.cg-hero p { color: #666; font-size: 16px; max-width: 560px; margin: 0 auto; }\n\n.loading { display: flex; justify-content: center; padding: 40px; }\n.spinner { width: 36px; height: 36px; border: 3px solid rgba($primary,.2); border-top-color: $primary; border-radius: 50%; animation: spin .9s linear infinite; }\n\n.groups-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; margin-bottom: 48px; }\n\n.group-card {\n  background: white; border-radius: 14px; padding: 24px; border: 1px solid #e5e7eb;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.06); text-align: center;\n  transition: transform 0.2s, box-shadow 0.2s;\n  &:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.1); }\n}\n.group-icon { font-size: 28px; margin-bottom: 10px; }\n.group-card h3 { font-size: 18px; color: $dark; margin-bottom: 8px; }\n.group-card p { font-size: 14px; color: #666; margin-bottom: 12px; }\n.group-meta { font-size: 13px; color: #555; display: flex; flex-direction: column; gap: 4px; }\n\n.empty { grid-column: 1 / -1; text-align: center; color: #888; padding: 32px; font-size: 15px; a { color: $primary; } }\n\n.cg-cta { text-align: center; background: linear-gradient(135deg, $primary 0%, darken($primary,10%) 100%); color: white; border-radius: 16px; padding: 40px 24px; }\n.cg-cta h2 { font-size: 26px; margin-bottom: 10px; }\n.cg-cta p  { opacity: 0.85; margin-bottom: 20px; }\n.btn-contact { display: inline-block; background: $accent; color: $dark; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; transition: background 0.2s; &:hover { background: lighten($accent, 8%); } }\n\n@keyframes spin { to { transform: rotate(360deg); } }\n"] }]
    }], () => [{ type: i1.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CellGroupsPublicComponent, { className: "CellGroupsPublicComponent", filePath: "app\\pages\\cell-groups-public\\cell-groups-public.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=cell-groups-public.component.js.map