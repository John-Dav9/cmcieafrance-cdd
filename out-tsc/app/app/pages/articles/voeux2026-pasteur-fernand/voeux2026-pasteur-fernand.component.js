import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@angular/forms";
function Voeux2026PasteurFernandComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "button", 15);
    i0.ɵɵlistener("click", function Voeux2026PasteurFernandComponent_div_111_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openForm()); });
    i0.ɵɵtext(2, " \u2709\uFE0F J\u2019ai fait cette pri\u00E8re ");
    i0.ɵɵelementEnd()();
} }
function Voeux2026PasteurFernandComponent_form_112_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 16);
    i0.ɵɵlistener("ngSubmit", function Voeux2026PasteurFernandComponent_form_112_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sendMail()); });
    i0.ɵɵelementStart(1, "div", 17)(2, "label", 18);
    i0.ɵɵtext(3, "Pr\u00E9nom *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function Voeux2026PasteurFernandComponent_form_112_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.prenom, $event) || (ctx_r1.prenom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 17)(6, "label", 20);
    i0.ɵɵtext(7, "Num\u00E9ro de t\u00E9l\u00E9phone *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function Voeux2026PasteurFernandComponent_form_112_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.telephone, $event) || (ctx_r1.telephone = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 22);
    i0.ɵɵtext(10, " Envoyer ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 23);
    i0.ɵɵlistener("click", function Voeux2026PasteurFernandComponent_form_112_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelForm()); });
    i0.ɵɵtext(12, " Annuler ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.prenom);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.telephone);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.prenom || !ctx_r1.telephone);
} }
export class Voeux2026PasteurFernandComponent {
    constructor() {
        this.showForm = false;
        this.prenom = '';
        this.telephone = '';
    }
    openForm() {
        this.showForm = true;
    }
    sendMail() {
        const subject = encodeURIComponent('J’ai fait la prière – Vœux 2026 Pasteur Fernand');
        const body = encodeURIComponent(`Bonjour,

Je vous écris pour vous informer que j’ai fait la prière de repentance
suite à l’article « Vœux 2026 – Pasteur Fernand ».

Je souhaiterais être accompagné(e) spirituellement.

Merci pour votre disponibilité.

Cordialement,

---
Prénom : ${this.prenom}
Téléphone : ${this.telephone}
`);
        window.location.href = `mailto:contact@cmciea-france.com?subject=${subject}&body=${body}`;
    }
    cancelForm() {
        this.showForm = false;
        this.prenom = '';
        this.telephone = '';
    }
}
Voeux2026PasteurFernandComponent.ɵfac = function Voeux2026PasteurFernandComponent_Factory(t) { return new (t || Voeux2026PasteurFernandComponent)(); };
Voeux2026PasteurFernandComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Voeux2026PasteurFernandComponent, selectors: [["app-voeux-2026-pasteur-fernand"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 141, vars: 2, consts: [[1, "article-hero"], [1, "container"], [1, "eyebrow"], [1, "article-author"], [1, "container", "article"], [1, "content"], [1, "prayer-block"], [1, "amen"], ["class", "prayer-action", 4, "ngIf"], ["class", "prayer-form", 3, "ngSubmit", 4, "ngIf"], [1, "cta"], ["routerLink", "/actualites/marathon-biblique", 1, "btn-outline"], ["href", "https://www.whatsapp.com/channel/0029VbC4fM77IUYaJ8ehXg2w", "target", "_blank", "rel", "noopener", 1, "btn-primary"], ["routerLink", "/actualites", 1, "btn-ghost"], [1, "prayer-action"], [1, "btn-prayer", 3, "click"], [1, "prayer-form", 3, "ngSubmit"], [1, "form-group"], ["for", "prenom"], ["id", "prenom", "type", "text", "required", "", "name", "prenom", 3, "ngModelChange", "ngModel"], ["for", "telephone"], ["id", "telephone", "type", "tel", "required", "", "name", "telephone", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-prayer", 3, "disabled"], ["type", "button", 1, "btn-cancel", 3, "click"]], template: function Voeux2026PasteurFernandComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
        i0.ɵɵtext(3, "V\u0153ux 2026");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h1");
        i0.ɵɵtext(5, "2026 : Quelle voix dirigera ta vie ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 3);
        i0.ɵɵtext(7, " Parole d\u2019encouragement du ");
        i0.ɵɵelementStart(8, "strong");
        i0.ɵɵtext(9, "Pasteur Fernand Taptu\u00E9");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(10, ", Pasteur de l\u2019\u00E9glise ");
        i0.ɵɵelementStart(11, "strong");
        i0.ɵɵtext(12, "Chercheurs de Dieu \u2013 CMCIEA France");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(13, ", le ");
        i0.ɵɵelementStart(14, "strong");
        i0.ɵɵtext(15, "02/01/2026");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(16, ". ");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(17, "main", 4)(18, "div", 5)(19, "p")(20, "strong");
        i0.ɵɵtext(21, "Chers lecteurs, chers internautes,");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(22, "p");
        i0.ɵɵtext(23, " C\u2019est avec une grande joie et un r\u00E9el plaisir que je m\u2019adresse \u00E0 vous en ce 2 janvier 2026, deuxi\u00E8me jour de cette nouvelle ann\u00E9e qui commence. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "p");
        i0.ɵɵtext(25, " Comme la plupart des personnes \u00E0 travers le monde, tu as certainement re\u00E7u de nombreux v\u0153ux pour la nouvelle ann\u00E9e. Des v\u0153ux sinc\u00E8res, bien intentionn\u00E9s, parfois remplis d\u2019espoir. Mais permet-moi de te dire une v\u00E9rit\u00E9 essentielle : la parole de l\u2019homme, aussi sinc\u00E8re soit-elle, n\u2019a pas la puissance de transformer une ann\u00E9e. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "p");
        i0.ɵɵtext(27, " Aucun \u00EAtre humain, par ses paroles, ne peut emp\u00EAcher les d\u00E9fis, les combats ou les \u00E9preuves qui se dresseront sur ton chemin en 2026. Si tu es honn\u00EAte avec toi-m\u00EAme, tu reconna\u00EEtras que chaque ann\u00E9e pass\u00E9e \u00E9tait accompagn\u00E9e de v\u0153ux\u2026 et pourtant, chaque ann\u00E9e a aussi connu ses d\u00E9fis, ses luttes, ses succ\u00E8s, mais \u00E9galement ses \u00E9checs. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "p");
        i0.ɵɵtext(29, " Les v\u0153ux humains n\u2019ont ni le pouvoir, ni la capacit\u00E9 de changer le cours d\u2019une vie. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "h2");
        i0.ɵɵtext(31, "Deux agendas pour ta vie en 2026");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "p");
        i0.ɵɵtext(33, " Cependant, il existe une parole qui a une r\u00E9elle puissance : celle de Dieu. Dieu, ton Cr\u00E9ateur, a un plan et un projet pour ta vie. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "blockquote");
        i0.ɵɵtext(35, " \u00AB Car je connais les projets que j\u2019ai form\u00E9s sur vous, dit l\u2019\u00C9ternel, projets de paix et non de malheur, afin de vous donner un avenir et une esp\u00E9rance. \u00BB ");
        i0.ɵɵelementStart(36, "span");
        i0.ɵɵtext(37, "\u2014 J\u00E9r\u00E9mie 29:11");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(38, "p");
        i0.ɵɵtext(39, " Dieu a un agenda pour ta vie en 2026, un agenda de paix, de croissance et de b\u00E9n\u00E9diction. Il veut \u00E9galement d\u00E9rouler cet agenda dans ta famille. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "p")(41, "strong");
        i0.ɵɵtext(42, "Veux-tu laisser Dieu d\u00E9rouler Son agenda dans ta vie cette ann\u00E9e ?");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(43, "p");
        i0.ɵɵtext(44, " Car parall\u00E8lement, la Bible nous enseigne qu\u2019il existe un autre agenda : celui de l\u2019ennemi. Le diable a aussi un plan contre ta vie, contre ta famille, contre ton avenir. J\u00E9sus dit clairement : ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "blockquote");
        i0.ɵɵtext(46, " \u00AB Le voleur ne vient que pour d\u00E9rober, \u00E9gorger et d\u00E9truire. \u00BB ");
        i0.ɵɵelementStart(47, "span");
        i0.ɵɵtext(48, "\u2014 Jean 10:10");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(49, "p");
        i0.ɵɵtext(50, " La maladie, les accidents, le d\u00E9couragement, le ch\u00F4mage, la destruction des esp\u00E9rances\u2026 voil\u00E0 son agenda. Mais Dieu, Lui, prend plaisir \u00E0 ton bonheur. Il d\u00E9sire te voir heureux, \u00E9panoui, stable. D\u00E8s la cr\u00E9ation, Dieu a tout pr\u00E9par\u00E9 pour que l\u2019homme vive une vie b\u00E9nie : ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "blockquote");
        i0.ɵɵtext(52, " \u00AB Dieu les b\u00E9nit et leur dit : Soyez f\u00E9conds, multipliez-vous, remplissez la terre, dominez-la. \u00BB ");
        i0.ɵɵelementStart(53, "span");
        i0.ɵɵtext(54, "\u2014 Gen\u00E8se 1:28");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(55, "h2");
        i0.ɵɵtext(56, "Une d\u00E9cision \u00E0 prendre");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "p");
        i0.ɵɵtext(58, " Tout d\u00E9pend d\u00E9sormais d\u2019une chose : ta d\u00E9cision. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(59, "p");
        i0.ɵɵtext(60, " Veux-tu continuer \u00E0 diriger ta vie par toi-m\u00EAme, ou veux-tu laisser Dieu en prendre la direction ? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "p");
        i0.ɵɵtext(62, " Bien aim\u00E9. Tu es faible devant les forces des t\u00E9n\u00E8bres qui veulent d\u00E9truire ta vie. Mais je voulais t'annoncer une bonne nouvelle. C'est que contrairement aux ann\u00E9es ant\u00E9rieures, tu peux prendre la d\u00E9cision en cette ann\u00E9e 2026. De changer de paradigme ! C'est \u00E0 dire quoi ? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "p");
        i0.ɵɵtext(64, " De cacher ta vie en J\u00E9sus. Alors tu seras fort pour faire face \u00E0 l'adversit\u00E9. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "blockquote");
        i0.ɵɵtext(66, " \u00AB Celui qui est en vous est plus grand que celui qui est dans le monde. \u00BB ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(67, "h2");
        i0.ɵɵtext(68, "Commencer l\u2019ann\u00E9e avec Dieu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "p");
        i0.ɵɵtext(70, " Peu importe ton \u00E9loignement pass\u00E9, peu importe ton p\u00E9ch\u00E9, Dieu t\u2019appelle aujourd\u2019hui. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(71, "blockquote");
        i0.ɵɵtext(72, " \u00AB Si vos p\u00E9ch\u00E9s sont comme le cramoisi, ils deviendront blancs comme la neige. \u00BB ");
        i0.ɵɵelementStart(73, "span");
        i0.ɵɵtext(74, "\u2014 \u00C9sa\u00EFe 1:18");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(75, "blockquote");
        i0.ɵɵtext(76, " \u00AB La main de l\u2019\u00C9ternel n\u2019est pas trop courte pour sauver, ni son oreille trop dure pour entendre. \u00BB ");
        i0.ɵɵelementStart(77, "span");
        i0.ɵɵtext(78, "\u2014 \u00C9sa\u00EFe 59:1");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(79, "p");
        i0.ɵɵtext(80, " Lorsque tu renonces au p\u00E9ch\u00E9, ta voix redevient audible devant Dieu. Tu peux prier, et Dieu t\u2019entend. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(81, "h2");
        i0.ɵɵtext(82, "Un appel et une invitation");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(83, "p");
        i0.ɵɵtext(84, " Si tu le d\u00E9sires, tu peux aujourd\u2019hui faire une simple pri\u00E8re, demander pardon \u00E0 Dieu et accepter J\u00E9sus-Christ comme Seigneur et Sauveur. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(85, "section", 6)(86, "h3");
        i0.ɵɵtext(87, "Pri\u00E8re de repentance et d\u2019engagement");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(88, "p");
        i0.ɵɵtext(89, "Seigneur J\u00E9sus,");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(90, "p");
        i0.ɵɵtext(91, " Jusqu\u2019ici, j\u2019ai dirig\u00E9 ma vie par moi-m\u00EAme. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(92, "p");
        i0.ɵɵtext(93, " J\u2019ai march\u00E9 selon mes d\u00E9sirs, selon mes envies, sans tenir compte de ta volont\u00E9. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(94, "p");
        i0.ɵɵtext(95, " Ce faisant, j\u2019ai p\u00E9ch\u00E9 contre toi. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(96, "p");
        i0.ɵɵtext(97, " Je prie au nom de J\u00E9sus, et je me repens de mon p\u00E9ch\u00E9. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(98, "p");
        i0.ɵɵtext(99, " Pardonne-moi et restaure-moi \u00E0 toi. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(100, "p");
        i0.ɵɵtext(101, " Remplis-moi du Saint-Esprit. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(102, "p");
        i0.ɵɵtext(103, " Donne-moi de marcher chaque jour selon ta Parole. Cr\u00E9e dans mon c\u0153ur le d\u00E9sir et l\u2019envie de lire ta Parole et de m\u2019y soumettre. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(104, "p");
        i0.ɵɵtext(105, " Garde-moi en toi jusqu\u2019\u00E0 la fin de mes jours. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(106, "p");
        i0.ɵɵtext(107, " Au nom de J\u00E9sus-Christ, j'ai pri\u00E9. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(108, "p", 7)(109, "strong");
        i0.ɵɵtext(110, "Amen.");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(111, Voeux2026PasteurFernandComponent_div_111_Template, 3, 0, "div", 8)(112, Voeux2026PasteurFernandComponent_form_112_Template, 13, 3, "form", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(113, "p");
        i0.ɵɵtext(114, " Si tu as fait cette pri\u00E8re avec sinc\u00E9rit\u00E9, Dieu t\u2019a entendu et t\u2019a accueilli dans Son Royaume. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(115, "h2");
        i0.ɵɵtext(116, "Marathon de lecture biblique \u2013 2026");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(117, "p");
        i0.ɵɵtext(118, " Pour accompagner ce nouveau d\u00E9part, nous lan\u00E7ons \u00E0 partir du 5 janvier 2026 un marathon de lecture biblique de 45 jours, de la Gen\u00E8se \u00E0 l\u2019Apocalypse. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(119, "blockquote");
        i0.ɵɵtext(120, " \u00AB Que ce livre de la loi ne s\u2019\u00E9loigne point de ta bouche ; m\u00E9dite-le jour et nuit\u2026 car c\u2019est alors que tu r\u00E9ussiras dans toutes tes entreprises. \u00BB ");
        i0.ɵɵelementStart(121, "span");
        i0.ɵɵtext(122, "\u2014 Josu\u00E9 1:8");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(123, "p");
        i0.ɵɵtext(124, " Bien aim\u00E9 l'ob\u00E9issance \u00E0 la parole de Dieu et la cl\u00E9 du succ\u00E8s dans toutes tes entreprises, c'est la cl\u00E9 du succ\u00E8s dans ta vie. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(125, "p");
        i0.ɵɵtext(126, " Les gens peuvent te faire des v\u0153ux multiples, mais \u00E7a n'influence pas ta vie. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(127, "p");
        i0.ɵɵtext(128, " Ce qui va influencer ta vie, ce sera ta capacit\u00E9 \u00E0 te soumettre et \u00E0 ob\u00E9ir \u00E0 la parole de Dieu. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(129, "p");
        i0.ɵɵtext(130, " Parce que la parole de Dieu, c'est la source de la b\u00E9n\u00E9diction. La parole de Dieu, c'est la source de la sant\u00E9, c'est la source de la joie, c'est la source de la paix, de la patience, l'espoir de la temp\u00E9rance, de la B\u00E9nignit\u00E9 : Du fruit de l'esprit. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(131, "p")(132, "strong");
        i0.ɵɵtext(133, "Envoie-nous un message pour recevoir le plan de lecture et rejoindre cette dynamique spirituelle.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(134, "div", 10)(135, "a", 11);
        i0.ɵɵtext(136, " Lire l\u2019article sur le Marathon Biblique ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(137, "a", 12);
        i0.ɵɵtext(138, " Rejoindre le canal WhatsApp ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(139, "a", 13);
        i0.ɵɵtext(140, " \u2190 Retour aux actualit\u00E9s ");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(111);
        i0.ɵɵproperty("ngIf", !ctx.showForm);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.showForm);
    } }, dependencies: [CommonModule, i1.NgIf, RouterModule, i2.RouterLink, FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.NgModel, i3.NgForm], styles: ["[_nghost-%COMP%] {\r\n  --brand: #1D546C;\r\n  --brand-dark: #1A3D64;\r\n  --brand-soft: #F4F4F4;\r\n  --bg: #F4F4F4;\r\n  --surface: #FFFFFF;\r\n  --border: #005461;\r\n  --title: #1D546C;\r\n  --text: #111111;\r\n  --accent: #00B7B5;\r\n  --accent-hover: #018790;\r\n  --cta: #0C2B4E;\r\n  --cta-hover: #1A3D64;\r\n  --muted: #334155;\r\n\r\n  display: block;\r\n  color: var(--text);\r\n  font-family: 'Lora', Georgia, 'Times New Roman', serif;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: min(900px, calc(100% - 2.2rem));\r\n  margin: 0 auto;\r\n}\r\n\r\n.article-hero[_ngcontent-%COMP%] {\r\n  padding: 3rem 0 1.2rem;\r\n  background: var(--bg);\r\n}\r\n\r\n.article-author[_ngcontent-%COMP%]{\r\n  margin-top: .6rem;\r\n  font-size: .95rem;\r\n  line-height: 1.6;\r\n  color: var(--muted);\r\n  max-width: 52rem;\r\n}\r\n\r\n\r\n.eyebrow[_ngcontent-%COMP%] {\r\n  margin: 0 0 .6rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: .14em;\r\n  font-size: .82rem;\r\n  color: var(--brand-dark);\r\n  background: rgba(0, 183, 181, 0.12);\r\n  display: inline-block;\r\n  padding: .35rem .7rem;\r\n  border-radius: 999px;\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  margin: .6rem 0 .5rem;\r\n  color: var(--title);\r\n  font-size: clamp(1.8rem, 3.2vw, 2.6rem);\r\n  line-height: 1.1;\r\n  letter-spacing: -.02em;\r\n}\r\n\r\n.meta[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: var(--muted);\r\n}\r\n\r\n.article[_ngcontent-%COMP%] {\r\n  padding: 1.2rem 0 3rem;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  border-radius: 18px;\r\n  padding: 1.4rem;\r\n  box-shadow: 0 12px 26px rgba(17,24,39,.06);\r\n  line-height: 1.85;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  margin: 1.2rem 0 .4rem;\r\n  color: var(--title);\r\n  letter-spacing: -.01em;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  margin: .4rem 0 0 1.2rem;\r\n}\r\n\r\nblockquote[_ngcontent-%COMP%] {\r\n  margin: 1.2rem 0;\r\n  padding: 1rem 1rem;\r\n  background: #F4F4F4;\r\n  border: 1px solid var(--border);\r\n  border-left: 5px solid var(--support, #005461);\r\n  border-radius: 14px;\r\n}\r\n\r\nblockquote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: .5rem;\r\n  color: var(--muted);\r\n}\r\n\r\n.cta[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: .8rem;\r\n  margin-top: 1.2rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%], .btn-outline[_ngcontent-%COMP%], .btn-ghost[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: .85rem 1rem;\r\n  border-radius: 999px;\r\n  text-decoration: none;\r\n  font-weight: 800;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n}\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background: var(--cta-hover);\r\n  color: #fff;\r\n}\r\n\r\n.btn-outline[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  color: var(--brand-dark);\r\n  border: 2px solid rgba(0, 183, 181, 0.45);\r\n}\r\n.btn-outline[_ngcontent-%COMP%]:hover {\r\n  background: rgba(0, 183, 181, 0.12);\r\n}\r\n\r\n.btn-ghost[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid var(--border);\r\n  color: var(--text);\r\n}\r\n.btn-ghost[_ngcontent-%COMP%]:hover {\r\n  border-color: #d1d5db;\r\n}\r\n\r\n.prayer-block[_ngcontent-%COMP%]{\r\n  margin: 1.6rem 0;\r\n  padding: 1.4rem 1.5rem;\r\n  background: rgba(0, 183, 181, 0.08);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  border-radius: 18px;\r\n  box-shadow: 0 10px 22px rgba(17,24,39,.06);\r\n}\r\n\r\n.prayer-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  margin: 0 0 1rem;\r\n  color: var(--brand-dark);\r\n  font-size: 1.15rem;\r\n  letter-spacing: -0.01em;\r\n}\r\n\r\n.prayer-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin: 0.45rem 0;\r\n  line-height: 1.8;\r\n}\r\n\r\n.prayer-block[_ngcontent-%COMP%]   .amen[_ngcontent-%COMP%]{\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  font-size: 1.05rem;\r\n  color: var(--brand-dark);\r\n}\r\n\r\n.prayer-action[_ngcontent-%COMP%]{\r\n  margin-top: 1.6rem;\r\n  text-align: center;\r\n}\r\n\r\n.btn-prayer[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: .5rem;\r\n  padding: 0.95rem 1.3rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 1rem;\r\n  text-decoration: none;\r\n\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n  box-shadow: 0 14px 30px rgba(17,24,39,.14);\r\n\r\n  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;\r\n}\r\n\r\n.btn-prayer[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 18px 38px rgba(17,24,39,.22);\r\n  background: var(--cta-hover);\r\n  color: #ffffff;\r\n}\r\n\r\n.prayer-note[_ngcontent-%COMP%]{\r\n  margin-top: .6rem;\r\n  font-size: .9rem;\r\n  color: var(--muted);\r\n}\r\n\r\n.prayer-form[_ngcontent-%COMP%]{\r\n  animation: _ngcontent-%COMP%_fadeInForm .25s ease-out;\r\n}\r\n\r\n.form-actions[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  gap: .6rem;\r\n  margin-top: .6rem;\r\n}\r\n\r\n.btn-cancel[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n  padding: .95rem 1.3rem;\r\n  border-radius: 999px;\r\n  font-weight: 800;\r\n  font-size: .95rem;\r\n  cursor: pointer;\r\n\r\n  background: transparent;\r\n  color: var(--muted);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.btn-cancel[_ngcontent-%COMP%]:hover{\r\n  background: #F4F4F4;\r\n  color: var(--brand);\r\n}\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_fadeInForm{\r\n  from{\r\n    opacity:0;\r\n    transform: translateY(6px);\r\n  }\r\n  to{\r\n    opacity:1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 650px) {\r\n  .content[_ngcontent-%COMP%] { padding: 1.1rem; border-radius: 16px; }\r\n  .cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { width: 100%; }\r\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Voeux2026PasteurFernandComponent, [{
        type: Component,
        args: [{ selector: 'app-voeux-2026-pasteur-fernand', standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: "<section class=\"article-hero\">\r\n  <div class=\"container\">\r\n    <p class=\"eyebrow\">V\u0153ux 2026</p>\r\n    <h1>2026 : Quelle voix dirigera ta vie ?</h1>\r\n    <p class=\"article-author\">\r\n      Parole d\u2019encouragement du <strong>Pasteur Fernand Taptu\u00E9</strong>, \r\n      Pasteur de l\u2019\u00E9glise <strong>Chercheurs de Dieu \u2013 CMCIEA France</strong>, \r\n      le <strong>02/01/2026</strong>.\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n<main class=\"container article\">\r\n  <div class=\"content\">\r\n    <p><strong>Chers lecteurs, chers internautes,</strong></p>\r\n\r\n    <p>\r\n      C\u2019est avec une grande joie et un r\u00E9el plaisir que je m\u2019adresse \u00E0 vous en ce 2 janvier 2026,\r\n      deuxi\u00E8me jour de cette nouvelle ann\u00E9e qui commence.\r\n    </p>\r\n\r\n    <p>\r\n      Comme la plupart des personnes \u00E0 travers le monde, tu as certainement re\u00E7u de nombreux v\u0153ux pour la nouvelle ann\u00E9e.\r\n      Des v\u0153ux sinc\u00E8res, bien intentionn\u00E9s, parfois remplis d\u2019espoir. Mais permet-moi de te dire une v\u00E9rit\u00E9 essentielle :\r\n      la parole de l\u2019homme, aussi sinc\u00E8re soit-elle, n\u2019a pas la puissance de transformer une ann\u00E9e.\r\n    </p>\r\n\r\n    <p>\r\n      Aucun \u00EAtre humain, par ses paroles, ne peut emp\u00EAcher les d\u00E9fis, les combats ou les \u00E9preuves qui se dresseront sur ton chemin en 2026.\r\n      Si tu es honn\u00EAte avec toi-m\u00EAme, tu reconna\u00EEtras que chaque ann\u00E9e pass\u00E9e \u00E9tait accompagn\u00E9e de v\u0153ux\u2026 et pourtant,\r\n      chaque ann\u00E9e a aussi connu ses d\u00E9fis, ses luttes, ses succ\u00E8s, mais \u00E9galement ses \u00E9checs.\r\n    </p>\r\n\r\n    <p>\r\n      Les v\u0153ux humains n\u2019ont ni le pouvoir, ni la capacit\u00E9 de changer le cours d\u2019une vie.\r\n    </p>\r\n\r\n    <h2>Deux agendas pour ta vie en 2026</h2>\r\n\r\n    <p>\r\n      Cependant, il existe une parole qui a une r\u00E9elle puissance : celle de Dieu. Dieu, ton Cr\u00E9ateur, a un plan et un projet pour ta vie.\r\n    </p>\r\n\r\n    <blockquote>\r\n      \u00AB Car je connais les projets que j\u2019ai form\u00E9s sur vous, dit l\u2019\u00C9ternel, projets de paix et non de malheur,\r\n      afin de vous donner un avenir et une esp\u00E9rance. \u00BB\r\n      <span>\u2014 J\u00E9r\u00E9mie 29:11</span>\r\n    </blockquote>\r\n\r\n    <p>\r\n      Dieu a un agenda pour ta vie en 2026, un agenda de paix, de croissance et de b\u00E9n\u00E9diction. Il veut \u00E9galement d\u00E9rouler cet agenda dans ta famille.\r\n    </p>\r\n\r\n    <p><strong>Veux-tu laisser Dieu d\u00E9rouler Son agenda dans ta vie cette ann\u00E9e ?</strong></p>\r\n\r\n    <p>\r\n      Car parall\u00E8lement, la Bible nous enseigne qu\u2019il existe un autre agenda : celui de l\u2019ennemi.\r\n      Le diable a aussi un plan contre ta vie, contre ta famille, contre ton avenir. J\u00E9sus dit clairement :\r\n    </p>\r\n\r\n    <blockquote>\r\n      \u00AB Le voleur ne vient que pour d\u00E9rober, \u00E9gorger et d\u00E9truire. \u00BB\r\n      <span>\u2014 Jean 10:10</span>\r\n    </blockquote>\r\n\r\n    <p>\r\n      La maladie, les accidents, le d\u00E9couragement, le ch\u00F4mage, la destruction des esp\u00E9rances\u2026 voil\u00E0 son agenda.\r\n      Mais Dieu, Lui, prend plaisir \u00E0 ton bonheur. Il d\u00E9sire te voir heureux, \u00E9panoui, stable. D\u00E8s la cr\u00E9ation, Dieu a tout pr\u00E9par\u00E9 pour que l\u2019homme vive une vie b\u00E9nie :\r\n    </p>\r\n\r\n    <blockquote>\r\n      \u00AB Dieu les b\u00E9nit et leur dit : Soyez f\u00E9conds, multipliez-vous, remplissez la terre, dominez-la. \u00BB\r\n      <span>\u2014 Gen\u00E8se 1:28</span>\r\n    </blockquote>\r\n\r\n    <h2>Une d\u00E9cision \u00E0 prendre</h2>\r\n\r\n    <p>\r\n      Tout d\u00E9pend d\u00E9sormais d\u2019une chose : ta d\u00E9cision. \r\n    </p>\r\n\r\n    <p>\r\n      Veux-tu continuer \u00E0 diriger ta vie par toi-m\u00EAme, ou veux-tu laisser Dieu en prendre la direction ?\r\n    </p>\r\n\r\n    <p>\r\n      Bien aim\u00E9.\r\n      Tu es faible devant les forces des t\u00E9n\u00E8bres qui veulent d\u00E9truire ta vie.\r\n      Mais je voulais t'annoncer une bonne nouvelle.\r\n      C'est que contrairement aux ann\u00E9es ant\u00E9rieures, tu peux prendre la d\u00E9cision en cette ann\u00E9e 2026.\r\n      De changer de paradigme !\r\n      C'est \u00E0 dire quoi ?\r\n    </p>\r\n\r\n    <p>\r\n      De cacher ta vie en J\u00E9sus.\r\n      Alors tu seras fort pour faire face \u00E0 l'adversit\u00E9.\r\n    </p>\r\n\r\n    <blockquote>\r\n      \u00AB Celui qui est en vous est plus grand que celui qui est dans le monde. \u00BB\r\n    </blockquote>\r\n\r\n\r\n    <h2>Commencer l\u2019ann\u00E9e avec Dieu</h2>\r\n\r\n    <p>\r\n      Peu importe ton \u00E9loignement pass\u00E9, peu importe ton p\u00E9ch\u00E9, Dieu t\u2019appelle aujourd\u2019hui.\r\n    </p>\r\n\r\n    <blockquote>\r\n      \u00AB Si vos p\u00E9ch\u00E9s sont comme le cramoisi, ils deviendront blancs comme la neige. \u00BB\r\n      <span>\u2014 \u00C9sa\u00EFe 1:18</span>\r\n    </blockquote>\r\n\r\n    <blockquote>\r\n      \u00AB La main de l\u2019\u00C9ternel n\u2019est pas trop courte pour sauver, ni son oreille trop dure pour entendre. \u00BB\r\n      <span>\u2014 \u00C9sa\u00EFe 59:1</span>\r\n    </blockquote>\r\n\r\n    <p>\r\n      Lorsque tu renonces au p\u00E9ch\u00E9, ta voix redevient audible devant Dieu. Tu peux prier, et Dieu t\u2019entend.\r\n    </p>\r\n\r\n    <h2>Un appel et une invitation</h2>\r\n\r\n    <p>\r\n      Si tu le d\u00E9sires, tu peux aujourd\u2019hui faire une simple pri\u00E8re, demander pardon \u00E0 Dieu et accepter J\u00E9sus-Christ comme Seigneur et Sauveur.\r\n    </p>\r\n\r\n    <section class=\"prayer-block\">\r\n    <h3>Pri\u00E8re de repentance et d\u2019engagement</h3>\r\n\r\n    <p>Seigneur J\u00E9sus,</p>\r\n\r\n    <p>\r\n        Jusqu\u2019ici, j\u2019ai dirig\u00E9 ma vie par moi-m\u00EAme.\r\n    </p>\r\n\r\n    <p>\r\n        J\u2019ai march\u00E9 selon mes d\u00E9sirs, selon mes envies,\r\n        sans tenir compte de ta volont\u00E9.\r\n    </p>\r\n\r\n    <p>\r\n        Ce faisant, j\u2019ai p\u00E9ch\u00E9 contre toi.\r\n    </p>\r\n\r\n    <p>\r\n        Je prie au nom de J\u00E9sus,\r\n        et je me repens de mon p\u00E9ch\u00E9.\r\n    </p>\r\n\r\n    <p>\r\n        Pardonne-moi et restaure-moi \u00E0 toi.\r\n    </p>\r\n\r\n    <p>\r\n        Remplis-moi du Saint-Esprit.\r\n    </p>\r\n\r\n    <p>\r\n        Donne-moi de marcher chaque jour selon ta Parole.\r\n        Cr\u00E9e dans mon c\u0153ur le d\u00E9sir et l\u2019envie\r\n        de lire ta Parole et de m\u2019y soumettre.\r\n    </p>\r\n\r\n    <p>\r\n        Garde-moi en toi jusqu\u2019\u00E0 la fin de mes jours.\r\n    </p>\r\n\r\n    <p>\r\n        Au nom de J\u00E9sus-Christ, j'ai pri\u00E9.\r\n    </p>\r\n\r\n    <p class=\"amen\"><strong>Amen.</strong></p>\r\n\r\n      <!-- BOUTON INITIAL -->\r\n    <div class=\"prayer-action\" *ngIf=\"!showForm\">\r\n      <button class=\"btn-prayer\" (click)=\"openForm()\">\r\n        \u2709\uFE0F J\u2019ai fait cette pri\u00E8re\r\n      </button>\r\n    </div>\r\n\r\n    <!-- FORMULAIRE (apr\u00E8s clic) -->\r\n    <form\r\n      class=\"prayer-form\"\r\n      *ngIf=\"showForm\"\r\n      (ngSubmit)=\"sendMail()\"\r\n    >\r\n      <div class=\"form-group\">\r\n        <label for=\"prenom\">Pr\u00E9nom *</label>\r\n        <input\r\n          id=\"prenom\"\r\n          type=\"text\"\r\n          required\r\n          [(ngModel)]=\"prenom\"\r\n          name=\"prenom\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"telephone\">Num\u00E9ro de t\u00E9l\u00E9phone *</label>\r\n        <input\r\n          id=\"telephone\"\r\n          type=\"tel\"\r\n          required\r\n          [(ngModel)]=\"telephone\"\r\n          name=\"telephone\"\r\n        />\r\n      </div>\r\n\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn-prayer\"\r\n        [disabled]=\"!prenom || !telephone\"\r\n      >\r\n        Envoyer\r\n      </button>\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-cancel\"\r\n        (click)=\"cancelForm()\"\r\n      >\r\n        Annuler\r\n      </button>\r\n    </form>\r\n\r\n    </section>\r\n\r\n\r\n    <p>\r\n      Si tu as fait cette pri\u00E8re avec sinc\u00E9rit\u00E9, Dieu t\u2019a entendu et t\u2019a accueilli dans Son Royaume.\r\n    </p>\r\n\r\n    <h2>Marathon de lecture biblique \u2013 2026</h2>\r\n\r\n    <p>\r\n      Pour accompagner ce nouveau d\u00E9part, nous lan\u00E7ons \u00E0 partir du 5 janvier 2026 un marathon de lecture biblique de 45 jours, de la Gen\u00E8se \u00E0 l\u2019Apocalypse.\r\n    </p>\r\n\r\n    <blockquote>\r\n      \u00AB Que ce livre de la loi ne s\u2019\u00E9loigne point de ta bouche ; m\u00E9dite-le jour et nuit\u2026 car c\u2019est alors que tu r\u00E9ussiras dans toutes tes entreprises. \u00BB\r\n      <span>\u2014 Josu\u00E9 1:8</span>\r\n    </blockquote>\r\n    <p>\r\n      Bien aim\u00E9 l'ob\u00E9issance \u00E0 la parole de Dieu et la cl\u00E9 du succ\u00E8s dans toutes tes entreprises, c'est la cl\u00E9 du succ\u00E8s dans ta vie.\r\n    </p>\r\n    <p>\r\n      Les gens peuvent te faire des v\u0153ux multiples, mais \u00E7a n'influence pas ta vie. \r\n    </p>\r\n    <p>\r\n      Ce qui va influencer ta vie, ce sera ta capacit\u00E9 \u00E0 te soumettre et \u00E0 ob\u00E9ir \u00E0 la parole de Dieu.\r\n    </p>\r\n\r\n    <p>\r\n      Parce que la parole de Dieu, c'est la source de la b\u00E9n\u00E9diction.\r\n      La parole de Dieu, c'est la source de la sant\u00E9, c'est la source de la joie, \r\n      c'est la source de la paix, de la patience, l'espoir de la temp\u00E9rance, de la B\u00E9nignit\u00E9 : \r\n      Du fruit de l'esprit.\r\n    </p>\r\n\r\n    <p><strong>Envoie-nous un message pour recevoir le plan de lecture et rejoindre cette dynamique spirituelle.</strong></p>\r\n\r\n    <div class=\"cta\">\r\n      <a routerLink=\"/actualites/marathon-biblique\" class=\"btn-outline\">\r\n        Lire l\u2019article sur le Marathon Biblique\r\n      </a>\r\n\r\n      <a\r\n        href=\"https://www.whatsapp.com/channel/0029VbC4fM77IUYaJ8ehXg2w\"\r\n        target=\"_blank\"\r\n        rel=\"noopener\"\r\n        class=\"btn-primary\"\r\n      >\r\n        Rejoindre le canal WhatsApp\r\n      </a>\r\n\r\n      <a routerLink=\"/actualites\" class=\"btn-ghost\">\r\n        \u2190 Retour aux actualit\u00E9s\r\n      </a>\r\n    </div>\r\n  </div>\r\n</main>\r\n", styles: [":host {\r\n  --brand: #1D546C;\r\n  --brand-dark: #1A3D64;\r\n  --brand-soft: #F4F4F4;\r\n  --bg: #F4F4F4;\r\n  --surface: #FFFFFF;\r\n  --border: #005461;\r\n  --title: #1D546C;\r\n  --text: #111111;\r\n  --accent: #00B7B5;\r\n  --accent-hover: #018790;\r\n  --cta: #0C2B4E;\r\n  --cta-hover: #1A3D64;\r\n  --muted: #334155;\r\n\r\n  display: block;\r\n  color: var(--text);\r\n  font-family: 'Lora', Georgia, 'Times New Roman', serif;\r\n}\r\n\r\n.container {\r\n  width: min(900px, calc(100% - 2.2rem));\r\n  margin: 0 auto;\r\n}\r\n\r\n.article-hero {\r\n  padding: 3rem 0 1.2rem;\r\n  background: var(--bg);\r\n}\r\n\r\n.article-author{\r\n  margin-top: .6rem;\r\n  font-size: .95rem;\r\n  line-height: 1.6;\r\n  color: var(--muted);\r\n  max-width: 52rem;\r\n}\r\n\r\n\r\n.eyebrow {\r\n  margin: 0 0 .6rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: .14em;\r\n  font-size: .82rem;\r\n  color: var(--brand-dark);\r\n  background: rgba(0, 183, 181, 0.12);\r\n  display: inline-block;\r\n  padding: .35rem .7rem;\r\n  border-radius: 999px;\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n}\r\n\r\nh1 {\r\n  margin: .6rem 0 .5rem;\r\n  color: var(--title);\r\n  font-size: clamp(1.8rem, 3.2vw, 2.6rem);\r\n  line-height: 1.1;\r\n  letter-spacing: -.02em;\r\n}\r\n\r\n.meta {\r\n  margin: 0;\r\n  color: var(--muted);\r\n}\r\n\r\n.article {\r\n  padding: 1.2rem 0 3rem;\r\n}\r\n\r\n.content {\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  border-radius: 18px;\r\n  padding: 1.4rem;\r\n  box-shadow: 0 12px 26px rgba(17,24,39,.06);\r\n  line-height: 1.85;\r\n}\r\n\r\nh2 {\r\n  margin: 1.2rem 0 .4rem;\r\n  color: var(--title);\r\n  letter-spacing: -.01em;\r\n}\r\n\r\nul {\r\n  margin: .4rem 0 0 1.2rem;\r\n}\r\n\r\nblockquote {\r\n  margin: 1.2rem 0;\r\n  padding: 1rem 1rem;\r\n  background: #F4F4F4;\r\n  border: 1px solid var(--border);\r\n  border-left: 5px solid var(--support, #005461);\r\n  border-radius: 14px;\r\n}\r\n\r\nblockquote span {\r\n  display: block;\r\n  margin-top: .5rem;\r\n  color: var(--muted);\r\n}\r\n\r\n.cta {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: .8rem;\r\n  margin-top: 1.2rem;\r\n}\r\n\r\n.btn-primary, .btn-outline, .btn-ghost {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: .85rem 1rem;\r\n  border-radius: 999px;\r\n  text-decoration: none;\r\n  font-weight: 800;\r\n}\r\n\r\n.btn-primary {\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n}\r\n.btn-primary:hover {\r\n  background: var(--cta-hover);\r\n  color: #fff;\r\n}\r\n\r\n.btn-outline {\r\n  background: transparent;\r\n  color: var(--brand-dark);\r\n  border: 2px solid rgba(0, 183, 181, 0.45);\r\n}\r\n.btn-outline:hover {\r\n  background: rgba(0, 183, 181, 0.12);\r\n}\r\n\r\n.btn-ghost {\r\n  background: #fff;\r\n  border: 1px solid var(--border);\r\n  color: var(--text);\r\n}\r\n.btn-ghost:hover {\r\n  border-color: #d1d5db;\r\n}\r\n\r\n.prayer-block{\r\n  margin: 1.6rem 0;\r\n  padding: 1.4rem 1.5rem;\r\n  background: rgba(0, 183, 181, 0.08);\r\n  border: 1px solid rgba(0, 183, 181, 0.35);\r\n  border-radius: 18px;\r\n  box-shadow: 0 10px 22px rgba(17,24,39,.06);\r\n}\r\n\r\n.prayer-block h3{\r\n  margin: 0 0 1rem;\r\n  color: var(--brand-dark);\r\n  font-size: 1.15rem;\r\n  letter-spacing: -0.01em;\r\n}\r\n\r\n.prayer-block p{\r\n  margin: 0.45rem 0;\r\n  line-height: 1.8;\r\n}\r\n\r\n.prayer-block .amen{\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  font-size: 1.05rem;\r\n  color: var(--brand-dark);\r\n}\r\n\r\n.prayer-action{\r\n  margin-top: 1.6rem;\r\n  text-align: center;\r\n}\r\n\r\n.btn-prayer{\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: .5rem;\r\n  padding: 0.95rem 1.3rem;\r\n  border-radius: 999px;\r\n  font-weight: 900;\r\n  font-size: 1rem;\r\n  text-decoration: none;\r\n\r\n  background: var(--cta);\r\n  color: #ffffff;\r\n  border: 2px solid transparent;\r\n  box-shadow: 0 14px 30px rgba(17,24,39,.14);\r\n\r\n  transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;\r\n}\r\n\r\n.btn-prayer:hover{\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 18px 38px rgba(17,24,39,.22);\r\n  background: var(--cta-hover);\r\n  color: #ffffff;\r\n}\r\n\r\n.prayer-note{\r\n  margin-top: .6rem;\r\n  font-size: .9rem;\r\n  color: var(--muted);\r\n}\r\n\r\n.prayer-form{\r\n  animation: fadeInForm .25s ease-out;\r\n}\r\n\r\n.form-actions{\r\n  display: flex;\r\n  gap: .6rem;\r\n  margin-top: .6rem;\r\n}\r\n\r\n.btn-cancel{\r\n  flex: 1;\r\n  padding: .95rem 1.3rem;\r\n  border-radius: 999px;\r\n  font-weight: 800;\r\n  font-size: .95rem;\r\n  cursor: pointer;\r\n\r\n  background: transparent;\r\n  color: var(--muted);\r\n  border: 1px solid var(--border);\r\n}\r\n\r\n.btn-cancel:hover{\r\n  background: #F4F4F4;\r\n  color: var(--brand);\r\n}\r\n\r\n\r\n@keyframes fadeInForm{\r\n  from{\r\n    opacity:0;\r\n    transform: translateY(6px);\r\n  }\r\n  to{\r\n    opacity:1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 650px) {\r\n  .content { padding: 1.1rem; border-radius: 16px; }\r\n  .cta a { width: 100%; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Voeux2026PasteurFernandComponent, { className: "Voeux2026PasteurFernandComponent", filePath: "app\\pages\\articles\\voeux2026-pasteur-fernand\\voeux2026-pasteur-fernand.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=voeux2026-pasteur-fernand.component.js.map