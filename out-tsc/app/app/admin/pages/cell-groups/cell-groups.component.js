import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../services/api.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
const _c0 = () => [];
function CellGroupsAdminComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function CellGroupsAdminComponent_div_7_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const g_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(g_r2.description);
} }
function CellGroupsAdminComponent_div_7_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const g_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\uD83D\uDC64 ", g_r2.leaderName, "");
} }
function CellGroupsAdminComponent_div_7_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const g_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("\uD83D\uDCC5 ", g_r2.meetingDay, " ", g_r2.meetingTime, "");
} }
function CellGroupsAdminComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 13)(5, "button", 14);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_7_div_1_Template_button_click_5_listener() { const g_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openMembers(g_r2)); });
    i0.ɵɵtext(6, "\uD83D\uDC65");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 15);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_7_div_1_Template_button_click_7_listener() { const g_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openEdit(g_r2)); });
    i0.ɵɵtext(8, "\u270F\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 15);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_7_div_1_Template_button_click_9_listener() { const g_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.remove(g_r2.id)); });
    i0.ɵɵtext(10, "\uD83D\uDDD1\uFE0F");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, CellGroupsAdminComponent_div_7_div_1_p_11_Template, 2, 1, "p", 16);
    i0.ɵɵelementStart(12, "div", 17);
    i0.ɵɵtemplate(13, CellGroupsAdminComponent_div_7_div_1_span_13_Template, 2, 1, "span", 18)(14, CellGroupsAdminComponent_div_7_div_1_span_14_Template, 2, 2, "span", 18);
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_7_0;
    const g_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(g_r2.name);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", g_r2.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", g_r2.leaderName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", g_r2.meetingDay);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83D\uDC65 ", ((tmp_7_0 = g_r2.memberIds) !== null && tmp_7_0 !== undefined ? tmp_7_0 : i0.ɵɵpureFunction0(5, _c0)).length, " membres");
} }
function CellGroupsAdminComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1, "Aucun groupe de cellule");
    i0.ɵɵelementEnd();
} }
function CellGroupsAdminComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CellGroupsAdminComponent_div_7_div_1_Template, 17, 6, "div", 9)(2, CellGroupsAdminComponent_div_7_div_2_Template, 2, 0, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.groups);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.groups.length === 0);
} }
function CellGroupsAdminComponent_div_8_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", d_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(d_r5);
} }
function CellGroupsAdminComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showForm = false); });
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_8_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r4); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5, "Nom du groupe *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function CellGroupsAdminComponent_div_8_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "label");
    i0.ɵɵtext(8, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "textarea", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function CellGroupsAdminComponent_div_8_Template_textarea_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "label");
    i0.ɵɵtext(11, "Responsable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function CellGroupsAdminComponent_div_8_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.leaderName, $event) || (ctx_r2.form.leaderName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 26)(14, "div")(15, "label");
    i0.ɵɵtext(16, "Jour");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function CellGroupsAdminComponent_div_8_Template_select_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.meetingDay, $event) || (ctx_r2.form.meetingDay = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(18, "option", 28);
    i0.ɵɵtext(19, "\u2014");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, CellGroupsAdminComponent_div_8_option_20_Template, 2, 2, "option", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "label");
    i0.ɵɵtext(23, "Heure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function CellGroupsAdminComponent_div_8_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.form.meetingTime, $event) || (ctx_r2.form.meetingTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 31)(26, "button", 32);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_8_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showForm = false); });
    i0.ɵɵtext(27, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 3);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_8_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.save()); });
    i0.ɵɵtext(29, "Enregistrer");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.editing ? "Modifier le groupe" : "Nouveau groupe");
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.leaderName);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.meetingDay);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.days);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.form.meetingTime);
} }
function CellGroupsAdminComponent_div_9_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", m_r7.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", m_r7.prenom, " ", m_r7.nom, " (", m_r7.email, ") ");
} }
function CellGroupsAdminComponent_div_9_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.memberError);
} }
function CellGroupsAdminComponent_div_9_ul_12_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 42);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_9_ul_12_li_1_Template_button_click_3_listener() { const id_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.removeMember(id_r9)); });
    i0.ɵɵtext(4, "\u2715");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const id_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.getMemberName(id_r9));
} }
function CellGroupsAdminComponent_div_9_ul_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 40);
    i0.ɵɵtemplate(1, CellGroupsAdminComponent_div_9_ul_12_li_1_Template, 5, 1, "li", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.selectedGroup.memberIds);
} }
function CellGroupsAdminComponent_div_9_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1, "Aucun membre dans ce groupe.");
    i0.ɵɵelementEnd();
} }
function CellGroupsAdminComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_9_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showMembersPanel = false); });
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_9_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 35)(5, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function CellGroupsAdminComponent_div_9_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.newMemberId, $event) || (ctx_r2.newMemberId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(6, "option", 28);
    i0.ɵɵtext(7, "\u2014 Choisir un membre \u2014");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CellGroupsAdminComponent_div_9_option_8_Template, 2, 4, "option", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 36);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_9_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addMember()); });
    i0.ɵɵtext(10, "Ajouter");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CellGroupsAdminComponent_div_9_p_11_Template, 2, 1, "p", 37)(12, CellGroupsAdminComponent_div_9_ul_12_Template, 2, 1, "ul", 38)(13, CellGroupsAdminComponent_div_9_ng_template_13_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(15, "div", 31)(16, "button", 32);
    i0.ɵɵlistener("click", function CellGroupsAdminComponent_div_9_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showMembersPanel = false); });
    i0.ɵɵtext(17, "Fermer");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const noMembers_r10 = i0.ɵɵreference(14);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Membres \u2014 ", ctx_r2.selectedGroup == null ? null : ctx_r2.selectedGroup.name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.newMemberId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.membres);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r2.newMemberId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.memberError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.selectedGroup == null ? null : ctx_r2.selectedGroup.memberIds == null ? null : ctx_r2.selectedGroup.memberIds.length)("ngIfElse", noMembers_r10);
} }
export class CellGroupsAdminComponent {
    constructor(http, api) {
        this.http = http;
        this.api = api;
        this.groups = [];
        this.membres = [];
        this.loading = true;
        this.showForm = false;
        this.editing = null;
        // member management
        this.selectedGroup = null;
        this.showMembersPanel = false;
        this.newMemberId = '';
        this.memberError = '';
        this.form = { name: '', description: '', leaderName: '', meetingDay: '', meetingTime: '' };
        this.days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    }
    ngOnInit() {
        this.load();
        this.api.getMembres().subscribe({ next: (m) => { this.membres = m; } });
    }
    load() {
        this.loading = true;
        this.http.get(`${environment.apiBase}/cell-groups`).subscribe({
            next: g => { this.groups = g; this.loading = false; },
            error: () => this.loading = false,
        });
    }
    openCreate() {
        this.editing = null;
        this.form = { name: '', description: '', leaderName: '', meetingDay: '', meetingTime: '' };
        this.showForm = true;
    }
    openEdit(g) {
        var _a, _b, _c, _d;
        this.editing = g;
        this.form = { name: g.name, description: (_a = g.description) !== null && _a !== void 0 ? _a : '', leaderName: (_b = g.leaderName) !== null && _b !== void 0 ? _b : '', meetingDay: (_c = g.meetingDay) !== null && _c !== void 0 ? _c : '', meetingTime: (_d = g.meetingTime) !== null && _d !== void 0 ? _d : '' };
        this.showForm = true;
    }
    save() {
        if (!this.form.name.trim())
            return;
        const req = this.editing
            ? this.http.put(`${environment.apiBase}/cell-groups/${this.editing.id}`, this.form)
            : this.http.post(`${environment.apiBase}/cell-groups`, this.form);
        req.subscribe({ next: () => { this.showForm = false; this.load(); } });
    }
    remove(id) {
        if (!confirm('Supprimer ce groupe ?'))
            return;
        this.http.delete(`${environment.apiBase}/cell-groups/${id}`).subscribe({ next: () => this.load() });
    }
    openMembers(g) {
        this.selectedGroup = g;
        this.showMembersPanel = true;
        this.newMemberId = '';
        this.memberError = '';
        this.refreshGroup(g.id);
    }
    refreshGroup(id) {
        this.api.getCellGroupDetail(id).subscribe({
            next: (detail) => {
                const idx = this.groups.findIndex(g => g.id === id);
                if (idx !== -1)
                    this.groups[idx] = detail;
                this.selectedGroup = detail;
            },
        });
    }
    addMember() {
        if (!this.newMemberId || !this.selectedGroup)
            return;
        this.memberError = '';
        this.api.addMemberToGroup(this.selectedGroup.id, this.newMemberId).subscribe({
            next: () => { this.newMemberId = ''; this.refreshGroup(this.selectedGroup.id); },
            error: (err) => { var _a, _b; this.memberError = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Erreur lors de l\'ajout.'; },
        });
    }
    removeMember(memberId) {
        if (!this.selectedGroup)
            return;
        this.api.removeMemberFromGroup(this.selectedGroup.id, memberId).subscribe({
            next: () => { this.refreshGroup(this.selectedGroup.id); },
        });
    }
    getMemberName(id) {
        var _a, _b;
        const m = this.membres.find(m => m.id === id);
        return m ? `${(_a = m.prenom) !== null && _a !== void 0 ? _a : ''} ${(_b = m.nom) !== null && _b !== void 0 ? _b : ''}`.trim() || m.email : id;
    }
}
CellGroupsAdminComponent.ɵfac = function CellGroupsAdminComponent_Factory(t) { return new (t || CellGroupsAdminComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.ApiService)); };
CellGroupsAdminComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CellGroupsAdminComponent, selectors: [["app-cell-groups-admin"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 4, consts: [["noMembers", ""], [1, "cg-page"], [1, "page-header"], [1, "btn-primary", 3, "click"], ["class", "loading", 4, "ngIf"], ["class", "groups-grid", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "loading"], [1, "groups-grid"], ["class", "group-card", 4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [1, "group-card"], [1, "group-header"], [1, "group-actions"], ["title", "G\u00E9rer les membres", 3, "click"], [3, "click"], ["class", "group-desc", 4, "ngIf"], [1, "group-meta"], [4, "ngIf"], [1, "group-desc"], [1, "empty"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], ["placeholder", "Ex : Groupe Belleville", 3, "ngModelChange", "ngModel"], ["rows", "3", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom du responsable", 3, "ngModelChange", "ngModel"], [1, "form-row"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "20:00", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], [1, "btn-secondary", 3, "click"], [3, "value"], [1, "modal", "modal-members", 3, "click"], [1, "members-add"], [1, "btn-primary", 3, "click", "disabled"], ["class", "error-msg", 4, "ngIf"], ["class", "members-list", 4, "ngIf", "ngIfElse"], [1, "error-msg"], [1, "members-list"], [4, "ngFor", "ngForOf"], [1, "btn-del-sm", 3, "click"]], template: function CellGroupsAdminComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h1");
        i0.ɵɵtext(3, "Groupes de cellule");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function CellGroupsAdminComponent_Template_button_click_4_listener() { return ctx.openCreate(); });
        i0.ɵɵtext(5, "+ Nouveau groupe");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(6, CellGroupsAdminComponent_div_6_Template, 2, 0, "div", 4)(7, CellGroupsAdminComponent_div_7_Template, 3, 2, "div", 5)(8, CellGroupsAdminComponent_div_8_Template, 30, 7, "div", 6)(9, CellGroupsAdminComponent_div_9_Template, 18, 7, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.showForm);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.showMembersPanel);
    } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, FormsModule, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgModel], styles: ["$primary[_ngcontent-%COMP%]:   #1D546C[_ngcontent-%COMP%]; $accent[_ngcontent-%COMP%]:   #E8A838[_ngcontent-%COMP%];\n\n.cg-page[_ngcontent-%COMP%] { padding: 24px; }\n.page-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 22px; color: #1a1a2e; margin: 0; }\n\n.btn-primary[_ngcontent-%COMP%] { padding: 9px 18px; background: $primary; color: white; border: none; border-radius: 7px; font-weight: 600; cursor: pointer; &:hover { background: darken($primary, 8%); } }\n.btn-secondary[_ngcontent-%COMP%] { padding: 9px 18px; background: #f3f4f6; color: #374151; border: none; border-radius: 7px; cursor: pointer; }\n\n.groups-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }\n\n.group-card[_ngcontent-%COMP%] {\n  background: white; border-radius: 12px; padding: 18px; border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.05);\n}\n.group-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 8px; }\n.group-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 16px; color: #1a1a2e; margin: 0; }\n.group-actions[_ngcontent-%COMP%] { display: flex; gap: 4px; button { background: none; border: none; font-size: 16px; cursor: pointer; padding: 2px 4px; border-radius: 4px; &:hover { background: #f3f4f6; } } }\n.group-desc[_ngcontent-%COMP%] { font-size: 13px; color: #666; margin-bottom: 10px; }\n.group-meta[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 4px; font-size: 12px; color: #888; }\n.empty[_ngcontent-%COMP%] { color: #888; padding: 32px; text-align: center; }\n\n//[_ngcontent-%COMP%]   Modal\n.modal-backdrop[_ngcontent-%COMP%] { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; }\n.modal[_ngcontent-%COMP%] { background: white; border-radius: 14px; padding: 28px; width: min(480px, 92vw); box-shadow: 0 20px 60px rgba(0,0,0,0.15); }\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 20px; color: #1a1a2e; margin-bottom: 20px; }\n.modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 4px; margin-top: 12px; }\n.modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%; padding: 9px 12px; border: 1px solid #ddd; border-radius: 7px; font-size: 14px;\n  &:focus { outline: none; border-color: $primary; }\n}\n.modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { resize: vertical; }\n.form-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.modal-actions[_ngcontent-%COMP%] { display: flex; gap: 10px; margin-top: 20px; justify-content: flex-end; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CellGroupsAdminComponent, [{
        type: Component,
        args: [{ selector: 'app-cell-groups-admin', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"cg-page\">\n  <div class=\"page-header\">\n    <h1>Groupes de cellule</h1>\n    <button class=\"btn-primary\" (click)=\"openCreate()\">+ Nouveau groupe</button>\n  </div>\n\n  <div class=\"loading\" *ngIf=\"loading\">Chargement...</div>\n\n  <div class=\"groups-grid\" *ngIf=\"!loading\">\n    <div class=\"group-card\" *ngFor=\"let g of groups\">\n      <div class=\"group-header\">\n        <h3>{{ g.name }}</h3>\n        <div class=\"group-actions\">\n          <button title=\"G\u00E9rer les membres\" (click)=\"openMembers(g)\">\uD83D\uDC65</button>\n          <button (click)=\"openEdit(g)\">\u270F\uFE0F</button>\n          <button (click)=\"remove(g.id)\">\uD83D\uDDD1\uFE0F</button>\n        </div>\n      </div>\n      <p class=\"group-desc\" *ngIf=\"g.description\">{{ g.description }}</p>\n      <div class=\"group-meta\">\n        <span *ngIf=\"g.leaderName\">\uD83D\uDC64 {{ g.leaderName }}</span>\n        <span *ngIf=\"g.meetingDay\">\uD83D\uDCC5 {{ g.meetingDay }} {{ g.meetingTime }}</span>\n        <span>\uD83D\uDC65 {{ (g.memberIds ?? []).length }} membres</span>\n      </div>\n    </div>\n    <div class=\"empty\" *ngIf=\"groups.length === 0\">Aucun groupe de cellule</div>\n  </div>\n\n  <!-- Formulaire cr\u00E9ation/\u00E9dition -->\n  <div class=\"modal-backdrop\" *ngIf=\"showForm\" (click)=\"showForm = false\">\n    <div class=\"modal\" (click)=\"$event.stopPropagation()\">\n      <h2>{{ editing ? 'Modifier le groupe' : 'Nouveau groupe' }}</h2>\n      <label>Nom du groupe *</label>\n      <input [(ngModel)]=\"form.name\" placeholder=\"Ex : Groupe Belleville\">\n      <label>Description</label>\n      <textarea [(ngModel)]=\"form.description\" rows=\"3\"></textarea>\n      <label>Responsable</label>\n      <input [(ngModel)]=\"form.leaderName\" placeholder=\"Nom du responsable\">\n      <div class=\"form-row\">\n        <div>\n          <label>Jour</label>\n          <select [(ngModel)]=\"form.meetingDay\">\n            <option value=\"\">\u2014</option>\n            <option *ngFor=\"let d of days\" [value]=\"d\">{{ d }}</option>\n          </select>\n        </div>\n        <div>\n          <label>Heure</label>\n          <input [(ngModel)]=\"form.meetingTime\" placeholder=\"20:00\">\n        </div>\n      </div>\n      <div class=\"modal-actions\">\n        <button class=\"btn-secondary\" (click)=\"showForm = false\">Annuler</button>\n        <button class=\"btn-primary\" (click)=\"save()\">Enregistrer</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Panel membres -->\n  <div class=\"modal-backdrop\" *ngIf=\"showMembersPanel\" (click)=\"showMembersPanel = false\">\n    <div class=\"modal modal-members\" (click)=\"$event.stopPropagation()\">\n      <h2>Membres \u2014 {{ selectedGroup?.name }}</h2>\n\n      <div class=\"members-add\">\n        <select [(ngModel)]=\"newMemberId\">\n          <option value=\"\">\u2014 Choisir un membre \u2014</option>\n          <option *ngFor=\"let m of membres\" [value]=\"m.id\">\n            {{ m.prenom }} {{ m.nom }} ({{ m.email }})\n          </option>\n        </select>\n        <button class=\"btn-primary\" (click)=\"addMember()\" [disabled]=\"!newMemberId\">Ajouter</button>\n      </div>\n      <p class=\"error-msg\" *ngIf=\"memberError\">{{ memberError }}</p>\n\n      <ul class=\"members-list\" *ngIf=\"selectedGroup?.memberIds?.length; else noMembers\">\n        <li *ngFor=\"let id of selectedGroup.memberIds\">\n          <span>{{ getMemberName(id) }}</span>\n          <button class=\"btn-del-sm\" (click)=\"removeMember(id)\">\u2715</button>\n        </li>\n      </ul>\n      <ng-template #noMembers><p class=\"empty\">Aucun membre dans ce groupe.</p></ng-template>\n\n      <div class=\"modal-actions\">\n        <button class=\"btn-secondary\" (click)=\"showMembersPanel = false\">Fermer</button>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["$primary: #1D546C; $accent: #E8A838;\n\n.cg-page { padding: 24px; }\n.page-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }\n.page-header h1 { font-size: 22px; color: #1a1a2e; margin: 0; }\n\n.btn-primary { padding: 9px 18px; background: $primary; color: white; border: none; border-radius: 7px; font-weight: 600; cursor: pointer; &:hover { background: darken($primary, 8%); } }\n.btn-secondary { padding: 9px 18px; background: #f3f4f6; color: #374151; border: none; border-radius: 7px; cursor: pointer; }\n\n.groups-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }\n\n.group-card {\n  background: white; border-radius: 12px; padding: 18px; border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.05);\n}\n.group-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 8px; }\n.group-header h3 { font-size: 16px; color: #1a1a2e; margin: 0; }\n.group-actions { display: flex; gap: 4px; button { background: none; border: none; font-size: 16px; cursor: pointer; padding: 2px 4px; border-radius: 4px; &:hover { background: #f3f4f6; } } }\n.group-desc { font-size: 13px; color: #666; margin-bottom: 10px; }\n.group-meta { display: flex; flex-direction: column; gap: 4px; font-size: 12px; color: #888; }\n.empty { color: #888; padding: 32px; text-align: center; }\n\n// Modal\n.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; }\n.modal { background: white; border-radius: 14px; padding: 28px; width: min(480px, 92vw); box-shadow: 0 20px 60px rgba(0,0,0,0.15); }\n.modal h2 { font-size: 20px; color: #1a1a2e; margin-bottom: 20px; }\n.modal label { display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 4px; margin-top: 12px; }\n.modal input, .modal textarea, .modal select {\n  width: 100%; padding: 9px 12px; border: 1px solid #ddd; border-radius: 7px; font-size: 14px;\n  &:focus { outline: none; border-color: $primary; }\n}\n.modal textarea { resize: vertical; }\n.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n.modal-actions { display: flex; gap: 10px; margin-top: 20px; justify-content: flex-end; }\n"] }]
    }], () => [{ type: i1.HttpClient }, { type: i2.ApiService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CellGroupsAdminComponent, { className: "CellGroupsAdminComponent", filePath: "app\\admin\\pages\\cell-groups\\cell-groups.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=cell-groups.component.js.map