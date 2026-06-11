import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
function AdminLayoutComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9)(1, "span", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r1.route);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
} }
export class AdminLayoutComponent {
    constructor() {
        this.auth = inject(AdminAuthService);
        this.menuOpen = false;
        this.navItems = [
            { label: 'Tableau de bord', icon: '⊞', route: '/espace-admin/dashboard' },
            { label: 'Membres', icon: '👥', route: '/espace-admin/membres' },
            { label: 'Paramètres', icon: '⚙️', route: '/espace-admin/parametres' },
            { label: 'Inscriptions', icon: '✎', route: '/espace-admin/inscriptions' },
            { label: 'Annonces', icon: '📢', route: '/espace-admin/annonces' },
            { label: 'Actualités', icon: '📰', route: '/espace-admin/actualites' },
            { label: 'Bibliothèque', icon: '📖', route: '/espace-admin/bibliotheque' },
            { label: 'Cantiques', icon: '♫', route: '/espace-admin/cantiques' },
            { label: 'Témoignages', icon: '💬', route: '/espace-admin/temoignages' },
            { label: 'Marathons bibliques', icon: '📅', route: '/espace-admin/marathon' },
            { label: 'Horaires des cultes', icon: '🕐', route: '/espace-admin/cultes' },
            { label: 'Prochain culte présentiel', icon: '📅', route: '/espace-admin/prochain-culte' },
            { label: 'Modèles d\'emails', icon: '✉️', route: '/espace-admin/email-templates' },
            { label: 'Demandes de prière', icon: '🙏', route: '/espace-admin/prieres' },
            { label: 'Newsletter', icon: '📧', route: '/espace-admin/newsletter' },
            { label: 'Messages / Prédications', icon: '🎙️', route: '/espace-admin/messages' },
            { label: 'Réunions en ligne', icon: '📹', route: '/espace-admin/reunions' },
            { label: 'Replays / Sermons', icon: '▶️', route: '/espace-admin/replays' },
            { label: 'Groupes de cellule', icon: '🏘️', route: '/espace-admin/cell-groups' },
            { label: 'Mentorat', icon: '🤝', route: '/espace-admin/mentorship' },
            { label: 'Journal d\'audit', icon: '📋', route: '/espace-admin/audit' },
            { label: 'Statistiques', icon: '📊', route: '/espace-admin/stats' },
            { label: 'Thème & couleurs', icon: '🎨', route: '/espace-admin/theme' },
            { label: 'Pages & contenu', icon: '✏️', route: '/espace-admin/pages' },
        ];
    }
    logout() {
        this.auth.logout();
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(); };
AdminLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 1, consts: [[1, "admin-shell"], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-text"], [1, "brand-sub"], [1, "sidebar-nav"], ["routerLinkActive", "active", "class", "nav-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "logout-btn", 3, "click"], [1, "admin-content"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "nav-icon"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        i0.ɵɵtext(4, "CMCIEA");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6, "Administration");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "nav", 5);
        i0.ɵɵtemplate(8, AdminLayoutComponent_a_8_Template, 5, 3, "a", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 7);
        i0.ɵɵlistener("click", function AdminLayoutComponent_Template_button_click_9_listener() { return ctx.logout(); });
        i0.ɵɵtext(10, " \u23CF D\u00E9connexion ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "main", 8);
        i0.ɵɵelement(12, "router-outlet");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.navItems);
    } }, dependencies: [CommonModule, i1.NgForOf, RouterModule, i2.RouterOutlet, i2.RouterLink, i2.RouterLinkActive], styles: ["*[_ngcontent-%COMP%] { box-sizing: border-box; margin: 0; padding: 0; }\n\n.admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  font-family: 'Inter', sans-serif;\n  background: #f4f6f9;\n}\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #1a1f2e;\n  color: #c8cdd8;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0; left: 0;\n  height: 100vh;\n  z-index: 100;\n}\n\n.sidebar-brand[_ngcontent-%COMP%] {\n  padding: 28px 24px 20px;\n  border-bottom: 1px solid #2d3347;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 1px;\n}\n\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #6b7898;\n  margin-top: 2px;\n  display: block;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 0;\n  overflow-y: auto;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 24px;\n  color: #8b93a8;\n  text-decoration: none;\n  font-size: 14px;\n  transition: background 0.15s, color 0.15s;\n  border-left: 3px solid transparent;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #242a3d;\n  color: #e0e4ef;\n}\n\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #242a3d;\n  color: #ffffff;\n  border-left-color: #4f7dff;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 20px;\n  text-align: center;\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 16px 24px;\n  background: none;\n  border: none;\n  border-top: 1px solid #2d3347;\n  color: #8b93a8;\n  cursor: pointer;\n  font-size: 13px;\n  text-align: left;\n  width: 100%;\n  transition: color 0.15s;\n}\n\n.logout-btn[_ngcontent-%COMP%]:hover { color: #ef5350; }\n\n\n\n.admin-content[_ngcontent-%COMP%] {\n  margin-left: 240px;\n  flex: 1;\n  padding: 32px;\n  min-height: 100vh;\n}\n\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] { width: 100%; height: auto; position: relative; }\n  .admin-content[_ngcontent-%COMP%] { margin-left: 0; padding: 16px; }\n  .admin-shell[_ngcontent-%COMP%] { flex-direction: column; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-layout', standalone: true, imports: [CommonModule, RouterModule], template: "<div class=\"admin-shell\">\n  <aside class=\"sidebar\">\n    <div class=\"sidebar-brand\">\n      <span class=\"brand-text\">CMCIEA</span>\n      <span class=\"brand-sub\">Administration</span>\n    </div>\n\n    <nav class=\"sidebar-nav\">\n      <a\n        *ngFor=\"let item of navItems\"\n        [routerLink]=\"item.route\"\n        routerLinkActive=\"active\"\n        class=\"nav-item\"\n      >\n        <span class=\"nav-icon\">{{ item.icon }}</span>\n        <span>{{ item.label }}</span>\n      </a>\n    </nav>\n\n    <button class=\"logout-btn\" (click)=\"logout()\">\n      \u23CF D\u00E9connexion\n    </button>\n  </aside>\n\n  <main class=\"admin-content\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n", styles: ["* { box-sizing: border-box; margin: 0; padding: 0; }\n\n.admin-shell {\n  display: flex;\n  min-height: 100vh;\n  font-family: 'Inter', sans-serif;\n  background: #f4f6f9;\n}\n\n/* \u2500\u2500 Sidebar \u2500\u2500 */\n.sidebar {\n  width: 240px;\n  background: #1a1f2e;\n  color: #c8cdd8;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0; left: 0;\n  height: 100vh;\n  z-index: 100;\n}\n\n.sidebar-brand {\n  padding: 28px 24px 20px;\n  border-bottom: 1px solid #2d3347;\n}\n\n.brand-text {\n  display: block;\n  font-size: 18px;\n  font-weight: 700;\n  color: #ffffff;\n  letter-spacing: 1px;\n}\n\n.brand-sub {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #6b7898;\n  margin-top: 2px;\n  display: block;\n}\n\n.sidebar-nav {\n  flex: 1;\n  padding: 16px 0;\n  overflow-y: auto;\n}\n\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 24px;\n  color: #8b93a8;\n  text-decoration: none;\n  font-size: 14px;\n  transition: background 0.15s, color 0.15s;\n  border-left: 3px solid transparent;\n}\n\n.nav-item:hover {\n  background: #242a3d;\n  color: #e0e4ef;\n}\n\n.nav-item.active {\n  background: #242a3d;\n  color: #ffffff;\n  border-left-color: #4f7dff;\n}\n\n.nav-icon {\n  font-size: 16px;\n  width: 20px;\n  text-align: center;\n}\n\n.logout-btn {\n  margin: 0;\n  padding: 16px 24px;\n  background: none;\n  border: none;\n  border-top: 1px solid #2d3347;\n  color: #8b93a8;\n  cursor: pointer;\n  font-size: 13px;\n  text-align: left;\n  width: 100%;\n  transition: color 0.15s;\n}\n\n.logout-btn:hover { color: #ef5350; }\n\n/* \u2500\u2500 Content \u2500\u2500 */\n.admin-content {\n  margin-left: 240px;\n  flex: 1;\n  padding: 32px;\n  min-height: 100vh;\n}\n\n@media (max-width: 768px) {\n  .sidebar { width: 100%; height: auto; position: relative; }\n  .admin-content { margin-left: 0; padding: 16px; }\n  .admin-shell { flex-direction: column; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "app\\admin\\components\\admin-layout\\admin-layout.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-layout.component.js.map