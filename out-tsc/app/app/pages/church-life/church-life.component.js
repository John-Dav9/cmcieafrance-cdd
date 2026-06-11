import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/pages.service";
import * as i2 from "../../core/services/contact.service";
import * as i3 from "../../core/services/page-content.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function ChurchLifeComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.pageIntro);
} }
function ChurchLifeComponent_section_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h2");
    i0.ɵɵtext(2, "Adresse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.adresse);
} }
function ChurchLifeComponent_section_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h2");
    i0.ɵɵtext(2, "Horaires");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 13);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.horaires);
} }
function ChurchLifeComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 12);
    i0.ɵɵtemplate(1, ChurchLifeComponent_section_4_div_1_Template, 5, 1, "div", 2)(2, ChurchLifeComponent_section_4_div_2_Template, 5, 1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.adresse);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.horaires);
} }
function ChurchLifeComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14)(1, "h2");
    i0.ɵɵtext(2, "Devenir membre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.membreText);
} }
function ChurchLifeComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Merci pour votre message !");
    i0.ɵɵelementEnd();
} }
function ChurchLifeComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
export class ChurchLifeComponent {
    constructor(pagesService, contactService, pageContent) {
        this.pagesService = pagesService;
        this.contactService = contactService;
        this.pageContent = pageContent;
        this.c = {};
        this.contact = { name: '', email: '', message: '' };
        this.submitted = false;
        this.error = '';
    }
    ngOnInit() {
        this.pagesService.getChurchLife().subscribe((res) => (this.data = res));
        this.pageContent.getPage('vie-de-leglise').subscribe((res) => { if (res)
            this.c = res; });
    }
    get pageTitle() { var _a; return this.c.pageTitle || ((_a = this.data) === null || _a === void 0 ? void 0 : _a.pageTitle) || 'Vie de l\'église'; }
    get pageIntro() { var _a; return this.c.pageIntro || ((_a = this.data) === null || _a === void 0 ? void 0 : _a.actusIntro) || ''; }
    get adresse() { var _a; return this.c.adresse || ((_a = this.data) === null || _a === void 0 ? void 0 : _a.adresse) || ''; }
    get horaires() { var _a; return this.c.horaires || ((_a = this.data) === null || _a === void 0 ? void 0 : _a.horaires) || ''; }
    get membreText() { var _a; return this.c.membreText || ((_a = this.data) === null || _a === void 0 ? void 0 : _a.devenirMembre) || ''; }
    get contactIntro() { var _a; return this.c.contactIntro || ((_a = this.data) === null || _a === void 0 ? void 0 : _a.contactIntro) || 'Nous contacter'; }
    onSubmit() {
        this.submitted = false;
        this.error = '';
        this.contactService.sendContact(this.contact).subscribe({
            next: () => (this.submitted = true),
            error: () => (this.error = 'Une erreur est survenue, merci de réessayer.'),
        });
    }
}
ChurchLifeComponent.ɵfac = function ChurchLifeComponent_Factory(t) { return new (t || ChurchLifeComponent)(i0.ɵɵdirectiveInject(i1.PagesService), i0.ɵɵdirectiveInject(i2.ContactService), i0.ɵɵdirectiveInject(i3.PageContentService)); };
ChurchLifeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChurchLifeComponent, selectors: [["app-church-life"]], decls: 27, vars: 11, consts: [["contactForm", "ngForm"], [1, "cl-header"], [4, "ngIf"], ["class", "cl-infos", 4, "ngIf"], ["class", "cl-membre", 4, "ngIf"], [1, "cl-contact"], [3, "ngSubmit"], ["type", "text", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["name", "message", "rows", "4", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 3, "disabled"], ["class", "error", 4, "ngIf"], [1, "cl-infos"], [2, "white-space", "pre-line"], [1, "cl-membre"], [1, "error"]], template: function ChurchLifeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "section", 1)(1, "h1");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, ChurchLifeComponent_p_3_Template, 2, 1, "p", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, ChurchLifeComponent_section_4_Template, 3, 2, "section", 3)(5, ChurchLifeComponent_section_5_Template, 5, 1, "section", 4);
        i0.ɵɵelementStart(6, "section", 5)(7, "h2");
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "form", 6, 0);
        i0.ɵɵlistener("ngSubmit", function ChurchLifeComponent_Template_form_ngSubmit_9_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onSubmit()); });
        i0.ɵɵelementStart(11, "div")(12, "label");
        i0.ɵɵtext(13, "Nom");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "input", 7);
        i0.ɵɵtwoWayListener("ngModelChange", function ChurchLifeComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.contact.name, $event) || (ctx.contact.name = $event); return i0.ɵɵresetView($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "div")(16, "label");
        i0.ɵɵtext(17, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "input", 8);
        i0.ɵɵtwoWayListener("ngModelChange", function ChurchLifeComponent_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.contact.email, $event) || (ctx.contact.email = $event); return i0.ɵɵresetView($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "div")(20, "label");
        i0.ɵɵtext(21, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "textarea", 9);
        i0.ɵɵtwoWayListener("ngModelChange", function ChurchLifeComponent_Template_textarea_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.contact.message, $event) || (ctx.contact.message = $event); return i0.ɵɵresetView($event); });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "button", 10);
        i0.ɵɵtext(24, "Envoyer");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, ChurchLifeComponent_p_25_Template, 2, 0, "p", 2)(26, ChurchLifeComponent_p_26_Template, 2, 1, "p", 11);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        const contactForm_r3 = i0.ɵɵreference(10);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.pageTitle);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.pageIntro);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.adresse || ctx.horaires);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.membreText);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.contactIntro);
        i0.ɵɵadvance(6);
        i0.ɵɵtwoWayProperty("ngModel", ctx.contact.name);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.contact.email);
        i0.ɵɵadvance(4);
        i0.ɵɵtwoWayProperty("ngModel", ctx.contact.message);
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", !contactForm_r3.form.valid);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.submitted);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.error);
    } }, dependencies: [i4.NgIf, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.NgModel, i5.NgForm], styles: ["section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  border-radius: 999px;\n  border: none;\n  background: #333;\n  color: white;\n  font-weight: 600;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChurchLifeComponent, [{
        type: Component,
        args: [{ selector: 'app-church-life', template: "<section class=\"cl-header\">\n  <h1>{{ pageTitle }}</h1>\n  <p *ngIf=\"pageIntro\">{{ pageIntro }}</p>\n</section>\n\n<section class=\"cl-infos\" *ngIf=\"adresse || horaires\">\n  <div *ngIf=\"adresse\">\n    <h2>Adresse</h2>\n    <p>{{ adresse }}</p>\n  </div>\n  <div *ngIf=\"horaires\">\n    <h2>Horaires</h2>\n    <p style=\"white-space:pre-line\">{{ horaires }}</p>\n  </div>\n</section>\n\n<section class=\"cl-membre\" *ngIf=\"membreText\">\n  <h2>Devenir membre</h2>\n  <p>{{ membreText }}</p>\n</section>\n\n<section class=\"cl-contact\">\n  <h2>{{ contactIntro }}</h2>\n\n  <form (ngSubmit)=\"onSubmit()\" #contactForm=\"ngForm\">\n    <div>\n      <label>Nom</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"contact.name\" required />\n    </div>\n    <div>\n      <label>Email</label>\n      <input type=\"email\" name=\"email\" [(ngModel)]=\"contact.email\" required />\n    </div>\n    <div>\n      <label>Message</label>\n      <textarea name=\"message\" rows=\"4\" [(ngModel)]=\"contact.message\" required></textarea>\n    </div>\n    <button type=\"submit\" [disabled]=\"!contactForm.form.valid\">Envoyer</button>\n    <p *ngIf=\"submitted\">Merci pour votre message !</p>\n    <p *ngIf=\"error\" class=\"error\">{{ error }}</p>\n  </form>\n</section>\n", styles: ["section {\n  margin-bottom: 2rem;\n}\n\nform div {\n  margin-bottom: 0.75rem;\n}\n\ninput, textarea {\n  width: 100%;\n  padding: 0.5rem;\n  box-sizing: border-box;\n}\n\nbutton {\n  padding: 0.5rem 1.5rem;\n  border-radius: 999px;\n  border: none;\n  background: #333;\n  color: white;\n  font-weight: 600;\n}\n\n.error {\n  color: red;\n}"] }]
    }], () => [{ type: i1.PagesService }, { type: i2.ContactService }, { type: i3.PageContentService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChurchLifeComponent, { className: "ChurchLifeComponent", filePath: "app\\pages\\church-life\\church-life.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=church-life.component.js.map