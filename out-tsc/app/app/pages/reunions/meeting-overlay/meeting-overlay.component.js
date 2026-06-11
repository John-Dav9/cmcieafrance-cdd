import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SPIRITUAL_BACKGROUNDS } from '../spiritual-backgrounds';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/meeting-socket.service";
import * as i2 from "../../../core/services/member-auth.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
const _c0 = (a0, a1) => [a0, a1];
function MeetingOverlayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1, " \uD83D\uDD34 Diffusion en direct\n");
    i0.ɵɵelementEnd();
} }
function MeetingOverlayComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12);
    i0.ɵɵtext(2, "\u271D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 15);
    i0.ɵɵlistener("click", function MeetingOverlayComponent_div_1_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dismissSpiritual()); });
    i0.ɵɵtext(8, "\u2715");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.spiritualEvent.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\"", ctx_r1.spiritualEvent.content, "\"");
} }
function MeetingOverlayComponent_div_1_div_2_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const line_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(line_r4);
} }
function MeetingOverlayComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 18);
    i0.ɵɵtemplate(4, MeetingOverlayComponent_div_1_div_2_p_4_Template, 2, 1, "p", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function MeetingOverlayComponent_div_1_div_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dismissSpiritual()); });
    i0.ɵɵtext(6, "\u2715");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83C\uDFB5 ", ctx_r1.spiritualEvent.title, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.lyricsLines(ctx_r1.spiritualEvent.content));
} }
function MeetingOverlayComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21);
    i0.ɵɵtext(2, "\uD83D\uDCE2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function MeetingOverlayComponent_div_1_div_3_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dismissSpiritual()); });
    i0.ɵɵtext(6, "\u2715");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.spiritualEvent.content);
} }
function MeetingOverlayComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, MeetingOverlayComponent_div_1_div_1_Template, 9, 2, "div", 8)(2, MeetingOverlayComponent_div_1_div_2_Template, 7, 2, "div", 9)(3, MeetingOverlayComponent_div_1_div_3_Template, 7, 1, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c0, "spiritual-overlay--" + ctx_r1.spiritualEvent.type, ctx_r1.backgroundClass));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.spiritualEvent.type === "verse");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.spiritualEvent.type === "lyrics");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.spiritualEvent.type === "announcement");
} }
function MeetingOverlayComponent_div_2_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function MeetingOverlayComponent_div_2_div_6_button_1_Template_button_click_0_listener() { const i_r7 = i0.ɵɵrestoreView(_r6).index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.votePoll(i_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r8, " ");
} }
function MeetingOverlayComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, MeetingOverlayComponent_div_2_div_6_button_1_Template, 2, 1, "button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.activePoll.options);
} }
function MeetingOverlayComponent_div_2_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 38);
    i0.ɵɵelement(4, "div", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 40);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("selected", i_r10 === ctx_r1.selectedOption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r9.option);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", r_r9.percent, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", r_r9.percent, "%");
} }
function MeetingOverlayComponent_div_2_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtext(1, "Sondage termin\u00E9");
    i0.ɵɵelementEnd();
} }
function MeetingOverlayComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtemplate(1, MeetingOverlayComponent_div_2_div_7_div_1_Template, 7, 6, "div", 33);
    i0.ɵɵelementStart(2, "div", 34);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MeetingOverlayComponent_div_2_div_7_div_4_Template, 2, 0, "div", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pollResults == null ? null : ctx_r1.pollResults.results);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", (tmp_3_0 = ctx_r1.pollResults == null ? null : ctx_r1.pollResults.totalVotes) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0, " vote(s)");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pollClosed);
} }
function MeetingOverlayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    i0.ɵɵtext(3, "\uD83D\uDCCA Sondage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 26);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, MeetingOverlayComponent_div_2_div_6_Template, 2, 1, "div", 27)(7, MeetingOverlayComponent_div_2_div_7_Template, 5, 3, "div", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.activePoll.question);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedOption === null && !ctx_r1.pollClosed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedOption !== null || ctx_r1.pollClosed);
} }
function MeetingOverlayComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.prayerRequests.length);
} }
function MeetingOverlayComponent_div_6_div_11_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const req_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", req_r13.supporters.join(", "), " prie(nt) ");
} }
function MeetingOverlayComponent_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 53);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 54)(6, "button", 45);
    i0.ɵɵlistener("click", function MeetingOverlayComponent_div_6_div_11_Template_button_click_6_listener() { const req_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.supportPrayer(req_r13)); });
    i0.ɵɵtext(7, "\uD83D\uDE4F Je prie avec vous");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, MeetingOverlayComponent_div_6_div_11_span_8_Template, 2, 1, "span", 55);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const req_r13 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(req_r13.author);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(req_r13.text);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", req_r13.supporters.length);
} }
function MeetingOverlayComponent_div_6_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 57);
    i0.ɵɵtext(1, "Aucun sujet de pri\u00E8re pour l'instant");
    i0.ɵɵelementEnd();
} }
function MeetingOverlayComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "div", 44)(2, "span");
    i0.ɵɵtext(3, "\uD83D\uDE4F Fil de pri\u00E8re");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 45);
    i0.ɵɵlistener("click", function MeetingOverlayComponent_div_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.togglePrayerPanel()); });
    i0.ɵɵtext(5, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 46)(7, "textarea", 47);
    i0.ɵɵtwoWayListener("ngModelChange", function MeetingOverlayComponent_div_6_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prayerText, $event) || (ctx_r1.prayerText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 45);
    i0.ɵɵlistener("click", function MeetingOverlayComponent_div_6_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitPrayer()); });
    i0.ɵɵtext(9, "Envoyer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 48);
    i0.ɵɵtemplate(11, MeetingOverlayComponent_div_6_div_11_Template, 9, 3, "div", 49)(12, MeetingOverlayComponent_div_6_p_12_Template, 2, 0, "p", 50);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prayerText);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.prayerRequests);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.prayerRequests.length === 0);
} }
export class MeetingOverlayComponent {
    constructor(socket, memberAuth) {
        this.socket = socket;
        this.memberAuth = memberAuth;
        this.meetingId = '';
        this.isAdmin = false;
        // Spiritual event
        this.spiritualEvent = null;
        // Poll
        this.activePoll = null;
        this.pollResults = null;
        this.selectedOption = null;
        this.pollClosed = false;
        // Prayer
        this.prayerRequests = [];
        this.prayerText = '';
        this.showPrayerPanel = false;
        // Streaming banner
        this.streamingActive = false;
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.socket.spiritualEvent$.subscribe(e => { this.spiritualEvent = e; }), this.socket.spiritualDismiss$.subscribe(() => { this.spiritualEvent = null; }), this.socket.pollStarted$.subscribe(p => {
            this.activePoll = p;
            this.pollResults = null;
            this.selectedOption = null;
            this.pollClosed = false;
        }), this.socket.pollResults$.subscribe(r => { this.pollResults = r; }), this.socket.pollClosed$.subscribe(r => {
            this.pollResults = r;
            this.pollClosed = true;
            setTimeout(() => { this.activePoll = null; this.pollClosed = false; }, 8000);
        }), this.socket.prayerReceived$.subscribe(p => {
            this.prayerRequests.unshift(Object.assign(Object.assign({}, p), { supporters: [] }));
            if (this.prayerRequests.length > 20)
                this.prayerRequests.pop();
        }), this.socket.prayerSupport$.subscribe(s => {
            const req = this.prayerRequests.find(p => p.id === s.prayerId);
            if (req && !req.supporters.includes(s.author))
                req.supporters.push(s.author);
        }), this.socket.streamingStatus$.subscribe(s => {
            this.streamingActive = s.status === 'starting' || s.status === 'active';
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    dismissSpiritual() {
        this.spiritualEvent = null;
    }
    votePoll(index) {
        if (this.selectedOption !== null || this.pollClosed || !this.activePoll)
            return;
        this.selectedOption = index;
        this.socket.answerPoll(this.meetingId, this.activePoll.id, index);
    }
    submitPrayer() {
        const member = this.memberAuth.member;
        const author = member ? `${member.firstName} ${member.lastName}` : 'Anonyme';
        if (!this.prayerText.trim())
            return;
        this.socket.sendPrayerRequest(this.meetingId, author, this.prayerText.trim());
        this.prayerText = '';
        this.showPrayerPanel = false;
    }
    supportPrayer(req) {
        const member = this.memberAuth.member;
        const author = member ? `${member.firstName}` : 'Quelqu\'un';
        this.socket.joinPrayer(this.meetingId, req.id, author);
    }
    togglePrayerPanel() { this.showPrayerPanel = !this.showPrayerPanel; }
    lyricsLines(content) {
        return content.split('\n').filter(l => l.trim());
    }
    get backgroundClass() {
        var _a, _b;
        return (_b = (_a = SPIRITUAL_BACKGROUNDS.find(background => { var _a; return background.id === ((_a = this.spiritualEvent) === null || _a === void 0 ? void 0 : _a.backgroundId); })) === null || _a === void 0 ? void 0 : _a.className) !== null && _b !== void 0 ? _b : 'background-ocean';
    }
}
MeetingOverlayComponent.ɵfac = function MeetingOverlayComponent_Factory(t) { return new (t || MeetingOverlayComponent)(i0.ɵɵdirectiveInject(i1.MeetingSocketService), i0.ɵɵdirectiveInject(i2.MemberAuthService)); };
MeetingOverlayComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeetingOverlayComponent, selectors: [["app-meeting-overlay"]], inputs: { meetingId: "meetingId", isAdmin: "isAdmin" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 5, consts: [["class", "streaming-banner", 4, "ngIf"], ["class", "spiritual-overlay", 3, "ngClass", 4, "ngIf"], ["class", "poll-overlay", 4, "ngIf"], ["title", "Soumettre un sujet de pri\u00E8re", 1, "prayer-fab", 3, "click"], ["class", "prayer-badge", 4, "ngIf"], ["class", "prayer-panel", 4, "ngIf"], [1, "streaming-banner"], [1, "spiritual-overlay", 3, "ngClass"], ["class", "spiritual-content verse", 4, "ngIf"], ["class", "spiritual-content lyrics", 4, "ngIf"], ["class", "spiritual-content announcement", 4, "ngIf"], [1, "spiritual-content", "verse"], [1, "verse-icon"], [1, "verse-reference"], [1, "verse-text"], [1, "dismiss-btn", 3, "click"], [1, "spiritual-content", "lyrics"], [1, "lyrics-title"], [1, "lyrics-lines"], [4, "ngFor", "ngForOf"], [1, "spiritual-content", "announcement"], [1, "announcement-icon"], [1, "announcement-text"], [1, "poll-overlay"], [1, "poll-card"], [1, "poll-header"], [1, "poll-question"], ["class", "poll-options", 4, "ngIf"], ["class", "poll-results", 4, "ngIf"], [1, "poll-options"], ["class", "poll-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "poll-option", 3, "click"], [1, "poll-results"], ["class", "poll-result-row", 3, "selected", 4, "ngFor", "ngForOf"], [1, "poll-total"], ["class", "poll-closed-msg", 4, "ngIf"], [1, "poll-result-row"], [1, "poll-result-label"], [1, "poll-result-bar"], [1, "poll-result-fill"], [1, "poll-result-pct"], [1, "poll-closed-msg"], [1, "prayer-badge"], [1, "prayer-panel"], [1, "prayer-panel-header"], [3, "click"], [1, "prayer-input-area"], ["placeholder", "Soumettez votre sujet de pri\u00E8re...", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "prayer-list"], ["class", "prayer-item", 4, "ngFor", "ngForOf"], ["class", "prayer-empty", 4, "ngIf"], [1, "prayer-item"], [1, "prayer-author"], [1, "prayer-text"], [1, "prayer-support"], ["class", "support-count", 4, "ngIf"], [1, "support-count"], [1, "prayer-empty"]], template: function MeetingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MeetingOverlayComponent_div_0_Template, 2, 0, "div", 0)(1, MeetingOverlayComponent_div_1_Template, 4, 7, "div", 1)(2, MeetingOverlayComponent_div_2_Template, 8, 3, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵlistener("click", function MeetingOverlayComponent_Template_div_click_3_listener() { return ctx.togglePrayerPanel(); });
        i0.ɵɵtext(4, " \uD83D\uDE4F ");
        i0.ɵɵtemplate(5, MeetingOverlayComponent_span_5_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, MeetingOverlayComponent_div_6_Template, 13, 3, "div", 5);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.streamingActive);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.spiritualEvent);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.activePoll);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.prayerRequests.length);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.showPrayerPanel);
    } }, dependencies: [CommonModule, i3.NgClass, i3.NgForOf, i3.NgIf, FormsModule, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel], styles: ["$accent[_ngcontent-%COMP%]:   #E8A838[_ngcontent-%COMP%];\n$dark[_ngcontent-%COMP%]:   #202124[_ngcontent-%COMP%];\n$white[_ngcontent-%COMP%]:   #ffffff[_ngcontent-%COMP%];\n$muted[_ngcontent-%COMP%]:   rgba(255[_ngcontent-%COMP%], 255[_ngcontent-%COMP%], 255[_ngcontent-%COMP%], 0.6)[_ngcontent-%COMP%];\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Banni\u00E8re[_ngcontent-%COMP%]   streaming[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.streaming-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 80px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(#ea4335, 0.9);\n  color: $white;\n  padding: 6px 18px;\n  border-radius: 0 0 8px 8px;\n  font-size: 13px;\n  font-weight: 600;\n  z-index: 9997;\n  letter-spacing: 0.5px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   \u00C9v\u00E9nement[_ngcontent-%COMP%]   spirituel[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.spiritual-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 108px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10001;\n  max-width: 860px;\n  width: calc(100vw - 40px);\n  animation: slideUp 0.3s ease;\n  pointer-events: none;\n}\n\n.spiritual-content[_ngcontent-%COMP%] {\n  min-height: 190px;\n  padding: 28px 56px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  border: 1px solid rgba($accent, 0.4);\n  border-radius: 20px;\n  color: $white;\n  position: relative;\n  background: rgba(13,17,23,.9);\n  box-shadow: 0 18px 60px rgba(0,0,0,0.58);\n  pointer-events: auto;\n  isolation: isolate;\n\n  &::before {\n    content: \"\"; position: absolute; inset: 0; z-index: -2;\n    background: inherit;\n  }\n  &::after {\n    content: \"\"; position: absolute; inset: 0; z-index: -1;\n    background: linear-gradient(90deg, rgba(4,8,13,.76), rgba(4,8,13,.38), rgba(4,8,13,.7));\n  }\n}\n\n.background-ocean[_ngcontent-%COMP%]   .spiritual-content[_ngcontent-%COMP%] { background: linear-gradient(145deg, #68b9cf, #185f7f 58%, #082f49); }\n.background-dawn[_ngcontent-%COMP%]   .spiritual-content[_ngcontent-%COMP%] { background: linear-gradient(145deg, #f6c177, #b65d66 52%, #46335d); }\n.background-midnight[_ngcontent-%COMP%]   .spiritual-content[_ngcontent-%COMP%] { background: radial-gradient(circle at 70% 15%, #526585, #111827 48%, #05070c); }\n.background-forest[_ngcontent-%COMP%]   .spiritual-content[_ngcontent-%COMP%] { background: linear-gradient(145deg, #658568, #234a3a 52%, #102a25); }\n.background-parchment[_ngcontent-%COMP%]   .spiritual-content[_ngcontent-%COMP%] { background: linear-gradient(145deg, #e5cf9d, #a57d45 55%, #5d4024); }\n.background-royal[_ngcontent-%COMP%]   .spiritual-content[_ngcontent-%COMP%] { background: linear-gradient(145deg, #59429a, #2c235e 52%, #16132e); }\n\n.dismiss-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px; right: 12px;\n  background: rgba($white,0.1);\n  border: none;\n  color: $muted;\n  width: 24px; height: 24px;\n  border-radius: 50%;\n  font-size: 13px;\n  cursor: pointer;\n  &:hover { background: rgba($white,0.2); color: $white; }\n}\n\n//[_ngcontent-%COMP%]   Verset\n.verse-icon[_ngcontent-%COMP%] { font-size: 30px; text-align: center; margin-bottom: 8px; color: #f6c76d; }\n.verse-reference[_ngcontent-%COMP%] { font-size: 16px; font-weight: 800; color: #f6c76d; text-align: center; margin-bottom: 12px; }\n.verse-text[_ngcontent-%COMP%] { font-size: clamp(18px, 2vw, 27px); line-height: 1.55; text-align: center; font-family: Georgia, serif; color: $white; }\n\n//[_ngcontent-%COMP%]   Cantique\n.lyrics-title[_ngcontent-%COMP%] { font-size: 16px; font-weight: 800; color: #f6c76d; margin-bottom: 14px; text-align: center; }\n.lyrics-lines[_ngcontent-%COMP%] { text-align: center; }\n.lyrics-lines[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: clamp(17px, 1.8vw, 24px); line-height: 1.65; margin: 0; color: $white; }\n\n//[_ngcontent-%COMP%]   Annonce\n.announcement-icon[_ngcontent-%COMP%] { font-size: 24px; text-align: center; margin-bottom: 8px; }\n.announcement-text[_ngcontent-%COMP%] { font-size: clamp(18px, 2vw, 27px); line-height: 1.55; text-align: center; color: $white; font-weight: 650; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Sondage[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.poll-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  top: 90px;\n  z-index: 9996;\n  width: 280px;\n  animation: _ngcontent-%COMP%_slideIn 0.25s ease;\n}\n\n.poll-card[_ngcontent-%COMP%] {\n  background: rgba(#28292c, 0.97);\n  border: 1px solid rgba($white,0.12);\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 8px 24px rgba(0,0,0,0.5);\n  color: $white;\n}\n\n.poll-header[_ngcontent-%COMP%] { font-size: 11px; font-weight: 700; color: $accent; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px; }\n.poll-question[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; margin-bottom: 12px; line-height: 1.4; }\n\n.poll-options[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n\n.poll-option[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  background: rgba($white,0.07);\n  border: 1px solid rgba($white,0.12);\n  color: $white;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n  &:hover { background: rgba($accent,0.2); border-color: rgba($accent,0.4); }\n}\n\n.poll-result-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }\n.poll-result-row.selected[_ngcontent-%COMP%]   .poll-result-label[_ngcontent-%COMP%] { color: $accent; font-weight: 600; }\n.poll-result-label[_ngcontent-%COMP%] { font-size: 12px; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.poll-result-bar[_ngcontent-%COMP%] { width: 80px; height: 6px; background: rgba($white,0.1); border-radius: 3px; overflow: hidden; }\n.poll-result-fill[_ngcontent-%COMP%] { height: 100%; background: $accent; border-radius: 3px; transition: width 0.4s ease; }\n.poll-result-pct[_ngcontent-%COMP%] { font-size: 11px; color: $muted; width: 32px; text-align: right; }\n.poll-total[_ngcontent-%COMP%] { font-size: 11px; color: $muted; margin-top: 4px; }\n.poll-closed-msg[_ngcontent-%COMP%] { font-size: 12px; color: rgba($accent,0.8); margin-top: 6px; font-weight: 600; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Bouton[_ngcontent-%COMP%]   fil[_ngcontent-%COMP%]   de[_ngcontent-%COMP%]   pri\u00E8re[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.prayer-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 94px;\n  left: 24px;\n  width: 48px; height: 48px;\n  border-radius: 50%;\n  background: rgba(#1D546C, 0.9);\n  border: 1px solid rgba($accent, 0.35);\n  color: $white;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 9996;\n  box-shadow: 0 4px 16px rgba(0,0,0,0.4);\n  transition: transform 0.2s, background 0.2s;\n  &:hover { transform: scale(1.1); background: rgba(#2a7a9a, 0.9); }\n}\n\n.prayer-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px; right: -4px;\n  background: $accent;\n  color: #1a1a2e;\n  font-size: 10px;\n  font-weight: 700;\n  width: 18px; height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Panneau[_ngcontent-%COMP%]   fil[_ngcontent-%COMP%]   de[_ngcontent-%COMP%]   pri\u00E8re[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.prayer-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 152px;\n  left: 24px;\n  width: 300px;\n  max-height: 420px;\n  background: rgba(#28292c, 0.97);\n  border: 1px solid rgba($white,0.12);\n  border-radius: 12px;\n  z-index: 9996;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.5);\n  animation: slideUp 0.25s ease;\n}\n\n.prayer-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba($white,0.08);\n  color: $white;\n  font-size: 14px;\n  font-weight: 600;\n  button { background: none; border: none; color: $muted; font-size: 16px; cursor: pointer; }\n}\n\n.prayer-input-area[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid rgba($white,0.08);\n  textarea {\n    width: 100%;\n    background: rgba($white,0.07);\n    border: 1px solid rgba($white,0.12);\n    color: $white;\n    border-radius: 6px;\n    padding: 8px;\n    font-size: 13px;\n    resize: none;\n    margin-bottom: 6px;\n    &::placeholder { color: $muted; }\n  }\n  button {\n    width: 100%;\n    padding: 8px;\n    background: rgba($accent,0.2);\n    border: 1px solid rgba($accent,0.4);\n    color: $accent;\n    border-radius: 6px;\n    font-size: 13px;\n    cursor: pointer;\n    &:hover { background: rgba($accent,0.35); }\n  }\n}\n\n.prayer-list[_ngcontent-%COMP%] { flex: 1; overflow-y: auto; padding: 10px 14px; }\n.prayer-item[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba($white,0.06);\n  &:last-child { border-bottom: none; }\n}\n.prayer-author[_ngcontent-%COMP%] { font-size: 11px; font-weight: 700; color: $accent; margin-bottom: 3px; }\n.prayer-text[_ngcontent-%COMP%] { font-size: 13px; color: rgba($white,0.85); line-height: 1.4; margin-bottom: 6px; }\n.prayer-support[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;\n  button { font-size: 11px; padding: 3px 8px; background: rgba($white,0.07); border: 1px solid rgba($white,0.12); color: $muted; border-radius: 4px; cursor: pointer; &:hover { color: $white; } }\n}\n.support-count[_ngcontent-%COMP%] { font-size: 11px; color: $muted; font-style: italic; }\n.prayer-empty[_ngcontent-%COMP%] { font-size: 12px; color: $muted; text-align: center; padding: 16px 0; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Animations[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@keyframes[_ngcontent-%COMP%]   slideUp[_ngcontent-%COMP%] {\n  from { opacity: 0; transform: translate(-50%, 16px); }\n  to   { opacity: 1; transform: translate(-50%, 0); }\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from { opacity: 0; transform: translateX(16px); }\n  to   { opacity: 1; transform: translateX(0); }\n}\n\n@media (max-width: 900px) {\n  .streaming-banner[_ngcontent-%COMP%] { top: 64px; border-radius: 0 0 10px 10px; }\n  .spiritual-overlay[_ngcontent-%COMP%] {\n    bottom: 86px;\n    width: calc(100vw - 20px);\n  }\n  .spiritual-content[_ngcontent-%COMP%] { min-height: 150px; padding: 20px 26px; border-radius: 16px; }\n  .verse-text[_ngcontent-%COMP%], .lyrics-lines[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 14px; line-height: 1.6; }\n  .poll-overlay[_ngcontent-%COMP%] {\n    top: auto; right: 10px; bottom: 88px;\n    width: calc(100vw - 20px);\n  }\n  .poll-card[_ngcontent-%COMP%] { border-radius: 14px; }\n  .prayer-fab[_ngcontent-%COMP%] {\n    left: 12px; bottom: 91px; width: 44px; height: 44px;\n  }\n  .prayer-panel[_ngcontent-%COMP%] {\n    left: 8px; right: 8px; bottom: 88px;\n    width: auto; max-height: 58vh; border-radius: 16px;\n  }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeetingOverlayComponent, [{
        type: Component,
        args: [{ selector: 'app-meeting-overlay', standalone: true, imports: [CommonModule, FormsModule], template: "<!-- \u2550\u2550 BANNI\u00C8RE STREAMING \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div class=\"streaming-banner\" *ngIf=\"streamingActive\">\n  \uD83D\uDD34 Diffusion en direct\n</div>\n\n<!-- \u2550\u2550 \u00C9V\u00C9NEMENT SPIRITUEL (verset / cantique / annonce) \u2550\u2550\u2550\u2550 -->\n<div class=\"spiritual-overlay\"\n     *ngIf=\"spiritualEvent\"\n     [ngClass]=\"['spiritual-overlay--' + spiritualEvent.type, backgroundClass]\">\n\n  <!-- Verset biblique -->\n  <div *ngIf=\"spiritualEvent.type === 'verse'\" class=\"spiritual-content verse\">\n    <div class=\"verse-icon\">\u271D</div>\n    <div class=\"verse-reference\">{{ spiritualEvent.title }}</div>\n    <div class=\"verse-text\">\"{{ spiritualEvent.content }}\"</div>\n    <button class=\"dismiss-btn\" (click)=\"dismissSpiritual()\">\u2715</button>\n  </div>\n\n  <!-- Paroles de cantique -->\n  <div *ngIf=\"spiritualEvent.type === 'lyrics'\" class=\"spiritual-content lyrics\">\n    <div class=\"lyrics-title\">\uD83C\uDFB5 {{ spiritualEvent.title }}</div>\n    <div class=\"lyrics-lines\">\n      <p *ngFor=\"let line of lyricsLines(spiritualEvent.content)\">{{ line }}</p>\n    </div>\n    <button class=\"dismiss-btn\" (click)=\"dismissSpiritual()\">\u2715</button>\n  </div>\n\n  <!-- Annonce -->\n  <div *ngIf=\"spiritualEvent.type === 'announcement'\" class=\"spiritual-content announcement\">\n    <div class=\"announcement-icon\">\uD83D\uDCE2</div>\n    <div class=\"announcement-text\">{{ spiritualEvent.content }}</div>\n    <button class=\"dismiss-btn\" (click)=\"dismissSpiritual()\">\u2715</button>\n  </div>\n</div>\n\n<!-- \u2550\u2550 SONDAGE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div class=\"poll-overlay\" *ngIf=\"activePoll\">\n  <div class=\"poll-card\">\n    <div class=\"poll-header\">\uD83D\uDCCA Sondage</div>\n    <div class=\"poll-question\">{{ activePoll.question }}</div>\n\n    <!-- Avant vote -->\n    <div *ngIf=\"selectedOption === null && !pollClosed\" class=\"poll-options\">\n      <button class=\"poll-option\"\n              *ngFor=\"let opt of activePoll.options; let i = index\"\n              (click)=\"votePoll(i)\">\n        {{ opt }}\n      </button>\n    </div>\n\n    <!-- R\u00E9sultats en temps r\u00E9el -->\n    <div *ngIf=\"selectedOption !== null || pollClosed\" class=\"poll-results\">\n      <div class=\"poll-result-row\" *ngFor=\"let r of pollResults?.results; let i = index\"\n           [class.selected]=\"i === selectedOption\">\n        <div class=\"poll-result-label\">{{ r.option }}</div>\n        <div class=\"poll-result-bar\">\n          <div class=\"poll-result-fill\" [style.width.%]=\"r.percent\"></div>\n        </div>\n        <div class=\"poll-result-pct\">{{ r.percent }}%</div>\n      </div>\n      <div class=\"poll-total\">{{ pollResults?.totalVotes ?? 0 }} vote(s)</div>\n      <div *ngIf=\"pollClosed\" class=\"poll-closed-msg\">Sondage termin\u00E9</div>\n    </div>\n  </div>\n</div>\n\n<!-- \u2550\u2550 BOUTON FIL DE PRI\u00C8RE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div class=\"prayer-fab\" (click)=\"togglePrayerPanel()\" title=\"Soumettre un sujet de pri\u00E8re\">\n  \uD83D\uDE4F\n  <span class=\"prayer-badge\" *ngIf=\"prayerRequests.length\">{{ prayerRequests.length }}</span>\n</div>\n\n<!-- \u2550\u2550 PANNEAU FIL DE PRI\u00C8RE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div class=\"prayer-panel\" *ngIf=\"showPrayerPanel\">\n  <div class=\"prayer-panel-header\">\n    <span>\uD83D\uDE4F Fil de pri\u00E8re</span>\n    <button (click)=\"togglePrayerPanel()\">\u2715</button>\n  </div>\n\n  <div class=\"prayer-input-area\">\n    <textarea [(ngModel)]=\"prayerText\" placeholder=\"Soumettez votre sujet de pri\u00E8re...\" rows=\"2\"></textarea>\n    <button (click)=\"submitPrayer()\">Envoyer</button>\n  </div>\n\n  <div class=\"prayer-list\">\n    <div class=\"prayer-item\" *ngFor=\"let req of prayerRequests\">\n      <div class=\"prayer-author\">{{ req.author }}</div>\n      <div class=\"prayer-text\">{{ req.text }}</div>\n      <div class=\"prayer-support\">\n        <button (click)=\"supportPrayer(req)\">\uD83D\uDE4F Je prie avec vous</button>\n        <span *ngIf=\"req.supporters.length\" class=\"support-count\">\n          {{ req.supporters.join(', ') }} prie(nt)\n        </span>\n      </div>\n    </div>\n    <p class=\"prayer-empty\" *ngIf=\"prayerRequests.length === 0\">Aucun sujet de pri\u00E8re pour l'instant</p>\n  </div>\n</div>\n", styles: ["$accent:  #E8A838;\n$dark:    #202124;\n$white:   #ffffff;\n$muted:   rgba(255,255,255,0.6);\n\n// \u2500\u2500 Banni\u00E8re streaming \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.streaming-banner {\n  position: fixed;\n  top: 80px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(#ea4335, 0.9);\n  color: $white;\n  padding: 6px 18px;\n  border-radius: 0 0 8px 8px;\n  font-size: 13px;\n  font-weight: 600;\n  z-index: 9997;\n  letter-spacing: 0.5px;\n}\n\n// \u2500\u2500 \u00C9v\u00E9nement spirituel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.spiritual-overlay {\n  position: fixed;\n  bottom: 108px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10001;\n  max-width: 860px;\n  width: calc(100vw - 40px);\n  animation: slideUp 0.3s ease;\n  pointer-events: none;\n}\n\n.spiritual-content {\n  min-height: 190px;\n  padding: 28px 56px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  border: 1px solid rgba($accent, 0.4);\n  border-radius: 20px;\n  color: $white;\n  position: relative;\n  background: rgba(13,17,23,.9);\n  box-shadow: 0 18px 60px rgba(0,0,0,0.58);\n  pointer-events: auto;\n  isolation: isolate;\n\n  &::before {\n    content: \"\"; position: absolute; inset: 0; z-index: -2;\n    background: inherit;\n  }\n  &::after {\n    content: \"\"; position: absolute; inset: 0; z-index: -1;\n    background: linear-gradient(90deg, rgba(4,8,13,.76), rgba(4,8,13,.38), rgba(4,8,13,.7));\n  }\n}\n\n.background-ocean .spiritual-content { background: linear-gradient(145deg, #68b9cf, #185f7f 58%, #082f49); }\n.background-dawn .spiritual-content { background: linear-gradient(145deg, #f6c177, #b65d66 52%, #46335d); }\n.background-midnight .spiritual-content { background: radial-gradient(circle at 70% 15%, #526585, #111827 48%, #05070c); }\n.background-forest .spiritual-content { background: linear-gradient(145deg, #658568, #234a3a 52%, #102a25); }\n.background-parchment .spiritual-content { background: linear-gradient(145deg, #e5cf9d, #a57d45 55%, #5d4024); }\n.background-royal .spiritual-content { background: linear-gradient(145deg, #59429a, #2c235e 52%, #16132e); }\n\n.dismiss-btn {\n  position: absolute;\n  top: 10px; right: 12px;\n  background: rgba($white,0.1);\n  border: none;\n  color: $muted;\n  width: 24px; height: 24px;\n  border-radius: 50%;\n  font-size: 13px;\n  cursor: pointer;\n  &:hover { background: rgba($white,0.2); color: $white; }\n}\n\n// Verset\n.verse-icon { font-size: 30px; text-align: center; margin-bottom: 8px; color: #f6c76d; }\n.verse-reference { font-size: 16px; font-weight: 800; color: #f6c76d; text-align: center; margin-bottom: 12px; }\n.verse-text { font-size: clamp(18px, 2vw, 27px); line-height: 1.55; text-align: center; font-family: Georgia, serif; color: $white; }\n\n// Cantique\n.lyrics-title { font-size: 16px; font-weight: 800; color: #f6c76d; margin-bottom: 14px; text-align: center; }\n.lyrics-lines { text-align: center; }\n.lyrics-lines p { font-size: clamp(17px, 1.8vw, 24px); line-height: 1.65; margin: 0; color: $white; }\n\n// Annonce\n.announcement-icon { font-size: 24px; text-align: center; margin-bottom: 8px; }\n.announcement-text { font-size: clamp(18px, 2vw, 27px); line-height: 1.55; text-align: center; color: $white; font-weight: 650; }\n\n// \u2500\u2500 Sondage \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.poll-overlay {\n  position: fixed;\n  right: 20px;\n  top: 90px;\n  z-index: 9996;\n  width: 280px;\n  animation: slideIn 0.25s ease;\n}\n\n.poll-card {\n  background: rgba(#28292c, 0.97);\n  border: 1px solid rgba($white,0.12);\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 8px 24px rgba(0,0,0,0.5);\n  color: $white;\n}\n\n.poll-header { font-size: 11px; font-weight: 700; color: $accent; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px; }\n.poll-question { font-size: 14px; font-weight: 600; margin-bottom: 12px; line-height: 1.4; }\n\n.poll-options { display: flex; flex-direction: column; gap: 6px; }\n\n.poll-option {\n  padding: 9px 12px;\n  background: rgba($white,0.07);\n  border: 1px solid rgba($white,0.12);\n  color: $white;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n  &:hover { background: rgba($accent,0.2); border-color: rgba($accent,0.4); }\n}\n\n.poll-result-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }\n.poll-result-row.selected .poll-result-label { color: $accent; font-weight: 600; }\n.poll-result-label { font-size: 12px; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.poll-result-bar { width: 80px; height: 6px; background: rgba($white,0.1); border-radius: 3px; overflow: hidden; }\n.poll-result-fill { height: 100%; background: $accent; border-radius: 3px; transition: width 0.4s ease; }\n.poll-result-pct { font-size: 11px; color: $muted; width: 32px; text-align: right; }\n.poll-total { font-size: 11px; color: $muted; margin-top: 4px; }\n.poll-closed-msg { font-size: 12px; color: rgba($accent,0.8); margin-top: 6px; font-weight: 600; }\n\n// \u2500\u2500 Bouton fil de pri\u00E8re \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.prayer-fab {\n  position: fixed;\n  bottom: 94px;\n  left: 24px;\n  width: 48px; height: 48px;\n  border-radius: 50%;\n  background: rgba(#1D546C, 0.9);\n  border: 1px solid rgba($accent, 0.35);\n  color: $white;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 9996;\n  box-shadow: 0 4px 16px rgba(0,0,0,0.4);\n  transition: transform 0.2s, background 0.2s;\n  &:hover { transform: scale(1.1); background: rgba(#2a7a9a, 0.9); }\n}\n\n.prayer-badge {\n  position: absolute;\n  top: -4px; right: -4px;\n  background: $accent;\n  color: #1a1a2e;\n  font-size: 10px;\n  font-weight: 700;\n  width: 18px; height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n// \u2500\u2500 Panneau fil de pri\u00E8re \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.prayer-panel {\n  position: fixed;\n  bottom: 152px;\n  left: 24px;\n  width: 300px;\n  max-height: 420px;\n  background: rgba(#28292c, 0.97);\n  border: 1px solid rgba($white,0.12);\n  border-radius: 12px;\n  z-index: 9996;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.5);\n  animation: slideUp 0.25s ease;\n}\n\n.prayer-panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  border-bottom: 1px solid rgba($white,0.08);\n  color: $white;\n  font-size: 14px;\n  font-weight: 600;\n  button { background: none; border: none; color: $muted; font-size: 16px; cursor: pointer; }\n}\n\n.prayer-input-area {\n  padding: 10px 14px;\n  border-bottom: 1px solid rgba($white,0.08);\n  textarea {\n    width: 100%;\n    background: rgba($white,0.07);\n    border: 1px solid rgba($white,0.12);\n    color: $white;\n    border-radius: 6px;\n    padding: 8px;\n    font-size: 13px;\n    resize: none;\n    margin-bottom: 6px;\n    &::placeholder { color: $muted; }\n  }\n  button {\n    width: 100%;\n    padding: 8px;\n    background: rgba($accent,0.2);\n    border: 1px solid rgba($accent,0.4);\n    color: $accent;\n    border-radius: 6px;\n    font-size: 13px;\n    cursor: pointer;\n    &:hover { background: rgba($accent,0.35); }\n  }\n}\n\n.prayer-list { flex: 1; overflow-y: auto; padding: 10px 14px; }\n.prayer-item {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba($white,0.06);\n  &:last-child { border-bottom: none; }\n}\n.prayer-author { font-size: 11px; font-weight: 700; color: $accent; margin-bottom: 3px; }\n.prayer-text { font-size: 13px; color: rgba($white,0.85); line-height: 1.4; margin-bottom: 6px; }\n.prayer-support {\n  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;\n  button { font-size: 11px; padding: 3px 8px; background: rgba($white,0.07); border: 1px solid rgba($white,0.12); color: $muted; border-radius: 4px; cursor: pointer; &:hover { color: $white; } }\n}\n.support-count { font-size: 11px; color: $muted; font-style: italic; }\n.prayer-empty { font-size: 12px; color: $muted; text-align: center; padding: 16px 0; }\n\n// \u2500\u2500 Animations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@keyframes slideUp {\n  from { opacity: 0; transform: translate(-50%, 16px); }\n  to   { opacity: 1; transform: translate(-50%, 0); }\n}\n\n@keyframes slideIn {\n  from { opacity: 0; transform: translateX(16px); }\n  to   { opacity: 1; transform: translateX(0); }\n}\n\n@media (max-width: 900px) {\n  .streaming-banner { top: 64px; border-radius: 0 0 10px 10px; }\n  .spiritual-overlay {\n    bottom: 86px;\n    width: calc(100vw - 20px);\n  }\n  .spiritual-content { min-height: 150px; padding: 20px 26px; border-radius: 16px; }\n  .verse-text, .lyrics-lines p { font-size: 14px; line-height: 1.6; }\n  .poll-overlay {\n    top: auto; right: 10px; bottom: 88px;\n    width: calc(100vw - 20px);\n  }\n  .poll-card { border-radius: 14px; }\n  .prayer-fab {\n    left: 12px; bottom: 91px; width: 44px; height: 44px;\n  }\n  .prayer-panel {\n    left: 8px; right: 8px; bottom: 88px;\n    width: auto; max-height: 58vh; border-radius: 16px;\n  }\n}\n"] }]
    }], () => [{ type: i1.MeetingSocketService }, { type: i2.MemberAuthService }], { meetingId: [{
            type: Input
        }], isAdmin: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MeetingOverlayComponent, { className: "MeetingOverlayComponent", filePath: "app\\pages\\reunions\\meeting-overlay\\meeting-overlay.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=meeting-overlay.component.js.map