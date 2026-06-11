import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/member-auth.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function JoinModalComponent_ng_container_4_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function JoinModalComponent_ng_container_4_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Continuer \u2192");
    i0.ɵɵelementEnd();
} }
function JoinModalComponent_ng_container_4_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "span", 13);
    i0.ɵɵtext(2, " V\u00E9rification... ");
    i0.ɵɵelementEnd();
} }
function JoinModalComponent_ng_container_4_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "span");
    i0.ɵɵtext(2, "ou");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 15);
    i0.ɵɵlistener("click", function JoinModalComponent_ng_container_4_div_13_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.step = "guest"); });
    i0.ɵɵtext(4, "Continuer comme visiteur");
    i0.ɵɵelementEnd()();
} }
function JoinModalComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtext(2, "\u271D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2", 5);
    i0.ɵɵtext(4, "Rejoindre la r\u00E9union");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 6);
    i0.ɵɵtext(6, "Entrez votre adresse email pour acc\u00E9der");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "form", 7);
    i0.ɵɵlistener("ngSubmit", function JoinModalComponent_ng_container_4_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitEmail()); });
    i0.ɵɵelementStart(8, "input", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function JoinModalComponent_ng_container_4_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, JoinModalComponent_ng_container_4_div_9_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(10, "button", 10);
    i0.ɵɵtemplate(11, JoinModalComponent_ng_container_4_span_11_Template, 2, 0, "span", 3)(12, JoinModalComponent_ng_container_4_span_12_Template, 3, 0, "span", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, JoinModalComponent_ng_container_4_div_13_Template, 5, 0, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.email);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.error);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || !ctx_r1.email.trim());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.publicMeeting);
} }
function JoinModalComponent_ng_container_5_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function JoinModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtext(2, "\u25B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2", 5);
    i0.ɵɵtext(4, "Entrer dans la r\u00E9union");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 6);
    i0.ɵɵtext(6, "\u00C9crivez simplement votre nom. Aucun code n\u2019est n\u00E9cessaire.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "form", 7);
    i0.ɵɵlistener("ngSubmit", function JoinModalComponent_ng_container_5_Template_form_ngSubmit_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitGuest()); });
    i0.ɵɵelementStart(8, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function JoinModalComponent_ng_container_5_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.guestName, $event) || (ctx_r1.guestName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, JoinModalComponent_ng_container_5_div_9_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(10, "button", 10);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 17);
    i0.ɵɵlistener("click", function JoinModalComponent_ng_container_5_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.useMemberAccess()); });
    i0.ɵɵtext(13, " Je suis membre ou responsable ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.guestName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.error);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.guestName.trim().length < 2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading ? "Ouverture\u2026" : "ENTRER MAINTENANT", " ");
} }
function JoinModalComponent_ng_container_6_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function JoinModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function JoinModalComponent_ng_container_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(2, "\u2190 Modifier l\u2019email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtext(4, "\uD83D\uDD10");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2", 5);
    i0.ɵɵtext(6, "Code de connexion");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 6);
    i0.ɵɵtext(8, " Entrez le code re\u00E7u par SMS pour ");
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "form", 7);
    i0.ɵɵlistener("ngSubmit", function JoinModalComponent_ng_container_6_Template_form_ngSubmit_11_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitOtp()); });
    i0.ɵɵelementStart(12, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function JoinModalComponent_ng_container_6_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.code, $event) || (ctx_r1.code = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, JoinModalComponent_ng_container_6_div_13_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(14, "button", 10);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 20);
    i0.ɵɵlistener("click", function JoinModalComponent_ng_container_6_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resendOtp()); });
    i0.ɵɵtext(17, " Renvoyer le code ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.code);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.error);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.code.trim().length < 4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading ? "Connexion..." : "Rejoindre la r\u00E9union", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading);
} }
function JoinModalComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function JoinModalComponent_ng_container_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(2, "\u2190 Modifier l\u2019email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtext(4, "\u2709");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2", 5);
    i0.ɵɵtext(6, "Consultez votre messagerie");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 6);
    i0.ɵɵtext(8, " Un lien s\u00E9curis\u00E9 a \u00E9t\u00E9 envoy\u00E9 \u00E0 ");
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, ". Cliquez dessus pour vous connecter. Il reste valable 15 minutes. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 21);
    i0.ɵɵlistener("click", function JoinModalComponent_ng_container_7_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close.emit()); });
    i0.ɵɵtext(13, "Fermer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.email);
} }
function JoinModalComponent_ng_container_8_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function JoinModalComponent_ng_container_8_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Rejoindre la r\u00E9union \u2192");
    i0.ɵɵelementEnd();
} }
function JoinModalComponent_ng_container_8_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "span", 13);
    i0.ɵɵtext(2, " Inscription... ");
    i0.ɵɵelementEnd();
} }
function JoinModalComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function JoinModalComponent_ng_container_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(2, "\u2190 Retour");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtext(4, "\uD83D\uDC4B");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2", 5);
    i0.ɵɵtext(6, "Bienvenue !");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 6);
    i0.ɵɵtext(8, " Compl\u00E9tez votre profil pour rejoindre la r\u00E9union ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "form", 7);
    i0.ɵɵlistener("ngSubmit", function JoinModalComponent_ng_container_8_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitRegister()); });
    i0.ɵɵelementStart(10, "div", 22)(11, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function JoinModalComponent_ng_container_8_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.firstName, $event) || (ctx_r1.form.firstName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function JoinModalComponent_ng_container_8_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.lastName, $event) || (ctx_r1.form.lastName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "input", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function JoinModalComponent_ng_container_8_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function JoinModalComponent_ng_container_8_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.city, $event) || (ctx_r1.form.city = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, JoinModalComponent_ng_container_8_div_15_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(16, "button", 10);
    i0.ɵɵtemplate(17, JoinModalComponent_ng_container_8_span_17_Template, 2, 0, "span", 3)(18, JoinModalComponent_ng_container_8_span_18_Template, 3, 0, "span", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 27);
    i0.ɵɵtext(20, " Vos informations sont uniquement utilis\u00E9es pour cette communaut\u00E9. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.firstName);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.lastName);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.phone);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.city);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.error);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading || !ctx_r1.form.firstName.trim() || !ctx_r1.form.lastName.trim() || !ctx_r1.form.phone.trim());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loading);
} }
export class JoinModalComponent {
    constructor(auth) {
        this.auth = auth;
        this.meetingId = '';
        this.publicMeeting = false;
        this.authSuccess = new EventEmitter();
        this.close = new EventEmitter();
        this.step = 'email';
        this.email = '';
        this.code = '';
        this.form = { firstName: '', lastName: '', phone: '', city: '' };
        this.guestName = '';
        this.loading = false;
        this.error = '';
    }
    ngOnInit() {
        var _a;
        if (this.publicMeeting) {
            this.step = 'guest';
            this.guestName = (_a = localStorage.getItem('cmciea_guest_name')) !== null && _a !== void 0 ? _a : '';
        }
    }
    // ── Étape 1 : vérification email ──────────────────────────
    submitEmail() {
        const email = this.email.trim().toLowerCase();
        if (!email)
            return;
        this.loading = true;
        this.error = '';
        this.auth.checkEmail(email).subscribe({
            next: (res) => {
                this.loading = false;
                if (!res.exists) {
                    // Email inconnu → formulaire d'inscription rapide
                    if (!res.isOpen) {
                        this.error = 'Les inscriptions sont fermées. Contactez-nous.';
                        return;
                    }
                    this.step = 'register';
                    return;
                }
                this.auth.sendOtp(email).subscribe({
                    next: (result) => {
                        this.loading = false;
                        this.step = result.method === 'sms' ? 'otp' : 'magic-link';
                    },
                    error: (err) => {
                        var _a, _b;
                        this.loading = false;
                        this.error = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Impossible d’envoyer le code de connexion.';
                    },
                });
            },
            error: () => {
                this.error = 'Erreur de connexion au serveur.';
                this.loading = false;
            },
        });
    }
    submitOtp() {
        if (this.code.trim().length < 4)
            return;
        this.loading = true;
        this.error = '';
        this.auth.verifyOtp(this.email.trim().toLowerCase(), this.code.trim()).subscribe({
            next: () => {
                this.loading = false;
                this.authSuccess.emit();
            },
            error: () => {
                this.loading = false;
                this.error = 'Code incorrect ou expiré. Vérifiez puis réessayez.';
            },
        });
    }
    resendOtp() {
        this.loading = true;
        this.error = '';
        this.auth.sendOtp(this.email.trim().toLowerCase()).subscribe({
            next: () => {
                this.loading = false;
                this.code = '';
            },
            error: () => {
                this.loading = false;
                this.error = 'Le code n’a pas pu être renvoyé.';
            },
        });
    }
    // ── Étape 2 : inscription rapide (nouveau membre) ─────────
    submitRegister() {
        const { firstName, lastName, phone } = this.form;
        if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
            this.error = 'Veuillez remplir les champs obligatoires.';
            return;
        }
        this.loading = true;
        this.error = '';
        this.auth.register({
            email: this.email.trim().toLowerCase(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            phone: phone.trim(),
            city: this.form.city.trim(),
        }).subscribe({
            next: () => {
                this.loading = false;
                this.authSuccess.emit();
            },
            error: (err) => {
                var _a, _b;
                this.error = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de l\'inscription.';
                this.loading = false;
            },
        });
    }
    back() {
        this.step = 'email';
        this.code = '';
        this.error = '';
    }
    submitGuest() {
        if (this.guestName.trim().length < 2)
            return;
        this.loading = true;
        this.error = '';
        this.auth.guest(this.guestName.trim()).subscribe({
            next: () => {
                localStorage.setItem('cmciea_guest_name', this.guestName.trim());
                this.loading = false;
                this.authSuccess.emit();
            },
            error: err => {
                var _a, _b;
                this.loading = false;
                this.error = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Accès visiteur impossible.';
            },
        });
    }
    useMemberAccess() {
        this.step = 'email';
        this.error = '';
    }
}
JoinModalComponent.ɵfac = function JoinModalComponent_Factory(t) { return new (t || JoinModalComponent)(i0.ɵɵdirectiveInject(i1.MemberAuthService)); };
JoinModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: JoinModalComponent, selectors: [["app-join-modal"]], inputs: { meetingId: "meetingId", publicMeeting: "publicMeeting" }, outputs: { authSuccess: "authSuccess", close: "close" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 9, vars: 5, consts: [[1, "modal-backdrop", 3, "click"], [1, "modal-card", 3, "click"], ["aria-label", "Fermer", 1, "modal-close", 3, "click"], [4, "ngIf"], [1, "modal-icon"], [1, "modal-title"], [1, "modal-subtitle"], [1, "modal-form", 3, "ngSubmit"], ["type", "email", "name", "email", "placeholder", "votre@email.com", "autocomplete", "email", "autofocus", "", "required", "", 1, "modal-input", "modal-input--large", 3, "ngModelChange", "ngModel"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-join-modal", 3, "disabled"], ["class", "guest-access", 4, "ngIf"], [1, "error-msg"], [1, "btn-spinner"], [1, "guest-access"], ["type", "button", 3, "click"], ["type", "text", "name", "guestName", "maxlength", "100", "placeholder", "Votre pr\u00E9nom et votre nom", "autocomplete", "name", "autofocus", "", "required", "", 1, "modal-input", "modal-input--large", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "modal-link", "member-access-link", 3, "click"], [1, "modal-back", 3, "click"], ["type", "tel", "name", "code", "placeholder", "0000", "maxlength", "6", "inputmode", "numeric", "autocomplete", "one-time-code", "required", "", 1, "modal-input", "modal-input--code", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "modal-link", 3, "click", "disabled"], ["type", "button", 1, "btn-join-modal", 3, "click"], [1, "modal-row"], ["type", "text", "name", "firstName", "placeholder", "Pr\u00E9nom *", "autofocus", "", "required", "", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "placeholder", "Nom *", "required", "", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "T\u00E9l\u00E9phone *", "required", "", 1, "modal-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "city", "placeholder", "Ville (optionnel)", 1, "modal-input", 3, "ngModelChange", "ngModel"], [1, "modal-notice"]], template: function JoinModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function JoinModalComponent_Template_div_click_0_listener() { return ctx.close.emit(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function JoinModalComponent_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵlistener("click", function JoinModalComponent_Template_button_click_2_listener() { return ctx.close.emit(); });
        i0.ɵɵtext(3, "\u2715");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, JoinModalComponent_ng_container_4_Template, 14, 6, "ng-container", 3)(5, JoinModalComponent_ng_container_5_Template, 14, 4, "ng-container", 3)(6, JoinModalComponent_ng_container_6_Template, 18, 6, "ng-container", 3)(7, JoinModalComponent_ng_container_7_Template, 14, 1, "ng-container", 3)(8, JoinModalComponent_ng_container_8_Template, 21, 8, "ng-container", 3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.step === "email");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.step === "guest");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.step === "otp");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.step === "magic-link");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.step === "register");
    } }, dependencies: [CommonModule, i2.NgIf, FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.MaxLengthValidator, i3.NgModel, i3.NgForm], styles: ["//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   CMCIEA[_ngcontent-%COMP%]   \u2014[_ngcontent-%COMP%]   Modal[_ngcontent-%COMP%]   Rejoindre[_ngcontent-%COMP%]   la[_ngcontent-%COMP%]   r\u00E9union\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n$primary[_ngcontent-%COMP%]:   #1D546C[_ngcontent-%COMP%];\n$primary-dark[_ngcontent-%COMP%]:   #123648[_ngcontent-%COMP%];\n$accent[_ngcontent-%COMP%]:   #E8A838[_ngcontent-%COMP%];\n$bg[_ngcontent-%COMP%]:   #f7f5f0[_ngcontent-%COMP%];\n$white[_ngcontent-%COMP%]:   #ffffff[_ngcontent-%COMP%];\n$error[_ngcontent-%COMP%]:   #dc2626[_ngcontent-%COMP%];\n$border[_ngcontent-%COMP%]:   #e2e8f0[_ngcontent-%COMP%];\n$text[_ngcontent-%COMP%]:   #1a1a2e[_ngcontent-%COMP%];\n$muted[_ngcontent-%COMP%]:   #6b7280[_ngcontent-%COMP%];\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Backdrop[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 16px;\n  animation: fadeIn 0.15s ease;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Carte[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-card[_ngcontent-%COMP%] {\n  background: $white;\n  border-radius: 20px;\n  padding: 36px 32px 32px;\n  width: 100%;\n  max-width: 420px;\n  position: relative;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n\n  @media (max-width: 480px) {\n    padding: 28px 20px 24px;\n    border-radius: 16px;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Fermer[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: $muted;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, color 0.2s;\n\n  &:hover {\n    background: $bg;\n    color: $text;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Retour[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: $primary;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: opacity 0.2s;\n\n  &:hover { opacity: 0.7; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Ic\u00F4ne[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  text-align: center;\n  margin-bottom: 12px;\n  line-height: 1;\n  color: $accent;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Textes[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: $text;\n  margin: 0 0 6px;\n  text-align: center;\n}\n\n.modal-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: $muted;\n  text-align: center;\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Formulaire[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.modal-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n\n  @media (max-width: 380px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.modal-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid $border;\n  border-radius: 10px;\n  font-size: 15px;\n  color: $text;\n  background: $white;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  outline: none;\n  box-sizing: border-box;\n\n  &::placeholder { color: #a0aec0; }\n\n  &:focus {\n    border-color: $primary;\n    box-shadow: 0 0 0 3px rgba($primary, 0.12);\n  }\n\n  &--large {\n    padding: 14px 16px;\n    font-size: 16px;\n  }\n\n  &--code {\n    padding: 16px;\n    text-align: center;\n    font-size: 26px;\n    font-weight: 750;\n    letter-spacing: 0.35em;\n    font-variant-numeric: tabular-nums;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Bouton[_ngcontent-%COMP%]   principal[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.btn-join-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: $primary;\n  color: $white;\n  border: none;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.1s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 4px;\n\n  &:hover:not(:disabled) {\n    background: $primary-dark;\n  }\n\n  &:active:not(:disabled) {\n    transform: scale(0.98);\n  }\n\n  &:disabled {\n    opacity: 0.55;\n    cursor: not-allowed;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Spinner[_ngcontent-%COMP%]   bouton[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.btn-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba($white, 0.3);\n  border-top-color: $white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  vertical-align: middle;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Erreur[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.error-msg[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: $error;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Notice[_ngcontent-%COMP%]   confidentialit\u00E9[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-notice[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: $muted;\n  text-align: center;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.modal-link[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: $primary;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 8px;\n\n  &:disabled { opacity: 0.5; cursor: not-allowed; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Animations[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@keyframes[_ngcontent-%COMP%]   fadeIn[_ngcontent-%COMP%] {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { opacity: 0; transform: translateY(16px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to { transform: rotate(360deg); }\n}\n.guest-access[_ngcontent-%COMP%] {\n  margin-top: 18px; display: flex; flex-direction: column; align-items: center; gap: 9px;\n  span { color: $muted; font-size: 11px; text-transform: uppercase; }\n  button {\n    border: 0; color: $primary; background: transparent; font-weight: 700; cursor: pointer;\n  }\n}\n.member-access-link[_ngcontent-%COMP%] { margin-top: 8px; font-size: 12px; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JoinModalComponent, [{
        type: Component,
        args: [{ selector: 'app-join-modal', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"modal-backdrop\" (click)=\"close.emit()\">\n  <div class=\"modal-card\" (click)=\"$event.stopPropagation()\">\n\n    <button class=\"modal-close\" (click)=\"close.emit()\" aria-label=\"Fermer\">\u2715</button>\n\n    <!-- \u2500\u2500 \u00C9tape 1 : Email \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <ng-container *ngIf=\"step === 'email'\">\n      <div class=\"modal-icon\">\u271D</div>\n      <h2 class=\"modal-title\">Rejoindre la r\u00E9union</h2>\n      <p class=\"modal-subtitle\">Entrez votre adresse email pour acc\u00E9der</p>\n\n      <form (ngSubmit)=\"submitEmail()\" class=\"modal-form\">\n        <input\n          type=\"email\"\n          [(ngModel)]=\"email\"\n          name=\"email\"\n          placeholder=\"votre@email.com\"\n          class=\"modal-input modal-input--large\"\n          autocomplete=\"email\"\n          autofocus\n          required\n        />\n        <div class=\"error-msg\" *ngIf=\"error\">{{ error }}</div>\n        <button type=\"submit\" class=\"btn-join-modal\" [disabled]=\"loading || !email.trim()\">\n          <span *ngIf=\"!loading\">Continuer \u2192</span>\n          <span *ngIf=\"loading\">\n            <span class=\"btn-spinner\"></span> V\u00E9rification...\n          </span>\n        </button>\n      </form>\n      <div class=\"guest-access\" *ngIf=\"publicMeeting\">\n        <span>ou</span>\n        <button type=\"button\" (click)=\"step = 'guest'\">Continuer comme visiteur</button>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"step === 'guest'\">\n      <div class=\"modal-icon\">\u25B6</div>\n      <h2 class=\"modal-title\">Entrer dans la r\u00E9union</h2>\n      <p class=\"modal-subtitle\">\u00C9crivez simplement votre nom. Aucun code n\u2019est n\u00E9cessaire.</p>\n      <form (ngSubmit)=\"submitGuest()\" class=\"modal-form\">\n        <input type=\"text\" [(ngModel)]=\"guestName\" name=\"guestName\" maxlength=\"100\"\n               placeholder=\"Votre pr\u00E9nom et votre nom\" class=\"modal-input modal-input--large\"\n               autocomplete=\"name\" autofocus required>\n        <div class=\"error-msg\" *ngIf=\"error\">{{ error }}</div>\n        <button type=\"submit\" class=\"btn-join-modal\" [disabled]=\"loading || guestName.trim().length < 2\">\n          {{ loading ? 'Ouverture\u2026' : 'ENTRER MAINTENANT' }}\n        </button>\n        <button type=\"button\" class=\"modal-link member-access-link\" (click)=\"useMemberAccess()\">\n          Je suis membre ou responsable\n        </button>\n      </form>\n    </ng-container>\n\n    <ng-container *ngIf=\"step === 'otp'\">\n      <button class=\"modal-back\" (click)=\"back()\">\u2190 Modifier l\u2019email</button>\n      <div class=\"modal-icon\">\uD83D\uDD10</div>\n      <h2 class=\"modal-title\">Code de connexion</h2>\n      <p class=\"modal-subtitle\">\n        Entrez le code re\u00E7u par SMS pour <strong>{{ email }}</strong>\n      </p>\n\n      <form (ngSubmit)=\"submitOtp()\" class=\"modal-form\">\n        <input\n          type=\"tel\"\n          [(ngModel)]=\"code\"\n          name=\"code\"\n          placeholder=\"0000\"\n          maxlength=\"6\"\n          inputmode=\"numeric\"\n          autocomplete=\"one-time-code\"\n          class=\"modal-input modal-input--code\"\n          required\n        />\n        <div class=\"error-msg\" *ngIf=\"error\">{{ error }}</div>\n        <button type=\"submit\" class=\"btn-join-modal\" [disabled]=\"loading || code.trim().length < 4\">\n          {{ loading ? 'Connexion...' : 'Rejoindre la r\u00E9union' }}\n        </button>\n        <button type=\"button\" class=\"modal-link\" (click)=\"resendOtp()\" [disabled]=\"loading\">\n          Renvoyer le code\n        </button>\n      </form>\n    </ng-container>\n\n    <ng-container *ngIf=\"step === 'magic-link'\">\n      <button class=\"modal-back\" (click)=\"back()\">\u2190 Modifier l\u2019email</button>\n      <div class=\"modal-icon\">\u2709</div>\n      <h2 class=\"modal-title\">Consultez votre messagerie</h2>\n      <p class=\"modal-subtitle\">\n        Un lien s\u00E9curis\u00E9 a \u00E9t\u00E9 envoy\u00E9 \u00E0 <strong>{{ email }}</strong>.\n        Cliquez dessus pour vous connecter. Il reste valable 15 minutes.\n      </p>\n      <button type=\"button\" class=\"btn-join-modal\" (click)=\"close.emit()\">Fermer</button>\n    </ng-container>\n\n    <!-- \u2500\u2500 \u00C9tape 2 : Formulaire (nouveau membre) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n    <ng-container *ngIf=\"step === 'register'\">\n      <button class=\"modal-back\" (click)=\"back()\">\u2190 Retour</button>\n      <div class=\"modal-icon\">\uD83D\uDC4B</div>\n      <h2 class=\"modal-title\">Bienvenue !</h2>\n      <p class=\"modal-subtitle\">\n        Compl\u00E9tez votre profil pour rejoindre la r\u00E9union\n      </p>\n\n      <form (ngSubmit)=\"submitRegister()\" class=\"modal-form\">\n        <div class=\"modal-row\">\n          <input\n            type=\"text\"\n            [(ngModel)]=\"form.firstName\"\n            name=\"firstName\"\n            placeholder=\"Pr\u00E9nom *\"\n            class=\"modal-input\"\n            autofocus\n            required\n          />\n          <input\n            type=\"text\"\n            [(ngModel)]=\"form.lastName\"\n            name=\"lastName\"\n            placeholder=\"Nom *\"\n            class=\"modal-input\"\n            required\n          />\n        </div>\n\n        <input\n          type=\"tel\"\n          [(ngModel)]=\"form.phone\"\n          name=\"phone\"\n          placeholder=\"T\u00E9l\u00E9phone *\"\n          class=\"modal-input\"\n          required\n        />\n\n        <input\n          type=\"text\"\n          [(ngModel)]=\"form.city\"\n          name=\"city\"\n          placeholder=\"Ville (optionnel)\"\n          class=\"modal-input\"\n        />\n\n        <div class=\"error-msg\" *ngIf=\"error\">{{ error }}</div>\n\n        <button\n          type=\"submit\"\n          class=\"btn-join-modal\"\n          [disabled]=\"loading || !form.firstName.trim() || !form.lastName.trim() || !form.phone.trim()\"\n        >\n          <span *ngIf=\"!loading\">Rejoindre la r\u00E9union \u2192</span>\n          <span *ngIf=\"loading\">\n            <span class=\"btn-spinner\"></span> Inscription...\n          </span>\n        </button>\n\n        <p class=\"modal-notice\">\n          Vos informations sont uniquement utilis\u00E9es pour cette communaut\u00E9.\n        </p>\n      </form>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n// CMCIEA \u2014 Modal Rejoindre la r\u00E9union\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n$primary:      #1D546C;\n$primary-dark: #123648;\n$accent:       #E8A838;\n$bg:           #f7f5f0;\n$white:        #ffffff;\n$error:        #dc2626;\n$border:       #e2e8f0;\n$text:         #1a1a2e;\n$muted:        #6b7280;\n\n// \u2500\u2500 Backdrop \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 16px;\n  animation: fadeIn 0.15s ease;\n}\n\n// \u2500\u2500 Carte \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-card {\n  background: $white;\n  border-radius: 20px;\n  padding: 36px 32px 32px;\n  width: 100%;\n  max-width: 420px;\n  position: relative;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);\n  animation: slideUp 0.2s ease;\n\n  @media (max-width: 480px) {\n    padding: 28px 20px 24px;\n    border-radius: 16px;\n  }\n}\n\n// \u2500\u2500 Fermer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: $muted;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s, color 0.2s;\n\n  &:hover {\n    background: $bg;\n    color: $text;\n  }\n}\n\n// \u2500\u2500 Retour \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-back {\n  background: none;\n  border: none;\n  color: $primary;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: opacity 0.2s;\n\n  &:hover { opacity: 0.7; }\n}\n\n// \u2500\u2500 Ic\u00F4ne \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-icon {\n  font-size: 32px;\n  text-align: center;\n  margin-bottom: 12px;\n  line-height: 1;\n  color: $accent;\n}\n\n// \u2500\u2500 Textes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: $text;\n  margin: 0 0 6px;\n  text-align: center;\n}\n\n.modal-subtitle {\n  font-size: 14px;\n  color: $muted;\n  text-align: center;\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n\n// \u2500\u2500 Formulaire \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-form {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.modal-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n\n  @media (max-width: 380px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.modal-input {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1.5px solid $border;\n  border-radius: 10px;\n  font-size: 15px;\n  color: $text;\n  background: $white;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  outline: none;\n  box-sizing: border-box;\n\n  &::placeholder { color: #a0aec0; }\n\n  &:focus {\n    border-color: $primary;\n    box-shadow: 0 0 0 3px rgba($primary, 0.12);\n  }\n\n  &--large {\n    padding: 14px 16px;\n    font-size: 16px;\n  }\n\n  &--code {\n    padding: 16px;\n    text-align: center;\n    font-size: 26px;\n    font-weight: 750;\n    letter-spacing: 0.35em;\n    font-variant-numeric: tabular-nums;\n  }\n}\n\n// \u2500\u2500 Bouton principal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.btn-join-modal {\n  width: 100%;\n  padding: 14px;\n  background: $primary;\n  color: $white;\n  border: none;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.1s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 4px;\n\n  &:hover:not(:disabled) {\n    background: $primary-dark;\n  }\n\n  &:active:not(:disabled) {\n    transform: scale(0.98);\n  }\n\n  &:disabled {\n    opacity: 0.55;\n    cursor: not-allowed;\n  }\n}\n\n// \u2500\u2500 Spinner bouton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.btn-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba($white, 0.3);\n  border-top-color: $white;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  vertical-align: middle;\n}\n\n// \u2500\u2500 Erreur \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.error-msg {\n  background: #fef2f2;\n  color: $error;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n// \u2500\u2500 Notice confidentialit\u00E9 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.modal-notice {\n  font-size: 11px;\n  color: $muted;\n  text-align: center;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.modal-link {\n  border: 0;\n  background: transparent;\n  color: $primary;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 8px;\n\n  &:disabled { opacity: 0.5; cursor: not-allowed; }\n}\n\n// \u2500\u2500 Animations \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n@keyframes slideUp {\n  from { opacity: 0; transform: translateY(16px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n.guest-access {\n  margin-top: 18px; display: flex; flex-direction: column; align-items: center; gap: 9px;\n  span { color: $muted; font-size: 11px; text-transform: uppercase; }\n  button {\n    border: 0; color: $primary; background: transparent; font-weight: 700; cursor: pointer;\n  }\n}\n.member-access-link { margin-top: 8px; font-size: 12px; }\n"] }]
    }], () => [{ type: i1.MemberAuthService }], { meetingId: [{
            type: Input
        }], publicMeeting: [{
            type: Input
        }], authSuccess: [{
            type: Output
        }], close: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(JoinModalComponent, { className: "JoinModalComponent", filePath: "app\\pages\\reunions\\join-modal\\join-modal.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=join-modal.component.js.map