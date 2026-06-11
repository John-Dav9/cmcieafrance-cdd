import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function ReplayComponent_div_1_p_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u00B7 ", ctx_r1.formatDate(ctx_r1.selected.publishedAt), "");
} }
function ReplayComponent_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ReplayComponent_div_1_p_5_span_2_Template, 2, 1, "span", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \uD83C\uDF99\uFE0F ", ctx_r1.selected.speakerName, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selected.publishedAt);
} }
function ReplayComponent_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selected.description);
} }
function ReplayComponent_div_1_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r3);
} }
function ReplayComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, ReplayComponent_div_1_div_11_span_1_Template, 2, 1, "span", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.selected.tags);
} }
function ReplayComponent_div_1_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function ReplayComponent_div_1_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.loadSummary()); });
    i0.ɵɵtext(1, " \uD83E\uDD16 G\u00E9n\u00E9rer un r\u00E9sum\u00E9 IA ");
    i0.ɵɵelementEnd();
} }
function ReplayComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtext(1, "\uD83E\uDD16 G\u00E9n\u00E9ration en cours...");
    i0.ɵɵelementEnd();
} }
function ReplayComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35);
    i0.ɵɵtext(2, "\uD83E\uDD16 R\u00E9sum\u00E9 IA");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.aiSummary.replace("\n", "<br>"), i0.ɵɵsanitizeHtml);
} }
function ReplayComponent_div_1_div_16_div_4_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 45);
} if (rf & 2) {
    const r_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", r_r6.thumbnailUrl, i0.ɵɵsanitizeUrl)("alt", r_r6.title);
} }
function ReplayComponent_div_1_div_16_div_4_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r6.speakerName);
} }
function ReplayComponent_div_1_div_16_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵlistener("click", function ReplayComponent_div_1_div_16_div_4_Template_div_click_0_listener() { const r_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.open(r_r6)); });
    i0.ɵɵtemplate(1, ReplayComponent_div_1_div_16_div_4_img_1_Template, 1, 2, "img", 41);
    i0.ɵɵelementStart(2, "div", 42)(3, "span", 43);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ReplayComponent_div_1_div_16_div_4_span_5_Template, 2, 1, "span", 44);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r6.thumbnailUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r6.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r6.speakerName);
} }
function ReplayComponent_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "h4");
    i0.ɵɵtext(2, "\u00C0 voir ensuite");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 38);
    i0.ɵɵtemplate(4, ReplayComponent_div_1_div_16_div_4_Template, 6, 3, "div", 39);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.recommendations);
} }
function ReplayComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "h2", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, ReplayComponent_div_1_p_5_Template, 3, 2, "p", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 16);
    i0.ɵɵlistener("click", function ReplayComponent_div_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(7, "\u2715 Fermer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 17);
    i0.ɵɵelement(9, "iframe", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ReplayComponent_div_1_p_10_Template, 2, 1, "p", 19)(11, ReplayComponent_div_1_div_11_Template, 2, 1, "div", 20);
    i0.ɵɵelementStart(12, "div", 21);
    i0.ɵɵtemplate(13, ReplayComponent_div_1_button_13_Template, 2, 0, "button", 22)(14, ReplayComponent_div_1_div_14_Template, 2, 0, "div", 23)(15, ReplayComponent_div_1_div_15_Template, 4, 1, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, ReplayComponent_div_1_div_16_Template, 5, 1, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.selected.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selected.speakerName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", ctx_r1.safeUrl, i0.ɵɵsanitizeResourceUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selected.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selected.tags == null ? null : ctx_r1.selected.tags.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.aiSummary && !ctx_r1.loadingSummary);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loadingSummary);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.aiSummary);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.recommendations.length);
} }
function ReplayComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function ReplayComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Aucun replay disponible", ctx_r1.search ? " pour cette recherche" : "", ".");
} }
function ReplayComponent_div_14_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 62);
} if (rf & 2) {
    const r_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", r_r8.thumbnailUrl, i0.ɵɵsanitizeUrl)("alt", r_r8.title);
} }
function ReplayComponent_div_14_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵtext(1, "\u271D");
    i0.ɵɵelementEnd();
} }
function ReplayComponent_div_14_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.formatDuration(r_r8.durationSeconds));
} }
function ReplayComponent_div_14_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\uD83C\uDF99\uFE0F ", r_r8.speakerName, "");
} }
function ReplayComponent_div_14_div_1_div_13_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r9);
} }
function ReplayComponent_div_14_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtemplate(1, ReplayComponent_div_14_div_1_div_13_span_1_Template, 2, 1, "span", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", r_r8.tags);
} }
function ReplayComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵlistener("click", function ReplayComponent_div_14_div_1_Template_div_click_0_listener() { const r_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.open(r_r8)); });
    i0.ɵɵelementStart(1, "div", 52);
    i0.ɵɵtemplate(2, ReplayComponent_div_14_div_1_img_2_Template, 1, 2, "img", 53)(3, ReplayComponent_div_14_div_1_div_3_Template, 2, 0, "div", 54)(4, ReplayComponent_div_14_div_1_span_4_Template, 2, 1, "span", 55);
    i0.ɵɵelementStart(5, "div", 56);
    i0.ɵɵtext(6, "\u25B6");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 57)(8, "h3", 58);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ReplayComponent_div_14_div_1_p_10_Template, 2, 1, "p", 59);
    i0.ɵɵelementStart(11, "p", 60);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, ReplayComponent_div_14_div_1_div_13_Template, 2, 1, "div", 61);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", r_r8.thumbnailUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !r_r8.thumbnailUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r8.durationSeconds);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(r_r8.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r8.speakerName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.formatDate(r_r8.publishedAt || r_r8.createdAt));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", r_r8.tags == null ? null : r_r8.tags.length);
} }
function ReplayComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtemplate(1, ReplayComponent_div_14_div_1_Template, 14, 7, "div", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.filtered);
} }
export class ReplayComponent {
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.replays = [];
        this.filtered = [];
        this.loading = true;
        this.search = '';
        this.selected = null;
        this.safeUrl = null;
        this.aiSummary = null;
        this.loadingSummary = false;
        this.recommendations = [];
        this.podcastUrl = `${environment.apiBase}/replays/podcast/feed.xml`;
    }
    ngOnInit() {
        this.http.get(`${environment.apiBase}/replays`).subscribe({
            next: (data) => { this.replays = data; this.filtered = data; this.loading = false; },
            error: () => { this.loading = false; },
        });
    }
    applySearch() {
        const q = this.search.toLowerCase();
        this.filtered = !q ? this.replays : this.replays.filter(r => {
            var _a, _b, _c, _d;
            return ((_a = r.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(q)) ||
                ((_b = r.speakerName) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(q)) ||
                ((_c = r.description) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(q)) ||
                ((_d = r.tags) !== null && _d !== void 0 ? _d : []).some((t) => t.toLowerCase().includes(q));
        });
    }
    open(r) {
        this.selected = r;
        this.safeUrl = this.buildEmbedUrl(r.videoUrl);
        this.aiSummary = null;
        this.recommendations = [];
        this.loadRecommendations(r.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    close() { this.selected = null; this.safeUrl = null; this.aiSummary = null; }
    loadSummary() {
        if (!this.selected)
            return;
        this.loadingSummary = true;
        this.http.post(`${environment.apiBase}/replays/${this.selected.id}/summarize`, {}).subscribe({
            next: r => { this.aiSummary = r.summary; this.loadingSummary = false; },
            error: () => { this.aiSummary = 'Résumé temporairement indisponible.'; this.loadingSummary = false; },
        });
    }
    loadRecommendations(id) {
        this.http.get(`${environment.apiBase}/replays/${id}/recommendations`).subscribe({
            next: r => this.recommendations = r,
        });
    }
    buildEmbedUrl(url) {
        if (!url)
            return null;
        // YouTube
        const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (yt)
            return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${yt[1]}?autoplay=1`);
        // Vimeo
        const vm = url.match(/vimeo\.com\/(\d+)/);
        if (vm)
            return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${vm[1]}?autoplay=1`);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    formatDuration(s) {
        if (!s)
            return '';
        const h = Math.floor(s / 3600);
        const m = Math.floor((s % 3600) / 60);
        const sec = s % 60;
        return h > 0 ? `${h}h${String(m).padStart(2, '0')}` : `${m}:${String(sec).padStart(2, '0')}`;
    }
    formatDate(d) {
        return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    }
}
ReplayComponent.ɵfac = function ReplayComponent_Factory(t) { return new (t || ReplayComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
ReplayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReplayComponent, selectors: [["app-replay"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 6, consts: [[1, "replay-page"], ["class", "player-wrap", 4, "ngIf"], [1, "page-header"], [1, "page-title"], [1, "page-sub"], ["target", "_blank", "title", "S'abonner au podcast RSS", 1, "podcast-link", 3, "href"], [1, "search-wrap"], ["type", "text", "placeholder", "Rechercher un message...", 1, "search-input", 3, "ngModelChange", "ngModel"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "player-wrap"], [1, "player-header"], [1, "player-info"], [1, "player-title"], ["class", "player-meta", 4, "ngIf"], [1, "close-player", 3, "click"], [1, "player-frame"], ["frameborder", "0", "allowfullscreen", "", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", 3, "src"], ["class", "player-desc", 4, "ngIf"], ["class", "player-tags", 4, "ngIf"], [1, "ai-summary-section"], ["class", "ai-btn", 3, "click", 4, "ngIf"], ["class", "ai-loading", 4, "ngIf"], ["class", "ai-summary", 4, "ngIf"], ["class", "recommendations", 4, "ngIf"], [1, "player-meta"], [4, "ngIf"], [1, "player-desc"], [1, "player-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "ai-btn", 3, "click"], [1, "ai-loading"], [1, "ai-summary"], [1, "ai-summary-header"], [1, "ai-summary-content", 3, "innerHTML"], [1, "recommendations"], [1, "rec-grid"], ["class", "rec-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "rec-card", 3, "click"], [3, "src", "alt", 4, "ngIf"], [1, "rec-info"], [1, "rec-title"], ["class", "rec-speaker", 4, "ngIf"], [3, "src", "alt"], [1, "rec-speaker"], [1, "loading"], [1, "empty"], [1, "grid"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "click"], [1, "thumb"], ["loading", "lazy", 3, "src", "alt", 4, "ngIf"], ["class", "thumb-placeholder", 4, "ngIf"], ["class", "duration", 4, "ngIf"], [1, "play-overlay"], [1, "card-body"], [1, "card-title"], ["class", "card-meta", 4, "ngIf"], [1, "card-date"], ["class", "card-tags", 4, "ngIf"], ["loading", "lazy", 3, "src", "alt"], [1, "thumb-placeholder"], [1, "duration"], [1, "card-meta"], [1, "card-tags"]], template: function ReplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵtemplate(1, ReplayComponent_div_1_Template, 17, 9, "div", 1);
        i0.ɵɵelementStart(2, "div", 2)(3, "div")(4, "h1", 3);
        i0.ɵɵtext(5, "\uD83D\uDCFA Biblioth\u00E8que de replay");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 4);
        i0.ɵɵtext(7, "Retrouvez tous les messages et pr\u00E9dications de CMCIEA France");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "a", 5);
        i0.ɵɵtext(9, " \uD83C\uDF99\uFE0F Podcast RSS ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "div", 6)(11, "input", 7);
        i0.ɵɵtwoWayListener("ngModelChange", function ReplayComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
        i0.ɵɵlistener("ngModelChange", function ReplayComponent_Template_input_ngModelChange_11_listener() { return ctx.applySearch(); });
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(12, ReplayComponent_div_12_Template, 2, 0, "div", 8)(13, ReplayComponent_div_13_Template, 3, 1, "div", 9)(14, ReplayComponent_div_14_Template, 2, 1, "div", 10);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.selected && ctx.safeUrl);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("href", ctx.podcastUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(3);
        i0.ɵɵtwoWayProperty("ngModel", ctx.search);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.filtered.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.filtered.length > 0);
    } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, FormsModule, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: ["$primary[_ngcontent-%COMP%]:   #1D546C[_ngcontent-%COMP%];\n$primary-dark[_ngcontent-%COMP%]:   #123648[_ngcontent-%COMP%];\n$accent[_ngcontent-%COMP%]:   #E8A838[_ngcontent-%COMP%];\n$bg[_ngcontent-%COMP%]:   #F7F5F0[_ngcontent-%COMP%];\n$white[_ngcontent-%COMP%]:   #ffffff[_ngcontent-%COMP%];\n$text[_ngcontent-%COMP%]:   #1a1a2e[_ngcontent-%COMP%];\n$muted[_ngcontent-%COMP%]:   #6b7280[_ngcontent-%COMP%];\n$border[_ngcontent-%COMP%]:   #e5e7eb[_ngcontent-%COMP%];\n\n.replay-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 20px 64px;\n  font-family: 'Inter', 'DM Sans', 'Segoe UI', sans-serif;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Lecteur[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.player-wrap[_ngcontent-%COMP%] {\n  background: $primary-dark;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 40px;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.2);\n}\n\n.player-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  gap: 16px;\n}\n\n.player-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: $white;\n  margin: 0 0 4px;\n}\n\n.player-meta[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba($white, 0.6);\n  margin: 0;\n}\n\n.close-player[_ngcontent-%COMP%] {\n  background: rgba($white, 0.1);\n  border: none;\n  color: rgba($white, 0.7);\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  &:hover { background: rgba($white, 0.2); }\n}\n\n.player-frame[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  iframe {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.player-desc[_ngcontent-%COMP%] {\n  padding: 16px 24px 0;\n  font-size: 14px;\n  color: rgba($white, 0.7);\n  line-height: 1.6;\n  margin: 0;\n}\n\n.player-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  padding: 12px 24px 20px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   En-t\u00EAte[_ngcontent-%COMP%]   page[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: $text;\n  margin: 0 0 4px;\n}\n\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: $muted;\n  margin: 0;\n}\n\n.search-wrap[_ngcontent-%COMP%] { flex-shrink: 0; }\n\n.search-input[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid $border;\n  border-radius: 10px;\n  font-size: 14px;\n  width: 240px;\n  outline: none;\n  transition: border-color 0.2s;\n  &:focus { border-color: $primary; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Grille[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: $white;\n  border-radius: 12px;\n  border: 1px solid $border;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  &:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 8px 24px rgba(0,0,0,0.1);\n    .play-overlay { opacity: 1; }\n  }\n}\n\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  background: $primary-dark;\n  overflow: hidden;\n  img {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n.thumb-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  color: rgba($white, 0.3);\n}\n\n.play-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0,0,0,0.35);\n  color: $white;\n  font-size: 36px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.duration[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  background: rgba(0,0,0,0.75);\n  color: $white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n\n.card-body[_ngcontent-%COMP%] { padding: 16px; }\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: $text;\n  margin: 0 0 6px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-meta[_ngcontent-%COMP%] { font-size: 13px; color: $primary; margin: 0 0 4px; }\n.card-date[_ngcontent-%COMP%] { font-size: 12px; color: $muted; margin: 0 0 8px; }\n\n.card-tags[_ngcontent-%COMP%] { display: flex; gap: 4px; flex-wrap: wrap; }\n\n.tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 2px 8px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border-radius: 12px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   R\u00E9sum\u00E9[_ngcontent-%COMP%]   IA[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ai-summary-section[_ngcontent-%COMP%] { margin-top: 20px; }\n\n.ai-btn[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: rgba(#7c3aed, 0.08);\n  border: 1px solid rgba(#7c3aed, 0.25);\n  color: #7c3aed;\n  border-radius: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  &:hover { background: rgba(#7c3aed, 0.16); }\n}\n\n.ai-loading[_ngcontent-%COMP%] { color: #7c3aed; font-size: 13px; font-style: italic; padding: 8px 0; }\n\n.ai-summary[_ngcontent-%COMP%] {\n  background: rgba(#7c3aed, 0.05);\n  border: 1px solid rgba(#7c3aed, 0.15);\n  border-radius: 10px;\n  padding: 16px;\n  margin-top: 8px;\n}\n.ai-summary-header[_ngcontent-%COMP%] { font-size: 12px; font-weight: 700; color: #7c3aed; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; }\n.ai-summary-content[_ngcontent-%COMP%] { font-size: 14px; color: #374151; line-height: 1.8; white-space: pre-line; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Recommandations[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.recommendations[_ngcontent-%COMP%] { margin-top: 24px; padding-top: 20px; border-top: 1px solid $border; }\n.recommendations[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: 14px; font-weight: 700; color: $text; margin-bottom: 12px; }\n\n.rec-grid[_ngcontent-%COMP%] { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 6px; }\n.rec-card[_ngcontent-%COMP%] {\n  display: flex; gap: 10px; align-items: center;\n  background: #f9fafb; border-radius: 8px; padding: 8px 12px;\n  cursor: pointer; flex-shrink: 0; max-width: 220px;\n  border: 1px solid $border; transition: background 0.15s;\n  &:hover { background: #f0f4ff; }\n  img { width: 60px; height: 40px; object-fit: cover; border-radius: 4px; flex-shrink: 0; }\n}\n.rec-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n.rec-title[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; color: $text; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }\n.rec-speaker[_ngcontent-%COMP%] { font-size: 11px; color: $muted; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Podcast[_ngcontent-%COMP%]   link[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.podcast-link[_ngcontent-%COMP%] {\n  display: inline-flex; align-items: center; gap: 6px;\n  font-size: 12px; color: $primary; text-decoration: none;\n  border: 1px solid rgba($primary, 0.3); padding: 4px 10px;\n  border-radius: 14px; margin-top: 6px; transition: background 0.15s;\n  &:hover { background: rgba($primary, 0.06); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   \u00C9tats[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.loading[_ngcontent-%COMP%] { text-align: center; color: $muted; padding: 48px; }\n.empty[_ngcontent-%COMP%] { text-align: center; color: $muted; padding: 48px; font-size: 15px; }\n\n@media (max-width: 640px) {\n  .page-header[_ngcontent-%COMP%] { flex-direction: column; }\n  .search-input[_ngcontent-%COMP%] { width: 100%; }\n  .player-title[_ngcontent-%COMP%] { font-size: 16px; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReplayComponent, [{
        type: Component,
        args: [{ selector: 'app-replay', standalone: true, imports: [CommonModule, FormsModule], template: "<section class=\"replay-page\">\n\n  <!-- Lecteur actif -->\n  <div class=\"player-wrap\" *ngIf=\"selected && safeUrl\">\n    <div class=\"player-header\">\n      <div class=\"player-info\">\n        <h2 class=\"player-title\">{{ selected.title }}</h2>\n        <p class=\"player-meta\" *ngIf=\"selected.speakerName\">\n          \uD83C\uDF99\uFE0F {{ selected.speakerName }}\n          <span *ngIf=\"selected.publishedAt\"> \u00B7 {{ formatDate(selected.publishedAt) }}</span>\n        </p>\n      </div>\n      <button class=\"close-player\" (click)=\"close()\">\u2715 Fermer</button>\n    </div>\n    <div class=\"player-frame\">\n      <iframe [src]=\"safeUrl\" frameborder=\"0\" allowfullscreen\n              allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\">\n      </iframe>\n    </div>\n    <p class=\"player-desc\" *ngIf=\"selected.description\">{{ selected.description }}</p>\n    <div class=\"player-tags\" *ngIf=\"selected.tags?.length\">\n      <span class=\"tag\" *ngFor=\"let t of selected.tags\">{{ t }}</span>\n    </div>\n\n    <!-- R\u00E9sum\u00E9 IA -->\n    <div class=\"ai-summary-section\">\n      <button class=\"ai-btn\" (click)=\"loadSummary()\" *ngIf=\"!aiSummary && !loadingSummary\">\n        \uD83E\uDD16 G\u00E9n\u00E9rer un r\u00E9sum\u00E9 IA\n      </button>\n      <div class=\"ai-loading\" *ngIf=\"loadingSummary\">\uD83E\uDD16 G\u00E9n\u00E9ration en cours...</div>\n      <div class=\"ai-summary\" *ngIf=\"aiSummary\">\n        <div class=\"ai-summary-header\">\uD83E\uDD16 R\u00E9sum\u00E9 IA</div>\n        <div class=\"ai-summary-content\" [innerHTML]=\"aiSummary.replace('\\n', '<br>')\"></div>\n      </div>\n    </div>\n\n    <!-- Recommandations -->\n    <div class=\"recommendations\" *ngIf=\"recommendations.length\">\n      <h4>\u00C0 voir ensuite</h4>\n      <div class=\"rec-grid\">\n        <div class=\"rec-card\" *ngFor=\"let r of recommendations\" (click)=\"open(r)\">\n          <img *ngIf=\"r.thumbnailUrl\" [src]=\"r.thumbnailUrl\" [alt]=\"r.title\">\n          <div class=\"rec-info\">\n            <span class=\"rec-title\">{{ r.title }}</span>\n            <span class=\"rec-speaker\" *ngIf=\"r.speakerName\">{{ r.speakerName }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- En-t\u00EAte -->\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"page-title\">\uD83D\uDCFA Biblioth\u00E8que de replay</h1>\n      <p class=\"page-sub\">Retrouvez tous les messages et pr\u00E9dications de CMCIEA France</p>\n      <a [href]=\"podcastUrl\" target=\"_blank\" class=\"podcast-link\" title=\"S'abonner au podcast RSS\">\n        \uD83C\uDF99\uFE0F Podcast RSS\n      </a>\n    </div>\n    <div class=\"search-wrap\">\n      <input type=\"text\" class=\"search-input\" placeholder=\"Rechercher un message...\"\n             [(ngModel)]=\"search\" (ngModelChange)=\"applySearch()\" />\n    </div>\n  </div>\n\n  <!-- Chargement -->\n  <div class=\"loading\" *ngIf=\"loading\">Chargement...</div>\n\n  <!-- Vide -->\n  <div class=\"empty\" *ngIf=\"!loading && filtered.length === 0\">\n    <p>Aucun replay disponible{{ search ? ' pour cette recherche' : '' }}.</p>\n  </div>\n\n  <!-- Grille -->\n  <div class=\"grid\" *ngIf=\"!loading && filtered.length > 0\">\n    <div class=\"card\" *ngFor=\"let r of filtered\" (click)=\"open(r)\">\n      <div class=\"thumb\">\n        <img *ngIf=\"r.thumbnailUrl\" [src]=\"r.thumbnailUrl\" [alt]=\"r.title\" loading=\"lazy\" />\n        <div class=\"thumb-placeholder\" *ngIf=\"!r.thumbnailUrl\">\u271D</div>\n        <span class=\"duration\" *ngIf=\"r.durationSeconds\">{{ formatDuration(r.durationSeconds) }}</span>\n        <div class=\"play-overlay\">\u25B6</div>\n      </div>\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">{{ r.title }}</h3>\n        <p class=\"card-meta\" *ngIf=\"r.speakerName\">\uD83C\uDF99\uFE0F {{ r.speakerName }}</p>\n        <p class=\"card-date\">{{ formatDate(r.publishedAt || r.createdAt) }}</p>\n        <div class=\"card-tags\" *ngIf=\"r.tags?.length\">\n          <span class=\"tag\" *ngFor=\"let t of r.tags\">{{ t }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n", styles: ["$primary: #1D546C;\n$primary-dark: #123648;\n$accent: #E8A838;\n$bg: #F7F5F0;\n$white: #ffffff;\n$text: #1a1a2e;\n$muted: #6b7280;\n$border: #e5e7eb;\n\n.replay-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 32px 20px 64px;\n  font-family: 'Inter', 'DM Sans', 'Segoe UI', sans-serif;\n}\n\n// \u2500\u2500 Lecteur \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.player-wrap {\n  background: $primary-dark;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 40px;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.2);\n}\n\n.player-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  gap: 16px;\n}\n\n.player-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: $white;\n  margin: 0 0 4px;\n}\n\n.player-meta {\n  font-size: 14px;\n  color: rgba($white, 0.6);\n  margin: 0;\n}\n\n.close-player {\n  background: rgba($white, 0.1);\n  border: none;\n  color: rgba($white, 0.7);\n  padding: 6px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  &:hover { background: rgba($white, 0.2); }\n}\n\n.player-frame {\n  position: relative;\n  padding-bottom: 56.25%;\n  iframe {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.player-desc {\n  padding: 16px 24px 0;\n  font-size: 14px;\n  color: rgba($white, 0.7);\n  line-height: 1.6;\n  margin: 0;\n}\n\n.player-tags {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  padding: 12px 24px 20px;\n}\n\n// \u2500\u2500 En-t\u00EAte page \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n}\n\n.page-title {\n  font-size: 26px;\n  font-weight: 700;\n  color: $text;\n  margin: 0 0 4px;\n}\n\n.page-sub {\n  font-size: 15px;\n  color: $muted;\n  margin: 0;\n}\n\n.search-wrap { flex-shrink: 0; }\n\n.search-input {\n  padding: 10px 16px;\n  border: 1px solid $border;\n  border-radius: 10px;\n  font-size: 14px;\n  width: 240px;\n  outline: none;\n  transition: border-color 0.2s;\n  &:focus { border-color: $primary; }\n}\n\n// \u2500\u2500 Grille \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n.card {\n  background: $white;\n  border-radius: 12px;\n  border: 1px solid $border;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  &:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 8px 24px rgba(0,0,0,0.1);\n    .play-overlay { opacity: 1; }\n  }\n}\n\n.thumb {\n  position: relative;\n  padding-bottom: 56.25%;\n  background: $primary-dark;\n  overflow: hidden;\n  img {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n.thumb-placeholder {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  color: rgba($white, 0.3);\n}\n\n.play-overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0,0,0,0.35);\n  color: $white;\n  font-size: 36px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.duration {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  background: rgba(0,0,0,0.75);\n  color: $white;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n\n.card-body { padding: 16px; }\n\n.card-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: $text;\n  margin: 0 0 6px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-meta { font-size: 13px; color: $primary; margin: 0 0 4px; }\n.card-date { font-size: 12px; color: $muted; margin: 0 0 8px; }\n\n.card-tags { display: flex; gap: 4px; flex-wrap: wrap; }\n\n.tag {\n  font-size: 11px;\n  padding: 2px 8px;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border-radius: 12px;\n}\n\n// \u2500\u2500 R\u00E9sum\u00E9 IA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ai-summary-section { margin-top: 20px; }\n\n.ai-btn {\n  padding: 9px 18px;\n  background: rgba(#7c3aed, 0.08);\n  border: 1px solid rgba(#7c3aed, 0.25);\n  color: #7c3aed;\n  border-radius: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  &:hover { background: rgba(#7c3aed, 0.16); }\n}\n\n.ai-loading { color: #7c3aed; font-size: 13px; font-style: italic; padding: 8px 0; }\n\n.ai-summary {\n  background: rgba(#7c3aed, 0.05);\n  border: 1px solid rgba(#7c3aed, 0.15);\n  border-radius: 10px;\n  padding: 16px;\n  margin-top: 8px;\n}\n.ai-summary-header { font-size: 12px; font-weight: 700; color: #7c3aed; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; }\n.ai-summary-content { font-size: 14px; color: #374151; line-height: 1.8; white-space: pre-line; }\n\n// \u2500\u2500 Recommandations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.recommendations { margin-top: 24px; padding-top: 20px; border-top: 1px solid $border; }\n.recommendations h4 { font-size: 14px; font-weight: 700; color: $text; margin-bottom: 12px; }\n\n.rec-grid { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 6px; }\n.rec-card {\n  display: flex; gap: 10px; align-items: center;\n  background: #f9fafb; border-radius: 8px; padding: 8px 12px;\n  cursor: pointer; flex-shrink: 0; max-width: 220px;\n  border: 1px solid $border; transition: background 0.15s;\n  &:hover { background: #f0f4ff; }\n  img { width: 60px; height: 40px; object-fit: cover; border-radius: 4px; flex-shrink: 0; }\n}\n.rec-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n.rec-title { font-size: 12px; font-weight: 600; color: $text; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }\n.rec-speaker { font-size: 11px; color: $muted; }\n\n// \u2500\u2500 Podcast link \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.podcast-link {\n  display: inline-flex; align-items: center; gap: 6px;\n  font-size: 12px; color: $primary; text-decoration: none;\n  border: 1px solid rgba($primary, 0.3); padding: 4px 10px;\n  border-radius: 14px; margin-top: 6px; transition: background 0.15s;\n  &:hover { background: rgba($primary, 0.06); }\n}\n\n// \u2500\u2500 \u00C9tats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.loading { text-align: center; color: $muted; padding: 48px; }\n.empty { text-align: center; color: $muted; padding: 48px; font-size: 15px; }\n\n@media (max-width: 640px) {\n  .page-header { flex-direction: column; }\n  .search-input { width: 100%; }\n  .player-title { font-size: 16px; }\n}\n"] }]
    }], () => [{ type: i1.HttpClient }, { type: i2.DomSanitizer }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReplayComponent, { className: "ReplayComponent", filePath: "app\\pages\\replay\\replay.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=replay.component.js.map