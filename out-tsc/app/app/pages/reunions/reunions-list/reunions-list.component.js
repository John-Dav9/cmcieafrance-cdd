import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { JoinModalComponent } from '../join-modal/join-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/reunions.service";
import * as i2 from "../../../core/services/member-auth.service";
import * as i3 from "../../../core/services/auth.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
function ReunionsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Chargement des r\u00E9unions...");
    i0.ɵɵelementEnd()();
} }
function ReunionsListComponent_ng_container_2_div_1_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" \uD83D\uDC65 ", ctx_r2.current.participantCount, " participant", ctx_r2.current.participantCount > 1 ? "s" : "", " ");
} }
function ReunionsListComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "div", 23);
    i0.ɵɵelement(2, "span", 24);
    i0.ɵɵtext(3, " EN COURS ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 26);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ReunionsListComponent_ng_container_2_div_1_p_8_Template, 2, 2, "p", 27);
    i0.ɵɵelementStart(9, "button", 28);
    i0.ɵɵlistener("click", function ReunionsListComponent_ng_container_2_div_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.joinMeeting(ctx_r2.current.id)); });
    i0.ɵɵtext(10, " \u25B6\u00A0\u00A0REJOINDRE ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.current.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Depuis ", ctx_r2.formatTime(ctx_r2.current.startTime), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.current.participantCount > 0);
} }
function ReunionsListComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div", 31);
    i0.ɵɵtext(2, "\uD83D\uDD4A\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Aucune r\u00E9union en ce moment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "La prochaine r\u00E9union est affich\u00E9e ci-dessous.");
    i0.ɵɵelementEnd()();
} }
function ReunionsListComponent_ng_container_2_div_3_div_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵtext(1, "Aujourd'hui");
    i0.ɵɵelementEnd();
} }
function ReunionsListComponent_ng_container_2_div_3_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.formatDate(m_r4.startTime));
} }
function ReunionsListComponent_ng_container_2_div_3_div_4_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(m_r4.description);
} }
function ReunionsListComponent_ng_container_2_div_3_div_4_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 48);
    i0.ɵɵtext(1, "Public");
    i0.ɵɵelementEnd();
} }
function ReunionsListComponent_ng_container_2_div_3_div_4_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 49);
    i0.ɵɵtext(1, "Membres");
    i0.ɵɵelementEnd();
} }
function ReunionsListComponent_ng_container_2_div_3_div_4_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function ReunionsListComponent_ng_container_2_div_3_div_4_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const m_r4 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.joinMeeting(m_r4.id)); });
    i0.ɵɵtext(1, " Rejoindre ");
    i0.ɵɵelementEnd();
} }
function ReunionsListComponent_ng_container_2_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37);
    i0.ɵɵtemplate(2, ReunionsListComponent_ng_container_2_div_3_div_4_span_2_Template, 2, 0, "span", 38)(3, ReunionsListComponent_ng_container_2_div_3_div_4_span_3_Template, 2, 1, "span", 2);
    i0.ɵɵelementStart(4, "span", 39);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 40)(7, "p", 41);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ReunionsListComponent_ng_container_2_div_3_div_4_p_9_Template, 2, 1, "p", 42)(10, ReunionsListComponent_ng_container_2_div_3_div_4_span_10_Template, 2, 0, "span", 43)(11, ReunionsListComponent_ng_container_2_div_3_div_4_span_11_Template, 2, 0, "span", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, ReunionsListComponent_ng_container_2_div_3_div_4_button_12_Template, 2, 0, "button", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isToday(m_r4.startTime));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isToday(m_r4.startTime));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.formatTime(m_r4.startTime));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r4.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r4.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r4.isPublic);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !m_r4.isPublic);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isToday(m_r4.startTime));
} }
function ReunionsListComponent_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "h3", 33);
    i0.ɵɵtext(2, "R\u00E9unions \u00E0 venir");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 34);
    i0.ɵɵtemplate(4, ReunionsListComponent_ng_container_2_div_3_div_4_Template, 13, 8, "div", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r2.upcoming);
} }
function ReunionsListComponent_ng_container_2_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtext(1, "Chargement du calendrier\u2026");
    i0.ɵɵelementEnd();
} }
function ReunionsListComponent_ng_container_2_div_24_article_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function ReunionsListComponent_ng_container_2_div_24_article_1_button_6_Template_button_click_0_listener() { const meeting_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.isToday(meeting_r7.startTime) && ctx_r2.joinMeeting(meeting_r7.id)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const meeting_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("calendar-event--live", meeting_r7.status === "live");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.formatTime(meeting_r7.startTime));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", meeting_r7.title, " ");
} }
function ReunionsListComponent_ng_container_2_div_24_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 54)(1, "div", 55)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, ReunionsListComponent_ng_container_2_div_24_article_1_button_6_Template, 4, 4, "button", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("outside", !day_r8.inCurrentMonth)("today", ctx_r2.isCurrentDay(day_r8.date));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.dayLabel(day_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(day_r8.date.getDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", day_r8.meetings);
} }
function ReunionsListComponent_ng_container_2_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵtemplate(1, ReunionsListComponent_ng_container_2_div_24_article_1_Template, 7, 7, "article", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("calendar-grid--week", ctx_r2.calendarView === "week");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.calendarDays);
} }
function ReunionsListComponent_ng_container_2_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "p");
    i0.ɵɵtext(2, "Aucune r\u00E9union programm\u00E9e pour le moment.");
    i0.ɵɵelementEnd()();
} }
function ReunionsListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ReunionsListComponent_ng_container_2_div_1_Template, 11, 3, "div", 7)(2, ReunionsListComponent_ng_container_2_div_2_Template, 7, 0, "div", 8)(3, ReunionsListComponent_ng_container_2_div_3_Template, 5, 1, "div", 9);
    i0.ɵɵelementStart(4, "section", 10)(5, "div", 11)(6, "div")(7, "span", 12);
    i0.ɵɵtext(8, "Calendrier");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h3");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 13)(12, "button", 14);
    i0.ɵɵlistener("click", function ReunionsListComponent_ng_container_2_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setCalendarView("month")); });
    i0.ɵɵtext(13, "Mois");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 14);
    i0.ɵɵlistener("click", function ReunionsListComponent_ng_container_2_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setCalendarView("week")); });
    i0.ɵɵtext(15, "Semaine");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 15)(17, "button", 16);
    i0.ɵɵlistener("click", function ReunionsListComponent_ng_container_2_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.navigateCalendar(-1)); });
    i0.ɵɵtext(18, "\u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 17);
    i0.ɵɵlistener("click", function ReunionsListComponent_ng_container_2_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.goToToday()); });
    i0.ɵɵtext(20, "Aujourd\u2019hui");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 18);
    i0.ɵɵlistener("click", function ReunionsListComponent_ng_container_2_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.navigateCalendar(1)); });
    i0.ɵɵtext(22, "\u203A");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(23, ReunionsListComponent_ng_container_2_div_23_Template, 2, 0, "div", 19)(24, ReunionsListComponent_ng_container_2_div_24_Template, 2, 3, "div", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(25, ReunionsListComponent_ng_container_2_div_25_Template, 3, 0, "div", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.current);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.current);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.upcoming.length > 0);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.calendarTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r2.calendarView === "month");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r2.calendarView === "week");
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r2.calendarLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.calendarLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.upcoming.length === 0 && !ctx_r2.current);
} }
function ReunionsListComponent_app_join_modal_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-join-modal", 59);
    i0.ɵɵlistener("authSuccess", function ReunionsListComponent_app_join_modal_3_Template_app_join_modal_authSuccess_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onAuthSuccess()); })("close", function ReunionsListComponent_app_join_modal_3_Template_app_join_modal_close_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onModalClose()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("meetingId", ctx_r2.selectedMeetingId)("publicMeeting", ctx_r2.selectedMeetingPublic);
} }
function ReunionsListComponent_div_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "Votre demande a \u00E9t\u00E9 transmise \u00E0 la r\u00E9gie. Vous entrerez automatiquement d\u00E8s qu\u2019un mod\u00E9rateur vous aura admis.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 65);
    i0.ɵɵelement(4, "span")(5, "span")(6, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function ReunionsListComponent_div_4_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "La r\u00E9gie n\u2019a pas autoris\u00E9 cette demande d\u2019acc\u00E8s.");
    i0.ɵɵelementEnd();
} }
function ReunionsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "section", 61)(2, "div", 62);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 63);
    i0.ɵɵtext(5, "Salle d\u2019attente");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ReunionsListComponent_div_4_ng_container_8_Template, 7, 0, "ng-container", 2)(9, ReunionsListComponent_div_4_p_9_Template, 2, 0, "p", 2);
    i0.ɵɵelementStart(10, "button", 64);
    i0.ɵɵlistener("click", function ReunionsListComponent_div_4_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancelWaiting()); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("waiting-card__mark--rejected", ctx_r2.waitingRejected);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.waitingRejected ? "\u00D7" : "\u231B", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.waitingMeeting.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.waitingRejected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.waitingRejected);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.waitingRejected ? "Fermer" : "Annuler la demande", " ");
} }
export class ReunionsListComponent {
    constructor(reunionsService, memberAuth, adminAuth, router) {
        this.reunionsService = reunionsService;
        this.memberAuth = memberAuth;
        this.adminAuth = adminAuth;
        this.router = router;
        this.current = null;
        this.upcoming = [];
        this.calendarDays = [];
        this.calendarView = 'month';
        this.calendarCursor = new Date();
        this.calendarLoading = false;
        this.loading = true;
        this.showJoinModal = false;
        this.selectedMeetingId = '';
        this.selectedMeetingPublic = false;
        this.waitingMeeting = null;
        this.waitingRejected = false;
        this.refresh$ = null;
        this.admissionPoll$ = null;
    }
    ngOnInit() {
        this.load();
        this.refresh$ = interval(30000).subscribe(() => this.load());
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.refresh$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.admissionPoll$) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
    load() {
        this.reunionsService.getCurrent().subscribe({ next: (m) => { this.current = m; this.loading = false; } });
        this.reunionsService.getUpcoming().subscribe({ next: (m) => this.upcoming = m });
        this.loadCalendar();
    }
    setCalendarView(view) {
        this.calendarView = view;
        this.loadCalendar();
    }
    navigateCalendar(direction) {
        const next = new Date(this.calendarCursor);
        if (this.calendarView === 'month')
            next.setMonth(next.getMonth() + direction);
        else
            next.setDate(next.getDate() + 7 * direction);
        this.calendarCursor = next;
        this.loadCalendar();
    }
    goToToday() {
        this.calendarCursor = new Date();
        this.loadCalendar();
    }
    get calendarTitle() {
        if (this.calendarView === 'month') {
            return this.calendarCursor.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
        }
        const start = this.startOfWeek(this.calendarCursor);
        const end = new Date(start);
        end.setDate(end.getDate() + 6);
        return `${start.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} – ${end.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}`;
    }
    dayLabel(day) {
        return day.date.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', '');
    }
    isCurrentDay(date) {
        return date.toDateString() === new Date().toDateString();
    }
    loadCalendar() {
        const { start, end } = this.calendarRange();
        this.calendarLoading = true;
        this.reunionsService.getCalendar(start, end).subscribe({
            next: meetings => {
                this.calendarDays = this.buildCalendarDays(start, meetings);
                this.calendarLoading = false;
            },
            error: () => this.calendarLoading = false,
        });
    }
    calendarRange() {
        if (this.calendarView === 'week') {
            const start = this.startOfWeek(this.calendarCursor);
            const end = new Date(start);
            end.setDate(end.getDate() + 6);
            end.setHours(23, 59, 59, 999);
            return { start, end };
        }
        const first = new Date(this.calendarCursor.getFullYear(), this.calendarCursor.getMonth(), 1);
        const start = this.startOfWeek(first);
        const end = new Date(start);
        end.setDate(end.getDate() + 41);
        end.setHours(23, 59, 59, 999);
        return { start, end };
    }
    buildCalendarDays(start, meetings) {
        const count = this.calendarView === 'month' ? 42 : 7;
        const currentMonth = this.calendarCursor.getMonth();
        return Array.from({ length: count }, (_, index) => {
            const date = new Date(start);
            date.setDate(date.getDate() + index);
            return {
                date,
                inCurrentMonth: this.calendarView === 'week' || date.getMonth() === currentMonth,
                meetings: meetings.filter(meeting => new Date(meeting.startTime).toDateString() === date.toDateString()),
            };
        });
    }
    startOfWeek(date) {
        const start = new Date(date);
        const day = start.getDay();
        start.setDate(start.getDate() - (day === 0 ? 6 : day - 1));
        start.setHours(0, 0, 0, 0);
        return start;
    }
    joinMeeting(meetingId) {
        var _a, _b;
        this.selectedMeetingId = meetingId;
        const selected = ((_a = this.current) === null || _a === void 0 ? void 0 : _a.id) === meetingId
            ? this.current
            : this.upcoming.find(meeting => meeting.id === meetingId);
        this.selectedMeetingPublic = (_b = selected === null || selected === void 0 ? void 0 : selected.isPublic) !== null && _b !== void 0 ? _b : false;
        const member = this.memberAuth.member;
        if ((member === null || member === void 0 ? void 0 : member.role) === 'meeting_moderator' && member.meetingModeratorFor !== meetingId) {
            this.memberAuth.logout();
            this.showJoinModal = true;
            return;
        }
        if (this.adminAuth.isLoggedIn() || this.memberAuth.isLoggedIn()) {
            this.doJoin(meetingId);
        }
        else {
            this.showJoinModal = true;
        }
    }
    doJoin(meetingId) {
        this.showJoinModal = false;
        this.reunionsService.join(meetingId).subscribe({
            next: (result) => {
                if ('waitingRoom' in result && result.waitingRoom) {
                    this.startWaitingRoom(meetingId, result.participantId, result.meeting.title);
                    return;
                }
                if ('jitsiToken' in result)
                    this.enterMeeting(meetingId, result);
            },
            error: () => alert('Impossible de rejoindre la réunion. Veuillez réessayer.'),
        });
    }
    cancelWaiting() {
        var _a;
        (_a = this.admissionPoll$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.admissionPoll$ = null;
        this.waitingMeeting = null;
        this.waitingRejected = false;
    }
    startWaitingRoom(meetingId, participantId, title) {
        var _a;
        (_a = this.admissionPoll$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.waitingMeeting = { id: meetingId, title };
        this.waitingRejected = false;
        this.admissionPoll$ = interval(2500).subscribe(() => {
            this.reunionsService.getAdmissionStatus(meetingId, participantId).subscribe({
                next: result => this.handleAdmissionResult(meetingId, result),
            });
        });
    }
    handleAdmissionResult(meetingId, result) {
        var _a;
        if ('rejected' in result && result.rejected) {
            (_a = this.admissionPoll$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.waitingRejected = true;
            return;
        }
        if ('jitsiToken' in result)
            this.enterMeeting(meetingId, result);
    }
    enterMeeting(meetingId, result) {
        var _a;
        (_a = this.admissionPoll$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.waitingMeeting = null;
        this.router.navigate(['/reunions', meetingId, 'salle'], { state: { jitsiData: result } });
    }
    onAuthSuccess() {
        this.doJoin(this.selectedMeetingId);
    }
    onModalClose() {
        this.showJoinModal = false;
    }
    formatTime(dateStr) {
        return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    }
    formatDate(dateStr) {
        return new Date(dateStr).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    }
    isToday(dateStr) {
        const d = new Date(dateStr);
        const today = new Date();
        return d.toDateString() === today.toDateString();
    }
}
ReunionsListComponent.ɵfac = function ReunionsListComponent_Factory(t) { return new (t || ReunionsListComponent)(i0.ɵɵdirectiveInject(i1.ReunionsService), i0.ɵɵdirectiveInject(i2.MemberAuthService), i0.ɵɵdirectiveInject(i3.AuthService), i0.ɵɵdirectiveInject(i4.Router)); };
ReunionsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReunionsListComponent, selectors: [["app-reunions-list"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 4, consts: [[1, "reunions-page"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [3, "meetingId", "publicMeeting", "authSuccess", "close", 4, "ngIf"], ["class", "waiting-overlay", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], ["class", "meeting-live", 4, "ngIf"], ["class", "no-meeting", 4, "ngIf"], ["class", "upcoming-section", 4, "ngIf"], [1, "calendar-section"], [1, "calendar-header"], [1, "calendar-kicker"], [1, "calendar-view-toggle"], [3, "click"], [1, "calendar-nav"], ["aria-label", "P\u00E9riode pr\u00E9c\u00E9dente", 3, "click"], [1, "calendar-today", 3, "click"], ["aria-label", "P\u00E9riode suivante", 3, "click"], ["class", "calendar-loading", 4, "ngIf"], ["class", "calendar-grid", 3, "calendar-grid--week", 4, "ngIf"], ["class", "empty-upcoming", 4, "ngIf"], [1, "meeting-live"], [1, "live-badge"], [1, "live-dot"], [1, "meeting-title"], [1, "meeting-time"], ["class", "meeting-participants", 4, "ngIf"], [1, "btn-join", "btn-join--large", 3, "click"], [1, "meeting-participants"], [1, "no-meeting"], [1, "no-meeting-icon"], [1, "upcoming-section"], [1, "upcoming-title"], [1, "upcoming-list"], ["class", "meeting-card", 4, "ngFor", "ngForOf"], [1, "meeting-card"], [1, "meeting-card__date"], ["class", "date-today", 4, "ngIf"], [1, "date-time"], [1, "meeting-card__info"], [1, "meeting-card__title"], ["class", "meeting-card__desc", 4, "ngIf"], ["class", "meeting-card__badge", 4, "ngIf"], ["class", "meeting-card__badge meeting-card__badge--private", 4, "ngIf"], ["class", "btn-join btn-join--small", 3, "click", 4, "ngIf"], [1, "date-today"], [1, "meeting-card__desc"], [1, "meeting-card__badge"], [1, "meeting-card__badge", "meeting-card__badge--private"], [1, "btn-join", "btn-join--small", 3, "click"], [1, "calendar-loading"], [1, "calendar-grid"], ["class", "calendar-day", 3, "outside", "today", 4, "ngFor", "ngForOf"], [1, "calendar-day"], [1, "calendar-day__head"], ["class", "calendar-event", 3, "calendar-event--live", "click", 4, "ngFor", "ngForOf"], [1, "calendar-event", 3, "click"], [1, "empty-upcoming"], [3, "authSuccess", "close", "meetingId", "publicMeeting"], [1, "waiting-overlay"], ["role", "status", "aria-live", "polite", 1, "waiting-card"], [1, "waiting-card__mark"], [1, "waiting-card__kicker"], ["type", "button", 3, "click"], [1, "waiting-progress"]], template: function ReunionsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ReunionsListComponent_div_1_Template, 4, 0, "div", 1)(2, ReunionsListComponent_ng_container_2_Template, 26, 11, "ng-container", 2)(3, ReunionsListComponent_app_join_modal_3_Template, 1, 2, "app-join-modal", 3)(4, ReunionsListComponent_div_4_Template, 12, 7, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.showJoinModal);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.waitingMeeting);
    } }, dependencies: [CommonModule, i5.NgForOf, i5.NgIf, JoinModalComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.reunions-page[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n  padding: 24px 16px 80px;\n}\n\n\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px 0;\n  gap: 16px;\n  color: #666;\n}\n\n\n\n.meeting-live[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C, #123648);\n  color: white;\n  border-radius: 16px;\n  padding: 28px 24px;\n  text-align: center;\n  margin-bottom: 32px;\n  box-shadow: 0 4px 24px rgba(29, 84, 108, 0.35);\n}\n\n.live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255,255,255,0.15);\n  border-radius: 20px;\n  padding: 4px 14px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n\n.live-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #ef4444;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% { opacity: 1; transform: scale(1); }\n  50% { opacity: 0.5; transform: scale(0.8); }\n}\n\n.meeting-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 8px;\n}\n\n.meeting-time[_ngcontent-%COMP%] {\n  font-size: 15px;\n  opacity: 0.8;\n  margin: 0 0 8px;\n}\n\n.meeting-participants[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.7;\n  margin: 0 0 24px;\n}\n\n.btn-join[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #E8A838;\n  color: #1a1a1a;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  letter-spacing: 0.5px;\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(0,0,0,0.2);\n  }\n\n  &--large {\n    padding: 18px 48px;\n    font-size: 20px;\n    border-radius: 12px;\n  }\n\n  &--small {\n    padding: 10px 20px;\n    font-size: 14px;\n  }\n}\n\n\n\n.no-meeting[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0 32px;\n  color: #666;\n\n  .no-meeting-icon { font-size: 48px; margin-bottom: 12px; }\n  h2 { color: #1D546C; font-size: 20px; margin: 0 0 8px; }\n  p { font-size: 15px; margin: 0; }\n}\n\n\n\n.upcoming-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin: 0 0 16px;\n}\n\n.upcoming-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.meeting-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n\n  &__date {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 80px;\n    font-size: 13px;\n    color: #1D546C;\n    font-weight: 600;\n  }\n\n  .date-today {\n    color: #ef4444;\n    font-weight: 700;\n    font-size: 12px;\n    text-transform: uppercase;\n  }\n\n  .date-time {\n    font-size: 18px;\n    font-weight: 700;\n    color: #1D546C;\n  }\n\n  &__info {\n    flex: 1;\n  }\n\n  &__title {\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a1a2e;\n    margin: 0 0 4px;\n  }\n\n  &__desc {\n    font-size: 13px;\n    color: #666;\n    margin: 0 0 6px;\n  }\n\n  &__badge {\n    display: inline-block;\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 10px;\n    background: #e0f0f8;\n    color: #1D546C;\n    font-weight: 500;\n\n    &--private {\n      background: #fef2f2;\n      color: #dc2626;\n    }\n  }\n}\n\n.empty-upcoming[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #999;\n  padding: 24px;\n  font-size: 14px;\n}\n\n.calendar-section[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  padding: 20px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n}\n\n.calendar-header[_ngcontent-%COMP%], .calendar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.calendar-kicker[_ngcontent-%COMP%] {\n  color: #e8a838;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n}\n\n.calendar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: #123648;\n  font-size: 20px;\n  text-transform: capitalize;\n}\n\n.calendar-view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 3px;\n  background: #f1f5f7;\n  border-radius: 9px;\n}\n\n.calendar-view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .calendar-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  cursor: pointer;\n}\n\n.calendar-view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-radius: 7px;\n  background: transparent;\n  color: #64748b;\n}\n\n.calendar-view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1d546c;\n  box-shadow: 0 1px 4px rgba(15, 23, 42, .12);\n}\n\n.calendar-nav[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  margin: 16px 0 10px;\n}\n\n.calendar-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 34px;\n  min-height: 34px;\n  border-radius: 8px;\n  background: #edf3f5;\n  color: #1d546c;\n  font-size: 20px;\n}\n\n.calendar-nav[_ngcontent-%COMP%]   .calendar-today[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.calendar-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.calendar-day[_ngcontent-%COMP%] {\n  min-height: 92px;\n  padding: 7px;\n  border-right: 1px solid #edf0f2;\n  border-bottom: 1px solid #edf0f2;\n  background: #fff;\n}\n\n.calendar-day[_ngcontent-%COMP%]:nth-child(7n) { border-right: 0; }\n.calendar-day.outside[_ngcontent-%COMP%] { background: #f8fafb; opacity: .55; }\n.calendar-day.today[_ngcontent-%COMP%] { box-shadow: inset 0 0 0 2px #e8a838; }\n\n.calendar-day__head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 4px;\n  color: #64748b;\n  font-size: 10px;\n  text-transform: capitalize;\n}\n\n.calendar-day__head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #123648;\n  font-size: 13px;\n}\n\n.calendar-event[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 5px;\n  padding: 5px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 6px;\n  background: #e8f2f6;\n  color: #123648;\n  cursor: default;\n  font-size: 9px;\n  line-height: 1.25;\n  text-align: left;\n}\n\n.calendar-event[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 800;\n}\n\n.calendar-event--live[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  cursor: pointer;\n}\n\n.calendar-loading[_ngcontent-%COMP%] {\n  padding: 28px;\n  color: #64748b;\n  text-align: center;\n}\n\n@media (max-width: 600px) {\n  .calendar-section[_ngcontent-%COMP%] { padding: 14px 10px; margin-inline: -6px; }\n  .calendar-header[_ngcontent-%COMP%] { align-items: flex-start; }\n  .calendar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 17px; }\n  .calendar-day[_ngcontent-%COMP%] { min-height: 72px; padding: 4px; }\n  .calendar-day__head[_ngcontent-%COMP%] { justify-content: center; }\n  .calendar-day__head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\n  .calendar-event[_ngcontent-%COMP%] { padding: 4px 2px; font-size: 0; }\n  .calendar-event[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 9px; text-align: center; }\n  .calendar-grid--week[_ngcontent-%COMP%]   .calendar-event[_ngcontent-%COMP%] { font-size: 9px; }\n}\n\n\n\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #1D546C;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to { transform: rotate(360deg); }\n}\n.waiting-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0; z-index: 12000; display: grid; place-items: center; padding: 20px;\n  background: rgba(8, 13, 18, .82); backdrop-filter: blur(14px);\n}\n\n.waiting-card[_ngcontent-%COMP%] {\n  width: min(440px, 100%); padding: 34px; text-align: center; color: #f7f8fa;\n  border: 1px solid rgba(255,255,255,.1); border-radius: 24px;\n  background: linear-gradient(160deg, rgba(30,35,43,.98), rgba(16,19,24,.98));\n  box-shadow: 0 30px 90px rgba(0,0,0,.45);\n  h2 { margin: 8px 0 12px; font-size: 24px; }\n  p { margin: 0 auto 22px; max-width: 350px; color: #aeb5c0; font-size: 14px; line-height: 1.65; }\n  button {\n    min-width: 180px; padding: 11px 16px; border: 1px solid rgba(255,255,255,.12);\n    border-radius: 11px; color: #e7e9ed; background: rgba(255,255,255,.06); cursor: pointer;\n  }\n}\n\n.waiting-card__mark[_ngcontent-%COMP%] {\n  width: 58px; height: 58px; margin: 0 auto 16px; display: grid; place-items: center;\n  border-radius: 18px; color: #f0c36a; background: rgba(232,168,56,.12);\n  border: 1px solid rgba(232,168,56,.3); font-size: 24px;\n  &--rejected { color: #ff989c; background: rgba(229,72,77,.12); border-color: rgba(229,72,77,.28); }\n}\n\n.waiting-card__kicker[_ngcontent-%COMP%] {\n  color: #e8a838; font-size: 10px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase;\n}\n\n.waiting-progress[_ngcontent-%COMP%] {\n  display: flex; justify-content: center; gap: 6px; margin: -8px 0 24px;\n  span {\n    width: 7px; height: 7px; border-radius: 50%; background: #e8a838;\n    animation: _ngcontent-%COMP%_waitingPulse 1.2s infinite ease-in-out;\n    &:nth-child(2) { animation-delay: .15s; }\n    &:nth-child(3) { animation-delay: .3s; }\n  }\n}\n\n@keyframes _ngcontent-%COMP%_waitingPulse {\n  0%, 70%, 100% { opacity: .25; transform: translateY(0); }\n  35% { opacity: 1; transform: translateY(-4px); }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReunionsListComponent, [{
        type: Component,
        args: [{ selector: 'app-reunions-list', standalone: true, imports: [CommonModule, JoinModalComponent], template: "<div class=\"reunions-page\">\n\n  <!-- Loading -->\n  <div class=\"loading-state\" *ngIf=\"loading\">\n    <div class=\"spinner\"></div>\n    <p>Chargement des r\u00E9unions...</p>\n  </div>\n\n  <ng-container *ngIf=\"!loading\">\n\n    <!-- \u2500\u2500 R\u00E9union EN COURS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <div class=\"meeting-live\" *ngIf=\"current\">\n      <div class=\"live-badge\">\n        <span class=\"live-dot\"></span>\n        EN COURS\n      </div>\n      <h2 class=\"meeting-title\">{{ current.title }}</h2>\n      <p class=\"meeting-time\">Depuis {{ formatTime(current.startTime) }}</p>\n      <p class=\"meeting-participants\" *ngIf=\"current.participantCount > 0\">\n        \uD83D\uDC65 {{ current.participantCount }} participant{{ current.participantCount > 1 ? 's' : '' }}\n      </p>\n      <button class=\"btn-join btn-join--large\" (click)=\"joinMeeting(current.id)\">\n        \u25B6&nbsp;&nbsp;REJOINDRE\n      </button>\n    </div>\n\n    <!-- \u2500\u2500 Aucune r\u00E9union en cours \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <div class=\"no-meeting\" *ngIf=\"!current\">\n      <div class=\"no-meeting-icon\">\uD83D\uDD4A\uFE0F</div>\n      <h2>Aucune r\u00E9union en ce moment</h2>\n      <p>La prochaine r\u00E9union est affich\u00E9e ci-dessous.</p>\n    </div>\n\n    <!-- \u2500\u2500 R\u00E9unions \u00E0 venir \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <div class=\"upcoming-section\" *ngIf=\"upcoming.length > 0\">\n      <h3 class=\"upcoming-title\">R\u00E9unions \u00E0 venir</h3>\n      <div class=\"upcoming-list\">\n        <div class=\"meeting-card\" *ngFor=\"let m of upcoming\">\n          <div class=\"meeting-card__date\">\n            <span class=\"date-today\" *ngIf=\"isToday(m.startTime)\">Aujourd'hui</span>\n            <span *ngIf=\"!isToday(m.startTime)\">{{ formatDate(m.startTime) }}</span>\n            <span class=\"date-time\">{{ formatTime(m.startTime) }}</span>\n          </div>\n          <div class=\"meeting-card__info\">\n            <p class=\"meeting-card__title\">{{ m.title }}</p>\n            <p class=\"meeting-card__desc\" *ngIf=\"m.description\">{{ m.description }}</p>\n            <span class=\"meeting-card__badge\" *ngIf=\"m.isPublic\">Public</span>\n            <span class=\"meeting-card__badge meeting-card__badge--private\" *ngIf=\"!m.isPublic\">Membres</span>\n          </div>\n          <button class=\"btn-join btn-join--small\"\n            *ngIf=\"isToday(m.startTime)\"\n            (click)=\"joinMeeting(m.id)\">\n            Rejoindre\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <section class=\"calendar-section\">\n      <div class=\"calendar-header\">\n        <div>\n          <span class=\"calendar-kicker\">Calendrier</span>\n          <h3>{{ calendarTitle }}</h3>\n        </div>\n        <div class=\"calendar-view-toggle\">\n          <button [class.active]=\"calendarView === 'month'\" (click)=\"setCalendarView('month')\">Mois</button>\n          <button [class.active]=\"calendarView === 'week'\" (click)=\"setCalendarView('week')\">Semaine</button>\n        </div>\n      </div>\n      <div class=\"calendar-nav\">\n        <button (click)=\"navigateCalendar(-1)\" aria-label=\"P\u00E9riode pr\u00E9c\u00E9dente\">\u2039</button>\n        <button class=\"calendar-today\" (click)=\"goToToday()\">Aujourd\u2019hui</button>\n        <button (click)=\"navigateCalendar(1)\" aria-label=\"P\u00E9riode suivante\">\u203A</button>\n      </div>\n\n      <div class=\"calendar-loading\" *ngIf=\"calendarLoading\">Chargement du calendrier\u2026</div>\n      <div class=\"calendar-grid\" [class.calendar-grid--week]=\"calendarView === 'week'\" *ngIf=\"!calendarLoading\">\n        <article class=\"calendar-day\" *ngFor=\"let day of calendarDays\"\n                 [class.outside]=\"!day.inCurrentMonth\" [class.today]=\"isCurrentDay(day.date)\">\n          <div class=\"calendar-day__head\">\n            <span>{{ dayLabel(day) }}</span>\n            <strong>{{ day.date.getDate() }}</strong>\n          </div>\n          <button class=\"calendar-event\" *ngFor=\"let meeting of day.meetings\"\n                  (click)=\"isToday(meeting.startTime) && joinMeeting(meeting.id)\"\n                  [class.calendar-event--live]=\"meeting.status === 'live'\">\n            <span>{{ formatTime(meeting.startTime) }}</span>\n            {{ meeting.title }}\n          </button>\n        </article>\n      </div>\n    </section>\n\n    <!-- \u2500\u2500 Aucune r\u00E9union pr\u00E9vue \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <div class=\"empty-upcoming\" *ngIf=\"upcoming.length === 0 && !current\">\n      <p>Aucune r\u00E9union programm\u00E9e pour le moment.</p>\n    </div>\n\n  </ng-container>\n\n  <!-- \u2500\u2500 Modal de connexion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <app-join-modal\n    *ngIf=\"showJoinModal\"\n    [meetingId]=\"selectedMeetingId\"\n    [publicMeeting]=\"selectedMeetingPublic\"\n    (authSuccess)=\"onAuthSuccess()\"\n    (close)=\"onModalClose()\">\n  </app-join-modal>\n\n  <div class=\"waiting-overlay\" *ngIf=\"waitingMeeting\">\n    <section class=\"waiting-card\" role=\"status\" aria-live=\"polite\">\n      <div class=\"waiting-card__mark\" [class.waiting-card__mark--rejected]=\"waitingRejected\">\n        {{ waitingRejected ? '\u00D7' : '\u231B' }}\n      </div>\n      <span class=\"waiting-card__kicker\">Salle d\u2019attente</span>\n      <h2>{{ waitingMeeting.title }}</h2>\n      <ng-container *ngIf=\"!waitingRejected\">\n        <p>Votre demande a \u00E9t\u00E9 transmise \u00E0 la r\u00E9gie. Vous entrerez automatiquement d\u00E8s qu\u2019un mod\u00E9rateur vous aura admis.</p>\n        <div class=\"waiting-progress\"><span></span><span></span><span></span></div>\n      </ng-container>\n      <p *ngIf=\"waitingRejected\">La r\u00E9gie n\u2019a pas autoris\u00E9 cette demande d\u2019acc\u00E8s.</p>\n      <button type=\"button\" (click)=\"cancelWaiting()\">\n        {{ waitingRejected ? 'Fermer' : 'Annuler la demande' }}\n      </button>\n    </section>\n  </div>\n\n</div>\n", styles: [":host {\n  display: block;\n}\n\n.reunions-page {\n  max-width: 680px;\n  margin: 0 auto;\n  padding: 24px 16px 80px;\n}\n\n/* \u2500\u2500 Loading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px 0;\n  gap: 16px;\n  color: #666;\n}\n\n/* \u2500\u2500 R\u00E9union EN COURS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.meeting-live {\n  background: linear-gradient(135deg, #1D546C, #123648);\n  color: white;\n  border-radius: 16px;\n  padding: 28px 24px;\n  text-align: center;\n  margin-bottom: 32px;\n  box-shadow: 0 4px 24px rgba(29, 84, 108, 0.35);\n}\n\n.live-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255,255,255,0.15);\n  border-radius: 20px;\n  padding: 4px 14px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n\n.live-dot {\n  width: 8px;\n  height: 8px;\n  background: #ef4444;\n  border-radius: 50%;\n  animation: pulse 1.5s ease-in-out infinite;\n}\n\n@keyframes pulse {\n  0%, 100% { opacity: 1; transform: scale(1); }\n  50% { opacity: 0.5; transform: scale(0.8); }\n}\n\n.meeting-title {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 8px;\n}\n\n.meeting-time {\n  font-size: 15px;\n  opacity: 0.8;\n  margin: 0 0 8px;\n}\n\n.meeting-participants {\n  font-size: 14px;\n  opacity: 0.7;\n  margin: 0 0 24px;\n}\n\n.btn-join {\n  display: inline-block;\n  background: #E8A838;\n  color: #1a1a1a;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  letter-spacing: 0.5px;\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(0,0,0,0.2);\n  }\n\n  &--large {\n    padding: 18px 48px;\n    font-size: 20px;\n    border-radius: 12px;\n  }\n\n  &--small {\n    padding: 10px 20px;\n    font-size: 14px;\n  }\n}\n\n/* \u2500\u2500 Aucune r\u00E9union \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.no-meeting {\n  text-align: center;\n  padding: 40px 0 32px;\n  color: #666;\n\n  .no-meeting-icon { font-size: 48px; margin-bottom: 12px; }\n  h2 { color: #1D546C; font-size: 20px; margin: 0 0 8px; }\n  p { font-size: 15px; margin: 0; }\n}\n\n/* \u2500\u2500 R\u00E9unions \u00E0 venir \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.upcoming-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin: 0 0 16px;\n}\n\n.upcoming-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.meeting-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.04);\n\n  &__date {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 80px;\n    font-size: 13px;\n    color: #1D546C;\n    font-weight: 600;\n  }\n\n  .date-today {\n    color: #ef4444;\n    font-weight: 700;\n    font-size: 12px;\n    text-transform: uppercase;\n  }\n\n  .date-time {\n    font-size: 18px;\n    font-weight: 700;\n    color: #1D546C;\n  }\n\n  &__info {\n    flex: 1;\n  }\n\n  &__title {\n    font-size: 16px;\n    font-weight: 600;\n    color: #1a1a2e;\n    margin: 0 0 4px;\n  }\n\n  &__desc {\n    font-size: 13px;\n    color: #666;\n    margin: 0 0 6px;\n  }\n\n  &__badge {\n    display: inline-block;\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 10px;\n    background: #e0f0f8;\n    color: #1D546C;\n    font-weight: 500;\n\n    &--private {\n      background: #fef2f2;\n      color: #dc2626;\n    }\n  }\n}\n\n.empty-upcoming {\n  text-align: center;\n  color: #999;\n  padding: 24px;\n  font-size: 14px;\n}\n\n.calendar-section {\n  margin-top: 36px;\n  padding: 20px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n}\n\n.calendar-header,\n.calendar-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.calendar-kicker {\n  color: #e8a838;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n}\n\n.calendar-header h3 {\n  margin: 3px 0 0;\n  color: #123648;\n  font-size: 20px;\n  text-transform: capitalize;\n}\n\n.calendar-view-toggle {\n  display: flex;\n  padding: 3px;\n  background: #f1f5f7;\n  border-radius: 9px;\n}\n\n.calendar-view-toggle button,\n.calendar-nav button {\n  border: 0;\n  cursor: pointer;\n}\n\n.calendar-view-toggle button {\n  padding: 7px 10px;\n  border-radius: 7px;\n  background: transparent;\n  color: #64748b;\n}\n\n.calendar-view-toggle button.active {\n  background: #fff;\n  color: #1d546c;\n  box-shadow: 0 1px 4px rgba(15, 23, 42, .12);\n}\n\n.calendar-nav {\n  justify-content: flex-end;\n  margin: 16px 0 10px;\n}\n\n.calendar-nav button {\n  min-width: 34px;\n  min-height: 34px;\n  border-radius: 8px;\n  background: #edf3f5;\n  color: #1d546c;\n  font-size: 20px;\n}\n\n.calendar-nav .calendar-today {\n  padding: 0 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.calendar-grid {\n  display: grid;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.calendar-day {\n  min-height: 92px;\n  padding: 7px;\n  border-right: 1px solid #edf0f2;\n  border-bottom: 1px solid #edf0f2;\n  background: #fff;\n}\n\n.calendar-day:nth-child(7n) { border-right: 0; }\n.calendar-day.outside { background: #f8fafb; opacity: .55; }\n.calendar-day.today { box-shadow: inset 0 0 0 2px #e8a838; }\n\n.calendar-day__head {\n  display: flex;\n  justify-content: space-between;\n  gap: 4px;\n  color: #64748b;\n  font-size: 10px;\n  text-transform: capitalize;\n}\n\n.calendar-day__head strong {\n  color: #123648;\n  font-size: 13px;\n}\n\n.calendar-event {\n  width: 100%;\n  margin-top: 5px;\n  padding: 5px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 6px;\n  background: #e8f2f6;\n  color: #123648;\n  cursor: default;\n  font-size: 9px;\n  line-height: 1.25;\n  text-align: left;\n}\n\n.calendar-event span {\n  display: block;\n  font-weight: 800;\n}\n\n.calendar-event--live {\n  background: #fee2e2;\n  color: #b91c1c;\n  cursor: pointer;\n}\n\n.calendar-loading {\n  padding: 28px;\n  color: #64748b;\n  text-align: center;\n}\n\n@media (max-width: 600px) {\n  .calendar-section { padding: 14px 10px; margin-inline: -6px; }\n  .calendar-header { align-items: flex-start; }\n  .calendar-header h3 { font-size: 17px; }\n  .calendar-day { min-height: 72px; padding: 4px; }\n  .calendar-day__head { justify-content: center; }\n  .calendar-day__head span { display: none; }\n  .calendar-event { padding: 4px 2px; font-size: 0; }\n  .calendar-event span { font-size: 9px; text-align: center; }\n  .calendar-grid--week .calendar-event { font-size: 9px; }\n}\n\n/* \u2500\u2500 Spinner \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #1D546C;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n.waiting-overlay {\n  position: fixed; inset: 0; z-index: 12000; display: grid; place-items: center; padding: 20px;\n  background: rgba(8, 13, 18, .82); backdrop-filter: blur(14px);\n}\n\n.waiting-card {\n  width: min(440px, 100%); padding: 34px; text-align: center; color: #f7f8fa;\n  border: 1px solid rgba(255,255,255,.1); border-radius: 24px;\n  background: linear-gradient(160deg, rgba(30,35,43,.98), rgba(16,19,24,.98));\n  box-shadow: 0 30px 90px rgba(0,0,0,.45);\n  h2 { margin: 8px 0 12px; font-size: 24px; }\n  p { margin: 0 auto 22px; max-width: 350px; color: #aeb5c0; font-size: 14px; line-height: 1.65; }\n  button {\n    min-width: 180px; padding: 11px 16px; border: 1px solid rgba(255,255,255,.12);\n    border-radius: 11px; color: #e7e9ed; background: rgba(255,255,255,.06); cursor: pointer;\n  }\n}\n\n.waiting-card__mark {\n  width: 58px; height: 58px; margin: 0 auto 16px; display: grid; place-items: center;\n  border-radius: 18px; color: #f0c36a; background: rgba(232,168,56,.12);\n  border: 1px solid rgba(232,168,56,.3); font-size: 24px;\n  &--rejected { color: #ff989c; background: rgba(229,72,77,.12); border-color: rgba(229,72,77,.28); }\n}\n\n.waiting-card__kicker {\n  color: #e8a838; font-size: 10px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase;\n}\n\n.waiting-progress {\n  display: flex; justify-content: center; gap: 6px; margin: -8px 0 24px;\n  span {\n    width: 7px; height: 7px; border-radius: 50%; background: #e8a838;\n    animation: waitingPulse 1.2s infinite ease-in-out;\n    &:nth-child(2) { animation-delay: .15s; }\n    &:nth-child(3) { animation-delay: .3s; }\n  }\n}\n\n@keyframes waitingPulse {\n  0%, 70%, 100% { opacity: .25; transform: translateY(0); }\n  35% { opacity: 1; transform: translateY(-4px); }\n}\n"] }]
    }], () => [{ type: i1.ReunionsService }, { type: i2.MemberAuthService }, { type: i3.AuthService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReunionsListComponent, { className: "ReunionsListComponent", filePath: "app\\pages\\reunions\\reunions-list\\reunions-list.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=reunions-list.component.js.map