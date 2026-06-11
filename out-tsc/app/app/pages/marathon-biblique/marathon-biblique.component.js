import { Component, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../core/services/page-content.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
const _c0 = ["calendarShell"];
const _c1 = () => [25, 50, 75, 100];
function MarathonBibliqueComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "div", 18);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Chargement des marathons\u2026");
    i0.ɵɵelementEnd()();
} }
function MarathonBibliqueComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 19)(1, "div", 20)(2, "span", 21);
    i0.ɵɵtext(3, "\uD83D\uDCD6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "Aucun marathon en cours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Le prochain marathon sera annonc\u00E9 prochainement. Revenez bient\u00F4t !");
    i0.ɵɵelementEnd()()();
} }
function MarathonBibliqueComponent_ng_container_2_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function MarathonBibliqueComponent_ng_container_2_div_1_button_1_Template_button_click_0_listener() { const m_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.selectMarathon(m_r2.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 28);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_6_0;
    const m_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", ctx_r2.selectedId === m_r2.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", m_r2.titre, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", (tmp_6_0 = ctx_r2.nbInscrits[m_r2.id]) !== null && tmp_6_0 !== undefined ? tmp_6_0 : m_r2.nbInscrits, " inscrits");
} }
function MarathonBibliqueComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, MarathonBibliqueComponent_ng_container_2_div_1_button_1_Template, 4, 4, "button", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.marathons);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_21_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ms_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("reached", ctx_r2.serverProgression.milestonesReached == null ? null : ctx_r2.serverProgression.milestonesReached.includes(ms_r5));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ms_r5, "% ");
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "span", 61);
    i0.ɵɵtext(2, "\uD83C\uDFC5");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Tu es ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "span", 62);
    i0.ɵɵtemplate(8, MarathonBibliqueComponent_ng_container_2_section_2_div_21_span_8_Template, 2, 3, "span", 63);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("#", ctx_r2.serverProgression.rank, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" sur ", ctx_r2.serverProgression.totalParticipants, " participants ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(3, _c1));
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 66);
    i0.ɵɵtext(2, " \uD83D\uDD25 ");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " jour(s) de suite ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 67);
    i0.ɵɵtext(7, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 68);
    i0.ɵɵtext(9, " \uD83C\uDFC6 Record : ");
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " jour(s) ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_4_0 = ctx_r2.serverProgression.currentStreak) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate((tmp_5_0 = ctx_r2.serverProgression.maxStreak) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const w_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(w_r6);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_27_ng_container_1_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 78)(1, "input", 79);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonBibliqueComponent_ng_container_2_section_2_div_27_ng_container_1_label_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const c_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.localProgress[c_r8.dayNumber], $event) || (ctx_r2.localProgress[c_r8.dayNumber] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function MarathonBibliqueComponent_ng_container_2_section_2_div_27_ng_container_1_label_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const c_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onDayChange(c_r8.dayNumber, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "span", 80);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "day-check-" + c_r8.dayNumber);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.localProgress[c_r8.dayNumber]);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-checked", ctx_r2.localProgress[c_r8.dayNumber]);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_27_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 81);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_27_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 71)(2, "span", 72);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MarathonBibliqueComponent_ng_container_2_section_2_div_27_ng_container_1_label_4_Template, 3, 3, "label", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 74)(6, "div", 75);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, MarathonBibliqueComponent_ng_container_2_section_2_div_27_ng_container_1_div_9_Template, 1, 0, "div", 77);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const c_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r8.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", c_r8.dayNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Jour ", c_r8.dayNumber, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r2.formatReading(c_r8.reading), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.savingDay === c_r8.dayNumber);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtemplate(1, MarathonBibliqueComponent_ng_container_2_section_2_div_27_ng_container_1_Template, 10, 5, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-empty", !c_r8.date)("is-today", ctx_r2.isToday(c_r8.date))("is-done", c_r8.dayNumber && ctx_r2.localProgress[c_r8.dayNumber]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", c_r8.date);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_38_div_5_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 90);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.emailError);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_38_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86)(1, "input", 87);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonBibliqueComponent_ng_container_2_section_2_div_38_div_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r2.emailInput, $event) || (ctx_r2.emailInput = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function MarathonBibliqueComponent_ng_container_2_section_2_div_38_div_5_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.confirmEmail()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 88);
    i0.ɵɵlistener("click", function MarathonBibliqueComponent_ng_container_2_section_2_div_38_div_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.confirmEmail()); });
    i0.ɵɵtext(3, "Confirmer");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MarathonBibliqueComponent_ng_container_2_section_2_div_38_div_5_p_4_Template, 2, 1, "p", 89);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.emailInput);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.emailError);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 82)(1, "p", 83);
    i0.ɵɵtext(2, " D\u00E9j\u00E0 inscrit(e) ? Identifie-toi pour charger ta progression et ton rang. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 84);
    i0.ɵɵlistener("click", function MarathonBibliqueComponent_ng_container_2_section_2_div_38_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.showEmailForm = !ctx_r2.showEmailForm); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, MarathonBibliqueComponent_ng_container_2_section_2_div_38_div_5_Template, 5, 2, "div", 85);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.showEmailForm ? "Annuler" : "Charger ma progression", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showEmailForm);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 91)(1, "span", 92);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 93);
    i0.ɵɵlistener("click", function MarathonBibliqueComponent_ng_container_2_section_2_div_39_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.forgetMe()); });
    i0.ɵɵtext(4, "D\u00E9connecter");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83D\uDC64 ", ctx_r2.userFullName || ctx_r2.userEmail, "");
} }
function MarathonBibliqueComponent_ng_container_2_section_2_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 94);
    i0.ɵɵlistener("click", function MarathonBibliqueComponent_ng_container_2_section_2_button_41_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openJoinInline()); });
    i0.ɵɵtext(1, " Je participe ");
    i0.ɵɵelementEnd();
} }
function MarathonBibliqueComponent_ng_container_2_section_2_p_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 95);
    i0.ɵɵtext(1, "Inscription rapide & gratuite");
    i0.ɵɵelementEnd();
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_43_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 90);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.submitError);
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_43_p_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 112);
    i0.ɵɵtext(1, "\u2705 Inscription enregistr\u00E9e !");
    i0.ɵɵelementEnd();
} }
function MarathonBibliqueComponent_ng_container_2_section_2_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 96)(1, "div", 97)(2, "div")(3, "h3", 98);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 99);
    i0.ɵɵtext(6, "Remplis ce formulaire pour confirmer ta participation.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 100);
    i0.ɵɵlistener("click", function MarathonBibliqueComponent_ng_container_2_section_2_div_43_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.closeJoinInline()); });
    i0.ɵɵtext(8, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "form", 101);
    i0.ɵɵlistener("ngSubmit", function MarathonBibliqueComponent_ng_container_2_section_2_div_43_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.submitJoin()); });
    i0.ɵɵelementStart(10, "div", 102)(11, "label", 103)(12, "span", 104);
    i0.ɵɵtext(13, "Nom complet *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 105);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonBibliqueComponent_ng_container_2_section_2_div_43_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.joinForm.fullName, $event) || (ctx_r2.joinForm.fullName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "label", 103)(16, "span", 104);
    i0.ɵɵtext(17, "Email *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "input", 106);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonBibliqueComponent_ng_container_2_section_2_div_43_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.joinForm.email, $event) || (ctx_r2.joinForm.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "label", 103)(20, "span", 104);
    i0.ɵɵtext(21, "T\u00E9l\u00E9phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "input", 107);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonBibliqueComponent_ng_container_2_section_2_div_43_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.joinForm.phone, $event) || (ctx_r2.joinForm.phone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "label", 103)(24, "span", 104);
    i0.ɵɵtext(25, "Ville");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "input", 108);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonBibliqueComponent_ng_container_2_section_2_div_43_Template_input_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.joinForm.city, $event) || (ctx_r2.joinForm.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(27, MarathonBibliqueComponent_ng_container_2_section_2_div_43_p_27_Template, 2, 1, "p", 89)(28, MarathonBibliqueComponent_ng_container_2_section_2_div_43_p_28_Template, 2, 0, "p", 109);
    i0.ɵɵelementStart(29, "button", 110);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 111);
    i0.ɵɵtext(32, "Aucune donn\u00E9e n'est affich\u00E9e publiquement.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.marathon.titre);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.joinForm.fullName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.joinForm.email);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.joinForm.phone);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.joinForm.city);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.submitError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.submitSuccess);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.isSubmitting);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.isSubmitting ? "Enregistrement\u2026" : "Confirmer ma participation", " ");
} }
function MarathonBibliqueComponent_ng_container_2_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 29)(1, "div", 30)(2, "h1", 31);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 32);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 33)(7, "div", 34)(8, "span", 35);
    i0.ɵɵtext(9, "Progression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 36);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 37)(13, "span", 38);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 39);
    i0.ɵɵtext(16, "inscrits");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 40);
    i0.ɵɵlistener("click", function MarathonBibliqueComponent_ng_container_2_section_2_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.scrollToToday()); });
    i0.ɵɵtext(18, "Aujourd'hui");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 41);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(21, MarathonBibliqueComponent_ng_container_2_section_2_div_21_Template, 9, 4, "div", 42)(22, MarathonBibliqueComponent_ng_container_2_section_2_div_22_Template, 13, 2, "div", 43);
    i0.ɵɵelementStart(23, "div", 44, 0)(25, "div", 45);
    i0.ɵɵtemplate(26, MarathonBibliqueComponent_ng_container_2_section_2_div_26_Template, 2, 1, "div", 46)(27, MarathonBibliqueComponent_ng_container_2_section_2_div_27_Template, 2, 7, "div", 47);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 48);
    i0.ɵɵelement(29, "div", 49);
    i0.ɵɵelementStart(30, "h2", 50);
    i0.ɵɵtext(31, "\uD83C\uDFA7 Bible Audio \u2013 Playlist Officielle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "a", 51)(33, "div", 52)(34, "span", 53);
    i0.ɵɵtext(35, "\u25B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "span");
    i0.ɵɵtext(37, "\u00C9couter la Bible");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(38, MarathonBibliqueComponent_ng_container_2_section_2_div_38_Template, 6, 2, "div", 54)(39, MarathonBibliqueComponent_ng_container_2_section_2_div_39_Template, 5, 1, "div", 55);
    i0.ɵɵelementStart(40, "div", 56);
    i0.ɵɵtemplate(41, MarathonBibliqueComponent_ng_container_2_section_2_button_41_Template, 2, 0, "button", 57)(42, MarathonBibliqueComponent_ng_container_2_section_2_p_42_Template, 2, 0, "p", 58)(43, MarathonBibliqueComponent_ng_container_2_section_2_div_43_Template, 33, 9, "div", 59);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("join-open", ctx_r2.isJoinOpen);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.marathon.titre);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.marathon.description);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", ctx_r2.completedCount, "/", ctx_r2.totalDays, " jours termin\u00E9s");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.currentNbInscrits);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r2.progressPercent, "%");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.serverProgression && ctx_r2.serverProgression.rank);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.serverProgression && (ctx_r2.serverProgression.currentStreak > 0 || ctx_r2.serverProgression.maxStreak > 0));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r2.weekdays);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.calendarCells)("ngForTrackBy", ctx_r2.trackCell);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("href", ctx_r2.ytUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", !ctx_r2.emailSet && !ctx_r2.isJoinOpen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.emailSet);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.isJoinOpen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isJoinOpen);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isJoinOpen);
} }
function MarathonBibliqueComponent_ng_container_2_section_3_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 122);
    i0.ɵɵtext(1, "Chargement du classement\u2026");
    i0.ɵɵelementEnd();
} }
function MarathonBibliqueComponent_ng_container_2_section_3_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 123);
    i0.ɵɵtext(1, "Aucun participant pour l'instant.");
    i0.ɵɵelementEnd();
} }
function MarathonBibliqueComponent_ng_container_2_section_3_div_6_div_3_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td")(7, "div", 128);
    i0.ɵɵelement(8, "div", 129);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 130);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td")(12, "span", 131);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_12_0;
    const p_r15 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("lb-me", p_r15.email === ctx_r2.userEmail);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("lb-rank lb-rank--", p_r15.rank <= 3 ? p_r15.rank : "other", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(p_r15.rank);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r15.displayName);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", p_r15.progressPercent, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", p_r15.progressPercent, "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\uD83D\uDD25 ", (tmp_12_0 = p_r15.currentStreak) !== null && tmp_12_0 !== undefined ? tmp_12_0 : 0, "j");
} }
function MarathonBibliqueComponent_ng_container_2_section_3_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 124)(1, "table", 125)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Participant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Progression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Streak");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "tbody");
    i0.ɵɵtemplate(13, MarathonBibliqueComponent_ng_container_2_section_3_div_6_div_3_tr_13_Template, 14, 11, "tr", 126);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "p", 127);
    i0.ɵɵtext(15, "Les noms sont affich\u00E9s sous forme abr\u00E9g\u00E9e pour la confidentialit\u00E9.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngForOf", ctx_r2.leaderboard);
} }
function MarathonBibliqueComponent_ng_container_2_section_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 118);
    i0.ɵɵtemplate(1, MarathonBibliqueComponent_ng_container_2_section_3_div_6_div_1_Template, 2, 0, "div", 119)(2, MarathonBibliqueComponent_ng_container_2_section_3_div_6_div_2_Template, 2, 0, "div", 120)(3, MarathonBibliqueComponent_ng_container_2_section_3_div_6_div_3_Template, 16, 1, "div", 121);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.loadingLeaderboard);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.loadingLeaderboard && ctx_r2.leaderboard.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.loadingLeaderboard && ctx_r2.leaderboard.length > 0);
} }
function MarathonBibliqueComponent_ng_container_2_section_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 113)(1, "div", 114);
    i0.ɵɵlistener("click", function MarathonBibliqueComponent_ng_container_2_section_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggleLeaderboard()); });
    i0.ɵɵelementStart(2, "h2", 115);
    i0.ɵɵtext(3, "\uD83C\uDFC6 Classement des participants");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 116);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, MarathonBibliqueComponent_ng_container_2_section_3_div_6_Template, 4, 3, "div", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.showLeaderboard ? "\u25B2 Masquer" : "\u25BC Voir le classement");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showLeaderboard);
} }
function MarathonBibliqueComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MarathonBibliqueComponent_ng_container_2_div_1_Template, 2, 1, "div", 22)(2, MarathonBibliqueComponent_ng_container_2_section_2_Template, 44, 19, "section", 23)(3, MarathonBibliqueComponent_ng_container_2_section_3_Template, 7, 2, "section", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.marathons.length > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.marathon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.marathon);
} }
const EMAIL_KEY = 'marathon-user-email';
const NAME_KEY = 'marathon-user-name';
const PROGRESS_KEY = 'marathon-progress-local';
export class MarathonBibliqueComponent {
    // ─── CMS ──────────────────────────────────────────────────────────────────
    get pageTitle() { return this.c.heroTitle || 'Marathons Bibliques'; }
    get pageSubtitle() { return this.c.heroSubtitle || 'Lisez la Parole de Dieu avec nous.'; }
    get ytUrl() { return this.c.youtubeUrl || 'https://www.youtube.com/playlist?list=PLuiootrwkQ8aexpj8YDMoeKGtIAbYBNv8'; }
    get marathon() {
        var _a;
        return (_a = this.marathons.find(m => m.id === this.selectedId)) !== null && _a !== void 0 ? _a : null;
    }
    get completedCount() { return Object.values(this.localProgress).filter(Boolean).length; }
    get totalDays() { var _a, _b; return (_b = (_a = this.marathon) === null || _a === void 0 ? void 0 : _a.nbJours) !== null && _b !== void 0 ? _b : 0; }
    get progressPercent() { return this.totalDays ? Math.round((this.completedCount / this.totalDays) * 100) : 0; }
    constructor(http, pageContent) {
        this.http = http;
        this.pageContent = pageContent;
        this.base = environment.apiBase;
        this.unsubs = []; // conservé pour compatibilité ngOnDestroy
        this.c = {};
        // ─── Marathons ────────────────────────────────────────────────────────────
        this.marathons = [];
        this.loadingMarathons = true;
        this.selectedId = null;
        this.nbInscrits = {}; // real-time via Firestore
        // ─── Calendrier ───────────────────────────────────────────────────────────
        this.weekdays = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
        // ─── Progression ──────────────────────────────────────────────────────────
        this.localProgress = {};
        this.serverProgression = null; // { progressPercent, rank, totalParticipants, milestonesReached }
        this.loadingProgression = false;
        this.savingDay = null;
        // ─── Identification utilisateur ───────────────────────────────────────────
        this.userEmail = '';
        this.userFullName = '';
        this.emailSet = false;
        this.showEmailForm = false;
        this.emailInput = '';
        this.emailError = '';
        // ─── Inscription ──────────────────────────────────────────────────────────
        this.isJoinOpen = false;
        this.isSubmitting = false;
        this.submitSuccess = false;
        this.submitError = '';
        this.joinForm = { fullName: '', email: '', phone: '', city: '' };
        // ─── Leaderboard ──────────────────────────────────────────────────────────
        this.leaderboard = [];
        this.loadingLeaderboard = false;
        this.showLeaderboard = false;
    }
    ngOnInit() {
        this.pageContent.getPage('marathon-biblique').subscribe(res => { if (res)
            this.c = res; });
        this.loadUserIdentity();
        this.loadMarathons();
    }
    ngOnDestroy() {
        this.unsubs.forEach(u => u());
    }
    // ─── Chargement des marathons ──────────────────────────────────────────────
    loadMarathons() {
        this.loadingMarathons = true;
        this.http.get(`${this.base}/marathon`).subscribe({
            next: (data) => {
                this.marathons = data !== null && data !== void 0 ? data : [];
                this.loadingMarathons = false;
                if (this.marathons.length > 0) {
                    this.selectMarathon(this.marathons[0].id);
                }
                this.subscribeToCounters();
            },
            error: () => { this.loadingMarathons = false; },
        });
    }
    subscribeToCounters() {
        var _a;
        for (const m of this.marathons) {
            this.nbInscrits[m.id] = (_a = m.nbInscrits) !== null && _a !== void 0 ? _a : 0;
        }
    }
    selectMarathon(id) {
        this.selectedId = id;
        this.resetProgressState();
        this.loadLocalProgress();
        if (this.emailSet)
            this.loadServerProgression();
    }
    // ─── Progression locale ────────────────────────────────────────────────────
    // Clé inclut l'email pour isoler la progression par utilisateur sur l'appareil
    progressKey() {
        const suffix = this.emailSet ? `-${this.userEmail}` : '';
        return `${PROGRESS_KEY}-${this.selectedId}${suffix}`;
    }
    loadLocalProgress() {
        try {
            const raw = localStorage.getItem(this.progressKey());
            this.localProgress = raw ? JSON.parse(raw) : {};
        }
        catch (_a) {
            this.localProgress = {};
        }
    }
    saveLocalProgress() {
        localStorage.setItem(this.progressKey(), JSON.stringify(this.localProgress));
    }
    isChecked(day) { return day ? !!this.localProgress[day] : false; }
    trackCell(_index, cell) {
        return cell.date ? cell.date.toISOString() : `empty-${_index}`;
    }
    onDayChange(day, newChecked) {
        this.saveLocalProgress();
        if (!this.selectedId || !this.emailSet)
            return;
        this.savingDay = day;
        this.http.post(`${this.base}/marathon/${this.selectedId}/progression`, {
            email: this.userEmail,
            day,
            checked: newChecked,
        }).subscribe({
            next: (res) => { this.serverProgression = Object.assign(Object.assign({}, this.serverProgression), res); this.savingDay = null; },
            error: () => { this.savingDay = null; },
        });
    }
    // ─── Progression serveur + rang ──────────────────────────────────────────
    loadServerProgression() {
        if (!this.selectedId || !this.userEmail)
            return;
        this.loadingProgression = true;
        this.http.get(`${this.base}/marathon/${this.selectedId}/progression?email=${encodeURIComponent(this.userEmail)}`).subscribe({
            next: (data) => {
                this.serverProgression = data;
                // Remplace entièrement la progression locale par celle du serveur
                // (évite de conserver des jours d'un autre utilisateur sur le même appareil)
                this.localProgress = {};
                if (data === null || data === void 0 ? void 0 : data.progress) {
                    Object.entries(data.progress).forEach(([k, v]) => {
                        this.localProgress[parseInt(k)] = v;
                    });
                }
                this.saveLocalProgress();
                this.loadingProgression = false;
            },
            error: () => { this.loadingProgression = false; },
        });
    }
    // ─── Identification ────────────────────────────────────────────────────────
    loadUserIdentity() {
        const email = localStorage.getItem(EMAIL_KEY);
        const name = localStorage.getItem(NAME_KEY);
        if (email) {
            this.userEmail = email;
            this.userFullName = name !== null && name !== void 0 ? name : '';
            this.emailSet = true;
        }
    }
    confirmEmail() {
        const e = this.emailInput.trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
            this.emailError = 'Email invalide.';
            return;
        }
        this.userEmail = e;
        this.emailSet = true;
        this.showEmailForm = false;
        this.emailError = '';
        localStorage.setItem(EMAIL_KEY, e);
        // Réinitialise la progression affichée avant de charger celle du serveur
        this.localProgress = {};
        this.loadServerProgression();
    }
    forgetMe() {
        localStorage.removeItem(EMAIL_KEY);
        localStorage.removeItem(NAME_KEY);
        this.userEmail = '';
        this.userFullName = '';
        this.emailSet = false;
        this.serverProgression = null;
        this.showEmailForm = false;
    }
    // ─── Inscription ──────────────────────────────────────────────────────────
    openJoinInline() {
        this.isJoinOpen = true;
        this.submitSuccess = false;
        this.submitError = '';
        if (this.userEmail)
            this.joinForm.email = this.userEmail;
        if (this.userFullName)
            this.joinForm.fullName = this.userFullName;
    }
    closeJoinInline() { this.isJoinOpen = false; this.isSubmitting = false; }
    submitJoin() {
        this.submitError = '';
        this.submitSuccess = false;
        const fullName = this.joinForm.fullName.trim();
        const email = this.joinForm.email.trim().toLowerCase();
        if (!fullName || fullName.length < 2) {
            this.submitError = 'Nom complet requis.';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.submitError = 'Email invalide.';
            return;
        }
        if (!this.selectedId) {
            this.submitError = 'Aucun marathon s\u00e9lectionn\u00e9.';
            return;
        }
        this.isSubmitting = true;
        this.http.post(`${this.base}/marathon/${this.selectedId}/inscrire`, {
            fullName,
            email,
            phone: this.joinForm.phone.trim() || undefined,
            city: this.joinForm.city.trim() || undefined,
        }).subscribe({
            next: () => {
                this.submitSuccess = true;
                this.isSubmitting = false;
                this.userEmail = email;
                this.userFullName = fullName;
                this.emailSet = true;
                localStorage.setItem(EMAIL_KEY, email);
                localStorage.setItem(NAME_KEY, fullName);
                // Repart de zéro : le nouvel inscrit n'a aucune progression
                this.localProgress = {};
                this.serverProgression = null;
                this.joinForm = { fullName: '', email: '', phone: '', city: '' };
                setTimeout(() => { this.closeJoinInline(); this.loadServerProgression(); }, 1500);
            },
            error: (err) => {
                var _a, _b;
                this.submitError = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de l\u2019inscription.';
                this.isSubmitting = false;
            },
        });
    }
    // ─── Calendrier ───────────────────────────────────────────────────────────
    parseLocalDate(s) {
        // Dates stockées au format "YYYY-MM-DD" sont parsées en UTC par défaut,
        // ce qui décale le jour pour les fuseaux horaires hors Europe.
        if (s && !s.includes('T'))
            return new Date(s + 'T00:00:00');
        return new Date(s);
    }
    get calendarCells() {
        var _a, _b, _c;
        if (!((_b = (_a = this.marathon) === null || _a === void 0 ? void 0 : _a.planLecture) === null || _b === void 0 ? void 0 : _b.length))
            return [];
        const plan = this.marathon.planLecture;
        const planByDate = new Map(plan.map((d) => [d.date, d]));
        const start = this.parseLocalDate(this.marathon.dateDebut);
        const end = this.parseLocalDate(this.marathon.dateFin);
        const cells = [];
        const offset = start.getDay();
        for (let i = 0; i < offset; i++)
            cells.push({ date: null });
        const current = new Date(start);
        while (current <= end) {
            const dd = String(current.getDate()).padStart(2, '0');
            const mm = String(current.getMonth() + 1).padStart(2, '0');
            const key = `${dd}/${mm}`;
            const p = planByDate.get(key);
            cells.push({ date: new Date(current), label: dd, dayNumber: p === null || p === void 0 ? void 0 : p.day, reading: (_c = p === null || p === void 0 ? void 0 : p.reading) !== null && _c !== void 0 ? _c : '' });
            current.setDate(current.getDate() + 1);
        }
        while (cells.length % 7 !== 0)
            cells.push({ date: null });
        return cells;
    }
    scrollToToday() {
        var _a;
        const shell = (_a = this.calendarShell) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!shell)
            return;
        const todayCell = shell.querySelector('.calendar-cell.is-today');
        if (!todayCell)
            return;
        todayCell.scrollIntoView({ behavior: 'smooth', block: 'center' });
        todayCell.classList.add('pulse');
        window.setTimeout(() => todayCell.classList.remove('pulse'), 800);
    }
    isToday(date) {
        if (!date)
            return false;
        return date.toDateString() === new Date().toDateString();
    }
    formatReading(text) {
        return (text || '').replace(/;\s*/g, '<br>');
    }
    toggleLeaderboard() {
        this.showLeaderboard = !this.showLeaderboard;
        if (this.showLeaderboard && !this.leaderboard.length) {
            this.loadLeaderboard();
        }
    }
    loadLeaderboard() {
        if (!this.selectedId)
            return;
        this.loadingLeaderboard = true;
        this.http.get(`${this.base}/marathon/${this.selectedId}/leaderboard`).subscribe({
            next: (data) => { this.leaderboard = data !== null && data !== void 0 ? data : []; this.loadingLeaderboard = false; },
            error: () => { this.loadingLeaderboard = false; },
        });
    }
    // ─── Helpers ──────────────────────────────────────────────────────────────
    resetProgressState() {
        this.localProgress = {};
        this.serverProgression = null;
        this.submitSuccess = false;
        this.submitError = '';
        this.isJoinOpen = false;
        this.leaderboard = [];
        this.showLeaderboard = false;
    }
    get currentNbInscrits() {
        var _a, _b, _c;
        return this.selectedId ? ((_c = (_a = this.nbInscrits[this.selectedId]) !== null && _a !== void 0 ? _a : (_b = this.marathon) === null || _b === void 0 ? void 0 : _b.nbInscrits) !== null && _c !== void 0 ? _c : 0) : 0;
    }
}
MarathonBibliqueComponent.ɵfac = function MarathonBibliqueComponent_Factory(t) { return new (t || MarathonBibliqueComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.PageContentService)); };
MarathonBibliqueComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MarathonBibliqueComponent, selectors: [["app-marathon-biblique"]], viewQuery: function MarathonBibliqueComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendarShell = _t.first);
    } }, decls: 81, vars: 3, consts: [["calendarShell", ""], ["class", "page-loading", 4, "ngIf"], ["class", "marathon-empty", 4, "ngIf"], [4, "ngIf"], [1, "marathon-info"], [1, "info-card"], [1, "info-badge"], [1, "info-list"], [1, "info-quote", 2, "color", "white"], [1, "faq-section"], [1, "faq-container"], [1, "faq-badge"], [1, "faq-title"], [1, "faq-list"], ["open", "", 1, "faq-item"], [1, "faq-item"], ["aria-label", "\u00C0 propos de CMCIEA France", 1, "seo-alias", "container"], [1, "page-loading"], [1, "loading-spinner"], [1, "marathon-empty"], [1, "empty-card"], [1, "empty-icon"], ["class", "marathon-tabs-bar", 4, "ngIf"], ["class", "marathon-container", 3, "join-open", 4, "ngIf"], ["class", "leaderboard-section", 4, "ngIf"], [1, "marathon-tabs-bar"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tab-btn", 3, "click"], [1, "tab-counter"], [1, "marathon-container"], [1, "marathon-calendar"], [1, "page-title"], [1, "subtitle"], [1, "progress-bar"], [1, "progress-left"], [1, "progress-title"], [1, "progress-value"], ["title", "Participants inscrits", 1, "counter-live"], [1, "counter-num"], [1, "counter-unit"], ["type", "button", 1, "today-btn", 3, "click"], [1, "progress-pill"], ["class", "rank-banner", 4, "ngIf"], ["class", "streak-banner", 4, "ngIf"], [1, "calendar-shell"], [1, "calendar-grid"], ["class", "calendar-weekday", 4, "ngFor", "ngForOf"], ["class", "calendar-cell", 3, "is-empty", "is-today", "is-done", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "marathon-media"], [1, "media-spacer"], [1, "media-title"], ["target", "_blank", "rel", "noopener", 1, "youtube-card", 3, "href"], [1, "youtube-overlay"], [1, "play-icon"], ["class", "identity-bar", 4, "ngIf"], ["class", "identity-bar identity-bar--active", 4, "ngIf"], [1, "join-inline"], ["type", "button", "class", "btn-prayer join-btn", 3, "click", 4, "ngIf"], ["class", "join-hint", 4, "ngIf"], ["class", "join-card", 4, "ngIf"], [1, "rank-banner"], [1, "rank-icon"], [1, "rank-milestones"], ["class", "ms-badge", 3, "reached", 4, "ngFor", "ngForOf"], [1, "ms-badge"], [1, "streak-banner"], ["title", "Jours cons\u00E9cutifs actuels", 1, "streak-item"], [1, "streak-separator"], ["title", "Meilleur streak", 1, "streak-item", "streak-max"], [1, "calendar-weekday"], [1, "calendar-cell"], [1, "cell-top"], [1, "cell-date"], ["class", "cell-check", 4, "ngIf"], [1, "cell-content"], [1, "cell-day"], [1, "cell-reading", 3, "innerHTML"], ["class", "saving-dot", 4, "ngIf"], [1, "cell-check"], ["type", "checkbox", 3, "ngModelChange", "id", "ngModel"], ["role", "checkbox", "tabindex", "0", 1, "check-ui"], [1, "saving-dot"], [1, "identity-bar"], [1, "identity-hint"], [1, "btn-identify", 3, "click"], ["class", "email-form", 4, "ngIf"], [1, "email-form"], ["type", "email", "placeholder", "Ton email d'inscription", 1, "field-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-prayer", 3, "click"], ["class", "form-error", 4, "ngIf"], [1, "form-error"], [1, "identity-bar", "identity-bar--active"], [1, "identity-name"], [1, "btn-forget", 3, "click"], ["type", "button", 1, "btn-prayer", "join-btn", 3, "click"], [1, "join-hint"], [1, "join-card"], [1, "join-head"], [1, "join-title"], [1, "join-subtitle"], ["type", "button", "aria-label", "Fermer", 1, "join-close", 3, "click"], [1, "join-form", 3, "ngSubmit"], [1, "join-grid"], [1, "field"], [1, "field-label"], ["name", "fullName", "required", "", "placeholder", "Jean Dupont", 1, "field-input", 3, "ngModelChange", "ngModel"], ["name", "email", "required", "", "type", "email", "placeholder", "exemple@mail.com", 1, "field-input", 3, "ngModelChange", "ngModel"], ["name", "phone", "placeholder", "+33...", 1, "field-input", 3, "ngModelChange", "ngModel"], ["name", "city", "placeholder", "Paris", 1, "field-input", 3, "ngModelChange", "ngModel"], ["class", "form-success", 4, "ngIf"], ["type", "submit", 1, "btn-prayer", "join-submit", 3, "disabled"], [1, "join-footnote"], [1, "form-success"], [1, "leaderboard-section"], [1, "leaderboard-header", 3, "click"], [1, "leaderboard-title"], [1, "leaderboard-toggle"], ["class", "leaderboard-body", 4, "ngIf"], [1, "leaderboard-body"], ["class", "lb-loading", 4, "ngIf"], ["class", "lb-empty", 4, "ngIf"], ["class", "lb-table-wrap", 4, "ngIf"], [1, "lb-loading"], [1, "lb-empty"], [1, "lb-table-wrap"], [1, "lb-table"], [3, "lb-me", 4, "ngFor", "ngForOf"], [1, "lb-note"], [1, "lb-progress-wrap"], [1, "lb-progress-bar"], [1, "lb-pct"], [1, "lb-streak"]], template: function MarathonBibliqueComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MarathonBibliqueComponent_div_0_Template, 4, 0, "div", 1)(1, MarathonBibliqueComponent_section_1_Template, 8, 0, "section", 2)(2, MarathonBibliqueComponent_ng_container_2_Template, 4, 3, "ng-container", 3);
        i0.ɵɵelementStart(3, "section", 4)(4, "div", 5)(5, "div", 6);
        i0.ɵɵtext(6, "\u2728 Objectif");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "h2");
        i0.ɵɵtext(8, "Pourquoi participer au Marathon Biblique ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "Le Marathon Biblique est une opportunit\u00E9 unique de parcourir la Bible de la Gen\u00E8se \u00E0 l'Apocalypse avec une progression claire, structur\u00E9e et communautaire.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ul", 7)(12, "li")(13, "strong");
        i0.ɵɵtext(14, "Discipline");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(15, " : un rendez-vous quotidien qui t'aide \u00E0 rester constant.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "li")(17, "strong");
        i0.ɵɵtext(18, "Compr\u00E9hension");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(19, " : une lecture continue pour mieux saisir le message biblique.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "li")(21, "strong");
        i0.ɵɵtext(22, "Foi");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(23, " : une exp\u00E9rience qui fortifie ton c\u0153ur et ta relation avec Dieu.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(24, "p", 8);
        i0.ɵɵtext(25, "\"Prends ce temps comme un rendez-vous quotidien avec Dieu et laisse Sa Parole transformer ta vie.\"");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(26, "section", 9)(27, "div", 10)(28, "span", 11);
        i0.ɵɵtext(29, "\u2753 FAQ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "h2", 12);
        i0.ɵɵtext(31, "Questions fr\u00E9quentes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div", 13)(33, "details", 14)(34, "summary");
        i0.ɵɵtext(35, "Qu'est-ce qu'un marathon biblique ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "p");
        i0.ɵɵtext(37, "Un programme de lecture intensive permettant de lire la Bible (ou une partie) sur une p\u00E9riode d\u00E9finie, avec un plan quotidien clair.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(38, "details", 15)(39, "summary");
        i0.ɵɵtext(40, "Le Marathon est-il gratuit ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "p");
        i0.ɵɵtext(42, "Oui. La participation est ");
        i0.ɵɵelementStart(43, "strong");
        i0.ɵɵtext(44, "enti\u00E8rement gratuite");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(45, " et ouverte \u00E0 tous.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(46, "details", 15)(47, "summary");
        i0.ɵɵtext(48, "Quelle version de la Bible utiliser ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "p");
        i0.ɵɵtext(50, "Le plan est compatible avec toutes les versions. Nous recommandons la ");
        i0.ɵɵelementStart(51, "strong");
        i0.ɵɵtext(52, "Bible Louis Segond 1910 (LSG)");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(53, ".");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(54, "details", 15)(55, "summary");
        i0.ɵɵtext(56, "Que se passe-t-il si je prends du retard ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "p");
        i0.ɵɵtext(58, "Aucun stress. Le Marathon est avant tout un ");
        i0.ɵɵelementStart(59, "strong");
        i0.ɵɵtext(60, "cheminement spirituel");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(61, ". Reprends \u00E0 ton rythme.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(62, "details", 15)(63, "summary");
        i0.ɵɵtext(64, "Pourquoi cocher chaque jour lu ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "p");
        i0.ɵɵtext(66, "Cocher ta progression te permet de recevoir des emails d'encouragement \u00E0 25%, 50%, 75% et une ");
        i0.ɵɵelementStart(67, "strong");
        i0.ɵɵtext(68, "attestation personnalis\u00E9e");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(69, " \u00E0 100%.");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(70, "section", 16)(71, "h2");
        i0.ɵɵtext(72, "CMCIEA France et le Marathon Biblique");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(73, "p");
        i0.ɵɵtext(74, "La ");
        i0.ɵɵelementStart(75, "strong");
        i0.ɵɵtext(76, "CMCIEA France");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(77, " organise des ");
        i0.ɵɵelementStart(78, "strong");
        i0.ɵɵtext(79, "Marathons Bibliques");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(80, " accessibles en ligne, ouverts \u00E0 tous. Notre \u00E9glise est enracin\u00E9e dans la Parole de Dieu et engag\u00E9e \u00E0 partager l'\u00C9vangile \u00E0 travers des initiatives de lecture communautaire.");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.loadingMarathons);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loadingMarathons && ctx.marathons.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loadingMarathons && ctx.marathons.length > 0);
    } }, dependencies: [i3.NgForOf, i3.NgIf, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm], styles: ["[_nghost-%COMP%] {\r\n  \n\r\n  --brand: #1D546C;\r\n  --brand-dark: #1A3D64;\r\n  --brand-soft: #F4F4F4;\r\n\r\n  --accent: #00B7B5;\r\n  --highlight: #00B7B5;\r\n\r\n  --bg: #F4F4F4;\r\n  --surface: #FFFFFF;\r\n  --border: #005461;\r\n\r\n  --title: #1D546C;\r\n  --text: #111111;\r\n  --muted: #334155;\r\n  --support: #005461;\r\n\r\n  display: block;\r\n  width: 100%;\r\n  color: var(--text);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\r\n}\r\n\r\n\n\r\n.page-loading[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 80px 20px;\r\n  gap: 16px;\r\n  color: var(--muted);\r\n}\r\n\r\n.loading-spinner[_ngcontent-%COMP%] {\r\n  width: 40px; height: 40px;\r\n  border: 3px solid var(--bg);\r\n  border-top-color: var(--brand);\r\n  border-radius: 50%;\r\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\r\n\r\n.marathon-empty[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 80px auto;\r\n  padding: 0 1.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.empty-card[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 18px;\r\n  padding: 48px 32px;\r\n}\r\n\r\n.empty-icon[_ngcontent-%COMP%] { font-size: 3rem; display: block; margin-bottom: 16px; }\r\n\r\n\n\r\n.marathon-tabs-bar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n  padding: 1.5rem 1.5rem 0;\r\n  max-width: 1300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.tab-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  padding: 10px 20px;\r\n  border-radius: 999px;\r\n  border: 2px solid var(--border);\r\n  background: #fff;\r\n  color: var(--brand);\r\n  font-weight: 700;\r\n  font-size: 0.95rem;\r\n  cursor: pointer;\r\n  transition: all 0.15s;\r\n}\r\n\r\n.tab-btn.active[_ngcontent-%COMP%] {\r\n  background: var(--brand);\r\n  color: #fff;\r\n  border-color: var(--brand);\r\n}\r\n\r\n.tab-counter[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  font-weight: 800;\r\n  padding: 2px 8px;\r\n  border-radius: 999px;\r\n  background: rgba(255,255,255,0.2);\r\n}\r\n\r\n.tab-btn[_ngcontent-%COMP%]:not(.active)   .tab-counter[_ngcontent-%COMP%] {\r\n  background: rgba(0,84,97,0.12);\r\n  color: var(--brand);\r\n}\r\n\r\n\n\r\n.counter-live[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  line-height: 1.1;\r\n}\r\n\r\n.counter-num[_ngcontent-%COMP%]  { font-size: 1.4rem; font-weight: 900; color: var(--accent); }\r\n.counter-unit[_ngcontent-%COMP%] { font-size: 0.7rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; }\r\n\r\n\n\r\n.rank-banner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n  padding: 10px 16px;\r\n  border-radius: 12px;\r\n  background: rgba(0,183,181,0.08);\r\n  border: 1px solid rgba(0,183,181,0.3);\r\n  margin-bottom: 1rem;\r\n  font-size: 0.95rem;\r\n  color: var(--muted);\r\n}\r\n\r\n.rank-icon[_ngcontent-%COMP%] { font-size: 1.2rem; }\r\n\r\n.rank-milestones[_ngcontent-%COMP%] { display: flex; gap: 6px; margin-left: auto; }\r\n\r\n.ms-badge[_ngcontent-%COMP%] {\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n  padding: 2px 7px;\r\n  border-radius: 999px;\r\n  background: var(--bg);\r\n  color: #aab0c4;\r\n  border: 1px solid #dde1ec;\r\n}\r\n\r\n.ms-badge.reached[_ngcontent-%COMP%] { background: #dcfce7; color: #16a34a; border-color: #bbf7d0; }\r\n\r\n\n\r\n.streak-banner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  flex-wrap: wrap;\r\n  padding: 10px 16px;\r\n  border-radius: 12px;\r\n  background: rgba(255, 165, 0, 0.08);\r\n  border: 1px solid rgba(255, 165, 0, 0.3);\r\n  margin-bottom: 1rem;\r\n  font-size: 0.9rem;\r\n  color: var(--muted);\r\n}\r\n\r\n.streak-separator[_ngcontent-%COMP%] { color: #ccc; }\r\n.streak-max[_ngcontent-%COMP%] { opacity: 0.75; }\r\n\r\n\n\r\n.leaderboard-section[_ngcontent-%COMP%] {\r\n  max-width: 860px;\r\n  margin: 0 auto 3rem;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.leaderboard-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 16px 20px;\r\n  background: var(--card-bg, #fff);\r\n  border-radius: 14px;\r\n  border: 1px solid var(--border, #eef0f7);\r\n  cursor: pointer;\r\n  user-select: none;\r\n  transition: background 0.15s;\r\n}\r\n\r\n.leaderboard-header[_ngcontent-%COMP%]:hover { background: #f8f9fc; }\r\n\r\n.leaderboard-title[_ngcontent-%COMP%] { font-size: 1rem; font-weight: 700; color: var(--text, #1a1f2e); margin: 0; }\r\n\r\n.leaderboard-toggle[_ngcontent-%COMP%] { font-size: 0.85rem; color: var(--muted, #8b93a8); }\r\n\r\n.leaderboard-body[_ngcontent-%COMP%] {\r\n  background: var(--card-bg, #fff);\r\n  border: 1px solid var(--border, #eef0f7);\r\n  border-top: none;\r\n  border-radius: 0 0 14px 14px;\r\n  padding: 16px 20px;\r\n}\r\n\r\n.lb-loading[_ngcontent-%COMP%], .lb-empty[_ngcontent-%COMP%] { font-size: 0.9rem; color: var(--muted, #8b93a8); padding: 20px; text-align: center; }\r\n\r\n.lb-table-wrap[_ngcontent-%COMP%] { overflow-x: auto; }\r\n\r\n.lb-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; }\r\n\r\n.lb-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  font-size: 0.7rem;\r\n  font-weight: 700;\r\n  color: #8b93a8;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n  padding: 8px 12px;\r\n  border-bottom: 2px solid #eef0f7;\r\n}\r\n\r\n.lb-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 10px 12px; font-size: 0.88rem; color: var(--text, #3d4663); border-bottom: 1px solid #f4f6f9; }\r\n\r\n.lb-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] { border-bottom: none; }\r\n\r\n.lb-table[_ngcontent-%COMP%]   tr.lb-me[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { background: rgba(79,125,255,0.05); font-weight: 600; }\r\n\r\n.lb-rank[_ngcontent-%COMP%] { font-size: 1rem; font-weight: 800; }\r\n.lb-rank--1[_ngcontent-%COMP%] { color: #f59e0b; }\r\n.lb-rank--2[_ngcontent-%COMP%] { color: #94a3b8; }\r\n.lb-rank--3[_ngcontent-%COMP%] { color: #b45309; }\r\n.lb-rank--other[_ngcontent-%COMP%] { color: #4f7dff; }\r\n\r\n.lb-progress-wrap[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 80px;\r\n  height: 5px;\r\n  background: #eef0f7;\r\n  border-radius: 3px;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n  margin-right: 6px;\r\n}\r\n\r\n.lb-progress-bar[_ngcontent-%COMP%] { height: 100%; background: #4f7dff; border-radius: 3px; }\r\n\r\n.lb-pct[_ngcontent-%COMP%] { font-size: 0.8rem; color: var(--muted, #8b93a8); vertical-align: middle; }\r\n\r\n.lb-streak[_ngcontent-%COMP%] { font-size: 0.85rem; }\r\n\r\n.lb-note[_ngcontent-%COMP%] { font-size: 0.75rem; color: #aab0c4; margin-top: 10px; text-align: center; }\r\n\r\n\n\r\n.saving-dot[_ngcontent-%COMP%] {\r\n  width: 6px; height: 6px;\r\n  border-radius: 50%;\r\n  background: var(--accent);\r\n  position: absolute;\r\n  bottom: 6px; right: 6px;\r\n  animation: _ngcontent-%COMP%_pulse-dot 0.8s ease infinite;\r\n}\r\n\r\n.calendar-cell[_ngcontent-%COMP%] { position: relative; }\r\n\r\n@keyframes _ngcontent-%COMP%_pulse-dot {\r\n  0%, 100% { opacity: 1; transform: scale(1); }\r\n  50%       { opacity: 0.4; transform: scale(0.7); }\r\n}\r\n\r\n\n\r\n.identity-bar[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  padding: 12px 16px;\r\n  border-radius: 14px;\r\n  background: var(--bg);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.identity-bar--active[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: rgba(0,183,181,0.07);\r\n  border-color: rgba(0,183,181,0.35);\r\n}\r\n\r\n.identity-hint[_ngcontent-%COMP%] { font-size: 0.88rem; color: var(--muted); margin: 0 0 8px; font-weight: 700; }\r\n.identity-name[_ngcontent-%COMP%] { font-weight: 800; color: var(--brand); font-size: 0.9rem; }\r\n\r\n.btn-identify[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 7px 14px;\r\n  border-radius: 999px;\r\n  border: 1px solid var(--border);\r\n  background: #fff;\r\n  color: var(--brand);\r\n  font-weight: 700;\r\n  font-size: 0.85rem;\r\n  cursor: pointer;\r\n  transition: background 0.15s;\r\n}\r\n\r\n.btn-identify[_ngcontent-%COMP%]:hover { background: rgba(0,183,181,0.1); }\r\n\r\n.btn-forget[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: var(--muted);\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.email-form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  margin-top: 10px;\r\n}\r\n\r\n\n\r\n.marathon-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1.6fr 0.6fr; \n\r\n  gap: 2rem;\r\n  padding: 2.5rem 1.5rem;\r\n  max-width: 1300px;\r\n  margin: 0 auto;\r\n  align-items: start;\r\n  color: #111;\r\n}\r\n\r\n\n\r\n.page-title[_ngcontent-%COMP%] {\r\n  margin: 0 0 0.5rem 0;\r\n  font-size: 2.3rem;\r\n  font-weight: 900;\r\n  color: var(--brand);\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%] {\r\n  margin: 0 0 1.2rem 0;\r\n  color: var(--brand-dark);\r\n  line-height: 1.5;\r\n  white-space: pre-line; \n\r\n}\r\n\r\n\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin: 0 0 1.25rem 0;\r\n  padding: 0.9rem 1rem;\r\n  border-radius: 16px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n.progress-left[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 0.15rem;\r\n}\r\n\r\n.progress-title[_ngcontent-%COMP%] {\r\n  font-weight: 800;\r\n  color: var(--muted);\r\n  font-size: 0.92rem;\r\n}\r\n\r\n.progress-value[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  color: var(--brand);\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.progress-pill[_ngcontent-%COMP%] {\r\n  padding: 0.45rem 0.7rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  color: var(--brand);\r\n  background: var(--bg);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.today-btn[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--border);\r\n  background: var(--bg);\r\n  color: var(--brand);\r\n  font-weight: 900;\r\n  padding: 0.55rem 0.8rem;\r\n  border-radius: 999px;\r\n  cursor: pointer;\r\n  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;\r\n  white-space: nowrap;\r\n}\r\n\r\n.today-btn[_ngcontent-%COMP%]:hover {\r\n  background: rgba(0, 183, 181, 0.12);\r\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.today-btn[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0px);\r\n}\r\n\r\n\n\r\n.pulse[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_pulseRing 0.8s ease;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_pulseRing {\r\n  0% { box-shadow: 0 0 0 0 rgba(0, 183, 181, 0.25); }\r\n  100% { box-shadow: 0 0 0 14px rgba(0, 183, 181, 0); }\r\n}\r\n\r\n\n\r\n.calendar-shell[_ngcontent-%COMP%] {\r\n  border-radius: 18px;\r\n  padding: 1rem;\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\r\n  max-height: 72vh;\r\n  overflow: auto;\r\n}\r\n\r\n.calendar-shell[_ngcontent-%COMP%]::-webkit-scrollbar { width: 10px; height: 10px; }\r\n.calendar-shell[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: rgba(0, 84, 97, 0.25);\r\n  border-radius: 10px;\r\n}\r\n.calendar-shell[_ngcontent-%COMP%]::-webkit-scrollbar-track { background: transparent; }\r\n.calendar-shell[_ngcontent-%COMP%] { scrollbar-width: thin; scrollbar-color: rgba(0, 84, 97, 0.35) transparent; }\r\n\r\n.calendar-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, minmax(0, 1fr));\r\n  gap: 0.75rem;\r\n}\r\n\r\n.calendar-weekday[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n  font-weight: 900;\r\n  font-size: 0.95rem;\r\n  color: var(--brand);\r\n  padding: 0.75rem 0.9rem;\r\n  border-radius: 14px;\r\n  background: var(--bg);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.calendar-cell[_ngcontent-%COMP%] {\r\n  min-height: 128px;\r\n  padding: 0.85rem;\r\n  border-radius: 16px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;\r\n}\r\n\r\n.calendar-cell[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-2px);\r\n  border-color: var(--support);\r\n  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.calendar-cell.is-empty[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  box-shadow: none;\r\n  pointer-events: none;\r\n  min-height: 0;\r\n}\r\n\r\n\n\r\n.calendar-cell.is-today[_ngcontent-%COMP%] {\r\n  border-color: var(--accent);\r\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);\r\n}\r\n\r\n.calendar-cell.is-today[_ngcontent-%COMP%]   .cell-date[_ngcontent-%COMP%]::after {\r\n  content: \" \u2022 Aujourd\u2019hui\";\r\n  font-size: 0.8rem;\r\n  font-weight: 800;\r\n  color: #475569;\r\n}\r\n\r\n\n\r\n.calendar-shell[_ngcontent-%COMP%]{\r\n  max-height: 72vh;\r\n}\r\n\r\n\n\r\n.marathon-container.join-open[_ngcontent-%COMP%]   .calendar-shell[_ngcontent-%COMP%]{\r\n  max-height: 120vh;         \n\r\n}\r\n\r\n\n\r\n.marathon-container.join-open[_ngcontent-%COMP%]{\r\n  align-items: stretch;\r\n}\r\n\r\n\r\n\n\r\n.calendar-cell.is-done[_ngcontent-%COMP%] {\r\n  background: var(--bg);\r\n}\r\n\r\n.calendar-cell.is-done[_ngcontent-%COMP%]   .cell-reading[_ngcontent-%COMP%] {\r\n  color: var(--muted);\r\n  text-decoration: line-through;\r\n}\r\n\r\n.cell-top[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 0.55rem;\r\n}\r\n\r\n.cell-date[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  color: var(--brand);\r\n}\r\n\r\n.cell-content[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.cell-day[_ngcontent-%COMP%] {\r\n  font-size: 0.82rem;\r\n  font-weight: 900;\r\n  color: var(--brand-secondary);\r\n}\r\n\r\n\n\r\n.cell-reading[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  color: var(--text);\r\n  line-height: 1.25;\r\n  font-size: 0.92rem;\r\n\r\n  white-space: normal;\r\n  word-break: break-word;\r\n  overflow-wrap: anywhere;\r\n  hyphens: auto;\r\n}\r\n\r\n\n\r\n.cell-check[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  position: relative;\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n.cell-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  inset: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\n\r\n.check-ui[_ngcontent-%COMP%] {\r\n  width: 18px;\r\n  height: 18px;\r\n  border-radius: 6px;\r\n  border: 1px solid var(--border);\r\n  background: #ffffff;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.cell-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .check-ui[_ngcontent-%COMP%] {\r\n  background: var(--brand);\r\n  border-color: var(--brand);\r\n}\r\n\r\n.cell-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .check-ui[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 5px;\r\n  top: 2px;\r\n  width: 5px;\r\n  height: 9px;\r\n  border: solid #fff;\r\n  border-width: 0 2px 2px 0;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n\n\r\n.media-title[_ngcontent-%COMP%] {\r\n  margin: 0 0 1rem 0;\r\n  color: var(--brand);\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n}\r\n\r\n\n\r\n.media-spacer[_ngcontent-%COMP%] {\r\n  height: 132px;\r\n}\r\n\r\n.youtube-card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: block;\r\n  height: 320px;\r\n  border-radius: 18px;\r\n  overflow: hidden;\r\n  border: 1px solid var(--border);\r\n  background: linear-gradient(135deg, var(--bg), rgba(29, 84, 108, 0.08));\r\n  text-decoration: none;\r\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n.youtube-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  inset: 0;\r\n  display: flex;\r\n  gap: 0.6rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  font-size: 1.35rem;\r\n  color: var(--brand);\r\n  background: rgba(255, 255, 255, 0.35);\r\n  backdrop-filter: blur(6px);\r\n}\r\n\r\n.play-icon[_ngcontent-%COMP%] { font-size: 1.35rem; }\r\n\r\n\n\r\n.btn-prayer[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: .5rem;\r\n  padding: 0.95rem 1.3rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 1rem;\r\n  text-decoration: none;\r\n\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n  box-shadow: 0 14px 30px rgba(17,24,39,.14);\r\n\r\n  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;\r\n}\r\n\r\n.btn-prayer[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 18px 38px rgba(17,24,39,.22);\r\n  background: var(--cta-hover);\r\n  color: #ffffff;\r\n}\r\n\r\n\n\r\n.join-inline[_ngcontent-%COMP%] { margin-top: 1rem; }\r\n.join-btn[_ngcontent-%COMP%], .join-submit[_ngcontent-%COMP%] { width: 100%; }\r\n\r\n.join-hint[_ngcontent-%COMP%]{\r\n  margin: .65rem 0 0;\r\n  text-align: center;\r\n  color: var(--muted);\r\n  font-weight: 800;\r\n}\r\n\r\n.join-card[_ngcontent-%COMP%]{\r\n  margin-top: .9rem;\r\n  background: #fff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 18px;\r\n  padding: 1.05rem;\r\n  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.join-head[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin-bottom: .8rem;\r\n}\r\n\r\n.join-title[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  font-weight: 950;\r\n  font-size: 1.12rem;\r\n  color: var(--brand);\r\n}\r\n\r\n.join-subtitle[_ngcontent-%COMP%]{\r\n  margin: .25rem 0 0;\r\n  color: var(--muted);\r\n  line-height: 1.55;\r\n  font-weight: 700;\r\n}\r\n\r\n.join-close[_ngcontent-%COMP%]{\r\n  width: 42px;\r\n  height: 42px;\r\n  border-radius: 14px;\r\n  border: 1px solid var(--border);\r\n  background: var(--bg);\r\n  color: var(--brand);\r\n  cursor: pointer;\r\n  font-weight: 950;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.join-form[_ngcontent-%COMP%]{ display: grid; gap: .75rem; }\r\n\r\n.join-grid[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: .85rem;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]{ display: grid; gap: .35rem; }\r\n\r\n.field-label[_ngcontent-%COMP%]{\r\n  font-weight: 900;\r\n  color: var(--brand-secondary);\r\n  font-size: .95rem;\r\n}\r\n\r\n.field-input[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding: .85rem .9rem;\r\n  border-radius: 14px;\r\n  border: 1px solid var(--border);\r\n  font-weight: 800;\r\n  color: var(--text);\r\n  background: #fff;\r\n  transition: border-color .12s ease, box-shadow .12s ease;\r\n}\r\n\r\n.field-input[_ngcontent-%COMP%]::placeholder{\r\n  color: var(--muted);\r\n  font-weight: 700;\r\n}\r\n\r\n.field-input[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n  border-color: var(--accent);\r\n  box-shadow: 0 0 0 4px rgba(0, 183, 181, 0.25);\r\n}\r\n\r\n.form-error[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  color: #b91c1c;\r\n  font-weight: 900;\r\n}\r\n\r\n.form-success[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  color: #166534;\r\n  font-weight: 900;\r\n}\r\n\r\n.join-footnote[_ngcontent-%COMP%]{\r\n  margin: .2rem 0 0;\r\n  color: var(--muted);\r\n  font-weight: 700;\r\n  line-height: 1.45;\r\n  font-size: .9rem;\r\n}\r\n\r\n\n\r\n.marathon-info[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin: 2.5rem auto 3.5rem auto;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.marathon-info[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 18px;\r\n  padding: 1.6rem 1.6rem;\r\n  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.info-badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 0.35rem 0.65rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 0.9rem;\r\n  color: var(--brand);\r\n  background: rgba(0, 183, 181, 0.12);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  margin-bottom: 0.9rem;\r\n}\r\n\r\n.marathon-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 0.75rem 0;\r\n  font-size: 2rem;\r\n  font-weight: 950;\r\n  color: var(--brand);\r\n  letter-spacing: -0.02em;\r\n}\r\n\r\n.marathon-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0 0 0.85rem 0;\r\n  color: var(--muted);\r\n  line-height: 1.75;\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.info-list[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 1rem 0 1.1rem 0;\r\n  display: grid;\r\n  gap: 0.6rem;\r\n}\r\n\r\n.info-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0.85rem 0.95rem;\r\n  border-radius: 14px;\r\n  border: 1px solid var(--border);\r\n  background: var(--bg);\r\n  color: var(--muted);\r\n  line-height: 1.55;\r\n}\r\n\r\n.info-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--brand); }\r\n\r\n.info-quote[_ngcontent-%COMP%] {\r\n  margin: 1.1rem 0 0 0;\r\n  padding: 0.9rem 1rem;\r\n  border-radius: 14px;\r\n  background: #0b8da1;\r\n  border: 1px solid #1D546C;\r\n  color: #ffffff;\r\n  font-weight: 800;\r\n  line-height: 1.6;\r\n}\r\n\r\n\n\r\n@media (max-width: 760px) {\r\n  \n\r\n  .marathon-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    gap: 1.25rem;\r\n  }\r\n\r\n  .marathon-calendar[_ngcontent-%COMP%] { order: 1; }\r\n  .marathon-media[_ngcontent-%COMP%] { order: 2; position: static; }\r\n  .media-spacer[_ngcontent-%COMP%] { display: none; }\r\n\r\n  \n\r\n  .calendar-shell[_ngcontent-%COMP%] {\r\n    padding: 0.75rem;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    max-height: min(72vh, 620px);\r\n  }\r\n\r\n  .calendar-weekday[_ngcontent-%COMP%] { display: none; }\r\n\r\n  .calendar-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n    gap: 0.6rem;\r\n  }\r\n\r\n  .calendar-cell[_ngcontent-%COMP%] {\r\n    min-height: 118px;\r\n    padding: 0.7rem;\r\n    border-radius: 14px;\r\n  }\r\n\r\n  .cell-date[_ngcontent-%COMP%] { font-size: 0.95rem; }\r\n  .cell-day[_ngcontent-%COMP%] { font-size: 0.78rem; }\r\n\r\n  .cell-reading[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  \n\r\n  .youtube-card[_ngcontent-%COMP%] { height: 240px; }\r\n  .youtube-overlay[_ngcontent-%COMP%] { font-size: 1.2rem; }\r\n\r\n  \n\r\n  .join-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n}\r\n\r\n\n\r\n.join-card[_ngcontent-%COMP%], .join-form[_ngcontent-%COMP%], .join-grid[_ngcontent-%COMP%], .field[_ngcontent-%COMP%] { min-width: 0; }\r\n\r\n.field-input[_ngcontent-%COMP%], .join-submit[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.join-grid[_ngcontent-%COMP%] {\r\n  grid-template-columns: repeat(2, minmax(0, 1fr)); \n\r\n  gap: .85rem;\r\n}\r\n\r\n.field-input[_ngcontent-%COMP%]{\r\n  min-width: 0; \n\r\n}\r\n\r\n@media (max-width: 520px){\r\n  .join-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n}\r\n\r\n.field-label[_ngcontent-%COMP%]{\r\n  display: block;\r\n  line-height: 1.2;\r\n  word-break: break-word;\r\n}\r\n\r\n\n\r\n.faq-section[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin: 3rem auto 4rem auto;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.faq-container[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 22px;\r\n  padding: 2rem 2rem;\r\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.faq-badge[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.4rem;\r\n  padding: 0.35rem 0.7rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 0.9rem;\r\n  background: rgba(0, 183, 181, 0.12);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  color: var(--brand);\r\n}\r\n\r\n.faq-title[_ngcontent-%COMP%] {\r\n  margin: 0.8rem 0 1.4rem 0;\r\n  font-size: 2rem;\r\n  font-weight: 950;\r\n  color: var(--brand);\r\n  letter-spacing: -0.02em;\r\n}\r\n\r\n\n\r\n.faq-list[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 0.75rem;\r\n}\r\n\r\n\n\r\n.faq-item[_ngcontent-%COMP%] {\r\n  border-radius: 16px;\r\n  border: 1px solid var(--border);\r\n  background: var(--bg);\r\n  padding: 0.9rem 1rem;\r\n  transition: background 0.15s ease, box-shadow 0.15s ease;\r\n}\r\n\r\n.faq-item[open][_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.faq-item[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  list-style: none;\r\n  font-weight: 900;\r\n  font-size: 1.05rem;\r\n  color: var(--brand);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.faq-item[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\r\n  display: none;\r\n}\r\n\r\n.faq-item[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::after {\r\n  content: \"\uFF0B\";\r\n  font-size: 1.2rem;\r\n  font-weight: 900;\r\n  color: var(--accent);\r\n}\r\n\r\n.faq-item[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::after {\r\n  content: \"\u2212\";\r\n}\r\n\r\n.faq-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0.6rem 0 0 0;\r\n  color: var(--muted);\r\n  line-height: 1.7;\r\n  font-size: 1rem;\r\n}\r\n\r\n\n\r\n.seo-alias[_ngcontent-%COMP%] {\r\n  margin-top: 3.5rem;\r\n  padding: 2.6rem 2.4rem;\r\n  background: rgba(96, 227, 225, 0.12);\r\n  border-radius: 18px;\r\n  border: 1px solid #005461;\r\n  box-shadow: 0 14px 38px rgba(17, 24, 39, 0.08);\r\n\r\n  max-width: 1100px;\r\n  margin: 3rem auto 4rem auto;\r\n  text-align: center;\r\n}\r\n\r\n\n\r\n.seo-alias[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0 0 1.1rem 0;\r\n  font-size: 1.7rem;\r\n  line-height: 1.25;\r\n  font-weight: 800;\r\n  color: var(--brand);\r\n  letter-spacing: -0.02em;\r\n}\r\n\r\n\n\r\n.seo-alias[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  max-width: none;\r\n  font-size: 1.06rem;\r\n  line-height: 1.85;\r\n  color: var(--muted);\r\n}\r\n\r\n\n\r\n.seo-alias[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  color: var(--brand);\r\n  font-weight: 700;\r\n}\r\n\r\n\n\r\n@media (max-width: 760px) {\r\n  .faq-container[_ngcontent-%COMP%] {\r\n    padding: 1.5rem 1.2rem;\r\n  }\r\n\r\n  .faq-title[_ngcontent-%COMP%] {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .faq-item[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n    .seo-alias[_ngcontent-%COMP%] {\r\n    padding: 2rem 1.4rem;\r\n    margin-top: 3rem;\r\n  }\r\n\r\n  .seo-alias[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1.35rem;\r\n  }\r\n\r\n  .seo-alias[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarathonBibliqueComponent, [{
        type: Component,
        args: [{ selector: 'app-marathon-biblique', standalone: false, template: "<!-- \u2500\u2500 Chargement \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<div *ngIf=\"loadingMarathons\" class=\"page-loading\">\n  <div class=\"loading-spinner\"></div>\n  <p>Chargement des marathons\u2026</p>\n</div>\n\n<!-- \u2500\u2500 Aucun marathon actif \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<section *ngIf=\"!loadingMarathons && marathons.length === 0\" class=\"marathon-empty\">\n  <div class=\"empty-card\">\n    <span class=\"empty-icon\">\uD83D\uDCD6</span>\n    <h2>Aucun marathon en cours</h2>\n    <p>Le prochain marathon sera annonc\u00E9 prochainement. Revenez bient\u00F4t !</p>\n  </div>\n</section>\n\n<!-- \u2500\u2500 Contenu principal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<ng-container *ngIf=\"!loadingMarathons && marathons.length > 0\">\n\n  <!-- Tabs (si plusieurs marathons actifs) -->\n  <div class=\"marathon-tabs-bar\" *ngIf=\"marathons.length > 1\">\n    <button\n      class=\"tab-btn\"\n      *ngFor=\"let m of marathons\"\n      [class.active]=\"selectedId === m.id\"\n      (click)=\"selectMarathon(m.id)\"\n    >\n      {{ m.titre }}\n      <span class=\"tab-counter\">{{ nbInscrits[m.id] ?? m.nbInscrits }} inscrits</span>\n    </button>\n  </div>\n\n  <!-- Vue marathon s\u00E9lectionn\u00E9 -->\n  <section class=\"marathon-container\" *ngIf=\"marathon\" [class.join-open]=\"isJoinOpen\">\n\n    <!-- \u2550\u2550 COLONNE GAUCHE : Calendrier \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <div class=\"marathon-calendar\">\n\n      <h1 class=\"page-title\">{{ marathon.titre }}</h1>\n      <p class=\"subtitle\">{{ marathon.description }}</p>\n\n      <!-- Barre progression + compteur temps r\u00E9el -->\n      <div class=\"progress-bar\">\n        <div class=\"progress-left\">\n          <span class=\"progress-title\">Progression</span>\n          <span class=\"progress-value\">{{ completedCount }}/{{ totalDays }} jours termin\u00E9s</span>\n        </div>\n\n        <div class=\"counter-live\" title=\"Participants inscrits\">\n          <span class=\"counter-num\">{{ currentNbInscrits }}</span>\n          <span class=\"counter-unit\">inscrits</span>\n        </div>\n\n        <button type=\"button\" class=\"today-btn\" (click)=\"scrollToToday()\">Aujourd'hui</button>\n        <div class=\"progress-pill\">{{ progressPercent }}%</div>\n      </div>\n\n      <!-- Rang (si connect\u00E9 et progression charg\u00E9e) -->\n      <div class=\"rank-banner\" *ngIf=\"serverProgression && serverProgression.rank\">\n        <span class=\"rank-icon\">\uD83C\uDFC5</span>\n        Tu es <strong>#{{ serverProgression.rank }}</strong>\n        sur {{ serverProgression.totalParticipants }} participants\n        <span class=\"rank-milestones\">\n          <span *ngFor=\"let ms of [25,50,75,100]\"\n                class=\"ms-badge\"\n                [class.reached]=\"serverProgression.milestonesReached?.includes(ms)\">\n            {{ ms }}%\n          </span>\n        </span>\n      </div>\n\n      <!-- Streak (si connect\u00E9) -->\n      <div class=\"streak-banner\" *ngIf=\"serverProgression && (serverProgression.currentStreak > 0 || serverProgression.maxStreak > 0)\">\n        <div class=\"streak-item\" title=\"Jours cons\u00E9cutifs actuels\">\n          \uD83D\uDD25 <strong>{{ serverProgression.currentStreak ?? 0 }}</strong> jour(s) de suite\n        </div>\n        <div class=\"streak-separator\">\u00B7</div>\n        <div class=\"streak-item streak-max\" title=\"Meilleur streak\">\n          \uD83C\uDFC6 Record : <strong>{{ serverProgression.maxStreak ?? 0 }}</strong> jour(s)\n        </div>\n      </div>\n\n      <!-- Calendrier -->\n      <div class=\"calendar-shell\" #calendarShell>\n        <div class=\"calendar-grid\">\n          <div class=\"calendar-weekday\" *ngFor=\"let w of weekdays\">{{ w }}</div>\n\n          <div\n            class=\"calendar-cell\"\n            *ngFor=\"let c of calendarCells; trackBy: trackCell\"\n            [class.is-empty]=\"!c.date\"\n            [class.is-today]=\"isToday(c.date)\"\n            [class.is-done]=\"c.dayNumber && localProgress[c.dayNumber]\"\n          >\n            <ng-container *ngIf=\"c.date\">\n              <div class=\"cell-top\">\n                <span class=\"cell-date\">{{ c.label }}</span>\n                <label class=\"cell-check\" *ngIf=\"c.dayNumber\">\n                  <input\n                    type=\"checkbox\"\n                    [id]=\"'day-check-' + c.dayNumber\"\n                    [(ngModel)]=\"localProgress[c.dayNumber!]\"\n                    (ngModelChange)=\"onDayChange(c.dayNumber!, $event)\"\n                  />\n                  <span class=\"check-ui\"\n                        role=\"checkbox\"\n                        [attr.aria-checked]=\"localProgress[c.dayNumber!]\"\n                        tabindex=\"0\"></span>\n                </label>\n              </div>\n              <div class=\"cell-content\">\n                <div class=\"cell-day\">Jour {{ c.dayNumber }}</div>\n                <div class=\"cell-reading\" [innerHTML]=\"formatReading(c.reading)\"></div>\n              </div>\n              <div class=\"saving-dot\" *ngIf=\"savingDay === c.dayNumber\"></div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- \u2550\u2550 COLONNE DROITE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <div class=\"marathon-media\">\n      <div class=\"media-spacer\"></div>\n\n      <h2 class=\"media-title\">\uD83C\uDFA7 Bible Audio \u2013 Playlist Officielle</h2>\n      <a [href]=\"ytUrl\" target=\"_blank\" rel=\"noopener\" class=\"youtube-card\">\n        <div class=\"youtube-overlay\">\n          <span class=\"play-icon\">\u25B6</span>\n          <span>\u00C9couter la Bible</span>\n        </div>\n      </a>\n\n      <!-- \u2500\u2500 Identification utilisateur \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n      <div class=\"identity-bar\" *ngIf=\"!emailSet && !isJoinOpen\">\n        <p class=\"identity-hint\">\n          D\u00E9j\u00E0 inscrit(e) ? Identifie-toi pour charger ta progression et ton rang.\n        </p>\n        <button class=\"btn-identify\" (click)=\"showEmailForm = !showEmailForm\">\n          {{ showEmailForm ? 'Annuler' : 'Charger ma progression' }}\n        </button>\n        <div class=\"email-form\" *ngIf=\"showEmailForm\">\n          <input class=\"field-input\" type=\"email\" [(ngModel)]=\"emailInput\" placeholder=\"Ton email d'inscription\" (keyup.enter)=\"confirmEmail()\" />\n          <button class=\"btn-prayer\" (click)=\"confirmEmail()\">Confirmer</button>\n          <p class=\"form-error\" *ngIf=\"emailError\">{{ emailError }}</p>\n        </div>\n      </div>\n\n      <div class=\"identity-bar identity-bar--active\" *ngIf=\"emailSet\">\n        <span class=\"identity-name\">\uD83D\uDC64 {{ userFullName || userEmail }}</span>\n        <button class=\"btn-forget\" (click)=\"forgetMe()\">D\u00E9connecter</button>\n      </div>\n\n      <!-- \u2500\u2500 Bouton/Formulaire inscription \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n      <div class=\"join-inline\">\n        <button *ngIf=\"!isJoinOpen\" type=\"button\" class=\"btn-prayer join-btn\" (click)=\"openJoinInline()\">\n          Je participe\n        </button>\n        <p *ngIf=\"!isJoinOpen\" class=\"join-hint\">Inscription rapide &amp; gratuite</p>\n\n        <div *ngIf=\"isJoinOpen\" class=\"join-card\">\n          <div class=\"join-head\">\n            <div>\n              <h3 class=\"join-title\">{{ marathon.titre }}</h3>\n              <p class=\"join-subtitle\">Remplis ce formulaire pour confirmer ta participation.</p>\n            </div>\n            <button type=\"button\" class=\"join-close\" (click)=\"closeJoinInline()\" aria-label=\"Fermer\">\u2715</button>\n          </div>\n\n          <form (ngSubmit)=\"submitJoin()\" class=\"join-form\">\n            <div class=\"join-grid\">\n              <label class=\"field\">\n                <span class=\"field-label\">Nom complet *</span>\n                <input class=\"field-input\" name=\"fullName\" [(ngModel)]=\"joinForm.fullName\" required placeholder=\"Jean Dupont\" />\n              </label>\n              <label class=\"field\">\n                <span class=\"field-label\">Email *</span>\n                <input class=\"field-input\" name=\"email\" [(ngModel)]=\"joinForm.email\" required type=\"email\" placeholder=\"exemple@mail.com\" />\n              </label>\n              <label class=\"field\">\n                <span class=\"field-label\">T\u00E9l\u00E9phone</span>\n                <input class=\"field-input\" name=\"phone\" [(ngModel)]=\"joinForm.phone\" placeholder=\"+33...\" />\n              </label>\n              <label class=\"field\">\n                <span class=\"field-label\">Ville</span>\n                <input class=\"field-input\" name=\"city\" [(ngModel)]=\"joinForm.city\" placeholder=\"Paris\" />\n              </label>\n            </div>\n            <p class=\"form-error\"   *ngIf=\"submitError\">{{ submitError }}</p>\n            <p class=\"form-success\" *ngIf=\"submitSuccess\">\u2705 Inscription enregistr\u00E9e !</p>\n            <button class=\"btn-prayer join-submit\" type=\"submit\" [disabled]=\"isSubmitting\">\n              {{ isSubmitting ? 'Enregistrement\u2026' : 'Confirmer ma participation' }}\n            </button>\n            <p class=\"join-footnote\">Aucune donn\u00E9e n'est affich\u00E9e publiquement.</p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 Leaderboard public \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class=\"leaderboard-section\" *ngIf=\"marathon\">\n    <div class=\"leaderboard-header\" (click)=\"toggleLeaderboard()\">\n      <h2 class=\"leaderboard-title\">\uD83C\uDFC6 Classement des participants</h2>\n      <span class=\"leaderboard-toggle\">{{ showLeaderboard ? '\u25B2 Masquer' : '\u25BC Voir le classement' }}</span>\n    </div>\n\n    <div class=\"leaderboard-body\" *ngIf=\"showLeaderboard\">\n      <div *ngIf=\"loadingLeaderboard\" class=\"lb-loading\">Chargement du classement\u2026</div>\n      <div *ngIf=\"!loadingLeaderboard && leaderboard.length === 0\" class=\"lb-empty\">Aucun participant pour l'instant.</div>\n\n      <div *ngIf=\"!loadingLeaderboard && leaderboard.length > 0\" class=\"lb-table-wrap\">\n        <table class=\"lb-table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Participant</th>\n              <th>Progression</th>\n              <th>Streak</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let p of leaderboard\" [class.lb-me]=\"p.email === userEmail\">\n              <td><strong class=\"lb-rank lb-rank--{{ p.rank <= 3 ? p.rank : 'other' }}\">{{ p.rank }}</strong></td>\n              <td>{{ p.displayName }}</td>\n              <td>\n                <div class=\"lb-progress-wrap\">\n                  <div class=\"lb-progress-bar\" [style.width.%]=\"p.progressPercent\"></div>\n                </div>\n                <span class=\"lb-pct\">{{ p.progressPercent }}%</span>\n              </td>\n              <td><span class=\"lb-streak\">\uD83D\uDD25 {{ p.currentStreak ?? 0 }}j</span></td>\n            </tr>\n          </tbody>\n        </table>\n        <p class=\"lb-note\">Les noms sont affich\u00E9s sous forme abr\u00E9g\u00E9e pour la confidentialit\u00E9.</p>\n      </div>\n    </div>\n  </section>\n\n</ng-container>\n\n<!-- \u2500\u2500 Sections fixes (info + FAQ + SEO) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<section class=\"marathon-info\">\n  <div class=\"info-card\">\n    <div class=\"info-badge\">\u2728 Objectif</div>\n    <h2>Pourquoi participer au Marathon Biblique ?</h2>\n    <p>Le Marathon Biblique est une opportunit\u00E9 unique de parcourir la Bible de la Gen\u00E8se \u00E0 l'Apocalypse avec une progression claire, structur\u00E9e et communautaire.</p>\n    <ul class=\"info-list\">\n      <li><strong>Discipline</strong> : un rendez-vous quotidien qui t'aide \u00E0 rester constant.</li>\n      <li><strong>Compr\u00E9hension</strong> : une lecture continue pour mieux saisir le message biblique.</li>\n      <li><strong>Foi</strong> : une exp\u00E9rience qui fortifie ton c\u0153ur et ta relation avec Dieu.</li>\n    </ul>\n    <p class=\"info-quote\" style=\"color:white\">\"Prends ce temps comme un rendez-vous quotidien avec Dieu et laisse Sa Parole transformer ta vie.\"</p>\n  </div>\n</section>\n\n<section class=\"faq-section\">\n  <div class=\"faq-container\">\n    <span class=\"faq-badge\">\u2753 FAQ</span>\n    <h2 class=\"faq-title\">Questions fr\u00E9quentes</h2>\n    <div class=\"faq-list\">\n      <details class=\"faq-item\" open>\n        <summary>Qu'est-ce qu'un marathon biblique ?</summary>\n        <p>Un programme de lecture intensive permettant de lire la Bible (ou une partie) sur une p\u00E9riode d\u00E9finie, avec un plan quotidien clair.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>Le Marathon est-il gratuit ?</summary>\n        <p>Oui. La participation est <strong>enti\u00E8rement gratuite</strong> et ouverte \u00E0 tous.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>Quelle version de la Bible utiliser ?</summary>\n        <p>Le plan est compatible avec toutes les versions. Nous recommandons la <strong>Bible Louis Segond 1910 (LSG)</strong>.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>Que se passe-t-il si je prends du retard ?</summary>\n        <p>Aucun stress. Le Marathon est avant tout un <strong>cheminement spirituel</strong>. Reprends \u00E0 ton rythme.</p>\n      </details>\n      <details class=\"faq-item\">\n        <summary>Pourquoi cocher chaque jour lu ?</summary>\n        <p>Cocher ta progression te permet de recevoir des emails d'encouragement \u00E0 25%, 50%, 75% et une <strong>attestation personnalis\u00E9e</strong> \u00E0 100%.</p>\n      </details>\n    </div>\n  </div>\n</section>\n\n<section class=\"seo-alias container\" aria-label=\"\u00C0 propos de CMCIEA France\">\n  <h2>CMCIEA France et le Marathon Biblique</h2>\n  <p>La <strong>CMCIEA France</strong> organise des <strong>Marathons Bibliques</strong> accessibles en ligne, ouverts \u00E0 tous. Notre \u00E9glise est enracin\u00E9e dans la Parole de Dieu et engag\u00E9e \u00E0 partager l'\u00C9vangile \u00E0 travers des initiatives de lecture communautaire.</p>\n</section>\n", styles: [":host {\r\n  /* Reprend ta charte */\r\n  --brand: #1D546C;\r\n  --brand-dark: #1A3D64;\r\n  --brand-soft: #F4F4F4;\r\n\r\n  --accent: #00B7B5;\r\n  --highlight: #00B7B5;\r\n\r\n  --bg: #F4F4F4;\r\n  --surface: #FFFFFF;\r\n  --border: #005461;\r\n\r\n  --title: #1D546C;\r\n  --text: #111111;\r\n  --muted: #334155;\r\n  --support: #005461;\r\n\r\n  display: block;\r\n  width: 100%;\r\n  color: var(--text);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\r\n}\r\n\r\n/* \u2500\u2500 Chargement / vide \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.page-loading {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 80px 20px;\r\n  gap: 16px;\r\n  color: var(--muted);\r\n}\r\n\r\n.loading-spinner {\r\n  width: 40px; height: 40px;\r\n  border: 3px solid var(--bg);\r\n  border-top-color: var(--brand);\r\n  border-radius: 50%;\r\n  animation: spin 0.7s linear infinite;\r\n}\r\n\r\n@keyframes spin { to { transform: rotate(360deg); } }\r\n\r\n.marathon-empty {\r\n  max-width: 600px;\r\n  margin: 80px auto;\r\n  padding: 0 1.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.empty-card {\r\n  background: #fff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 18px;\r\n  padding: 48px 32px;\r\n}\r\n\r\n.empty-icon { font-size: 3rem; display: block; margin-bottom: 16px; }\r\n\r\n/* \u2500\u2500 Tabs (multi-marathons) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.marathon-tabs-bar {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n  padding: 1.5rem 1.5rem 0;\r\n  max-width: 1300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.tab-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  padding: 10px 20px;\r\n  border-radius: 999px;\r\n  border: 2px solid var(--border);\r\n  background: #fff;\r\n  color: var(--brand);\r\n  font-weight: 700;\r\n  font-size: 0.95rem;\r\n  cursor: pointer;\r\n  transition: all 0.15s;\r\n}\r\n\r\n.tab-btn.active {\r\n  background: var(--brand);\r\n  color: #fff;\r\n  border-color: var(--brand);\r\n}\r\n\r\n.tab-counter {\r\n  font-size: 0.8rem;\r\n  font-weight: 800;\r\n  padding: 2px 8px;\r\n  border-radius: 999px;\r\n  background: rgba(255,255,255,0.2);\r\n}\r\n\r\n.tab-btn:not(.active) .tab-counter {\r\n  background: rgba(0,84,97,0.12);\r\n  color: var(--brand);\r\n}\r\n\r\n/* \u2500\u2500 Compteur temps r\u00E9el \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.counter-live {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  line-height: 1.1;\r\n}\r\n\r\n.counter-num  { font-size: 1.4rem; font-weight: 900; color: var(--accent); }\r\n.counter-unit { font-size: 0.7rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; }\r\n\r\n/* \u2500\u2500 Rang \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.rank-banner {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n  padding: 10px 16px;\r\n  border-radius: 12px;\r\n  background: rgba(0,183,181,0.08);\r\n  border: 1px solid rgba(0,183,181,0.3);\r\n  margin-bottom: 1rem;\r\n  font-size: 0.95rem;\r\n  color: var(--muted);\r\n}\r\n\r\n.rank-icon { font-size: 1.2rem; }\r\n\r\n.rank-milestones { display: flex; gap: 6px; margin-left: auto; }\r\n\r\n.ms-badge {\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n  padding: 2px 7px;\r\n  border-radius: 999px;\r\n  background: var(--bg);\r\n  color: #aab0c4;\r\n  border: 1px solid #dde1ec;\r\n}\r\n\r\n.ms-badge.reached { background: #dcfce7; color: #16a34a; border-color: #bbf7d0; }\r\n\r\n/* \u2500\u2500 Streak banner \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.streak-banner {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  flex-wrap: wrap;\r\n  padding: 10px 16px;\r\n  border-radius: 12px;\r\n  background: rgba(255, 165, 0, 0.08);\r\n  border: 1px solid rgba(255, 165, 0, 0.3);\r\n  margin-bottom: 1rem;\r\n  font-size: 0.9rem;\r\n  color: var(--muted);\r\n}\r\n\r\n.streak-separator { color: #ccc; }\r\n.streak-max { opacity: 0.75; }\r\n\r\n/* \u2500\u2500 Leaderboard \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.leaderboard-section {\r\n  max-width: 860px;\r\n  margin: 0 auto 3rem;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.leaderboard-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 16px 20px;\r\n  background: var(--card-bg, #fff);\r\n  border-radius: 14px;\r\n  border: 1px solid var(--border, #eef0f7);\r\n  cursor: pointer;\r\n  user-select: none;\r\n  transition: background 0.15s;\r\n}\r\n\r\n.leaderboard-header:hover { background: #f8f9fc; }\r\n\r\n.leaderboard-title { font-size: 1rem; font-weight: 700; color: var(--text, #1a1f2e); margin: 0; }\r\n\r\n.leaderboard-toggle { font-size: 0.85rem; color: var(--muted, #8b93a8); }\r\n\r\n.leaderboard-body {\r\n  background: var(--card-bg, #fff);\r\n  border: 1px solid var(--border, #eef0f7);\r\n  border-top: none;\r\n  border-radius: 0 0 14px 14px;\r\n  padding: 16px 20px;\r\n}\r\n\r\n.lb-loading, .lb-empty { font-size: 0.9rem; color: var(--muted, #8b93a8); padding: 20px; text-align: center; }\r\n\r\n.lb-table-wrap { overflow-x: auto; }\r\n\r\n.lb-table { width: 100%; border-collapse: collapse; }\r\n\r\n.lb-table th {\r\n  text-align: left;\r\n  font-size: 0.7rem;\r\n  font-weight: 700;\r\n  color: #8b93a8;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n  padding: 8px 12px;\r\n  border-bottom: 2px solid #eef0f7;\r\n}\r\n\r\n.lb-table td { padding: 10px 12px; font-size: 0.88rem; color: var(--text, #3d4663); border-bottom: 1px solid #f4f6f9; }\r\n\r\n.lb-table tr:last-child td { border-bottom: none; }\r\n\r\n.lb-table tr.lb-me td { background: rgba(79,125,255,0.05); font-weight: 600; }\r\n\r\n.lb-rank { font-size: 1rem; font-weight: 800; }\r\n.lb-rank--1 { color: #f59e0b; }\r\n.lb-rank--2 { color: #94a3b8; }\r\n.lb-rank--3 { color: #b45309; }\r\n.lb-rank--other { color: #4f7dff; }\r\n\r\n.lb-progress-wrap {\r\n  display: inline-block;\r\n  width: 80px;\r\n  height: 5px;\r\n  background: #eef0f7;\r\n  border-radius: 3px;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n  margin-right: 6px;\r\n}\r\n\r\n.lb-progress-bar { height: 100%; background: #4f7dff; border-radius: 3px; }\r\n\r\n.lb-pct { font-size: 0.8rem; color: var(--muted, #8b93a8); vertical-align: middle; }\r\n\r\n.lb-streak { font-size: 0.85rem; }\r\n\r\n.lb-note { font-size: 0.75rem; color: #aab0c4; margin-top: 10px; text-align: center; }\r\n\r\n/* \u2500\u2500 Saving indicator \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.saving-dot {\r\n  width: 6px; height: 6px;\r\n  border-radius: 50%;\r\n  background: var(--accent);\r\n  position: absolute;\r\n  bottom: 6px; right: 6px;\r\n  animation: pulse-dot 0.8s ease infinite;\r\n}\r\n\r\n.calendar-cell { position: relative; }\r\n\r\n@keyframes pulse-dot {\r\n  0%, 100% { opacity: 1; transform: scale(1); }\r\n  50%       { opacity: 0.4; transform: scale(0.7); }\r\n}\r\n\r\n/* \u2500\u2500 Identification utilisateur \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.identity-bar {\r\n  margin-top: 1rem;\r\n  padding: 12px 16px;\r\n  border-radius: 14px;\r\n  background: var(--bg);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.identity-bar--active {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: rgba(0,183,181,0.07);\r\n  border-color: rgba(0,183,181,0.35);\r\n}\r\n\r\n.identity-hint { font-size: 0.88rem; color: var(--muted); margin: 0 0 8px; font-weight: 700; }\r\n.identity-name { font-weight: 800; color: var(--brand); font-size: 0.9rem; }\r\n\r\n.btn-identify {\r\n  display: inline-block;\r\n  padding: 7px 14px;\r\n  border-radius: 999px;\r\n  border: 1px solid var(--border);\r\n  background: #fff;\r\n  color: var(--brand);\r\n  font-weight: 700;\r\n  font-size: 0.85rem;\r\n  cursor: pointer;\r\n  transition: background 0.15s;\r\n}\r\n\r\n.btn-identify:hover { background: rgba(0,183,181,0.1); }\r\n\r\n.btn-forget {\r\n  font-size: 0.8rem;\r\n  color: var(--muted);\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.email-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  margin-top: 10px;\r\n}\r\n\r\n/* \u2705 Gauche plus grand, droite plus petit */\r\n.marathon-container {\r\n  display: grid;\r\n  grid-template-columns: 1.6fr 0.6fr; /* left bigger / right smaller */\r\n  gap: 2rem;\r\n  padding: 2.5rem 1.5rem;\r\n  max-width: 1300px;\r\n  margin: 0 auto;\r\n  align-items: start;\r\n  color: #111;\r\n}\r\n\r\n/* ===== Titre / sous-titre ===== */\r\n.page-title {\r\n  margin: 0 0 0.5rem 0;\r\n  font-size: 2.3rem;\r\n  font-weight: 900;\r\n  color: var(--brand);\r\n}\r\n\r\n.subtitle {\r\n  margin: 0 0 1.2rem 0;\r\n  color: var(--brand-dark);\r\n  line-height: 1.5;\r\n  white-space: pre-line; /* permet les retours \u00E0 la ligne */\r\n}\r\n\r\n/* ===== Compteur ===== */\r\n.progress-bar {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin: 0 0 1.25rem 0;\r\n  padding: 0.9rem 1rem;\r\n  border-radius: 16px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n.progress-left {\r\n  display: grid;\r\n  gap: 0.15rem;\r\n}\r\n\r\n.progress-title {\r\n  font-weight: 800;\r\n  color: var(--muted);\r\n  font-size: 0.92rem;\r\n}\r\n\r\n.progress-value {\r\n  font-weight: 900;\r\n  color: var(--brand);\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.progress-pill {\r\n  padding: 0.45rem 0.7rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  color: var(--brand);\r\n  background: var(--bg);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.today-btn {\r\n  border: 1px solid var(--border);\r\n  background: var(--bg);\r\n  color: var(--brand);\r\n  font-weight: 900;\r\n  padding: 0.55rem 0.8rem;\r\n  border-radius: 999px;\r\n  cursor: pointer;\r\n  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;\r\n  white-space: nowrap;\r\n}\r\n\r\n.today-btn:hover {\r\n  background: rgba(0, 183, 181, 0.12);\r\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.today-btn:active {\r\n  transform: translateY(0px);\r\n}\r\n\r\n/* Petit effet visuel quand on scroll vers aujourd\u2019hui */\r\n.pulse {\r\n  animation: pulseRing 0.8s ease;\r\n}\r\n\r\n@keyframes pulseRing {\r\n  0% { box-shadow: 0 0 0 0 rgba(0, 183, 181, 0.25); }\r\n  100% { box-shadow: 0 0 0 14px rgba(0, 183, 181, 0); }\r\n}\r\n\r\n/* ===== Calendrier ===== */\r\n.calendar-shell {\r\n  border-radius: 18px;\r\n  padding: 1rem;\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\r\n  max-height: 72vh;\r\n  overflow: auto;\r\n}\r\n\r\n.calendar-shell::-webkit-scrollbar { width: 10px; height: 10px; }\r\n.calendar-shell::-webkit-scrollbar-thumb {\r\n  background: rgba(0, 84, 97, 0.25);\r\n  border-radius: 10px;\r\n}\r\n.calendar-shell::-webkit-scrollbar-track { background: transparent; }\r\n.calendar-shell { scrollbar-width: thin; scrollbar-color: rgba(0, 84, 97, 0.35) transparent; }\r\n\r\n.calendar-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(7, minmax(0, 1fr));\r\n  gap: 0.75rem;\r\n}\r\n\r\n.calendar-weekday {\r\n  text-transform: capitalize;\r\n  font-weight: 900;\r\n  font-size: 0.95rem;\r\n  color: var(--brand);\r\n  padding: 0.75rem 0.9rem;\r\n  border-radius: 14px;\r\n  background: var(--bg);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.calendar-cell {\r\n  min-height: 128px;\r\n  padding: 0.85rem;\r\n  border-radius: 16px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;\r\n}\r\n\r\n.calendar-cell:hover {\r\n  transform: translateY(-2px);\r\n  border-color: var(--support);\r\n  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.calendar-cell.is-empty {\r\n  background: transparent;\r\n  border: none;\r\n  box-shadow: none;\r\n  pointer-events: none;\r\n  min-height: 0;\r\n}\r\n\r\n/* Jour actuel */\r\n.calendar-cell.is-today {\r\n  border-color: var(--accent);\r\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);\r\n}\r\n\r\n.calendar-cell.is-today .cell-date::after {\r\n  content: \" \u2022 Aujourd\u2019hui\";\r\n  font-size: 0.8rem;\r\n  font-weight: 800;\r\n  color: #475569;\r\n}\r\n\r\n/* \u2705 Par d\u00E9faut */\r\n.calendar-shell{\r\n  max-height: 72vh;\r\n}\r\n\r\n/* \u2705 Quand le formulaire est ouvert : on allonge le calendrier pour matcher la colonne droite */\r\n.marathon-container.join-open .calendar-shell{\r\n  max-height: 120vh;         /* ajuste si tu veux encore + */\r\n}\r\n\r\n/* \u2705 (optionnel) si tu veux que le calendrier prenne exactement toute la hauteur visible */\r\n.marathon-container.join-open{\r\n  align-items: stretch;\r\n}\r\n\r\n\r\n/* Jour termin\u00E9 */\r\n.calendar-cell.is-done {\r\n  background: var(--bg);\r\n}\r\n\r\n.calendar-cell.is-done .cell-reading {\r\n  color: var(--muted);\r\n  text-decoration: line-through;\r\n}\r\n\r\n.cell-top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 0.55rem;\r\n}\r\n\r\n.cell-date {\r\n  font-weight: 900;\r\n  color: var(--brand);\r\n}\r\n\r\n.cell-content {\r\n  display: grid;\r\n  gap: 0.25rem;\r\n}\r\n\r\n.cell-day {\r\n  font-size: 0.82rem;\r\n  font-weight: 900;\r\n  color: var(--brand-secondary);\r\n}\r\n\r\n/* \u2705 Texte lecture : lisible et sans superposition */\r\n.cell-reading {\r\n  font-weight: 900;\r\n  color: var(--text);\r\n  line-height: 1.25;\r\n  font-size: 0.92rem;\r\n\r\n  white-space: normal;\r\n  word-break: break-word;\r\n  overflow-wrap: anywhere;\r\n  hyphens: auto;\r\n}\r\n\r\n/* Checkbox */\r\n.cell-check {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  position: relative;\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n.cell-check input {\r\n  position: absolute;\r\n  inset: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\n\r\n.check-ui {\r\n  width: 18px;\r\n  height: 18px;\r\n  border-radius: 6px;\r\n  border: 1px solid var(--border);\r\n  background: #ffffff;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.cell-check input:checked + .check-ui {\r\n  background: var(--brand);\r\n  border-color: var(--brand);\r\n}\r\n\r\n.cell-check input:checked + .check-ui::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 5px;\r\n  top: 2px;\r\n  width: 5px;\r\n  height: 9px;\r\n  border: solid #fff;\r\n  border-width: 0 2px 2px 0;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* ===== Colonne droite ===== */\r\n.media-title {\r\n  margin: 0 0 1rem 0;\r\n  color: var(--brand);\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n}\r\n\r\n/* Aligne la section vid\u00E9o avec la barre de progression */\r\n.media-spacer {\r\n  height: 132px;\r\n}\r\n\r\n.youtube-card {\r\n  position: relative;\r\n  display: block;\r\n  height: 320px;\r\n  border-radius: 18px;\r\n  overflow: hidden;\r\n  border: 1px solid var(--border);\r\n  background: linear-gradient(135deg, var(--bg), rgba(29, 84, 108, 0.08));\r\n  text-decoration: none;\r\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);\r\n}\r\n\r\n.youtube-overlay {\r\n  position: absolute;\r\n  inset: 0;\r\n  display: flex;\r\n  gap: 0.6rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  font-size: 1.35rem;\r\n  color: var(--brand);\r\n  background: rgba(255, 255, 255, 0.35);\r\n  backdrop-filter: blur(6px);\r\n}\r\n\r\n.play-icon { font-size: 1.35rem; }\r\n\r\n/* ===== Bouton (m\u00EAme style que /actualites) ===== */\r\n.btn-prayer{\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: .5rem;\r\n  padding: 0.95rem 1.3rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 1rem;\r\n  text-decoration: none;\r\n\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n  box-shadow: 0 14px 30px rgba(17,24,39,.14);\r\n\r\n  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;\r\n}\r\n\r\n.btn-prayer:hover{\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 18px 38px rgba(17,24,39,.22);\r\n  background: var(--cta-hover);\r\n  color: #ffffff;\r\n}\r\n\r\n/* ===== Participation inline (formulaire) ===== */\r\n.join-inline { margin-top: 1rem; }\r\n.join-btn, .join-submit { width: 100%; }\r\n\r\n.join-hint{\r\n  margin: .65rem 0 0;\r\n  text-align: center;\r\n  color: var(--muted);\r\n  font-weight: 800;\r\n}\r\n\r\n.join-card{\r\n  margin-top: .9rem;\r\n  background: #fff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 18px;\r\n  padding: 1.05rem;\r\n  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.join-head{\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin-bottom: .8rem;\r\n}\r\n\r\n.join-title{\r\n  margin: 0;\r\n  font-weight: 950;\r\n  font-size: 1.12rem;\r\n  color: var(--brand);\r\n}\r\n\r\n.join-subtitle{\r\n  margin: .25rem 0 0;\r\n  color: var(--muted);\r\n  line-height: 1.55;\r\n  font-weight: 700;\r\n}\r\n\r\n.join-close{\r\n  width: 42px;\r\n  height: 42px;\r\n  border-radius: 14px;\r\n  border: 1px solid var(--border);\r\n  background: var(--bg);\r\n  color: var(--brand);\r\n  cursor: pointer;\r\n  font-weight: 950;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.join-form{ display: grid; gap: .75rem; }\r\n\r\n.join-grid{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: .85rem;\r\n}\r\n\r\n.field{ display: grid; gap: .35rem; }\r\n\r\n.field-label{\r\n  font-weight: 900;\r\n  color: var(--brand-secondary);\r\n  font-size: .95rem;\r\n}\r\n\r\n.field-input{\r\n  width: 100%;\r\n  padding: .85rem .9rem;\r\n  border-radius: 14px;\r\n  border: 1px solid var(--border);\r\n  font-weight: 800;\r\n  color: var(--text);\r\n  background: #fff;\r\n  transition: border-color .12s ease, box-shadow .12s ease;\r\n}\r\n\r\n.field-input::placeholder{\r\n  color: var(--muted);\r\n  font-weight: 700;\r\n}\r\n\r\n.field-input:focus{\r\n  outline: none;\r\n  border-color: var(--accent);\r\n  box-shadow: 0 0 0 4px rgba(0, 183, 181, 0.25);\r\n}\r\n\r\n.form-error{\r\n  margin: 0;\r\n  color: #b91c1c;\r\n  font-weight: 900;\r\n}\r\n\r\n.form-success{\r\n  margin: 0;\r\n  color: #166534;\r\n  font-weight: 900;\r\n}\r\n\r\n.join-footnote{\r\n  margin: .2rem 0 0;\r\n  color: var(--muted);\r\n  font-weight: 700;\r\n  line-height: 1.45;\r\n  font-size: .9rem;\r\n}\r\n\r\n/* ===== SECTION EN BAS (PLEINE LARGEUR) ===== */\r\n.marathon-info {\r\n  max-width: 1100px;\r\n  margin: 2.5rem auto 3.5rem auto;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.marathon-info .info-card {\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 18px;\r\n  padding: 1.6rem 1.6rem;\r\n  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.info-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding: 0.35rem 0.65rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 0.9rem;\r\n  color: var(--brand);\r\n  background: rgba(0, 183, 181, 0.12);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  margin-bottom: 0.9rem;\r\n}\r\n\r\n.marathon-info h2 {\r\n  margin: 0 0 0.75rem 0;\r\n  font-size: 2rem;\r\n  font-weight: 950;\r\n  color: var(--brand);\r\n  letter-spacing: -0.02em;\r\n}\r\n\r\n.marathon-info p {\r\n  margin: 0 0 0.85rem 0;\r\n  color: var(--muted);\r\n  line-height: 1.75;\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.info-list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 1rem 0 1.1rem 0;\r\n  display: grid;\r\n  gap: 0.6rem;\r\n}\r\n\r\n.info-list li {\r\n  padding: 0.85rem 0.95rem;\r\n  border-radius: 14px;\r\n  border: 1px solid var(--border);\r\n  background: var(--bg);\r\n  color: var(--muted);\r\n  line-height: 1.55;\r\n}\r\n\r\n.info-list strong { color: var(--brand); }\r\n\r\n.info-quote {\r\n  margin: 1.1rem 0 0 0;\r\n  padding: 0.9rem 1rem;\r\n  border-radius: 14px;\r\n  background: #0b8da1;\r\n  border: 1px solid #1D546C;\r\n  color: #ffffff;\r\n  font-weight: 800;\r\n  line-height: 1.6;\r\n}\r\n\r\n/* ===== Responsive ===== */\r\n@media (max-width: 760px) {\r\n  /* 1 colonne : calendrier puis vid\u00E9o */\r\n  .marathon-container {\r\n    grid-template-columns: 1fr;\r\n    gap: 1.25rem;\r\n  }\r\n\r\n  .marathon-calendar { order: 1; }\r\n  .marathon-media { order: 2; position: static; }\r\n  .media-spacer { display: none; }\r\n\r\n  /* Calendrier mobile : 2 colonnes + scroll vertical */\r\n  .calendar-shell {\r\n    padding: 0.75rem;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    max-height: min(72vh, 620px);\r\n  }\r\n\r\n  .calendar-weekday { display: none; }\r\n\r\n  .calendar-grid {\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n    gap: 0.6rem;\r\n  }\r\n\r\n  .calendar-cell {\r\n    min-height: 118px;\r\n    padding: 0.7rem;\r\n    border-radius: 14px;\r\n  }\r\n\r\n  .cell-date { font-size: 0.95rem; }\r\n  .cell-day { font-size: 0.78rem; }\r\n\r\n  .cell-reading {\r\n    font-size: 0.8rem;\r\n    line-height: 1.2;\r\n  }\r\n\r\n  /* vid\u00E9o pleine largeur sous le calendrier */\r\n  .youtube-card { height: 240px; }\r\n  .youtube-overlay { font-size: 1.2rem; }\r\n\r\n  /* formulaire en 1 colonne */\r\n  .join-grid { grid-template-columns: 1fr; }\r\n}\r\n\r\n/* \u2705 Anti-d\u00E9bordement global du formulaire */\r\n.join-card, .join-form, .join-grid, .field { min-width: 0; }\r\n\r\n.field-input, .join-submit {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.join-grid {\r\n  grid-template-columns: repeat(2, minmax(0, 1fr)); /* \u2705 au lieu de 1fr 1fr */\r\n  gap: .85rem;\r\n}\r\n\r\n.field-input{\r\n  min-width: 0; /* \u2705 emp\u00EAche l\u2019input de pousser la colonne */\r\n}\r\n\r\n@media (max-width: 520px){\r\n  .join-grid { grid-template-columns: 1fr; }\r\n}\r\n\r\n.field-label{\r\n  display: block;\r\n  line-height: 1.2;\r\n  word-break: break-word;\r\n}\r\n\r\n/* ===== FAQ ===== */\r\n.faq-section {\r\n  max-width: 1100px;\r\n  margin: 3rem auto 4rem auto;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.faq-container {\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n  border-radius: 22px;\r\n  padding: 2rem 2rem;\r\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.faq-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.4rem;\r\n  padding: 0.35rem 0.7rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 0.9rem;\r\n  background: rgba(0, 183, 181, 0.12);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  color: var(--brand);\r\n}\r\n\r\n.faq-title {\r\n  margin: 0.8rem 0 1.4rem 0;\r\n  font-size: 2rem;\r\n  font-weight: 950;\r\n  color: var(--brand);\r\n  letter-spacing: -0.02em;\r\n}\r\n\r\n/* Liste FAQ */\r\n.faq-list {\r\n  display: grid;\r\n  gap: 0.75rem;\r\n}\r\n\r\n/* Item */\r\n.faq-item {\r\n  border-radius: 16px;\r\n  border: 1px solid var(--border);\r\n  background: var(--bg);\r\n  padding: 0.9rem 1rem;\r\n  transition: background 0.15s ease, box-shadow 0.15s ease;\r\n}\r\n\r\n.faq-item[open] {\r\n  background: #ffffff;\r\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\r\n}\r\n\r\n.faq-item summary {\r\n  cursor: pointer;\r\n  list-style: none;\r\n  font-weight: 900;\r\n  font-size: 1.05rem;\r\n  color: var(--brand);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.faq-item summary::-webkit-details-marker {\r\n  display: none;\r\n}\r\n\r\n.faq-item summary::after {\r\n  content: \"\uFF0B\";\r\n  font-size: 1.2rem;\r\n  font-weight: 900;\r\n  color: var(--accent);\r\n}\r\n\r\n.faq-item[open] summary::after {\r\n  content: \"\u2212\";\r\n}\r\n\r\n.faq-item p {\r\n  margin: 0.6rem 0 0 0;\r\n  color: var(--muted);\r\n  line-height: 1.7;\r\n  font-size: 1rem;\r\n}\r\n\r\n/* === SECTION SEO / IDENTIT\u00C9 CMCIEA === */\r\n.seo-alias {\r\n  margin-top: 3.5rem;\r\n  padding: 2.6rem 2.4rem;\r\n  background: rgba(96, 227, 225, 0.12);\r\n  border-radius: 18px;\r\n  border: 1px solid #005461;\r\n  box-shadow: 0 14px 38px rgba(17, 24, 39, 0.08);\r\n\r\n  max-width: 1100px;\r\n  margin: 3rem auto 4rem auto;\r\n  text-align: center;\r\n}\r\n\r\n/* Titre */\r\n.seo-alias h2 {\r\n  margin: 0 0 1.1rem 0;\r\n  font-size: 1.7rem;\r\n  line-height: 1.25;\r\n  font-weight: 800;\r\n  color: var(--brand);\r\n  letter-spacing: -0.02em;\r\n}\r\n\r\n/* Texte */\r\n.seo-alias p {\r\n  margin: 0;\r\n  max-width: none;\r\n  font-size: 1.06rem;\r\n  line-height: 1.85;\r\n  color: var(--muted);\r\n}\r\n\r\n/* Mots-cl\u00E9s mis en valeur */\r\n.seo-alias strong {\r\n  color: var(--brand);\r\n  font-weight: 700;\r\n}\r\n\r\n/* Mobile */\r\n@media (max-width: 760px) {\r\n  .faq-container {\r\n    padding: 1.5rem 1.2rem;\r\n  }\r\n\r\n  .faq-title {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .faq-item summary {\r\n    font-size: 1rem;\r\n  }\r\n\r\n    .seo-alias {\r\n    padding: 2rem 1.4rem;\r\n    margin-top: 3rem;\r\n  }\r\n\r\n  .seo-alias h2 {\r\n    font-size: 1.35rem;\r\n  }\r\n\r\n  .seo-alias p {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n"] }]
    }], () => [{ type: i1.HttpClient }, { type: i2.PageContentService }], { calendarShell: [{
            type: ViewChild,
            args: ['calendarShell']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MarathonBibliqueComponent, { className: "MarathonBibliqueComponent", filePath: "app\\pages\\marathon-biblique\\marathon-biblique.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=marathon-biblique.component.js.map