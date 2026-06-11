import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/reunions.service";
import * as i2 from "@angular/router";
import * as i3 from "../../services/api.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function ReunionsAdminComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.success);
} }
function ReunionsAdminComponent_div_7_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "label");
    i0.ɵɵtext(2, "Fr\u00E9quence");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_7_div_44_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.form.recurrenceRule, $event) || (ctx_r0.form.recurrenceRule = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 25);
    i0.ɵɵtext(5, "Tous les jours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 26);
    i0.ɵɵtext(7, "Toutes les semaines");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 27);
    i0.ɵɵtext(9, "Toutes les deux semaines");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 28);
    i0.ɵɵtext(11, "Tous les mois");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.recurrenceRule);
} }
function ReunionsAdminComponent_div_7_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function ReunionsAdminComponent_div_7_span_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Cr\u00E9er la r\u00E9union");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_7_span_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Cr\u00E9ation...");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "h2");
    i0.ɵɵtext(2, "Nouvelle r\u00E9union");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 9)(4, "div", 10)(5, "label");
    i0.ɵɵtext(6, "Titre *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 11);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_7_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.title, $event) || (ctx_r0.form.title = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 10)(9, "label");
    i0.ɵɵtext(10, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "textarea", 12);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_7_Template_textarea_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.description, $event) || (ctx_r0.form.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 13)(13, "label");
    i0.ɵɵtext(14, "Date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_7_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.startTime, $event) || (ctx_r0.form.startTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 13)(17, "label");
    i0.ɵɵtext(18, "Heure *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_7_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.startHour, $event) || (ctx_r0.form.startHour = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 13)(21, "label");
    i0.ɵɵtext(22, "Visibilit\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_7_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.isPublic, $event) || (ctx_r0.form.isPublic = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(24, "option", 17);
    i0.ɵɵtext(25, "Public (tout le monde)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 17);
    i0.ɵɵtext(27, "Priv\u00E9 (membres uniquement)");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 13)(29, "label");
    i0.ɵɵtext(30, "R\u00E9currence");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_7_Template_select_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.isRecurring, $event) || (ctx_r0.form.isRecurring = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(32, "option", 17);
    i0.ɵɵtext(33, "Ponctuelle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 17);
    i0.ɵɵtext(35, "R\u00E9currente");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 13)(37, "label");
    i0.ɵɵtext(38, "Salle d\u2019attente");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_7_Template_select_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.lobbyEnabled, $event) || (ctx_r0.form.lobbyEnabled = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(40, "option", 17);
    i0.ɵɵtext(41, "Acc\u00E8s direct");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option", 17);
    i0.ɵɵtext(43, "Admission par un mod\u00E9rateur");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(44, ReunionsAdminComponent_div_7_div_44_Template, 12, 1, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(45, ReunionsAdminComponent_div_7_div_45_Template, 2, 1, "div", 19);
    i0.ɵɵelementStart(46, "div", 20)(47, "button", 21);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_7_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeForm()); });
    i0.ɵɵtext(48, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "button", 22);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_7_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.startNow()); });
    i0.ɵɵtext(50, " \u25B6 Lancer maintenant ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "button", 23);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_7_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.create()); });
    i0.ɵɵtemplate(52, ReunionsAdminComponent_div_7_span_52_Template, 2, 0, "span", 24)(53, ReunionsAdminComponent_div_7_span_53_Template, 2, 0, "span", 24);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.description);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.startTime);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.startHour);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.isPublic);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.isRecurring);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.lobbyEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.form.isRecurring);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.error);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r0.saving || !ctx_r0.form.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving || !ctx_r0.form.title || !ctx_r0.form.startTime);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.saving);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.saving);
} }
function ReunionsAdminComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 47);
    i0.ɵɵtext(1, "R\u00E9current");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 47);
    i0.ɵɵtext(1, "Salle d\u2019attente");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const m_r5 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.joinMeeting(m_r5.id)); });
    i0.ɵɵtext(1, " \u25B6 Rejoindre ");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const m_r5 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openInvite(m_r5.id)); });
    i0.ɵɵtext(1, " \uD83D\uDD17 Lien responsable ");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const m_r5 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.sendReminders(m_r5.id)); });
    i0.ɵɵtext(1, " \u2709 Rappels ");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const m_r5 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.cancel(m_r5.id)); });
    i0.ɵɵtext(1, " Annuler ");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const m_r5 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.viewAttendance(m_r5.id)); });
    i0.ɵɵtext(1, " \uD83D\uDC65 Pr\u00E9sence ");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_19_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const member_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", member_r11.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", member_r11.firstName, " ", member_r11.lastName, " \u00B7 ", member_r11.email, " ");
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_19_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59)(1, "input", 60);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_div_19_div_13_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r12); return i0.ɵɵresetView($event.target.select()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_div_19_div_13_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.copyInvite()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.inviteLink);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.inviteCopied ? "Copi\u00E9" : "Copier");
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_19_div_14_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_div_19_div_14_div_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const invite_r14 = i0.ɵɵnextContext().$implicit; const m_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.revokeInvite(m_r5.id, invite_r14.id)); });
    i0.ɵɵtext(1, "R\u00E9voquer");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_19_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ReunionsAdminComponent_div_9_ng_container_1_div_19_div_14_div_1_button_3_Template, 2, 0, "button", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const invite_r14 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", invite_r14.member == null ? null : invite_r14.member.firstName, " ", invite_r14.member == null ? null : invite_r14.member.lastName, " \u00B7 ", invite_r14.revokedAt ? "R\u00E9voqu\u00E9" : "Actif", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !invite_r14.revokedAt);
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_19_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61);
    i0.ɵɵtemplate(1, ReunionsAdminComponent_div_9_ng_container_1_div_19_div_14_div_1_Template, 4, 4, "div", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.meetingInvites[m_r5.id]);
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "div")(2, "strong");
    i0.ɵɵtext(3, "Acc\u00E8s simplifi\u00E9 pour un responsable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Le responsable clique sur le lien re\u00E7u et entre directement dans cette r\u00E9union avec la r\u00E9gie.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 53)(7, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function ReunionsAdminComponent_div_9_ng_container_1_div_19_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.inviteMemberId, $event) || (ctx_r0.inviteMemberId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(8, "option", 54);
    i0.ɵɵtext(9, "Choisir le responsable");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, ReunionsAdminComponent_div_9_ng_container_1_div_19_option_10_Template, 2, 4, "option", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 23);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_div_19_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r10); const m_r5 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.createInvite(m_r5.id)); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, ReunionsAdminComponent_div_9_ng_container_1_div_19_div_13_Template, 4, 2, "div", 56)(14, ReunionsAdminComponent_div_9_ng_container_1_div_19_div_14_Template, 2, 1, "div", 57);
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16, "Le lien est limit\u00E9 \u00E0 cette r\u00E9union. R\u00E9voquez-le imm\u00E9diatement si le t\u00E9l\u00E9phone est perdu.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inviteMemberId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.members);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r0.inviteMemberId || ctx_r0.inviteLoading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.inviteLoading ? "Cr\u00E9ation\u2026" : "Cr\u00E9er et copier le lien", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.inviteLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.meetingInvites[m_r5.id] == null ? null : ctx_r0.meetingInvites[m_r5.id].length);
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_20_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_20_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtext(1, "Aucun participant enregistr\u00E9.");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_20_table_8_tr_14_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1, "Admin");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_20_table_8_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtemplate(12, ReunionsAdminComponent_div_9_ng_container_1_div_20_table_8_tr_14_span_12_Template, 2, 0, "span", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r16.displayName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((p_r16.member == null ? null : p_r16.member.email) || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 5, p_r16.joinedAt, "HH:mm"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.formatDuration(p_r16.durationMinutes));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", p_r16.wasAdmin);
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_20_table_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 71)(1, "thead")(2, "tr")(3, "th");
    i0.ɵɵtext(4, "Participant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Arriv\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Dur\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "R\u00F4le");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "tbody");
    i0.ɵɵtemplate(14, ReunionsAdminComponent_div_9_ng_container_1_div_20_table_8_tr_14_Template, 13, 8, "tr", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngForOf", ctx_r0.attendance);
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_20_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 73);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Total : ", ctx_r0.attendance.length, " participant(s) ");
} }
function ReunionsAdminComponent_div_9_ng_container_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 63)(2, "strong");
    i0.ɵɵtext(3, "Registre de pr\u00E9sence");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 64);
    i0.ɵɵlistener("click", function ReunionsAdminComponent_div_9_ng_container_1_div_20_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectedMeetingId = null); });
    i0.ɵɵtext(5, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, ReunionsAdminComponent_div_9_ng_container_1_div_20_div_6_Template, 2, 0, "div", 65)(7, ReunionsAdminComponent_div_9_ng_container_1_div_20_div_7_Template, 2, 0, "div", 66)(8, ReunionsAdminComponent_div_9_ng_container_1_div_20_table_8_Template, 15, 1, "table", 67)(9, ReunionsAdminComponent_div_9_ng_container_1_div_20_p_9_Template, 2, 1, "p", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r0.loadingAttendance);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loadingAttendance && ctx_r0.attendance.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loadingAttendance && ctx_r0.attendance.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loadingAttendance && ctx_r0.attendance.length > 0);
} }
function ReunionsAdminComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34)(2, "div", 35)(3, "span", 36);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 37);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 38);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ReunionsAdminComponent_div_9_ng_container_1_span_11_Template, 2, 0, "span", 39)(12, ReunionsAdminComponent_div_9_ng_container_1_span_12_Template, 2, 0, "span", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 40);
    i0.ɵɵtemplate(14, ReunionsAdminComponent_div_9_ng_container_1_button_14_Template, 2, 0, "button", 41)(15, ReunionsAdminComponent_div_9_ng_container_1_button_15_Template, 2, 0, "button", 42)(16, ReunionsAdminComponent_div_9_ng_container_1_button_16_Template, 2, 0, "button", 43)(17, ReunionsAdminComponent_div_9_ng_container_1_button_17_Template, 2, 0, "button", 44)(18, ReunionsAdminComponent_div_9_ng_container_1_button_18_Template, 2, 0, "button", 42);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(19, ReunionsAdminComponent_div_9_ng_container_1_div_19_Template, 17, 6, "div", 45)(20, ReunionsAdminComponent_div_9_ng_container_1_div_20_Template, 10, 4, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("meeting-row--live", m_r5.status === "live");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("live", m_r5.status === "live");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.statusLabel(m_r5.status), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formatDate(m_r5.startTime));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("badge--private", !m_r5.isPublic);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", m_r5.isPublic ? "Public" : "Priv\u00E9", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r5.isRecurring);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r5.lobbyEnabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", m_r5.status === "scheduled" || m_r5.status === "live");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r5.status === "scheduled" || m_r5.status === "live");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r5.status === "scheduled");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r5.status === "scheduled" || m_r5.status === "live");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r5.status === "ended" || m_r5.status === "live");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.inviteMeetingId === m_r5.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.selectedMeetingId === m_r5.id);
} }
function ReunionsAdminComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtext(1, " Aucune r\u00E9union. Cr\u00E9ez-en une avec le bouton ci-dessus. ");
    i0.ɵɵelementEnd();
} }
function ReunionsAdminComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtemplate(1, ReunionsAdminComponent_div_9_ng_container_1_Template, 21, 19, "ng-container", 32)(2, ReunionsAdminComponent_div_9_div_2_Template, 2, 0, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.meetings);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.meetings.length === 0);
} }
export class ReunionsAdminComponent {
    constructor(reunionsService, router, api) {
        this.reunionsService = reunionsService;
        this.router = router;
        this.api = api;
        this.meetings = [];
        this.loading = true;
        this.showForm = false;
        this.saving = false;
        this.error = '';
        this.success = '';
        // Registre de présence
        this.selectedMeetingId = null;
        this.attendance = [];
        this.loadingAttendance = false;
        this.members = [];
        this.inviteMeetingId = null;
        this.inviteMemberId = '';
        this.inviteLink = '';
        this.inviteLoading = false;
        this.inviteCopied = false;
        this.meetingInvites = {};
        this.form = {
            title: '',
            description: '',
            startTime: '',
            startHour: '10:00',
            isPublic: true,
            lobbyEnabled: false,
            isRecurring: false,
            recurrenceRule: 'FREQ=WEEKLY;INTERVAL=1',
        };
    }
    ngOnInit() {
        this.load();
        this.api.getMembres().subscribe({ next: members => this.members = members });
    }
    openInvite(meetingId) {
        this.inviteMeetingId = this.inviteMeetingId === meetingId ? null : meetingId;
        this.inviteMemberId = '';
        this.inviteLink = '';
        this.inviteCopied = false;
        if (this.inviteMeetingId)
            this.loadInvites(meetingId);
    }
    loadInvites(meetingId) {
        this.reunionsService.getModeratorInvites(meetingId).subscribe({
            next: invites => this.meetingInvites[meetingId] = invites,
        });
    }
    revokeInvite(meetingId, inviteId) {
        this.reunionsService.revokeModeratorInvite(meetingId, inviteId).subscribe({
            next: () => this.loadInvites(meetingId),
        });
    }
    createInvite(meetingId) {
        if (!this.inviteMemberId)
            return;
        this.inviteLoading = true;
        this.reunionsService.createModeratorInvite(meetingId, this.inviteMemberId).subscribe({
            next: result => {
                this.inviteLink = `${window.location.origin}/reunions/invitation?token=${encodeURIComponent(result.token)}`;
                this.inviteLoading = false;
                this.copyInvite();
                this.loadInvites(meetingId);
            },
            error: err => {
                var _a, _b;
                this.error = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Impossible de créer le lien.';
                this.inviteLoading = false;
            },
        });
    }
    async copyInvite() {
        if (!this.inviteLink)
            return;
        try {
            await navigator.clipboard.writeText(this.inviteLink);
            this.inviteCopied = true;
        }
        catch (_a) {
            this.inviteCopied = false;
        }
    }
    load() {
        this.reunionsService.getAllAdmin().subscribe({
            next: (m) => { this.meetings = m; this.loading = false; },
            error: () => this.loading = false,
        });
    }
    openForm() {
        this.showForm = true;
        this.error = '';
        this.success = '';
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.form.startTime = tomorrow.toISOString().split('T')[0];
    }
    closeForm() {
        this.showForm = false;
        this.form = {
            title: '',
            description: '',
            startTime: '',
            startHour: '10:00',
            isPublic: true,
            lobbyEnabled: false,
            isRecurring: false,
            recurrenceRule: 'FREQ=WEEKLY;INTERVAL=1',
        };
    }
    create() {
        if (!this.form.title || !this.form.startTime)
            return;
        this.saving = true;
        this.error = '';
        const startTime = new Date(`${this.form.startTime}T${this.form.startHour}:00`).toISOString();
        this.reunionsService.create({
            title: this.form.title,
            description: this.form.description,
            startTime: startTime,
            isPublic: this.form.isPublic,
            lobbyEnabled: this.form.lobbyEnabled,
            isRecurring: this.form.isRecurring,
            recurrenceRule: this.form.isRecurring ? this.form.recurrenceRule : undefined,
        }).subscribe({
            next: () => {
                this.saving = false;
                this.success = 'Réunion créée avec succès !';
                this.closeForm();
                this.load();
            },
            error: (err) => {
                var _a, _b;
                this.error = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de la création.';
                this.saving = false;
            },
        });
    }
    startNow() {
        if (!this.form.title)
            return;
        this.saving = true;
        const startTime = new Date().toISOString();
        this.reunionsService.create({
            title: this.form.title,
            description: this.form.description,
            startTime: startTime,
            isPublic: this.form.isPublic,
            lobbyEnabled: this.form.lobbyEnabled,
        }).subscribe({
            next: () => {
                this.saving = false;
                this.success = 'Réunion lancée !';
                this.closeForm();
                this.load();
            },
            error: () => { this.error = 'Erreur.'; this.saving = false; },
        });
    }
    cancel(id) {
        if (!confirm('Annuler cette réunion ?'))
            return;
        this.reunionsService.delete(id).subscribe({ next: () => this.load() });
    }
    joinMeeting(id) {
        this.reunionsService.join(id).subscribe({
            next: (result) => {
                if ('jitsiToken' in result) {
                    this.router.navigate(['/reunions', id, 'salle'], { state: { jitsiData: result } });
                }
            },
            error: () => alert('Impossible de rejoindre la réunion.'),
        });
    }
    sendReminders(id) {
        this.reunionsService.sendReminders(id).subscribe({
            next: (res) => { var _a; return alert((_a = res === null || res === void 0 ? void 0 : res.message) !== null && _a !== void 0 ? _a : 'Rappels envoyés'); },
            error: () => alert('Erreur lors de l\'envoi des rappels'),
        });
    }
    viewAttendance(meetingId) {
        if (this.selectedMeetingId === meetingId) {
            this.selectedMeetingId = null;
            return;
        }
        this.selectedMeetingId = meetingId;
        this.loadingAttendance = true;
        this.api.getAttendance(meetingId).subscribe({
            next: (data) => { this.attendance = data; this.loadingAttendance = false; },
            error: () => { this.loadingAttendance = false; },
        });
    }
    formatDuration(minutes) {
        if (!minutes)
            return '—';
        if (minutes < 60)
            return `${minutes} min`;
        return `${Math.floor(minutes / 60)}h${minutes % 60 > 0 ? String(minutes % 60).padStart(2, '0') : ''}`;
    }
    formatDate(d) {
        return new Date(d).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    }
    statusLabel(s) {
        var _a;
        const labels = { scheduled: 'Programmée', live: '🔴 En cours', ended: 'Terminée', cancelled: 'Annulée' };
        return (_a = labels[s]) !== null && _a !== void 0 ? _a : s;
    }
}
ReunionsAdminComponent.ɵfac = function ReunionsAdminComponent_Factory(t) { return new (t || ReunionsAdminComponent)(i0.ɵɵdirectiveInject(i1.ReunionsService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.ApiService)); };
ReunionsAdminComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReunionsAdminComponent, selectors: [["app-reunions-admin"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 4, consts: [[1, "admin-page"], [1, "page-header"], [1, "btn-primary", 3, "click"], ["class", "success-msg", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "meetings-list", 4, "ngIf"], [1, "success-msg"], [1, "form-card"], [1, "form-grid"], [1, "field", "field--full"], ["type", "text", "placeholder", "Ex: Culte du dimanche", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Description optionnelle", 3, "ngModelChange", "ngModel"], [1, "field"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "time", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "ngValue"], ["class", "field field--full", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "form-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-outline", 3, "click", "disabled"], [1, "btn-primary", 3, "click", "disabled"], [4, "ngIf"], ["value", "FREQ=DAILY;INTERVAL=1"], ["value", "FREQ=WEEKLY;INTERVAL=1"], ["value", "FREQ=WEEKLY;INTERVAL=2"], ["value", "FREQ=MONTHLY;INTERVAL=1"], [1, "error-msg"], [1, "loading"], [1, "meetings-list"], [4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [1, "meeting-row"], [1, "meeting-row__info"], [1, "meeting-row__status"], [1, "meeting-row__date"], [1, "badge"], ["class", "badge badge--recurring", 4, "ngIf"], [1, "meeting-row__actions"], ["class", "btn-sm btn-sm--join", 3, "click", 4, "ngIf"], ["class", "btn-sm", 3, "click", 4, "ngIf"], ["class", "btn-sm", "title", "Envoyer rappels email", 3, "click", 4, "ngIf"], ["class", "btn-sm btn-sm--danger", 3, "click", 4, "ngIf"], ["class", "invite-panel", 4, "ngIf"], ["class", "attendance-panel", 4, "ngIf"], [1, "badge", "badge--recurring"], [1, "btn-sm", "btn-sm--join", 3, "click"], [1, "btn-sm", 3, "click"], ["title", "Envoyer rappels email", 1, "btn-sm", 3, "click"], [1, "btn-sm", "btn-sm--danger", 3, "click"], [1, "invite-panel"], [1, "invite-row"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invite-result", 4, "ngIf"], ["class", "invite-list", 4, "ngIf"], [3, "value"], [1, "invite-result"], ["readonly", "", 3, "click", "value"], [1, "invite-list"], [1, "attendance-panel"], [1, "attendance-header"], [1, "close-btn", 3, "click"], ["class", "att-loading", 4, "ngIf"], ["class", "att-empty", 4, "ngIf"], ["class", "att-table", 4, "ngIf"], ["class", "att-total", 4, "ngIf"], [1, "att-loading"], [1, "att-empty"], [1, "att-table"], ["class", "badge", 4, "ngIf"], [1, "att-total"], [1, "empty"]], template: function ReunionsAdminComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        i0.ɵɵtext(3, "R\u00E9unions en ligne");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵlistener("click", function ReunionsAdminComponent_Template_button_click_4_listener() { return ctx.openForm(); });
        i0.ɵɵtext(5, "+ Cr\u00E9er une r\u00E9union");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, ReunionsAdminComponent_div_6_Template, 2, 1, "div", 3)(7, ReunionsAdminComponent_div_7_Template, 54, 19, "div", 4)(8, ReunionsAdminComponent_div_8_Template, 2, 0, "div", 5)(9, ReunionsAdminComponent_div_9_Template, 3, 2, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.success);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.showForm);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
    } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, i4.DatePipe, FormsModule, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgModel], styles: [".admin-page[_ngcontent-%COMP%] { padding: 24px; max-width: 900px; }\n.page-header[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 22px; margin: 0; }\n.form-card[_ngcontent-%COMP%] { background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 24px; }\n.form-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 18px; margin: 0 0 20px; }\n.form-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n.field--full[_ngcontent-%COMP%] { grid-column: 1 / -1; }\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 13px; font-weight: 600; color: #374151; }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db; border-radius: 8px; padding: 10px 12px;\n  font-size: 14px; outline: none; transition: border-color 0.2s;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus { border-color: #1D546C; }\n.form-actions[_ngcontent-%COMP%] { display: flex; gap: 10px; justify-content: flex-end; margin-top: 16px; }\n.btn-primary[_ngcontent-%COMP%] { background: #1D546C; color: white; border: none; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 600; cursor: pointer; }\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) { background: #123648; }\n.btn-primary[_ngcontent-%COMP%]:disabled { opacity: 0.6; cursor: not-allowed; }\n.btn-secondary[_ngcontent-%COMP%] { background: #f3f4f6; color: #374151; border: none; border-radius: 8px; padding: 10px 20px; font-size: 14px; cursor: pointer; }\n.btn-outline[_ngcontent-%COMP%] { background: white; color: #1D546C; border: 2px solid #1D546C; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 600; cursor: pointer; }\n.btn-outline[_ngcontent-%COMP%]:disabled { opacity: 0.6; cursor: not-allowed; }\n.meetings-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 10px; }\n.meeting-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  background: white; border: 1px solid #e5e7eb; border-radius: 10px;\n  padding: 14px 16px;\n}\n.meeting-row--live[_ngcontent-%COMP%] { border-color: #ef4444; background: #fff5f5; }\n.meeting-row__info[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }\n.meeting-row__status[_ngcontent-%COMP%] { font-size: 12px; font-weight: 600; color: #6b7280; }\n.meeting-row__status.live[_ngcontent-%COMP%] { color: #ef4444; }\n.meeting-row__date[_ngcontent-%COMP%] { font-size: 13px; color: #6b7280; }\n.meeting-row__actions[_ngcontent-%COMP%] { display: flex; gap: 8px; }\n.badge[_ngcontent-%COMP%] { font-size: 11px; padding: 2px 8px; border-radius: 10px; background: #e0f0f8; color: #1D546C; font-weight: 500; }\n.badge--private[_ngcontent-%COMP%] { background: #fef2f2; color: #dc2626; }\n.badge--recurring[_ngcontent-%COMP%] { background: #fef9e7; color: #b45309; }\n.btn-sm[_ngcontent-%COMP%] { background: #f3f4f6; border: none; border-radius: 6px; padding: 6px 12px; font-size: 13px; cursor: pointer; }\n.btn-sm[_ngcontent-%COMP%]:hover { background: #e5e7eb; }\n.btn-sm--danger[_ngcontent-%COMP%]:hover { background: #fef2f2; color: #dc2626; }\n.btn-sm--join[_ngcontent-%COMP%] { background: #1D546C; color: white; font-weight: 600; }\n.btn-sm--join[_ngcontent-%COMP%]:hover { background: #123648; }\n.error-msg[_ngcontent-%COMP%] { color: #dc2626; font-size: 13px; padding: 8px 12px; background: #fef2f2; border-radius: 8px; margin-bottom: 12px; }\n.success-msg[_ngcontent-%COMP%] { color: #16a34a; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px 14px; margin-bottom: 16px; font-size: 14px; }\n.empty[_ngcontent-%COMP%] { text-align: center; color: #9ca3af; padding: 32px; font-size: 14px; }\n.loading[_ngcontent-%COMP%] { padding: 24px; color: #6b7280; }\n\n\n\n.attendance-panel[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 10px 10px;\n  padding: 16px;\n  margin-top: -2px;\n}\n.invite-panel[_ngcontent-%COMP%] {\n  padding: 16px; margin-top: -2px; border: 1px solid #d9e2e7; border-top: 0;\n  border-radius: 0 0 10px 10px; background: #f4f8fa;\n}\n.invite-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 4px 0 12px; color: #66717b; font-size: 13px; }\n.invite-row[_ngcontent-%COMP%], .invite-result[_ngcontent-%COMP%] { display: flex; gap: 9px; margin-top: 10px; }\n.invite-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .invite-result[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1; min-width: 0; padding: 10px; border: 1px solid #ccd6dc; border-radius: 8px; background: white;\n}\n.invite-panel[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; margin-top: 10px; color: #77818b; }\n.invite-list[_ngcontent-%COMP%] { margin-top: 12px; display: grid; gap: 6px; }\n.invite-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between; gap: 10px;\n  padding: 8px 10px; border-radius: 8px; background: white; font-size: 12px;\n}\n.attendance-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #374151;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none; border: none; cursor: pointer;\n  color: #9ca3af; font-size: 16px; padding: 2px 6px;\n  border-radius: 4px;\n}\n.close-btn[_ngcontent-%COMP%]:hover { background: #e5e7eb; }\n.att-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; font-size: 13px; }\n.att-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { text-align: left; padding: 6px 10px; font-size: 11px; text-transform: uppercase; color: #9ca3af; letter-spacing: 0.5px; }\n.att-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 8px 10px; border-top: 1px solid #e5e7eb; }\n.att-total[_ngcontent-%COMP%] { font-size: 13px; color: #6b7280; margin: 10px 0 0; text-align: right; }\n.att-loading[_ngcontent-%COMP%] { color: #6b7280; font-size: 13px; padding: 8px; }\n.att-empty[_ngcontent-%COMP%] { color: #9ca3af; font-size: 13px; padding: 8px; text-align: center; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReunionsAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-reunions-admin', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"admin-page\">\n  <div class=\"page-header\">\n    <h1>R\u00E9unions en ligne</h1>\n    <button class=\"btn-primary\" (click)=\"openForm()\">+ Cr\u00E9er une r\u00E9union</button>\n  </div>\n\n  <div class=\"success-msg\" *ngIf=\"success\">{{ success }}</div>\n\n  <!-- \u2500\u2500 Formulaire cr\u00E9ation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"form-card\" *ngIf=\"showForm\">\n    <h2>Nouvelle r\u00E9union</h2>\n\n    <div class=\"form-grid\">\n      <div class=\"field field--full\">\n        <label>Titre *</label>\n        <input type=\"text\" [(ngModel)]=\"form.title\" placeholder=\"Ex: Culte du dimanche\" />\n      </div>\n      <div class=\"field field--full\">\n        <label>Description</label>\n        <textarea [(ngModel)]=\"form.description\" rows=\"2\" placeholder=\"Description optionnelle\"></textarea>\n      </div>\n      <div class=\"field\">\n        <label>Date *</label>\n        <input type=\"date\" [(ngModel)]=\"form.startTime\" />\n      </div>\n      <div class=\"field\">\n        <label>Heure *</label>\n        <input type=\"time\" [(ngModel)]=\"form.startHour\" />\n      </div>\n      <div class=\"field\">\n        <label>Visibilit\u00E9</label>\n        <select [(ngModel)]=\"form.isPublic\">\n          <option [ngValue]=\"true\">Public (tout le monde)</option>\n          <option [ngValue]=\"false\">Priv\u00E9 (membres uniquement)</option>\n        </select>\n      </div>\n      <div class=\"field\">\n        <label>R\u00E9currence</label>\n        <select [(ngModel)]=\"form.isRecurring\">\n          <option [ngValue]=\"false\">Ponctuelle</option>\n          <option [ngValue]=\"true\">R\u00E9currente</option>\n        </select>\n      </div>\n      <div class=\"field\">\n        <label>Salle d\u2019attente</label>\n        <select [(ngModel)]=\"form.lobbyEnabled\">\n          <option [ngValue]=\"false\">Acc\u00E8s direct</option>\n          <option [ngValue]=\"true\">Admission par un mod\u00E9rateur</option>\n        </select>\n      </div>\n      <div class=\"field field--full\" *ngIf=\"form.isRecurring\">\n        <label>Fr\u00E9quence</label>\n        <select [(ngModel)]=\"form.recurrenceRule\">\n          <option value=\"FREQ=DAILY;INTERVAL=1\">Tous les jours</option>\n          <option value=\"FREQ=WEEKLY;INTERVAL=1\">Toutes les semaines</option>\n          <option value=\"FREQ=WEEKLY;INTERVAL=2\">Toutes les deux semaines</option>\n          <option value=\"FREQ=MONTHLY;INTERVAL=1\">Tous les mois</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"error-msg\" *ngIf=\"error\">{{ error }}</div>\n\n    <div class=\"form-actions\">\n      <button class=\"btn-secondary\" (click)=\"closeForm()\">Annuler</button>\n      <button class=\"btn-outline\" (click)=\"startNow()\" [disabled]=\"saving || !form.title\">\n        \u25B6 Lancer maintenant\n      </button>\n      <button class=\"btn-primary\" (click)=\"create()\" [disabled]=\"saving || !form.title || !form.startTime\">\n        <span *ngIf=\"!saving\">Cr\u00E9er la r\u00E9union</span>\n        <span *ngIf=\"saving\">Cr\u00E9ation...</span>\n      </button>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Liste des r\u00E9unions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"loading\" *ngIf=\"loading\">Chargement...</div>\n\n  <div class=\"meetings-list\" *ngIf=\"!loading\">\n    <ng-container *ngFor=\"let m of meetings\">\n    <div class=\"meeting-row\" [class.meeting-row--live]=\"m.status === 'live'\">\n      <div class=\"meeting-row__info\">\n        <span class=\"meeting-row__status\" [class.live]=\"m.status === 'live'\">\n          {{ statusLabel(m.status) }}\n        </span>\n        <strong>{{ m.title }}</strong>\n        <span class=\"meeting-row__date\">{{ formatDate(m.startTime) }}</span>\n        <span class=\"badge\" [class.badge--private]=\"!m.isPublic\">\n          {{ m.isPublic ? 'Public' : 'Priv\u00E9' }}\n        </span>\n        <span class=\"badge badge--recurring\" *ngIf=\"m.isRecurring\">R\u00E9current</span>\n        <span class=\"badge badge--recurring\" *ngIf=\"m.lobbyEnabled\">Salle d\u2019attente</span>\n      </div>\n      <div class=\"meeting-row__actions\">\n        <button class=\"btn-sm btn-sm--join\" (click)=\"joinMeeting(m.id)\"\n          *ngIf=\"m.status === 'scheduled' || m.status === 'live'\">\n          \u25B6 Rejoindre\n        </button>\n        <button class=\"btn-sm\" (click)=\"openInvite(m.id)\"\n          *ngIf=\"m.status === 'scheduled' || m.status === 'live'\">\n          \uD83D\uDD17 Lien responsable\n        </button>\n        <button class=\"btn-sm\" (click)=\"sendReminders(m.id)\" title=\"Envoyer rappels email\"\n          *ngIf=\"m.status === 'scheduled'\">\n          \u2709 Rappels\n        </button>\n        <button class=\"btn-sm btn-sm--danger\" (click)=\"cancel(m.id)\"\n          *ngIf=\"m.status === 'scheduled' || m.status === 'live'\">\n          Annuler\n        </button>\n        <button class=\"btn-sm\" (click)=\"viewAttendance(m.id)\"\n          *ngIf=\"m.status === 'ended' || m.status === 'live'\">\n          \uD83D\uDC65 Pr\u00E9sence\n        </button>\n      </div>\n    </div>\n\n    <div class=\"invite-panel\" *ngIf=\"inviteMeetingId === m.id\">\n      <div>\n        <strong>Acc\u00E8s simplifi\u00E9 pour un responsable</strong>\n        <p>Le responsable clique sur le lien re\u00E7u et entre directement dans cette r\u00E9union avec la r\u00E9gie.</p>\n      </div>\n      <div class=\"invite-row\">\n        <select [(ngModel)]=\"inviteMemberId\">\n          <option value=\"\">Choisir le responsable</option>\n          <option *ngFor=\"let member of members\" [value]=\"member.id\">\n            {{ member.firstName }} {{ member.lastName }} \u00B7 {{ member.email }}\n          </option>\n        </select>\n        <button class=\"btn-primary\" [disabled]=\"!inviteMemberId || inviteLoading\" (click)=\"createInvite(m.id)\">\n          {{ inviteLoading ? 'Cr\u00E9ation\u2026' : 'Cr\u00E9er et copier le lien' }}\n        </button>\n      </div>\n      <div class=\"invite-result\" *ngIf=\"inviteLink\">\n        <input [value]=\"inviteLink\" readonly (click)=\"$any($event.target).select()\">\n        <button class=\"btn-secondary\" (click)=\"copyInvite()\">{{ inviteCopied ? 'Copi\u00E9' : 'Copier' }}</button>\n      </div>\n      <div class=\"invite-list\" *ngIf=\"meetingInvites[m.id]?.length\">\n        <div *ngFor=\"let invite of meetingInvites[m.id]\">\n          <span>\n            {{ invite.member?.firstName }} {{ invite.member?.lastName }}\n            \u00B7 {{ invite.revokedAt ? 'R\u00E9voqu\u00E9' : 'Actif' }}\n          </span>\n          <button class=\"btn-sm btn-sm--danger\" *ngIf=\"!invite.revokedAt\"\n                  (click)=\"revokeInvite(m.id, invite.id)\">R\u00E9voquer</button>\n        </div>\n      </div>\n      <small>Le lien est limit\u00E9 \u00E0 cette r\u00E9union. R\u00E9voquez-le imm\u00E9diatement si le t\u00E9l\u00E9phone est perdu.</small>\n    </div>\n\n    <!-- Registre de pr\u00E9sence (inline) -->\n    <div class=\"attendance-panel\" *ngIf=\"selectedMeetingId === m.id\">\n      <div class=\"attendance-header\">\n        <strong>Registre de pr\u00E9sence</strong>\n        <button class=\"close-btn\" (click)=\"selectedMeetingId = null\">\u2715</button>\n      </div>\n      <div *ngIf=\"loadingAttendance\" class=\"att-loading\">Chargement...</div>\n      <div *ngIf=\"!loadingAttendance && attendance.length === 0\" class=\"att-empty\">Aucun participant enregistr\u00E9.</div>\n      <table *ngIf=\"!loadingAttendance && attendance.length > 0\" class=\"att-table\">\n        <thead>\n          <tr><th>Participant</th><th>Email</th><th>Arriv\u00E9e</th><th>Dur\u00E9e</th><th>R\u00F4le</th></tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let p of attendance\">\n            <td><strong>{{ p.displayName }}</strong></td>\n            <td>{{ p.member?.email || '\u2014' }}</td>\n            <td>{{ p.joinedAt | date:'HH:mm' }}</td>\n            <td>{{ formatDuration(p.durationMinutes) }}</td>\n            <td><span *ngIf=\"p.wasAdmin\" class=\"badge\">Admin</span></td>\n          </tr>\n        </tbody>\n      </table>\n      <p class=\"att-total\" *ngIf=\"!loadingAttendance && attendance.length > 0\">\n        Total : {{ attendance.length }} participant(s)\n      </p>\n    </div>\n    </ng-container>\n\n    <div class=\"empty\" *ngIf=\"meetings.length === 0\">\n      Aucune r\u00E9union. Cr\u00E9ez-en une avec le bouton ci-dessus.\n    </div>\n  </div>\n</div>\n\n<style>\n.admin-page { padding: 24px; max-width: 900px; }\n.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }\n.page-header h1 { font-size: 22px; margin: 0; }\n.form-card { background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 24px; }\n.form-card h2 { font-size: 18px; margin: 0 0 20px; }\n.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }\n.field { display: flex; flex-direction: column; gap: 6px; }\n.field--full { grid-column: 1 / -1; }\n.field label { font-size: 13px; font-weight: 600; color: #374151; }\n.field input, .field select, .field textarea {\n  border: 1px solid #d1d5db; border-radius: 8px; padding: 10px 12px;\n  font-size: 14px; outline: none; transition: border-color 0.2s;\n}\n.field input:focus, .field select:focus, .field textarea:focus { border-color: #1D546C; }\n.form-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 16px; }\n.btn-primary { background: #1D546C; color: white; border: none; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 600; cursor: pointer; }\n.btn-primary:hover:not(:disabled) { background: #123648; }\n.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }\n.btn-secondary { background: #f3f4f6; color: #374151; border: none; border-radius: 8px; padding: 10px 20px; font-size: 14px; cursor: pointer; }\n.btn-outline { background: white; color: #1D546C; border: 2px solid #1D546C; border-radius: 8px; padding: 10px 20px; font-size: 14px; font-weight: 600; cursor: pointer; }\n.btn-outline:disabled { opacity: 0.6; cursor: not-allowed; }\n.meetings-list { display: flex; flex-direction: column; gap: 10px; }\n.meeting-row {\n  display: flex; align-items: center; justify-content: space-between;\n  background: white; border: 1px solid #e5e7eb; border-radius: 10px;\n  padding: 14px 16px;\n}\n.meeting-row--live { border-color: #ef4444; background: #fff5f5; }\n.meeting-row__info { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }\n.meeting-row__status { font-size: 12px; font-weight: 600; color: #6b7280; }\n.meeting-row__status.live { color: #ef4444; }\n.meeting-row__date { font-size: 13px; color: #6b7280; }\n.meeting-row__actions { display: flex; gap: 8px; }\n.badge { font-size: 11px; padding: 2px 8px; border-radius: 10px; background: #e0f0f8; color: #1D546C; font-weight: 500; }\n.badge--private { background: #fef2f2; color: #dc2626; }\n.badge--recurring { background: #fef9e7; color: #b45309; }\n.btn-sm { background: #f3f4f6; border: none; border-radius: 6px; padding: 6px 12px; font-size: 13px; cursor: pointer; }\n.btn-sm:hover { background: #e5e7eb; }\n.btn-sm--danger:hover { background: #fef2f2; color: #dc2626; }\n.btn-sm--join { background: #1D546C; color: white; font-weight: 600; }\n.btn-sm--join:hover { background: #123648; }\n.error-msg { color: #dc2626; font-size: 13px; padding: 8px 12px; background: #fef2f2; border-radius: 8px; margin-bottom: 12px; }\n.success-msg { color: #16a34a; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px 14px; margin-bottom: 16px; font-size: 14px; }\n.empty { text-align: center; color: #9ca3af; padding: 32px; font-size: 14px; }\n.loading { padding: 24px; color: #6b7280; }\n\n/* Registre de pr\u00E9sence */\n.attendance-panel {\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 10px 10px;\n  padding: 16px;\n  margin-top: -2px;\n}\n.invite-panel {\n  padding: 16px; margin-top: -2px; border: 1px solid #d9e2e7; border-top: 0;\n  border-radius: 0 0 10px 10px; background: #f4f8fa;\n}\n.invite-panel p { margin: 4px 0 12px; color: #66717b; font-size: 13px; }\n.invite-row, .invite-result { display: flex; gap: 9px; margin-top: 10px; }\n.invite-row select, .invite-result input {\n  flex: 1; min-width: 0; padding: 10px; border: 1px solid #ccd6dc; border-radius: 8px; background: white;\n}\n.invite-panel small { display: block; margin-top: 10px; color: #77818b; }\n.invite-list { margin-top: 12px; display: grid; gap: 6px; }\n.invite-list > div {\n  display: flex; align-items: center; justify-content: space-between; gap: 10px;\n  padding: 8px 10px; border-radius: 8px; background: white; font-size: 12px;\n}\n.attendance-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: #374151;\n}\n.close-btn {\n  background: none; border: none; cursor: pointer;\n  color: #9ca3af; font-size: 16px; padding: 2px 6px;\n  border-radius: 4px;\n}\n.close-btn:hover { background: #e5e7eb; }\n.att-table { width: 100%; border-collapse: collapse; font-size: 13px; }\n.att-table th { text-align: left; padding: 6px 10px; font-size: 11px; text-transform: uppercase; color: #9ca3af; letter-spacing: 0.5px; }\n.att-table td { padding: 8px 10px; border-top: 1px solid #e5e7eb; }\n.att-total { font-size: 13px; color: #6b7280; margin: 10px 0 0; text-align: right; }\n.att-loading { color: #6b7280; font-size: 13px; padding: 8px; }\n.att-empty { color: #9ca3af; font-size: 13px; padding: 8px; text-align: center; }\n</style>\n" }]
    }], () => [{ type: i1.ReunionsService }, { type: i2.Router }, { type: i3.ApiService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReunionsAdminComponent, { className: "ReunionsAdminComponent", filePath: "app\\admin\\pages\\reunions\\reunions-admin.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=reunions-admin.component.js.map