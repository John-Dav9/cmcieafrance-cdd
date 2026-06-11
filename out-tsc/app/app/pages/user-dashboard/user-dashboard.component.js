import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../core/services/member-auth.service";
import * as i3 from "../../core/services/push-notifications.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/router";
const _c0 = () => [25, 50, 75, 100];
function UserDashboardComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function UserDashboardComponent_div_7_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.emailInput, $event) || (ctx_r1.emailInput = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function UserDashboardComponent_div_7_div_3_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.identify()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 17);
    i0.ɵɵlistener("click", function UserDashboardComponent_div_7_div_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.identify()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.emailInput);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading ? "Chargement\u2026" : "Acc\u00E9der", " ");
} }
function UserDashboardComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "input", 18);
    i0.ɵɵtwoWayListener("ngModelChange", function UserDashboardComponent_div_7_div_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.otpCode, $event) || (ctx_r1.otpCode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function UserDashboardComponent_div_7_div_4_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.verifyOtp()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 17);
    i0.ɵɵlistener("click", function UserDashboardComponent_div_7_div_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.verifyOtp()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.otpCode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading ? "V\u00E9rification\u2026" : "Se connecter", " ");
} }
function UserDashboardComponent_div_7_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.emailError);
} }
function UserDashboardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "p", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, UserDashboardComponent_div_7_div_3_Template, 4, 3, "div", 11)(4, UserDashboardComponent_div_7_div_4_Template, 4, 3, "div", 11)(5, UserDashboardComponent_div_7_p_5_Template, 2, 1, "p", 12);
    i0.ɵɵelementStart(6, "p", 13);
    i0.ɵɵtext(7, " Pas encore inscrit ? ");
    i0.ɵɵelementStart(8, "a", 14);
    i0.ɵɵtext(9, "Rejoins un marathon");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, ". ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.otpSent ? "Saisis le code re\u00E7u pour confirmer ton identit\u00E9." : "Connecte-toi avec ton adresse email membre.", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.otpSent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.otpSent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.emailError);
} }
function UserDashboardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "span", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 22);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 23);
    i0.ɵɵlistener("click", function UserDashboardComponent_div_8_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵtext(9, "Se d\u00E9connecter");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.dashboard.fullName.charAt(0).toUpperCase());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.dashboard.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.dashboard.email);
} }
function UserDashboardComponent_div_9_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.pushMessage);
} }
function UserDashboardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "div")(2, "strong");
    i0.ɵɵtext(3, "Rappels de r\u00E9union");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Recevoir une notification sur cet appareil une heure avant chaque r\u00E9union.");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, UserDashboardComponent_div_9_small_6_Template, 2, 1, "small", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 26);
    i0.ɵɵlistener("click", function UserDashboardComponent_div_9_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.togglePush()); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.pushMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.pushLoading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.pushLoading ? "Patientez\u2026" : ctx_r1.pushSubscribed ? "D\u00E9sactiver" : "Activer", " ");
} }
function UserDashboardComponent_div_10_small_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.mentorshipNotice);
} }
function UserDashboardComponent_div_10_div_15_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "em");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const request_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(request_r7.topic);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(request_r7.mentor ? "Mentor: " + request_r7.mentor.firstName + " " + request_r7.mentor.lastName : "En attente d\u2019affectation");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("assigned", request_r7.status === "assigned")("closed", request_r7.status === "closed");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", request_r7.status === "pending" ? "En attente" : request_r7.status === "assigned" ? "Assign\u00E9" : "Cl\u00F4tur\u00E9", " ");
} }
function UserDashboardComponent_div_10_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, UserDashboardComponent_div_10_div_15_article_1_Template, 8, 7, "article", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.mentorshipRequests);
} }
function UserDashboardComponent_div_10_section_46_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66)(1, "span", 67);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 68);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("#", m_r8.rank, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("/ ", m_r8.totalParticipants, "");
} }
function UserDashboardComponent_div_10_section_46_div_4_span_16_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 71);
    i0.ɵɵtext(1, "Attestation envoy\u00E9e");
    i0.ɵɵelementEnd();
} }
function UserDashboardComponent_div_10_section_46_div_4_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, UserDashboardComponent_div_10_section_46_div_4_span_16_span_2_Template, 2, 0, "span", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ms_r9 = ctx.$implicit;
    const m_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("reached", ctx_r1.milestoneReached(m_r8, ms_r9));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ms_r9 === 100 ? "\uD83C\uDFC6" : ms_r9 + "%", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ms_r9 === 100 && ctx_r1.milestoneReached(m_r8, ms_r9));
} }
function UserDashboardComponent_div_10_section_46_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54)(1, "div", 55)(2, "div")(3, "strong", 56);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 57);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, UserDashboardComponent_div_10_section_46_div_4_div_7_Template, 5, 2, "div", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 59);
    i0.ɵɵelement(9, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 61)(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 62);
    i0.ɵɵtemplate(16, UserDashboardComponent_div_10_section_46_div_4_span_16_Template, 3, 4, "span", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 64);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "a", 65);
    i0.ɵɵtext(20, "Continuer la lecture \u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(m_r8.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.scopeLabels[m_r8.scope]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r8.rank);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", m_r8.progressPercent, "%")("background", ctx_r1.barColor(m_r8.statut, m_r8.progressPercent));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", m_r8.daysRead, " / ", m_r8.nbJours, " jours lus");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", m_r8.progressPercent, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(13, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r8.dateDebut, " \u2192 ", m_r8.dateFin, "");
} }
function UserDashboardComponent_div_10_section_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 35)(1, "h2", 45);
    i0.ɵɵtext(2, "\uD83D\uDCC5 Marathons en cours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 52);
    i0.ɵɵtemplate(4, UserDashboardComponent_div_10_section_46_div_4_Template, 21, 14, "div", 53);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.dashboard.marathonsActifs);
} }
function UserDashboardComponent_div_10_section_47_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "div", 78)(2, "span", 79);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 81);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const d_r10 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", d_r10.percent, "%");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("height", ctx_r1.chartBarHeight(d_r10.percent), "px")("background", ctx_r1.barColor(d_r10.statut, d_r10.percent));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r10.label);
} }
function UserDashboardComponent_div_10_section_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 35)(1, "h2", 45);
    i0.ɵɵtext(2, "\uD83D\uDCCA Courbe de fid\u00E9lit\u00E9 \u00E0 la Parole");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 72);
    i0.ɵɵtext(4, "Progression compl\u00E9t\u00E9e pour chaque marathon, du premier au dernier.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 73)(6, "div", 74);
    i0.ɵɵtemplate(7, UserDashboardComponent_div_10_section_47_div_7_Template, 7, 6, "div", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 76);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.dashboard.fideliteData);
} }
function UserDashboardComponent_div_10_section_48_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong", 86);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 87);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const b_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r11.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r11.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r11.desc);
} }
function UserDashboardComponent_div_10_section_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 35)(1, "h2", 45);
    i0.ɵɵtext(2, "\uD83C\uDFC5 Badges obtenus");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 82);
    i0.ɵɵtemplate(4, UserDashboardComponent_div_10_section_48_div_4_Template, 7, 3, "div", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.dashboard.badges);
} }
function UserDashboardComponent_div_10_section_49_tr_18_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 96);
} if (rf & 2) {
    const ms_r12 = ctx.$implicit;
    const m_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("reached", ctx_r1.milestoneReached(m_r13, ms_r12));
    i0.ɵɵproperty("title", ms_r12 + "%");
} }
function UserDashboardComponent_div_10_section_49_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "span", 90);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td", 91);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "div", 92);
    i0.ɵɵelement(11, "div", 93);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 94);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtemplate(15, UserDashboardComponent_div_10_section_49_tr_18_span_15_Template, 1, 3, "span", 95);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r13.titre);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.scopeLabels[m_r13.scope]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", m_r13.dateDebut, " \u2192 ", m_r13.dateFin, "");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", m_r13.progressPercent, "%")("background", ctx_r1.barColor(m_r13.statut, m_r13.progressPercent));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", m_r13.progressPercent, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(10, _c0));
} }
function UserDashboardComponent_div_10_section_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 35)(1, "h2", 45);
    i0.ɵɵtext(2, "\uD83D\uDCDC Historique des marathons");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 88)(4, "table", 89)(5, "thead")(6, "tr")(7, "th");
    i0.ɵɵtext(8, "Marathon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Scope");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "P\u00E9riode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Progression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Jalons");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "tbody");
    i0.ɵɵtemplate(18, UserDashboardComponent_div_10_section_49_tr_18_Template, 16, 11, "tr", 51);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(18);
    i0.ɵɵproperty("ngForOf", ctx_r1.dashboard.historique);
} }
function UserDashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "section", 28)(2, "div", 29)(3, "span");
    i0.ɵɵtext(4, "Accompagnement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6, "Demander un mentor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Expliquez bri\u00E8vement le domaine dans lequel vous souhaitez \u00EAtre accompagn\u00E9. L\u2019\u00E9quipe vous mettra en relation avec un mentor.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 30)(10, "input", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function UserDashboardComponent_div_10_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.mentorshipTopic, $event) || (ctx_r1.mentorshipTopic = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "textarea", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function UserDashboardComponent_div_10_Template_textarea_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.mentorshipMessage, $event) || (ctx_r1.mentorshipMessage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 33);
    i0.ɵɵlistener("click", function UserDashboardComponent_div_10_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitMentorship()); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, UserDashboardComponent_div_10_small_14_Template, 2, 1, "small", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, UserDashboardComponent_div_10_div_15_Template, 2, 1, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "section", 35)(17, "div", 36)(18, "div", 37)(19, "span", 38);
    i0.ɵɵtext(20, "\uD83D\uDCDA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 39);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 40);
    i0.ɵɵtext(24, "Marathon(s) particip\u00E9(s)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 41)(26, "span", 38);
    i0.ɵɵtext(27, "\u2705");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 39);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 40);
    i0.ɵɵtext(31, "Termin\u00E9(s) \u00E0 100%");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 42)(33, "span", 38);
    i0.ɵɵtext(34, "\uD83D\uDD25");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "span", 39);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "span", 40);
    i0.ɵɵtext(38, "En cours");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 43)(40, "span", 38);
    i0.ɵɵtext(41, "\uD83D\uDCD6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "span", 39);
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "span", 40);
    i0.ɵɵtext(45, "Jours de lecture coch\u00E9s");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(46, UserDashboardComponent_div_10_section_46_Template, 5, 1, "section", 44)(47, UserDashboardComponent_div_10_section_47_Template, 9, 1, "section", 44)(48, UserDashboardComponent_div_10_section_48_Template, 5, 1, "section", 44)(49, UserDashboardComponent_div_10_section_49_Template, 19, 1, "section", 44);
    i0.ɵɵelementStart(50, "section", 35)(51, "h2", 45);
    i0.ɵɵtext(52, "\uD83D\uDD0D Activit\u00E9 sur le site");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "div", 46)(54, "div", 47)(55, "span", 48);
    i0.ɵɵtext(56, "\uD83D\uDCD7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "span");
    i0.ɵɵtext(58, "Livres & trait\u00E9s lus");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "span", 49);
    i0.ɵɵtext(60, "Bient\u00F4t");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "div", 47)(62, "span", 48);
    i0.ɵɵtext(63, "\uD83D\uDCF0");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "span");
    i0.ɵɵtext(65, "Articles lus");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "span", 49);
    i0.ɵɵtext(67, "Bient\u00F4t");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "div", 47)(69, "span", 48);
    i0.ɵɵtext(70, "\uD83C\uDF99\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "span");
    i0.ɵɵtext(72, "Messages \u00E9cout\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "span", 49);
    i0.ɵɵtext(74, "Bient\u00F4t");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(75, "div", 47)(76, "span", 48);
    i0.ɵɵtext(77, "\u25B6\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "span");
    i0.ɵɵtext(79, "Vid\u00E9os vues");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "span", 49);
    i0.ɵɵtext(81, "Bient\u00F4t");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.mentorshipTopic);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.mentorshipMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.mentorshipLoading || !ctx_r1.mentorshipTopic.trim() || !ctx_r1.mentorshipMessage.trim());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.mentorshipLoading ? "Envoi\u2026" : "Envoyer la demande", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.mentorshipNotice);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.mentorshipRequests.length);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.dashboard.stats.totalMarathons);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.dashboard.stats.completed);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.dashboard.stats.inProgress);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.dashboard.stats.totalDaysRead);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.dashboard.marathonsActifs.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dashboard.fideliteData.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dashboard.badges.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dashboard.historique.length > 0);
} }
const SCOPE_LABELS = {
    BIBLE_COMPLETE: 'Bible compl\u00e8te',
    ANCIEN_TESTAMENT: 'Ancien Testament',
    NOUVEAU_TESTAMENT: 'Nouveau Testament',
    LIVRES_CHOISIS: 'Livres choisis',
};
export class UserDashboardComponent {
    constructor(http, memberAuth, pushNotifications) {
        this.http = http;
        this.memberAuth = memberAuth;
        this.pushNotifications = pushNotifications;
        this.base = environment.apiBase;
        // ─── Identification ────────────────────────────────────────────────────────
        this.emailInput = '';
        this.emailError = '';
        this.otpCode = '';
        this.otpSent = false;
        this.loading = false;
        this.identified = false;
        // ─── Données dashboard ────────────────────────────────────────────────────
        this.dashboard = null;
        this.pushSupported = false;
        this.pushSubscribed = false;
        this.pushLoading = false;
        this.pushMessage = '';
        this.mentorshipTopic = '';
        this.mentorshipMessage = '';
        this.mentorshipRequests = [];
        this.mentorshipLoading = false;
        this.mentorshipNotice = '';
        this.scopeLabels = SCOPE_LABELS;
    }
    ngOnInit() {
        this.pushSupported = this.pushNotifications.supported;
        if (this.pushSupported) {
            this.pushNotifications.isSubscribed().then(value => this.pushSubscribed = value);
        }
        const member = this.memberAuth.member;
        if (this.memberAuth.isLoggedIn() && member) {
            this.emailInput = member.email;
            this.load();
        }
    }
    async togglePush() {
        this.pushLoading = true;
        this.pushMessage = '';
        try {
            if (this.pushSubscribed)
                await this.pushNotifications.unsubscribe();
            else
                await this.pushNotifications.subscribe();
            this.pushSubscribed = !this.pushSubscribed;
            this.pushMessage = this.pushSubscribed
                ? 'Les rappels de réunion sont activés.'
                : 'Les notifications ont été désactivées.';
        }
        catch (error) {
            this.pushMessage = (error === null || error === void 0 ? void 0 : error.message) === 'Notifications non configurées'
                ? 'Les notifications ne sont pas encore configurées sur le serveur.'
                : 'Impossible de modifier les notifications.';
        }
        finally {
            this.pushLoading = false;
        }
    }
    // ─── Chargement ───────────────────────────────────────────────────────────
    identify() {
        const e = this.emailInput.trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
            this.emailError = 'Email invalide.';
            return;
        }
        this.emailError = '';
        this.loading = true;
        this.memberAuth.checkEmail(e).subscribe({
            next: ({ exists }) => {
                if (!exists) {
                    this.loading = false;
                    this.emailError = 'Aucun compte membre trouvé pour cet email.';
                    return;
                }
                this.memberAuth.sendOtp(e).subscribe({
                    next: () => {
                        this.loading = false;
                        this.otpSent = true;
                    },
                    error: (err) => {
                        var _a, _b;
                        this.loading = false;
                        this.emailError = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Impossible d’envoyer le code de connexion.';
                    },
                });
            },
            error: () => {
                this.loading = false;
                this.emailError = 'Impossible de vérifier cet email.';
            },
        });
    }
    verifyOtp() {
        if (!/^\d{4}$/.test(this.otpCode.trim())) {
            this.emailError = 'Saisis le code à 4 chiffres reçu.';
            return;
        }
        this.loading = true;
        this.emailError = '';
        this.memberAuth.verifyOtp(this.emailInput.trim().toLowerCase(), this.otpCode.trim()).subscribe({
            next: () => {
                this.otpSent = false;
                this.load();
            },
            error: (err) => {
                var _a, _b;
                this.loading = false;
                this.emailError = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Code invalide ou expiré.';
            },
        });
    }
    load() {
        this.loading = true;
        this.dashboard = null;
        this.identified = false;
        this.http.get(`${this.base}/user/dashboard`).subscribe({
            next: (data) => {
                this.dashboard = data;
                this.identified = true;
                this.loading = false;
                this.loadMentorship();
            },
            error: (err) => {
                var _a, _b;
                this.loading = false;
                this.emailError = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Aucun compte trouv\u00e9 pour cet email.';
            },
        });
    }
    submitMentorship() {
        if (!this.mentorshipTopic.trim() || !this.mentorshipMessage.trim())
            return;
        this.mentorshipLoading = true;
        this.mentorshipNotice = '';
        this.http.post(`${this.base}/mentorship`, {
            topic: this.mentorshipTopic,
            message: this.mentorshipMessage,
        }).subscribe({
            next: () => {
                this.mentorshipTopic = '';
                this.mentorshipMessage = '';
                this.mentorshipLoading = false;
                this.mentorshipNotice = 'Votre demande a été transmise.';
                this.loadMentorship();
            },
            error: () => {
                this.mentorshipLoading = false;
                this.mentorshipNotice = 'Impossible d’envoyer la demande.';
            },
        });
    }
    loadMentorship() {
        this.http.get(`${this.base}/mentorship/mine`).subscribe({
            next: requests => this.mentorshipRequests = requests,
        });
    }
    logout() {
        this.memberAuth.logout();
        this.identified = false;
        this.dashboard = null;
        this.emailInput = '';
        this.otpCode = '';
        this.otpSent = false;
    }
    // ─── Helpers chart ────────────────────────────────────────────────────────
    chartBarHeight(percent) { return Math.max(4, percent * 1.6); } // max ~160px
    barColor(statut, percent) {
        if (percent === 100)
            return '#16a34a';
        if (statut === 'ACTIF')
            return '#4f7dff';
        return '#8b93a8';
    }
    milestoneReached(entry, ms) {
        var _a, _b;
        return (_b = (_a = entry.milestonesReached) === null || _a === void 0 ? void 0 : _a.includes(ms)) !== null && _b !== void 0 ? _b : false;
    }
}
UserDashboardComponent.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.MemberAuthService), i0.ɵɵdirectiveInject(i3.PushNotificationsService)); };
UserDashboardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 11, vars: 4, consts: [[1, "dash-page"], [1, "dash-hero"], [1, "dash-hero__inner"], [1, "dash-hero__title"], [1, "dash-hero__sub"], ["class", "id-card", 4, "ngIf"], ["class", "id-active", 4, "ngIf"], ["class", "push-card", 4, "ngIf"], ["class", "dash-body", 4, "ngIf"], [1, "id-card"], [1, "id-label"], ["class", "id-row", 4, "ngIf"], ["class", "id-error", 4, "ngIf"], [1, "id-hint"], ["routerLink", "/marathon-biblique"], [1, "id-row"], ["type", "email", "placeholder", "exemple@mail.com", 1, "id-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], ["type", "text", "inputmode", "numeric", "maxlength", "4", "placeholder", "Code \u00E0 4 chiffres", 1, "id-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "id-error"], [1, "id-active"], [1, "id-avatar"], [1, "id-email"], [1, "btn-logout", 3, "click"], [1, "push-card"], [4, "ngIf"], ["type", "button", 3, "click", "disabled"], [1, "dash-body"], [1, "dash-section", "mentorship-section"], [1, "mentorship-intro"], [1, "mentorship-form"], ["maxlength", "160", "placeholder", "Sujet: foi, famille, \u00E9tudes, service\u2026", 3, "ngModelChange", "ngModel"], ["maxlength", "3000", "rows", "4", "placeholder", "Votre besoin et vos disponibilit\u00E9s", 3, "ngModelChange", "ngModel"], [3, "click", "disabled"], ["class", "mentorship-history", 4, "ngIf"], [1, "dash-section"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-num"], [1, "stat-label"], [1, "stat-card", "stat-card--green"], [1, "stat-card", "stat-card--blue"], [1, "stat-card", "stat-card--gold"], ["class", "dash-section", 4, "ngIf"], [1, "dash-section__title"], [1, "coming-soon-grid"], [1, "coming-card"], [1, "coming-icon"], [1, "soon-badge"], [1, "mentorship-history"], [4, "ngFor", "ngForOf"], [1, "active-grid"], ["class", "active-card", 4, "ngFor", "ngForOf"], [1, "active-card"], [1, "active-card__head"], [1, "active-title"], [1, "active-scope"], ["class", "rank-badge", 4, "ngIf"], [1, "prog-track"], [1, "prog-fill"], [1, "prog-meta"], [1, "milestones-row"], ["class", "ms-chip", 3, "reached", 4, "ngFor", "ngForOf"], [1, "active-dates"], ["routerLink", "/marathon-biblique", 1, "btn-goto"], [1, "rank-badge"], [1, "rank-num"], [1, "rank-total"], [1, "ms-chip"], ["class", "ms-label", 4, "ngIf"], [1, "ms-label"], [1, "dash-section__sub"], [1, "chart-wrap"], [1, "chart-bars"], ["class", "chart-col", 4, "ngFor", "ngForOf"], [1, "chart-baseline"], [1, "chart-col"], [1, "chart-bar-wrap"], [1, "chart-pct"], [1, "chart-bar"], [1, "chart-label"], [1, "badges-grid"], ["class", "badge-card", 4, "ngFor", "ngForOf"], [1, "badge-card"], [1, "badge-icon"], [1, "badge-label"], [1, "badge-desc"], [1, "history-table-wrap"], [1, "history-table"], [1, "scope-chip"], [1, "dates-cell"], [1, "mini-track"], [1, "mini-fill"], [1, "mini-pct"], ["class", "ms-dot", 3, "reached", "title", 4, "ngFor", "ngForOf"], [1, "ms-dot", 3, "title"]], template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
        i0.ɵɵtext(4, "Mon Espace");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p", 4);
        i0.ɵɵtext(6, "Suis ta progression, ton rang et tes badges dans les Marathons Bibliques.");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, UserDashboardComponent_div_7_Template, 11, 4, "div", 5)(8, UserDashboardComponent_div_8_Template, 10, 3, "div", 6)(9, UserDashboardComponent_div_9_Template, 9, 3, "div", 7);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(10, UserDashboardComponent_div_10_Template, 82, 14, "div", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", !ctx.identified);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.identified);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.identified && ctx.pushSupported);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.identified && ctx.dashboard);
    } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, FormsModule, i5.DefaultValueAccessor, i5.NgControlStatus, i5.MaxLengthValidator, i5.NgModel, HttpClientModule, RouterModule, i6.RouterLink], styles: ["[_nghost-%COMP%] {\n  --brand:   #1D546C;\n  --accent:  #00B7B5;\n  --bg:      #f4f6fb;\n  --surface: #ffffff;\n  --border:  #dde6f0;\n  --text:    #1a1f2e;\n  --muted:   #5a6480;\n  --green:   #16a34a;\n  --blue:    #4f7dff;\n  --gold:    #ca8a04;\n\n  display: block;\n  font-family: system-ui, -apple-system, sans-serif;\n  background: var(--bg);\n  min-height: 100vh;\n}\n\n\n\n.dash-hero[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--brand) 0%, #0b8da1 100%);\n  color: #fff;\n  padding: 48px 24px;\n}\n\n.dash-hero__inner[_ngcontent-%COMP%] { max-width: 700px; margin: 0 auto; text-align: center; }\n.dash-hero__title[_ngcontent-%COMP%] { font-size: 2.2rem; font-weight: 900; margin: 0 0 8px; }\n.dash-hero__sub[_ngcontent-%COMP%]   { opacity: 0.85; margin: 0 0 32px; font-size: 1.05rem; }\n\n\n\n.id-card[_ngcontent-%COMP%]  { background: rgba(255,255,255,0.1); border-radius: 16px; padding: 24px; backdrop-filter: blur(8px); }\n.id-label[_ngcontent-%COMP%] { font-size: 0.95rem; opacity: 0.9; margin: 0 0 14px; }\n\n.id-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.id-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 10px;\n  border: none;\n  font-size: 14px;\n  outline: none;\n  min-width: 0;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 22px;\n  background: var(--accent);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled { opacity: 0.6; cursor: default; }\n\n.id-error[_ngcontent-%COMP%] { color: #fca5a5; font-size: 13px; margin: 10px 0 0; }\n.id-hint[_ngcontent-%COMP%]  { font-size: 13px; opacity: 0.8; margin: 12px 0 0; }\n.id-hint[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: #a5f3fc; }\n\n\n\n.id-active[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.id-avatar[_ngcontent-%COMP%] {\n  width: 48px; height: 48px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  font-weight: 900;\n}\n\n.id-active[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; font-size: 1.1rem; }\n.id-email[_ngcontent-%COMP%]         { font-size: 0.85rem; opacity: 0.75; }\n\n.btn-logout[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.15);\n  border: 1px solid rgba(255,255,255,0.3);\n  color: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-logout[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.25); }\n\n\n\n.dash-body[_ngcontent-%COMP%] { max-width: 1100px; margin: 0 auto; padding: 32px 20px 60px; display: flex; flex-direction: column; gap: 32px; }\n\n.dash-section[_ngcontent-%COMP%] {}\n.dash-section__title[_ngcontent-%COMP%] { font-size: 1.2rem; font-weight: 800; color: var(--text); margin: 0 0 8px; }\n.dash-section__sub[_ngcontent-%COMP%]   { font-size: 0.9rem; color: var(--muted); margin: 0 0 20px; }\n\n\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.04);\n}\n\n.stat-card--green[_ngcontent-%COMP%] { border-top: 3px solid var(--green); }\n.stat-card--blue[_ngcontent-%COMP%]  { border-top: 3px solid var(--blue);  }\n.stat-card--gold[_ngcontent-%COMP%]  { border-top: 3px solid var(--gold);  }\n\n.stat-icon[_ngcontent-%COMP%]  { font-size: 1.5rem; }\n.stat-num[_ngcontent-%COMP%]   { font-size: 2rem; font-weight: 900; color: var(--text); line-height: 1.1; }\n.stat-label[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--muted); text-align: center; font-weight: 600; }\n\n\n\n.active-grid[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 16px; }\n\n.active-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.active-card__head[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }\n.active-title[_ngcontent-%COMP%] { display: block; font-size: 1.05rem; color: var(--text); margin-bottom: 4px; }\n.active-scope[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--muted); background: var(--bg); padding: 2px 8px; border-radius: 999px; border: 1px solid var(--border); }\n\n.rank-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 6px 14px;\n  white-space: nowrap;\n}\n\n.rank-num[_ngcontent-%COMP%]   { font-size: 1.4rem; font-weight: 900; color: var(--blue); }\n.rank-total[_ngcontent-%COMP%] { font-size: 0.8rem; color: var(--muted); }\n\n.prog-track[_ngcontent-%COMP%] { height: 8px; background: var(--bg); border-radius: 999px; overflow: hidden; }\n.prog-fill[_ngcontent-%COMP%]  { height: 100%; border-radius: 999px; transition: width 0.5s ease; }\n\n.prog-meta[_ngcontent-%COMP%] { display: flex; justify-content: space-between; font-size: 12px; color: var(--muted); }\n.prog-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--text); }\n\n.milestones-row[_ngcontent-%COMP%] { display: flex; gap: 8px; flex-wrap: wrap; }\n\n.ms-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: var(--bg);\n  color: #aab0c4;\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n}\n\n.ms-chip.reached[_ngcontent-%COMP%] { background: #dcfce7; color: var(--green); border-color: #bbf7d0; }\n.ms-label[_ngcontent-%COMP%]        { font-size: 10px; font-weight: 600; }\n\n.active-dates[_ngcontent-%COMP%] { font-size: 11px; color: var(--muted); }\n.btn-goto[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--brand);\n  text-decoration: none;\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.btn-goto[_ngcontent-%COMP%]:hover { background: var(--bg); }\n\n\n\n.chart-wrap[_ngcontent-%COMP%] { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 24px 24px 0; }\n\n.chart-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  min-height: 180px;\n  padding-bottom: 8px;\n}\n\n.chart-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 0;\n}\n\n.chart-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n}\n\n.chart-pct[_ngcontent-%COMP%] { font-size: 11px; font-weight: 700; color: var(--muted); }\n\n.chart-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 60px;\n  border-radius: 6px 6px 0 0;\n  min-height: 4px;\n  transition: height 0.4s ease;\n}\n\n.chart-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--muted);\n  text-align: center;\n  word-break: break-word;\n  line-height: 1.3;\n  max-width: 70px;\n}\n\n.chart-baseline[_ngcontent-%COMP%] { height: 2px; background: var(--border); margin: 0 -24px; }\n\n\n\n.badges-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 14px;\n}\n\n.badge-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.04);\n}\n\n.badge-icon[_ngcontent-%COMP%]  { font-size: 2rem; }\n.badge-label[_ngcontent-%COMP%] { font-size: 0.9rem; font-weight: 800; color: var(--text); }\n.badge-desc[_ngcontent-%COMP%]  { font-size: 0.78rem; color: var(--muted); margin: 0; line-height: 1.4; }\n\n\n\n.history-table-wrap[_ngcontent-%COMP%] { overflow-x: auto; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; }\n\n.history-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; font-size: 13px; }\n.history-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background: var(--bg); padding: 12px 16px; text-align: left; font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border); }\n.history-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 12px 16px; border-bottom: 1px solid #f0f2f8; color: var(--text); vertical-align: middle; }\n.history-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] { border-bottom: none; }\n\n.scope-chip[_ngcontent-%COMP%] { font-size: 11px; padding: 2px 8px; background: var(--bg); border-radius: 999px; border: 1px solid var(--border); color: var(--muted); }\n.dates-cell[_ngcontent-%COMP%] { font-size: 11px; color: var(--muted); white-space: nowrap; }\n\n.mini-track[_ngcontent-%COMP%] { width: 80px; height: 6px; background: var(--bg); border-radius: 999px; overflow: hidden; display: inline-block; vertical-align: middle; margin-right: 6px; }\n.mini-fill[_ngcontent-%COMP%]  { height: 100%; border-radius: 999px; }\n.mini-pct[_ngcontent-%COMP%]   { font-size: 12px; font-weight: 700; vertical-align: middle; }\n\n.ms-dot[_ngcontent-%COMP%] { display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: var(--bg); border: 1px solid var(--border); margin-right: 4px; }\n.ms-dot.reached[_ngcontent-%COMP%] { background: var(--green); border-color: var(--green); }\n\n\n\n.coming-soon-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }\n\n.coming-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px dashed var(--border);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  color: var(--muted);\n  font-size: 13px;\n}\n\n.coming-icon[_ngcontent-%COMP%] { font-size: 1.6rem; filter: grayscale(1); opacity: 0.5; }\n.soon-badge[_ngcontent-%COMP%]  { font-size: 10px; background: #fef9c3; color: var(--gold); padding: 2px 8px; border-radius: 999px; font-weight: 700; border: 1px solid #fde68a; }\n\n\n\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%], .coming-soon-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n  .id-row[_ngcontent-%COMP%] { flex-direction: column; }\n  .chart-bars[_ngcontent-%COMP%] { gap: 6px; }\n}\n\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  .coming-soon-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n  .dash-hero__title[_ngcontent-%COMP%] { font-size: 1.7rem; }\n}\n.push-card[_ngcontent-%COMP%] {\n  max-width: 760px; margin: 18px auto 0; padding: 16px 18px;\n  display: flex; align-items: center; justify-content: space-between; gap: 20px;\n  color: #fff; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.13);\n  border-radius: 14px;\n}\n.push-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 4px; }\n.push-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: rgba(255,255,255,.72); font-size: 13px; }\n.push-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #f3c866; }\n.push-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto; padding: 9px 14px; border: 1px solid rgba(255,255,255,.18);\n  border-radius: 9px; color: #fff; background: rgba(255,255,255,.1); cursor: pointer;\n}\n.push-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled { opacity: .55; cursor: wait; }\n@media (max-width: 640px) {\n  .push-card[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; }\n}\n.mentorship-section[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: .8fr 1.2fr; gap: 28px;\n  padding: 26px; border: 1px solid #e4e8ed; border-radius: 18px; background: #fff;\n}\n.mentorship-intro[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { color: #b57918; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; }\n.mentorship-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 7px 0; color: #163e50; }\n.mentorship-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #66717d; line-height: 1.6; }\n.mentorship-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 9px; }\n.mentorship-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .mentorship-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 11px 12px; border: 1px solid #d9dfe5; border-radius: 9px; font: inherit;\n}\n.mentorship-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-start; padding: 10px 15px; border: 0; border-radius: 9px;\n  color: #fff; background: #1d546c; font-weight: 700; cursor: pointer;\n}\n.mentorship-history[_ngcontent-%COMP%] { grid-column: 1 / -1; display: grid; gap: 8px; }\n.mentorship-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex; justify-content: space-between; gap: 16px; padding: 12px;\n  border-radius: 10px; background: #f5f7f9;\n}\n.mentorship-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 3px; }\n.mentorship-history[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #727c87; font-size: 12px; }\n.mentorship-history[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] { color: #9a6a19; font-size: 12px; font-style: normal; }\n.mentorship-history[_ngcontent-%COMP%]   em.assigned[_ngcontent-%COMP%] { color: #14733b; }\n.mentorship-history[_ngcontent-%COMP%]   em.closed[_ngcontent-%COMP%] { color: #68717a; }\n@media (max-width: 760px) {\n  .mentorship-section[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-user-dashboard', standalone: true, imports: [CommonModule, FormsModule, HttpClientModule, RouterModule], template: "<div class=\"dash-page\">\n\n  <!-- \u2550\u2550 Identification \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <section class=\"dash-hero\">\n    <div class=\"dash-hero__inner\">\n      <h1 class=\"dash-hero__title\">Mon Espace</h1>\n      <p class=\"dash-hero__sub\">Suis ta progression, ton rang et tes badges dans les Marathons Bibliques.</p>\n\n      <div *ngIf=\"!identified\" class=\"id-card\">\n        <p class=\"id-label\">\n          {{ otpSent ? 'Saisis le code re\u00E7u pour confirmer ton identit\u00E9.' : 'Connecte-toi avec ton adresse email membre.' }}\n        </p>\n        <div class=\"id-row\" *ngIf=\"!otpSent\">\n          <input\n            class=\"id-input\"\n            type=\"email\"\n            [(ngModel)]=\"emailInput\"\n            placeholder=\"exemple@mail.com\"\n            (keyup.enter)=\"identify()\"\n          />\n          <button class=\"btn-primary\" [disabled]=\"loading\" (click)=\"identify()\">\n            {{ loading ? 'Chargement\u2026' : 'Acc\u00E9der' }}\n          </button>\n        </div>\n        <div class=\"id-row\" *ngIf=\"otpSent\">\n          <input\n            class=\"id-input\"\n            type=\"text\"\n            inputmode=\"numeric\"\n            maxlength=\"4\"\n            [(ngModel)]=\"otpCode\"\n            placeholder=\"Code \u00E0 4 chiffres\"\n            (keyup.enter)=\"verifyOtp()\"\n          />\n          <button class=\"btn-primary\" [disabled]=\"loading\" (click)=\"verifyOtp()\">\n            {{ loading ? 'V\u00E9rification\u2026' : 'Se connecter' }}\n          </button>\n        </div>\n        <p class=\"id-error\" *ngIf=\"emailError\">{{ emailError }}</p>\n        <p class=\"id-hint\">\n          Pas encore inscrit ? <a routerLink=\"/marathon-biblique\">Rejoins un marathon</a>.\n        </p>\n      </div>\n\n      <div *ngIf=\"identified\" class=\"id-active\">\n        <span class=\"id-avatar\">{{ dashboard.fullName.charAt(0).toUpperCase() }}</span>\n        <div>\n          <strong>{{ dashboard.fullName }}</strong>\n          <span class=\"id-email\">{{ dashboard.email }}</span>\n        </div>\n        <button class=\"btn-logout\" (click)=\"logout()\">Se d\u00E9connecter</button>\n      </div>\n\n      <div class=\"push-card\" *ngIf=\"identified && pushSupported\">\n        <div>\n          <strong>Rappels de r\u00E9union</strong>\n          <span>Recevoir une notification sur cet appareil une heure avant chaque r\u00E9union.</span>\n          <small *ngIf=\"pushMessage\">{{ pushMessage }}</small>\n        </div>\n        <button type=\"button\" [disabled]=\"pushLoading\" (click)=\"togglePush()\">\n          {{ pushLoading ? 'Patientez\u2026' : (pushSubscribed ? 'D\u00E9sactiver' : 'Activer') }}\n        </button>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2550\u2550 Dashboard (apr\u00E8s identification) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class=\"dash-body\" *ngIf=\"identified && dashboard\">\n\n    <section class=\"dash-section mentorship-section\">\n      <div class=\"mentorship-intro\">\n        <span>Accompagnement</span>\n        <h2>Demander un mentor</h2>\n        <p>Expliquez bri\u00E8vement le domaine dans lequel vous souhaitez \u00EAtre accompagn\u00E9. L\u2019\u00E9quipe vous mettra en relation avec un mentor.</p>\n      </div>\n      <div class=\"mentorship-form\">\n        <input [(ngModel)]=\"mentorshipTopic\" maxlength=\"160\" placeholder=\"Sujet: foi, famille, \u00E9tudes, service\u2026\">\n        <textarea [(ngModel)]=\"mentorshipMessage\" maxlength=\"3000\" rows=\"4\" placeholder=\"Votre besoin et vos disponibilit\u00E9s\"></textarea>\n        <button [disabled]=\"mentorshipLoading || !mentorshipTopic.trim() || !mentorshipMessage.trim()\"\n                (click)=\"submitMentorship()\">\n          {{ mentorshipLoading ? 'Envoi\u2026' : 'Envoyer la demande' }}\n        </button>\n        <small *ngIf=\"mentorshipNotice\">{{ mentorshipNotice }}</small>\n      </div>\n      <div class=\"mentorship-history\" *ngIf=\"mentorshipRequests.length\">\n        <article *ngFor=\"let request of mentorshipRequests\">\n          <div>\n            <strong>{{ request.topic }}</strong>\n            <span>{{ request.mentor ? 'Mentor: ' + request.mentor.firstName + ' ' + request.mentor.lastName : 'En attente d\u2019affectation' }}</span>\n          </div>\n          <em [class.assigned]=\"request.status === 'assigned'\" [class.closed]=\"request.status === 'closed'\">\n            {{ request.status === 'pending' ? 'En attente' : (request.status === 'assigned' ? 'Assign\u00E9' : 'Cl\u00F4tur\u00E9') }}\n          </em>\n        </article>\n      </div>\n    </section>\n\n    <!-- \u2500\u2500 Stats globales \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <section class=\"dash-section\">\n      <div class=\"stats-grid\">\n        <div class=\"stat-card\">\n          <span class=\"stat-icon\">\uD83D\uDCDA</span>\n          <span class=\"stat-num\">{{ dashboard.stats.totalMarathons }}</span>\n          <span class=\"stat-label\">Marathon(s) particip\u00E9(s)</span>\n        </div>\n        <div class=\"stat-card stat-card--green\">\n          <span class=\"stat-icon\">\u2705</span>\n          <span class=\"stat-num\">{{ dashboard.stats.completed }}</span>\n          <span class=\"stat-label\">Termin\u00E9(s) \u00E0 100%</span>\n        </div>\n        <div class=\"stat-card stat-card--blue\">\n          <span class=\"stat-icon\">\uD83D\uDD25</span>\n          <span class=\"stat-num\">{{ dashboard.stats.inProgress }}</span>\n          <span class=\"stat-label\">En cours</span>\n        </div>\n        <div class=\"stat-card stat-card--gold\">\n          <span class=\"stat-icon\">\uD83D\uDCD6</span>\n          <span class=\"stat-num\">{{ dashboard.stats.totalDaysRead }}</span>\n          <span class=\"stat-label\">Jours de lecture coch\u00E9s</span>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2500\u2500 Marathons actifs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <section class=\"dash-section\" *ngIf=\"dashboard.marathonsActifs.length > 0\">\n      <h2 class=\"dash-section__title\">\uD83D\uDCC5 Marathons en cours</h2>\n      <div class=\"active-grid\">\n        <div class=\"active-card\" *ngFor=\"let m of dashboard.marathonsActifs\">\n          <div class=\"active-card__head\">\n            <div>\n              <strong class=\"active-title\">{{ m.titre }}</strong>\n              <span class=\"active-scope\">{{ scopeLabels[m.scope] }}</span>\n            </div>\n            <div class=\"rank-badge\" *ngIf=\"m.rank\">\n              <span class=\"rank-num\">#{{ m.rank }}</span>\n              <span class=\"rank-total\">/ {{ m.totalParticipants }}</span>\n            </div>\n          </div>\n\n          <!-- Barre de progression -->\n          <div class=\"prog-track\">\n            <div class=\"prog-fill\" [style.width.%]=\"m.progressPercent\" [style.background]=\"barColor(m.statut, m.progressPercent)\"></div>\n          </div>\n          <div class=\"prog-meta\">\n            <span>{{ m.daysRead }} / {{ m.nbJours }} jours lus</span>\n            <strong>{{ m.progressPercent }}%</strong>\n          </div>\n\n          <!-- Jalons -->\n          <div class=\"milestones-row\">\n            <span\n              *ngFor=\"let ms of [25,50,75,100]\"\n              class=\"ms-chip\"\n              [class.reached]=\"milestoneReached(m, ms)\"\n            >\n              {{ ms === 100 ? '\uD83C\uDFC6' : ms + '%' }}\n              <span *ngIf=\"ms === 100 && milestoneReached(m, ms)\" class=\"ms-label\">Attestation envoy\u00E9e</span>\n            </span>\n          </div>\n\n          <div class=\"active-dates\">{{ m.dateDebut }} \u2192 {{ m.dateFin }}</div>\n\n          <a class=\"btn-goto\" routerLink=\"/marathon-biblique\">Continuer la lecture \u2192</a>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2500\u2500 Courbe de fid\u00E9lit\u00E9 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <section class=\"dash-section\" *ngIf=\"dashboard.fideliteData.length > 0\">\n      <h2 class=\"dash-section__title\">\uD83D\uDCCA Courbe de fid\u00E9lit\u00E9 \u00E0 la Parole</h2>\n      <p class=\"dash-section__sub\">Progression compl\u00E9t\u00E9e pour chaque marathon, du premier au dernier.</p>\n\n      <div class=\"chart-wrap\">\n        <div class=\"chart-bars\">\n          <div class=\"chart-col\" *ngFor=\"let d of dashboard.fideliteData\">\n            <div class=\"chart-bar-wrap\">\n              <span class=\"chart-pct\">{{ d.percent }}%</span>\n              <div\n                class=\"chart-bar\"\n                [style.height.px]=\"chartBarHeight(d.percent)\"\n                [style.background]=\"barColor(d.statut, d.percent)\"\n              ></div>\n            </div>\n            <span class=\"chart-label\">{{ d.label }}</span>\n          </div>\n        </div>\n        <div class=\"chart-baseline\"></div>\n      </div>\n    </section>\n\n    <!-- \u2500\u2500 Badges \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <section class=\"dash-section\" *ngIf=\"dashboard.badges.length > 0\">\n      <h2 class=\"dash-section__title\">\uD83C\uDFC5 Badges obtenus</h2>\n      <div class=\"badges-grid\">\n        <div class=\"badge-card\" *ngFor=\"let b of dashboard.badges\">\n          <span class=\"badge-icon\">{{ b.icon }}</span>\n          <strong class=\"badge-label\">{{ b.label }}</strong>\n          <p class=\"badge-desc\">{{ b.desc }}</p>\n        </div>\n      </div>\n    </section>\n\n    <!-- \u2500\u2500 Historique \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <section class=\"dash-section\" *ngIf=\"dashboard.historique.length > 0\">\n      <h2 class=\"dash-section__title\">\uD83D\uDCDC Historique des marathons</h2>\n      <div class=\"history-table-wrap\">\n        <table class=\"history-table\">\n          <thead>\n            <tr>\n              <th>Marathon</th>\n              <th>Scope</th>\n              <th>P\u00E9riode</th>\n              <th>Progression</th>\n              <th>Jalons</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of dashboard.historique\">\n              <td><strong>{{ m.titre }}</strong></td>\n              <td><span class=\"scope-chip\">{{ scopeLabels[m.scope] }}</span></td>\n              <td class=\"dates-cell\">{{ m.dateDebut }} \u2192 {{ m.dateFin }}</td>\n              <td>\n                <div class=\"mini-track\">\n                  <div class=\"mini-fill\" [style.width.%]=\"m.progressPercent\" [style.background]=\"barColor(m.statut, m.progressPercent)\"></div>\n                </div>\n                <span class=\"mini-pct\">{{ m.progressPercent }}%</span>\n              </td>\n              <td>\n                <span *ngFor=\"let ms of [25,50,75,100]\"\n                      class=\"ms-dot\"\n                      [class.reached]=\"milestoneReached(m, ms)\"\n                      [title]=\"ms + '%'\">\n                </span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </section>\n\n    <!-- \u2500\u2500 Activit\u00E9 (coming soon) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <section class=\"dash-section\">\n      <h2 class=\"dash-section__title\">\uD83D\uDD0D Activit\u00E9 sur le site</h2>\n      <div class=\"coming-soon-grid\">\n        <div class=\"coming-card\"><span class=\"coming-icon\">\uD83D\uDCD7</span><span>Livres &amp; trait\u00E9s lus</span><span class=\"soon-badge\">Bient\u00F4t</span></div>\n        <div class=\"coming-card\"><span class=\"coming-icon\">\uD83D\uDCF0</span><span>Articles lus</span><span class=\"soon-badge\">Bient\u00F4t</span></div>\n        <div class=\"coming-card\"><span class=\"coming-icon\">\uD83C\uDF99\uFE0F</span><span>Messages \u00E9cout\u00E9s</span><span class=\"soon-badge\">Bient\u00F4t</span></div>\n        <div class=\"coming-card\"><span class=\"coming-icon\">\u25B6\uFE0F</span><span>Vid\u00E9os vues</span><span class=\"soon-badge\">Bient\u00F4t</span></div>\n      </div>\n    </section>\n\n  </div>\n</div>\n", styles: [":host {\n  --brand:   #1D546C;\n  --accent:  #00B7B5;\n  --bg:      #f4f6fb;\n  --surface: #ffffff;\n  --border:  #dde6f0;\n  --text:    #1a1f2e;\n  --muted:   #5a6480;\n  --green:   #16a34a;\n  --blue:    #4f7dff;\n  --gold:    #ca8a04;\n\n  display: block;\n  font-family: system-ui, -apple-system, sans-serif;\n  background: var(--bg);\n  min-height: 100vh;\n}\n\n/* \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dash-hero {\n  background: linear-gradient(135deg, var(--brand) 0%, #0b8da1 100%);\n  color: #fff;\n  padding: 48px 24px;\n}\n\n.dash-hero__inner { max-width: 700px; margin: 0 auto; text-align: center; }\n.dash-hero__title { font-size: 2.2rem; font-weight: 900; margin: 0 0 8px; }\n.dash-hero__sub   { opacity: 0.85; margin: 0 0 32px; font-size: 1.05rem; }\n\n/* Identification */\n.id-card  { background: rgba(255,255,255,0.1); border-radius: 16px; padding: 24px; backdrop-filter: blur(8px); }\n.id-label { font-size: 0.95rem; opacity: 0.9; margin: 0 0 14px; }\n\n.id-row {\n  display: flex;\n  gap: 10px;\n}\n\n.id-input {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 10px;\n  border: none;\n  font-size: 14px;\n  outline: none;\n  min-width: 0;\n}\n\n.btn-primary {\n  padding: 12px 22px;\n  background: var(--accent);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n\n.btn-primary:disabled { opacity: 0.6; cursor: default; }\n\n.id-error { color: #fca5a5; font-size: 13px; margin: 10px 0 0; }\n.id-hint  { font-size: 13px; opacity: 0.8; margin: 12px 0 0; }\n.id-hint a { color: #a5f3fc; }\n\n/* Identifi\u00E9 */\n.id-active {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.id-avatar {\n  width: 48px; height: 48px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  font-weight: 900;\n}\n\n.id-active strong { display: block; font-size: 1.1rem; }\n.id-email         { font-size: 0.85rem; opacity: 0.75; }\n\n.btn-logout {\n  background: rgba(255,255,255,0.15);\n  border: 1px solid rgba(255,255,255,0.3);\n  color: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-logout:hover { background: rgba(255,255,255,0.25); }\n\n/* \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dash-body { max-width: 1100px; margin: 0 auto; padding: 32px 20px 60px; display: flex; flex-direction: column; gap: 32px; }\n\n.dash-section {}\n.dash-section__title { font-size: 1.2rem; font-weight: 800; color: var(--text); margin: 0 0 8px; }\n.dash-section__sub   { font-size: 0.9rem; color: var(--muted); margin: 0 0 20px; }\n\n/* \u2500\u2500 Stats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n\n.stat-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.04);\n}\n\n.stat-card--green { border-top: 3px solid var(--green); }\n.stat-card--blue  { border-top: 3px solid var(--blue);  }\n.stat-card--gold  { border-top: 3px solid var(--gold);  }\n\n.stat-icon  { font-size: 1.5rem; }\n.stat-num   { font-size: 2rem; font-weight: 900; color: var(--text); line-height: 1.1; }\n.stat-label { font-size: 0.78rem; color: var(--muted); text-align: center; font-weight: 600; }\n\n/* \u2500\u2500 Marathons actifs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.active-grid { display: flex; flex-direction: column; gap: 16px; }\n\n.active-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 20px 24px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.04);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.active-card__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }\n.active-title { display: block; font-size: 1.05rem; color: var(--text); margin-bottom: 4px; }\n.active-scope { font-size: 0.78rem; color: var(--muted); background: var(--bg); padding: 2px 8px; border-radius: 999px; border: 1px solid var(--border); }\n\n.rank-badge {\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 6px 14px;\n  white-space: nowrap;\n}\n\n.rank-num   { font-size: 1.4rem; font-weight: 900; color: var(--blue); }\n.rank-total { font-size: 0.8rem; color: var(--muted); }\n\n.prog-track { height: 8px; background: var(--bg); border-radius: 999px; overflow: hidden; }\n.prog-fill  { height: 100%; border-radius: 999px; transition: width 0.5s ease; }\n\n.prog-meta { display: flex; justify-content: space-between; font-size: 12px; color: var(--muted); }\n.prog-meta strong { color: var(--text); }\n\n.milestones-row { display: flex; gap: 8px; flex-wrap: wrap; }\n\n.ms-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: var(--bg);\n  color: #aab0c4;\n  border: 1px solid var(--border);\n  transition: all 0.2s;\n}\n\n.ms-chip.reached { background: #dcfce7; color: var(--green); border-color: #bbf7d0; }\n.ms-label        { font-size: 10px; font-weight: 600; }\n\n.active-dates { font-size: 11px; color: var(--muted); }\n.btn-goto {\n  align-self: flex-start;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--brand);\n  text-decoration: none;\n  padding: 8px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  transition: background 0.15s;\n}\n.btn-goto:hover { background: var(--bg); }\n\n/* \u2500\u2500 Chart fid\u00E9lit\u00E9 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.chart-wrap { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 24px 24px 0; }\n\n.chart-bars {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  min-height: 180px;\n  padding-bottom: 8px;\n}\n\n.chart-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  flex: 1;\n  min-width: 0;\n}\n\n.chart-bar-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n}\n\n.chart-pct { font-size: 11px; font-weight: 700; color: var(--muted); }\n\n.chart-bar {\n  width: 100%;\n  max-width: 60px;\n  border-radius: 6px 6px 0 0;\n  min-height: 4px;\n  transition: height 0.4s ease;\n}\n\n.chart-label {\n  font-size: 10px;\n  color: var(--muted);\n  text-align: center;\n  word-break: break-word;\n  line-height: 1.3;\n  max-width: 70px;\n}\n\n.chart-baseline { height: 2px; background: var(--border); margin: 0 -24px; }\n\n/* \u2500\u2500 Badges \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.badges-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 14px;\n}\n\n.badge-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.04);\n}\n\n.badge-icon  { font-size: 2rem; }\n.badge-label { font-size: 0.9rem; font-weight: 800; color: var(--text); }\n.badge-desc  { font-size: 0.78rem; color: var(--muted); margin: 0; line-height: 1.4; }\n\n/* \u2500\u2500 Historique \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.history-table-wrap { overflow-x: auto; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; }\n\n.history-table { width: 100%; border-collapse: collapse; font-size: 13px; }\n.history-table th { background: var(--bg); padding: 12px 16px; text-align: left; font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border); }\n.history-table td { padding: 12px 16px; border-bottom: 1px solid #f0f2f8; color: var(--text); vertical-align: middle; }\n.history-table tr:last-child td { border-bottom: none; }\n\n.scope-chip { font-size: 11px; padding: 2px 8px; background: var(--bg); border-radius: 999px; border: 1px solid var(--border); color: var(--muted); }\n.dates-cell { font-size: 11px; color: var(--muted); white-space: nowrap; }\n\n.mini-track { width: 80px; height: 6px; background: var(--bg); border-radius: 999px; overflow: hidden; display: inline-block; vertical-align: middle; margin-right: 6px; }\n.mini-fill  { height: 100%; border-radius: 999px; }\n.mini-pct   { font-size: 12px; font-weight: 700; vertical-align: middle; }\n\n.ms-dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: var(--bg); border: 1px solid var(--border); margin-right: 4px; }\n.ms-dot.reached { background: var(--green); border-color: var(--green); }\n\n/* \u2500\u2500 Coming soon \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.coming-soon-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }\n\n.coming-card {\n  background: var(--surface);\n  border: 1px dashed var(--border);\n  border-radius: 14px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  color: var(--muted);\n  font-size: 13px;\n}\n\n.coming-icon { font-size: 1.6rem; filter: grayscale(1); opacity: 0.5; }\n.soon-badge  { font-size: 10px; background: #fef9c3; color: var(--gold); padding: 2px 8px; border-radius: 999px; font-weight: 700; border: 1px solid #fde68a; }\n\n/* \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media (max-width: 768px) {\n  .stats-grid, .coming-soon-grid { grid-template-columns: repeat(2, 1fr); }\n  .id-row { flex-direction: column; }\n  .chart-bars { gap: 6px; }\n}\n\n@media (max-width: 480px) {\n  .stats-grid { grid-template-columns: 1fr 1fr; }\n  .coming-soon-grid { grid-template-columns: 1fr 1fr; }\n  .dash-hero__title { font-size: 1.7rem; }\n}\n.push-card {\n  max-width: 760px; margin: 18px auto 0; padding: 16px 18px;\n  display: flex; align-items: center; justify-content: space-between; gap: 20px;\n  color: #fff; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.13);\n  border-radius: 14px;\n}\n.push-card div { display: flex; flex-direction: column; gap: 4px; }\n.push-card span { color: rgba(255,255,255,.72); font-size: 13px; }\n.push-card small { color: #f3c866; }\n.push-card button {\n  flex: 0 0 auto; padding: 9px 14px; border: 1px solid rgba(255,255,255,.18);\n  border-radius: 9px; color: #fff; background: rgba(255,255,255,.1); cursor: pointer;\n}\n.push-card button:disabled { opacity: .55; cursor: wait; }\n@media (max-width: 640px) {\n  .push-card { align-items: stretch; flex-direction: column; }\n}\n.mentorship-section {\n  display: grid; grid-template-columns: .8fr 1.2fr; gap: 28px;\n  padding: 26px; border: 1px solid #e4e8ed; border-radius: 18px; background: #fff;\n}\n.mentorship-intro > span { color: #b57918; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; }\n.mentorship-intro h2 { margin: 7px 0; color: #163e50; }\n.mentorship-intro p { color: #66717d; line-height: 1.6; }\n.mentorship-form { display: flex; flex-direction: column; gap: 9px; }\n.mentorship-form input, .mentorship-form textarea {\n  padding: 11px 12px; border: 1px solid #d9dfe5; border-radius: 9px; font: inherit;\n}\n.mentorship-form button {\n  align-self: flex-start; padding: 10px 15px; border: 0; border-radius: 9px;\n  color: #fff; background: #1d546c; font-weight: 700; cursor: pointer;\n}\n.mentorship-history { grid-column: 1 / -1; display: grid; gap: 8px; }\n.mentorship-history article {\n  display: flex; justify-content: space-between; gap: 16px; padding: 12px;\n  border-radius: 10px; background: #f5f7f9;\n}\n.mentorship-history article div { display: flex; flex-direction: column; gap: 3px; }\n.mentorship-history article span { color: #727c87; font-size: 12px; }\n.mentorship-history em { color: #9a6a19; font-size: 12px; font-style: normal; }\n.mentorship-history em.assigned { color: #14733b; }\n.mentorship-history em.closed { color: #68717a; }\n@media (max-width: 760px) {\n  .mentorship-section { grid-template-columns: 1fr; }\n}\n"] }]
    }], () => [{ type: i1.HttpClient }, { type: i2.MemberAuthService }, { type: i3.PushNotificationsService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserDashboardComponent, { className: "UserDashboardComponent", filePath: "app\\pages\\user-dashboard\\user-dashboard.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=user-dashboard.component.js.map