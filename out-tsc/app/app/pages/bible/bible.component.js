import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function BibleComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 13)(1, "div")(2, "span");
    i0.ɵɵtext(3, "Apprendre en jouant");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "Quiz biblique");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Testez votre connaissance des r\u00E9f\u00E9rences et des versets en cinq questions.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 14);
    i0.ɵɵlistener("click", function BibleComponent_section_12_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.startQuiz()); });
    i0.ɵɵtext(9, "Commencer le quiz");
    i0.ɵɵelementEnd()();
} }
function BibleComponent_section_13_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function BibleComponent_section_13_button_11_Template_button_click_0_listener() { const i_r4 = i0.ɵɵrestoreView(_r3).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.answerQuiz(i_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("correct", ctx_r1.quizAnswer !== null && i_r4 === ctx_r1.quiz[ctx_r1.quizIndex].answerIndex)("wrong", ctx_r1.quizAnswer === i_r4 && i_r4 !== ctx_r1.quiz[ctx_r1.quizIndex].answerIndex);
    i0.ɵɵproperty("disabled", ctx_r1.quizAnswer !== null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r5, " ");
} }
function BibleComponent_section_13_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function BibleComponent_section_13_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.nextQuizQuestion()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.quizIndex + 1 === ctx_r1.quiz.length ? "Voir mon r\u00E9sultat" : "Question suivante", " ");
} }
function BibleComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 15)(1, "div", 16)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "blockquote");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 17);
    i0.ɵɵtemplate(11, BibleComponent_section_13_button_11_Template, 2, 6, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, BibleComponent_section_13_button_12_Template, 2, 1, "button", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Question ", ctx_r1.quizIndex + 1, " / ", ctx_r1.quiz.length, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.quizScore, " point", ctx_r1.quizScore > 1 ? "s" : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.quiz[ctx_r1.quizIndex].question);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u201C", ctx_r1.quiz[ctx_r1.quizIndex].excerpt, "\u201D");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.quiz[ctx_r1.quizIndex].options);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.quizAnswer !== null);
} }
function BibleComponent_section_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 22)(1, "span");
    i0.ɵɵtext(2, "Quiz termin\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 21);
    i0.ɵɵlistener("click", function BibleComponent_section_14_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.startQuiz()); });
    i0.ɵɵtext(8, "Recommencer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 23);
    i0.ɵɵlistener("click", function BibleComponent_section_14_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeQuiz()); });
    i0.ɵɵtext(10, "Fermer");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r1.quizScore, " / ", ctx_r1.quiz.length, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.quizScore >= 4 ? "Excellent r\u00E9sultat." : "Continuez \u00E0 explorer les versets propos\u00E9s ci-dessous.");
} }
function BibleComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵlistener("click", function BibleComponent_div_15_div_3_Template_div_click_0_listener() { const v_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.select(v_r9)); });
    i0.ɵɵelementStart(1, "div", 27);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 28);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r9.reference);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\"", v_r9.text, "\"");
} }
function BibleComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BibleComponent_div_15_div_3_Template, 5, 2, "div", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("R\u00E9sultats (", ctx_r1.results.length, ")");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.results);
} }
function BibleComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Aucun r\u00E9sultat pour \"", ctx_r1.query, "\"");
} }
function BibleComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵlistener("click", function BibleComponent_div_17_div_4_Template_div_click_0_listener() { const v_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.select(v_r11)); });
    i0.ɵɵelementStart(1, "div", 27);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 28);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r11.reference);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\"", v_r11.text, "\"");
} }
function BibleComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "h2");
    i0.ɵɵtext(2, "Versets bien-aim\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 31);
    i0.ɵɵtemplate(4, BibleComponent_div_17_div_4_Template, 5, 2, "div", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.classics);
} }
function BibleComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵlistener("click", function BibleComponent_div_18_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearSelected()); });
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵlistener("click", function BibleComponent_div_18_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r12); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "button", 34);
    i0.ɵɵlistener("click", function BibleComponent_div_18_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearSelected()); });
    i0.ɵɵtext(3, "\u2715");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 36);
    i0.ɵɵtext(7, "\u271D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 37);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.selected.reference);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("\"", ctx_r1.selected.text, "\"");
} }
export class BibleComponent {
    constructor(http) {
        this.http = http;
        this.query = '';
        this.results = [];
        this.classics = [];
        this.selected = null;
        this.loading = false;
        this.quiz = [];
        this.quizIndex = 0;
        this.quizScore = 0;
        this.quizAnswer = null;
        this.quizFinished = false;
    }
    ngOnInit() {
        this.http.get(`${environment.apiBase}/bible/classics`).subscribe({
            next: v => this.classics = v,
        });
    }
    search() {
        if (this.query.trim().length < 2)
            return;
        this.loading = true;
        this.http.get(`${environment.apiBase}/bible/search?q=${encodeURIComponent(this.query)}`).subscribe({
            next: r => { this.results = r; this.loading = false; },
            error: () => this.loading = false,
        });
    }
    select(v) { this.selected = v; }
    clearSelected() { this.selected = null; }
    startQuiz() {
        this.http.get(`${environment.apiBase}/bible/quiz?count=5`).subscribe({
            next: questions => {
                this.quiz = questions;
                this.quizIndex = 0;
                this.quizScore = 0;
                this.quizAnswer = null;
                this.quizFinished = false;
            },
        });
    }
    answerQuiz(index) {
        if (this.quizAnswer !== null)
            return;
        this.quizAnswer = index;
        if (index === this.quiz[this.quizIndex].answerIndex)
            this.quizScore++;
    }
    nextQuizQuestion() {
        if (this.quizIndex + 1 >= this.quiz.length) {
            this.quizFinished = true;
            return;
        }
        this.quizIndex++;
        this.quizAnswer = null;
    }
    closeQuiz() {
        this.quiz = [];
        this.quizFinished = false;
    }
}
BibleComponent.ɵfac = function BibleComponent_Factory(t) { return new (t || BibleComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
BibleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BibleComponent, selectors: [["app-bible"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 19, vars: 10, consts: [[1, "bible-page"], [1, "bible-hero"], [1, "bible-cross"], [1, "bible-search"], ["placeholder", "Jean 3:16 / amour / foi...", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "search-btn", 3, "click", "disabled"], ["class", "quiz-launch", 4, "ngIf"], ["class", "quiz-card", 4, "ngIf"], ["class", "quiz-card quiz-result", 4, "ngIf"], ["class", "results-section", 4, "ngIf"], ["class", "empty-search", 4, "ngIf"], ["class", "classics-section", 4, "ngIf"], ["class", "verse-modal-backdrop", 3, "click", 4, "ngIf"], [1, "quiz-launch"], ["type", "button", 3, "click"], [1, "quiz-card"], [1, "quiz-head"], [1, "quiz-options"], [3, "correct", "wrong", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "quiz-next", 3, "click", 4, "ngIf"], [3, "click", "disabled"], [1, "quiz-next", 3, "click"], [1, "quiz-card", "quiz-result"], [1, "quiz-close", 3, "click"], [1, "results-section"], ["class", "verse-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "verse-card", 3, "click"], [1, "verse-ref"], [1, "verse-text"], [1, "empty-search"], [1, "classics-section"], [1, "verse-grid"], [1, "verse-modal-backdrop", 3, "click"], [1, "verse-modal", 3, "click"], [1, "modal-close", 3, "click"], [1, "modal-ref"], [1, "modal-cross"], [1, "modal-text"]], template: function BibleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵtext(3, "\u271D");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h1");
        i0.ɵɵtext(5, "Bible en ligne");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "Recherchez un verset, une r\u00E9f\u00E9rence ou un mot-cl\u00E9");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 3)(9, "input", 4);
        i0.ɵɵtwoWayListener("ngModelChange", function BibleComponent_Template_input_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.query, $event) || (ctx.query = $event); return $event; });
        i0.ɵɵlistener("keyup.enter", function BibleComponent_Template_input_keyup_enter_9_listener() { return ctx.search(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵlistener("click", function BibleComponent_Template_button_click_10_listener() { return ctx.search(); });
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(12, BibleComponent_section_12_Template, 10, 0, "section", 6)(13, BibleComponent_section_13_Template, 13, 8, "section", 7)(14, BibleComponent_section_14_Template, 11, 3, "section", 8)(15, BibleComponent_div_15_Template, 4, 2, "div", 9)(16, BibleComponent_div_16_Template, 3, 1, "div", 10)(17, BibleComponent_div_17_Template, 5, 1, "div", 11)(18, BibleComponent_div_18_Template, 10, 2, "div", 12);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵtwoWayProperty("ngModel", ctx.query);
        i0.ɵɵadvance();
        i0.ɵɵproperty("disabled", ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx.loading ? "\u2026" : "\uD83D\uDD0D Chercher", " ");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.quiz.length === 0);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.quiz.length && !ctx.quizFinished);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.quizFinished);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.results.length);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.query && ctx.results.length === 0 && !ctx.loading);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.results.length);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.selected);
    } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, FormsModule, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], styles: ["$primary[_ngcontent-%COMP%]:   #1D546C[_ngcontent-%COMP%]; $accent[_ngcontent-%COMP%]:   #E8A838[_ngcontent-%COMP%]; $bg[_ngcontent-%COMP%]:   #F7F5F0[_ngcontent-%COMP%]; $dark[_ngcontent-%COMP%]:   #1a1a2e[_ngcontent-%COMP%];\n\n.bible-page[_ngcontent-%COMP%] { max-width: 900px; margin: 0 auto; padding: 32px 16px; }\n\n.bible-hero[_ngcontent-%COMP%] { text-align: center; margin-bottom: 32px; }\n.bible-cross[_ngcontent-%COMP%] { font-size: 40px; color: $accent; margin-bottom: 10px; }\n.bible-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 32px; color: $dark; margin: 0 0 8px; }\n.bible-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]  { color: #666; font-size: 16px; }\n\n.bible-search[_ngcontent-%COMP%] { display: flex; gap: 8px; margin-bottom: 32px; }\n.search-input[_ngcontent-%COMP%] {\n  flex: 1; padding: 12px 16px; border: 2px solid #ddd; border-radius: 8px;\n  font-size: 15px; transition: border-color 0.2s;\n  &:focus { outline: none; border-color: $primary; }\n}\n.search-btn[_ngcontent-%COMP%] {\n  padding: 12px 20px; background: $primary; color: white; border: none;\n  border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer;\n  transition: background 0.2s; white-space: nowrap;\n  &:hover { background: darken($primary, 8%); }\n  &:disabled { opacity: 0.6; cursor: default; }\n}\n\nh2[_ngcontent-%COMP%] { font-size: 20px; color: $dark; margin-bottom: 16px; }\n\n.verse-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }\n\n.verse-card[_ngcontent-%COMP%] {\n  background: white; border-radius: 10px; padding: 16px; cursor: pointer;\n  border: 1px solid #e5e7eb; transition: transform 0.15s, box-shadow 0.15s;\n  &:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); border-color: rgba($primary, 0.3); }\n}\n.verse-ref[_ngcontent-%COMP%]  { font-size: 12px; font-weight: 700; color: $primary; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }\n.verse-text[_ngcontent-%COMP%] { font-size: 14px; color: #444; line-height: 1.6; margin: 0; font-style: italic; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }\n\n.empty-search[_ngcontent-%COMP%] { text-align: center; padding: 32px; color: #888; }\n\n//[_ngcontent-%COMP%]   Modal\n.verse-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000;\n  display: flex; align-items: center; justify-content: center; padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.verse-modal[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, $primary 0%, darken($primary, 12%) 100%);\n  color: white; border-radius: 16px; padding: 40px 32px; max-width: 520px; width: 100%;\n  text-align: center; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.4);\n  animation: _ngcontent-%COMP%_slideUp 0.25s ease;\n}\n.modal-close[_ngcontent-%COMP%] { position: absolute; top: 14px; right: 16px; background: rgba(white,0.15); border: none; color: white; width: 28px; height: 28px; border-radius: 50%; font-size: 14px; cursor: pointer; }\n.modal-ref[_ngcontent-%COMP%]   { font-size: 14px; font-weight: 700; color: $accent; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }\n.modal-cross[_ngcontent-%COMP%] { font-size: 36px; color: rgba($accent, 0.8); margin-bottom: 16px; }\n.modal-text[_ngcontent-%COMP%]  { font-size: 18px; line-height: 1.8; font-style: italic; color: rgba(white, 0.95); }\n\n@keyframes _ngcontent-%COMP%_fadeIn  { from { opacity: 0; } to { opacity: 1; } }\n@keyframes _ngcontent-%COMP%_slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\n.quiz-launch[_ngcontent-%COMP%], .quiz-card[_ngcontent-%COMP%] {\n  max-width: 920px; margin: 26px auto; padding: 26px; border-radius: 20px;\n  background: #102f3d; color: #fff; box-shadow: 0 18px 50px rgba(16,47,61,.16);\n}\n.quiz-launch[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 24px; }\n.quiz-launch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .quiz-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .quiz-result[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #e8a838; font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;\n}\n.quiz-launch[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .quiz-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 5px 0 8px; }\n.quiz-launch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: rgba(255,255,255,.7); }\n.quiz-launch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .quiz-next[_ngcontent-%COMP%], .quiz-close[_ngcontent-%COMP%] {\n  padding: 11px 16px; border: 0; border-radius: 10px; font-weight: 700; cursor: pointer;\n}\n.quiz-launch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .quiz-next[_ngcontent-%COMP%] { background: #e8a838; color: #17232a; }\n.quiz-head[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; }\n.quiz-card[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] { margin: 16px 0 20px; color: rgba(255,255,255,.78); line-height: 1.65; }\n.quiz-options[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 18px; }\n.quiz-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 13px; border: 1px solid rgba(255,255,255,.13); border-radius: 11px;\n  color: #fff; background: rgba(255,255,255,.065); cursor: pointer;\n}\n.quiz-options[_ngcontent-%COMP%]   button.correct[_ngcontent-%COMP%] { color: #a9ebbf; border-color: rgba(69,190,111,.5); background: rgba(69,190,111,.14); }\n.quiz-options[_ngcontent-%COMP%]   button.wrong[_ngcontent-%COMP%] { color: #ffacaf; border-color: rgba(229,72,77,.5); background: rgba(229,72,77,.14); }\n.quiz-close[_ngcontent-%COMP%] { margin-left: 8px; color: #fff; background: rgba(255,255,255,.1); }\n.quiz-result[_ngcontent-%COMP%] { text-align: center; }\n.quiz-result[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 46px; }\n@media (max-width: 640px) {\n  .quiz-launch[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; }\n  .quiz-options[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BibleComponent, [{
        type: Component,
        args: [{ selector: 'app-bible', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"bible-page\">\n\n  <div class=\"bible-hero\">\n    <div class=\"bible-cross\">\u271D</div>\n    <h1>Bible en ligne</h1>\n    <p>Recherchez un verset, une r\u00E9f\u00E9rence ou un mot-cl\u00E9</p>\n  </div>\n\n  <div class=\"bible-search\">\n    <input [(ngModel)]=\"query\" placeholder=\"Jean 3:16 / amour / foi...\"\n           (keyup.enter)=\"search()\" class=\"search-input\">\n    <button (click)=\"search()\" class=\"search-btn\" [disabled]=\"loading\">\n      {{ loading ? '\u2026' : '\uD83D\uDD0D Chercher' }}\n    </button>\n  </div>\n\n  <section class=\"quiz-launch\" *ngIf=\"quiz.length === 0\">\n    <div>\n      <span>Apprendre en jouant</span>\n      <h2>Quiz biblique</h2>\n      <p>Testez votre connaissance des r\u00E9f\u00E9rences et des versets en cinq questions.</p>\n    </div>\n    <button type=\"button\" (click)=\"startQuiz()\">Commencer le quiz</button>\n  </section>\n\n  <section class=\"quiz-card\" *ngIf=\"quiz.length && !quizFinished\">\n    <div class=\"quiz-head\">\n      <span>Question {{ quizIndex + 1 }} / {{ quiz.length }}</span>\n      <strong>{{ quizScore }} point{{ quizScore > 1 ? 's' : '' }}</strong>\n    </div>\n    <h2>{{ quiz[quizIndex].question }}</h2>\n    <blockquote>\u201C{{ quiz[quizIndex].excerpt }}\u201D</blockquote>\n    <div class=\"quiz-options\">\n      <button *ngFor=\"let option of quiz[quizIndex].options; let i = index\"\n              [class.correct]=\"quizAnswer !== null && i === quiz[quizIndex].answerIndex\"\n              [class.wrong]=\"quizAnswer === i && i !== quiz[quizIndex].answerIndex\"\n              [disabled]=\"quizAnswer !== null\" (click)=\"answerQuiz(i)\">\n        {{ option }}\n      </button>\n    </div>\n    <button class=\"quiz-next\" *ngIf=\"quizAnswer !== null\" (click)=\"nextQuizQuestion()\">\n      {{ quizIndex + 1 === quiz.length ? 'Voir mon r\u00E9sultat' : 'Question suivante' }}\n    </button>\n  </section>\n\n  <section class=\"quiz-card quiz-result\" *ngIf=\"quizFinished\">\n    <span>Quiz termin\u00E9</span>\n    <h2>{{ quizScore }} / {{ quiz.length }}</h2>\n    <p>{{ quizScore >= 4 ? 'Excellent r\u00E9sultat.' : 'Continuez \u00E0 explorer les versets propos\u00E9s ci-dessous.' }}</p>\n    <button class=\"quiz-next\" (click)=\"startQuiz()\">Recommencer</button>\n    <button class=\"quiz-close\" (click)=\"closeQuiz()\">Fermer</button>\n  </section>\n\n  <!-- R\u00E9sultats de recherche -->\n  <div class=\"results-section\" *ngIf=\"results.length\">\n    <h2>R\u00E9sultats ({{ results.length }})</h2>\n    <div class=\"verse-card\" *ngFor=\"let v of results\" (click)=\"select(v)\">\n      <div class=\"verse-ref\">{{ v.reference }}</div>\n      <p class=\"verse-text\">\"{{ v.text }}\"</p>\n    </div>\n  </div>\n\n  <div class=\"empty-search\" *ngIf=\"query && results.length === 0 && !loading\">\n    <p>Aucun r\u00E9sultat pour \"{{ query }}\"</p>\n  </div>\n\n  <!-- Versets classiques -->\n  <div class=\"classics-section\" *ngIf=\"!results.length\">\n    <h2>Versets bien-aim\u00E9s</h2>\n    <div class=\"verse-grid\">\n      <div class=\"verse-card\" *ngFor=\"let v of classics\" (click)=\"select(v)\">\n        <div class=\"verse-ref\">{{ v.reference }}</div>\n        <p class=\"verse-text\">\"{{ v.text }}\"</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal verset s\u00E9lectionn\u00E9 -->\n  <div class=\"verse-modal-backdrop\" *ngIf=\"selected\" (click)=\"clearSelected()\">\n    <div class=\"verse-modal\" (click)=\"$event.stopPropagation()\">\n      <button class=\"modal-close\" (click)=\"clearSelected()\">\u2715</button>\n      <div class=\"modal-ref\">{{ selected.reference }}</div>\n      <div class=\"modal-cross\">\u271D</div>\n      <p class=\"modal-text\">\"{{ selected.text }}\"</p>\n    </div>\n  </div>\n\n</div>\n", styles: ["$primary: #1D546C; $accent: #E8A838; $bg: #F7F5F0; $dark: #1a1a2e;\n\n.bible-page { max-width: 900px; margin: 0 auto; padding: 32px 16px; }\n\n.bible-hero { text-align: center; margin-bottom: 32px; }\n.bible-cross { font-size: 40px; color: $accent; margin-bottom: 10px; }\n.bible-hero h1 { font-size: 32px; color: $dark; margin: 0 0 8px; }\n.bible-hero p  { color: #666; font-size: 16px; }\n\n.bible-search { display: flex; gap: 8px; margin-bottom: 32px; }\n.search-input {\n  flex: 1; padding: 12px 16px; border: 2px solid #ddd; border-radius: 8px;\n  font-size: 15px; transition: border-color 0.2s;\n  &:focus { outline: none; border-color: $primary; }\n}\n.search-btn {\n  padding: 12px 20px; background: $primary; color: white; border: none;\n  border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer;\n  transition: background 0.2s; white-space: nowrap;\n  &:hover { background: darken($primary, 8%); }\n  &:disabled { opacity: 0.6; cursor: default; }\n}\n\nh2 { font-size: 20px; color: $dark; margin-bottom: 16px; }\n\n.verse-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }\n\n.verse-card {\n  background: white; border-radius: 10px; padding: 16px; cursor: pointer;\n  border: 1px solid #e5e7eb; transition: transform 0.15s, box-shadow 0.15s;\n  &:hover { transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.08); border-color: rgba($primary, 0.3); }\n}\n.verse-ref  { font-size: 12px; font-weight: 700; color: $primary; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }\n.verse-text { font-size: 14px; color: #444; line-height: 1.6; margin: 0; font-style: italic; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }\n\n.empty-search { text-align: center; padding: 32px; color: #888; }\n\n// Modal\n.verse-modal-backdrop {\n  position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000;\n  display: flex; align-items: center; justify-content: center; padding: 20px;\n  animation: fadeIn 0.2s ease;\n}\n.verse-modal {\n  background: linear-gradient(135deg, $primary 0%, darken($primary, 12%) 100%);\n  color: white; border-radius: 16px; padding: 40px 32px; max-width: 520px; width: 100%;\n  text-align: center; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.4);\n  animation: slideUp 0.25s ease;\n}\n.modal-close { position: absolute; top: 14px; right: 16px; background: rgba(white,0.15); border: none; color: white; width: 28px; height: 28px; border-radius: 50%; font-size: 14px; cursor: pointer; }\n.modal-ref   { font-size: 14px; font-weight: 700; color: $accent; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }\n.modal-cross { font-size: 36px; color: rgba($accent, 0.8); margin-bottom: 16px; }\n.modal-text  { font-size: 18px; line-height: 1.8; font-style: italic; color: rgba(white, 0.95); }\n\n@keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }\n@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\n.quiz-launch, .quiz-card {\n  max-width: 920px; margin: 26px auto; padding: 26px; border-radius: 20px;\n  background: #102f3d; color: #fff; box-shadow: 0 18px 50px rgba(16,47,61,.16);\n}\n.quiz-launch { display: flex; align-items: center; justify-content: space-between; gap: 24px; }\n.quiz-launch span, .quiz-head span, .quiz-result > span {\n  color: #e8a838; font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;\n}\n.quiz-launch h2, .quiz-card h2 { margin: 5px 0 8px; }\n.quiz-launch p { margin: 0; color: rgba(255,255,255,.7); }\n.quiz-launch button, .quiz-next, .quiz-close {\n  padding: 11px 16px; border: 0; border-radius: 10px; font-weight: 700; cursor: pointer;\n}\n.quiz-launch button, .quiz-next { background: #e8a838; color: #17232a; }\n.quiz-head { display: flex; justify-content: space-between; align-items: center; }\n.quiz-card blockquote { margin: 16px 0 20px; color: rgba(255,255,255,.78); line-height: 1.65; }\n.quiz-options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 18px; }\n.quiz-options button {\n  padding: 13px; border: 1px solid rgba(255,255,255,.13); border-radius: 11px;\n  color: #fff; background: rgba(255,255,255,.065); cursor: pointer;\n}\n.quiz-options button.correct { color: #a9ebbf; border-color: rgba(69,190,111,.5); background: rgba(69,190,111,.14); }\n.quiz-options button.wrong { color: #ffacaf; border-color: rgba(229,72,77,.5); background: rgba(229,72,77,.14); }\n.quiz-close { margin-left: 8px; color: #fff; background: rgba(255,255,255,.1); }\n.quiz-result { text-align: center; }\n.quiz-result h2 { font-size: 46px; }\n@media (max-width: 640px) {\n  .quiz-launch { align-items: stretch; flex-direction: column; }\n  .quiz-options { grid-template-columns: 1fr; }\n}\n"] }]
    }], () => [{ type: i1.HttpClient }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BibleComponent, { className: "BibleComponent", filePath: "app\\pages\\bible\\bible.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=bible.component.js.map