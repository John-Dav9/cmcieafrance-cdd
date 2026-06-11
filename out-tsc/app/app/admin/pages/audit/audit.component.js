import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function AuditComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", t_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r1);
} }
function AuditComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AuditComponent_div_13_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "span", 16);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td", 17);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td", 18);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td", 19);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "json");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const log_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.formatDate(log_r2.createdAt));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("action-badge--" + ctx_r2.actionColor(log_r2.action));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(log_r2.action);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_6_0 = log_r2.resourceType) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_7_0 = log_r2.userEmail) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(log_r2.details ? i0.ɵɵpipeBind1(12, 7, log_r2.details) : "\u2014");
} }
function AuditComponent_div_13_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 20);
    i0.ɵɵtext(2, "Aucun log");
    i0.ɵɵelementEnd()();
} }
function AuditComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Utilisateur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "D\u00E9tails");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵtemplate(15, AuditComponent_div_13_tr_15_Template, 13, 9, "tr", 13)(16, AuditComponent_div_13_tr_16_Template, 3, 0, "tr", 14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("ngForOf", ctx_r2.logs);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.logs.length === 0);
} }
export class AuditComponent {
    constructor(http) {
        this.http = http;
        this.logs = [];
        this.loading = true;
        this.filterAction = '';
        this.filterType = '';
        this.resourceTypes = ['reunion', 'membre', 'replay', 'streaming', 'cell-group'];
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        const params = new URLSearchParams();
        if (this.filterAction)
            params.set('action', this.filterAction);
        if (this.filterType)
            params.set('resourceType', this.filterType);
        params.set('limit', '200');
        this.http.get(`${environment.apiBase}/audit?${params}`).subscribe({
            next: l => { this.logs = l; this.loading = false; },
            error: () => this.loading = false,
        });
    }
    formatDate(d) {
        return new Date(d).toLocaleString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }
    actionColor(action) {
        if (action.includes('create') || action.includes('start'))
            return 'green';
        if (action.includes('delete') || action.includes('kick') || action.includes('stop'))
            return 'red';
        if (action.includes('update') || action.includes('grant'))
            return 'orange';
        return 'gray';
    }
}
AuditComponent.ɵfac = function AuditComponent_Factory(t) { return new (t || AuditComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
AuditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuditComponent, selectors: [["app-audit"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 5, consts: [[1, "audit-page"], [1, "page-header"], [1, "filters"], ["placeholder", "Filtrer par action...", 3, "ngModelChange", "change", "ngModel"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "loading", 4, "ngIf"], ["class", "log-table", 4, "ngIf"], [3, "value"], [1, "loading"], [1, "log-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "date"], [1, "action-badge"], [1, "type"], [1, "user"], [1, "details"], ["colspan", "5", 2, "text-align", "center", "color", "#888", "padding", "32px"]], template: function AuditComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        i0.ɵɵtext(3, "Journal d'audit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2)(5, "input", 3);
        i0.ɵɵtwoWayListener("ngModelChange", function AuditComponent_Template_input_ngModelChange_5_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filterAction, $event) || (ctx.filterAction = $event); return $event; });
        i0.ɵɵlistener("change", function AuditComponent_Template_input_change_5_listener() { return ctx.load(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "select", 4);
        i0.ɵɵtwoWayListener("ngModelChange", function AuditComponent_Template_select_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event); return $event; });
        i0.ɵɵlistener("change", function AuditComponent_Template_select_change_6_listener() { return ctx.load(); });
        i0.ɵɵelementStart(7, "option", 5);
        i0.ɵɵtext(8, "Tous les types");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, AuditComponent_option_9_Template, 2, 2, "option", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 7);
        i0.ɵɵlistener("click", function AuditComponent_Template_button_click_10_listener() { return ctx.load(); });
        i0.ɵɵtext(11, "\u21BB Actualiser");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(12, AuditComponent_div_12_Template, 2, 0, "div", 8)(13, AuditComponent_div_13_Template, 17, 2, "div", 9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtwoWayProperty("ngModel", ctx.filterAction);
        i0.ɵɵadvance();
        i0.ɵɵtwoWayProperty("ngModel", ctx.filterType);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.resourceTypes);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
    } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, i2.JsonPipe, FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: ["$primary[_ngcontent-%COMP%]:   #1D546C[_ngcontent-%COMP%]; $accent[_ngcontent-%COMP%]:   #E8A838[_ngcontent-%COMP%];\n\n.audit-page[_ngcontent-%COMP%] { padding: 24px; }\n.page-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 24px; }\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 22px; color: #1a1a2e; margin: 0; }\n.filters[_ngcontent-%COMP%] { display: flex; gap: 8px; flex-wrap: wrap; }\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 13px;\n}\n.filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { padding: 8px 14px; background: $primary; color: white; border: none; border-radius: 6px; cursor: pointer; }\n\n.log-table[_ngcontent-%COMP%] { overflow-x: auto; }\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; font-size: 13px; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }\nth[_ngcontent-%COMP%] { background: $primary; color: white; padding: 10px 14px; text-align: left; font-weight: 500; }\ntd[_ngcontent-%COMP%] { padding: 10px 14px; border-bottom: 1px solid #f0f0f0; vertical-align: top; }\ntr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] { border-bottom: none; }\n\n.date[_ngcontent-%COMP%]  { color: #888; white-space: nowrap; font-size: 12px; }\n.type[_ngcontent-%COMP%]  { color: #555; }\n.user[_ngcontent-%COMP%]  { color: $primary; }\n.details[_ngcontent-%COMP%] { max-width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #666; font-size: 11px; }\n\n.action-badge[_ngcontent-%COMP%] { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 600; }\n.action-badge--green[_ngcontent-%COMP%]  { background: #f0fdf4; color: #16a34a; }\n.action-badge--red[_ngcontent-%COMP%]    { background: #fef2f2; color: #dc2626; }\n.action-badge--orange[_ngcontent-%COMP%] { background: #fff7ed; color: #c2410c; }\n.action-badge--gray[_ngcontent-%COMP%]   { background: #f9fafb; color: #6b7280; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuditComponent, [{
        type: Component,
        args: [{ selector: 'app-audit', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"audit-page\">\n  <div class=\"page-header\">\n    <h1>Journal d'audit</h1>\n    <div class=\"filters\">\n      <input [(ngModel)]=\"filterAction\" placeholder=\"Filtrer par action...\" (change)=\"load()\">\n      <select [(ngModel)]=\"filterType\" (change)=\"load()\">\n        <option value=\"\">Tous les types</option>\n        <option *ngFor=\"let t of resourceTypes\" [value]=\"t\">{{ t }}</option>\n      </select>\n      <button (click)=\"load()\">\u21BB Actualiser</button>\n    </div>\n  </div>\n\n  <div class=\"loading\" *ngIf=\"loading\">Chargement...</div>\n\n  <div class=\"log-table\" *ngIf=\"!loading\">\n    <table>\n      <thead><tr><th>Date</th><th>Action</th><th>Type</th><th>Utilisateur</th><th>D\u00E9tails</th></tr></thead>\n      <tbody>\n        <tr *ngFor=\"let log of logs\">\n          <td class=\"date\">{{ formatDate(log.createdAt) }}</td>\n          <td><span class=\"action-badge\" [class]=\"'action-badge--' + actionColor(log.action)\">{{ log.action }}</span></td>\n          <td class=\"type\">{{ log.resourceType ?? '\u2014' }}</td>\n          <td class=\"user\">{{ log.userEmail ?? '\u2014' }}</td>\n          <td class=\"details\">{{ log.details ? (log.details | json) : '\u2014' }}</td>\n        </tr>\n        <tr *ngIf=\"logs.length === 0\">\n          <td colspan=\"5\" style=\"text-align:center;color:#888;padding:32px\">Aucun log</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["$primary: #1D546C; $accent: #E8A838;\n\n.audit-page { padding: 24px; }\n.page-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 24px; }\n.page-header h1 { font-size: 22px; color: #1a1a2e; margin: 0; }\n.filters { display: flex; gap: 8px; flex-wrap: wrap; }\n.filters input, .filters select {\n  padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 13px;\n}\n.filters button { padding: 8px 14px; background: $primary; color: white; border: none; border-radius: 6px; cursor: pointer; }\n\n.log-table { overflow-x: auto; }\ntable { width: 100%; border-collapse: collapse; font-size: 13px; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }\nth { background: $primary; color: white; padding: 10px 14px; text-align: left; font-weight: 500; }\ntd { padding: 10px 14px; border-bottom: 1px solid #f0f0f0; vertical-align: top; }\ntr:last-child td { border-bottom: none; }\n\n.date  { color: #888; white-space: nowrap; font-size: 12px; }\n.type  { color: #555; }\n.user  { color: $primary; }\n.details { max-width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #666; font-size: 11px; }\n\n.action-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 600; }\n.action-badge--green  { background: #f0fdf4; color: #16a34a; }\n.action-badge--red    { background: #fef2f2; color: #dc2626; }\n.action-badge--orange { background: #fff7ed; color: #c2410c; }\n.action-badge--gray   { background: #f9fafb; color: #6b7280; }\n"] }]
    }], () => [{ type: i1.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuditComponent, { className: "AuditComponent", filePath: "app\\admin\\pages\\audit\\audit.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=audit.component.js.map