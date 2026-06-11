import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../core/services/pages.service";
import * as i3 from "../../core/services/page-content.service";
import * as i4 from "@angular/platform-browser";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/router";
function HomeComponent_div_67_a_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 66);
    i0.ɵɵtext(1, "Rejoindre \u2192");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", c_r2.lien, i0.ɵɵsanitizeUrl);
} }
function HomeComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "h3", 63);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 64);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, HomeComponent_div_67_a_5_Template, 2, 1, "a", 65);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r2.jour);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" DE ", c_r2.heure, " \u2013 ", c_r2.description, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", c_r2.lien);
} }
function HomeComponent_button_69_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function HomeComponent_button_69_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.nlOpen = !ctx_r3.nlOpen); });
    i0.ɵɵelementStart(1, "span", 68);
    i0.ɵɵtext(2, "\uD83D\uDCE7");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Recevoir nos actualit\u00E9s par email ");
    i0.ɵɵelementEnd();
} }
function HomeComponent_div_70_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 74);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.nlError);
} }
function HomeComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "input", 70);
    i0.ɵɵtwoWayListener("ngModelChange", function HomeComponent_div_70_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.nlPrenom, $event) || (ctx_r3.nlPrenom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "input", 71);
    i0.ɵɵtwoWayListener("ngModelChange", function HomeComponent_div_70_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.nlEmail, $event) || (ctx_r3.nlEmail = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 72);
    i0.ɵɵlistener("click", function HomeComponent_div_70_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.subscribeNewsletter()); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, HomeComponent_div_70_p_5_Template, 2, 1, "p", 73);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.nlPrenom);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.nlEmail);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r3.nlSending || !ctx_r3.nlEmail);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.nlSending ? "Inscription\u2026" : "S'abonner", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.nlError);
} }
function HomeComponent_p_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u2713 ", ctx_r3.nlSuccess, "");
} }
const DEFAULT_CULTES = [
    { id: '1', jour: 'DU LUNDI AU VENDREDI', heure: '12H30 \u2013 13H30', description: 'PRI\u00c8RE EN LIGNE' },
    { id: '2', jour: 'DIMANCHE', heure: '17H \u2013 18H', description: 'C\u00c9L\u00c9BRATION EN LIGNE' },
    { id: '3', jour: 'MERCREDI', heure: '20H \u2013 21H', description: 'ENSEIGNEMENTS BIBLIQUES EN LIGNE' },
    { id: '4', jour: 'VENDREDI', heure: '23H \u2013 1H', description: 'NUIT DE PRI\u00c8RE EN LIGNE' },
];
export class HomeComponent {
    get heroTagline() { return this.c.heroTagline || 'Bienvenue à la CMCIEA-FRANCE'; }
    get heroTitle() { return this.c.heroTitle || 'Une église pour <span>tous</span>,<br/>Une église enracinée dans <span>la Parole</span>'; }
    get heroText() { return this.c.heroText || 'Découvre une communauté de chercheurs de Dieu qui aiment Jésus, aiment les gens et désirent voir l\'Évangile transformer des vies.'; }
    get heroImageUrl() { return this.c.heroImageUrl || 'assets/images/eglise-presentation.png'; }
    get visionHeading() { return this.c.visionHeading || 'Une communauté de <span>disciples du Seigneur Jésus-Christ</span>, qui ont décidé de vivre selon la <span>Parole de Dieu</span>'; }
    get mediaTitle() { return this.c.mediaTitle || 'DÉCOUVREZ NOS PROGRAMMATIONS MÉDIAS'; }
    get mediaText() { return this.c.mediaText || 'Nous annonçons la bonne nouvelle de Jésus-Christ qui sauve, guérit et délivre au travers des médias partout dans le monde.'; }
    get mediaYoutubeUrl() { return this.c.mediaYoutubeUrl || 'https://www.youtube.com/channel/UCdy_sjWGshzrF2NqzzTfd1Q'; }
    get mediaButtonText() { return this.c.mediaButtonText || 'Je veux voir la programmation'; }
    get contactTitle() { return this.c.contactTitle || 'Nous contacter'; }
    get contactIntro() { return this.c.contactIntro || 'Une question, un besoin de prière ? Écris-nous, notre équipe te répondra rapidement.'; }
    get whatsappNumber() { return this.c.whatsappNumber || '33744896818'; }
    get contactEmail() { return this.c.contactEmail || 'contact@cmciea-france.com'; }
    constructor(http, pagesService, pageContent, titleService, metaService) {
        this.http = http;
        this.pagesService = pagesService;
        this.pageContent = pageContent;
        this.titleService = titleService;
        this.metaService = metaService;
        this.c = {};
        this.cultes = DEFAULT_CULTES;
        this.nextCulte = null;
        // ─── Newsletter ─────────────────────────────────────────────────────────────
        this.nlOpen = false;
        this.nlPrenom = '';
        this.nlEmail = '';
        this.nlSending = false;
        this.nlSuccess = '';
        this.nlError = '';
    }
    ngOnInit() {
        this.pagesService.getHome().subscribe((res) => (this.data = res));
        this.pageContent.getPage('home').subscribe((res) => { if (res)
            this.c = res; });
        this.http.get(`${environment.apiBase}/settings/cultes`).subscribe({
            next: (data) => { if (data === null || data === void 0 ? void 0 : data.length)
                this.cultes = data; },
            error: () => { },
        });
        this.http.get(`${environment.apiBase}/settings/next-culte`).subscribe({
            next: (data) => { if (data === null || data === void 0 ? void 0 : data.date)
                this.nextCulte = data; },
            error: () => { },
        });
        /* ✅ TITLE (très important pour Google) */
        this.titleService.setTitle('CMCIEA France | Communauté Missionnaire Chrétienne Internationale et Eglises Associées en France');
        /* ✅ META DESCRIPTION */
        this.metaService.updateTag({
            name: 'description',
            content: 'CMCIEA France – Église Chercheurs de Dieu. Communauté Missionnaire Chrétienne Internationale. ' +
                'Marathon biblique, enseignements bibliques, prière, célébrations et ressources spirituelles en ligne.'
        });
        /* ✅ META KEYWORDS (invisible mais utile pour cohérence SEO) */
        this.metaService.updateTag({
            name: 'keywords',
            content: `
        cmciea,
        cmciea france,
        cmci france,
        cmciea france chercheurs de dieu,
        cmciea chercheurs de dieu,
        communauté missionnaire chrétienne internationale,
        église cmciea france,
        église chercheurs de dieu,
        cmciea paris,
        cmciea france marathon biblique
      `
        });
        /* ✅ SEO SÉMANTIQUE SUPPLÉMENTAIRE (optionnel mais pro) */
        this.metaService.updateTag({
            property: 'og:title',
            content: 'CMCIEA France – Église Chercheurs de Dieu'
        });
        this.metaService.updateTag({
            property: 'og:description',
            content: 'Église CMCIEA France – Chercheurs de Dieu. Une communauté enracinée dans la Parole de Dieu.'
        });
        this.metaService.updateTag({
            property: 'og:type',
            content: 'website'
        });
        this.metaService.updateTag({
            property: 'og:locale',
            content: 'fr_FR'
        });
    }
    ngAfterViewInit() {
        const elements = document.querySelectorAll('.animate-reveal');
        if (!elements.length)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // ✅ animation 1 seule fois
                }
            });
        }, { threshold: 0.25 });
        elements.forEach((el) => observer.observe(el));
    }
    subscribeNewsletter() {
        if (!this.nlEmail)
            return;
        this.nlSending = true;
        this.nlSuccess = '';
        this.nlError = '';
        this.http.post(`${environment.apiBase}/newsletter/subscribe`, { prenom: this.nlPrenom, email: this.nlEmail }).subscribe({
            next: () => {
                this.nlSuccess = 'Merci ! Vous êtes maintenant abonné(e) à notre newsletter.';
                this.nlSending = false;
                this.nlPrenom = '';
                this.nlEmail = '';
            },
            error: (err) => {
                var _a, _b;
                this.nlError = (_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'Une erreur est survenue. Veuillez réessayer.';
                this.nlSending = false;
            },
        });
    }
    sendWhatsApp(form, prenom, nom, email, message) {
        // 🔐 Sécurisation des champs
        const safePrenom = (prenom || '').trim();
        const safeNom = (nom || '').trim();
        const safeEmail = (email || '').trim();
        const safeMessage = (message || '').trim();
        // ✅ Validation HTML native
        if (!form.reportValidity()) {
            return;
        }
        // ✅ Sécurité supplémentaire
        if (!safePrenom || !safeNom || !safeEmail || !safeMessage) {
            return;
        }
        // 🕊️ Message pastoral
        const text = `
🙏 Bonjour,

Je vous contacte via le site *CMCIEA-FRANCE – Chercheurs de Dieu*.

👤 *Prénom* : ${safePrenom}
👤 *Nom* : ${safeNom}
📧 *Email* : ${safeEmail}

📝 *Message / Demande* :
${safeMessage}

Que le Seigneur vous bénisse.
  `.trim();
        // 📲 Numéro WhatsApp (France : 33 + numéro sans 0)
        const phoneNumber = '33744896818';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        // 🚀 Ouvre WhatsApp
        window.open(url, '_blank');
        // ✅ Reset du formulaire (UX propre)
        form.reset();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.PagesService), i0.ɵɵdirectiveInject(i3.PageContentService), i0.ɵɵdirectiveInject(i4.Title), i0.ɵɵdirectiveInject(i4.Meta)); };
HomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 108, vars: 15, consts: [["contactForm", ""], ["prenom", ""], ["nom", ""], ["email", ""], ["message", ""], [1, "hero"], ["alt", "CMCIEA-FRANCE Chercheurs de Dieu", 1, "hero-video", 3, "src"], [1, "hero-overlay"], [1, "hero-content"], [1, "hero-tagline"], [1, "hero-title", 3, "innerHTML"], [1, "hero-text"], [1, "cards-section"], [1, "cards-grid"], [1, "info-card", "card-premiere-visite"], [1, "card-eyebrow"], [1, "card-title"], [1, "card-text"], ["routerLink", "/premiere-visite", 1, "btn", "btn-outline-dark", "btn-sm"], [1, "info-card", "card-ressources"], ["routerLink", "/ressources/decouvrir", 1, "btn", "btn-outline-dark", "btn-sm"], [1, "info-card", "card-celebrations"], ["routerLink", "/marathon-biblique", 1, "btn", "btn-outline-light", "btn-sm"], [1, "info-card", "card-enfants"], ["routerLink", "/departements", 1, "btn", "btn-outline-dark", "btn-sm"], [1, "vision-section"], [1, "vision-container"], [1, "vision-heading", "animate-reveal", 3, "innerHTML"], [1, "media-section"], [1, "media-inner"], [1, "media-title"], [1, "media-text"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-outline-dark", "media-btn", 3, "href"], [1, "events-contact-section"], [1, "events-contact-grid"], [1, "events-column"], [1, "events-header"], [1, "events-icon"], [1, "events-title"], ["class", "event-item", 4, "ngFor", "ngForOf"], [1, "nl-block"], ["class", "nl-trigger-btn", 3, "click", 4, "ngIf"], ["class", "nl-inline-form", 4, "ngIf"], ["class", "nl-success-msg", 4, "ngIf"], [1, "contact-column"], [1, "contact-card"], [1, "contact-title"], [1, "contact-intro"], [1, "contact-form"], [1, "form-row"], [1, "form-group"], ["for", "prenom"], ["id", "prenom", "type", "text", "name", "prenom", "required", ""], ["for", "nom"], ["id", "nom", "type", "text", "name", "nom", "required", ""], ["for", "email"], ["id", "email", "type", "email", "name", "email", "required", ""], ["for", "message"], ["id", "message", "name", "message", "rows", "4", "placeholder", "Dis-nous comment nous pouvons t\u2019aider.", "required", ""], ["type", "button", 1, "btn", "btn-primary", "contact-btn", 3, "click"], [1, "contact-extra"], ["href", "mailto:contact@cmciea-france.com"], [1, "event-item"], [1, "event-day"], [1, "event-details"], ["target", "_blank", "rel", "noopener", "class", "event-link", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 1, "event-link", 3, "href"], [1, "nl-trigger-btn", 3, "click"], [1, "nl-trigger-icon"], [1, "nl-inline-form"], ["type", "text", "name", "nlPrenom", "placeholder", "Votre pr\u00E9nom (optionnel)", 1, "nl-field", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "nlEmail", "placeholder", "Votre adresse e-mail *", 1, "nl-field", 3, "ngModelChange", "ngModel"], [1, "nl-submit-btn", 3, "click", "disabled"], ["class", "nl-error", 4, "ngIf"], [1, "nl-error"], [1, "nl-success-msg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "section", 5);
        i0.ɵɵelement(1, "img", 6)(2, "div", 7);
        i0.ɵɵelementStart(3, "div", 8)(4, "p", 9);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "h1", 10);
        i0.ɵɵelementStart(7, "p", 11);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "section", 12)(10, "div", 13)(11, "article", 14)(12, "p", 15);
        i0.ɵɵtext(13, "PREMI\u00C8RE VISITE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "h2", 16);
        i0.ɵɵtext(15, "COMMENCER ICI");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "p", 17);
        i0.ɵɵtext(17, " D\u00E9couvre CMCIEA-FRANCE CHERCHEURS DE DIEU. Comment nous rejoindre. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "a", 18);
        i0.ɵɵtext(19, "D\u00C9COUVRIR");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "article", 19)(21, "p", 15);
        i0.ɵɵtext(22, "RESSOURCES");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "h2", 16);
        i0.ɵɵtext(24, "NOUVEAU DANS LA FOI ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "p", 17);
        i0.ɵɵtext(26, " Une s\u00E9lection de ressources pour d\u00E9buter ton cheminement spirituel. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "a", 20);
        i0.ɵɵtext(28, " GO! ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(29, "article", 21)(30, "p", 15);
        i0.ɵɵtext(31, "PROGRAMME");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "h2", 16);
        i0.ɵɵtext(33, "MARATHON BIBLIQUE");
        i0.ɵɵelement(34, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "p", 17);
        i0.ɵɵtext(36, " Transformez votre vie en 45 jours : marathon biblique du 05 janvier au 18 f\u00E9vrier 2026. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "a", 22);
        i0.ɵɵtext(38, "D\u00C9COUVRIR");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(39, "article", 23)(40, "p", 15);
        i0.ɵɵtext(41, "DEPARTEMENT");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "h2", 16);
        i0.ɵɵtext(43, "ENFANTS & JEUNES");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "p", 17);
        i0.ɵɵtext(45, " Un espace fun et biblique pour grandir dans la foi, cr\u00E9er des liens et apprendre la Parole. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "a", 24);
        i0.ɵɵtext(47, "D\u00C9COUVRIR");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(48, "section", 25)(49, "div", 26);
        i0.ɵɵelement(50, "h2", 27);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(51, "section", 28)(52, "div", 29)(53, "h2", 30);
        i0.ɵɵtext(54);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "p", 31);
        i0.ɵɵtext(56);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "a", 32);
        i0.ɵɵtext(58);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(59, "section", 33)(60, "div", 34)(61, "div", 35)(62, "div", 36)(63, "span", 37);
        i0.ɵɵtext(64, "\uD83D\uDD14");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "h2", 38);
        i0.ɵɵtext(66, "PROGRAMMES HEBDOMADAIRES");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(67, HomeComponent_div_67_Template, 6, 4, "div", 39);
        i0.ɵɵelementStart(68, "div", 40);
        i0.ɵɵtemplate(69, HomeComponent_button_69_Template, 4, 0, "button", 41)(70, HomeComponent_div_70_Template, 6, 5, "div", 42)(71, HomeComponent_p_71_Template, 2, 1, "p", 43);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(72, "div", 44)(73, "div", 45)(74, "h2", 46);
        i0.ɵɵtext(75);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(76, "p", 47);
        i0.ɵɵtext(77);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(78, "form", 48, 0)(80, "div", 49)(81, "div", 50)(82, "label", 51);
        i0.ɵɵtext(83, "Pr\u00E9nom");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(84, "input", 52, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(86, "div", 50)(87, "label", 53);
        i0.ɵɵtext(88, "Nom");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(89, "input", 54, 2);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(91, "div", 50)(92, "label", 55);
        i0.ɵɵtext(93, "Adresse e-mail");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(94, "input", 56, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(96, "div", 50)(97, "label", 57);
        i0.ɵɵtext(98, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(99, "textarea", 58, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(101, "button", 59);
        i0.ɵɵlistener("click", function HomeComponent_Template_button_click_101_listener() { i0.ɵɵrestoreView(_r1); const contactForm_r6 = i0.ɵɵreference(79); const prenom_r7 = i0.ɵɵreference(85); const nom_r8 = i0.ɵɵreference(90); const email_r9 = i0.ɵɵreference(95); const message_r10 = i0.ɵɵreference(100); return i0.ɵɵresetView(ctx.sendWhatsApp(contactForm_r6, prenom_r7.value, nom_r8.value, email_r9.value, message_r10.value)); });
        i0.ɵɵtext(102, " Envoyer le message ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(103, "div", 60)(104, "p");
        i0.ɵɵtext(105, " Ou \u00E9cris-nous directement \u00E0 ");
        i0.ɵɵelementStart(106, "a", 61);
        i0.ɵɵtext(107, "contact@cmciea-france.com");
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance();
        i0.ɵɵproperty("src", ctx.heroImageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.heroTagline);
        i0.ɵɵadvance();
        i0.ɵɵproperty("innerHTML", ctx.heroTitle, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.heroText);
        i0.ɵɵadvance(42);
        i0.ɵɵproperty("innerHTML", ctx.visionHeading, i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.mediaTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.mediaText);
        i0.ɵɵadvance();
        i0.ɵɵproperty("href", ctx.mediaYoutubeUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx.mediaButtonText);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.cultes);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.nlSuccess);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.nlOpen && !ctx.nlSuccess);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.nlSuccess);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.contactTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.contactIntro);
    } }, dependencies: [i5.NgForOf, i5.NgIf, i6.ɵNgNoValidate, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgControlStatusGroup, i6.NgModel, i6.NgForm, i7.RouterLink], styles: ["[_nghost-%COMP%] {\r\n  \n\r\n  --brand: #1D546C;\r\n  --brand-dark: #1A3D64;\r\n  --brand-soft: #F4F4F4;\r\n\r\n  --accent: #00B7B5;\r\n  --highlight: #00B7B5;\r\n\r\n  --bg: #F4F4F4;\r\n  --surface: #FFFFFF;\r\n  --border: #005461;\r\n\r\n  --title: #1D546C;\r\n  --text: #111111;\r\n\r\n  \n\r\n  --cta: #00B7B5;\r\n  --cta-hover: #018790;\r\n\r\n  --support: #0C2B4E;\r\n  --brand-secondary: #0C2B4E;\r\n\r\n  \n\r\n  --space-xs: 0.75rem;   \n\r\n  --space-sm: 1.25rem;   \n\r\n  --space-md: 2rem;      \n\r\n  --space-lg: 3rem;      \n\r\n  --space-xl: 4.5rem;    \n\r\n\r\n  display: block;\r\n  width: 100%;\r\n  color: var(--text);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\r\n}\r\n\r\n\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] { margin-top: 0; }\r\nsection[_ngcontent-%COMP%] { margin: 0; }\r\n\r\n\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n}\r\n\r\n\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after { box-sizing: border-box; }\r\n\r\n\n\r\n\r\n.hero[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100vh;\r\n  min-height: 520px;\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding: 0 6vw var(--space-lg);\r\n  color: #ffffff;\r\n  background: var(--brand-dark);\r\n}\r\n\r\n.hero-video[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  inset: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  z-index: 0;\r\n  animation: _ngcontent-%COMP%_fadeInHero 1.2s ease-out forwards;\r\n}\r\n\r\n.hero-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  inset: 0;\r\n  background: linear-gradient(120deg, rgba(0,0,0,0.7), rgba(0,0,0,0.35));\r\n  z-index: 1;\r\n  animation: _ngcontent-%COMP%_fadeInHero 1.4s ease-out forwards;\r\n}\r\n\r\n.hero-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width: 640px;\r\n  z-index: 2;\r\n  opacity: 0;\r\n  animation: _ngcontent-%COMP%_fadeInHero 1.6s ease-out forwards;\r\n}\r\n\r\n.hero-tagline[_ngcontent-%COMP%] {\r\n  letter-spacing: 0.16em;\r\n  text-transform: uppercase;\r\n  font-size: 0.9rem;\r\n  margin: 0 0 var(--space-xs);\r\n  opacity: 0.9;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%] {\r\n  font-size: clamp(2.4rem, 4vw, 3.6rem);\r\n  line-height: 1.1;\r\n  margin: 0 0 var(--space-sm);\r\n  font-weight: 900;\r\n}\r\n\r\n.hero-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--highlight); }\r\n\r\n.hero-text[_ngcontent-%COMP%] {\r\n  font-size: 1.05rem;\r\n  max-width: 32rem;\r\n  margin: 0 0 var(--space-md);\r\n  line-height: 1.6;\r\n}\r\n\r\n.hero-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n\n\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.9rem 1.8rem;\r\n  border-radius: 999px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n  font-size: 0.98rem;\r\n  border: 2px solid transparent;\r\n  cursor: pointer;\r\n  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease,\r\n    color 0.15s ease, border-color 0.15s ease;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.45);\r\n  background: var(--cta-hover);\r\n  color: #ffffff;\r\n}\r\n\r\n\n\r\n.btn-outline-light[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  color: #ffffff;\r\n  border: 2px solid rgba(255, 255, 255, 0.9);\r\n  border-radius: 999px;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%]:hover {\r\n  background: #ffffff;\r\n  color: #111111;\r\n}\r\n\r\n\n\r\n.btn-outline-dark[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: 2px solid rgba(12, 43, 78, 0.9);\r\n  color: rgba(12, 43, 78, 1);\r\n  border-radius: 999px;\r\n}\r\n\r\n.btn-outline-dark[_ngcontent-%COMP%]:hover {\r\n  background: rgba(12, 43, 78, 1);\r\n  color: #ffffff;\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  padding: 0.65rem 1.2rem;\r\n  font-size: 0.92rem;\r\n}\r\n\r\n\n\r\n\r\n.cards-section[_ngcontent-%COMP%] {\r\n  padding: var(--space-xl) 6vw;\r\n  background: var(--bg);\r\n}\r\n\r\n.cards-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  gap: 1.5rem;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%] {\r\n  padding: 2.2rem 2rem;\r\n  border-radius: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 250px;\r\n  position: relative;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] { align-self: flex-start; }\r\n\r\n.card-premiere-visite[_ngcontent-%COMP%] { background: var(--accent); color: #ffffff; }\r\n.card-ressources[_ngcontent-%COMP%] { background: var(--surface); color: var(--title); }\r\n.card-celebrations[_ngcontent-%COMP%] { background: var(--brand); color: #ffffff; }\r\n.card-enfants[_ngcontent-%COMP%] { background: var(--surface); color: var(--title); }\r\n\r\n\n\r\n.card-eyebrow[_ngcontent-%COMP%] {\r\n  font-size: 0.82rem;\r\n  letter-spacing: 0.16em;\r\n  margin: 0 0 0.75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n  font-size: clamp(1.55rem, 1.9vw, 1.95rem);\r\n  line-height: 1.12;\r\n  margin: 0 0 0.9rem;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  line-height: 1.6;\r\n  margin: 0 0 1.4rem;\r\n  max-width: 22rem;\r\n}\r\n\r\n\n\r\n\r\n.vision-section[_ngcontent-%COMP%] {\r\n  padding: var(--space-xl) 6vw;\r\n  background: #F1F3F4;\r\n  color: var(--text);\r\n}\r\n\r\n.vision-container[_ngcontent-%COMP%] {\r\n  max-width: 1040px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.vision-heading[_ngcontent-%COMP%] {\r\n  font-size: clamp(2.4rem, 4.1vw, 3.4rem);\r\n  line-height: 1.15;\r\n  font-weight: 800;\r\n  margin: 0 0 var(--space-md);\r\n}\r\n\r\n.vision-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--brand); }\r\n\r\n.vision-text[_ngcontent-%COMP%] {\r\n  font-size: 1.05rem;\r\n  line-height: 1.8;\r\n  margin: 0 0 var(--space-sm);\r\n  max-width: 58rem;\r\n}\r\n\r\n.vision-text[_ngcontent-%COMP%]:last-of-type { margin-bottom: 0; }\r\n\r\n\n\r\n\r\n.media-section[_ngcontent-%COMP%] {\r\n  background: #c3e1ed;\r\n  color: var(--title);\r\n  text-align: center;\r\n  padding: var(--space-lg) 6vw; \n\r\n}\r\n\r\n.media-inner[_ngcontent-%COMP%] {\r\n  max-width: 760px;\r\n  margin: 0 auto;\r\n  padding: 0; \n\r\n}\r\n\r\n.media-title[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.18em;\r\n  margin: 0 0 var(--space-md);\r\n}\r\n\r\n.media-text[_ngcontent-%COMP%] {\r\n  font-size: 1.05rem;\r\n  line-height: 1.7;\r\n  margin: 0 auto var(--space-md);\r\n  max-width: 70ch;\r\n}\r\n\r\n.media-btn[_ngcontent-%COMP%] {\r\n  margin: 0; \n\r\n}\r\n\r\n\n\r\n\r\n.events-contact-section[_ngcontent-%COMP%] {\r\n  padding: var(--space-xl) 6vw;\r\n  background: #266176;\r\n  color: #ffffff;\r\n}\r\n\r\n.events-contact-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.4fr);\r\n  gap: 3rem;\r\n  align-items: flex-start;\r\n}\r\n\r\n.events-column[_ngcontent-%COMP%] { padding-right: 1rem; }\r\n\r\n.events-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  margin: 0 0 var(--space-md);\r\n}\r\n\r\n.events-icon[_ngcontent-%COMP%] { font-size: 1.4rem; }\r\n\r\n.events-title[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  letter-spacing: 0.18em;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n}\r\n\r\n.event-item[_ngcontent-%COMP%]    + .event-item[_ngcontent-%COMP%] { margin-top: 1.6rem; }\r\n\r\n.event-day[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  text-transform: uppercase;\r\n  margin: 0 0 0.4rem;\r\n}\r\n\r\n.event-details[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  line-height: 1.7;\r\n  font-style: italic;\r\n  margin: 0;\r\n}\r\n\r\n.event-link[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-top: 6px;\r\n  font-size: 0.85rem;\r\n  font-weight: 700;\r\n  color: var(--accent);\r\n  text-decoration: none;\r\n}\r\n.event-link[_ngcontent-%COMP%]:hover { text-decoration: underline; }\r\n\r\n\n\r\n.contact-column[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.contact-card[_ngcontent-%COMP%] {\r\n  background: var(--support);\r\n  border-radius: 18px;\r\n  padding: 2.2rem 2.4rem;\r\n  width: 100%;\r\n  max-width: 480px;\r\n  box-shadow: 0 14px 40px rgba(0,0,0,0.5);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.contact-title[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  margin: 0 0 0.6rem;\r\n}\r\n\r\n.contact-intro[_ngcontent-%COMP%] {\r\n  font-size: 0.98rem;\r\n  line-height: 1.7;\r\n  margin: 0 0 var(--space-sm);\r\n  opacity: 0.95;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.1rem;\r\n}\r\n\r\n.form-row[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1rem;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.3rem;\r\n  min-width: 0;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 0.9rem;\r\n  opacity: 0.85;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  display: block;\r\n  padding: 0.7rem 0.8rem;\r\n  border-radius: 12px;\r\n  border: 1px solid var(--border);\r\n  background: var(--brand-dark);\r\n  color: #ffffff;\r\n  font: inherit;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  border-color: var(--accent);\r\n  box-shadow: 0 0 0 3px rgba(0,183,181,0.3);\r\n}\r\n\r\n.contact-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.contact-extra[_ngcontent-%COMP%] {\r\n  margin-top: var(--space-sm);\r\n  font-size: 0.9rem;\r\n  line-height: 1.6;\r\n  opacity: 0.9;\r\n}\r\n\r\n.contact-extra[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: var(--accent);\r\n  text-decoration: none;\r\n}\r\n\r\n\n\r\n\r\n\n\r\n@media (max-width: 1100px) {\r\n  .cards-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r\n}\r\n\r\n\n\r\n@media (max-width: 768px) {\r\n\r\n  [_nghost-%COMP%]{\r\n    --space-xs: 0.6rem;\r\n    --space-sm: 1rem;\r\n    --space-md: 1.6rem;\r\n    --space-lg: 2.4rem;\r\n    --space-xl: 3rem;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] { word-break: keep-all; hyphens: none; }\r\n\r\n  .hero[_ngcontent-%COMP%] {\r\n    padding: 0 1.2rem var(--space-lg);\r\n    min-height: 560px;\r\n  }\r\n\r\n  .hero-title[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    line-height: 1.08;\r\n    max-width: 22ch;\r\n  }\r\n\r\n  .hero-text[_ngcontent-%COMP%] { font-size: 1rem; }\r\n  .hero-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] { width: 100%; }\r\n\r\n  .cards-section[_ngcontent-%COMP%] { padding: var(--space-xl) 1.2rem; }\r\n\r\n  .info-card[_ngcontent-%COMP%] {\r\n    padding: 1.8rem 1.5rem;\r\n    min-height: auto;\r\n  }\r\n\r\n  .vision-section[_ngcontent-%COMP%] { padding: var(--space-xl) 1.2rem; }\r\n\r\n  .vision-heading[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    line-height: 1.12;\r\n    max-width: 22ch;\r\n  }\r\n\r\n  .media-section[_ngcontent-%COMP%] { padding: var(--space-lg) 1.2rem; }\r\n\r\n  .media-title[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    line-height: 1.25;\r\n    letter-spacing: 0.08em;\r\n  }\r\n\r\n  .media-btn[_ngcontent-%COMP%] { width: 100%; }\r\n\r\n  .events-contact-section[_ngcontent-%COMP%] { padding: var(--space-xl) 1.2rem; }\r\n\r\n  .events-contact-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    gap: 1.5rem;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin: 0;\r\n  }\r\n\r\n  .events-column[_ngcontent-%COMP%] { order: 1; width: 100%; max-width: 100%; padding-right: 0; }\r\n  .contact-column[_ngcontent-%COMP%] { order: 2; width: 100%; max-width: 100%; }\r\n\r\n  .events-title[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n    letter-spacing: 0.1em;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%] {\r\n    font-size: 1.45rem;\r\n    line-height: 1.15;\r\n  }\r\n\r\n  .contact-card[_ngcontent-%COMP%] {\r\n    padding: 1.6rem 1.4rem;\r\n    border-radius: 16px;\r\n  }\r\n\r\n  \n\r\n  .event-details[_ngcontent-%COMP%], .contact-intro[_ngcontent-%COMP%], .contact-extra[_ngcontent-%COMP%], .media-text[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    overflow-wrap: anywhere;\r\n    word-break: normal;\r\n  }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .cards-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n}\r\n\r\n\n\r\n@keyframes _ngcontent-%COMP%_fadeInHero {\r\n  from { opacity: 0; transform: translateY(20px); }\r\n  to   { opacity: 1; transform: translateY(0); }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_revealUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(24px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.animate-reveal[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transform: translateY(24px);\r\n}\r\n\r\n.animate-reveal.is-visible[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_revealUp 1s ease-out forwards;\r\n}\r\n\r\n\r\n\r\n\r\n\n\r\n.next-culte-banner[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #1A3D64 0%, #1D546C 100%);\r\n  padding: 40px 24px;\r\n}\r\n\r\n.next-culte-inner[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.next-culte-left[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 280px;\r\n}\r\n\r\n.next-culte-badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: rgba(0, 183, 181, 0.25);\r\n  color: #00B7B5;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  padding: 4px 12px;\r\n  border-radius: 20px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.next-culte-title[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  margin: 0 0 8px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.next-culte-date[_ngcontent-%COMP%] {\r\n  color: #00B7B5;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin: 0 0 10px;\r\n}\r\n\r\n.next-culte-message[_ngcontent-%COMP%] {\r\n  color: #c8dde8;\r\n  font-size: 14px;\r\n  line-height: 1.6;\r\n  margin: 0;\r\n}\r\n\r\n.next-culte-right[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.next-culte-flyer[_ngcontent-%COMP%] {\r\n  max-height: 220px;\r\n  max-width: 320px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 4px 20px rgba(0,0,0,0.3);\r\n  object-fit: contain;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .next-culte-flyer[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    max-height: 180px;\r\n  }\r\n}\r\n\r\n\n\r\n.nl-block[_ngcontent-%COMP%] {\r\n  margin-top: 28px;\r\n  border-top: 1px solid rgba(255,255,255,0.12);\r\n  padding-top: 24px;\r\n}\r\n\r\n.nl-trigger-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 13px 22px;\r\n  background: rgba(255,255,255,0.12);\r\n  border: 1px solid rgba(255,255,255,0.25);\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.15s, border-color 0.15s;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n.nl-trigger-btn[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.4); }\r\n.nl-trigger-icon[_ngcontent-%COMP%] { font-size: 1.1rem; }\r\n\r\n.nl-inline-form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 14px;\r\n}\r\n\r\n.nl-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 11px 14px;\r\n  border: 1px solid rgba(255,255,255,0.2);\r\n  border-radius: 8px;\r\n  background: rgba(255,255,255,0.1);\r\n  color: #fff;\r\n  font-size: 14px;\r\n  outline: none;\r\n  transition: border-color 0.15s, background 0.15s;\r\n  box-sizing: border-box;\r\n  font-family: inherit;\r\n}\r\n.nl-field[_ngcontent-%COMP%]::placeholder { color: rgba(255,255,255,0.45); }\r\n.nl-field[_ngcontent-%COMP%]:focus { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.16); }\r\n\r\n.nl-submit-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  background: #fff;\r\n  color: #1D546C;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  transition: opacity 0.15s;\r\n}\r\n.nl-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) { opacity: 0.9; }\r\n.nl-submit-btn[_ngcontent-%COMP%]:disabled { opacity: 0.45; cursor: not-allowed; }\r\n\r\n.nl-error[_ngcontent-%COMP%] { font-size: 12px; color: #fca5a5; margin: 0; }\r\n\r\n.nl-success-msg[_ngcontent-%COMP%] {\r\n  margin-top: 14px;\r\n  font-size: 13px;\r\n  color: #86efac;\r\n  font-weight: 600;\r\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', template: "<!-- SECTION HERO IMAGE -->\r\n<section class=\"hero\">\r\n  <!-- Image de fond -->\r\n  <img\r\n    class=\"hero-video\"\r\n    [src]=\"heroImageUrl\"\r\n    alt=\"CMCIEA-FRANCE Chercheurs de Dieu\"\r\n  />\r\n\r\n  <!-- Overlay -->\r\n  <div class=\"hero-overlay\"></div>\r\n\r\n  <!-- Contenu -->\r\n  <div class=\"hero-content\">\r\n    <p class=\"hero-tagline\">{{ heroTagline }}</p>\r\n    <h1 class=\"hero-title\" [innerHTML]=\"heroTitle\"></h1>\r\n    <p class=\"hero-text\">{{ heroText }}</p>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n<!-- SECTION CARTES LIENS (Premi\u00E8re visite / Ressources / C\u00E9l\u00E9brations) -->\r\n<section class=\"cards-section\">\r\n  <div class=\"cards-grid\">\r\n    <!-- Carte 1 -->\r\n    <article class=\"info-card card-premiere-visite\">\r\n      <p class=\"card-eyebrow\">PREMI\u00C8RE VISITE</p>\r\n      <h2 class=\"card-title\">COMMENCER ICI</h2>\r\n      <p class=\"card-text\">\r\n        D\u00E9couvre CMCIEA-FRANCE CHERCHEURS DE DIEU. \r\n        Comment nous rejoindre.\r\n      </p>\r\n      <a routerLink=\"/premiere-visite\" class=\"btn btn-outline-dark btn-sm\">D\u00C9COUVRIR</a>\r\n    </article>\r\n\r\n    <!-- Carte 2 -->\r\n    <article class=\"info-card card-ressources\">\r\n      <p class=\"card-eyebrow\">RESSOURCES</p>\r\n      <h2 class=\"card-title\">NOUVEAU DANS LA FOI ?</h2>\r\n      <p class=\"card-text\">\r\n        Une s\u00E9lection de ressources pour d\u00E9buter ton cheminement spirituel.\r\n\r\n      </p>\r\n\r\n      <a\r\n        routerLink=\"/ressources/decouvrir\"\r\n        class=\"btn btn-outline-dark btn-sm\"\r\n      >\r\n        GO!\r\n      </a>\r\n    </article>\r\n\r\n\r\n    <!-- Carte 3 -->\r\n    <article class=\"info-card card-celebrations\">\r\n      <p class=\"card-eyebrow\">PROGRAMME</p>\r\n      <h2 class=\"card-title\">MARATHON BIBLIQUE<br /></h2>\r\n      <p class=\"card-text\">\r\n        Transformez votre vie en 45 jours : marathon biblique du 05 janvier au 18 f\u00E9vrier 2026.\r\n      </p>\r\n      <a routerLink=\"/marathon-biblique\" class=\"btn btn-outline-light btn-sm\">D\u00C9COUVRIR</a>\r\n    </article>\r\n\r\n    <!-- \u2705 Carte 4 : Minist\u00E8re Enfants -->\r\n    <article class=\"info-card card-enfants\">\r\n      <p class=\"card-eyebrow\">DEPARTEMENT</p>\r\n      <h2 class=\"card-title\">ENFANTS & JEUNES</h2>\r\n      <p class=\"card-text\">\r\n        Un espace fun et biblique pour grandir dans la foi, cr\u00E9er des liens et apprendre la Parole.\r\n      </p>\r\n      <a routerLink=\"/departements\" class=\"btn btn-outline-dark btn-sm\">D\u00C9COUVRIR</a>\r\n    </article>\r\n  </div>\r\n</section>\r\n\r\n\r\n<!-- SECTION VISION / QUI SOMMES-NOUS -->\r\n<section class=\"vision-section\">\r\n  <div class=\"vision-container\">\r\n    <h2 class=\"vision-heading animate-reveal\" [innerHTML]=\"visionHeading\"></h2>\r\n\r\n\r\n    <!-- <p class=\"vision-text\">\r\n      \u00C0 l'\u00E9glise <strong>Chercheurs de Dieu</strong>, \r\n      la Parole de Dieu est au c\u0153ur de notre vie :\r\n      nous la <strong>lisons</strong> abondamment,\r\n      la <strong>m\u00E9ditons</strong> chaque jour,\r\n      lui <strong>ob\u00E9issons</strong> sans compromis,\r\n      la <strong>m\u00E9morisons</strong> fid\u00E8lement,\r\n      et la <strong>partageons</strong> avec assurance et joie.\r\n    </p>\r\n\r\n    <p class=\"vision-text\">\r\n      Notre d\u00E9sir est de voir des <strong>disciples engag\u00E9s</strong>\r\n      dans notre pays, dans l'Europe et jusqu'aux extr\u00E9mit\u00E9s de la terre,\r\n      qui <strong>connaissent</strong> le Seigneur J\u00E9sus-Christ,\r\n      <strong>aiment</strong> le Seigneur J\u00E9sus-Christ, \r\n      <strong>le cherchent</strong> de tout leurs coeurs\r\n      et <strong>le servent</strong> ardemment.\r\n    </p> -->\r\n\r\n    <!-- <a routerLink=\"/a-propos\" class=\"btn btn-primary vision-btn\">\r\n      En savoir plus sur notre vision\r\n    </a> -->\r\n  </div>\r\n</section>\r\n\r\n<!-- SECTION YOUTUBE / M\u00C9DIAS -->\r\n<section class=\"media-section\">\r\n  <div class=\"media-inner\">\r\n    <h2 class=\"media-title\">{{ mediaTitle }}</h2>\r\n    <p class=\"media-text\">{{ mediaText }}</p>\r\n    <a [href]=\"mediaYoutubeUrl\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-outline-dark media-btn\">{{ mediaButtonText }}</a>\r\n  </div>\r\n</section>\r\n\r\n<!-- SECTION \u00C9V\u00C9NEMENTS + CONTACT -->\r\n<section class=\"events-contact-section\">\r\n  <div class=\"events-contact-grid\">\r\n    <!-- COLONNE \u00C9V\u00C9NEMENTS -->\r\n    <div class=\"events-column\">\r\n      <div class=\"events-header\">\r\n        <span class=\"events-icon\">\uD83D\uDD14</span>\r\n        <h2 class=\"events-title\">PROGRAMMES HEBDOMADAIRES</h2>\r\n      </div>\r\n\r\n      <div class=\"event-item\" *ngFor=\"let c of cultes\">\r\n        <h3 class=\"event-day\">{{ c.jour }}</h3>\r\n        <p class=\"event-details\">\r\n          DE {{ c.heure }} \u2013 {{ c.description }}\r\n        </p>\r\n        <a *ngIf=\"c.lien\" [href]=\"c.lien\" target=\"_blank\" rel=\"noopener\" class=\"event-link\">Rejoindre \u2192</a>\r\n      </div>\r\n\r\n      <!-- NEWSLETTER -->\r\n      <div class=\"nl-block\">\r\n        <button class=\"nl-trigger-btn\" (click)=\"nlOpen = !nlOpen\" *ngIf=\"!nlSuccess\">\r\n          <span class=\"nl-trigger-icon\">\uD83D\uDCE7</span>\r\n          Recevoir nos actualit\u00E9s par email\r\n        </button>\r\n\r\n        <div class=\"nl-inline-form\" *ngIf=\"nlOpen && !nlSuccess\">\r\n          <input type=\"text\"  [(ngModel)]=\"nlPrenom\" name=\"nlPrenom\" placeholder=\"Votre pr\u00E9nom (optionnel)\" class=\"nl-field\" />\r\n          <input type=\"email\" [(ngModel)]=\"nlEmail\"  name=\"nlEmail\"  placeholder=\"Votre adresse e-mail *\"  class=\"nl-field\" />\r\n          <button class=\"nl-submit-btn\" [disabled]=\"nlSending || !nlEmail\" (click)=\"subscribeNewsletter()\">\r\n            {{ nlSending ? 'Inscription\u2026' : \"S'abonner\" }}\r\n          </button>\r\n          <p class=\"nl-error\" *ngIf=\"nlError\">{{ nlError }}</p>\r\n        </div>\r\n\r\n        <p class=\"nl-success-msg\" *ngIf=\"nlSuccess\">\u2713 {{ nlSuccess }}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- COLONNE CONTACT -->\r\n    <div class=\"contact-column\">\r\n      <div class=\"contact-card\">\r\n        <h2 class=\"contact-title\">{{ contactTitle }}</h2>\r\n        <p class=\"contact-intro\">{{ contactIntro }}</p>\r\n\r\n        <form class=\"contact-form\" #contactForm>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group\">\r\n              <label for=\"prenom\">Pr\u00E9nom</label>\r\n              <input id=\"prenom\" #prenom type=\"text\" name=\"prenom\" required />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"nom\">Nom</label>\r\n              <input id=\"nom\" #nom type=\"text\" name=\"nom\" required />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Adresse e-mail</label>\r\n            <input id=\"email\" #email type=\"email\" name=\"email\" required />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"message\">Message</label>\r\n            <textarea\r\n              id=\"message\"\r\n              #message\r\n              name=\"message\"\r\n              rows=\"4\"\r\n              placeholder=\"Dis-nous comment nous pouvons t\u2019aider.\"\r\n              required\r\n            ></textarea>\r\n          </div>\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary contact-btn\"\r\n            (click)=\"sendWhatsApp(contactForm, prenom.value, nom.value, email.value, message.value)\"\r\n          >\r\n            Envoyer le message\r\n          </button>\r\n        </form>\r\n\r\n        <div class=\"contact-extra\">\r\n          <p>\r\n            Ou \u00E9cris-nous directement \u00E0\r\n            <a href=\"mailto:contact&#64;cmciea-france.com\">contact&#64;cmciea-france.com</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n", styles: [":host {\r\n  /* Palette */\r\n  --brand: #1D546C;\r\n  --brand-dark: #1A3D64;\r\n  --brand-soft: #F4F4F4;\r\n\r\n  --accent: #00B7B5;\r\n  --highlight: #00B7B5;\r\n\r\n  --bg: #F4F4F4;\r\n  --surface: #FFFFFF;\r\n  --border: #005461;\r\n\r\n  --title: #1D546C;\r\n  --text: #111111;\r\n\r\n  /* \u2705 Variables manquantes (corrig\u00E9es) */\r\n  --cta: #00B7B5;\r\n  --cta-hover: #018790;\r\n\r\n  --support: #0C2B4E;\r\n  --brand-secondary: #0C2B4E;\r\n\r\n  /* \u2705 Rythme vertical coh\u00E9rent */\r\n  --space-xs: 0.75rem;   /* 12px */\r\n  --space-sm: 1.25rem;   /* 20px */\r\n  --space-md: 2rem;      /* 32px */\r\n  --space-lg: 3rem;      /* 48px */\r\n  --space-xl: 4.5rem;    /* 72px */\r\n\r\n  display: block;\r\n  width: 100%;\r\n  color: var(--text);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\r\n}\r\n\r\n/* \u2705 Reset l\u00E9ger pour \u00E9viter les \u201Clignes blanches\u201D */\r\nh1, h2, h3, p { margin-top: 0; }\r\nsection { margin: 0; }\r\n\r\n/* \u2705 Stop scroll horizontal partout */\r\nhtml, body {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* \u2705 Toutes les tailles incluent padding/border (\u00E9vite les d\u00E9bordements) */\r\n*, *::before, *::after { box-sizing: border-box; }\r\n\r\n/* ---------- HERO IMAGE ---------- */\r\n\r\n.hero {\r\n  position: relative;\r\n  height: 100vh;\r\n  min-height: 520px;\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  padding: 0 6vw var(--space-lg);\r\n  color: #ffffff;\r\n  background: var(--brand-dark);\r\n}\r\n\r\n.hero-video {\r\n  position: absolute;\r\n  inset: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  z-index: 0;\r\n  animation: fadeInHero 1.2s ease-out forwards;\r\n}\r\n\r\n.hero-overlay {\r\n  position: absolute;\r\n  inset: 0;\r\n  background: linear-gradient(120deg, rgba(0,0,0,0.7), rgba(0,0,0,0.35));\r\n  z-index: 1;\r\n  animation: fadeInHero 1.4s ease-out forwards;\r\n}\r\n\r\n.hero-content {\r\n  position: relative;\r\n  max-width: 640px;\r\n  z-index: 2;\r\n  opacity: 0;\r\n  animation: fadeInHero 1.6s ease-out forwards;\r\n}\r\n\r\n.hero-tagline {\r\n  letter-spacing: 0.16em;\r\n  text-transform: uppercase;\r\n  font-size: 0.9rem;\r\n  margin: 0 0 var(--space-xs);\r\n  opacity: 0.9;\r\n}\r\n\r\n.hero-title {\r\n  font-size: clamp(2.4rem, 4vw, 3.6rem);\r\n  line-height: 1.1;\r\n  margin: 0 0 var(--space-sm);\r\n  font-weight: 900;\r\n}\r\n\r\n.hero-title span { color: var(--highlight); }\r\n\r\n.hero-text {\r\n  font-size: 1.05rem;\r\n  max-width: 32rem;\r\n  margin: 0 0 var(--space-md);\r\n  line-height: 1.6;\r\n}\r\n\r\n.hero-actions {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n}\r\n\r\n/* ---------- BUTTONS ---------- */\r\n\r\n.btn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.9rem 1.8rem;\r\n  border-radius: 999px;\r\n  font-weight: 600;\r\n  text-decoration: none;\r\n  font-size: 0.98rem;\r\n  border: 2px solid transparent;\r\n  cursor: pointer;\r\n  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease,\r\n    color 0.15s ease, border-color 0.15s ease;\r\n}\r\n\r\n.btn-primary {\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.btn-primary:hover {\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.45);\r\n  background: var(--cta-hover);\r\n  color: #ffffff;\r\n}\r\n\r\n/* \u2705 Outline clair (fond sombre) */\r\n.btn-outline-light {\r\n  background: transparent;\r\n  color: #ffffff;\r\n  border: 2px solid rgba(255, 255, 255, 0.9);\r\n  border-radius: 999px;\r\n}\r\n\r\n.btn-outline-light:hover {\r\n  background: #ffffff;\r\n  color: #111111;\r\n}\r\n\r\n/* \u2705 Outline sombre (fond clair) */\r\n.btn-outline-dark {\r\n  background: transparent;\r\n  border: 2px solid rgba(12, 43, 78, 0.9);\r\n  color: rgba(12, 43, 78, 1);\r\n  border-radius: 999px;\r\n}\r\n\r\n.btn-outline-dark:hover {\r\n  background: rgba(12, 43, 78, 1);\r\n  color: #ffffff;\r\n}\r\n\r\n.btn-sm {\r\n  padding: 0.65rem 1.2rem;\r\n  font-size: 0.92rem;\r\n}\r\n\r\n/* ---------- CARDS SECTION ---------- */\r\n\r\n.cards-section {\r\n  padding: var(--space-xl) 6vw;\r\n  background: var(--bg);\r\n}\r\n\r\n.cards-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, minmax(0, 1fr));\r\n  gap: 1.5rem;\r\n}\r\n\r\n.info-card {\r\n  padding: 2.2rem 2rem;\r\n  border-radius: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 250px;\r\n  position: relative;\r\n}\r\n\r\n.info-card .btn { align-self: flex-start; }\r\n\r\n.card-premiere-visite { background: var(--accent); color: #ffffff; }\r\n.card-ressources { background: var(--surface); color: var(--title); }\r\n.card-celebrations { background: var(--brand); color: #ffffff; }\r\n.card-enfants { background: var(--surface); color: var(--title); }\r\n\r\n/* typo cartes */\r\n.card-eyebrow {\r\n  font-size: 0.82rem;\r\n  letter-spacing: 0.16em;\r\n  margin: 0 0 0.75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.card-title {\r\n  font-size: clamp(1.55rem, 1.9vw, 1.95rem);\r\n  line-height: 1.12;\r\n  margin: 0 0 0.9rem;\r\n}\r\n\r\n.card-text {\r\n  font-size: 0.95rem;\r\n  line-height: 1.6;\r\n  margin: 0 0 1.4rem;\r\n  max-width: 22rem;\r\n}\r\n\r\n/* ---------- VISION SECTION ---------- */\r\n\r\n.vision-section {\r\n  padding: var(--space-xl) 6vw;\r\n  background: #F1F3F4;\r\n  color: var(--text);\r\n}\r\n\r\n.vision-container {\r\n  max-width: 1040px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.vision-heading {\r\n  font-size: clamp(2.4rem, 4.1vw, 3.4rem);\r\n  line-height: 1.15;\r\n  font-weight: 800;\r\n  margin: 0 0 var(--space-md);\r\n}\r\n\r\n.vision-heading span { color: var(--brand); }\r\n\r\n.vision-text {\r\n  font-size: 1.05rem;\r\n  line-height: 1.8;\r\n  margin: 0 0 var(--space-sm);\r\n  max-width: 58rem;\r\n}\r\n\r\n.vision-text:last-of-type { margin-bottom: 0; }\r\n\r\n/* ---------- MEDIA / YOUTUBE SECTION ---------- */\r\n\r\n.media-section {\r\n  background: #c3e1ed;\r\n  color: var(--title);\r\n  text-align: center;\r\n  padding: var(--space-lg) 6vw; /* \u2705 compact */\r\n}\r\n\r\n.media-inner {\r\n  max-width: 760px;\r\n  margin: 0 auto;\r\n  padding: 0; /* \u2705 pas besoin de padding interne */\r\n}\r\n\r\n.media-title {\r\n  font-size: 1.8rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.18em;\r\n  margin: 0 0 var(--space-md);\r\n}\r\n\r\n.media-text {\r\n  font-size: 1.05rem;\r\n  line-height: 1.7;\r\n  margin: 0 auto var(--space-md);\r\n  max-width: 70ch;\r\n}\r\n\r\n.media-btn {\r\n  margin: 0; /* \u2705 enl\u00E8ve le grand vide */\r\n}\r\n\r\n/* ---------- EVENTS + CONTACT SECTION ---------- */\r\n\r\n.events-contact-section {\r\n  padding: var(--space-xl) 6vw;\r\n  background: #266176;\r\n  color: #ffffff;\r\n}\r\n\r\n.events-contact-grid {\r\n  display: grid;\r\n  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.4fr);\r\n  gap: 3rem;\r\n  align-items: flex-start;\r\n}\r\n\r\n.events-column { padding-right: 1rem; }\r\n\r\n.events-header {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  margin: 0 0 var(--space-md);\r\n}\r\n\r\n.events-icon { font-size: 1.4rem; }\r\n\r\n.events-title {\r\n  font-size: 1.4rem;\r\n  letter-spacing: 0.18em;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n}\r\n\r\n.event-item + .event-item { margin-top: 1.6rem; }\r\n\r\n.event-day {\r\n  font-size: 1.1rem;\r\n  text-transform: uppercase;\r\n  margin: 0 0 0.4rem;\r\n}\r\n\r\n.event-details {\r\n  font-size: 1rem;\r\n  line-height: 1.7;\r\n  font-style: italic;\r\n  margin: 0;\r\n}\r\n\r\n.event-link {\r\n  display: inline-block;\r\n  margin-top: 6px;\r\n  font-size: 0.85rem;\r\n  font-weight: 700;\r\n  color: var(--accent);\r\n  text-decoration: none;\r\n}\r\n.event-link:hover { text-decoration: underline; }\r\n\r\n/* Contact */\r\n.contact-column {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.contact-card {\r\n  background: var(--support);\r\n  border-radius: 18px;\r\n  padding: 2.2rem 2.4rem;\r\n  width: 100%;\r\n  max-width: 480px;\r\n  box-shadow: 0 14px 40px rgba(0,0,0,0.5);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.contact-title {\r\n  font-size: 1.5rem;\r\n  margin: 0 0 0.6rem;\r\n}\r\n\r\n.contact-intro {\r\n  font-size: 0.98rem;\r\n  line-height: 1.7;\r\n  margin: 0 0 var(--space-sm);\r\n  opacity: 0.95;\r\n}\r\n\r\n.contact-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.1rem;\r\n}\r\n\r\n.form-row {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1rem;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.3rem;\r\n  min-width: 0;\r\n}\r\n\r\n.form-group label {\r\n  margin: 0;\r\n  font-size: 0.9rem;\r\n  opacity: 0.85;\r\n}\r\n\r\n.form-group input,\r\n.form-group textarea {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  display: block;\r\n  padding: 0.7rem 0.8rem;\r\n  border-radius: 12px;\r\n  border: 1px solid var(--border);\r\n  background: var(--brand-dark);\r\n  color: #ffffff;\r\n  font: inherit;\r\n}\r\n\r\n.form-group input:focus,\r\n.form-group textarea:focus {\r\n  outline: none;\r\n  border-color: var(--accent);\r\n  box-shadow: 0 0 0 3px rgba(0,183,181,0.3);\r\n}\r\n\r\n.contact-btn {\r\n  width: 100%;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.contact-extra {\r\n  margin-top: var(--space-sm);\r\n  font-size: 0.9rem;\r\n  line-height: 1.6;\r\n  opacity: 0.9;\r\n}\r\n\r\n.contact-extra a {\r\n  color: var(--accent);\r\n  text-decoration: none;\r\n}\r\n\r\n/* ---------- RESPONSIVE ---------- */\r\n\r\n/* tablette */\r\n@media (max-width: 1100px) {\r\n  .cards-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r\n}\r\n\r\n/* mobile */\r\n@media (max-width: 768px) {\r\n\r\n  :host{\r\n    --space-xs: 0.6rem;\r\n    --space-sm: 1rem;\r\n    --space-md: 1.6rem;\r\n    --space-lg: 2.4rem;\r\n    --space-xl: 3rem;\r\n  }\r\n\r\n  h1, h2, h3 { word-break: keep-all; hyphens: none; }\r\n\r\n  .hero {\r\n    padding: 0 1.2rem var(--space-lg);\r\n    min-height: 560px;\r\n  }\r\n\r\n  .hero-title {\r\n    font-size: 2rem;\r\n    line-height: 1.08;\r\n    max-width: 22ch;\r\n  }\r\n\r\n  .hero-text { font-size: 1rem; }\r\n  .hero-actions .btn { width: 100%; }\r\n\r\n  .cards-section { padding: var(--space-xl) 1.2rem; }\r\n\r\n  .info-card {\r\n    padding: 1.8rem 1.5rem;\r\n    min-height: auto;\r\n  }\r\n\r\n  .vision-section { padding: var(--space-xl) 1.2rem; }\r\n\r\n  .vision-heading {\r\n    font-size: 2rem;\r\n    line-height: 1.12;\r\n    max-width: 22ch;\r\n  }\r\n\r\n  .media-section { padding: var(--space-lg) 1.2rem; }\r\n\r\n  .media-title {\r\n    font-size: 1.2rem;\r\n    line-height: 1.25;\r\n    letter-spacing: 0.08em;\r\n  }\r\n\r\n  .media-btn { width: 100%; }\r\n\r\n  .events-contact-section { padding: var(--space-xl) 1.2rem; }\r\n\r\n  .events-contact-grid {\r\n    grid-template-columns: 1fr;\r\n    gap: 1.5rem;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin: 0;\r\n  }\r\n\r\n  .events-column { order: 1; width: 100%; max-width: 100%; padding-right: 0; }\r\n  .contact-column { order: 2; width: 100%; max-width: 100%; }\r\n\r\n  .events-title {\r\n    font-size: 1.2rem;\r\n    letter-spacing: 0.1em;\r\n  }\r\n\r\n  .card-title {\r\n    font-size: 1.45rem;\r\n    line-height: 1.15;\r\n  }\r\n\r\n  .contact-card {\r\n    padding: 1.6rem 1.4rem;\r\n    border-radius: 16px;\r\n  }\r\n\r\n  /* \u2705 Texte : \u00E9viter qu\u2019une ligne longue pousse la page */\r\n  .event-details,\r\n  .contact-intro,\r\n  .contact-extra,\r\n  .media-text {\r\n    max-width: 100%;\r\n    overflow-wrap: anywhere;\r\n    word-break: normal;\r\n  }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  .cards-grid { grid-template-columns: 1fr; }\r\n}\r\n\r\n/* ---------- HERO FADE-IN ANIMATION ---------- */\r\n@keyframes fadeInHero {\r\n  from { opacity: 0; transform: translateY(20px); }\r\n  to   { opacity: 1; transform: translateY(0); }\r\n}\r\n\r\n@keyframes revealUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(24px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.animate-reveal {\r\n  opacity: 0;\r\n  transform: translateY(24px);\r\n}\r\n\r\n.animate-reveal.is-visible {\r\n  animation: revealUp 1s ease-out forwards;\r\n}\r\n\r\n\r\n\r\n\r\n/* \u2500\u2500 Prochain culte pr\u00E9sentiel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.next-culte-banner {\r\n  background: linear-gradient(135deg, #1A3D64 0%, #1D546C 100%);\r\n  padding: 40px 24px;\r\n}\r\n\r\n.next-culte-inner {\r\n  max-width: 1100px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.next-culte-left {\r\n  flex: 1;\r\n  min-width: 280px;\r\n}\r\n\r\n.next-culte-badge {\r\n  display: inline-block;\r\n  background: rgba(0, 183, 181, 0.25);\r\n  color: #00B7B5;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  padding: 4px 12px;\r\n  border-radius: 20px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.next-culte-title {\r\n  color: #ffffff;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  margin: 0 0 8px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.next-culte-date {\r\n  color: #00B7B5;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin: 0 0 10px;\r\n}\r\n\r\n.next-culte-message {\r\n  color: #c8dde8;\r\n  font-size: 14px;\r\n  line-height: 1.6;\r\n  margin: 0;\r\n}\r\n\r\n.next-culte-right {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.next-culte-flyer {\r\n  max-height: 220px;\r\n  max-width: 320px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 4px 20px rgba(0,0,0,0.3);\r\n  object-fit: contain;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .next-culte-flyer {\r\n    max-width: 100%;\r\n    max-height: 180px;\r\n  }\r\n}\r\n\r\n/* \u2500\u2500 Newsletter inline (sous programmes hebdo) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\r\n.nl-block {\r\n  margin-top: 28px;\r\n  border-top: 1px solid rgba(255,255,255,0.12);\r\n  padding-top: 24px;\r\n}\r\n\r\n.nl-trigger-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 13px 22px;\r\n  background: rgba(255,255,255,0.12);\r\n  border: 1px solid rgba(255,255,255,0.25);\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.15s, border-color 0.15s;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n.nl-trigger-btn:hover { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.4); }\r\n.nl-trigger-icon { font-size: 1.1rem; }\r\n\r\n.nl-inline-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 14px;\r\n}\r\n\r\n.nl-field {\r\n  width: 100%;\r\n  padding: 11px 14px;\r\n  border: 1px solid rgba(255,255,255,0.2);\r\n  border-radius: 8px;\r\n  background: rgba(255,255,255,0.1);\r\n  color: #fff;\r\n  font-size: 14px;\r\n  outline: none;\r\n  transition: border-color 0.15s, background 0.15s;\r\n  box-sizing: border-box;\r\n  font-family: inherit;\r\n}\r\n.nl-field::placeholder { color: rgba(255,255,255,0.45); }\r\n.nl-field:focus { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.16); }\r\n\r\n.nl-submit-btn {\r\n  width: 100%;\r\n  padding: 12px;\r\n  background: #fff;\r\n  color: #1D546C;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  transition: opacity 0.15s;\r\n}\r\n.nl-submit-btn:hover:not(:disabled) { opacity: 0.9; }\r\n.nl-submit-btn:disabled { opacity: 0.45; cursor: not-allowed; }\r\n\r\n.nl-error { font-size: 12px; color: #fca5a5; margin: 0; }\r\n\r\n.nl-success-msg {\r\n  margin-top: 14px;\r\n  font-size: 13px;\r\n  color: #86efac;\r\n  font-weight: 600;\r\n}\r\n\r\n"] }]
    }], () => [{ type: i1.HttpClient }, { type: i2.PagesService }, { type: i3.PageContentService }, { type: i4.Title }, { type: i4.Meta }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app\\pages\\home\\home.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=home.component.js.map