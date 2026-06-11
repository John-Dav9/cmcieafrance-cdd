import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { getDepartement } from '../departements.config';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function DepartementDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "p");
    i0.ɵɵtext(2, "D\u00E9partement introuvable.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 3);
    i0.ɵɵlistener("click", function DepartementDetailComponent_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backToDepts()); });
    i0.ɵɵtext(4, "\u2190 Voir tous les d\u00E9partements");
    i0.ɵɵelementEnd()();
} }
function DepartementDetailComponent_ng_container_1_li_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 32)(1, "span", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 34);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", ctx_r1.dept.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r5 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r4);
} }
function DepartementDetailComponent_ng_container_1_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "span", 36);
    i0.ɵɵtext(2, "\u2705");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Ta demande a bien \u00E9t\u00E9 re\u00E7ue !");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Un email de confirmation t'a \u00E9t\u00E9 envoy\u00E9. Notre \u00E9quipe te contactera tr\u00E8s prochainement pour t'accueillir dans le ");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, ".");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 37);
    i0.ɵɵlistener("click", function DepartementDetailComponent_ng_container_1_div_42_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.backToDepts()); });
    i0.ɵɵtext(11, "\u2190 Voir tous les d\u00E9partements");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.dept.name);
} }
function DepartementDetailComponent_ng_container_1_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "span", 14);
    i0.ɵɵtext(2, "Tu es pr\u00EAt(e) ?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2", 15);
    i0.ɵɵtext(4, "Rejoindre ce d\u00E9partement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 16);
    i0.ɵɵtext(6, "Remplis le formulaire ci-dessous et notre \u00E9quipe te recontactera pour t'accueillir chaleureusement.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 39);
    i0.ɵɵlistener("click", function DepartementDetailComponent_ng_container_1_div_43_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openJoin()); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", ctx_r1.dept.color);
    i0.ɵɵadvance(6);
    i0.ɵɵstyleProp("background", ctx_r1.dept.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.dept.emoji, " Je veux rejoindre le ", ctx_r1.dept.name, " \u2192 ");
} }
function DepartementDetailComponent_ng_container_1_div_44_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 56);
    i0.ɵɵtext(2, "Informations sur l'enfant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 44)(4, "label", 45)(5, "span", 46);
    i0.ɵɵtext(6, "Pr\u00E9nom de l'enfant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 57);
    i0.ɵɵtwoWayListener("ngModelChange", function DepartementDetailComponent_ng_container_1_div_44_ng_container_25_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.form.enfantPrenom, $event) || (ctx_r1.form.enfantPrenom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label", 45)(9, "span", 46);
    i0.ɵɵtext(10, "\u00C2ge de l'enfant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 58);
    i0.ɵɵtwoWayListener("ngModelChange", function DepartementDetailComponent_ng_container_1_div_44_ng_container_25_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.form.enfantAge, $event) || (ctx_r1.form.enfantAge = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", ctx_r1.dept.color);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.enfantPrenom);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.enfantAge);
} }
function DepartementDetailComponent_ng_container_1_div_44_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 45)(2, "span", 46);
    i0.ɵɵtext(3, "Universit\u00E9 / \u00C9cole");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function DepartementDetailComponent_ng_container_1_div_44_ng_container_26_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.form.universite, $event) || (ctx_r1.form.universite = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.universite);
} }
function DepartementDetailComponent_ng_container_1_div_44_ng_container_27_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", v_r12);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(v_r12);
} }
function DepartementDetailComponent_ng_container_1_div_44_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 45)(2, "span", 46);
    i0.ɵɵtext(3, "Type de voix");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 60);
    i0.ɵɵtwoWayListener("ngModelChange", function DepartementDetailComponent_ng_container_1_div_44_ng_container_27_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.form.typeVoix, $event) || (ctx_r1.form.typeVoix = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(5, "option", 61);
    i0.ɵɵtext(6, "S\u00E9lectionner...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, DepartementDetailComponent_ng_container_1_div_44_ng_container_27_option_7_Template, 2, 2, "option", 62);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.typeVoix);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.typesVoix);
} }
function DepartementDetailComponent_ng_container_1_div_44_p_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorMsg);
} }
function DepartementDetailComponent_ng_container_1_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41)(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 42);
    i0.ɵɵlistener("click", function DepartementDetailComponent_ng_container_1_div_44_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeJoin()); });
    i0.ɵɵtext(5, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "form", 43);
    i0.ɵɵlistener("ngSubmit", function DepartementDetailComponent_ng_container_1_div_44_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(7, "div", 44)(8, "label", 45)(9, "span", 46);
    i0.ɵɵtext(10, "Pr\u00E9nom *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 47);
    i0.ɵɵtwoWayListener("ngModelChange", function DepartementDetailComponent_ng_container_1_div_44_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.form.prenom, $event) || (ctx_r1.form.prenom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label", 45)(13, "span", 46);
    i0.ɵɵtext(14, "Nom *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function DepartementDetailComponent_ng_container_1_div_44_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.form.nom, $event) || (ctx_r1.form.nom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 44)(17, "label", 45)(18, "span", 46);
    i0.ɵɵtext(19, "Email *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 49);
    i0.ɵɵtwoWayListener("ngModelChange", function DepartementDetailComponent_ng_container_1_div_44_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label", 45)(22, "span", 46);
    i0.ɵɵtext(23, "T\u00E9l\u00E9phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function DepartementDetailComponent_ng_container_1_div_44_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.form.telephone, $event) || (ctx_r1.form.telephone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(25, DepartementDetailComponent_ng_container_1_div_44_ng_container_25_Template, 12, 4, "ng-container", 1)(26, DepartementDetailComponent_ng_container_1_div_44_ng_container_26_Template, 5, 1, "ng-container", 1)(27, DepartementDetailComponent_ng_container_1_div_44_ng_container_27_Template, 8, 2, "ng-container", 1)(28, DepartementDetailComponent_ng_container_1_div_44_p_28_Template, 2, 1, "p", 51);
    i0.ɵɵelementStart(29, "div", 52)(30, "button", 53);
    i0.ɵɵlistener("click", function DepartementDetailComponent_ng_container_1_div_44_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeJoin()); });
    i0.ɵɵtext(31, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "button", 54);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "p", 55);
    i0.ɵɵtext(35, "Aucune information n'est partag\u00E9e publiquement. Un email de confirmation te sera envoy\u00E9.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("border-color", ctx_r1.dept.color);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", "linear-gradient(135deg, #1A3D64, " + ctx_r1.dept.color + ")");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.dept.emoji, " ", ctx_r1.dept.name, "");
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.prenom);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.nom);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.email);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.telephone);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dept.formExtras === "enfants");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dept.formExtras === "etudiants");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dept.formExtras === "chorale");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.errorMsg);
    i0.ɵɵadvance(4);
    i0.ɵɵstyleProp("background", ctx_r1.dept.color);
    i0.ɵɵproperty("disabled", ctx_r1.submitting);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.submitting ? "Envoi en cours\u2026" : "Confirmer ma demande", " ");
} }
function DepartementDetailComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 4)(2, "div", 5)(3, "button", 6);
    i0.ɵɵlistener("click", function DepartementDetailComponent_ng_container_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backToDepts()); });
    i0.ɵɵtext(4, "\u2190 Tous les d\u00E9partements");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h1", 8);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 9);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "section", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "span", 14);
    i0.ɵɵtext(16, "\u00C0 propos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h2", 15);
    i0.ɵɵtext(18, "Qui sommes-nous ?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 16);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 17)(22, "p", 18);
    i0.ɵɵtext(23, "\uD83C\uDFAF Notre vision");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p", 19);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(26, "section", 20)(27, "div", 11)(28, "span", 14);
    i0.ɵɵtext(29, "Ce que nous faisons");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "h2", 15);
    i0.ɵɵtext(31, "Nos activit\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "ul", 21);
    i0.ɵɵtemplate(33, DepartementDetailComponent_ng_container_1_li_33_Template, 5, 4, "li", 22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "section", 23)(35, "div", 24)(36, "p", 25);
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p", 26);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "section", 27)(41, "div", 28);
    i0.ɵɵtemplate(42, DepartementDetailComponent_ng_container_1_div_42_Template, 12, 1, "div", 29)(43, DepartementDetailComponent_ng_container_1_div_43_Template, 9, 6, "div", 30)(44, DepartementDetailComponent_ng_container_1_div_44_Template, 36, 18, "div", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", "linear-gradient(135deg, #1A3D64 0%, " + ctx_r1.dept.color + " 100%)");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.dept.emoji);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.dept.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.dept.tagline);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("color", ctx_r1.dept.color);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.dept.description);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("border-color", ctx_r1.dept.color)("background", ctx_r1.dept.colorLight);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", ctx_r1.dept.color);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.dept.vision);
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("color", ctx_r1.dept.color);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.dept.activites);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", "linear-gradient(135deg, #1A3D64, " + ctx_r1.dept.color + ")");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.dept.verset);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u2014 ", ctx_r1.dept.versetRef, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.success);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.joinOpen && !ctx_r1.success);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.joinOpen && !ctx_r1.success);
} }
export class DepartementDetailComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.dept = null;
        this.notFound = false;
        // Formulaire
        this.joinOpen = false;
        this.submitting = false;
        this.success = false;
        this.errorMsg = '';
        this.form = {
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            universite: '',
            enfantPrenom: '',
            enfantAge: '',
            typeVoix: '',
        };
        this.typesVoix = ['Soprano', 'Mezzo-soprano', 'Alto', 'Ténor', 'Baryton', 'Basse'];
        this.base = environment.apiBase;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var _a, _b;
            const slug = (_a = params.get('slug')) !== null && _a !== void 0 ? _a : '';
            this.dept = (_b = getDepartement(slug)) !== null && _b !== void 0 ? _b : null;
            if (!this.dept)
                this.notFound = true;
            this.resetForm();
        });
    }
    openJoin() {
        this.joinOpen = true;
        this.success = false;
        this.errorMsg = '';
        setTimeout(() => {
            var _a;
            (_a = document.getElementById('join-form')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }
    closeJoin() { this.joinOpen = false; }
    submit() {
        if (!this.dept)
            return;
        const nom = this.form.nom.trim();
        const prenom = this.form.prenom.trim();
        const email = this.form.email.trim().toLowerCase();
        if (!nom || !prenom) {
            this.errorMsg = 'Le nom et le prénom sont requis.';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.errorMsg = 'Email invalide.';
            return;
        }
        this.submitting = true;
        this.errorMsg = '';
        const payload = {
            type: 'DEPARTEMENT',
            departement: this.dept.name,
            nom,
            prenom,
            email,
            telephone: this.form.telephone.trim() || undefined,
        };
        if (this.dept.formExtras === 'enfants') {
            payload.enfantPrenom = this.form.enfantPrenom.trim() || undefined;
            payload.enfantAge = this.form.enfantAge.trim() || undefined;
        }
        if (this.dept.formExtras === 'etudiants') {
            payload.universite = this.form.universite.trim() || undefined;
        }
        if (this.dept.formExtras === 'chorale') {
            payload.typeVoix = this.form.typeVoix || undefined;
        }
        this.http.post(`${this.base}/inscriptions`, payload).subscribe({
            next: () => {
                this.submitting = false;
                this.success = true;
                this.joinOpen = false;
                this.resetForm();
            },
            error: (err) => {
                var _a, _b;
                this.submitting = false;
                this.errorMsg = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Une erreur est survenue. Réessaie.';
            },
        });
    }
    resetForm() {
        this.form = { nom: '', prenom: '', email: '', telephone: '', universite: '', enfantPrenom: '', enfantAge: '', typeVoix: '' };
        this.success = false;
        this.errorMsg = '';
    }
    backToDepts() { this.router.navigate(['/departements']); }
}
DepartementDetailComponent.ɵfac = function DepartementDetailComponent_Factory(t) { return new (t || DepartementDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.HttpClient)); };
DepartementDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DepartementDetailComponent, selectors: [["app-departement-detail"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 2, consts: [["class", "dd-notfound", 4, "ngIf"], [4, "ngIf"], [1, "dd-notfound"], [1, "dd-back-btn", 3, "click"], [1, "dd-hero"], [1, "dd-hero-inner"], [1, "dd-back", 3, "click"], [1, "dd-hero-emoji"], [1, "dd-hero-title"], [1, "dd-hero-tagline"], [1, "dd-section"], [1, "dd-container"], [1, "dd-intro-grid"], [1, "dd-intro-text"], [1, "dd-label"], [1, "dd-section-title"], [1, "dd-body"], [1, "dd-vision-card"], [1, "dd-vision-label"], [1, "dd-vision-text"], [1, "dd-section", "dd-section--alt"], [1, "dd-activities"], ["class", "dd-activity", 4, "ngFor", "ngForOf"], [1, "dd-verse-section"], [1, "dd-container", "dd-verse-inner"], [1, "dd-verse-text"], [1, "dd-verse-ref"], ["id", "join-form", 1, "dd-section"], [1, "dd-container", "dd-join-container"], ["class", "dd-success", 4, "ngIf"], ["class", "dd-join-cta", 4, "ngIf"], ["class", "dd-form-card", 3, "border-color", 4, "ngIf"], [1, "dd-activity"], [1, "dd-activity-num"], [1, "dd-activity-text"], [1, "dd-success"], [1, "dd-success-icon"], [1, "dd-btn-outline", 3, "click"], [1, "dd-join-cta"], [1, "dd-btn-primary", 3, "click"], [1, "dd-form-card"], [1, "dd-form-header"], ["aria-label", "Fermer", 1, "dd-form-close", 3, "click"], [1, "dd-form", 3, "ngSubmit"], [1, "dd-form-row"], [1, "dd-field"], [1, "dd-field-label"], ["type", "text", "name", "prenom", "placeholder", "Jean", "required", "", 1, "dd-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "nom", "placeholder", "Dupont", "required", "", 1, "dd-input", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "exemple@mail.com", "required", "", 1, "dd-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "telephone", "placeholder", "+33 6...", 1, "dd-input", 3, "ngModelChange", "ngModel"], ["class", "dd-error", 4, "ngIf"], [1, "dd-form-actions"], ["type", "button", 1, "dd-btn-outline", 3, "click"], ["type", "submit", 1, "dd-btn-primary", 3, "disabled"], [1, "dd-form-note"], [1, "dd-extras-title"], ["type", "text", "name", "enfantPrenom", "placeholder", "L\u00E9a", 1, "dd-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "enfantAge", "placeholder", "7 ans", 1, "dd-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "universite", "placeholder", "Universit\u00E9 Paris-Sorbonne", 1, "dd-input", 3, "ngModelChange", "ngModel"], ["name", "typeVoix", 1, "dd-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "dd-error"]], template: function DepartementDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DepartementDetailComponent_div_0_Template, 5, 0, "div", 0)(1, DepartementDetailComponent_ng_container_1_Template, 45, 25, "ng-container", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.notFound);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.dept);
    } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, FormsModule, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm, RouterModule], styles: ["\n\n.dd-hero[_ngcontent-%COMP%] {\n  padding: 72px 24px 60px;\n  text-align: center;\n}\n\n.dd-hero-inner[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n.dd-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255,255,255,0.15);\n  color: #fff;\n  border: 1px solid rgba(255,255,255,0.35);\n  border-radius: 20px;\n  padding: 6px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 28px;\n  transition: background 0.2s;\n}\n\n.dd-back[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.25); }\n\n.dd-hero-emoji[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n\n.dd-hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 5vw, 48px);\n  font-weight: 800;\n  color: #fff;\n  margin: 0 0 14px;\n  line-height: 1.15;\n}\n\n.dd-hero-tagline[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: rgba(255,255,255,0.85);\n  font-style: italic;\n  margin: 0;\n  line-height: 1.6;\n}\n\n\n\n.dd-section[_ngcontent-%COMP%] {\n  padding: 64px 24px;\n}\n\n.dd-section--alt[_ngcontent-%COMP%] {\n  background: #f4f7fb;\n}\n\n.dd-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.dd-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n.dd-section-title[_ngcontent-%COMP%] {\n  font-size: clamp(22px, 4vw, 34px);\n  font-weight: 800;\n  color: #1A3D64;\n  margin: 0 0 20px;\n  line-height: 1.2;\n}\n\n.dd-body[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #444;\n  line-height: 1.75;\n  margin: 0;\n}\n\n\n\n.dd-intro-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 40px;\n  align-items: start;\n}\n\n.dd-vision-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 2px solid;\n  padding: 28px 24px;\n}\n\n.dd-vision-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 12px;\n}\n\n.dd-vision-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #333;\n  line-height: 1.7;\n  margin: 0;\n  font-style: italic;\n}\n\n\n\n.dd-activities[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.dd-activity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n}\n\n.dd-activity-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dd-activity-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #333;\n  line-height: 1.5;\n}\n\n\n\n.dd-verse-section[_ngcontent-%COMP%] {\n  padding: 60px 24px;\n  text-align: center;\n}\n\n.dd-verse-inner[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.dd-verse-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n  font-style: italic;\n  line-height: 1.75;\n  margin: 0 0 12px;\n}\n\n.dd-verse-ref[_ngcontent-%COMP%] {\n  color: rgba(255,255,255,0.7);\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n\n\n\n.dd-join-container[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n\n.dd-join-cta[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n\n.dd-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 24px;\n  background: #f0fdf4;\n  border-radius: 16px;\n  border: 2px solid #86efac;\n}\n\n.dd-success-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 16px;\n}\n\n.dd-success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #166534;\n  margin: 0 0 12px;\n}\n\n.dd-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #15803d;\n  font-size: 15px;\n  line-height: 1.7;\n  margin: 0 0 24px;\n}\n\n\n\n.dd-form-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 2px solid;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.1);\n}\n\n.dd-form-header[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.dd-form-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.dd-form-close[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,0.2);\n  border: none;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n\n.dd-form-close[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.35); }\n\n.dd-form[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.dd-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.dd-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.dd-field-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #444;\n}\n\n.dd-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #222;\n  background: #fafafa;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.dd-input[_ngcontent-%COMP%]:focus {\n  border-color: #1A3D64;\n  background: #fff;\n}\n\n.dd-extras-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #eee;\n}\n\n.dd-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 13px;\n  margin: 0;\n  padding: 10px 14px;\n  background: #fef2f2;\n  border-radius: 8px;\n  border: 1px solid #fca5a5;\n}\n\n.dd-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n\n.dd-form-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin: 0;\n  text-align: center;\n}\n\n\n\n.dd-btn-primary[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border: none;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.2s;\n}\n\n.dd-btn-primary[_ngcontent-%COMP%]:hover:not([disabled]) {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n\n.dd-btn-primary[disabled][_ngcontent-%COMP%] { opacity: 0.6; cursor: not-allowed; }\n\n.dd-btn-outline[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border: 2px solid #1A3D64;\n  border-radius: 30px;\n  color: #1A3D64;\n  background: transparent;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n\n.dd-btn-outline[_ngcontent-%COMP%]:hover {\n  background: #1A3D64;\n  color: #fff;\n}\n\n\n\n.dd-notfound[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n}\n\n.dd-notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #555;\n  margin-bottom: 20px;\n}\n\n.dd-back-btn[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background: #1A3D64;\n  color: #fff;\n  border: none;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n\n\n@media (max-width: 760px) {\n  .dd-intro-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .dd-form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .dd-form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n\n  .dd-btn-primary[_ngcontent-%COMP%], .dd-btn-outline[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DepartementDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-departement-detail', standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: "<!-- \u2500\u2500 D\u00E9partement introuvable \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<div *ngIf=\"notFound\" class=\"dd-notfound\">\n  <p>D\u00E9partement introuvable.</p>\n  <button (click)=\"backToDepts()\" class=\"dd-back-btn\">\u2190 Voir tous les d\u00E9partements</button>\n</div>\n\n<!-- \u2500\u2500 Contenu principal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<ng-container *ngIf=\"dept\">\n\n  <!-- \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class=\"dd-hero\" [style.background]=\"'linear-gradient(135deg, #1A3D64 0%, ' + dept.color + ' 100%)'\">\n    <div class=\"dd-hero-inner\">\n      <button class=\"dd-back\" (click)=\"backToDepts()\">\u2190 Tous les d\u00E9partements</button>\n      <span class=\"dd-hero-emoji\">{{ dept.emoji }}</span>\n      <h1 class=\"dd-hero-title\">{{ dept.name }}</h1>\n      <p class=\"dd-hero-tagline\">{{ dept.tagline }}</p>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 Description \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class=\"dd-section\">\n    <div class=\"dd-container\">\n      <div class=\"dd-intro-grid\">\n        <div class=\"dd-intro-text\">\n          <span class=\"dd-label\" [style.color]=\"dept.color\">\u00C0 propos</span>\n          <h2 class=\"dd-section-title\">Qui sommes-nous ?</h2>\n          <p class=\"dd-body\">{{ dept.description }}</p>\n        </div>\n        <div class=\"dd-vision-card\" [style.border-color]=\"dept.color\" [style.background]=\"dept.colorLight\">\n          <p class=\"dd-vision-label\" [style.color]=\"dept.color\">\uD83C\uDFAF Notre vision</p>\n          <p class=\"dd-vision-text\">{{ dept.vision }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 Activit\u00E9s \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class=\"dd-section dd-section--alt\">\n    <div class=\"dd-container\">\n      <span class=\"dd-label\" [style.color]=\"dept.color\">Ce que nous faisons</span>\n      <h2 class=\"dd-section-title\">Nos activit\u00E9s</h2>\n      <ul class=\"dd-activities\">\n        <li *ngFor=\"let a of dept.activites; let i = index\" class=\"dd-activity\">\n          <span class=\"dd-activity-num\" [style.background]=\"dept.color\">{{ i + 1 }}</span>\n          <span class=\"dd-activity-text\">{{ a }}</span>\n        </li>\n      </ul>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 Verset \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class=\"dd-verse-section\" [style.background]=\"'linear-gradient(135deg, #1A3D64, ' + dept.color + ')'\">\n    <div class=\"dd-container dd-verse-inner\">\n      <p class=\"dd-verse-text\">{{ dept.verset }}</p>\n      <p class=\"dd-verse-ref\">\u2014 {{ dept.versetRef }}</p>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 Rejoindre \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <section class=\"dd-section\" id=\"join-form\">\n    <div class=\"dd-container dd-join-container\">\n\n      <!-- Succ\u00E8s -->\n      <div *ngIf=\"success\" class=\"dd-success\">\n        <span class=\"dd-success-icon\">\u2705</span>\n        <h3>Ta demande a bien \u00E9t\u00E9 re\u00E7ue !</h3>\n        <p>Un email de confirmation t'a \u00E9t\u00E9 envoy\u00E9. Notre \u00E9quipe te contactera tr\u00E8s prochainement pour t'accueillir dans le <strong>{{ dept.name }}</strong>.</p>\n        <button class=\"dd-btn-outline\" (click)=\"backToDepts()\">\u2190 Voir tous les d\u00E9partements</button>\n      </div>\n\n      <!-- Bouton d'ouverture du formulaire -->\n      <div *ngIf=\"!joinOpen && !success\" class=\"dd-join-cta\">\n        <span class=\"dd-label\" [style.color]=\"dept.color\">Tu es pr\u00EAt(e) ?</span>\n        <h2 class=\"dd-section-title\">Rejoindre ce d\u00E9partement</h2>\n        <p class=\"dd-body\">Remplis le formulaire ci-dessous et notre \u00E9quipe te recontactera pour t'accueillir chaleureusement.</p>\n        <button class=\"dd-btn-primary\" [style.background]=\"dept.color\" (click)=\"openJoin()\">\n          {{ dept.emoji }} Je veux rejoindre le {{ dept.name }} \u2192\n        </button>\n      </div>\n\n      <!-- Formulaire -->\n      <div *ngIf=\"joinOpen && !success\" class=\"dd-form-card\" [style.border-color]=\"dept.color\">\n        <div class=\"dd-form-header\" [style.background]=\"'linear-gradient(135deg, #1A3D64, ' + dept.color + ')'\">\n          <h3>{{ dept.emoji }} {{ dept.name }}</h3>\n          <button class=\"dd-form-close\" (click)=\"closeJoin()\" aria-label=\"Fermer\">\u2715</button>\n        </div>\n\n        <form (ngSubmit)=\"submit()\" class=\"dd-form\">\n\n          <!-- Champs de base -->\n          <div class=\"dd-form-row\">\n            <label class=\"dd-field\">\n              <span class=\"dd-field-label\">Pr\u00E9nom *</span>\n              <input class=\"dd-input\" type=\"text\" [(ngModel)]=\"form.prenom\" name=\"prenom\" placeholder=\"Jean\" required />\n            </label>\n            <label class=\"dd-field\">\n              <span class=\"dd-field-label\">Nom *</span>\n              <input class=\"dd-input\" type=\"text\" [(ngModel)]=\"form.nom\" name=\"nom\" placeholder=\"Dupont\" required />\n            </label>\n          </div>\n          <div class=\"dd-form-row\">\n            <label class=\"dd-field\">\n              <span class=\"dd-field-label\">Email *</span>\n              <input class=\"dd-input\" type=\"email\" [(ngModel)]=\"form.email\" name=\"email\" placeholder=\"exemple@mail.com\" required />\n            </label>\n            <label class=\"dd-field\">\n              <span class=\"dd-field-label\">T\u00E9l\u00E9phone</span>\n              <input class=\"dd-input\" type=\"tel\" [(ngModel)]=\"form.telephone\" name=\"telephone\" placeholder=\"+33 6...\" />\n            </label>\n          </div>\n\n          <!-- Extras : Enfants -->\n          <ng-container *ngIf=\"dept.formExtras === 'enfants'\">\n            <div class=\"dd-extras-title\" [style.color]=\"dept.color\">Informations sur l'enfant</div>\n            <div class=\"dd-form-row\">\n              <label class=\"dd-field\">\n                <span class=\"dd-field-label\">Pr\u00E9nom de l'enfant</span>\n                <input class=\"dd-input\" type=\"text\" [(ngModel)]=\"form.enfantPrenom\" name=\"enfantPrenom\" placeholder=\"L\u00E9a\" />\n              </label>\n              <label class=\"dd-field\">\n                <span class=\"dd-field-label\">\u00C2ge de l'enfant</span>\n                <input class=\"dd-input\" type=\"text\" [(ngModel)]=\"form.enfantAge\" name=\"enfantAge\" placeholder=\"7 ans\" />\n              </label>\n            </div>\n          </ng-container>\n\n          <!-- Extras : \u00C9tudiants -->\n          <ng-container *ngIf=\"dept.formExtras === 'etudiants'\">\n            <label class=\"dd-field\">\n              <span class=\"dd-field-label\">Universit\u00E9 / \u00C9cole</span>\n              <input class=\"dd-input\" type=\"text\" [(ngModel)]=\"form.universite\" name=\"universite\" placeholder=\"Universit\u00E9 Paris-Sorbonne\" />\n            </label>\n          </ng-container>\n\n          <!-- Extras : Chorale -->\n          <ng-container *ngIf=\"dept.formExtras === 'chorale'\">\n            <label class=\"dd-field\">\n              <span class=\"dd-field-label\">Type de voix</span>\n              <select class=\"dd-input\" [(ngModel)]=\"form.typeVoix\" name=\"typeVoix\">\n                <option value=\"\">S\u00E9lectionner...</option>\n                <option *ngFor=\"let v of typesVoix\" [value]=\"v\">{{ v }}</option>\n              </select>\n            </label>\n          </ng-container>\n\n          <!-- Erreur -->\n          <p *ngIf=\"errorMsg\" class=\"dd-error\">{{ errorMsg }}</p>\n\n          <div class=\"dd-form-actions\">\n            <button type=\"button\" class=\"dd-btn-outline\" (click)=\"closeJoin()\">Annuler</button>\n            <button type=\"submit\" class=\"dd-btn-primary\" [style.background]=\"dept.color\" [disabled]=\"submitting\">\n              {{ submitting ? 'Envoi en cours\u2026' : 'Confirmer ma demande' }}\n            </button>\n          </div>\n          <p class=\"dd-form-note\">Aucune information n'est partag\u00E9e publiquement. Un email de confirmation te sera envoy\u00E9.</p>\n        </form>\n      </div>\n\n    </div>\n  </section>\n\n</ng-container>\n", styles: ["/* \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-hero {\n  padding: 72px 24px 60px;\n  text-align: center;\n}\n\n.dd-hero-inner {\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n.dd-back {\n  display: inline-block;\n  background: rgba(255,255,255,0.15);\n  color: #fff;\n  border: 1px solid rgba(255,255,255,0.35);\n  border-radius: 20px;\n  padding: 6px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 28px;\n  transition: background 0.2s;\n}\n\n.dd-back:hover { background: rgba(255,255,255,0.25); }\n\n.dd-hero-emoji {\n  display: block;\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n\n.dd-hero-title {\n  font-size: clamp(28px, 5vw, 48px);\n  font-weight: 800;\n  color: #fff;\n  margin: 0 0 14px;\n  line-height: 1.15;\n}\n\n.dd-hero-tagline {\n  font-size: 17px;\n  color: rgba(255,255,255,0.85);\n  font-style: italic;\n  margin: 0;\n  line-height: 1.6;\n}\n\n/* \u2500\u2500 Shared section styles \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-section {\n  padding: 64px 24px;\n}\n\n.dd-section--alt {\n  background: #f4f7fb;\n}\n\n.dd-container {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.dd-label {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n.dd-section-title {\n  font-size: clamp(22px, 4vw, 34px);\n  font-weight: 800;\n  color: #1A3D64;\n  margin: 0 0 20px;\n  line-height: 1.2;\n}\n\n.dd-body {\n  font-size: 15px;\n  color: #444;\n  line-height: 1.75;\n  margin: 0;\n}\n\n/* \u2500\u2500 Description grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-intro-grid {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 40px;\n  align-items: start;\n}\n\n.dd-vision-card {\n  border-radius: 16px;\n  border: 2px solid;\n  padding: 28px 24px;\n}\n\n.dd-vision-label {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 12px;\n}\n\n.dd-vision-text {\n  font-size: 15px;\n  color: #333;\n  line-height: 1.7;\n  margin: 0;\n  font-style: italic;\n}\n\n/* \u2500\u2500 Activities \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-activities {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.dd-activity {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n}\n\n.dd-activity-num {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dd-activity-text {\n  font-size: 15px;\n  color: #333;\n  line-height: 1.5;\n}\n\n/* \u2500\u2500 Verse section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-verse-section {\n  padding: 60px 24px;\n  text-align: center;\n}\n\n.dd-verse-inner {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.dd-verse-text {\n  font-size: 20px;\n  color: #fff;\n  font-style: italic;\n  line-height: 1.75;\n  margin: 0 0 12px;\n}\n\n.dd-verse-ref {\n  color: rgba(255,255,255,0.7);\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n\n/* \u2500\u2500 Join section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-join-container {\n  max-width: 680px;\n}\n\n.dd-join-cta {\n  text-align: center;\n}\n\n/* \u2500\u2500 Success state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-success {\n  text-align: center;\n  padding: 40px 24px;\n  background: #f0fdf4;\n  border-radius: 16px;\n  border: 2px solid #86efac;\n}\n\n.dd-success-icon {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 16px;\n}\n\n.dd-success h3 {\n  font-size: 22px;\n  font-weight: 800;\n  color: #166534;\n  margin: 0 0 12px;\n}\n\n.dd-success p {\n  color: #15803d;\n  font-size: 15px;\n  line-height: 1.7;\n  margin: 0 0 24px;\n}\n\n/* \u2500\u2500 Form card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-form-card {\n  border-radius: 16px;\n  border: 2px solid;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.1);\n}\n\n.dd-form-header {\n  padding: 20px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.dd-form-header h3 {\n  margin: 0;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.dd-form-close {\n  background: rgba(255,255,255,0.2);\n  border: none;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  font-size: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n\n.dd-form-close:hover { background: rgba(255,255,255,0.35); }\n\n.dd-form {\n  padding: 28px 24px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.dd-form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.dd-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.dd-field-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #444;\n}\n\n.dd-input {\n  padding: 10px 14px;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #222;\n  background: #fafafa;\n  outline: none;\n  transition: border-color 0.2s;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.dd-input:focus {\n  border-color: #1A3D64;\n  background: #fff;\n}\n\n.dd-extras-title {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #eee;\n}\n\n.dd-error {\n  color: #dc2626;\n  font-size: 13px;\n  margin: 0;\n  padding: 10px 14px;\n  background: #fef2f2;\n  border-radius: 8px;\n  border: 1px solid #fca5a5;\n}\n\n.dd-form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n}\n\n.dd-form-note {\n  font-size: 12px;\n  color: #888;\n  margin: 0;\n  text-align: center;\n}\n\n/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-btn-primary {\n  padding: 12px 28px;\n  border: none;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s, transform 0.2s;\n}\n\n.dd-btn-primary:hover:not([disabled]) {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n\n.dd-btn-primary[disabled] { opacity: 0.6; cursor: not-allowed; }\n\n.dd-btn-outline {\n  padding: 12px 28px;\n  border: 2px solid #1A3D64;\n  border-radius: 30px;\n  color: #1A3D64;\n  background: transparent;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n\n.dd-btn-outline:hover {\n  background: #1A3D64;\n  color: #fff;\n}\n\n/* \u2500\u2500 Not found \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.dd-notfound {\n  text-align: center;\n  padding: 80px 24px;\n}\n\n.dd-notfound p {\n  font-size: 18px;\n  color: #555;\n  margin-bottom: 20px;\n}\n\n.dd-back-btn {\n  padding: 10px 24px;\n  background: #1A3D64;\n  color: #fff;\n  border: none;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n/* \u2500\u2500 Responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media (max-width: 760px) {\n  .dd-intro-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .dd-form-row {\n    grid-template-columns: 1fr;\n  }\n\n  .dd-form-actions {\n    flex-direction: column-reverse;\n  }\n\n  .dd-btn-primary,\n  .dd-btn-outline {\n    width: 100%;\n    text-align: center;\n  }\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DepartementDetailComponent, { className: "DepartementDetailComponent", filePath: "app\\pages\\departements\\departement-detail\\departement-detail.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=departement-detail.component.js.map