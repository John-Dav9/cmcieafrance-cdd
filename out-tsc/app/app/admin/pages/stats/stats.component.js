import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AdminStatsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AdminStatsComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "span", 16);
    i0.ɵɵtext(2, " R\u00E9union en cours : ");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.data.liveMeetingTitle);
} }
function AdminStatsComponent_div_7_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 11);
    i0.ɵɵtext(5, "Moyenne par r\u00E9union");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 1, ctx_r0.data.totals.participations / ctx_r0.data.totals.meetings, "1.0-1"));
} }
function AdminStatsComponent_div_7_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r2.participants);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("height", ctx_r0.barHeight(m_r2.participants), "%");
    i0.ɵɵclassProp("bar--live", m_r2.status === "live")("bar--ended", m_r2.status === "ended");
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", m_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.formatDate(m_r2.date));
} }
function AdminStatsComponent_div_7_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "h3", 18);
    i0.ɵɵtext(2, "Participants par r\u00E9union (8 derni\u00E8res semaines)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 19);
    i0.ɵɵtemplate(4, AdminStatsComponent_div_7_div_19_div_4_Template, 7, 9, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.data.recentMeetings);
} }
function AdminStatsComponent_div_7_div_21_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29)(2, "span", 30);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 31);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 32);
    i0.ɵɵelement(7, "div", 33);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.sourceLabel(s_r3.source));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r3.count);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", s_r3.count / ctx_r0.data.totals.members * 100, "%")("background", ctx_r0.sourceColor(s_r3.source));
} }
function AdminStatsComponent_div_7_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "h3", 18);
    i0.ɵɵtext(2, "Membres par source d'inscription");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 26);
    i0.ɵɵtemplate(4, AdminStatsComponent_div_7_div_21_div_4_Template, 8, 6, "div", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.data.membersBySource);
} }
function AdminStatsComponent_div_7_div_22_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 36);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r4.count);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("height", m_r4.count / ctx_r0.maxMonthCount * 100, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.monthLabel(m_r4.month));
} }
function AdminStatsComponent_div_7_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "h3", 18);
    i0.ɵɵtext(2, "Nouveaux membres (6 derniers mois)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 34);
    i0.ɵɵtemplate(4, AdminStatsComponent_div_7_div_22_div_4_Template, 7, 4, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.data.membersByMonth);
} }
function AdminStatsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AdminStatsComponent_div_7_div_1_Template, 5, 1, "div", 7);
    i0.ɵɵelementStart(2, "div", 8)(3, "div", 9)(4, "div", 10);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵtext(7, "Membres actifs");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 9)(9, "div", 10);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 11);
    i0.ɵɵtext(12, "R\u00E9unions organis\u00E9es");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 9)(14, "div", 10);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 11);
    i0.ɵɵtext(17, "Participations totales");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(18, AdminStatsComponent_div_7_div_18_Template, 6, 4, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, AdminStatsComponent_div_7_div_19_Template, 5, 1, "div", 13);
    i0.ɵɵelementStart(20, "div", 14);
    i0.ɵɵtemplate(21, AdminStatsComponent_div_7_div_21_Template, 5, 1, "div", 13)(22, AdminStatsComponent_div_7_div_22_Template, 5, 1, "div", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.data.isLive);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.data.totals.members);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.data.totals.meetings);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.data.totals.participations);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.data.totals.meetings > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.data.recentMeetings == null ? null : ctx_r0.data.recentMeetings.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.data.membersBySource == null ? null : ctx_r0.data.membersBySource.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.data.membersByMonth == null ? null : ctx_r0.data.membersByMonth.length);
} }
export class AdminStatsComponent {
    constructor() {
        this.api = inject(ApiService);
        this.data = null;
        this.loading = true;
    }
    ngOnInit() { this.load(); }
    load() {
        this.api.getStatsOverview().subscribe({
            next: (d) => { this.data = d; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    get maxParticipants() {
        var _a, _b;
        if (!((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.recentMeetings) === null || _b === void 0 ? void 0 : _b.length))
            return 1;
        return Math.max(...this.data.recentMeetings.map((m) => m.participants), 1);
    }
    barHeight(count) {
        return Math.round((count / this.maxParticipants) * 100);
    }
    formatDate(d) {
        return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
    }
    sourceLabel(s) {
        var _a;
        const map = {
            marathon: 'Marathon biblique',
            newsletter: 'Newsletter',
            registration: 'Inscription directe',
            invitation: 'Invitation',
        };
        return (_a = map[s]) !== null && _a !== void 0 ? _a : s;
    }
    sourceColor(s) {
        var _a;
        const map = {
            marathon: '#1D546C',
            newsletter: '#E8A838',
            registration: '#10b981',
            invitation: '#8b5cf6',
        };
        return (_a = map[s]) !== null && _a !== void 0 ? _a : '#6b7280';
    }
    monthLabel(m) {
        const [year, month] = m.split('-');
        return new Date(Number(year), Number(month) - 1).toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' });
    }
    get maxMonthCount() {
        var _a, _b;
        if (!((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.membersByMonth) === null || _b === void 0 ? void 0 : _b.length))
            return 1;
        return Math.max(...this.data.membersByMonth.map((m) => Number(m.count)), 1);
    }
}
AdminStatsComponent.ɵfac = function AdminStatsComponent_Factory(t) { return new (t || AdminStatsComponent)(); };
AdminStatsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminStatsComponent, selectors: [["app-admin-stats"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 8, vars: 2, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "btn-secondary", 3, "click"], ["class", "loading", 4, "ngIf"], [4, "ngIf"], [1, "loading"], ["class", "live-banner", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-value"], [1, "kpi-label"], ["class", "kpi-card", 4, "ngIf"], ["class", "chart-card", 4, "ngIf"], [1, "charts-row"], [1, "live-banner"], [1, "live-dot"], [1, "chart-card"], [1, "chart-title"], [1, "bar-chart"], ["class", "bar-item", 4, "ngFor", "ngForOf"], [1, "bar-item"], [1, "bar-wrap"], [1, "bar-value"], [1, "bar"], [1, "bar-label", 3, "title"], [1, "source-list"], ["class", "source-item", 4, "ngFor", "ngForOf"], [1, "source-item"], [1, "source-header"], [1, "source-label"], [1, "source-count"], [1, "source-bar-bg"], [1, "source-bar"], [1, "bar-chart", "bar-chart--small"], [1, "bar", "bar--accent"], [1, "bar-label"]], template: function AdminStatsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Statistiques");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function AdminStatsComponent_Template_button_click_4_listener() { return ctx.load(); });
        i0.ɵɵtext(5, "Actualiser");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, AdminStatsComponent_div_6_Template, 2, 0, "div", 4)(7, AdminStatsComponent_div_7_Template, 23, 8, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.data);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DecimalPipe], styles: ["@import '../../admin-shared.css';\n\n.live-banner[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px;\n  padding: 12px 18px; margin-bottom: 24px; font-size: 14px; color: #dc2626;\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 10px; height: 10px; border-radius: 50%; background: #ef4444;\n  animation: _ngcontent-%COMP%_blink 1.2s ease-in-out infinite; flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_blink { 0%,100%{opacity:1} 50%{opacity:.3} }\n\n\n\n.kpi-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; margin-bottom: 24px; }\n.kpi-card[_ngcontent-%COMP%] { background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; text-align: center; }\n.kpi-value[_ngcontent-%COMP%] { font-size: 32px; font-weight: 700; color: #1D546C; line-height: 1; }\n.kpi-label[_ngcontent-%COMP%] { font-size: 12px; color: #6b7280; margin-top: 6px; font-weight: 500; }\n\n\n\n.chart-card[_ngcontent-%COMP%] { background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 20px; }\n.chart-title[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #374151; margin: 0 0 20px; }\n\n.charts-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }\n\n\n\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-end; gap: 8px; height: 160px; padding-bottom: 24px; position: relative;\n  overflow-x: auto;\n}\n.bar-chart--small[_ngcontent-%COMP%] { height: 120px; }\n.bar-item[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; min-width: 36px; }\n.bar-wrap[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 120px; width: 100%; }\n.bar-chart--small[_ngcontent-%COMP%]   .bar-wrap[_ngcontent-%COMP%] { height: 80px; }\n.bar-value[_ngcontent-%COMP%] { font-size: 10px; color: #6b7280; font-weight: 600; margin-bottom: 2px; }\n.bar[_ngcontent-%COMP%] {\n  width: 100%; border-radius: 4px 4px 0 0; background: #1D546C;\n  transition: height 0.4s ease; min-height: 4px;\n}\n.bar--live[_ngcontent-%COMP%] { background: #ef4444; }\n.bar--ended[_ngcontent-%COMP%] { background: #1D546C; }\n.bar--accent[_ngcontent-%COMP%] { background: #E8A838; }\n.bar-label[_ngcontent-%COMP%] { font-size: 10px; color: #9ca3af; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 48px; }\n\n\n\n.source-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 14px; }\n.source-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; margin-bottom: 4px; }\n.source-label[_ngcontent-%COMP%] { font-size: 13px; color: #374151; }\n.source-count[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #1D546C; }\n.source-bar-bg[_ngcontent-%COMP%] { height: 8px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }\n.source-bar[_ngcontent-%COMP%] { height: 100%; border-radius: 4px; transition: width 0.4s; }\n\n@media (max-width: 700px) {\n  .charts-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminStatsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-stats', standalone: true, imports: [CommonModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Statistiques</h2>\n    <button class=\"btn-secondary\" (click)=\"load()\">Actualiser</button>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n\n  <div *ngIf=\"!loading && data\">\n\n    <!-- R\u00E9union en cours -->\n    <div class=\"live-banner\" *ngIf=\"data.isLive\">\n      <span class=\"live-dot\"></span>\n      R\u00E9union en cours : <strong>{{ data.liveMeetingTitle }}</strong>\n    </div>\n\n    <!-- Cartes totaux -->\n    <div class=\"kpi-grid\">\n      <div class=\"kpi-card\">\n        <div class=\"kpi-value\">{{ data.totals.members }}</div>\n        <div class=\"kpi-label\">Membres actifs</div>\n      </div>\n      <div class=\"kpi-card\">\n        <div class=\"kpi-value\">{{ data.totals.meetings }}</div>\n        <div class=\"kpi-label\">R\u00E9unions organis\u00E9es</div>\n      </div>\n      <div class=\"kpi-card\">\n        <div class=\"kpi-value\">{{ data.totals.participations }}</div>\n        <div class=\"kpi-label\">Participations totales</div>\n      </div>\n      <div class=\"kpi-card\" *ngIf=\"data.totals.meetings > 0\">\n        <div class=\"kpi-value\">{{ (data.totals.participations / data.totals.meetings) | number:'1.0-1' }}</div>\n        <div class=\"kpi-label\">Moyenne par r\u00E9union</div>\n      </div>\n    </div>\n\n    <!-- Graphique participations par r\u00E9union -->\n    <div class=\"chart-card\" *ngIf=\"data.recentMeetings?.length\">\n      <h3 class=\"chart-title\">Participants par r\u00E9union (8 derni\u00E8res semaines)</h3>\n      <div class=\"bar-chart\">\n        <div class=\"bar-item\" *ngFor=\"let m of data.recentMeetings\">\n          <div class=\"bar-wrap\">\n            <span class=\"bar-value\">{{ m.participants }}</span>\n            <div class=\"bar\" [style.height.%]=\"barHeight(m.participants)\"\n                 [class.bar--live]=\"m.status === 'live'\"\n                 [class.bar--ended]=\"m.status === 'ended'\">\n            </div>\n          </div>\n          <div class=\"bar-label\" [title]=\"m.title\">{{ formatDate(m.date) }}</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"charts-row\">\n\n      <!-- Membres par source -->\n      <div class=\"chart-card\" *ngIf=\"data.membersBySource?.length\">\n        <h3 class=\"chart-title\">Membres par source d'inscription</h3>\n        <div class=\"source-list\">\n          <div class=\"source-item\" *ngFor=\"let s of data.membersBySource\">\n            <div class=\"source-header\">\n              <span class=\"source-label\">{{ sourceLabel(s.source) }}</span>\n              <span class=\"source-count\">{{ s.count }}</span>\n            </div>\n            <div class=\"source-bar-bg\">\n              <div class=\"source-bar\"\n                   [style.width.%]=\"(s.count / data.totals.members) * 100\"\n                   [style.background]=\"sourceColor(s.source)\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Croissance membres par mois -->\n      <div class=\"chart-card\" *ngIf=\"data.membersByMonth?.length\">\n        <h3 class=\"chart-title\">Nouveaux membres (6 derniers mois)</h3>\n        <div class=\"bar-chart bar-chart--small\">\n          <div class=\"bar-item\" *ngFor=\"let m of data.membersByMonth\">\n            <div class=\"bar-wrap\">\n              <span class=\"bar-value\">{{ m.count }}</span>\n              <div class=\"bar bar--accent\" [style.height.%]=\"(m.count / maxMonthCount) * 100\"></div>\n            </div>\n            <div class=\"bar-label\">{{ monthLabel(m.month) }}</div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.live-banner {\n  display: flex; align-items: center; gap: 10px;\n  background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px;\n  padding: 12px 18px; margin-bottom: 24px; font-size: 14px; color: #dc2626;\n}\n.live-dot {\n  width: 10px; height: 10px; border-radius: 50%; background: #ef4444;\n  animation: blink 1.2s ease-in-out infinite; flex-shrink: 0;\n}\n@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }\n\n/* KPI */\n.kpi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; margin-bottom: 24px; }\n.kpi-card { background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; text-align: center; }\n.kpi-value { font-size: 32px; font-weight: 700; color: #1D546C; line-height: 1; }\n.kpi-label { font-size: 12px; color: #6b7280; margin-top: 6px; font-weight: 500; }\n\n/* Charts */\n.chart-card { background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 20px; }\n.chart-title { font-size: 14px; font-weight: 600; color: #374151; margin: 0 0 20px; }\n\n.charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }\n\n/* Bar chart */\n.bar-chart {\n  display: flex; align-items: flex-end; gap: 8px; height: 160px; padding-bottom: 24px; position: relative;\n  overflow-x: auto;\n}\n.bar-chart--small { height: 120px; }\n.bar-item { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; min-width: 36px; }\n.bar-wrap { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 120px; width: 100%; }\n.bar-chart--small .bar-wrap { height: 80px; }\n.bar-value { font-size: 10px; color: #6b7280; font-weight: 600; margin-bottom: 2px; }\n.bar {\n  width: 100%; border-radius: 4px 4px 0 0; background: #1D546C;\n  transition: height 0.4s ease; min-height: 4px;\n}\n.bar--live { background: #ef4444; }\n.bar--ended { background: #1D546C; }\n.bar--accent { background: #E8A838; }\n.bar-label { font-size: 10px; color: #9ca3af; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 48px; }\n\n/* Source list */\n.source-list { display: flex; flex-direction: column; gap: 14px; }\n.source-header { display: flex; justify-content: space-between; margin-bottom: 4px; }\n.source-label { font-size: 13px; color: #374151; }\n.source-count { font-size: 13px; font-weight: 600; color: #1D546C; }\n.source-bar-bg { height: 8px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }\n.source-bar { height: 100%; border-radius: 4px; transition: width 0.4s; }\n\n@media (max-width: 700px) {\n  .charts-row { grid-template-columns: 1fr; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminStatsComponent, { className: "AdminStatsComponent", filePath: "app\\admin\\pages\\stats\\stats.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=stats.component.js.map