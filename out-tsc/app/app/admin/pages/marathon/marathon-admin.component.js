import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = () => [25, 50, 75, 100];
function MarathonAdminComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "span");
    i0.ɵɵtext(2, "\u26A0\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5, "Firebase non configur\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Dans ");
    i0.ɵɵelementStart(10, "code");
    i0.ɵɵtext(11, "backend/.env");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, ", renseignez ");
    i0.ɵɵelementStart(13, "code");
    i0.ɵɵtext(14, "FIREBASE_PROJECT_ID");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, ", ");
    i0.ɵɵelementStart(16, "code");
    i0.ɵɵtext(17, "FIREBASE_CLIENT_EMAIL");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18, " et ");
    i0.ɵɵelementStart(19, "code");
    i0.ɵɵtext(20, "FIREBASE_PRIVATE_KEY");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, " avec les vraies valeurs depuis Firebase Console \u2192 Param\u00E8tres du projet \u2192 Comptes de service \u2192 G\u00E9n\u00E9rer une nouvelle cl\u00E9 priv\u00E9e.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.firebaseError);
} }
function MarathonAdminComponent_div_7_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", s_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.scopeLabels[s_r3]);
} }
function MarathonAdminComponent_div_7_div_25_label_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 37)(1, "input", 38);
    i0.ɵɵlistener("change", function MarathonAdminComponent_div_7_div_25_label_7_Template_input_change_1_listener() { const b_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggleLivre(b_r5.id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r0.isLivreSelected(b_r5.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", b_r5.nom, " ");
} }
function MarathonAdminComponent_div_7_div_25_label_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 37)(1, "input", 38);
    i0.ɵɵlistener("change", function MarathonAdminComponent_div_7_div_25_label_11_Template_input_change_1_listener() { const b_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggleLivre(b_r7.id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r0.isLivreSelected(b_r7.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", b_r7.nom, " ");
} }
function MarathonAdminComponent_div_7_div_25_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.form.livresChoisis.length, " livre(s) s\u00E9lectionn\u00E9(s) ");
} }
function MarathonAdminComponent_div_7_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "h4");
    i0.ɵɵtext(2, "S\u00E9lectionner les livres");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 32)(4, "div", 33)(5, "p", 34);
    i0.ɵɵtext(6, "Ancien Testament");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, MarathonAdminComponent_div_7_div_25_label_7_Template, 3, 2, "label", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 33)(9, "p", 34);
    i0.ɵɵtext(10, "Nouveau Testament");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, MarathonAdminComponent_div_7_div_25_label_11_Template, 3, 2, "label", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, MarathonAdminComponent_div_7_div_25_p_12_Template, 2, 1, "p", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r0.atBooks);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.ntBooks);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.form.livresChoisis.length);
} }
function MarathonAdminComponent_div_7_p_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2713 ", ctx_r0.successMsg, "");
} }
function MarathonAdminComponent_div_7_p_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMsg);
} }
function MarathonAdminComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "h3");
    i0.ɵɵtext(2, "Cr\u00E9er un marathon");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 19)(4, "div", 20)(5, "label");
    i0.ɵɵtext(6, "Titre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonAdminComponent_div_7_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.titre, $event) || (ctx_r0.form.titre = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 20)(9, "label");
    i0.ɵɵtext(10, "Scope de lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonAdminComponent_div_7_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.scope, $event) || (ctx_r0.form.scope = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(12, MarathonAdminComponent_div_7_option_12_Template, 2, 2, "option", 23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 20)(14, "label");
    i0.ɵɵtext(15, "Date de d\u00E9but");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonAdminComponent_div_7_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.dateDebut, $event) || (ctx_r0.form.dateDebut = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 20)(18, "label");
    i0.ɵɵtext(19, "Date de fin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonAdminComponent_div_7_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.dateFin, $event) || (ctx_r0.form.dateFin = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 20)(22, "label");
    i0.ɵɵtext(23, "Description (optionnel)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "textarea", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function MarathonAdminComponent_div_7_Template_textarea_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form.description, $event) || (ctx_r0.form.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(25, MarathonAdminComponent_div_7_div_25_Template, 13, 3, "div", 26);
    i0.ɵɵelementStart(26, "div", 20)(27, "label");
    i0.ɵɵtext(28, "Flyer (optionnel)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "input", 27);
    i0.ɵɵlistener("change", function MarathonAdminComponent_div_7_Template_input_change_29_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onFlyerChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "p", 28);
    i0.ɵɵtext(31, "Le flyer sera joint \u00E0 la newsletter envoy\u00E9e aux anciens participants.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 12)(33, "button", 15);
    i0.ɵɵlistener("click", function MarathonAdminComponent_div_7_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submit()); });
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(35, MarathonAdminComponent_div_7_p_35_Template, 2, 1, "p", 16)(36, MarathonAdminComponent_div_7_p_36_Template, 2, 1, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.titre);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.scope);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.scopeOptions);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.dateDebut);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.dateFin);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.form.scope === "LIVRES_CHOISIS");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", ctx_r0.saving || !ctx_r0.form.titre || !ctx_r0.form.dateDebut || !ctx_r0.form.dateFin);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving ? "Cr\u00E9ation en cours..." : "Cr\u00E9er le marathon", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.successMsg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.errorMsg);
} }
function MarathonAdminComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function MarathonAdminComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtext(1, "Aucun marathon cr\u00E9\u00E9.");
    i0.ɵɵelementEnd();
} }
function MarathonAdminComponent_div_10_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", ctx_r0.nbJoursRestants(m_r9.dateFin), "j restants)");
} }
function MarathonAdminComponent_div_10_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(m_r9.description);
} }
function MarathonAdminComponent_div_10_div_1_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 59);
    i0.ɵɵlistener("click", function MarathonAdminComponent_div_10_div_1_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const m_r9 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.archiver(m_r9.id)); });
    i0.ɵɵtext(1, "Archiver");
    i0.ɵɵelementEnd();
} }
function MarathonAdminComponent_div_10_div_1_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 59);
    i0.ɵɵlistener("click", function MarathonAdminComponent_div_10_div_1_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const m_r9 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.reactiver(m_r9.id)); });
    i0.ɵɵtext(1, "R\u00E9activer");
    i0.ɵɵelementEnd();
} }
function MarathonAdminComponent_div_10_div_1_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵtext(1, "Chargement des participants...");
    i0.ɵɵelementEnd();
} }
function MarathonAdminComponent_div_10_div_1_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtext(1, "Aucun inscrit pour l'instant.");
    i0.ɵɵelementEnd();
} }
function MarathonAdminComponent_div_10_div_1_div_24_div_3_tr_25_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 81);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ms_r13 = ctx.$implicit;
    const i_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("reached", i_r14.milestonesReached == null ? null : i_r14.milestonesReached.includes(ms_r13));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ms_r13, "% ");
} }
function MarathonAdminComponent_div_10_div_1_div_24_div_3_tr_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong", 72);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td", 73);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td")(9, "div", 74);
    i0.ɵɵelement(10, "div", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 76);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtemplate(14, MarathonAdminComponent_div_10_div_1_div_24_div_3_tr_25_span_14_Template, 2, 3, "span", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td", 78)(16, "span", 79);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 80);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const i_r14 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r14.rank);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r14.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r14.email);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", i_r14.progressPercent, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i_r14.progressPercent, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(13, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\uD83D\uDD25 ", (tmp_13_0 = i_r14.currentStreak) !== null && tmp_13_0 !== undefined ? tmp_13_0 : 0, "j");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("/ ", (tmp_14_0 = i_r14.maxStreak) !== null && tmp_14_0 !== undefined ? tmp_14_0 : 0, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((i_r14.createdAt == null ? null : i_r14.createdAt.toDate) ? i0.ɵɵpipeBind2(22, 10, i_r14.createdAt.toDate(), "dd/MM/yy") : "\u2014");
} }
function MarathonAdminComponent_div_10_div_1_div_24_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 67)(2, "span", 68);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 69);
    i0.ɵɵlistener("click", function MarathonAdminComponent_div_10_div_1_div_24_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r12); const m_r9 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.exportCSV(m_r9)); });
    i0.ɵɵtext(5, "\u2B07 Exporter CSV");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 70)(7, "table")(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "#");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Participant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Progression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Jalons");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Streak");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Inscription");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "tbody");
    i0.ɵɵtemplate(25, MarathonAdminComponent_div_10_div_1_div_24_div_3_tr_25_Template, 23, 14, "tr", 71);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.inscrits.length, " participant(s)");
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngForOf", ctx_r0.inscrits);
} }
function MarathonAdminComponent_div_10_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵtemplate(1, MarathonAdminComponent_div_10_div_1_div_24_div_1_Template, 2, 0, "div", 6)(2, MarathonAdminComponent_div_10_div_1_div_24_div_2_Template, 2, 0, "div", 7)(3, MarathonAdminComponent_div_10_div_1_div_24_div_3_Template, 26, 2, "div", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.loadingInscrits);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loadingInscrits && ctx_r0.inscrits.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.loadingInscrits && ctx_r0.inscrits.length > 0);
} }
function MarathonAdminComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "div", 49)(4, "strong", 50);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 51);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p", 52);
    i0.ɵɵtext(9);
    i0.ɵɵtemplate(10, MarathonAdminComponent_div_10_div_1_span_10_Template, 2, 1, "span", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, MarathonAdminComponent_div_10_div_1_p_11_Template, 2, 1, "p", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 55)(13, "span", 56);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 57);
    i0.ɵɵtext(16, "inscrit(s)");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 58)(18, "button", 59);
    i0.ɵɵlistener("click", function MarathonAdminComponent_div_10_div_1_Template_button_click_18_listener() { const m_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.voirInscrits(m_r9)); });
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, MarathonAdminComponent_div_10_div_1_button_20_Template, 2, 0, "button", 60)(21, MarathonAdminComponent_div_10_div_1_button_21_Template, 2, 0, "button", 60);
    i0.ɵɵelementStart(22, "button", 61);
    i0.ɵɵlistener("click", function MarathonAdminComponent_div_10_div_1_Template_button_click_22_listener() { const m_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.supprimer(m_r9.id)); });
    i0.ɵɵtext(23, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(24, MarathonAdminComponent_div_10_div_1_div_24_Template, 4, 3, "div", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("archived", m_r9.statut === "ARCHIVE");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(m_r9.titre);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("statut-" + m_r9.statut);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.statutLabels[m_r9.statut]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4(" ", ctx_r0.scopeLabels[m_r9.scope], " \u2022 ", m_r9.dateDebut, " \u2192 ", m_r9.dateFin, " \u2022 ", m_r9.nbJours, " jours ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r9.statut === "ACTIF");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r9.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r9.nbInscrits);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.inscritsMarathonId === m_r9.id ? "\u25B2 Masquer" : "\u25BC Participants", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r9.statut !== "ARCHIVE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r9.statut === "ARCHIVE");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.inscritsMarathonId === m_r9.id);
} }
function MarathonAdminComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtemplate(1, MarathonAdminComponent_div_10_div_1_Template, 25, 17, "div", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.marathons);
} }
function MarathonAdminComponent_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 84)(1, "div", 47)(2, "div", 48)(3, "div", 49)(4, "strong", 50);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 85);
    i0.ɵɵtext(7, "Supprim\u00E9");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p", 52);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 55)(11, "span", 56);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 57);
    i0.ɵɵtext(14, "inscrit(s)");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const m_r15 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(m_r15.titre);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("ID : ", m_r15.id, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r15.nbInscrits);
} }
function MarathonAdminComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82)(1, "h3");
    i0.ɵɵtext(2, "Historique \u2014 marathons supprim\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 11);
    i0.ɵɵtext(4, "Ces marathons ont \u00E9t\u00E9 supprim\u00E9s mais des participants y sont encore inscrits.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 44);
    i0.ɵɵtemplate(6, MarathonAdminComponent_div_11_div_6_Template, 15, 3, "div", 83);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r0.orphanedMarathons);
} }
function MarathonAdminComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.attestationMsg);
} }
const BIBLE_BOOKS = [
    { id: 'GEN', nom: 'Gen\u00e8se', testament: 'AT' }, { id: 'EXO', nom: 'Exode', testament: 'AT' },
    { id: 'LEV', nom: 'L\u00e9vitique', testament: 'AT' }, { id: 'NOM', nom: 'Nombres', testament: 'AT' },
    { id: 'DEU', nom: 'Deut\u00e9ronome', testament: 'AT' }, { id: 'JOS', nom: 'Josu\u00e9', testament: 'AT' },
    { id: 'JUG', nom: 'Juges', testament: 'AT' }, { id: 'RUT', nom: 'Ruth', testament: 'AT' },
    { id: '1SA', nom: '1 Samuel', testament: 'AT' }, { id: '2SA', nom: '2 Samuel', testament: 'AT' },
    { id: '1RO', nom: '1 Rois', testament: 'AT' }, { id: '2RO', nom: '2 Rois', testament: 'AT' },
    { id: '1CH', nom: '1 Chroniques', testament: 'AT' }, { id: '2CH', nom: '2 Chroniques', testament: 'AT' },
    { id: 'ESD', nom: 'Esdras', testament: 'AT' }, { id: 'NEH', nom: 'N\u00e9h\u00e9mie', testament: 'AT' },
    { id: 'EST', nom: 'Esther', testament: 'AT' }, { id: 'JOB', nom: 'Job', testament: 'AT' },
    { id: 'PSA', nom: 'Psaumes', testament: 'AT' }, { id: 'PRO', nom: 'Proverbes', testament: 'AT' },
    { id: 'ECC', nom: 'Eccl\u00e9siaste', testament: 'AT' }, { id: 'CAN', nom: 'Cantique', testament: 'AT' },
    { id: 'ESA', nom: '\u00c9sa\u00efe', testament: 'AT' }, { id: 'JER', nom: 'J\u00e9r\u00e9mie', testament: 'AT' },
    { id: 'LAM', nom: 'Lamentations', testament: 'AT' }, { id: 'EZE', nom: '\u00c9z\u00e9chiel', testament: 'AT' },
    { id: 'DAN', nom: 'Daniel', testament: 'AT' }, { id: 'OSE', nom: 'Os\u00e9e', testament: 'AT' },
    { id: 'JOE', nom: 'Jo\u00ebl', testament: 'AT' }, { id: 'AMO', nom: 'Amos', testament: 'AT' },
    { id: 'ABD', nom: 'Abdias', testament: 'AT' }, { id: 'JON', nom: 'Jonas', testament: 'AT' },
    { id: 'MIC', nom: 'Mich\u00e9e', testament: 'AT' }, { id: 'NAH', nom: 'Nahum', testament: 'AT' },
    { id: 'HAB', nom: 'Habacuc', testament: 'AT' }, { id: 'SOF', nom: 'Sophonie', testament: 'AT' },
    { id: 'AGG', nom: 'Agg\u00e9e', testament: 'AT' }, { id: 'ZAC', nom: 'Zacharie', testament: 'AT' },
    { id: 'MAL', nom: 'Malachie', testament: 'AT' },
    { id: 'MAT', nom: 'Matthieu', testament: 'NT' }, { id: 'MAR', nom: 'Marc', testament: 'NT' },
    { id: 'LUC', nom: 'Luc', testament: 'NT' }, { id: 'JEA', nom: 'Jean', testament: 'NT' },
    { id: 'ACT', nom: 'Actes', testament: 'NT' }, { id: 'ROM', nom: 'Romains', testament: 'NT' },
    { id: '1CO', nom: '1 Corinthiens', testament: 'NT' }, { id: '2CO', nom: '2 Corinthiens', testament: 'NT' },
    { id: 'GAL', nom: 'Galates', testament: 'NT' }, { id: 'EPH', nom: '\u00c9ph\u00e9siens', testament: 'NT' },
    { id: 'PHP', nom: 'Philippiens', testament: 'NT' }, { id: 'COL', nom: 'Colossiens', testament: 'NT' },
    { id: '1TH', nom: '1 Thessaloniciens', testament: 'NT' }, { id: '2TH', nom: '2 Thessaloniciens', testament: 'NT' },
    { id: '1TI', nom: '1 Timoth\u00e9e', testament: 'NT' }, { id: '2TI', nom: '2 Timoth\u00e9e', testament: 'NT' },
    { id: 'TIT', nom: 'Tite', testament: 'NT' }, { id: 'PHM', nom: 'Phil\u00e9mon', testament: 'NT' },
    { id: 'HEB', nom: 'H\u00e9breux', testament: 'NT' }, { id: 'JAC', nom: 'Jacques', testament: 'NT' },
    { id: '1PI', nom: '1 Pierre', testament: 'NT' }, { id: '2PI', nom: '2 Pierre', testament: 'NT' },
    { id: '1JE', nom: '1 Jean', testament: 'NT' }, { id: '2JE', nom: '2 Jean', testament: 'NT' },
    { id: '3JE', nom: '3 Jean', testament: 'NT' }, { id: 'JUD', nom: 'Jude', testament: 'NT' },
    { id: 'APO', nom: 'Apocalypse', testament: 'NT' },
];
const SCOPE_LABELS = {
    BIBLE_COMPLETE: 'Bible compl\u00e8te (66 livres)',
    ANCIEN_TESTAMENT: 'Ancien Testament (39 livres)',
    NOUVEAU_TESTAMENT: 'Nouveau Testament (27 livres)',
    LIVRES_CHOISIS: 'Livres sp\u00e9cifiques',
};
const STATUT_LABELS = {
    PLANIFIE: 'Planifi\u00e9',
    ACTIF: 'Actif',
    ARCHIVE: 'Archiv\u00e9',
};
export class MarathonAdminComponent {
    constructor() {
        this.api = inject(ApiService);
        // ─── Données ───────────────────────────────────────────────────────────────
        this.marathons = [];
        this.orphanedMarathons = [];
        this.loading = true;
        this.firebaseError = '';
        // ─── Panneau inscrits ──────────────────────────────────────────────────────
        this.inscritsMarathonId = null;
        this.inscritsMarathonTitre = '';
        this.inscrits = [];
        this.loadingInscrits = false;
        // ─── Formulaire de création ────────────────────────────────────────────────
        this.showForm = false;
        this.saving = false;
        this.successMsg = '';
        this.errorMsg = '';
        this.flyerFile = null;
        this.uploadingFlyer = false;
        this.form = {
            titre: '',
            description: '',
            dateDebut: '',
            dateFin: '',
            scope: 'BIBLE_COMPLETE',
            livresChoisis: [],
        };
        // ─── Attestations annuelles ────────────────────────────────────────────────
        this.anneeAttestation = new Date().getFullYear();
        this.sendingAttestations = false;
        this.attestationMsg = '';
        // ─── Constantes template ──────────────────────────────────────────────────
        this.atBooks = BIBLE_BOOKS.filter(b => b.testament === 'AT');
        this.ntBooks = BIBLE_BOOKS.filter(b => b.testament === 'NT');
        this.scopeLabels = SCOPE_LABELS;
        this.statutLabels = STATUT_LABELS;
        this.scopeOptions = Object.keys(SCOPE_LABELS);
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.firebaseError = '';
        this.api.getMarathonsAdmin().subscribe({
            next: (data) => {
                this.marathons = data;
                this.loading = false;
                this.api.getOrphanedMarathons().subscribe({
                    next: (orphaned) => { this.orphanedMarathons = orphaned; },
                    error: () => { },
                });
            },
            error: (err) => {
                var _a, _b;
                const msg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : '';
                if ((err === null || err === void 0 ? void 0 : err.status) === 503 || msg.toLowerCase().includes('firebase')) {
                    this.firebaseError = msg || 'Firebase non configur\u00e9 \u2014 ajoutez vos identifiants dans le .env du backend.';
                }
                this.loading = false;
            },
        });
    }
    // ─── Création ─────────────────────────────────────────────────────────────
    onFlyerChange(event) {
        var _a, _b;
        const input = event.target;
        this.flyerFile = (_b = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    submit() {
        if (this.saving)
            return;
        if (!this.form.titre || !this.form.dateDebut || !this.form.dateFin)
            return;
        if (this.form.scope === 'LIVRES_CHOISIS' && !this.form.livresChoisis.length) {
            this.errorMsg = 'Choisissez au moins un livre.';
            return;
        }
        this.saving = true;
        this.errorMsg = '';
        this.successMsg = '';
        const payload = Object.assign({}, this.form);
        if (payload.scope !== 'LIVRES_CHOISIS')
            delete payload.livresChoisis;
        this.api.creerMarathon(payload).subscribe({
            next: (res) => {
                const marathonId = res.id;
                if (this.flyerFile && marathonId) {
                    this.uploadingFlyer = true;
                    const fd = new FormData();
                    fd.append('file', this.flyerFile);
                    this.api.uploadMarathonFlyer(marathonId, fd).subscribe({
                        next: () => { this.uploadingFlyer = false; },
                        error: () => { this.uploadingFlyer = false; },
                    });
                }
                this.successMsg = `Marathon cr\u00e9\u00e9 \u2014 ${res.nbJours} jours, ${res.nbChapitres} chapitres r\u00e9partis. Une newsletter a \u00e9t\u00e9 envoy\u00e9e aux anciens participants.`;
                this.saving = false;
                this.resetForm();
                this.load();
            },
            error: (err) => {
                var _a, _b;
                this.errorMsg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de la cr\u00e9ation.';
                this.saving = false;
            },
        });
    }
    resetForm() {
        this.form = { titre: '', description: '', dateDebut: '', dateFin: '', scope: 'BIBLE_COMPLETE', livresChoisis: [] };
        this.flyerFile = null;
    }
    toggleLivre(id) {
        const idx = this.form.livresChoisis.indexOf(id);
        if (idx >= 0)
            this.form.livresChoisis.splice(idx, 1);
        else
            this.form.livresChoisis.push(id);
    }
    isLivreSelected(id) {
        return this.form.livresChoisis.includes(id);
    }
    // ─── Actions sur un marathon ───────────────────────────────────────────────
    archiver(id) {
        this.api.archiverMarathon(id).subscribe({ next: () => this.load() });
    }
    reactiver(id) {
        this.api.reactiverMarathon(id).subscribe({ next: () => this.load() });
    }
    supprimer(id) {
        if (!confirm('Supprimer ce marathon ? Cette action est irr\u00e9versible.'))
            return;
        this.api.supprimerMarathon(id).subscribe({ next: () => this.load() });
    }
    // ─── Panneau inscrits ──────────────────────────────────────────────────────
    voirInscrits(m) {
        if (this.inscritsMarathonId === m.id) {
            this.inscritsMarathonId = null;
            return;
        }
        this.inscritsMarathonId = m.id;
        this.inscritsMarathonTitre = m.titre;
        this.loadingInscrits = true;
        this.inscrits = [];
        this.api.getInscritsMarathon(m.id).subscribe({
            next: (data) => { this.inscrits = data; this.loadingInscrits = false; },
            error: () => { this.loadingInscrits = false; },
        });
    }
    // ─── Attestations annuelles ────────────────────────────────────────────────
    exportCSV(m) {
        if (!this.inscrits.length)
            return;
        const header = ['Rang', 'Nom', 'Email', 'Progression (%)', 'Jalons', 'Streak actuel', 'Streak max'];
        const rows = this.inscrits.map((i) => {
            var _a, _b, _c;
            return [
                i.rank, i.fullName, i.email, i.progressPercent,
                ((_a = i.milestonesReached) !== null && _a !== void 0 ? _a : []).join('|'),
                (_b = i.currentStreak) !== null && _b !== void 0 ? _b : 0,
                (_c = i.maxStreak) !== null && _c !== void 0 ? _c : 0,
            ].join(';');
        });
        const csv = [header.join(';'), ...rows].join('\n');
        const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${m.titre.replace(/\s+/g, '-').toLowerCase()}-inscrits.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }
    envoyerAttestations() {
        if (!confirm(`Envoyer les attestations annuelles pour ${this.anneeAttestation} ?`))
            return;
        this.sendingAttestations = true;
        this.attestationMsg = '';
        this.api.envoyerAttestationsAnnuelles(this.anneeAttestation).subscribe({
            next: (res) => {
                this.attestationMsg = `${res.envoyes} attestation(s) envoy\u00e9e(s) sur ${res.totalMarathons} marathon(s).`;
                this.sendingAttestations = false;
            },
            error: () => {
                this.attestationMsg = 'Erreur lors de l\u2019envoi.';
                this.sendingAttestations = false;
            },
        });
    }
    // ─── Helpers template ──────────────────────────────────────────────────────
    nbJoursRestants(dateFin) {
        const diff = new Date(dateFin).getTime() - Date.now();
        return Math.max(0, Math.ceil(diff / 86400000));
    }
}
MarathonAdminComponent.ɵfac = function MarathonAdminComponent_Factory(t) { return new (t || MarathonAdminComponent)(); };
MarathonAdminComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MarathonAdminComponent, selectors: [["app-marathon-admin"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 28, vars: 11, consts: [[1, "page"], [1, "page-header"], [1, "page-title"], [1, "btn-primary", 3, "click"], ["class", "firebase-warn", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "marathons-list", 4, "ngIf"], ["class", "form-card", "style", "margin-top:1.5rem", 4, "ngIf"], [1, "form-card", "attestation-card"], [1, "hint"], [1, "form-actions"], [1, "field", "inline"], ["type", "number", 2, "width", "100px", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], ["class", "success-msg", 4, "ngIf"], [1, "firebase-warn"], [1, "form-card"], [1, "form-grid"], [1, "field"], ["type", "text", "placeholder", "Ex: Marathon Bible compl\u00E8te 2026", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", 3, "ngModelChange", "ngModel"], ["placeholder", "Pr\u00E9sentation du marathon...", 3, "ngModelChange", "ngModel"], ["class", "books-picker", 4, "ngIf"], ["type", "file", "accept", "image/*", 3, "change"], [1, "hint", 2, "margin-top", "4px"], ["class", "error-msg", 4, "ngIf"], [3, "value"], [1, "books-picker"], [1, "books-cols"], [1, "books-col"], [1, "books-testament"], ["class", "book-check", 4, "ngFor", "ngForOf"], ["class", "books-count", 4, "ngIf"], [1, "book-check"], ["type", "checkbox", 3, "change", "checked"], [1, "books-count"], [1, "success-msg"], [1, "error-msg"], [1, "loading"], [1, "empty"], [1, "marathons-list"], ["class", "marathon-card", 3, "archived", 4, "ngFor", "ngForOf"], [1, "marathon-card"], [1, "mc-main"], [1, "mc-info"], [1, "mc-title-row"], [1, "mc-title"], [1, "statut-badge"], [1, "mc-meta"], ["class", "days-left", 4, "ngIf"], ["class", "mc-desc", 4, "ngIf"], [1, "mc-counter"], [1, "counter-num"], [1, "counter-label"], [1, "mc-actions"], [1, "btn-secondary", 3, "click"], ["class", "btn-secondary", 3, "click", 4, "ngIf"], [1, "btn-del", 3, "click"], ["class", "inscrits-panel", 4, "ngIf"], [1, "days-left"], [1, "mc-desc"], [1, "inscrits-panel"], [4, "ngIf"], [1, "inscrits-header"], [1, "inscrits-count"], [1, "btn-csv", 3, "click"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "rank"], [1, "email-cell"], [1, "progress-wrap"], [1, "progress-bar"], [1, "progress-pct"], ["class", "milestone", 3, "reached", 4, "ngFor", "ngForOf"], [1, "streak-cell"], ["title", "Streak actuel"], ["title", "Streak max", 1, "streak-max"], [1, "milestone"], [1, "form-card", 2, "margin-top", "1.5rem"], ["class", "marathon-card archived", 4, "ngFor", "ngForOf"], [1, "marathon-card", "archived"], [1, "statut-badge", "statut-ARCHIVE"]], template: function MarathonAdminComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Marathons Bibliques");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function MarathonAdminComponent_Template_button_click_4_listener() { return ctx.showForm = !ctx.showForm; });
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, MarathonAdminComponent_div_6_Template, 22, 1, "div", 4)(7, MarathonAdminComponent_div_7_Template, 37, 11, "div", 5)(8, MarathonAdminComponent_div_8_Template, 2, 0, "div", 6)(9, MarathonAdminComponent_div_9_Template, 2, 0, "div", 7)(10, MarathonAdminComponent_div_10_Template, 2, 1, "div", 8)(11, MarathonAdminComponent_div_11_Template, 7, 1, "div", 9);
        i0.ɵɵelementStart(12, "div", 10)(13, "h3");
        i0.ɵɵtext(14, "Attestations de fid\u00E9lit\u00E9 annuelles");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "p", 11);
        i0.ɵɵtext(16, " Envoie une attestation aux participants ayant compl\u00E9t\u00E9 100% de ");
        i0.ɵɵelementStart(17, "strong");
        i0.ɵɵtext(18, "tous");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(19, " les marathons lanc\u00E9s au cours d'une ann\u00E9e. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 12)(21, "div", 13)(22, "label");
        i0.ɵɵtext(23, "Ann\u00E9e");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "input", 14);
        i0.ɵɵtwoWayListener("ngModelChange", function MarathonAdminComponent_Template_input_ngModelChange_24_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.anneeAttestation, $event) || (ctx.anneeAttestation = $event); return $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(25, "button", 15);
        i0.ɵɵlistener("click", function MarathonAdminComponent_Template_button_click_25_listener() { return ctx.envoyerAttestations(); });
        i0.ɵɵtext(26);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(27, MarathonAdminComponent_p_27_Template, 2, 1, "p", 16);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", ctx.showForm ? "\u2715 Annuler" : "+ Nouveau marathon", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.firebaseError);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.showForm);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.marathons.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.marathons.length > 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.orphanedMarathons.length > 0);
        i0.ɵɵadvance(13);
        i0.ɵɵtwoWayProperty("ngModel", ctx.anneeAttestation);
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", ctx.sendingAttestations);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.sendingAttestations ? "Envoi..." : "Envoyer les attestations", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.attestationMsg);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DatePipe, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["@import '../../admin-shared.css';\n\n\n\n.firebase-warn[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  font-size: 13px;\n  color: #92400e;\n}\n.firebase-warn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 1.4rem; flex-shrink: 0; }\n.firebase-warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; font-size: 14px; margin-bottom: 4px; color: #78350f; }\n.firebase-warn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 4px 0 0; line-height: 1.5; }\n.firebase-warn[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] { background: #fef3c7; padding: 1px 4px; border-radius: 4px; font-size: 12px; }\n\n\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n\n\n.books-picker[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 16px;\n  background: #f8f9fc;\n  border-radius: 10px;\n  border: 1px solid #eef0f7;\n}\n\n.books-picker[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1f2e;\n  margin-bottom: 12px;\n}\n\n.books-cols[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.books-testament[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #4f7dff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n\n.book-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #3d4663;\n  padding: 2px 0;\n  cursor: pointer;\n}\n\n.book-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { cursor: pointer; }\n\n.books-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4f7dff;\n  font-weight: 600;\n  margin-top: 10px;\n}\n\n\n\n.marathons-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 16px; }\n\n.marathon-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n\n.marathon-card.archived[_ngcontent-%COMP%] { opacity: 0.7; }\n.marathon-card[_ngcontent-%COMP%]:hover     { border-color: #c7d2f0; }\n\n.mc-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px;\n  gap: 16px;\n}\n\n.mc-info[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n\n.mc-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n\n.mc-title[_ngcontent-%COMP%] { font-size: 16px; color: #1a1f2e; }\n\n.mc-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8b93a8;\n  margin-bottom: 4px;\n}\n\n.mc-desc[_ngcontent-%COMP%] { font-size: 13px; color: #5a6480; margin-top: 4px; }\n\n.days-left[_ngcontent-%COMP%] { color: #16a34a; font-weight: 600; }\n\n\n\n.mc-counter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 64px;\n  background: #f0f4ff;\n  border-radius: 10px;\n  padding: 12px 16px;\n}\n\n.counter-num[_ngcontent-%COMP%]   { font-size: 26px; font-weight: 700; color: #4f7dff; line-height: 1; }\n.counter-label[_ngcontent-%COMP%] { font-size: 11px; color: #8b93a8; margin-top: 2px; }\n\n\n\n.statut-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.statut-ACTIF[_ngcontent-%COMP%]    { background: #dcfce7; color: #16a34a; }\n.statut-PLANIFIE[_ngcontent-%COMP%] { background: #fef9c3; color: #ca8a04; }\n.statut-ARCHIVE[_ngcontent-%COMP%]  { background: #f4f6f9; color: #8b93a8; }\n\n\n\n.mc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f4f6f9;\n  background: #fafbff;\n}\n\n\n\n.inscrits-panel[_ngcontent-%COMP%] {\n  border-top: 2px solid #eef0f7;\n  padding: 16px 20px;\n}\n\n.progress-wrap[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 6px;\n  background: #eef0f7;\n  border-radius: 3px;\n  overflow: hidden;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #4f7dff;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n\n.progress-pct[_ngcontent-%COMP%] { font-size: 12px; color: #3d4663; vertical-align: middle; }\n\n.rank[_ngcontent-%COMP%] { font-size: 15px; color: #4f7dff; }\n\n.email-cell[_ngcontent-%COMP%] { font-size: 12px; color: #8b93a8; }\n\n.milestone[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  padding: 2px 5px;\n  border-radius: 4px;\n  margin-right: 3px;\n  background: #f4f6f9;\n  color: #aab0c4;\n}\n\n.milestone.reached[_ngcontent-%COMP%] { background: #dcfce7; color: #16a34a; font-weight: 700; }\n\n\n\n.inscrits-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.inscrits-count[_ngcontent-%COMP%] { font-size: 13px; color: #5a6480; font-weight: 600; }\n\n.btn-csv[_ngcontent-%COMP%] {\n  padding: 6px 14px; background: #1D546C; color: #fff; border: none;\n  border-radius: 7px; font-size: 12px; font-weight: 600; cursor: pointer;\n}\n.btn-csv[_ngcontent-%COMP%]:hover { opacity: 0.88; }\n\n\n\n.streak-cell[_ngcontent-%COMP%] { font-size: 12px; white-space: nowrap; }\n.streak-max[_ngcontent-%COMP%]  { color: #aab0c4; margin-left: 2px; }\n\n\n\n.attestation-card[_ngcontent-%COMP%] { margin-top: 32px; }\n\n.hint[_ngcontent-%COMP%] { font-size: 13px; color: #5a6480; margin-bottom: 12px; }\n\n.field.inline[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 0;\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarathonAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-marathon-admin', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"page\">\n\n  <!-- En-t\u00EAte -->\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Marathons Bibliques</h2>\n    <button class=\"btn-primary\" (click)=\"showForm = !showForm\">\n      {{ showForm ? '\u2715 Annuler' : '+ Nouveau marathon' }}\n    </button>\n  </div>\n\n  <!-- Banner Firebase non configur\u00E9 -->\n  <div class=\"firebase-warn\" *ngIf=\"firebaseError\">\n    <span>\u26A0\uFE0F</span>\n    <div>\n      <strong>Firebase non configur\u00E9</strong>\n      <p>{{ firebaseError }}</p>\n      <p>Dans <code>backend/.env</code>, renseignez <code>FIREBASE_PROJECT_ID</code>, <code>FIREBASE_CLIENT_EMAIL</code> et <code>FIREBASE_PRIVATE_KEY</code> avec les vraies valeurs depuis Firebase Console \u2192 Param\u00E8tres du projet \u2192 Comptes de service \u2192 G\u00E9n\u00E9rer une nouvelle cl\u00E9 priv\u00E9e.</p>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Formulaire de cr\u00E9ation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"form-card\" *ngIf=\"showForm\">\n    <h3>Cr\u00E9er un marathon</h3>\n\n    <div class=\"form-grid\">\n      <div class=\"field\">\n        <label>Titre</label>\n        <input type=\"text\" [(ngModel)]=\"form.titre\" placeholder=\"Ex: Marathon Bible compl\u00E8te 2026\" />\n      </div>\n      <div class=\"field\">\n        <label>Scope de lecture</label>\n        <select [(ngModel)]=\"form.scope\">\n          <option *ngFor=\"let s of scopeOptions\" [value]=\"s\">{{ scopeLabels[s] }}</option>\n        </select>\n      </div>\n      <div class=\"field\">\n        <label>Date de d\u00E9but</label>\n        <input type=\"date\" [(ngModel)]=\"form.dateDebut\" />\n      </div>\n      <div class=\"field\">\n        <label>Date de fin</label>\n        <input type=\"date\" [(ngModel)]=\"form.dateFin\" />\n      </div>\n    </div>\n\n    <div class=\"field\">\n      <label>Description (optionnel)</label>\n      <textarea [(ngModel)]=\"form.description\" placeholder=\"Pr\u00E9sentation du marathon...\"></textarea>\n    </div>\n\n    <!-- S\u00E9lecteur de livres (LIVRES_CHOISIS uniquement) -->\n    <div class=\"books-picker\" *ngIf=\"form.scope === 'LIVRES_CHOISIS'\">\n      <h4>S\u00E9lectionner les livres</h4>\n      <div class=\"books-cols\">\n        <div class=\"books-col\">\n          <p class=\"books-testament\">Ancien Testament</p>\n          <label class=\"book-check\" *ngFor=\"let b of atBooks\">\n            <input type=\"checkbox\" [checked]=\"isLivreSelected(b.id)\" (change)=\"toggleLivre(b.id)\" />\n            {{ b.nom }}\n          </label>\n        </div>\n        <div class=\"books-col\">\n          <p class=\"books-testament\">Nouveau Testament</p>\n          <label class=\"book-check\" *ngFor=\"let b of ntBooks\">\n            <input type=\"checkbox\" [checked]=\"isLivreSelected(b.id)\" (change)=\"toggleLivre(b.id)\" />\n            {{ b.nom }}\n          </label>\n        </div>\n      </div>\n      <p class=\"books-count\" *ngIf=\"form.livresChoisis.length\">\n        {{ form.livresChoisis.length }} livre(s) s\u00E9lectionn\u00E9(s)\n      </p>\n    </div>\n\n    <div class=\"field\">\n      <label>Flyer (optionnel)</label>\n      <input type=\"file\" accept=\"image/*\" (change)=\"onFlyerChange($event)\" />\n      <p class=\"hint\" style=\"margin-top:4px;\">Le flyer sera joint \u00E0 la newsletter envoy\u00E9e aux anciens participants.</p>\n    </div>\n\n    <div class=\"form-actions\">\n      <button class=\"btn-primary\" [disabled]=\"saving || !form.titre || !form.dateDebut || !form.dateFin\" (click)=\"submit()\">\n        {{ saving ? 'Cr\u00E9ation en cours...' : 'Cr\u00E9er le marathon' }}\n      </button>\n    </div>\n\n    <p class=\"success-msg\" *ngIf=\"successMsg\">\u2713 {{ successMsg }}</p>\n    <p class=\"error-msg\"   *ngIf=\"errorMsg\">{{ errorMsg }}</p>\n  </div>\n\n  <!-- \u2500\u2500 Liste des marathons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n  <div *ngIf=\"!loading && marathons.length === 0\" class=\"empty\">Aucun marathon cr\u00E9\u00E9.</div>\n\n  <div *ngIf=\"!loading && marathons.length > 0\" class=\"marathons-list\">\n    <div class=\"marathon-card\" *ngFor=\"let m of marathons\" [class.archived]=\"m.statut === 'ARCHIVE'\">\n\n      <!-- Ligne principale -->\n      <div class=\"mc-main\">\n        <div class=\"mc-info\">\n          <div class=\"mc-title-row\">\n            <strong class=\"mc-title\">{{ m.titre }}</strong>\n            <span class=\"statut-badge\" [class]=\"'statut-' + m.statut\">{{ statutLabels[m.statut] }}</span>\n          </div>\n          <p class=\"mc-meta\">\n            {{ scopeLabels[m.scope] }} &bull;\n            {{ m.dateDebut }} \u2192 {{ m.dateFin }} &bull;\n            {{ m.nbJours }} jours\n            <span *ngIf=\"m.statut === 'ACTIF'\" class=\"days-left\">({{ nbJoursRestants(m.dateFin) }}j restants)</span>\n          </p>\n          <p class=\"mc-desc\" *ngIf=\"m.description\">{{ m.description }}</p>\n        </div>\n\n        <div class=\"mc-counter\">\n          <span class=\"counter-num\">{{ m.nbInscrits }}</span>\n          <span class=\"counter-label\">inscrit(s)</span>\n        </div>\n      </div>\n\n      <!-- Actions -->\n      <div class=\"mc-actions\">\n        <button class=\"btn-secondary\" (click)=\"voirInscrits(m)\">\n          {{ inscritsMarathonId === m.id ? '\u25B2 Masquer' : '\u25BC Participants' }}\n        </button>\n        <button class=\"btn-secondary\" *ngIf=\"m.statut !== 'ARCHIVE'\" (click)=\"archiver(m.id)\">Archiver</button>\n        <button class=\"btn-secondary\" *ngIf=\"m.statut === 'ARCHIVE'\"  (click)=\"reactiver(m.id)\">R\u00E9activer</button>\n        <button class=\"btn-del\"                                        (click)=\"supprimer(m.id)\">\u2715</button>\n      </div>\n\n      <!-- Panneau inscrits (d\u00E9pliable) -->\n      <div class=\"inscrits-panel\" *ngIf=\"inscritsMarathonId === m.id\">\n        <div *ngIf=\"loadingInscrits\" class=\"loading\">Chargement des participants...</div>\n        <div *ngIf=\"!loadingInscrits && inscrits.length === 0\" class=\"empty\">Aucun inscrit pour l'instant.</div>\n\n        <div *ngIf=\"!loadingInscrits && inscrits.length > 0\">\n          <div class=\"inscrits-header\">\n            <span class=\"inscrits-count\">{{ inscrits.length }} participant(s)</span>\n            <button class=\"btn-csv\" (click)=\"exportCSV(m)\">\u2B07 Exporter CSV</button>\n          </div>\n          <div class=\"table-wrap\">\n            <table>\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Participant</th>\n                  <th>Email</th>\n                  <th>Progression</th>\n                  <th>Jalons</th>\n                  <th>Streak</th>\n                  <th>Inscription</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let i of inscrits\">\n                  <td><strong class=\"rank\">{{ i.rank }}</strong></td>\n                  <td>{{ i.fullName }}</td>\n                  <td class=\"email-cell\">{{ i.email }}</td>\n                  <td>\n                    <div class=\"progress-wrap\">\n                      <div class=\"progress-bar\" [style.width.%]=\"i.progressPercent\"></div>\n                    </div>\n                    <span class=\"progress-pct\">{{ i.progressPercent }}%</span>\n                  </td>\n                  <td>\n                    <span class=\"milestone\" *ngFor=\"let ms of [25,50,75,100]\"\n                          [class.reached]=\"i.milestonesReached?.includes(ms)\">\n                      {{ ms }}%\n                    </span>\n                  </td>\n                  <td class=\"streak-cell\">\n                    <span title=\"Streak actuel\">\uD83D\uDD25 {{ i.currentStreak ?? 0 }}j</span>\n                    <span class=\"streak-max\" title=\"Streak max\">/ {{ i.maxStreak ?? 0 }}</span>\n                  </td>\n                  <td>{{ i.createdAt?.toDate ? (i.createdAt.toDate() | date:'dd/MM/yy') : '\u2014' }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Marathons supprim\u00E9s (historique orphelin) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div *ngIf=\"orphanedMarathons.length > 0\" class=\"form-card\" style=\"margin-top:1.5rem\">\n    <h3>Historique \u2014 marathons supprim\u00E9s</h3>\n    <p class=\"hint\">Ces marathons ont \u00E9t\u00E9 supprim\u00E9s mais des participants y sont encore inscrits.</p>\n    <div class=\"marathons-list\">\n      <div class=\"marathon-card archived\" *ngFor=\"let m of orphanedMarathons\">\n        <div class=\"mc-main\">\n          <div class=\"mc-info\">\n            <div class=\"mc-title-row\">\n              <strong class=\"mc-title\">{{ m.titre }}</strong>\n              <span class=\"statut-badge statut-ARCHIVE\">Supprim\u00E9</span>\n            </div>\n            <p class=\"mc-meta\">ID : {{ m.id }}</p>\n          </div>\n          <div class=\"mc-counter\">\n            <span class=\"counter-num\">{{ m.nbInscrits }}</span>\n            <span class=\"counter-label\">inscrit(s)</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Attestations annuelles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"form-card attestation-card\">\n    <h3>Attestations de fid\u00E9lit\u00E9 annuelles</h3>\n    <p class=\"hint\">\n      Envoie une attestation aux participants ayant compl\u00E9t\u00E9 100% de <strong>tous</strong>\n      les marathons lanc\u00E9s au cours d'une ann\u00E9e.\n    </p>\n    <div class=\"form-actions\">\n      <div class=\"field inline\">\n        <label>Ann\u00E9e</label>\n        <input type=\"number\" [(ngModel)]=\"anneeAttestation\" style=\"width:100px\" />\n      </div>\n      <button class=\"btn-primary\" [disabled]=\"sendingAttestations\" (click)=\"envoyerAttestations()\">\n        {{ sendingAttestations ? 'Envoi...' : 'Envoyer les attestations' }}\n      </button>\n    </div>\n    <p class=\"success-msg\" *ngIf=\"attestationMsg\">{{ attestationMsg }}</p>\n  </div>\n\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n/* \u2500\u2500 Banner Firebase \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.firebase-warn {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  background: #fff7ed;\n  border: 1px solid #fed7aa;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  font-size: 13px;\n  color: #92400e;\n}\n.firebase-warn span { font-size: 1.4rem; flex-shrink: 0; }\n.firebase-warn strong { display: block; font-size: 14px; margin-bottom: 4px; color: #78350f; }\n.firebase-warn p { margin: 4px 0 0; line-height: 1.5; }\n.firebase-warn code { background: #fef3c7; padding: 1px 4px; border-radius: 4px; font-size: 12px; }\n\n/* \u2500\u2500 Grille formulaire \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n/* \u2500\u2500 S\u00E9lecteur de livres \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.books-picker {\n  margin-top: 16px;\n  padding: 16px;\n  background: #f8f9fc;\n  border-radius: 10px;\n  border: 1px solid #eef0f7;\n}\n\n.books-picker h4 {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1f2e;\n  margin-bottom: 12px;\n}\n\n.books-cols {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.books-testament {\n  font-size: 11px;\n  font-weight: 700;\n  color: #4f7dff;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n\n.book-check {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #3d4663;\n  padding: 2px 0;\n  cursor: pointer;\n}\n\n.book-check input { cursor: pointer; }\n\n.books-count {\n  font-size: 12px;\n  color: #4f7dff;\n  font-weight: 600;\n  margin-top: 10px;\n}\n\n/* \u2500\u2500 Liste marathons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.marathons-list { display: flex; flex-direction: column; gap: 16px; }\n\n.marathon-card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #eef0f7;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n\n.marathon-card.archived { opacity: 0.7; }\n.marathon-card:hover     { border-color: #c7d2f0; }\n\n.mc-main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 20px;\n  gap: 16px;\n}\n\n.mc-info { flex: 1; min-width: 0; }\n\n.mc-title-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n\n.mc-title { font-size: 16px; color: #1a1f2e; }\n\n.mc-meta {\n  font-size: 12px;\n  color: #8b93a8;\n  margin-bottom: 4px;\n}\n\n.mc-desc { font-size: 13px; color: #5a6480; margin-top: 4px; }\n\n.days-left { color: #16a34a; font-weight: 600; }\n\n/* \u2500\u2500 Compteur inscrits \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.mc-counter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 64px;\n  background: #f0f4ff;\n  border-radius: 10px;\n  padding: 12px 16px;\n}\n\n.counter-num   { font-size: 26px; font-weight: 700; color: #4f7dff; line-height: 1; }\n.counter-label { font-size: 11px; color: #8b93a8; margin-top: 2px; }\n\n/* \u2500\u2500 Badges statut \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.statut-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.statut-ACTIF    { background: #dcfce7; color: #16a34a; }\n.statut-PLANIFIE { background: #fef9c3; color: #ca8a04; }\n.statut-ARCHIVE  { background: #f4f6f9; color: #8b93a8; }\n\n/* \u2500\u2500 Actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.mc-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f4f6f9;\n  background: #fafbff;\n}\n\n/* \u2500\u2500 Panneau inscrits \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.inscrits-panel {\n  border-top: 2px solid #eef0f7;\n  padding: 16px 20px;\n}\n\n.progress-wrap {\n  width: 100px;\n  height: 6px;\n  background: #eef0f7;\n  border-radius: 3px;\n  overflow: hidden;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n\n.progress-bar {\n  height: 100%;\n  background: #4f7dff;\n  border-radius: 3px;\n  transition: width 0.3s;\n}\n\n.progress-pct { font-size: 12px; color: #3d4663; vertical-align: middle; }\n\n.rank { font-size: 15px; color: #4f7dff; }\n\n.email-cell { font-size: 12px; color: #8b93a8; }\n\n.milestone {\n  display: inline-block;\n  font-size: 10px;\n  padding: 2px 5px;\n  border-radius: 4px;\n  margin-right: 3px;\n  background: #f4f6f9;\n  color: #aab0c4;\n}\n\n.milestone.reached { background: #dcfce7; color: #16a34a; font-weight: 700; }\n\n/* \u2500\u2500 Inscrits header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.inscrits-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.inscrits-count { font-size: 13px; color: #5a6480; font-weight: 600; }\n\n.btn-csv {\n  padding: 6px 14px; background: #1D546C; color: #fff; border: none;\n  border-radius: 7px; font-size: 12px; font-weight: 600; cursor: pointer;\n}\n.btn-csv:hover { opacity: 0.88; }\n\n/* \u2500\u2500 Streak \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.streak-cell { font-size: 12px; white-space: nowrap; }\n.streak-max  { color: #aab0c4; margin-left: 2px; }\n\n/* \u2500\u2500 Attestations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.attestation-card { margin-top: 32px; }\n\n.hint { font-size: 13px; color: #5a6480; margin-bottom: 12px; }\n\n.field.inline {\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 0;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MarathonAdminComponent, { className: "MarathonAdminComponent", filePath: "app\\admin\\pages\\marathon\\marathon-admin.component.ts", lineNumber: 65 }); })();
//# sourceMappingURL=marathon-admin.component.js.map