import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/page-content.service";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
function PremiereVisiteComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.infosPratiques);
} }
function PremiereVisiteComponent_div_67_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.nextCulte.message);
} }
function PremiereVisiteComponent_div_67_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "a", 43);
    i0.ɵɵtext(2, " \uD83D\uDCC5 Ajouter \u00E0 mon agenda ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", ctx_r0.calendarUrl, i0.ɵɵsanitizeUrl);
} }
function PremiereVisiteComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    i0.ɵɵtext(3, "Prochain pr\u00E9sentiel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong", 36);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 37);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 38);
    i0.ɵɵtext(9, "\uD83D\uDCCD 11 rue de l'\u00C9toile, 75017 Paris");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, PremiereVisiteComponent_div_67_span_10_Template, 2, 1, "span", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, PremiereVisiteComponent_div_67_div_11_Template, 3, 1, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.nextCulte.sujet);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.nextCulte.date);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.nextCulte.message);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.calendarUrl);
} }
function PremiereVisiteComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "span", 35);
    i0.ɵɵtext(2, "Prochain pr\u00E9sentiel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 37);
    i0.ɵɵtext(4, "Date \u00E0 venir \u2014 revenez bient\u00F4t.");
    i0.ɵɵelementEnd()();
} }
export class PremiereVisiteComponent {
    constructor(pageContent, http) {
        this.pageContent = pageContent;
        this.http = http;
        this.c = {};
        this.nextCulte = null;
    }
    ngOnInit() {
        this.pageContent.getPage('premiere-visite').subscribe((res) => { if (res)
            this.c = res; });
        this.http.get(`${environment.apiBase}/settings/next-culte`).subscribe({
            next: (data) => { if (data === null || data === void 0 ? void 0 : data.date)
                this.nextCulte = data; },
            error: () => { },
        });
    }
    get heroTitle() { return this.c.heroTitle || 'PREMIÈRE VISITE'; }
    get heroSubtitle() { return this.c.intro || 'Bienvenue à la CMCIEA-FRANCE. Rejoins-nous en ligne et en présentiel à Paris.'; }
    get infosPratiques() { return this.c.infosPratiques || ''; }
    get calendarUrl() {
        var _a;
        if (!((_a = this.nextCulte) === null || _a === void 0 ? void 0 : _a.dateISO))
            return null;
        const start = new Date(this.nextCulte.dateISO);
        const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // +2h
        const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const title = encodeURIComponent(this.nextCulte.sujet || 'Culte CMCIEA-France');
        const loc = encodeURIComponent('11 rue de l\'Étoile, 75017 Paris');
        const desc = encodeURIComponent(this.nextCulte.message || 'Culte en présentiel CMCIEA-France Chercheurs de Dieu');
        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&location=${loc}&details=${desc}`;
    }
}
PremiereVisiteComponent.ɵfac = function PremiereVisiteComponent_Factory(t) { return new (t || PremiereVisiteComponent)(i0.ɵɵdirectiveInject(i1.PageContentService), i0.ɵɵdirectiveInject(i2.HttpClient)); };
PremiereVisiteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PremiereVisiteComponent, selectors: [["app-premiere-visite"]], decls: 100, vars: 5, consts: [[1, "pv-hero"], [1, "pv-hero__inner"], [1, "pv-title"], [1, "pv-subtitle", 2, "white-space", "pre-line"], ["class", "pv-infos", "style", "white-space:pre-line", 4, "ngIf"], [1, "pv-wrap"], [1, "pv-grid"], ["id", "en-ligne", 1, "pv-card"], [1, "pv-card__head"], [1, "pv-card__title"], [1, "pv-card__desc"], [1, "pv-list"], [1, "pv-badge"], [1, "pv-list__content"], [1, "pv-cta"], ["href", "https://t.me/cmciea_notif_bot?start=join:a27e950af32e424b88d4a3914f72111b", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost"], ["href", "https://www.youtube.com/playlist?list=PLuiootrwkQ8bA9kfV9Ul6XfuqQvq_uEbw", "target", "_blank", "rel", "noopener", 1, "btn", "btn-outline"], ["id", "presentiel", 1, "pv-card"], [1, "pv-info"], [1, "pv-info__row"], [1, "pv-label"], [1, "pv-value"], ["class", "pv-next", 4, "ngIf"], ["class", "pv-next pv-next--empty", 4, "ngIf"], ["href", "https://www.google.com/maps?q=11+rue+de+l'%C3%A9toile+75017+paris", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost"], ["id", "contact", 1, "pv-card"], [1, "pv-contact"], [1, "pv-contact__item"], [1, "pv-link"], ["href", "mailto:contact@cmciea-france.com", 1, "pv-link"], ["href", "http://www.youtube.com/@cmcichercheursdeDieu", "target", "_blank", "rel", "noopener", 1, "pv-link"], ["href", "https://whatsapp.com/channel/0029VbC4fM77IUYaJ8ehXg2w", "target", "_blank", "rel", "noopener", 1, "pv-link"], [1, "pv-infos", 2, "white-space", "pre-line"], [1, "pv-next"], [1, "pv-next__left"], [1, "pv-next__label"], [1, "pv-next__date"], [1, "pv-next__date-detail"], [1, "pv-next__place"], ["class", "pv-next__message", 4, "ngIf"], ["class", "pv-next__right", 4, "ngIf"], [1, "pv-next__message"], [1, "pv-next__right"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-outline", 3, "href"], [1, "pv-next", "pv-next--empty"]], template: function PremiereVisiteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p", 3);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, PremiereVisiteComponent_p_6_Template, 2, 1, "p", 4);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "section", 5)(8, "div", 6)(9, "article", 7)(10, "div", 8)(11, "h2", 9);
        i0.ɵɵtext(12, "Nos cultes en ligne");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p", 10);
        i0.ɵɵtext(14, " Nos rassemblements se font principalement en ligne sur notre canal Telegram. Simple : tu rejoins, tu suis, tu es \u00E9difi\u00E9. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(15, "ul", 11)(16, "li")(17, "span", 12);
        i0.ɵɵtext(18, "Lundi - Vendredi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 13)(20, "strong");
        i0.ɵɵtext(21, "Pri\u00E8re de la mi-journ\u00E9e");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "p");
        i0.ɵɵtext(23, "Rejoins-nous chaque jour pour un temps de pri\u00E8re \u00E0 partir de 12h30.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(24, "li")(25, "span", 12);
        i0.ɵɵtext(26, "Mercredi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 13)(28, "strong");
        i0.ɵɵtext(29, "Enseignements en ligne \u2013 20h");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "p");
        i0.ɵɵtext(31, "Chaque mercredi \u00E0 partir de 20h, diffus\u00E9 en live sur YouTube.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(32, "li")(33, "span", 12);
        i0.ɵɵtext(34, "Vendredi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 13)(36, "strong");
        i0.ɵɵtext(37, "Nuit de pri\u00E8re en ligne \u2013 23h");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "p");
        i0.ɵɵtext(39, "Chaque vendredi \u00E0 partir de 23h, diffus\u00E9 en live sur YouTube.");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(40, "div", 14)(41, "a", 15);
        i0.ɵɵtext(42, " Nous contacter (Telegram) ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "a", 16);
        i0.ɵɵtext(44, " Voir le live & replay (YouTube) ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(45, "article", 17)(46, "div", 8)(47, "h2", 9);
        i0.ɵɵtext(48, "Nos rencontres en pr\u00E9sentiel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "p", 10);
        i0.ɵɵtext(50, " Nous nous retrouvons \u00E9galement en pr\u00E9sentiel \u00E0 Paris. Tu es le/la bienvenu(e), que ce soit ta premi\u00E8re fois ou non. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(51, "div", 18)(52, "div", 19)(53, "span", 20);
        i0.ɵɵtext(54, "Adresse");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "span", 21);
        i0.ɵɵtext(56, "11 rue de l'\u00E9toile, 75017 Paris");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(57, "div", 19)(58, "span", 20);
        i0.ɵɵtext(59, "Heure");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "span", 21);
        i0.ɵɵtext(61, "A partir de 11h");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(62, "div", 19)(63, "span", 20);
        i0.ɵɵtext(64, "Conseil");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "span", 21);
        i0.ɵɵtext(66, "Joins toi \u00E0 nous pour des moments de communion fraternelle.");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(67, PremiereVisiteComponent_div_67_Template, 12, 4, "div", 22)(68, PremiereVisiteComponent_div_68_Template, 5, 0, "div", 23);
        i0.ɵɵelementStart(69, "div", 14)(70, "a", 24);
        i0.ɵɵtext(71, " Ouvrir sur Google Maps ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(72, "article", 25)(73, "div", 8)(74, "h2", 9);
        i0.ɵɵtext(75, "Nous contacter");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(76, "p", 10);
        i0.ɵɵtext(77, " Une question ? Besoin de pri\u00E8re ? Envie de mieux conna\u00EEtre l\u2019\u00E9glise ? \u00C9cris-nous, on te r\u00E9pondra. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(78, "div", 26)(79, "div", 27)(80, "span", 20);
        i0.ɵɵtext(81, "Telephone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "a", 28);
        i0.ɵɵtext(83, "+33 7 44 89 68 18 ");
        i0.ɵɵelement(84, "br");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(85, "div", 27)(86, "span", 20);
        i0.ɵɵtext(87, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(88, "a", 29);
        i0.ɵɵtext(89, "contact@cmciea-france.com");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(90, "div", 27)(91, "span", 20);
        i0.ɵɵtext(92, "YouTube");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(93, "a", 30);
        i0.ɵɵtext(94, " La cha\u00EEne YouTube CMCIEA-FRANCE ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(95, "div", 27)(96, "span", 20);
        i0.ɵɵtext(97, "WhatsApp");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(98, "a", 31);
        i0.ɵɵtext(99, " Rejoindre le canal WhatsApp officiel ");
        i0.ɵɵelementEnd()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.heroTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.heroSubtitle);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.infosPratiques);
        i0.ɵɵadvance(61);
        i0.ɵɵproperty("ngIf", ctx.nextCulte);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.nextCulte);
    } }, dependencies: [i3.NgIf], styles: ["[_nghost-%COMP%]{\r\n  \n\r\n  --brand: #1D546C;\r\n  --brand-dark: #1A3D64;\r\n  --brand-soft: #F4F4F4;\r\n\r\n  --accent: #00B7B5;\r\n  --highlight: #00B7B5;\r\n\r\n  --bg: #F4F4F4;\r\n  --surface: #FFFFFF;\r\n  --border: #005461;\r\n\r\n  --title: #1D546C;\r\n  --text: #111111;\r\n  --muted: #334155;\r\n\r\n  display:block;\r\n  background: var(--bg);\r\n  color: var(--text);\r\n}\r\n\r\n\r\n\n\r\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color:inherit;\r\n  text-decoration:none;\r\n}\r\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  text-decoration:none;\r\n}\r\n\r\n.pv-hero[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: clamp(90px, 12vw, 160px) 16px;\r\n  border-bottom: none;\r\n\r\n  \n\r\n  background-image: url(\"/assets/images/premiere-visite-hero.jpg\");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.pv-hero[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n\r\n  \n\r\n  background: linear-gradient(\r\n    to right,\r\n    rgba(26, 61, 100, 0.85) 0%,\r\n    rgba(29, 84, 108, 0.6) 38%,\r\n    rgba(0, 0, 0, 0.2) 70%,\r\n    rgba(0, 0, 0, 0.00) 100%\r\n  );\r\n\r\n  z-index: 0;\r\n}\r\n\r\n\r\n\r\n.pv-hero__inner[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  max-width: 720px;      \n\r\n  margin-left: 0;        \n\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n.pv-kicker[_ngcontent-%COMP%] {\r\n  margin-bottom: 18px;\r\n  font-size: 14px;\r\n  letter-spacing: 0.28em;\r\n  font-weight: 900;\r\n  text-transform: uppercase;\r\n  color: var(--highlight);\r\n}\r\n\r\n\r\n.pv-title[_ngcontent-%COMP%] {\r\n  margin: 0 0 18px;\r\n  font-size: clamp(44px, 6vw, 72px);\r\n  line-height: 1.05;\r\n  font-weight: 900;\r\n  letter-spacing: -0.03em;\r\n  color: var(--highlight);\r\n  text-shadow: 0 6px 30px rgba(0,0,0,0.45);\r\n}\r\n\r\n\r\n\r\n.pv-subtitle[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  max-width: 760px;\r\n  font-size: clamp(18px, 2.2vw, 22px);\r\n  line-height: 1.6;\r\n  font-weight: 500;\r\n  color: rgba(255,255,255,0.95);\r\n  text-shadow: 0 4px 20px rgba(0,0,0,0.35);\r\n}\r\n\r\n.pv-actions[_ngcontent-%COMP%]{\r\n  margin-top:20px;\r\n  display:flex;\r\n  flex-wrap:wrap;\r\n  gap:10px;\r\n}\r\n\r\n.pv-wrap[_ngcontent-%COMP%]{\r\n  padding: 26px 16px 72px;\r\n  background: linear-gradient(180deg, var(--bg), rgba(29, 84, 108, 0.08));\r\n}\r\n\r\n\r\n.pv-grid[_ngcontent-%COMP%]{\r\n  max-width: 980px;\r\n  margin:0 auto;\r\n  display:grid;\r\n  gap:18px;\r\n}\r\n\r\n.pv-card[_ngcontent-%COMP%]{\r\n  border-radius:20px;\r\n  padding:20px;\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.08);\r\n  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;\r\n}\r\n\r\n.pv-card[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 16px 44px rgba(17, 24, 39, 0.12);\r\n  border-color: rgba(0, 183, 181, 0.5);\r\n}\r\n\r\n\r\n.pv-card--soft[_ngcontent-%COMP%]{\r\n  background: var(--brand-soft);\r\n}\r\n\r\n\r\n.pv-card__head[_ngcontent-%COMP%]{\r\n  margin-bottom:14px;\r\n}\r\n\r\n.pv-card__title[_ngcontent-%COMP%]{\r\n  margin:0 0 6px;\r\n  font-size:20px;\r\n  letter-spacing:-0.01em;\r\n}\r\n\r\n.pv-card__desc[_ngcontent-%COMP%], .pv-list__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .pv-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: var(--text);\r\n  opacity: 0.9;\r\n}\r\n\r\n\r\n\n\r\n.pv-list[_ngcontent-%COMP%]{\r\n  list-style:none;\r\n  padding:0;\r\n  margin:16px 0 0;\r\n  display:grid;\r\n  gap:12px;\r\n}\r\n\r\n.pv-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  grid-template-columns:auto 1fr;\r\n  gap:12px;\r\n  align-items:flex-start;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n\r\n.pv-list__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin:6px 0 0;\r\n  color:#475569;\r\n  line-height:1.5;\r\n}\r\n\r\n.pv-badge[_ngcontent-%COMP%]{\r\n  display:inline-flex;\r\n  align-items:center;\r\n  height:28px;\r\n  padding:0 12px;\r\n  border-radius:999px;\r\n  font-size:12px;\r\n  font-weight:800;\r\n  background: rgba(0, 183, 181, 0.14);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  color: var(--brand-dark);\r\n  white-space:nowrap;\r\n  align-self:flex-start;\r\n  margin-top:2px;\r\n}\r\n\r\n\r\n.pv-info[_ngcontent-%COMP%], .pv-contact[_ngcontent-%COMP%]{\r\n  margin-top:16px;\r\n  display:grid;\r\n  gap:10px;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  background: var(--brand-soft);\r\n  border: 1px solid rgba(0, 183, 181, 0.25);\r\n}\r\n\r\n\r\n.pv-info__row[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  grid-template-columns:120px 1fr;\r\n  gap:14px;\r\n}\r\n\r\n@media (max-width:520px){\r\n  .pv-info__row[_ngcontent-%COMP%]{ grid-template-columns:1fr; gap:6px; }\r\n}\r\n\r\n.pv-label[_ngcontent-%COMP%]{\r\n  color:#64748b;\r\n  font-weight:800;\r\n  font-size:12px;\r\n  text-transform:uppercase;\r\n  letter-spacing:.10em;\r\n}\r\n\r\n.pv-value[_ngcontent-%COMP%]{\r\n  color:#334155;\r\n  line-height:1.5;\r\n}\r\n\r\n.pv-steps[_ngcontent-%COMP%]{\r\n  margin-top:16px;\r\n  display:grid;\r\n  gap:12px;\r\n}\r\n\r\n.pv-step[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  grid-template-columns:34px 1fr;\r\n  gap:12px;\r\n  align-items:start;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  background:#ffffff;\r\n  border:1px solid var(--border);\r\n}\r\n\r\n.pv-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin:6px 0 0;\r\n  color:#475569;\r\n  line-height:1.5;\r\n}\r\n\r\n.pv-step__num[_ngcontent-%COMP%]{\r\n  width:34px;\r\n  height:34px;\r\n  border-radius:999px;\r\n  display:grid;\r\n  place-items:center;\r\n  font-weight:900;\r\n  background: rgba(0, 183, 181, 0.14);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  color: var(--brand-dark);\r\n}\r\n\r\n\r\n.pv-contact[_ngcontent-%COMP%]{\r\n  margin-top:16px;\r\n  display:grid;\r\n  gap:10px;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  background:#ffffff;\r\n  border:1px solid var(--border);\r\n}\r\n\r\n.pv-contact__item[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  gap:6px;\r\n}\r\n\r\n.pv-link[_ngcontent-%COMP%]{\r\n  font-weight:800;\r\n  color: var(--accent);\r\n  text-decoration: underline;\r\n  text-underline-offset: 4px;\r\n}\r\n.pv-link[_ngcontent-%COMP%]:hover{\r\n  color: var(--accent-hover);\r\n}\r\n\r\n\r\n.pv-cta[_ngcontent-%COMP%]{\r\n  margin-top:16px;\r\n  display:flex;\r\n  flex-wrap:wrap;\r\n  gap:10px;\r\n}\r\n\r\n\n\r\n.pv-next[_ngcontent-%COMP%]{\r\n  margin-top:16px;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  display:flex;\r\n  align-items:center;\r\n  justify-content:space-between;\r\n  gap:14px;\r\n  background:#ffffff;\r\n  border:1px solid var(--border);\r\n  overflow: hidden;\r\n}\r\n\r\n.pv-next__left[_ngcontent-%COMP%]{\r\n  display:grid;\r\n  gap:4px;\r\n}\r\n\r\n.pv-next__right[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  align-items:center;\r\n}\r\n\r\n.pv-next__right[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  max-width: 100%;\r\n}\r\n\r\n.pv-next__label[_ngcontent-%COMP%]{\r\n  font-size:11px;\r\n  font-weight:900;\r\n  letter-spacing:.14em;\r\n  text-transform:uppercase;\r\n  color: var(--muted);\r\n}\r\n\r\n.pv-next__date[_ngcontent-%COMP%]{\r\n  font-size:16px;\r\n  font-weight:900;\r\n  color: var(--title);\r\n}\r\n\r\n.pv-next__date-detail[_ngcontent-%COMP%]{\r\n  font-size:14px;\r\n  color: var(--muted);\r\n  font-weight:500;\r\n}\r\n\r\n.pv-next__message[_ngcontent-%COMP%]{\r\n  font-size:13px;\r\n  color: var(--muted);\r\n  font-style:italic;\r\n}\r\n\r\n.pv-next__place[_ngcontent-%COMP%]{\r\n  font-size:13px;\r\n  color: var(--muted);\r\n}\r\n\r\n.pv-next--empty[_ngcontent-%COMP%]{\r\n  opacity:0.6;\r\n  flex-direction:column;\r\n  gap:4px;\r\n}\r\n\r\n.pv-next__right[_ngcontent-%COMP%]{\r\n  flex-shrink:0;\r\n}\r\n\r\n@media (max-width:520px){\r\n  .pv-next[_ngcontent-%COMP%]{ flex-direction:column; align-items:flex-start; }\r\n  .pv-next__right[_ngcontent-%COMP%]{ width:100%; }\r\n  .pv-next__right[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{ width:100%; justify-content:center; }\r\n}\r\n\r\n\n\r\n.btn[_ngcontent-%COMP%]{\r\n  display:inline-flex;\r\n  align-items:center;\r\n  justify-content:center;\r\n  padding:11px 14px;\r\n  border-radius:12px;\r\n  font-weight:900;\r\n  border:1px solid transparent;\r\n  cursor:pointer;\r\n  transition: transform .12s ease, box-shadow .12s ease, background .12s ease, color .12s ease, border-color .12s ease;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:active{ transform:scale(.98); }\r\n\r\n.btn-primary[_ngcontent-%COMP%]{\r\n  background: var(--cta);\r\n  color:#ffffff;\r\n  \n\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover{\r\n  transform:translateY(-1px);\r\n  background: var(--cta-hover);\r\n  color:#ffffff;\r\n  \n\r\n}\r\n\r\n.btn-cta[_ngcontent-%COMP%]{\r\n  padding: 0.85rem 1rem;\r\n  border-radius: 999px;\r\n  font-weight: 800;\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n  box-shadow: 0 12px 26px rgba(17, 24, 39, 0.10);\r\n}\r\n.btn-cta[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 16px 32px rgba(17, 24, 39, 0.14);\r\n  background: var(--cta-hover);\r\n  color: #ffffff;\r\n}\r\n\r\n.btn-outline[_ngcontent-%COMP%]{\r\n  background: transparent;\r\n  border-color: rgba(255,255,255,0.75);\r\n  color:#ffffff;\r\n  box-shadow:0 10px 22px rgba(119, 225, 173, 0.363);\r\n}\r\n.btn-outline[_ngcontent-%COMP%]:hover{\r\n  background: rgba(255,255,255,0.12);\r\n  border-color: #ffffff;\r\n  box-shadow:0 10px 22px rgba(151, 222, 187, 0.363);\r\n}\r\n\r\n.btn-ghost[_ngcontent-%COMP%]{\r\n  background: rgba(0, 183, 181, 0.12);\r\n  border-color: rgba(0, 183, 181, 0.35);\r\n  color: var(--brand-dark);\r\n}\r\n.btn-ghost[_ngcontent-%COMP%]:hover{\r\n  background: rgba(0, 183, 181, 0.2);\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  scroll-behavior: smooth;\r\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PremiereVisiteComponent, [{
        type: Component,
        args: [{ selector: 'app-premiere-visite', template: "<section class=\"pv-hero\">\r\n  <div class=\"pv-hero__inner\">\r\n\r\n    <h1 class=\"pv-title\">{{ heroTitle }}</h1>\r\n    <p class=\"pv-subtitle\" style=\"white-space:pre-line\">{{ heroSubtitle }}</p>\r\n    <p class=\"pv-infos\" *ngIf=\"infosPratiques\" style=\"white-space:pre-line\">{{ infosPratiques }}</p>\r\n\r\n  </div>\r\n</section>\r\n\r\n<section class=\"pv-wrap\">\r\n  <div class=\"pv-grid\">\r\n    <!-- EN LIGNE -->\r\n    <article id=\"en-ligne\" class=\"pv-card\">\r\n      <div class=\"pv-card__head\">\r\n        <h2 class=\"pv-card__title\">Nos cultes en ligne</h2>\r\n        <p class=\"pv-card__desc\">\r\n          Nos rassemblements se font principalement en ligne sur notre canal Telegram.\r\n          Simple : tu rejoins, tu suis, tu es \u00E9difi\u00E9.\r\n        </p>\r\n      </div>\r\n\r\n      <ul class=\"pv-list\">\r\n        <li>\r\n          <span class=\"pv-badge\">Lundi - Vendredi</span>\r\n          <div class=\"pv-list__content\">\r\n            <strong>Pri\u00E8re de la mi-journ\u00E9e</strong>\r\n            <p>Rejoins-nous chaque jour pour un temps de pri\u00E8re \u00E0 partir de 12h30.</p>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <span class=\"pv-badge\">Mercredi</span>\r\n          <div class=\"pv-list__content\">\r\n            <strong>Enseignements en ligne \u2013 20h</strong>\r\n            <p>Chaque mercredi \u00E0 partir de 20h, diffus\u00E9 en live sur YouTube.</p>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <span class=\"pv-badge\">Vendredi</span>\r\n          <div class=\"pv-list__content\">\r\n            <strong>Nuit de pri\u00E8re en ligne \u2013 23h</strong>\r\n            <p>Chaque vendredi \u00E0 partir de 23h, diffus\u00E9 en live sur YouTube.</p>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"pv-cta\">\r\n        <a class=\"btn btn-ghost\"\r\n          href=\"https://t.me/cmciea_notif_bot?start=join:a27e950af32e424b88d4a3914f72111b\"\r\n          target=\"_blank\"\r\n          rel=\"noopener\">\r\n          Nous contacter (Telegram)\r\n        </a>\r\n\r\n        <a\r\n          class=\"btn btn-outline\"\r\n          href=\"https://www.youtube.com/playlist?list=PLuiootrwkQ8bA9kfV9Ul6XfuqQvq_uEbw\"\r\n          target=\"_blank\"\r\n          rel=\"noopener\"\r\n        >\r\n          Voir le live &amp; replay (YouTube)\r\n        </a>\r\n      </div>\r\n    </article>\r\n\r\n    <!-- PR\u00C9SENTIEL -->\r\n    <article id=\"presentiel\" class=\"pv-card\">\r\n      <div class=\"pv-card__head\">\r\n        <h2 class=\"pv-card__title\">Nos rencontres en pr\u00E9sentiel</h2>\r\n        <p class=\"pv-card__desc\">\r\n          Nous nous retrouvons \u00E9galement en pr\u00E9sentiel \u00E0 Paris.\r\n          Tu es le/la bienvenu(e), que ce soit ta premi\u00E8re fois ou non.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"pv-info\">\r\n        <div class=\"pv-info__row\">\r\n          <span class=\"pv-label\">Adresse</span>\r\n          <span class=\"pv-value\">11 rue de l'\u00E9toile, 75017 Paris</span>\r\n        </div>\r\n        <div class=\"pv-info__row\">\r\n          <span class=\"pv-label\">Heure</span>\r\n          <span class=\"pv-value\">A partir de 11h</span>\r\n        </div>\r\n        <div class=\"pv-info__row\">\r\n          <span class=\"pv-label\">Conseil</span>\r\n          <span class=\"pv-value\">Joins toi \u00E0 nous pour des moments de communion fraternelle.</span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- PROCHAIN PR\u00C9SENTIEL -->\r\n      <div class=\"pv-next\" *ngIf=\"nextCulte\">\r\n        <div class=\"pv-next__left\">\r\n          <span class=\"pv-next__label\">Prochain pr\u00E9sentiel</span>\r\n          <strong class=\"pv-next__date\">{{ nextCulte.sujet }}</strong>\r\n          <span class=\"pv-next__date-detail\">{{ nextCulte.date }}</span>\r\n          <span class=\"pv-next__place\">\uD83D\uDCCD 11 rue de l'\u00C9toile, 75017 Paris</span>\r\n          <span class=\"pv-next__message\" *ngIf=\"nextCulte.message\">{{ nextCulte.message }}</span>\r\n        </div>\r\n        <div class=\"pv-next__right\" *ngIf=\"calendarUrl\">\r\n          <a [href]=\"calendarUrl\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-outline\">\r\n            \uD83D\uDCC5 Ajouter \u00E0 mon agenda\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"pv-next pv-next--empty\" *ngIf=\"!nextCulte\">\r\n        <span class=\"pv-next__label\">Prochain pr\u00E9sentiel</span>\r\n        <span class=\"pv-next__date-detail\">Date \u00E0 venir \u2014 revenez bient\u00F4t.</span>\r\n      </div>\r\n\r\n      <div class=\"pv-cta\">\r\n\r\n        <a\r\n          class=\"btn btn-ghost\"\r\n          href=\"https://www.google.com/maps?q=11+rue+de+l'%C3%A9toile+75017+paris\"\r\n          target=\"_blank\"\r\n          rel=\"noopener\"\r\n        >\r\n          Ouvrir sur Google Maps\r\n        </a>\r\n      </div>\r\n    </article>\r\n\r\n        <!-- CONTACT -->\r\n    <article id=\"contact\" class=\"pv-card\">\r\n      <div class=\"pv-card__head\">\r\n        <h2 class=\"pv-card__title\">Nous contacter</h2>\r\n        <p class=\"pv-card__desc\">\r\n          Une question ? Besoin de pri\u00E8re ? Envie de mieux conna\u00EEtre l\u2019\u00E9glise ?\r\n          \u00C9cris-nous, on te r\u00E9pondra.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"pv-contact\">\r\n        <div class=\"pv-contact__item\">\r\n          <span class=\"pv-label\">Telephone</span>\r\n         <a class=\"pv-link\">+33 7 44 89 68 18 <br>\r\n         </a>\r\n        </div>\r\n\r\n        <div class=\"pv-contact__item\">\r\n          <span class=\"pv-label\">Email</span>\r\n          <a class=\"pv-link\" href=\"mailto:contact&#64;cmciea-france.com\">contact&#64;cmciea-france.com</a>\r\n        </div>\r\n\r\n        <div class=\"pv-contact__item\">\r\n          <span class=\"pv-label\">YouTube</span>\r\n          <a\r\n            class=\"pv-link\"\r\n            href=\"http://www.youtube.com/@cmcichercheursdeDieu\"\r\n            target=\"_blank\"\r\n            rel=\"noopener\"\r\n          >\r\n            La cha\u00EEne YouTube CMCIEA-FRANCE\r\n          </a>\r\n        </div>\r\n\r\n            <!-- WHATSAPP -->\r\n        <div class=\"pv-contact__item\">\r\n            <span class=\"pv-label\">WhatsApp</span>\r\n            <a\r\n                class=\"pv-link\"\r\n                href=\"https://whatsapp.com/channel/0029VbC4fM77IUYaJ8ehXg2w\"\r\n                target=\"_blank\"\r\n                rel=\"noopener\"\r\n            >\r\n                Rejoindre le canal WhatsApp officiel\r\n            </a>\r\n        </div>\r\n      </div>\r\n\r\n    </article>\r\n  </div>\r\n</section>\r\n", styles: [":host{\r\n  /* Palette */\r\n  --brand: #1D546C;\r\n  --brand-dark: #1A3D64;\r\n  --brand-soft: #F4F4F4;\r\n\r\n  --accent: #00B7B5;\r\n  --highlight: #00B7B5;\r\n\r\n  --bg: #F4F4F4;\r\n  --surface: #FFFFFF;\r\n  --border: #005461;\r\n\r\n  --title: #1D546C;\r\n  --text: #111111;\r\n  --muted: #334155;\r\n\r\n  display:block;\r\n  background: var(--bg);\r\n  color: var(--text);\r\n}\r\n\r\n\r\n/* neutraliser le style navigateur (liens bleus) */\r\n:host a{\r\n  color:inherit;\r\n  text-decoration:none;\r\n}\r\n:host a:hover{\r\n  text-decoration:none;\r\n}\r\n\r\n.pv-hero {\r\n  position: relative;\r\n  padding: clamp(90px, 12vw, 160px) 16px;\r\n  border-bottom: none;\r\n\r\n  /* IMAGE DE FOND SANS FOND BLANC */\r\n  background-image: url(\"/assets/images/premiere-visite-hero.jpg\");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.pv-hero::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  inset: 0;\r\n\r\n  /* Overlay premium : noir/vert profond + l\u00E9ger voile */\r\n  background: linear-gradient(\r\n    to right,\r\n    rgba(26, 61, 100, 0.85) 0%,\r\n    rgba(29, 84, 108, 0.6) 38%,\r\n    rgba(0, 0, 0, 0.2) 70%,\r\n    rgba(0, 0, 0, 0.00) 100%\r\n  );\r\n\r\n  z-index: 0;\r\n}\r\n\r\n\r\n\r\n.pv-hero__inner {\r\n  position: relative;\r\n  z-index: 1;\r\n\r\n  max-width: 720px;      /* \u2190 plus \u00E9troit = texte plus \u00E0 gauche */\r\n  margin-left: 0;        /* \u2190 colle \u00E0 gauche du container */\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n.pv-kicker {\r\n  margin-bottom: 18px;\r\n  font-size: 14px;\r\n  letter-spacing: 0.28em;\r\n  font-weight: 900;\r\n  text-transform: uppercase;\r\n  color: var(--highlight);\r\n}\r\n\r\n\r\n.pv-title {\r\n  margin: 0 0 18px;\r\n  font-size: clamp(44px, 6vw, 72px);\r\n  line-height: 1.05;\r\n  font-weight: 900;\r\n  letter-spacing: -0.03em;\r\n  color: var(--highlight);\r\n  text-shadow: 0 6px 30px rgba(0,0,0,0.45);\r\n}\r\n\r\n\r\n\r\n.pv-subtitle {\r\n  margin: 0;\r\n  max-width: 760px;\r\n  font-size: clamp(18px, 2.2vw, 22px);\r\n  line-height: 1.6;\r\n  font-weight: 500;\r\n  color: rgba(255,255,255,0.95);\r\n  text-shadow: 0 4px 20px rgba(0,0,0,0.35);\r\n}\r\n\r\n.pv-actions{\r\n  margin-top:20px;\r\n  display:flex;\r\n  flex-wrap:wrap;\r\n  gap:10px;\r\n}\r\n\r\n.pv-wrap{\r\n  padding: 26px 16px 72px;\r\n  background: linear-gradient(180deg, var(--bg), rgba(29, 84, 108, 0.08));\r\n}\r\n\r\n\r\n.pv-grid{\r\n  max-width: 980px;\r\n  margin:0 auto;\r\n  display:grid;\r\n  gap:18px;\r\n}\r\n\r\n.pv-card{\r\n  border-radius:20px;\r\n  padding:20px;\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.08);\r\n  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;\r\n}\r\n\r\n.pv-card:hover{\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 16px 44px rgba(17, 24, 39, 0.12);\r\n  border-color: rgba(0, 183, 181, 0.5);\r\n}\r\n\r\n\r\n.pv-card--soft{\r\n  background: var(--brand-soft);\r\n}\r\n\r\n\r\n.pv-card__head{\r\n  margin-bottom:14px;\r\n}\r\n\r\n.pv-card__title{\r\n  margin:0 0 6px;\r\n  font-size:20px;\r\n  letter-spacing:-0.01em;\r\n}\r\n\r\n.pv-card__desc,\r\n.pv-list__content p,\r\n.pv-step p{\r\n  color: var(--text);\r\n  opacity: 0.9;\r\n}\r\n\r\n\r\n/* LISTE sans puces */\r\n.pv-list{\r\n  list-style:none;\r\n  padding:0;\r\n  margin:16px 0 0;\r\n  display:grid;\r\n  gap:12px;\r\n}\r\n\r\n.pv-list li{\r\n  display:grid;\r\n  grid-template-columns:auto 1fr;\r\n  gap:12px;\r\n  align-items:flex-start;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  background: #ffffff;\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n\r\n.pv-list__content p{\r\n  margin:6px 0 0;\r\n  color:#475569;\r\n  line-height:1.5;\r\n}\r\n\r\n.pv-badge{\r\n  display:inline-flex;\r\n  align-items:center;\r\n  height:28px;\r\n  padding:0 12px;\r\n  border-radius:999px;\r\n  font-size:12px;\r\n  font-weight:800;\r\n  background: rgba(0, 183, 181, 0.14);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  color: var(--brand-dark);\r\n  white-space:nowrap;\r\n  align-self:flex-start;\r\n  margin-top:2px;\r\n}\r\n\r\n\r\n.pv-info,\r\n.pv-contact{\r\n  margin-top:16px;\r\n  display:grid;\r\n  gap:10px;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  background: var(--brand-soft);\r\n  border: 1px solid rgba(0, 183, 181, 0.25);\r\n}\r\n\r\n\r\n.pv-info__row{\r\n  display:grid;\r\n  grid-template-columns:120px 1fr;\r\n  gap:14px;\r\n}\r\n\r\n@media (max-width:520px){\r\n  .pv-info__row{ grid-template-columns:1fr; gap:6px; }\r\n}\r\n\r\n.pv-label{\r\n  color:#64748b;\r\n  font-weight:800;\r\n  font-size:12px;\r\n  text-transform:uppercase;\r\n  letter-spacing:.10em;\r\n}\r\n\r\n.pv-value{\r\n  color:#334155;\r\n  line-height:1.5;\r\n}\r\n\r\n.pv-steps{\r\n  margin-top:16px;\r\n  display:grid;\r\n  gap:12px;\r\n}\r\n\r\n.pv-step{\r\n  display:grid;\r\n  grid-template-columns:34px 1fr;\r\n  gap:12px;\r\n  align-items:start;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  background:#ffffff;\r\n  border:1px solid var(--border);\r\n}\r\n\r\n.pv-step p{\r\n  margin:6px 0 0;\r\n  color:#475569;\r\n  line-height:1.5;\r\n}\r\n\r\n.pv-step__num{\r\n  width:34px;\r\n  height:34px;\r\n  border-radius:999px;\r\n  display:grid;\r\n  place-items:center;\r\n  font-weight:900;\r\n  background: rgba(0, 183, 181, 0.14);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  color: var(--brand-dark);\r\n}\r\n\r\n\r\n.pv-contact{\r\n  margin-top:16px;\r\n  display:grid;\r\n  gap:10px;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  background:#ffffff;\r\n  border:1px solid var(--border);\r\n}\r\n\r\n.pv-contact__item{\r\n  display:grid;\r\n  gap:6px;\r\n}\r\n\r\n.pv-link{\r\n  font-weight:800;\r\n  color: var(--accent);\r\n  text-decoration: underline;\r\n  text-underline-offset: 4px;\r\n}\r\n.pv-link:hover{\r\n  color: var(--accent-hover);\r\n}\r\n\r\n\r\n.pv-cta{\r\n  margin-top:16px;\r\n  display:flex;\r\n  flex-wrap:wrap;\r\n  gap:10px;\r\n}\r\n\r\n/* Prochain pr\u00E9sentiel */\r\n.pv-next{\r\n  margin-top:16px;\r\n  padding:14px;\r\n  border-radius:16px;\r\n  display:flex;\r\n  align-items:center;\r\n  justify-content:space-between;\r\n  gap:14px;\r\n  background:#ffffff;\r\n  border:1px solid var(--border);\r\n  overflow: hidden;\r\n}\r\n\r\n.pv-next__left{\r\n  display:grid;\r\n  gap:4px;\r\n}\r\n\r\n.pv-next__right{\r\n  display:flex;\r\n  align-items:center;\r\n}\r\n\r\n.pv-next__right .btn{\r\n  margin: 0;\r\n  max-width: 100%;\r\n}\r\n\r\n.pv-next__label{\r\n  font-size:11px;\r\n  font-weight:900;\r\n  letter-spacing:.14em;\r\n  text-transform:uppercase;\r\n  color: var(--muted);\r\n}\r\n\r\n.pv-next__date{\r\n  font-size:16px;\r\n  font-weight:900;\r\n  color: var(--title);\r\n}\r\n\r\n.pv-next__date-detail{\r\n  font-size:14px;\r\n  color: var(--muted);\r\n  font-weight:500;\r\n}\r\n\r\n.pv-next__message{\r\n  font-size:13px;\r\n  color: var(--muted);\r\n  font-style:italic;\r\n}\r\n\r\n.pv-next__place{\r\n  font-size:13px;\r\n  color: var(--muted);\r\n}\r\n\r\n.pv-next--empty{\r\n  opacity:0.6;\r\n  flex-direction:column;\r\n  gap:4px;\r\n}\r\n\r\n.pv-next__right{\r\n  flex-shrink:0;\r\n}\r\n\r\n@media (max-width:520px){\r\n  .pv-next{ flex-direction:column; align-items:flex-start; }\r\n  .pv-next__right{ width:100%; }\r\n  .pv-next__right .btn{ width:100%; justify-content:center; }\r\n}\r\n\r\n/* Boutons */\r\n.btn{\r\n  display:inline-flex;\r\n  align-items:center;\r\n  justify-content:center;\r\n  padding:11px 14px;\r\n  border-radius:12px;\r\n  font-weight:900;\r\n  border:1px solid transparent;\r\n  cursor:pointer;\r\n  transition: transform .12s ease, box-shadow .12s ease, background .12s ease, color .12s ease, border-color .12s ease;\r\n}\r\n\r\n.btn:active{ transform:scale(.98); }\r\n\r\n.btn-primary{\r\n  background: var(--cta);\r\n  color:#ffffff;\r\n  /* box-shadow:0 10px 22px rgba(0, 191, 99, 0.25); */\r\n}\r\n.btn-primary:hover{\r\n  transform:translateY(-1px);\r\n  background: var(--cta-hover);\r\n  color:#ffffff;\r\n  /* box-shadow:0 16px 34px rgba(14, 95, 58, 0.28); */\r\n}\r\n\r\n.btn-cta{\r\n  padding: 0.85rem 1rem;\r\n  border-radius: 999px;\r\n  font-weight: 800;\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n  box-shadow: 0 12px 26px rgba(17, 24, 39, 0.10);\r\n}\r\n.btn-cta:hover{\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 16px 32px rgba(17, 24, 39, 0.14);\r\n  background: var(--cta-hover);\r\n  color: #ffffff;\r\n}\r\n\r\n.btn-outline{\r\n  background: transparent;\r\n  border-color: rgba(255,255,255,0.75);\r\n  color:#ffffff;\r\n  box-shadow:0 10px 22px rgba(119, 225, 173, 0.363);\r\n}\r\n.btn-outline:hover{\r\n  background: rgba(255,255,255,0.12);\r\n  border-color: #ffffff;\r\n  box-shadow:0 10px 22px rgba(151, 222, 187, 0.363);\r\n}\r\n\r\n.btn-ghost{\r\n  background: rgba(0, 183, 181, 0.12);\r\n  border-color: rgba(0, 183, 181, 0.35);\r\n  color: var(--brand-dark);\r\n}\r\n.btn-ghost:hover{\r\n  background: rgba(0, 183, 181, 0.2);\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n"] }]
    }], () => [{ type: i1.PageContentService }, { type: i2.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PremiereVisiteComponent, { className: "PremiereVisiteComponent", filePath: "app\\pages\\premiere-visite\\premiere-visite.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=premiere-visite.component.js.map