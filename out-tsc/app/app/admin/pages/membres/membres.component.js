import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AdminMembresComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.successMsg);
} }
function AdminMembresComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMsg);
} }
function AdminMembresComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1, " En tant qu\u2019administrateur principal, vous pouvez promouvoir un membre comme administrateur ou lui retirer ce r\u00F4le. La modification est permanente jusqu\u2019\u00E0 votre prochaine d\u00E9cision. ");
    i0.ɵɵelementEnd();
} }
function AdminMembresComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", r_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.roleLabel(r_r2));
} }
function AdminMembresComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function AdminMembresComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1, "Aucun membre trouv\u00E9.");
    i0.ɵɵelementEnd();
} }
function AdminMembresComponent_div_18_tr_21_select_11_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", r_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.roleLabel(r_r5));
} }
function AdminMembresComponent_div_18_tr_21_select_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminMembresComponent_div_18_tr_21_select_11_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const m_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.roleDrafts[m_r4.id], $event) || (ctx_r0.roleDrafts[m_r4.id] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AdminMembresComponent_div_18_tr_21_select_11_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const m_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.changeRole(m_r4, $event)); });
    i0.ɵɵtemplate(1, AdminMembresComponent_div_18_tr_21_select_11_option_1_Template, 2, 2, "option", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.roleDrafts[m_r4.id]);
    i0.ɵɵproperty("disabled", ctx_r0.isPending("role-" + m_r4.id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.roles);
} }
function AdminMembresComponent_div_18_tr_21_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r0.roleClass(m_r4.role));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.roleLabel(m_r4.role));
} }
function AdminMembresComponent_div_18_tr_21_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function AdminMembresComponent_div_18_tr_21_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const m_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deactivate(m_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.isPending("deactivate-" + m_r4.id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isPending("deactivate-" + m_r4.id) ? "\u2026" : "\u2715", " ");
} }
function AdminMembresComponent_div_18_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtemplate(11, AdminMembresComponent_div_18_tr_21_select_11_Template, 2, 3, "select", 25)(12, AdminMembresComponent_div_18_tr_21_ng_template_12_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "span", 26);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "span", 27);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 28);
    i0.ɵɵtemplate(21, AdminMembresComponent_div_18_tr_21_button_21_Template, 2, 2, "button", 29);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const roleBadge_r7 = i0.ɵɵreference(13);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("inactive", !m_r4.isActive);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", m_r4.firstName, " ", m_r4.lastName, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r4.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r4.phone || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r4.city || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.canManageRoles)("ngIfElse", roleBadge_r7);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("badge-green", m_r4.isActive)("badge-gray", !m_r4.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", m_r4.isActive ? "Actif" : "Inactif", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(m_r4.source || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", m_r4.isActive);
} }
function AdminMembresComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Nom");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "T\u00E9l\u00E9phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Ville");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "R\u00F4le");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Statut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Source");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵtemplate(21, AdminMembresComponent_div_18_tr_21_Template, 22, 16, "tr", 24);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(21);
    i0.ɵɵproperty("ngForOf", ctx_r0.filtered);
} }
export class AdminMembresComponent {
    constructor() {
        this.api = inject(ApiService);
        this.auth = inject(AuthService);
        this.membres = [];
        this.filtered = [];
        this.loading = true;
        this.merging = false;
        this.search = '';
        this.filterRole = '';
        this.successMsg = '';
        this.errorMsg = '';
        this.pendingActions = new Set();
        this.roleDrafts = {};
        this.roles = ['member', 'admin', 'visitor'];
    }
    get canManageRoles() {
        return this.auth.isSuperAdmin();
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.api.getMembres().subscribe({
            next: (data) => {
                this.membres = data;
                this.roleDrafts = this.membres.reduce((drafts, member) => {
                    if (member.role !== 'super_admin') {
                        drafts[member.id] = member.role;
                    }
                    return drafts;
                }, {});
                this.applyFilter();
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                this.flash('Chargement des membres impossible.', 'error');
            },
        });
    }
    applyFilter() {
        const q = this.search.toLowerCase();
        this.filtered = this.membres.filter(m => {
            var _a, _b, _c, _d;
            const matchSearch = !q ||
                ((_a = m.firstName) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(q)) ||
                ((_b = m.lastName) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(q)) ||
                ((_c = m.email) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(q)) ||
                ((_d = m.phone) === null || _d === void 0 ? void 0 : _d.includes(q));
            const matchRole = !this.filterRole || m.role === this.filterRole;
            return matchSearch && matchRole;
        });
    }
    changeRole(membre, role) {
        if (!this.canManageRoles || role === membre.role)
            return;
        const action = role === 'admin'
            ? `promouvoir ${membre.firstName} ${membre.lastName} comme administrateur`
            : `attribuer le rôle « ${this.roleLabel(role)} » à ${membre.firstName} ${membre.lastName}`;
        if (!confirm(`Confirmer : ${action} ?`)) {
            this.roleDrafts[membre.id] = membre.role;
            return;
        }
        const key = `role-${membre.id}`;
        this.pendingActions.add(key);
        this.api.updateMembreRole(membre.id, role).subscribe({
            next: () => {
                membre.role = role;
                this.roleDrafts[membre.id] = role;
                this.pendingActions.delete(key);
                this.flash('Rôle mis à jour.', 'success');
            },
            error: () => {
                this.roleDrafts[membre.id] = membre.role;
                this.pendingActions.delete(key);
                this.flash('La modification du rôle a échoué.', 'error');
            },
        });
    }
    deactivate(membre) {
        if (!confirm(`Désactiver le compte de ${membre.firstName} ${membre.lastName} ?`))
            return;
        const key = `deactivate-${membre.id}`;
        this.pendingActions.add(key);
        this.api.desactiverMembre(membre.id).subscribe({
            next: () => {
                membre.isActive = false;
                this.pendingActions.delete(key);
                this.flash('Membre désactivé.', 'success');
            },
            error: () => {
                this.pendingActions.delete(key);
                this.flash('La désactivation a échoué.', 'error');
            },
        });
    }
    merge() {
        if (!confirm('Fusionner les bases Marathon et Newsletter en membres ? Cette action est sûre et peut être relancée.'))
            return;
        this.merging = true;
        this.api.mergeBases().subscribe({
            next: (res) => {
                this.merging = false;
                this.flash(res.message, 'success');
                this.load();
            },
            error: () => {
                this.merging = false;
                this.flash('La fusion des bases a échoué.', 'error');
            },
        });
    }
    isPending(key) {
        return this.pendingActions.has(key);
    }
    flash(msg, type) {
        this.successMsg = type === 'success' ? msg : '';
        this.errorMsg = type === 'error' ? msg : '';
        setTimeout(() => {
            this.successMsg = '';
            this.errorMsg = '';
        }, 3000);
    }
    roleLabel(role) {
        var _a;
        const map = {
            super_admin: 'Super Admin',
            admin: 'Admin',
            member: 'Membre',
            visitor: 'Visiteur',
        };
        return (_a = map[role]) !== null && _a !== void 0 ? _a : role;
    }
    roleClass(role) {
        var _a;
        const map = {
            super_admin: 'badge-purple',
            admin: 'badge-red',
            member: 'badge-blue',
            visitor: 'badge-gray',
        };
        return (_a = map[role]) !== null && _a !== void 0 ? _a : 'badge-gray';
    }
}
AdminMembresComponent.ɵfac = function AdminMembresComponent_Factory(t) { return new (t || AdminMembresComponent)(); };
AdminMembresComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminMembresComponent, selectors: [["app-admin-membres"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 19, vars: 12, consts: [["roleBadge", ""], [1, "page"], [1, "page-header"], [1, "page-title"], [1, "header-actions"], [1, "btn-secondary", 3, "click", "disabled"], ["class", "success-msg", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], ["class", "role-help", 4, "ngIf"], [1, "filters"], ["type", "text", "placeholder", "Rechercher par nom, email, t\u00E9l\u00E9phone...", 1, "search-input", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], [1, "success-msg"], [1, "error-msg"], [1, "role-help"], [3, "value"], [1, "loading"], [1, "empty"], [1, "table-wrap"], [3, "inactive", 4, "ngFor", "ngForOf"], ["class", "role-select", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf", "ngIfElse"], [1, "badge"], [1, "badge", "badge-gray"], [1, "actions"], ["class", "btn-del", "title", "D\u00E9sactiver", 3, "disabled", "click", 4, "ngIf"], [1, "role-select", 3, "ngModelChange", "ngModel", "disabled"], [1, "badge", 3, "ngClass"], ["title", "D\u00E9sactiver", 1, "btn-del", 3, "click", "disabled"]], template: function AdminMembresComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4)(5, "button", 5);
        i0.ɵɵlistener("click", function AdminMembresComponent_Template_button_click_5_listener() { return ctx.merge(); });
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(7, AdminMembresComponent_p_7_Template, 2, 1, "p", 6)(8, AdminMembresComponent_p_8_Template, 2, 1, "p", 7)(9, AdminMembresComponent_p_9_Template, 2, 0, "p", 8);
        i0.ɵɵelementStart(10, "div", 9)(11, "input", 10);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminMembresComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
        i0.ɵɵlistener("ngModelChange", function AdminMembresComponent_Template_input_ngModelChange_11_listener() { return ctx.applyFilter(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "select", 11);
        i0.ɵɵtwoWayListener("ngModelChange", function AdminMembresComponent_Template_select_ngModelChange_12_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filterRole, $event) || (ctx.filterRole = $event); return $event; });
        i0.ɵɵlistener("ngModelChange", function AdminMembresComponent_Template_select_ngModelChange_12_listener() { return ctx.applyFilter(); });
        i0.ɵɵelementStart(13, "option", 12);
        i0.ɵɵtext(14, "Tous les r\u00F4les");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, AdminMembresComponent_option_15_Template, 2, 2, "option", 13);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(16, AdminMembresComponent_div_16_Template, 2, 0, "div", 14)(17, AdminMembresComponent_div_17_Template, 2, 0, "div", 15)(18, AdminMembresComponent_div_18_Template, 22, 1, "div", 16);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Membres (", ctx.membres.length, ")");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.merging);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.merging ? "Fusion..." : "Fusionner les bases", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.successMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.errorMsg);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.canManageRoles);
        i0.ɵɵadvance(2);
        i0.ɵɵtwoWayProperty("ngModel", ctx.search);
        i0.ɵɵadvance();
        i0.ɵɵtwoWayProperty("ngModel", ctx.filterRole);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.roles);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.filtered.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.filtered.length > 0);
    } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["@import '../../admin-shared.css';\n\n.header-actions[_ngcontent-%COMP%] { display: flex; gap: 8px; }\n\n.role-help[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  padding: 12px 14px;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  background: #eff6ff;\n  color: #1e3a5f;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus { border-color: #1D546C; }\n\nselect[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n}\n\n.role-select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: white;\n}\n\ntr.inactive[_ngcontent-%COMP%] { opacity: 0.5; }\n\n.badge-purple[_ngcontent-%COMP%] { background: #faf5ff; color: #7c3aed; }\n.badge-red[_ngcontent-%COMP%]    { background: #fef2f2; color: #dc2626; }\n.badge-blue[_ngcontent-%COMP%]   { background: #eff6ff; color: #1d4ed8; }\n.badge-green[_ngcontent-%COMP%]  { background: #f0fdf4; color: #16a34a; }\n.badge-gray[_ngcontent-%COMP%]   { background: #f9fafb; color: #6b7280; }\n\n.actions[_ngcontent-%COMP%] { display: flex; gap: 6px; }"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminMembresComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-membres', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"page\">\n  <div class=\"page-header\">\n    <h2 class=\"page-title\">Membres ({{ membres.length }})</h2>\n    <div class=\"header-actions\">\n      <button class=\"btn-secondary\" [disabled]=\"merging\" (click)=\"merge()\">\n        {{ merging ? 'Fusion...' : 'Fusionner les bases' }}\n      </button>\n    </div>\n  </div>\n\n  <p class=\"success-msg\" *ngIf=\"successMsg\">{{ successMsg }}</p>\n  <p class=\"error-msg\" *ngIf=\"errorMsg\">{{ errorMsg }}</p>\n  <p class=\"role-help\" *ngIf=\"canManageRoles\">\n    En tant qu\u2019administrateur principal, vous pouvez promouvoir un membre comme administrateur\n    ou lui retirer ce r\u00F4le. La modification est permanente jusqu\u2019\u00E0 votre prochaine d\u00E9cision.\n  </p>\n\n  <!-- Filtres -->\n  <div class=\"filters\">\n    <input type=\"text\" [(ngModel)]=\"search\" (ngModelChange)=\"applyFilter()\"\n           placeholder=\"Rechercher par nom, email, t\u00E9l\u00E9phone...\" class=\"search-input\" />\n    <select [(ngModel)]=\"filterRole\" (ngModelChange)=\"applyFilter()\">\n      <option value=\"\">Tous les r\u00F4les</option>\n      <option *ngFor=\"let r of roles\" [value]=\"r\">{{ roleLabel(r) }}</option>\n    </select>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"loading\">Chargement...</div>\n  <div *ngIf=\"!loading && filtered.length === 0\" class=\"empty\">Aucun membre trouv\u00E9.</div>\n\n  <div *ngIf=\"!loading && filtered.length > 0\" class=\"table-wrap\">\n    <table>\n      <thead>\n        <tr>\n          <th>Nom</th>\n          <th>Email</th>\n          <th>T\u00E9l\u00E9phone</th>\n          <th>Ville</th>\n          <th>R\u00F4le</th>\n          <th>Statut</th>\n          <th>Source</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let m of filtered\" [class.inactive]=\"!m.isActive\">\n          <td><strong>{{ m.firstName }} {{ m.lastName }}</strong></td>\n          <td>{{ m.email }}</td>\n          <td>{{ m.phone || '\u2014' }}</td>\n          <td>{{ m.city || '\u2014' }}</td>\n          <td>\n            <select *ngIf=\"canManageRoles; else roleBadge\"\n                    [(ngModel)]=\"roleDrafts[m.id]\"\n                    (ngModelChange)=\"changeRole(m, $event)\"\n                    [disabled]=\"isPending('role-'+m.id)\"\n                    class=\"role-select\">\n              <option *ngFor=\"let r of roles\" [value]=\"r\">{{ roleLabel(r) }}</option>\n            </select>\n            <ng-template #roleBadge>\n              <span class=\"badge\" [ngClass]=\"roleClass(m.role)\">{{ roleLabel(m.role) }}</span>\n            </ng-template>\n          </td>\n          <td>\n            <span class=\"badge\" [class.badge-green]=\"m.isActive\" [class.badge-gray]=\"!m.isActive\">\n              {{ m.isActive ? 'Actif' : 'Inactif' }}\n            </span>\n          </td>\n          <td><span class=\"badge badge-gray\">{{ m.source || '\u2014' }}</span></td>\n          <td class=\"actions\">\n            <button class=\"btn-del\"\n                    *ngIf=\"m.isActive\"\n                    [disabled]=\"isPending('deactivate-'+m.id)\"\n                    (click)=\"deactivate(m)\"\n                    title=\"D\u00E9sactiver\">\n              {{ isPending('deactivate-'+m.id) ? '\u2026' : '\u2715' }}\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n", styles: ["@import '../../admin-shared.css';\n\n.header-actions { display: flex; gap: 8px; }\n\n.role-help {\n  margin: 0 0 18px;\n  padding: 12px 14px;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  background: #eff6ff;\n  color: #1e3a5f;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.filters {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n\n.search-input {\n  flex: 1;\n  min-width: 200px;\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.search-input:focus { border-color: #1D546C; }\n\nselect {\n  padding: 8px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: white;\n  cursor: pointer;\n}\n\n.role-select {\n  padding: 4px 8px;\n  font-size: 13px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: white;\n}\n\ntr.inactive { opacity: 0.5; }\n\n.badge-purple { background: #faf5ff; color: #7c3aed; }\n.badge-red    { background: #fef2f2; color: #dc2626; }\n.badge-blue   { background: #eff6ff; color: #1d4ed8; }\n.badge-green  { background: #f0fdf4; color: #16a34a; }\n.badge-gray   { background: #f9fafb; color: #6b7280; }\n\n.actions { display: flex; gap: 6px; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminMembresComponent, { className: "AdminMembresComponent", filePath: "app\\admin\\pages\\membres\\membres.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=membres.component.js.map