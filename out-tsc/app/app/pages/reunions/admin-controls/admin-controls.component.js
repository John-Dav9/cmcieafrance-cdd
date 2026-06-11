import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SPIRITUAL_BACKGROUNDS, } from '../spiritual-backgrounds';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/reunions.service";
import * as i2 from "../../../core/services/meeting-socket.service";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function AdminControlsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("admin-toast--error", ctx_r0.toast.type === "error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.toast.msg, " ");
} }
function AdminControlsComponent_ng_container_32_section_15_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23)(4, "span", 24);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 25);
    i0.ɵɵtext(7, "Demande d\u2019acc\u00E8s");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 26);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_32_section_15_div_6_Template_button_click_8_listener() { const p_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.admitParticipant(p_r4)); });
    i0.ɵɵtext(9, "Admettre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 27);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_32_section_15_div_6_Template_button_click_10_listener() { const p_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.rejectParticipant(p_r4)); });
    i0.ɵɵtext(11, "Refuser");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((p_r4.displayName == null ? null : p_r4.displayName.charAt(0)) || "?");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r4.displayName);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.isLoading("admit-" + p_r4.id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.isLoading("reject-" + p_r4.id));
} }
function AdminControlsComponent_ng_container_32_section_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19)(2, "span");
    i0.ɵɵtext(3, "En attente");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, AdminControlsComponent_ng_container_32_section_15_div_6_Template, 12, 4, "div", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.waitingParticipants.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.waitingParticipants);
} }
function AdminControlsComponent_ng_container_32_div_16_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1, "Mod\u00E9rateur");
    i0.ɵɵelementEnd();
} }
function AdminControlsComponent_ng_container_32_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23)(4, "span", 24);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, AdminControlsComponent_ng_container_32_div_16_span_6_Template, 2, 0, "span", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 30)(8, "button", 31);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_32_div_16_Template_button_click_8_listener() { const p_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.muteParticipant(p_r6)); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 32);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_32_div_16_Template_button_click_10_listener() { const p_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.grantModerator(p_r6)); });
    i0.ɵɵtext(11, "\u25C7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 33);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_32_div_16_Template_button_click_12_listener() { const p_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.kickParticipant(p_r6)); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("participant-avatar--admin", p_r6.wasAdmin);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", (p_r6.displayName == null ? null : p_r6.displayName.charAt(0)) || "?", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(p_r6.displayName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", p_r6.wasAdmin);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !p_r6.jitsiParticipantId || ctx_r0.isLoading("mute-" + p_r6.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isLoading("mute-" + p_r6.id) ? "\u2026" : "\u2301", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", p_r6.wasAdmin || !(p_r6.member == null ? null : p_r6.member.id) || !p_r6.jitsiParticipantId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !p_r6.jitsiParticipantId || ctx_r0.isLoading("kick-" + p_r6.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isLoading("kick-" + p_r6.id) ? "\u2026" : "\u2715", " ");
} }
function AdminControlsComponent_ng_container_32_p_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 35);
    i0.ɵɵtext(1, "Aucun participant");
    i0.ɵɵelementEnd();
} }
function AdminControlsComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10)(2, "button", 11);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_32_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleRecording()); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 12);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_32_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.endMeeting()); });
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "\u2301");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "Terminer pour tous");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 13)(11, "h4");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 14);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_32_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadParticipants()); });
    i0.ɵɵtext(14, "\u21BB");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, AdminControlsComponent_ng_container_32_section_15_Template, 7, 2, "section", 15)(16, AdminControlsComponent_ng_container_32_div_16_Template, 14, 10, "div", 16)(17, AdminControlsComponent_ng_container_32_p_17_Template, 2, 0, "p", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("admin-btn--active", ctx_r0.recording);
    i0.ɵɵproperty("disabled", ctx_r0.recordingPending);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.recording ? "\u25A0" : "\u25CF");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.recordingPending ? "Commande en cours\u2026" : ctx_r0.recording ? "Arr\u00EAter l'enregistrement" : "D\u00E9marrer l'enregistrement", " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Participants (", ctx_r0.participants.length, ")");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.waitingParticipants.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.participants);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.participants.length === 0);
} }
function AdminControlsComponent_ng_container_33_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_33_button_7_Template_button_click_0_listener() { const background_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectedBackground = background_r9.id); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const background_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-selected", ctx_r0.selectedBackground === background_r9.id);
    i0.ɵɵproperty("ngClass", background_r9.className);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(background_r9.label);
} }
function AdminControlsComponent_ng_container_33_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54)(1, "div", 55);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 56);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 57);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_33_div_17_div_1_Template_button_click_5_listener() { const v_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.sendVerse(v_r11)); });
    i0.ɵɵtext(6, "Diffuser \u25B6");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r11 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r11.reference);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r11.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.spiritualSending);
} }
function AdminControlsComponent_ng_container_33_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵtemplate(1, AdminControlsComponent_ng_container_33_div_17_div_1_Template, 7, 3, "div", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.bibleResults);
} }
function AdminControlsComponent_ng_container_33_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54)(1, "div", 55);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 56);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 58);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_33_div_27_div_1_Template_button_click_5_listener() { const cantique_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectCantique(cantique_r13)); });
    i0.ɵɵtext(6, "Charger");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const cantique_r13 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", cantique_r13.number ? cantique_r13.number + " \u00B7 " : "", "", cantique_r13.title, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", cantique_r13.author || "Auteur non renseign\u00E9", " ");
} }
function AdminControlsComponent_ng_container_33_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵtemplate(1, AdminControlsComponent_ng_container_33_div_27_div_1_Template, 7, 3, "div", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.cantiqueResults);
} }
function AdminControlsComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 36)(2, "h4")(3, "span");
    i0.ɵɵtext(4, "00");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Fond de diffusion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 37);
    i0.ɵɵtemplate(7, AdminControlsComponent_ng_container_33_button_7_Template, 3, 4, "button", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 39)(9, "h4")(10, "span");
    i0.ɵɵtext(11, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " Verset biblique");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 40)(14, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_33_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bibleQuery, $event) || (ctx_r0.bibleQuery = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function AdminControlsComponent_ng_container_33_Template_input_keyup_enter_14_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.searchBible()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 42);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_33_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.searchBible()); });
    i0.ɵɵtext(16, "Chercher");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, AdminControlsComponent_ng_container_33_div_17_Template, 2, 1, "div", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 39)(19, "h4")(20, "span");
    i0.ɵɵtext(21, "02");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22, " Paroles de cantique");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 40)(24, "input", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_33_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.cantiqueQuery, $event) || (ctx_r0.cantiqueQuery = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function AdminControlsComponent_ng_container_33_Template_input_keyup_enter_24_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.searchCantiques()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 42);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_33_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.searchCantiques()); });
    i0.ɵɵtext(26, "Chercher");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(27, AdminControlsComponent_ng_container_33_div_27_Template, 2, 1, "div", 43);
    i0.ɵɵelementStart(28, "input", 45);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_33_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.lyricsTitle, $event) || (ctx_r0.lyricsTitle = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "textarea", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_33_Template_textarea_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.lyricsText, $event) || (ctx_r0.lyricsText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 47);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_33_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.sendLyrics()); });
    i0.ɵɵtext(31, "Diffuser les paroles \u25B6");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 39)(33, "h4")(34, "span");
    i0.ɵɵtext(35, "03");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(36, " Annonce \u00E0 l'\u00E9cran");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "textarea", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_33_Template_textarea_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.announcementText, $event) || (ctx_r0.announcementText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 49)(39, "button", 47);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_33_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.sendAnnouncement()); });
    i0.ɵɵtext(40, "Afficher \u25B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "button", 50);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_33_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.dismissSpiritualEvent()); });
    i0.ɵɵtext(42, "Masquer");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r0.spiritualBackgrounds);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bibleQuery);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.bibleResults.length);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.cantiqueQuery);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.cantiqueResults.length);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.lyricsTitle);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.lyricsText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.spiritualSending);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.announcementText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.spiritualSending);
} }
function AdminControlsComponent_ng_container_34_div_1_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_34_div_1_div_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const i_r16 = i0.ɵɵnextContext().index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.removePollOption(i_r16)); });
    i0.ɵɵtext(1, "\u2715");
    i0.ɵɵelementEnd();
} }
function AdminControlsComponent_ng_container_34_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "input", 67);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_34_div_1_div_5_Template_input_ngModelChange_1_listener($event) { const i_r16 = i0.ɵɵrestoreView(_r15).index; const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.pollOptions[i_r16], $event) || (ctx_r0.pollOptions[i_r16] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, AdminControlsComponent_ng_container_34_div_1_div_5_button_2_Template, 2, 0, "button", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.pollOptions[i_r16]);
    i0.ɵɵproperty("placeholder", "Option " + (i_r16 + 1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.pollOptions.length > 2);
} }
function AdminControlsComponent_ng_container_34_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_34_div_1_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.addPollOption()); });
    i0.ɵɵtext(1, "+ Option");
    i0.ɵɵelementEnd();
} }
function AdminControlsComponent_ng_container_34_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "h4");
    i0.ɵɵtext(2, "Nouveau sondage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_34_div_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.pollQuestion, $event) || (ctx_r0.pollQuestion = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 60);
    i0.ɵɵtemplate(5, AdminControlsComponent_ng_container_34_div_1_div_5_Template, 3, 3, "div", 61)(6, AdminControlsComponent_ng_container_34_div_1_button_6_Template, 2, 0, "button", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 63)(8, "label");
    i0.ɵɵtext(9, "Dur\u00E9e (sec)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_34_div_1_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.pollDuration, $event) || (ctx_r0.pollDuration = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 65);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_34_div_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.launchPoll()); });
    i0.ɵɵtext(12, "Lancer le sondage \u25B6");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.pollQuestion);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.pollOptions);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.pollOptions.length < 6);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.pollDuration);
} }
function AdminControlsComponent_ng_container_34_div_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73)(1, "span", 74);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 75);
    i0.ɵɵelement(4, "div", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 77);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r20 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r20.option);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", r_r20.percent, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", r_r20.percent, "%");
} }
function AdminControlsComponent_ng_container_34_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, AdminControlsComponent_ng_container_34_div_2_div_5_div_1_Template, 7, 4, "div", 71);
    i0.ɵɵelementStart(2, "p", 72);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.pollResults.results);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.pollResults.totalVotes, " vote(s)");
} }
function AdminControlsComponent_ng_container_34_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "h4");
    i0.ɵɵtext(2, "Sondage en cours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 70);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, AdminControlsComponent_ng_container_34_div_2_div_5_Template, 4, 2, "div", 8);
    i0.ɵɵelementStart(6, "button", 50);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_34_div_2_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closePoll()); });
    i0.ɵɵtext(7, "Terminer le sondage");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.activePoll.question);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.pollResults);
} }
function AdminControlsComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AdminControlsComponent_ng_container_34_div_1_Template, 13, 4, "div", 8)(2, AdminControlsComponent_ng_container_34_div_2_Template, 8, 2, "div", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.activePoll);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.activePoll);
} }
function AdminControlsComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 78)(2, "span", 79);
    i0.ɵɵtext(3, "\uD83D\uDE4F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h4");
    i0.ɵɵtext(5, "Fil de pri\u00E8re en direct");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Les sujets soumis par les participants apparaissent instantan\u00E9ment dans la salle. La r\u00E9gie peut les suivre depuis le panneau visible dans la r\u00E9union.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function AdminControlsComponent_ng_container_36_div_4_input_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 86);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_36_div_4_input_8_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.streamYoutubeKey, $event) || (ctx_r0.streamYoutubeKey = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.streamYoutubeKey);
} }
function AdminControlsComponent_ng_container_36_div_4_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 87);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminControlsComponent_ng_container_36_div_4_input_14_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.streamFacebookKey, $event) || (ctx_r0.streamFacebookKey = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.streamFacebookKey);
} }
function AdminControlsComponent_ng_container_36_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "h4");
    i0.ɵɵtext(2, "Destinations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 81);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_36_div_4_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.togglePlatform("youtube")); });
    i0.ɵɵelementStart(4, "span", 82);
    i0.ɵɵtext(5, "YT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "YouTube Live");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, AdminControlsComponent_ng_container_36_div_4_input_8_Template, 1, 1, "input", 83);
    i0.ɵɵelementStart(9, "div", 81);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_36_div_4_Template_div_click_9_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.togglePlatform("facebook")); });
    i0.ɵɵelementStart(10, "span", 84);
    i0.ɵɵtext(11, "f");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13, "Facebook Live");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, AdminControlsComponent_ng_container_36_div_4_input_14_Template, 1, 1, "input", 85);
    i0.ɵɵelementStart(15, "p", 35);
    i0.ɵɵtext(16, "Plusieurs destinations utilisent automatiquement le relais RTMP configur\u00E9.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 65);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_36_div_4_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.startStreaming()); });
    i0.ɵɵtext(18, "\u25B6 D\u00E9marrer le streaming");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("selected", ctx_r0.hasPlatform("youtube"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.hasPlatform("youtube"));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("selected", ctx_r0.hasPlatform("facebook"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.hasPlatform("facebook"));
} }
function AdminControlsComponent_ng_container_36_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "button", 12);
    i0.ɵɵlistener("click", function AdminControlsComponent_ng_container_36_div_5_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r24); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.stopStreaming()); });
    i0.ɵɵtext(2, "\u23F9 Arr\u00EAter le streaming");
    i0.ɵɵelementEnd()();
} }
function AdminControlsComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 80);
    i0.ɵɵelement(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AdminControlsComponent_ng_container_36_div_4_Template, 19, 6, "div", 8)(5, AdminControlsComponent_ng_container_36_div_5_Template, 3, 0, "div", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r0.isStreaming);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.isStreaming ? "Diffusion en cours" : "Aucune diffusion active", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isStreaming);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isStreaming);
} }
export class AdminControlsComponent {
    constructor(reunionsService, socket, http) {
        this.reunionsService = reunionsService;
        this.socket = socket;
        this.http = http;
        this.meetingId = '';
        this.jitsiRoomId = '';
        this.jitsiApi = null;
        this.close = new EventEmitter();
        this.activeTab = 'participants';
        this.participants = [];
        this.waitingParticipants = [];
        this.recording = false;
        this.recordingPending = false;
        this.toast = null;
        this.loadingActions = {};
        // Spirituel
        this.bibleResults = [];
        this.bibleQuery = '';
        this.cantiqueQuery = '';
        this.cantiqueResults = [];
        this.lyricsTitle = '';
        this.lyricsText = '';
        this.announcementText = '';
        this.spiritualBackgrounds = SPIRITUAL_BACKGROUNDS;
        this.selectedBackground = 'ocean';
        this.spiritualSending = false;
        // Sondage
        this.pollQuestion = '';
        this.pollOptions = ['', ''];
        this.pollDuration = 60;
        this.activePoll = null;
        this.pollResults = null;
        // Streaming
        this.streamYoutubeKey = '';
        this.streamFacebookKey = '';
        this.streamPlatforms = [];
        this.isStreaming = false;
        this.refresh$ = null;
        this.socketSubscriptions = new Subscription();
        this.toastTimer = null;
        this.recordingStatusHandler = (event) => {
            const mode = event === null || event === void 0 ? void 0 : event.mode;
            if (mode !== 'file' && mode !== 'stream')
                return;
            const status = (event === null || event === void 0 ? void 0 : event.error) ? 'failed' : (event === null || event === void 0 ? void 0 : event.on) ? 'active' : 'idle';
            this.socket.reportMediaStatus(this.meetingId, mode, status, event === null || event === void 0 ? void 0 : event.error);
        };
    }
    ngOnInit() {
        var _a, _b;
        this.loadParticipants();
        this.refresh$ = interval(10000).subscribe(() => this.loadParticipants());
        this.socketSubscriptions.add(this.socket.pollStarted$.subscribe(p => {
            this.activePoll = p;
            this.pollResults = null;
        }));
        this.socketSubscriptions.add(this.socket.pollResults$.subscribe(r => this.pollResults = r));
        this.socketSubscriptions.add(this.socket.pollClosed$.subscribe(r => {
            this.pollResults = r;
            this.activePoll = null;
        }));
        this.socketSubscriptions.add(this.socket.recordingStatus$.subscribe(s => {
            this.recordingPending = s.status === 'starting' || s.status === 'stopping';
            this.recording = s.status === 'active' || s.status === 'starting';
            if (s.status === 'active')
                this.showToast('Enregistrement confirmé par Jitsi', 'success');
            if (s.status === 'failed')
                this.showToast(s.error || 'Échec de l’enregistrement', 'error');
        }));
        this.socketSubscriptions.add(this.socket.streamingStatus$.subscribe(s => {
            this.isStreaming = s.status === 'active' || s.status === 'starting';
            if (s.status === 'active')
                this.showToast('Diffusion confirmée par Jitsi', 'success');
            if (s.status === 'failed')
                this.showToast(s.error || 'Échec de la diffusion', 'error');
        }));
        this.socketSubscriptions.add(this.socket.mediaCommand$.subscribe(command => {
            if (command.meetingId === this.meetingId)
                this.executeMediaCommand(command);
        }));
        (_b = (_a = this.jitsiApi) === null || _a === void 0 ? void 0 : _a.addListener) === null || _b === void 0 ? void 0 : _b.call(_a, 'recordingStatusChanged', this.recordingStatusHandler);
        this.reunionsService.getRecordingStatus(this.meetingId).subscribe({
            next: state => {
                this.recording = state.status === 'active' || state.status === 'starting';
                this.recordingPending = state.status === 'starting' || state.status === 'stopping';
            },
        });
        this.http.get(`${environment.apiBase}/streaming/${this.meetingId}/status`).subscribe({
            next: state => this.isStreaming = state.status === 'active' || state.status === 'starting',
        });
    }
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.refresh$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.socketSubscriptions.unsubscribe();
        (_c = (_b = this.jitsiApi) === null || _b === void 0 ? void 0 : _b.removeListener) === null || _c === void 0 ? void 0 : _c.call(_b, 'recordingStatusChanged', this.recordingStatusHandler);
        clearTimeout(this.toastTimer);
    }
    setTab(tab) { this.activeTab = tab; }
    // ── Participants ───────────────────────────────────────────────────────────
    loadParticipants() {
        this.reunionsService.getParticipants(this.meetingId).subscribe({ next: p => this.participants = p });
        this.reunionsService.getWaitingParticipants(this.meetingId).subscribe({
            next: p => this.waitingParticipants = p,
        });
    }
    admitParticipant(p) {
        const key = `admit-${p.id}`;
        this.loadingActions[key] = true;
        this.reunionsService.admitParticipant(this.meetingId, p.id).subscribe({
            next: () => {
                this.waitingParticipants = this.waitingParticipants.filter(item => item.id !== p.id);
                this.showToast(`${p.displayName} peut rejoindre la réunion`, 'success');
                delete this.loadingActions[key];
            },
            error: () => {
                this.showToast('Admission impossible', 'error');
                delete this.loadingActions[key];
            },
        });
    }
    rejectParticipant(p) {
        const key = `reject-${p.id}`;
        this.loadingActions[key] = true;
        this.reunionsService.rejectParticipant(this.meetingId, p.id).subscribe({
            next: () => {
                this.waitingParticipants = this.waitingParticipants.filter(item => item.id !== p.id);
                delete this.loadingActions[key];
            },
            error: () => {
                this.showToast('Refus impossible', 'error');
                delete this.loadingActions[key];
            },
        });
    }
    muteParticipant(p) {
        var _a;
        if (!p.jitsiParticipantId) {
            this.showToast('Identifiant Jitsi du participant indisponible', 'error');
            return;
        }
        const key = `mute-${p.id}`;
        this.loadingActions[key] = true;
        (_a = this.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('muteParticipant', p.jitsiParticipantId);
        this.reunionsService.muteParticipant(this.meetingId, p.jitsiParticipantId).subscribe({
            next: () => { this.showToast(`${p.displayName} coupé`, 'success'); delete this.loadingActions[key]; },
            error: () => { this.showToast(`${p.displayName} coupé (local)`, 'success'); delete this.loadingActions[key]; },
        });
    }
    kickParticipant(p) {
        var _a;
        if (!confirm(`Exclure ${p.displayName} ?`))
            return;
        if (!p.jitsiParticipantId) {
            this.showToast('Identifiant Jitsi du participant indisponible', 'error');
            return;
        }
        const key = `kick-${p.id}`;
        this.loadingActions[key] = true;
        (_a = this.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('kickParticipant', p.jitsiParticipantId);
        this.reunionsService.kickParticipant(this.meetingId, p.jitsiParticipantId).subscribe({
            next: () => { this.participants = this.participants.filter(x => x.id !== p.id); this.showToast(`${p.displayName} exclu`, 'success'); delete this.loadingActions[key]; },
            error: () => { this.participants = this.participants.filter(x => x.id !== p.id); delete this.loadingActions[key]; },
        });
    }
    grantModerator(p) {
        var _a;
        if (!confirm(`Promouvoir ${p.displayName} modérateur ?`))
            return;
        const memberId = (_a = p.member) === null || _a === void 0 ? void 0 : _a.id;
        if (!memberId) {
            this.showToast('Ce participant doit être lié à un compte membre', 'error');
            return;
        }
        this.reunionsService.grantModerator(this.meetingId, memberId).subscribe({
            next: () => { p.wasAdmin = true; this.showToast(`${p.displayName} est modérateur`, 'success'); },
            error: () => this.showToast('Impossible de promouvoir', 'error'),
        });
    }
    toggleRecording() {
        if (this.recordingPending)
            return;
        this.recordingPending = true;
        const request = this.recording
            ? this.reunionsService.stopRecording(this.meetingId)
            : this.reunionsService.startRecording(this.meetingId);
        request.subscribe({
            next: res => this.showToast(res.message, 'success'),
            error: err => {
                var _a, _b;
                this.recordingPending = false;
                this.showToast((_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Commande d’enregistrement impossible', 'error');
            },
        });
    }
    endMeeting() {
        if (!confirm('Terminer la réunion pour tous ?'))
            return;
        this.reunionsService.end(this.meetingId).subscribe({ next: () => { var _a; return (_a = this.jitsiApi) === null || _a === void 0 ? void 0 : _a.executeCommand('hangup'); } });
    }
    // ── Outils spirituels ──────────────────────────────────────────────────────
    searchBible() {
        if (this.bibleQuery.trim().length < 2)
            return;
        this.http.get(`${environment.apiBase}/bible/search?q=${encodeURIComponent(this.bibleQuery)}`).subscribe({
            next: r => this.bibleResults = r,
        });
    }
    async sendVerse(v) {
        await this.sendSpiritual(() => this.socket.showVerse(this.meetingId, v.reference, v.text, this.selectedBackground), `Verset "${v.reference}" diffusé`);
    }
    searchCantiques() {
        const query = this.cantiqueQuery.trim();
        this.http.get(`${environment.apiBase}/cantiques/meeting/${this.meetingId}?q=${encodeURIComponent(query)}`).subscribe({
            next: results => this.cantiqueResults = results,
            error: () => this.showToast('Catalogue de cantiques indisponible', 'error'),
        });
    }
    selectCantique(cantique) {
        this.lyricsTitle = cantique.number
            ? `${cantique.number} - ${cantique.title}`
            : cantique.title;
        this.lyricsText = cantique.lyrics;
        this.showToast('Cantique chargé, prêt à être diffusé', 'success');
    }
    async sendLyrics() {
        if (!this.lyricsTitle.trim() || !this.lyricsText.trim())
            return;
        const lines = this.lyricsText.split('\n').filter(l => l.trim());
        const sent = await this.sendSpiritual(() => this.socket.showLyrics(this.meetingId, this.lyricsTitle, lines, this.selectedBackground), 'Paroles diffusées');
        if (sent) {
            this.lyricsTitle = '';
            this.lyricsText = '';
        }
    }
    async sendAnnouncement() {
        if (!this.announcementText.trim())
            return;
        const sent = await this.sendSpiritual(() => this.socket.showAnnouncement(this.meetingId, this.announcementText, this.selectedBackground), 'Annonce envoyée');
        if (sent)
            this.announcementText = '';
    }
    dismissSpiritualEvent() {
        this.socket.dismissSpiritualEvent(this.meetingId).catch(() => {
            this.showToast('Impossible de masquer le contenu', 'error');
        });
    }
    // ── Sondages ───────────────────────────────────────────────────────────────
    addPollOption() { if (this.pollOptions.length < 6)
        this.pollOptions.push(''); }
    removePollOption(i) { if (this.pollOptions.length > 2)
        this.pollOptions.splice(i, 1); }
    launchPoll() {
        const options = this.pollOptions.filter(o => o.trim());
        if (!this.pollQuestion.trim() || options.length < 2)
            return;
        this.socket.startPoll(this.meetingId, this.pollQuestion, options, this.pollDuration || undefined);
        this.showToast('Sondage lancé !', 'success');
        this.pollQuestion = '';
        this.pollOptions = ['', ''];
    }
    closePoll() {
        this.socket.closePoll(this.meetingId);
        this.showToast('Sondage terminé', 'success');
    }
    // ── Streaming ─────────────────────────────────────────────────────────────
    togglePlatform(p) {
        const i = this.streamPlatforms.indexOf(p);
        if (i >= 0)
            this.streamPlatforms.splice(i, 1);
        else
            this.streamPlatforms.push(p);
    }
    hasPlatform(p) { return this.streamPlatforms.includes(p); }
    startStreaming() {
        const targets = [];
        if (this.hasPlatform('youtube') && this.streamYoutubeKey) {
            targets.push({ platform: 'youtube', streamKey: this.streamYoutubeKey });
        }
        if (this.hasPlatform('facebook') && this.streamFacebookKey) {
            targets.push({ platform: 'facebook', streamKey: this.streamFacebookKey });
        }
        if (!targets.length) {
            this.showToast('Configurez au moins une destination', 'error');
            return;
        }
        this.http.post(`${environment.apiBase}/streaming/start`, {
            meetingId: this.meetingId, jitsiRoomId: this.jitsiRoomId, targets,
        }).subscribe({
            next: () => this.showToast('Démarrage de la diffusion demandé', 'success'),
            error: err => { var _a, _b; return this.showToast((_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur de diffusion', 'error'); },
        });
    }
    stopStreaming() {
        this.http.post(`${environment.apiBase}/streaming/stop`, { meetingId: this.meetingId }).subscribe({
            next: () => this.showToast('Arrêt de la diffusion demandé', 'success'),
            error: err => { var _a, _b; return this.showToast((_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur de diffusion', 'error'); },
        });
    }
    executeMediaCommand(command) {
        var _a;
        try {
            if (!this.jitsiApi)
                throw new Error('Interface Jitsi indisponible');
            if (command.action === 'start') {
                const options = command.mode === 'stream'
                    ? { mode: 'stream', rtmpStreamKey: command.streamKey }
                    : { mode: 'file' };
                this.jitsiApi.executeCommand('startRecording', options);
                this.socket.reportMediaStatus(this.meetingId, command.mode, 'starting');
            }
            else {
                this.jitsiApi.executeCommand('stopRecording', command.mode);
                this.socket.reportMediaStatus(this.meetingId, command.mode, 'stopping');
            }
        }
        catch (error) {
            this.socket.reportMediaStatus(this.meetingId, command.mode, 'failed', (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Commande Jitsi impossible');
        }
    }
    // ── Toast ──────────────────────────────────────────────────────────────────
    showToast(msg, type) {
        clearTimeout(this.toastTimer);
        this.toast = { msg, type };
        this.toastTimer = setTimeout(() => this.toast = null, 3000);
    }
    async sendSpiritual(action, successMessage) {
        var _a;
        if (this.spiritualSending)
            return false;
        this.spiritualSending = true;
        try {
            const response = await action();
            if (!(response === null || response === void 0 ? void 0 : response.sent))
                throw new Error('Diffusion non confirmée');
            this.showToast(successMessage, 'success');
            return true;
        }
        catch (error) {
            this.showToast((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Diffusion impossible', 'error');
            return false;
        }
        finally {
            this.spiritualSending = false;
        }
    }
    isLoading(key) { return !!this.loadingActions[key]; }
}
AdminControlsComponent.ɵfac = function AdminControlsComponent_Factory(t) { return new (t || AdminControlsComponent)(i0.ɵɵdirectiveInject(i1.ReunionsService), i0.ɵɵdirectiveInject(i2.MeetingSocketService), i0.ɵɵdirectiveInject(i3.HttpClient)); };
AdminControlsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminControlsComponent, selectors: [["app-admin-controls"]], inputs: { meetingId: "meetingId", jitsiRoomId: "jitsiRoomId", jitsiApi: "jitsiApi" }, outputs: { close: "close" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 37, vars: 18, consts: [[1, "admin-panel"], [1, "admin-header"], [1, "admin-kicker"], ["aria-label", "Fermer la r\u00E9gie", 1, "admin-close", 3, "click"], ["class", "admin-toast", 3, "admin-toast--error", 4, "ngIf"], [1, "admin-tabs"], [3, "click"], [1, "admin-body"], [4, "ngIf"], [1, "admin-toast"], [1, "admin-actions"], [1, "admin-btn", 3, "click", "disabled"], [1, "admin-btn", "admin-btn--danger", 3, "click"], [1, "participants-header"], ["title", "Actualiser", 1, "refresh-btn", 3, "click"], ["class", "waiting-list", 4, "ngIf"], ["class", "participant-item", 4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [1, "waiting-list"], [1, "waiting-list__head"], ["class", "waiting-item", 4, "ngFor", "ngForOf"], [1, "waiting-item"], [1, "participant-avatar"], [1, "participant-info"], [1, "participant-name"], [1, "waiting-copy"], [1, "waiting-action", "waiting-action--accept", 3, "click", "disabled"], [1, "waiting-action", "waiting-action--reject", 3, "click", "disabled"], [1, "participant-item"], ["class", "participant-badge", 4, "ngIf"], [1, "participant-actions"], ["title", "Couper le micro", 1, "btn-sm", 3, "click", "disabled"], ["title", "Nommer mod\u00E9rateur", 1, "btn-sm", 3, "click", "disabled"], ["title", "Exclure", 1, "btn-sm", "btn-sm--danger", 3, "click", "disabled"], [1, "participant-badge"], [1, "empty"], [1, "spiritual-section", "background-library"], [1, "background-grid"], ["type", "button", "class", "background-choice", 3, "is-selected", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "spiritual-section"], [1, "search-row"], ["placeholder", "Jean 3:16 / amour...", 1, "admin-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-primary", "btn-primary--compact", 3, "click"], ["class", "bible-results", 4, "ngIf"], ["placeholder", "Num\u00E9ro, titre ou paroles...", 1, "admin-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["placeholder", "Titre du cantique", 1, "admin-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Paroles (une ligne par ligne)...", "rows", "5", 1, "admin-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], ["placeholder", "Message \u00E0 afficher \u00E0 tous...", "rows", "3", 1, "admin-textarea", 3, "ngModelChange", "ngModel"], [1, "btn-row"], [1, "btn-secondary", 3, "click"], ["type", "button", 1, "background-choice", 3, "click", "ngClass"], [1, "bible-results"], ["class", "bible-result", 4, "ngFor", "ngForOf"], [1, "bible-result"], [1, "bible-ref"], [1, "bible-text"], [1, "btn-send", 3, "click", "disabled"], [1, "btn-send", 3, "click"], ["placeholder", "Question du sondage...", 1, "admin-input", 3, "ngModelChange", "ngModel"], [1, "poll-options"], ["class", "poll-option-row", 4, "ngFor", "ngForOf"], ["class", "btn-secondary", 3, "click", 4, "ngIf"], [1, "duration-row"], ["type", "number", "min", "10", "max", "300", 1, "admin-input", "admin-input--sm", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click"], [1, "poll-option-row"], [1, "admin-input", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "btn-sm btn-sm--danger", 3, "click", 4, "ngIf"], [1, "btn-sm", "btn-sm--danger", 3, "click"], [1, "poll-question"], ["class", "poll-bar", 4, "ngFor", "ngForOf"], [1, "poll-total"], [1, "poll-bar"], [1, "poll-label"], [1, "poll-track"], [1, "poll-fill"], [1, "poll-percent"], [1, "empty-state"], [1, "empty-state__icon"], [1, "streaming-status"], [1, "platform-toggle", 3, "click"], [1, "platform-logo", "platform-logo--youtube"], ["class", "admin-input", "placeholder", "Cl\u00E9 de streaming YouTube", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "platform-logo", "platform-logo--facebook"], ["class", "admin-input", "placeholder", "Cl\u00E9 de streaming Facebook", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["placeholder", "Cl\u00E9 de streaming YouTube", 1, "admin-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Cl\u00E9 de streaming Facebook", 1, "admin-input", 3, "ngModelChange", "ngModel"]], template: function AdminControlsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
        i0.ɵɵtext(4, "Espace de contr\u00F4le");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "h3");
        i0.ɵɵtext(6, "R\u00E9gie de la r\u00E9union");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "button", 3);
        i0.ɵɵlistener("click", function AdminControlsComponent_Template_button_click_7_listener() { return ctx.close.emit(); });
        i0.ɵɵtext(8, "\u2715");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(9, AdminControlsComponent_div_9_Template, 2, 3, "div", 4);
        i0.ɵɵelementStart(10, "div", 5)(11, "button", 6);
        i0.ɵɵlistener("click", function AdminControlsComponent_Template_button_click_11_listener() { return ctx.setTab("participants"); });
        i0.ɵɵelementStart(12, "span");
        i0.ɵɵtext(13, "\uD83D\uDC65");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(14, "Participants");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 6);
        i0.ɵɵlistener("click", function AdminControlsComponent_Template_button_click_15_listener() { return ctx.setTab("spiritual"); });
        i0.ɵɵelementStart(16, "span");
        i0.ɵɵtext(17, "\u271D");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(18, "Contenu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "button", 6);
        i0.ɵɵlistener("click", function AdminControlsComponent_Template_button_click_19_listener() { return ctx.setTab("poll"); });
        i0.ɵɵelementStart(20, "span");
        i0.ɵɵtext(21, "\u25A5");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(22, "Sondage");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 6);
        i0.ɵɵlistener("click", function AdminControlsComponent_Template_button_click_23_listener() { return ctx.setTab("prayer"); });
        i0.ɵɵelementStart(24, "span");
        i0.ɵɵtext(25, "\uD83D\uDE4F");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(26, "Pri\u00E8re");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 6);
        i0.ɵɵlistener("click", function AdminControlsComponent_Template_button_click_27_listener() { return ctx.setTab("streaming"); });
        i0.ɵɵelementStart(28, "span");
        i0.ɵɵtext(29, "\u25CF");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(30, "Direct");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(31, "div", 7);
        i0.ɵɵtemplate(32, AdminControlsComponent_ng_container_32_Template, 18, 9, "ng-container", 8)(33, AdminControlsComponent_ng_container_33_Template, 43, 10, "ng-container", 8)(34, AdminControlsComponent_ng_container_34_Template, 3, 2, "ng-container", 8)(35, AdminControlsComponent_ng_container_35_Template, 8, 0, "ng-container", 8)(36, AdminControlsComponent_ng_container_36_Template, 6, 5, "ng-container", 8);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.toast);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("active", ctx.activeTab === "participants");
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("active", ctx.activeTab === "spiritual");
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("active", ctx.activeTab === "poll");
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("active", ctx.activeTab === "prayer");
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("active", ctx.activeTab === "streaming")("streaming-active", ctx.isStreaming);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.activeTab === "participants");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.activeTab === "spiritual");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.activeTab === "poll");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.activeTab === "prayer");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.activeTab === "streaming");
    } }, dependencies: [CommonModule, i4.NgClass, i4.NgForOf, i4.NgIf, FormsModule, i5.DefaultValueAccessor, i5.NumberValueAccessor, i5.NgControlStatus, i5.MinValidator, i5.MaxValidator, i5.NgModel], styles: ["$accent[_ngcontent-%COMP%]:   #e8a838[_ngcontent-%COMP%];\n$white[_ngcontent-%COMP%]:   #fff[_ngcontent-%COMP%];\n$muted[_ngcontent-%COMP%]:   #a8afbb[_ngcontent-%COMP%];\n$border[_ngcontent-%COMP%]:   rgba(255[_ngcontent-%COMP%], 255[_ngcontent-%COMP%], 255[_ngcontent-%COMP%], .09)[_ngcontent-%COMP%];\n$danger[_ngcontent-%COMP%]:   #e5484d[_ngcontent-%COMP%];\n\n.admin-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 10002;\n  top: 72px; right: 0; bottom: 0;\n  width: 390px;\n  display: flex; flex-direction: column;\n  color: $white;\n  background: rgba(18,20,25,.97);\n  border-left: 1px solid $border;\n  box-shadow: -24px 0 60px rgba(0,0,0,.38);\n  backdrop-filter: blur(22px);\n  font-family: Inter, \"Segoe UI\", sans-serif;\n  animation: _ngcontent-%COMP%_panelIn .22s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_panelIn { from { transform: translateX(100%); opacity: .5 } }\n\n.admin-header[_ngcontent-%COMP%] {\n  min-height: 76px; padding: 14px 18px;\n  display: flex; align-items: center; justify-content: space-between;\n  border-bottom: 1px solid $border;\n  h3 { margin: 3px 0 0; font-size: 17px; font-weight: 650; }\n}\n.admin-kicker[_ngcontent-%COMP%] {\n  color: $accent; font-size: 9px; font-weight: 800;\n  letter-spacing: .14em; text-transform: uppercase;\n}\n.admin-close[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border: 0; border-radius: 11px;\n  background: rgba(255,255,255,.06); color: $muted; cursor: pointer; font-size: 15px;\n  &:hover { background: rgba(255,255,255,.12); color: $white; }\n}\n.admin-toast[_ngcontent-%COMP%] {\n  margin: 10px 16px 0; padding: 10px 12px; border-radius: 9px;\n  color: #8ce6ad; background: rgba(42,174,91,.12); border: 1px solid rgba(42,174,91,.25);\n  font-size: 12px;\n  &--error { color: #ff9c9f; background: rgba(229,72,77,.12); border-color: rgba(229,72,77,.25); }\n}\n\n.admin-tabs[_ngcontent-%COMP%] {\n  padding: 8px; display: grid; grid-template-columns: repeat(5,1fr); gap: 4px;\n  border-bottom: 1px solid $border;\n  button {\n    min-width: 0; padding: 8px 3px; display: flex; flex-direction: column; align-items: center; gap: 4px;\n    border: 0; border-radius: 9px; background: transparent; color: #858d99;\n    font-size: 9px; font-weight: 650; cursor: pointer;\n    span { font-size: 15px; line-height: 1; }\n    &:hover { color: $white; background: rgba(255,255,255,.05); }\n    &.active { color: #f0c36a; background: rgba(232,168,56,.12); }\n    &.streaming-active span { color: #ff6166; }\n  }\n}\n\n.admin-body[_ngcontent-%COMP%] {\n  flex: 1; overflow-y: auto; padding: 18px;\n  scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.18) transparent;\n  h4 { margin: 0 0 12px; font-size: 13px; font-weight: 650; }\n}\n.admin-actions[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 22px; }\n.admin-btn[_ngcontent-%COMP%] {\n  min-height: 46px; padding: 10px 12px; display: flex; align-items: center; gap: 9px;\n  border: 1px solid $border; border-radius: 11px; background: rgba(255,255,255,.055);\n  color: #e1e4e9; font-size: 11px; font-weight: 650; text-align: left; cursor: pointer;\n  span { color: $accent; font-size: 15px; }\n  &:hover { background: rgba(255,255,255,.1); }\n  &--active { border-color: rgba(229,72,77,.35); background: rgba(229,72,77,.13); }\n  &--danger { color: #ff9b9f; span { color: #ff7075; } }\n}\n.participants-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;\n  h4 { margin: 0; color: #d9dde3; }\n}\n.waiting-list[_ngcontent-%COMP%] {\n  margin: 10px 0 16px; padding: 10px; border: 1px solid rgba(232,168,56,.25);\n  border-radius: 12px; background: rgba(232,168,56,.055);\n}\n.waiting-list__head[_ngcontent-%COMP%] {\n  display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;\n  color: #f2c66f; font-size: 10px; font-weight: 750; text-transform: uppercase; letter-spacing: .08em;\n  strong { min-width: 22px; padding: 3px 6px; border-radius: 12px; background: rgba(232,168,56,.16); text-align: center; }\n}\n.waiting-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; padding: 9px 0; border-top: 1px solid rgba(255,255,255,.055); }\n.waiting-copy[_ngcontent-%COMP%] { color: $muted; font-size: 9px; }\n.waiting-action[_ngcontent-%COMP%] {\n  padding: 7px 8px; border-radius: 8px; font-size: 9px; font-weight: 700; cursor: pointer;\n  &:disabled { opacity: .45; cursor: wait; }\n  &--accept { color: #98e8b6; border: 1px solid rgba(53,190,105,.3); background: rgba(53,190,105,.11); }\n  &--reject { width: 30px; overflow: hidden; color: transparent; border: 1px solid rgba(229,72,77,.24); background: rgba(229,72,77,.09); }\n  &--reject::after { content: \"\u00D7\"; color: #ff9296; font-size: 15px; }\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; border: 0; border-radius: 8px; background: rgba(255,255,255,.05);\n  color: $muted; cursor: pointer; font-size: 16px;\n}\n.participant-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px; padding: 11px 0;\n  border-bottom: 1px solid rgba(255,255,255,.055);\n}\n.participant-avatar[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center;\n  background: linear-gradient(145deg, rgba(232,168,56,.24), rgba(232,168,56,.1));\n  color: #f2c66f; font-weight: 750; text-transform: uppercase;\n  &--admin { box-shadow: inset 0 0 0 1px rgba(232,168,56,.5); }\n}\n.participant-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }\n.participant-name[_ngcontent-%COMP%] { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }\n.participant-badge[_ngcontent-%COMP%] { color: $accent; font-size: 8px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; }\n.participant-actions[_ngcontent-%COMP%] { display: flex; gap: 5px; }\n.btn-sm[_ngcontent-%COMP%] {\n  width: 30px; height: 30px; display: grid; place-items: center;\n  border: 1px solid $border; border-radius: 8px; background: rgba(255,255,255,.05);\n  color: $muted; cursor: pointer;\n  &:hover { color: $white; background: rgba(255,255,255,.11); }\n  &--danger:hover { color: #ff8589; background: rgba(229,72,77,.14); }\n  &:disabled { opacity: .35; cursor: not-allowed; }\n}\n.empty[_ngcontent-%COMP%] { padding: 28px; color: $muted; text-align: center; font-size: 12px; }\n\n.spiritual-section[_ngcontent-%COMP%] {\n  padding: 16px; margin-bottom: 12px; border: 1px solid $border; border-radius: 14px;\n  background: rgba(255,255,255,.025);\n  h4 { color: #e8ebef; span { margin-right: 6px; color: $accent; font-size: 9px; } }\n}\n.search-row[_ngcontent-%COMP%], .btn-row[_ngcontent-%COMP%], .poll-option-row[_ngcontent-%COMP%], .duration-row[_ngcontent-%COMP%] { display: flex; gap: 8px; align-items: center; }\n.admin-input[_ngcontent-%COMP%], .admin-textarea[_ngcontent-%COMP%] {\n  width: 100%; margin-bottom: 8px; padding: 10px 11px; box-sizing: border-box;\n  color: $white; background: rgba(255,255,255,.055); border: 1px solid $border; border-radius: 9px;\n  outline: none; font: inherit; font-size: 12px;\n  &::placeholder { color: #737b87; }\n  &:focus { border-color: rgba(232,168,56,.5); box-shadow: 0 0 0 3px rgba(232,168,56,.08); }\n  &--sm { width: 82px; }\n}\n.admin-textarea[_ngcontent-%COMP%] { min-height: 82px; resize: vertical; }\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%], .btn-send[_ngcontent-%COMP%] {\n  border-radius: 9px; cursor: pointer; font-weight: 650;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%; padding: 10px 12px; border: 1px solid rgba(232,168,56,.34);\n  color: #f2c66f; background: rgba(232,168,56,.13);\n  &:hover { background: rgba(232,168,56,.22); }\n  &--compact { width: auto; align-self: stretch; margin-bottom: 8px; }\n}\n.btn-secondary[_ngcontent-%COMP%] { padding: 9px 12px; color: #d7dbe1; background: rgba(255,255,255,.06); border: 1px solid $border; }\n.btn-send[_ngcontent-%COMP%] { padding: 6px 9px; color: #f2c66f; background: rgba(232,168,56,.1); border: 1px solid rgba(232,168,56,.25); }\n.bible-results[_ngcontent-%COMP%], .poll-options[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 8px; }\n.bible-result[_ngcontent-%COMP%] { padding: 11px; border-radius: 10px; background: rgba(0,0,0,.18); }\n.bible-ref[_ngcontent-%COMP%] { margin-bottom: 4px; color: $accent; font-size: 10px; font-weight: 750; }\n.bible-text[_ngcontent-%COMP%] { margin-bottom: 8px; color: #c4c9d1; font-size: 11px; line-height: 1.55; }\n.background-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 7px;\n}\n.background-choice[_ngcontent-%COMP%] {\n  position: relative; min-height: 58px; padding: 8px; overflow: hidden;\n  display: flex; align-items: flex-end; border: 1px solid rgba(255,255,255,.1);\n  border-radius: 10px; color: #fff; cursor: pointer; background: #17202b;\n  box-shadow: inset 0 -24px 26px rgba(0,0,0,.35);\n  span { position: relative; z-index: 1; font-size: 9px; font-weight: 750; }\n  &.is-selected { border-color: $accent; box-shadow: inset 0 -24px 26px rgba(0,0,0,.3), 0 0 0 2px rgba(232,168,56,.18); }\n}\n.background-ocean[_ngcontent-%COMP%] { background: linear-gradient(145deg, #68b9cf, #185f7f 58%, #082f49); }\n.background-dawn[_ngcontent-%COMP%] { background: linear-gradient(145deg, #f6c177, #b65d66 52%, #46335d); }\n.background-midnight[_ngcontent-%COMP%] { background: radial-gradient(circle at 70% 15%, #526585, #111827 48%, #05070c); }\n.background-forest[_ngcontent-%COMP%] { background: linear-gradient(145deg, #658568, #234a3a 52%, #102a25); }\n.background-parchment[_ngcontent-%COMP%] { background: linear-gradient(145deg, #e5cf9d, #a57d45 55%, #5d4024); }\n.background-royal[_ngcontent-%COMP%] { background: linear-gradient(145deg, #59429a, #2c235e 52%, #16132e); }\n.duration-row[_ngcontent-%COMP%] { margin: 10px 0; color: $muted; font-size: 11px; }\n.poll-question[_ngcontent-%COMP%] { color: $white; line-height: 1.5; }\n.poll-bar[_ngcontent-%COMP%] { display: grid; grid-template-columns: 78px 1fr 34px; gap: 8px; align-items: center; margin: 8px 0; }\n.poll-label[_ngcontent-%COMP%] { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; }\n.poll-track[_ngcontent-%COMP%] { height: 7px; border-radius: 8px; background: rgba(255,255,255,.09); overflow: hidden; }\n.poll-fill[_ngcontent-%COMP%] { height: 100%; background: $accent; border-radius: inherit; }\n.poll-percent[_ngcontent-%COMP%], .poll-total[_ngcontent-%COMP%], .info-text[_ngcontent-%COMP%] { color: $muted; font-size: 11px; }\n.empty-state[_ngcontent-%COMP%] { padding: 28px 14px; text-align: center; color: $muted; line-height: 1.6; h4 { color: $white; margin: 10px 0 6px; } p { margin: 0; font-size: 12px; } }\n.empty-state__icon[_ngcontent-%COMP%] { display: block; font-size: 28px; }\n.streaming-status[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px; margin-bottom: 16px; padding: 10px 12px;\n  border-radius: 10px; color: $muted; background: rgba(255,255,255,.04); font-size: 11px; font-weight: 650;\n  span { width: 7px; height: 7px; border-radius: 50%; background: #646b75; }\n  &.active { color: #ff969a; background: rgba(229,72,77,.1); span { background: $danger; box-shadow: 0 0 0 4px rgba(229,72,77,.12); } }\n}\n.platform-toggle[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px; padding: 11px; margin-bottom: 7px;\n  border: 1px solid $border; border-radius: 10px; color: #c5cad2; cursor: pointer;\n  &.selected { border-color: rgba(232,168,56,.4); background: rgba(232,168,56,.08); }\n}\n.platform-logo[_ngcontent-%COMP%] { width: 27px; height: 27px; display: grid; place-items: center; border-radius: 8px; font-size: 10px; font-weight: 800; color: #fff; }\n.platform-logo--youtube[_ngcontent-%COMP%] { background: #e5484d; }.platform-logo--facebook[_ngcontent-%COMP%] { background: #2867c8; font-family: Georgia,serif; font-size: 18px; }\n\n@media (max-width: 900px) {\n  .admin-panel[_ngcontent-%COMP%] {\n    top: auto; left: 0; width: 100%; height: min(76vh, 680px);\n    border: 1px solid $border; border-bottom: 0; border-radius: 22px 22px 0 0;\n    animation: sheetIn .22s ease-out;\n  }\n  @keyframes sheetIn { from { transform: translateY(100%); opacity: .5 } }\n  .admin-header[_ngcontent-%COMP%] { min-height: 66px; }\n  .admin-header[_ngcontent-%COMP%]::before {\n    content: \"\"; position: absolute; top: 7px; left: 50%; transform: translateX(-50%);\n    width: 44px; height: 4px; border-radius: 5px; background: rgba(255,255,255,.2);\n  }\n  .admin-tabs[_ngcontent-%COMP%] { position: sticky; top: 0; background: rgba(18,20,25,.98); }\n}\n\n@media (max-width: 480px) {\n  .admin-body[_ngcontent-%COMP%] { padding: 14px; }\n  .admin-actions[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .admin-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { font-size: 8px; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminControlsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-controls', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"admin-panel\">\n\n  <div class=\"admin-header\">\n    <div>\n      <span class=\"admin-kicker\">Espace de contr\u00F4le</span>\n      <h3>R\u00E9gie de la r\u00E9union</h3>\n    </div>\n    <button class=\"admin-close\" (click)=\"close.emit()\" aria-label=\"Fermer la r\u00E9gie\">\u2715</button>\n  </div>\n\n  <div class=\"admin-toast\" *ngIf=\"toast\" [class.admin-toast--error]=\"toast.type === 'error'\">\n    {{ toast.msg }}\n  </div>\n\n  <!-- Tabs -->\n  <div class=\"admin-tabs\">\n    <button [class.active]=\"activeTab==='participants'\" (click)=\"setTab('participants')\"><span>\uD83D\uDC65</span>Participants</button>\n    <button [class.active]=\"activeTab==='spiritual'\"   (click)=\"setTab('spiritual')\"><span>\u271D</span>Contenu</button>\n    <button [class.active]=\"activeTab==='poll'\"        (click)=\"setTab('poll')\"><span>\u25A5</span>Sondage</button>\n    <button [class.active]=\"activeTab==='prayer'\"      (click)=\"setTab('prayer')\"><span>\uD83D\uDE4F</span>Pri\u00E8re</button>\n    <button [class.active]=\"activeTab==='streaming'\"   (click)=\"setTab('streaming')\" [class.streaming-active]=\"isStreaming\"><span>\u25CF</span>Direct</button>\n  </div>\n\n  <div class=\"admin-body\">\n\n    <!-- \u2500\u2500 Participants \u2500\u2500 -->\n    <ng-container *ngIf=\"activeTab==='participants'\">\n      <div class=\"admin-actions\">\n        <button class=\"admin-btn\" [class.admin-btn--active]=\"recording\"\n                [disabled]=\"recordingPending\" (click)=\"toggleRecording()\">\n          <span>{{ recording ? '\u25A0' : '\u25CF' }}</span>\n          {{ recordingPending ? 'Commande en cours\u2026' : (recording ? 'Arr\u00EAter l\\'enregistrement' : 'D\u00E9marrer l\\'enregistrement') }}\n        </button>\n        <button class=\"admin-btn admin-btn--danger\" (click)=\"endMeeting()\"><span>\u2301</span>Terminer pour tous</button>\n      </div>\n\n      <div class=\"participants-header\">\n        <h4>Participants ({{ participants.length }})</h4>\n        <button class=\"refresh-btn\" (click)=\"loadParticipants()\" title=\"Actualiser\">\u21BB</button>\n      </div>\n\n      <section class=\"waiting-list\" *ngIf=\"waitingParticipants.length\">\n        <div class=\"waiting-list__head\">\n          <span>En attente</span>\n          <strong>{{ waitingParticipants.length }}</strong>\n        </div>\n        <div class=\"waiting-item\" *ngFor=\"let p of waitingParticipants\">\n          <div class=\"participant-avatar\">{{ p.displayName?.charAt(0) || '?' }}</div>\n          <div class=\"participant-info\">\n            <span class=\"participant-name\">{{ p.displayName }}</span>\n            <span class=\"waiting-copy\">Demande d\u2019acc\u00E8s</span>\n          </div>\n          <button class=\"waiting-action waiting-action--accept\"\n                  [disabled]=\"isLoading('admit-'+p.id)\" (click)=\"admitParticipant(p)\">Admettre</button>\n          <button class=\"waiting-action waiting-action--reject\"\n                  [disabled]=\"isLoading('reject-'+p.id)\" (click)=\"rejectParticipant(p)\">Refuser</button>\n        </div>\n      </section>\n\n      <div class=\"participant-item\" *ngFor=\"let p of participants\">\n        <div class=\"participant-avatar\" [class.participant-avatar--admin]=\"p.wasAdmin\">\n          {{ p.displayName?.charAt(0) || '?' }}\n        </div>\n        <div class=\"participant-info\">\n          <span class=\"participant-name\">{{ p.displayName }}</span>\n          <span class=\"participant-badge\" *ngIf=\"p.wasAdmin\">Mod\u00E9rateur</span>\n        </div>\n        <div class=\"participant-actions\">\n          <button class=\"btn-sm\" title=\"Couper le micro\"\n                  [disabled]=\"!p.jitsiParticipantId || isLoading('mute-'+p.id)\" (click)=\"muteParticipant(p)\">\n            {{ isLoading('mute-'+p.id) ? '\u2026' : '\u2301' }}\n          </button>\n          <button class=\"btn-sm\" title=\"Nommer mod\u00E9rateur\"\n                  [disabled]=\"p.wasAdmin || !p.member?.id || !p.jitsiParticipantId\" (click)=\"grantModerator(p)\">\u25C7</button>\n          <button class=\"btn-sm btn-sm--danger\" title=\"Exclure\"\n                  [disabled]=\"!p.jitsiParticipantId || isLoading('kick-'+p.id)\" (click)=\"kickParticipant(p)\">\n            {{ isLoading('kick-'+p.id) ? '\u2026' : '\u2715' }}\n          </button>\n        </div>\n      </div>\n      <p class=\"empty\" *ngIf=\"participants.length===0\">Aucun participant</p>\n    </ng-container>\n\n    <!-- \u2500\u2500 Outils spirituels \u2500\u2500 -->\n    <ng-container *ngIf=\"activeTab==='spiritual'\">\n      <div class=\"spiritual-section background-library\">\n        <h4><span>00</span> Fond de diffusion</h4>\n        <div class=\"background-grid\">\n          <button *ngFor=\"let background of spiritualBackgrounds\"\n                  type=\"button\"\n                  class=\"background-choice\"\n                  [class.is-selected]=\"selectedBackground === background.id\"\n                  [ngClass]=\"background.className\"\n                  (click)=\"selectedBackground = background.id\">\n            <span>{{ background.label }}</span>\n          </button>\n        </div>\n      </div>\n\n      <div class=\"spiritual-section\">\n        <h4><span>01</span> Verset biblique</h4>\n        <div class=\"search-row\">\n          <input class=\"admin-input\" [(ngModel)]=\"bibleQuery\" placeholder=\"Jean 3:16 / amour...\" (keyup.enter)=\"searchBible()\">\n          <button class=\"btn-primary btn-primary--compact\" (click)=\"searchBible()\">Chercher</button>\n        </div>\n        <div class=\"bible-results\" *ngIf=\"bibleResults.length\">\n          <div class=\"bible-result\" *ngFor=\"let v of bibleResults\">\n            <div class=\"bible-ref\">{{ v.reference }}</div>\n            <div class=\"bible-text\">{{ v.text }}</div>\n            <button class=\"btn-send\" [disabled]=\"spiritualSending\" (click)=\"sendVerse(v)\">Diffuser \u25B6</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"spiritual-section\">\n        <h4><span>02</span> Paroles de cantique</h4>\n        <div class=\"search-row\">\n          <input class=\"admin-input\"\n                 [(ngModel)]=\"cantiqueQuery\"\n                 placeholder=\"Num\u00E9ro, titre ou paroles...\"\n                 (keyup.enter)=\"searchCantiques()\">\n          <button class=\"btn-primary btn-primary--compact\" (click)=\"searchCantiques()\">Chercher</button>\n        </div>\n        <div class=\"bible-results\" *ngIf=\"cantiqueResults.length\">\n          <div class=\"bible-result\" *ngFor=\"let cantique of cantiqueResults\">\n            <div class=\"bible-ref\">\n              {{ cantique.number ? cantique.number + ' \u00B7 ' : '' }}{{ cantique.title }}\n            </div>\n            <div class=\"bible-text\">\n              {{ cantique.author || 'Auteur non renseign\u00E9' }}\n            </div>\n            <button class=\"btn-send\" (click)=\"selectCantique(cantique)\">Charger</button>\n          </div>\n        </div>\n        <input class=\"admin-input\" [(ngModel)]=\"lyricsTitle\" placeholder=\"Titre du cantique\">\n        <textarea class=\"admin-textarea\" [(ngModel)]=\"lyricsText\" placeholder=\"Paroles (une ligne par ligne)...\" rows=\"5\"></textarea>\n        <button class=\"btn-primary\" [disabled]=\"spiritualSending\" (click)=\"sendLyrics()\">Diffuser les paroles \u25B6</button>\n      </div>\n\n      <div class=\"spiritual-section\">\n        <h4><span>03</span> Annonce \u00E0 l'\u00E9cran</h4>\n        <textarea class=\"admin-textarea\" [(ngModel)]=\"announcementText\" placeholder=\"Message \u00E0 afficher \u00E0 tous...\" rows=\"3\"></textarea>\n        <div class=\"btn-row\">\n          <button class=\"btn-primary\" [disabled]=\"spiritualSending\" (click)=\"sendAnnouncement()\">Afficher \u25B6</button>\n          <button class=\"btn-secondary\" (click)=\"dismissSpiritualEvent()\">Masquer</button>\n        </div>\n      </div>\n    </ng-container>\n\n    <!-- \u2500\u2500 Sondages \u2500\u2500 -->\n    <ng-container *ngIf=\"activeTab==='poll'\">\n      <div *ngIf=\"!activePoll\">\n        <h4>Nouveau sondage</h4>\n        <input class=\"admin-input\" [(ngModel)]=\"pollQuestion\" placeholder=\"Question du sondage...\">\n        <div class=\"poll-options\">\n          <div class=\"poll-option-row\" *ngFor=\"let opt of pollOptions; let i = index\">\n            <input class=\"admin-input\" [(ngModel)]=\"pollOptions[i]\" [placeholder]=\"'Option ' + (i+1)\">\n            <button class=\"btn-sm btn-sm--danger\" *ngIf=\"pollOptions.length > 2\" (click)=\"removePollOption(i)\">\u2715</button>\n          </div>\n          <button class=\"btn-secondary\" (click)=\"addPollOption()\" *ngIf=\"pollOptions.length < 6\">+ Option</button>\n        </div>\n        <div class=\"duration-row\">\n          <label>Dur\u00E9e (sec)</label>\n          <input class=\"admin-input admin-input--sm\" type=\"number\" [(ngModel)]=\"pollDuration\" min=\"10\" max=\"300\">\n        </div>\n        <button class=\"btn-primary\" (click)=\"launchPoll()\">Lancer le sondage \u25B6</button>\n      </div>\n\n      <div *ngIf=\"activePoll\">\n        <h4>Sondage en cours</h4>\n        <p class=\"poll-question\">{{ activePoll.question }}</p>\n        <div *ngIf=\"pollResults\">\n          <div class=\"poll-bar\" *ngFor=\"let r of pollResults.results\">\n            <span class=\"poll-label\">{{ r.option }}</span>\n            <div class=\"poll-track\">\n              <div class=\"poll-fill\" [style.width.%]=\"r.percent\"></div>\n            </div>\n            <span class=\"poll-percent\">{{ r.percent }}%</span>\n          </div>\n          <p class=\"poll-total\">{{ pollResults.totalVotes }} vote(s)</p>\n        </div>\n        <button class=\"btn-secondary\" (click)=\"closePoll()\">Terminer le sondage</button>\n      </div>\n    </ng-container>\n\n    <!-- \u2500\u2500 Fil de pri\u00E8re \u2500\u2500 -->\n    <ng-container *ngIf=\"activeTab==='prayer'\">\n      <div class=\"empty-state\">\n        <span class=\"empty-state__icon\">\uD83D\uDE4F</span>\n        <h4>Fil de pri\u00E8re en direct</h4>\n        <p>Les sujets soumis par les participants apparaissent instantan\u00E9ment dans la salle. La r\u00E9gie peut les suivre depuis le panneau visible dans la r\u00E9union.</p>\n      </div>\n    </ng-container>\n\n    <!-- \u2500\u2500 Streaming \u2500\u2500 -->\n    <ng-container *ngIf=\"activeTab==='streaming'\">\n      <div class=\"streaming-status\" [class.active]=\"isStreaming\">\n        <span></span>{{ isStreaming ? 'Diffusion en cours' : 'Aucune diffusion active' }}\n      </div>\n\n      <div *ngIf=\"!isStreaming\">\n        <h4>Destinations</h4>\n        <div class=\"platform-toggle\" [class.selected]=\"hasPlatform('youtube')\" (click)=\"togglePlatform('youtube')\">\n          <span class=\"platform-logo platform-logo--youtube\">YT</span><span>YouTube Live</span>\n        </div>\n        <input *ngIf=\"hasPlatform('youtube')\" class=\"admin-input\" [(ngModel)]=\"streamYoutubeKey\" placeholder=\"Cl\u00E9 de streaming YouTube\">\n\n        <div class=\"platform-toggle\" [class.selected]=\"hasPlatform('facebook')\" (click)=\"togglePlatform('facebook')\">\n          <span class=\"platform-logo platform-logo--facebook\">f</span><span>Facebook Live</span>\n        </div>\n        <input *ngIf=\"hasPlatform('facebook')\" class=\"admin-input\" [(ngModel)]=\"streamFacebookKey\" placeholder=\"Cl\u00E9 de streaming Facebook\">\n\n        <p class=\"empty\">Plusieurs destinations utilisent automatiquement le relais RTMP configur\u00E9.</p>\n        <button class=\"btn-primary\" (click)=\"startStreaming()\">\u25B6 D\u00E9marrer le streaming</button>\n      </div>\n      <div *ngIf=\"isStreaming\">\n        <button class=\"admin-btn admin-btn--danger\" (click)=\"stopStreaming()\">\u23F9 Arr\u00EAter le streaming</button>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["$accent: #e8a838;\n$white: #fff;\n$muted: #a8afbb;\n$border: rgba(255,255,255,.09);\n$danger: #e5484d;\n\n.admin-panel {\n  position: fixed;\n  z-index: 10002;\n  top: 72px; right: 0; bottom: 0;\n  width: 390px;\n  display: flex; flex-direction: column;\n  color: $white;\n  background: rgba(18,20,25,.97);\n  border-left: 1px solid $border;\n  box-shadow: -24px 0 60px rgba(0,0,0,.38);\n  backdrop-filter: blur(22px);\n  font-family: Inter, \"Segoe UI\", sans-serif;\n  animation: panelIn .22s ease-out;\n}\n\n@keyframes panelIn { from { transform: translateX(100%); opacity: .5 } }\n\n.admin-header {\n  min-height: 76px; padding: 14px 18px;\n  display: flex; align-items: center; justify-content: space-between;\n  border-bottom: 1px solid $border;\n  h3 { margin: 3px 0 0; font-size: 17px; font-weight: 650; }\n}\n.admin-kicker {\n  color: $accent; font-size: 9px; font-weight: 800;\n  letter-spacing: .14em; text-transform: uppercase;\n}\n.admin-close {\n  width: 36px; height: 36px; border: 0; border-radius: 11px;\n  background: rgba(255,255,255,.06); color: $muted; cursor: pointer; font-size: 15px;\n  &:hover { background: rgba(255,255,255,.12); color: $white; }\n}\n.admin-toast {\n  margin: 10px 16px 0; padding: 10px 12px; border-radius: 9px;\n  color: #8ce6ad; background: rgba(42,174,91,.12); border: 1px solid rgba(42,174,91,.25);\n  font-size: 12px;\n  &--error { color: #ff9c9f; background: rgba(229,72,77,.12); border-color: rgba(229,72,77,.25); }\n}\n\n.admin-tabs {\n  padding: 8px; display: grid; grid-template-columns: repeat(5,1fr); gap: 4px;\n  border-bottom: 1px solid $border;\n  button {\n    min-width: 0; padding: 8px 3px; display: flex; flex-direction: column; align-items: center; gap: 4px;\n    border: 0; border-radius: 9px; background: transparent; color: #858d99;\n    font-size: 9px; font-weight: 650; cursor: pointer;\n    span { font-size: 15px; line-height: 1; }\n    &:hover { color: $white; background: rgba(255,255,255,.05); }\n    &.active { color: #f0c36a; background: rgba(232,168,56,.12); }\n    &.streaming-active span { color: #ff6166; }\n  }\n}\n\n.admin-body {\n  flex: 1; overflow-y: auto; padding: 18px;\n  scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.18) transparent;\n  h4 { margin: 0 0 12px; font-size: 13px; font-weight: 650; }\n}\n.admin-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 22px; }\n.admin-btn {\n  min-height: 46px; padding: 10px 12px; display: flex; align-items: center; gap: 9px;\n  border: 1px solid $border; border-radius: 11px; background: rgba(255,255,255,.055);\n  color: #e1e4e9; font-size: 11px; font-weight: 650; text-align: left; cursor: pointer;\n  span { color: $accent; font-size: 15px; }\n  &:hover { background: rgba(255,255,255,.1); }\n  &--active { border-color: rgba(229,72,77,.35); background: rgba(229,72,77,.13); }\n  &--danger { color: #ff9b9f; span { color: #ff7075; } }\n}\n.participants-header {\n  display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;\n  h4 { margin: 0; color: #d9dde3; }\n}\n.waiting-list {\n  margin: 10px 0 16px; padding: 10px; border: 1px solid rgba(232,168,56,.25);\n  border-radius: 12px; background: rgba(232,168,56,.055);\n}\n.waiting-list__head {\n  display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;\n  color: #f2c66f; font-size: 10px; font-weight: 750; text-transform: uppercase; letter-spacing: .08em;\n  strong { min-width: 22px; padding: 3px 6px; border-radius: 12px; background: rgba(232,168,56,.16); text-align: center; }\n}\n.waiting-item { display: flex; align-items: center; gap: 8px; padding: 9px 0; border-top: 1px solid rgba(255,255,255,.055); }\n.waiting-copy { color: $muted; font-size: 9px; }\n.waiting-action {\n  padding: 7px 8px; border-radius: 8px; font-size: 9px; font-weight: 700; cursor: pointer;\n  &:disabled { opacity: .45; cursor: wait; }\n  &--accept { color: #98e8b6; border: 1px solid rgba(53,190,105,.3); background: rgba(53,190,105,.11); }\n  &--reject { width: 30px; overflow: hidden; color: transparent; border: 1px solid rgba(229,72,77,.24); background: rgba(229,72,77,.09); }\n  &--reject::after { content: \"\u00D7\"; color: #ff9296; font-size: 15px; }\n}\n.refresh-btn {\n  width: 30px; height: 30px; border: 0; border-radius: 8px; background: rgba(255,255,255,.05);\n  color: $muted; cursor: pointer; font-size: 16px;\n}\n.participant-item {\n  display: flex; align-items: center; gap: 10px; padding: 11px 0;\n  border-bottom: 1px solid rgba(255,255,255,.055);\n}\n.participant-avatar {\n  width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center;\n  background: linear-gradient(145deg, rgba(232,168,56,.24), rgba(232,168,56,.1));\n  color: #f2c66f; font-weight: 750; text-transform: uppercase;\n  &--admin { box-shadow: inset 0 0 0 1px rgba(232,168,56,.5); }\n}\n.participant-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }\n.participant-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }\n.participant-badge { color: $accent; font-size: 8px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; }\n.participant-actions { display: flex; gap: 5px; }\n.btn-sm {\n  width: 30px; height: 30px; display: grid; place-items: center;\n  border: 1px solid $border; border-radius: 8px; background: rgba(255,255,255,.05);\n  color: $muted; cursor: pointer;\n  &:hover { color: $white; background: rgba(255,255,255,.11); }\n  &--danger:hover { color: #ff8589; background: rgba(229,72,77,.14); }\n  &:disabled { opacity: .35; cursor: not-allowed; }\n}\n.empty { padding: 28px; color: $muted; text-align: center; font-size: 12px; }\n\n.spiritual-section {\n  padding: 16px; margin-bottom: 12px; border: 1px solid $border; border-radius: 14px;\n  background: rgba(255,255,255,.025);\n  h4 { color: #e8ebef; span { margin-right: 6px; color: $accent; font-size: 9px; } }\n}\n.search-row, .btn-row, .poll-option-row, .duration-row { display: flex; gap: 8px; align-items: center; }\n.admin-input, .admin-textarea {\n  width: 100%; margin-bottom: 8px; padding: 10px 11px; box-sizing: border-box;\n  color: $white; background: rgba(255,255,255,.055); border: 1px solid $border; border-radius: 9px;\n  outline: none; font: inherit; font-size: 12px;\n  &::placeholder { color: #737b87; }\n  &:focus { border-color: rgba(232,168,56,.5); box-shadow: 0 0 0 3px rgba(232,168,56,.08); }\n  &--sm { width: 82px; }\n}\n.admin-textarea { min-height: 82px; resize: vertical; }\n.btn-primary, .btn-secondary, .btn-send {\n  border-radius: 9px; cursor: pointer; font-weight: 650;\n}\n.btn-primary {\n  width: 100%; padding: 10px 12px; border: 1px solid rgba(232,168,56,.34);\n  color: #f2c66f; background: rgba(232,168,56,.13);\n  &:hover { background: rgba(232,168,56,.22); }\n  &--compact { width: auto; align-self: stretch; margin-bottom: 8px; }\n}\n.btn-secondary { padding: 9px 12px; color: #d7dbe1; background: rgba(255,255,255,.06); border: 1px solid $border; }\n.btn-send { padding: 6px 9px; color: #f2c66f; background: rgba(232,168,56,.1); border: 1px solid rgba(232,168,56,.25); }\n.bible-results, .poll-options { display: flex; flex-direction: column; gap: 8px; }\n.bible-result { padding: 11px; border-radius: 10px; background: rgba(0,0,0,.18); }\n.bible-ref { margin-bottom: 4px; color: $accent; font-size: 10px; font-weight: 750; }\n.bible-text { margin-bottom: 8px; color: #c4c9d1; font-size: 11px; line-height: 1.55; }\n.background-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 7px;\n}\n.background-choice {\n  position: relative; min-height: 58px; padding: 8px; overflow: hidden;\n  display: flex; align-items: flex-end; border: 1px solid rgba(255,255,255,.1);\n  border-radius: 10px; color: #fff; cursor: pointer; background: #17202b;\n  box-shadow: inset 0 -24px 26px rgba(0,0,0,.35);\n  span { position: relative; z-index: 1; font-size: 9px; font-weight: 750; }\n  &.is-selected { border-color: $accent; box-shadow: inset 0 -24px 26px rgba(0,0,0,.3), 0 0 0 2px rgba(232,168,56,.18); }\n}\n.background-ocean { background: linear-gradient(145deg, #68b9cf, #185f7f 58%, #082f49); }\n.background-dawn { background: linear-gradient(145deg, #f6c177, #b65d66 52%, #46335d); }\n.background-midnight { background: radial-gradient(circle at 70% 15%, #526585, #111827 48%, #05070c); }\n.background-forest { background: linear-gradient(145deg, #658568, #234a3a 52%, #102a25); }\n.background-parchment { background: linear-gradient(145deg, #e5cf9d, #a57d45 55%, #5d4024); }\n.background-royal { background: linear-gradient(145deg, #59429a, #2c235e 52%, #16132e); }\n.duration-row { margin: 10px 0; color: $muted; font-size: 11px; }\n.poll-question { color: $white; line-height: 1.5; }\n.poll-bar { display: grid; grid-template-columns: 78px 1fr 34px; gap: 8px; align-items: center; margin: 8px 0; }\n.poll-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; }\n.poll-track { height: 7px; border-radius: 8px; background: rgba(255,255,255,.09); overflow: hidden; }\n.poll-fill { height: 100%; background: $accent; border-radius: inherit; }\n.poll-percent, .poll-total, .info-text { color: $muted; font-size: 11px; }\n.empty-state { padding: 28px 14px; text-align: center; color: $muted; line-height: 1.6; h4 { color: $white; margin: 10px 0 6px; } p { margin: 0; font-size: 12px; } }\n.empty-state__icon { display: block; font-size: 28px; }\n.streaming-status {\n  display: flex; align-items: center; gap: 8px; margin-bottom: 16px; padding: 10px 12px;\n  border-radius: 10px; color: $muted; background: rgba(255,255,255,.04); font-size: 11px; font-weight: 650;\n  span { width: 7px; height: 7px; border-radius: 50%; background: #646b75; }\n  &.active { color: #ff969a; background: rgba(229,72,77,.1); span { background: $danger; box-shadow: 0 0 0 4px rgba(229,72,77,.12); } }\n}\n.platform-toggle {\n  display: flex; align-items: center; gap: 10px; padding: 11px; margin-bottom: 7px;\n  border: 1px solid $border; border-radius: 10px; color: #c5cad2; cursor: pointer;\n  &.selected { border-color: rgba(232,168,56,.4); background: rgba(232,168,56,.08); }\n}\n.platform-logo { width: 27px; height: 27px; display: grid; place-items: center; border-radius: 8px; font-size: 10px; font-weight: 800; color: #fff; }\n.platform-logo--youtube { background: #e5484d; }.platform-logo--facebook { background: #2867c8; font-family: Georgia,serif; font-size: 18px; }\n\n@media (max-width: 900px) {\n  .admin-panel {\n    top: auto; left: 0; width: 100%; height: min(76vh, 680px);\n    border: 1px solid $border; border-bottom: 0; border-radius: 22px 22px 0 0;\n    animation: sheetIn .22s ease-out;\n  }\n  @keyframes sheetIn { from { transform: translateY(100%); opacity: .5 } }\n  .admin-header { min-height: 66px; }\n  .admin-header::before {\n    content: \"\"; position: absolute; top: 7px; left: 50%; transform: translateX(-50%);\n    width: 44px; height: 4px; border-radius: 5px; background: rgba(255,255,255,.2);\n  }\n  .admin-tabs { position: sticky; top: 0; background: rgba(18,20,25,.98); }\n}\n\n@media (max-width: 480px) {\n  .admin-body { padding: 14px; }\n  .admin-actions { grid-template-columns: 1fr; }\n  .admin-tabs button { font-size: 8px; }\n}\n"] }]
    }], () => [{ type: i1.ReunionsService }, { type: i2.MeetingSocketService }, { type: i3.HttpClient }], { meetingId: [{
            type: Input
        }], jitsiRoomId: [{
            type: Input
        }], jitsiApi: [{
            type: Input
        }], close: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminControlsComponent, { className: "AdminControlsComponent", filePath: "app\\pages\\reunions\\admin-controls\\admin-controls.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=admin-controls.component.js.map