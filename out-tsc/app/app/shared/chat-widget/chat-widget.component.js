import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["messagesEnd"];
function ChatWidgetComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, "\uD83D\uDCAC");
    i0.ɵɵelementEnd();
} }
function ChatWidgetComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, "\u2715");
    i0.ɵɵelementEnd();
} }
function ChatWidgetComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "p", 12);
    i0.ɵɵtext(2, "Choisissez le type de votre question :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 13);
    i0.ɵɵlistener("click", function ChatWidgetComponent_div_11_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectTab("site")); });
    i0.ɵɵelementStart(4, "span", 14);
    i0.ɵɵtext(5, "\uD83E\uDD16");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div")(7, "p", 15);
    i0.ɵɵtext(8, "Assistant IA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 16);
    i0.ɵɵtext(10, "Horaires, d\u00E9partements, marathon, infos pratiques\u2026");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "span", 17);
    i0.ɵɵtext(12, "\u203A");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 13);
    i0.ɵɵlistener("click", function ChatWidgetComponent_div_11_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectTab("spiritual")); });
    i0.ɵɵelementStart(14, "span", 14);
    i0.ɵɵtext(15, "\uD83D\uDE4F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div")(17, "p", 15);
    i0.ɵɵtext(18, "Parler au pasteur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 16);
    i0.ɵɵtext(20, "Question spirituelle, pri\u00E8re, conseil personnel\u2026");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "span", 17);
    i0.ɵɵtext(22, "\u203A");
    i0.ɵɵelementEnd()()();
} }
function ChatWidgetComponent_div_12_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1, "\u26EA");
    i0.ɵɵelementEnd();
} }
function ChatWidgetComponent_div_12_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, ChatWidgetComponent_div_12_div_7_span_1_Template, 2, 0, "span", 30);
    i0.ɵɵelementStart(2, "p", 31);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r4 = ctx.$implicit;
    i0.ɵɵclassProp("cw-bubble--user", m_r4.role === "user")("cw-bubble--assistant", m_r4.role === "assistant");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", m_r4.role === "assistant");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r4.content);
} }
function ChatWidgetComponent_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "span", 32);
    i0.ɵɵtext(2, "\u26EA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 34);
    i0.ɵɵelement(4, "span")(5, "span")(6, "span");
    i0.ɵɵelementEnd()();
} }
function ChatWidgetComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 19)(2, "button", 20);
    i0.ɵɵlistener("click", function ChatWidgetComponent_div_12_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(3, "\u2190 Retour");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 21);
    i0.ɵɵtext(5, "\uD83E\uDD16 Assistant CMCIEA");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 22);
    i0.ɵɵtemplate(7, ChatWidgetComponent_div_12_div_7_Template, 4, 6, "div", 23)(8, ChatWidgetComponent_div_12_div_8_Template, 7, 0, "div", 24);
    i0.ɵɵelement(9, "div", null, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 25)(12, "textarea", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function ChatWidgetComponent_div_12_Template_textarea_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.userInput, $event) || (ctx_r1.userInput = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown", function ChatWidgetComponent_div_12_Template_textarea_keydown_12_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onKeydown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 27);
    i0.ɵɵlistener("click", function ChatWidgetComponent_div_12_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.send()); });
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "\u27A4");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "p", 28);
    i0.ɵɵtext(17, "Entr\u00E9e pour envoyer \u00B7 Shift+Entr\u00E9e pour sauter une ligne");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.thinking);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.userInput);
    i0.ɵɵproperty("disabled", ctx_r1.thinking);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.thinking || !ctx_r1.userInput.trim());
} }
function ChatWidgetComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "button", 20);
    i0.ɵɵlistener("click", function ChatWidgetComponent_div_13_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back()); });
    i0.ɵɵtext(2, "\u2190 Retour");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 12);
    i0.ɵɵtext(4, "Parlez directement avec le pasteur :");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 35)(6, "span");
    i0.ɵɵtext(7, "\uD83D\uDCF1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div")(9, "p", 36);
    i0.ɵɵtext(10, "WhatsApp");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 37);
    i0.ɵɵtext(12, "R\u00E9ponse rapide");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "a", 38)(14, "span");
    i0.ɵɵtext(15, "\u2709\uFE0F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div")(17, "p", 36);
    i0.ɵɵtext(18, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 37);
    i0.ɵɵtext(20, "contact@cmciea-france.com");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "p", 39);
    i0.ɵɵtext(22, "Toutes les demandes sont trait\u00E9es avec bienveillance et confidentialit\u00E9.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("href", ctx_r1.whatsappUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("href", ctx_r1.pastorEmail, i0.ɵɵsanitizeUrl);
} }
export class ChatWidgetComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.open = false;
        this.tab = 'home';
        // ── Chat IA ──────────────────────────────────────────────────────────────
        this.messages = [];
        this.userInput = '';
        this.thinking = false;
        this.chatError = '';
        this.whatsappUrl = 'https://wa.me/33744896818';
        this.pastorEmail = 'mailto:contact@cmciea-france.com';
    }
    toggle() {
        this.open = !this.open;
        if (!this.open)
            this.tab = 'home';
    }
    selectTab(t) {
        this.tab = t;
        if (t === 'site' && this.messages.length === 0) {
            this.messages = [{
                    role: 'assistant',
                    content: 'Bonjour ! Je suis l\'assistant de CMCIEA-France 👋\nPosez-moi vos questions sur l\'église, les horaires, les départements ou le marathon biblique.',
                }];
        }
    }
    back() {
        this.tab = 'home';
        this.chatError = '';
    }
    send() {
        const text = this.userInput.trim();
        if (!text || this.thinking)
            return;
        this.messages.push({ role: 'user', content: text });
        this.userInput = '';
        this.thinking = true;
        this.chatError = '';
        const history = this.messages.slice(0, -1); // tout sauf le dernier (déjà ajouté)
        this.http.post(`${environment.apiBase}/chat`, {
            history,
            message: text,
        }).subscribe({
            next: (res) => {
                this.messages.push({ role: 'assistant', content: res.reply });
                this.thinking = false;
            },
            error: () => {
                this.messages.push({ role: 'assistant', content: 'Désolé, une erreur est survenue. Veuillez réessayer.' });
                this.thinking = false;
            },
        });
    }
    onKeydown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.send();
        }
    }
    ngAfterViewChecked() {
        var _a, _b;
        (_b = (_a = this.messagesEnd) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.scrollIntoView({ behavior: 'smooth' });
    }
}
ChatWidgetComponent.ɵfac = function ChatWidgetComponent_Factory(t) { return new (t || ChatWidgetComponent)(); };
ChatWidgetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChatWidgetComponent, selectors: [["app-chat-widget"]], viewQuery: function ChatWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.messagesEnd = _t.first);
    } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 9, consts: [["messagesEnd", ""], ["aria-label", "Chat", 1, "cw-fab", 3, "click"], ["class", "cw-fab-icon", 4, "ngIf"], [1, "cw-panel"], [1, "cw-header"], [1, "cw-header-dot"], [1, "cw-header-title"], [1, "cw-header-sub"], ["class", "cw-body", 4, "ngIf"], ["class", "cw-chat-container", 4, "ngIf"], [1, "cw-fab-icon"], [1, "cw-body"], [1, "cw-intro"], [1, "cw-option", 3, "click"], [1, "cw-option-icon"], [1, "cw-option-title"], [1, "cw-option-desc"], [1, "cw-option-arrow"], [1, "cw-chat-container"], [1, "cw-chat-topbar"], [1, "cw-back", 3, "click"], [1, "cw-chat-label"], [1, "cw-messages"], ["class", "cw-bubble", 3, "cw-bubble--user", "cw-bubble--assistant", 4, "ngFor", "ngForOf"], ["class", "cw-bubble cw-bubble--assistant cw-bubble--thinking", 4, "ngIf"], [1, "cw-chat-input-wrap"], ["placeholder", "Posez votre question\u2026", "rows", "1", 1, "cw-chat-input", 3, "ngModelChange", "keydown", "ngModel", "disabled"], [1, "cw-chat-send", 3, "click", "disabled"], [1, "cw-chat-note"], [1, "cw-bubble"], ["class", "cw-bubble-avatar", 4, "ngIf"], [1, "cw-bubble-text", 2, "white-space", "pre-line"], [1, "cw-bubble-avatar"], [1, "cw-bubble", "cw-bubble--assistant", "cw-bubble--thinking"], [1, "cw-dots"], ["target", "_blank", "rel", "noopener", 1, "cw-contact-btn", "cw-contact-btn--whatsapp", 3, "href"], [1, "cw-contact-title"], [1, "cw-contact-desc"], [1, "cw-contact-btn", "cw-contact-btn--email", 3, "href"], [1, "cw-note"]], template: function ChatWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 1);
        i0.ɵɵlistener("click", function ChatWidgetComponent_Template_button_click_0_listener() { return ctx.toggle(); });
        i0.ɵɵtemplate(1, ChatWidgetComponent_span_1_Template, 2, 0, "span", 2)(2, ChatWidgetComponent_span_2_Template, 2, 0, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
        i0.ɵɵelement(5, "div", 5);
        i0.ɵɵelementStart(6, "div")(7, "p", 6);
        i0.ɵɵtext(8, "Comment pouvons-nous aider ?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p", 7);
        i0.ɵɵtext(10, "CMCIEA France");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(11, ChatWidgetComponent_div_11_Template, 23, 0, "div", 8)(12, ChatWidgetComponent_div_12_Template, 18, 5, "div", 9)(13, ChatWidgetComponent_div_13_Template, 23, 2, "div", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("cw-fab--open", ctx.open);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", !ctx.open);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.open);
        i0.ɵɵadvance();
        i0.ɵɵclassProp("cw-panel--visible", ctx.open);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.tab === "home");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.tab === "site");
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngIf", ctx.tab === "spiritual");
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["\n\n.cw-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  border: none;\n  cursor: pointer;\n  z-index: 9000;\n  box-shadow: 0 6px 24px rgba(26, 61, 100, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;\n}\n\n.cw-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 8px 32px rgba(26, 61, 100, 0.55);\n}\n\n.cw-fab--open[_ngcontent-%COMP%] { transform: scale(1.05); }\n\n.cw-fab-icon[_ngcontent-%COMP%] { font-size: 26px; line-height: 1; }\n\n\n\n.cw-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 100px;\n  right: 28px;\n  width: 340px;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 16px 56px rgba(0, 0, 0, 0.25);\n  z-index: 8999;\n  overflow: hidden;\n  transform: translateY(20px) scale(0.97);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;\n}\n\n.cw-panel--visible[_ngcontent-%COMP%] {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n\n\n.cw-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C 0%, #1A3D64 100%);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.cw-header-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #00e5a0;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%   { box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4); }\n  70%  { box-shadow: 0 0 0 8px rgba(0, 229, 160, 0); }\n  100% { box-shadow: 0 0 0 0 rgba(0, 229, 160, 0); }\n}\n\n.cw-header-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.cw-header-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #a8d8e8;\n  font-size: 12px;\n}\n\n\n\n.cw-body[_ngcontent-%COMP%] { padding: 16px 18px 20px; }\n\n.cw-intro[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  margin: 0 0 14px;\n}\n\n\n\n.cw-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  background: #f8f9fa;\n  border: 1.5px solid #e8e8e8;\n  border-radius: 12px;\n  padding: 14px;\n  cursor: pointer;\n  text-align: left;\n  margin-bottom: 10px;\n  transition: border-color 0.2s, background 0.2s, transform 0.15s;\n}\n\n.cw-option[_ngcontent-%COMP%]:hover {\n  border-color: #1D546C;\n  background: #EEF6FA;\n  transform: translateX(3px);\n}\n\n.cw-option-icon[_ngcontent-%COMP%] { font-size: 24px; flex-shrink: 0; }\n\n.cw-option-title[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #1A3D64;\n}\n\n.cw-option-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #888;\n}\n\n.cw-option-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 20px;\n  color: #aaa;\n}\n\n\n\n.cw-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1D546C;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 14px;\n  display: block;\n}\n\n.cw-back[_ngcontent-%COMP%]:hover { text-decoration: underline; }\n\n\n\n.cw-input[_ngcontent-%COMP%], .cw-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #222;\n  background: #fafafa;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n  outline: none;\n  transition: border-color 0.2s;\n  resize: vertical;\n  font-family: inherit;\n}\n\n.cw-input[_ngcontent-%COMP%]:focus, .cw-textarea[_ngcontent-%COMP%]:focus { border-color: #1A3D64; background: #fff; }\n\n.cw-btn-send[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  margin-top: 4px;\n}\n\n.cw-btn-send[_ngcontent-%COMP%]:hover:not([disabled]) { opacity: 0.88; }\n.cw-btn-send[disabled][_ngcontent-%COMP%] { opacity: 0.5; cursor: not-allowed; }\n\n.cw-error[_ngcontent-%COMP%] { font-size: 12px; color: #c00; margin: 0 0 8px; }\n\n\n\n.cw-success[_ngcontent-%COMP%] { text-align: center; padding: 16px 0; }\n.cw-success-icon[_ngcontent-%COMP%] { font-size: 36px; margin: 0 0 8px; }\n.cw-success-title[_ngcontent-%COMP%] { font-size: 16px; font-weight: 700; color: #1A3D64; margin: 0 0 6px; }\n.cw-success-text[_ngcontent-%COMP%] { font-size: 13px; color: #666; margin: 0 0 16px; }\n\n\n\n.cw-contact-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 10px;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n\n.cw-contact-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n\n.cw-contact-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 28px; flex-shrink: 0; }\n\n.cw-contact-btn--whatsapp[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #25d366, #128c7e);\n}\n\n.cw-contact-btn--email[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n}\n\n.cw-contact-title[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n}\n\n.cw-contact-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.cw-note[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  text-align: center;\n  margin: 12px 0 0;\n  line-height: 1.5;\n}\n\n\n\n.cw-chat-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 400px;\n}\n\n.cw-chat-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px 6px;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.cw-chat-topbar[_ngcontent-%COMP%]   .cw-back[_ngcontent-%COMP%] { margin-bottom: 0; }\n\n.cw-chat-label[_ngcontent-%COMP%] { font-size: 12px; color: #888; font-weight: 600; }\n\n.cw-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  scroll-behavior: smooth;\n}\n\n.cw-bubble[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 7px;\n  max-width: 88%;\n}\n\n.cw-bubble--user[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n\n.cw-bubble--assistant[_ngcontent-%COMP%] { align-self: flex-start; }\n\n.cw-bubble-avatar[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-bottom: 2px;\n}\n\n.cw-bubble-text[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 9px 13px;\n  border-radius: 16px;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.cw-bubble--user[_ngcontent-%COMP%]   .cw-bubble-text[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border-bottom-right-radius: 4px;\n}\n\n.cw-bubble--assistant[_ngcontent-%COMP%]   .cw-bubble-text[_ngcontent-%COMP%] {\n  background: #f1f3f5;\n  color: #222;\n  border-bottom-left-radius: 4px;\n}\n\n\n\n.cw-bubble--thinking[_ngcontent-%COMP%]   .cw-bubble-text[_ngcontent-%COMP%] { display: none; }\n\n.cw-dots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 14px;\n  background: #f1f3f5;\n  border-radius: 16px;\n  border-bottom-left-radius: 4px;\n}\n\n.cw-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #aaa;\n  animation: _ngcontent-%COMP%_bounce 1.2s infinite;\n}\n.cw-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) { animation-delay: 0.2s; }\n.cw-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 0.4s; }\n\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 80%, 100% { transform: translateY(0); }\n  40%            { transform: translateY(-6px); }\n}\n\n\n\n.cw-chat-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  padding: 10px 14px;\n  border-top: 1px solid #f0f0f0;\n}\n\n.cw-chat-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1.5px solid #ddd;\n  border-radius: 10px;\n  padding: 9px 12px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: none;\n  outline: none;\n  transition: border-color 0.2s;\n  max-height: 100px;\n  overflow-y: auto;\n}\n.cw-chat-input[_ngcontent-%COMP%]:focus { border-color: #1D546C; }\n.cw-chat-input[_ngcontent-%COMP%]:disabled { background: #f8f8f8; }\n\n.cw-chat-send[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: opacity 0.2s, transform 0.15s;\n  color: #fff;\n  font-size: 15px;\n}\n.cw-chat-send[_ngcontent-%COMP%]:hover:not([disabled]) { opacity: 0.88; transform: scale(1.08); }\n.cw-chat-send[disabled][_ngcontent-%COMP%] { opacity: 0.4; cursor: not-allowed; }\n\n.cw-chat-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #bbb;\n  text-align: center;\n  padding: 0 14px 8px;\n  margin: 0;\n}\n\n@media (max-width: 400px) {\n  .cw-panel[_ngcontent-%COMP%] { width: calc(100vw - 32px); right: 16px; }\n  .cw-fab[_ngcontent-%COMP%]   { right: 16px; bottom: 16px; }\n}"] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChatWidgetComponent, [{
        type: Component,
        args: [{ selector: 'app-chat-widget', standalone: true, imports: [CommonModule, FormsModule], template: "<!-- \u2500\u2500 Floating button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<button class=\"cw-fab\" (click)=\"toggle()\" [class.cw-fab--open]=\"open\" aria-label=\"Chat\">\n  <span class=\"cw-fab-icon\" *ngIf=\"!open\">\uD83D\uDCAC</span>\n  <span class=\"cw-fab-icon\" *ngIf=\"open\">\u2715</span>\n</button>\n\n<!-- \u2500\u2500 Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n<div class=\"cw-panel\" [class.cw-panel--visible]=\"open\">\n\n  <!-- Header -->\n  <div class=\"cw-header\">\n    <div class=\"cw-header-dot\"></div>\n    <div>\n      <p class=\"cw-header-title\">Comment pouvons-nous aider ?</p>\n      <p class=\"cw-header-sub\">CMCIEA France</p>\n    </div>\n  </div>\n\n  <!-- \u2500\u2500 Home tab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"cw-body\" *ngIf=\"tab === 'home'\">\n    <p class=\"cw-intro\">Choisissez le type de votre question :</p>\n\n    <button class=\"cw-option\" (click)=\"selectTab('site')\">\n      <span class=\"cw-option-icon\">\uD83E\uDD16</span>\n      <div>\n        <p class=\"cw-option-title\">Assistant IA</p>\n        <p class=\"cw-option-desc\">Horaires, d\u00E9partements, marathon, infos pratiques\u2026</p>\n      </div>\n      <span class=\"cw-option-arrow\">\u203A</span>\n    </button>\n\n    <button class=\"cw-option\" (click)=\"selectTab('spiritual')\">\n      <span class=\"cw-option-icon\">\uD83D\uDE4F</span>\n      <div>\n        <p class=\"cw-option-title\">Parler au pasteur</p>\n        <p class=\"cw-option-desc\">Question spirituelle, pri\u00E8re, conseil personnel\u2026</p>\n      </div>\n      <span class=\"cw-option-arrow\">\u203A</span>\n    </button>\n  </div>\n\n  <!-- \u2500\u2500 Chat IA tab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"cw-chat-container\" *ngIf=\"tab === 'site'\">\n\n    <div class=\"cw-chat-topbar\">\n      <button class=\"cw-back\" (click)=\"back()\">\u2190 Retour</button>\n      <span class=\"cw-chat-label\">\uD83E\uDD16 Assistant CMCIEA</span>\n    </div>\n\n    <!-- Messages -->\n    <div class=\"cw-messages\">\n      <div *ngFor=\"let m of messages\"\n           class=\"cw-bubble\"\n           [class.cw-bubble--user]=\"m.role === 'user'\"\n           [class.cw-bubble--assistant]=\"m.role === 'assistant'\">\n        <span class=\"cw-bubble-avatar\" *ngIf=\"m.role === 'assistant'\">\u26EA</span>\n        <p class=\"cw-bubble-text\" style=\"white-space: pre-line\">{{ m.content }}</p>\n      </div>\n\n      <!-- Indicateur \"en train d'\u00E9crire\" -->\n      <div class=\"cw-bubble cw-bubble--assistant cw-bubble--thinking\" *ngIf=\"thinking\">\n        <span class=\"cw-bubble-avatar\">\u26EA</span>\n        <div class=\"cw-dots\"><span></span><span></span><span></span></div>\n      </div>\n\n      <div #messagesEnd></div>\n    </div>\n\n    <!-- Input -->\n    <div class=\"cw-chat-input-wrap\">\n      <textarea\n        class=\"cw-chat-input\"\n        [(ngModel)]=\"userInput\"\n        (keydown)=\"onKeydown($event)\"\n        placeholder=\"Posez votre question\u2026\"\n        rows=\"1\"\n        [disabled]=\"thinking\"\n      ></textarea>\n      <button class=\"cw-chat-send\" (click)=\"send()\" [disabled]=\"thinking || !userInput.trim()\">\n        <span>\u27A4</span>\n      </button>\n    </div>\n\n    <p class=\"cw-chat-note\">Entr\u00E9e pour envoyer \u00B7 Shift+Entr\u00E9e pour sauter une ligne</p>\n  </div>\n\n  <!-- \u2500\u2500 Spiritual question tab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n  <div class=\"cw-body\" *ngIf=\"tab === 'spiritual'\">\n    <button class=\"cw-back\" (click)=\"back()\">\u2190 Retour</button>\n    <p class=\"cw-intro\">Parlez directement avec le pasteur :</p>\n\n    <a [href]=\"whatsappUrl\" target=\"_blank\" rel=\"noopener\" class=\"cw-contact-btn cw-contact-btn--whatsapp\">\n      <span>\uD83D\uDCF1</span>\n      <div>\n        <p class=\"cw-contact-title\">WhatsApp</p>\n        <p class=\"cw-contact-desc\">R\u00E9ponse rapide</p>\n      </div>\n    </a>\n\n    <a [href]=\"pastorEmail\" class=\"cw-contact-btn cw-contact-btn--email\">\n      <span>\u2709\uFE0F</span>\n      <div>\n        <p class=\"cw-contact-title\">Email</p>\n        <p class=\"cw-contact-desc\">contact&#64;cmciea-france.com</p>\n      </div>\n    </a>\n\n    <p class=\"cw-note\">Toutes les demandes sont trait\u00E9es avec bienveillance et confidentialit\u00E9.</p>\n  </div>\n\n</div>\n", styles: ["/* \u2500\u2500 Floating button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-fab {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  border: none;\n  cursor: pointer;\n  z-index: 9000;\n  box-shadow: 0 6px 24px rgba(26, 61, 100, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s;\n}\n\n.cw-fab:hover {\n  transform: scale(1.1);\n  box-shadow: 0 8px 32px rgba(26, 61, 100, 0.55);\n}\n\n.cw-fab--open { transform: scale(1.05); }\n\n.cw-fab-icon { font-size: 26px; line-height: 1; }\n\n/* \u2500\u2500 Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-panel {\n  position: fixed;\n  bottom: 100px;\n  right: 28px;\n  width: 340px;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 16px 56px rgba(0, 0, 0, 0.25);\n  z-index: 8999;\n  overflow: hidden;\n  transform: translateY(20px) scale(0.97);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;\n}\n\n.cw-panel--visible {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n/* \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-header {\n  background: linear-gradient(135deg, #1D546C 0%, #1A3D64 100%);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.cw-header-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #00e5a0;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4);\n  animation: pulse 2s infinite;\n}\n\n@keyframes pulse {\n  0%   { box-shadow: 0 0 0 0 rgba(0, 229, 160, 0.4); }\n  70%  { box-shadow: 0 0 0 8px rgba(0, 229, 160, 0); }\n  100% { box-shadow: 0 0 0 0 rgba(0, 229, 160, 0); }\n}\n\n.cw-header-title {\n  margin: 0;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.cw-header-sub {\n  margin: 0;\n  color: #a8d8e8;\n  font-size: 12px;\n}\n\n/* \u2500\u2500 Body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-body { padding: 16px 18px 20px; }\n\n.cw-intro {\n  font-size: 13px;\n  color: #666;\n  margin: 0 0 14px;\n}\n\n/* \u2500\u2500 Option buttons (home tab) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-option {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  background: #f8f9fa;\n  border: 1.5px solid #e8e8e8;\n  border-radius: 12px;\n  padding: 14px;\n  cursor: pointer;\n  text-align: left;\n  margin-bottom: 10px;\n  transition: border-color 0.2s, background 0.2s, transform 0.15s;\n}\n\n.cw-option:hover {\n  border-color: #1D546C;\n  background: #EEF6FA;\n  transform: translateX(3px);\n}\n\n.cw-option-icon { font-size: 24px; flex-shrink: 0; }\n\n.cw-option-title {\n  margin: 0 0 2px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #1A3D64;\n}\n\n.cw-option-desc {\n  margin: 0;\n  font-size: 12px;\n  color: #888;\n}\n\n.cw-option-arrow {\n  margin-left: auto;\n  font-size: 20px;\n  color: #aaa;\n}\n\n/* \u2500\u2500 Back button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-back {\n  background: none;\n  border: none;\n  color: #1D546C;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 14px;\n  display: block;\n}\n\n.cw-back:hover { text-decoration: underline; }\n\n/* \u2500\u2500 Contact form \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-input,\n.cw-textarea {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #222;\n  background: #fafafa;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n  outline: none;\n  transition: border-color 0.2s;\n  resize: vertical;\n  font-family: inherit;\n}\n\n.cw-input:focus,\n.cw-textarea:focus { border-color: #1A3D64; background: #fff; }\n\n.cw-btn-send {\n  width: 100%;\n  padding: 11px;\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  margin-top: 4px;\n}\n\n.cw-btn-send:hover:not([disabled]) { opacity: 0.88; }\n.cw-btn-send[disabled] { opacity: 0.5; cursor: not-allowed; }\n\n.cw-error { font-size: 12px; color: #c00; margin: 0 0 8px; }\n\n/* \u2500\u2500 Success state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-success { text-align: center; padding: 16px 0; }\n.cw-success-icon { font-size: 36px; margin: 0 0 8px; }\n.cw-success-title { font-size: 16px; font-weight: 700; color: #1A3D64; margin: 0 0 6px; }\n.cw-success-text { font-size: 13px; color: #666; margin: 0 0 16px; }\n\n/* \u2500\u2500 Spiritual tab contact buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-contact-btn {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 10px;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n\n.cw-contact-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n}\n\n.cw-contact-btn span { font-size: 28px; flex-shrink: 0; }\n\n.cw-contact-btn--whatsapp {\n  background: linear-gradient(135deg, #25d366, #128c7e);\n}\n\n.cw-contact-btn--email {\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n}\n\n.cw-contact-title {\n  margin: 0 0 2px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n}\n\n.cw-contact-desc {\n  margin: 0;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.cw-note {\n  font-size: 11px;\n  color: #aaa;\n  text-align: center;\n  margin: 12px 0 0;\n  line-height: 1.5;\n}\n\n/* \u2500\u2500 Chat IA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.cw-chat-container {\n  display: flex;\n  flex-direction: column;\n  height: 400px;\n}\n\n.cw-chat-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px 6px;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.cw-chat-topbar .cw-back { margin-bottom: 0; }\n\n.cw-chat-label { font-size: 12px; color: #888; font-weight: 600; }\n\n.cw-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  scroll-behavior: smooth;\n}\n\n.cw-bubble {\n  display: flex;\n  align-items: flex-end;\n  gap: 7px;\n  max-width: 88%;\n}\n\n.cw-bubble--user {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n\n.cw-bubble--assistant { align-self: flex-start; }\n\n.cw-bubble-avatar {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-bottom: 2px;\n}\n\n.cw-bubble-text {\n  margin: 0;\n  padding: 9px 13px;\n  border-radius: 16px;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.cw-bubble--user .cw-bubble-text {\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  color: #fff;\n  border-bottom-right-radius: 4px;\n}\n\n.cw-bubble--assistant .cw-bubble-text {\n  background: #f1f3f5;\n  color: #222;\n  border-bottom-left-radius: 4px;\n}\n\n/* Indicateur \"en train d'\u00E9crire\" */\n.cw-bubble--thinking .cw-bubble-text { display: none; }\n\n.cw-dots {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 14px;\n  background: #f1f3f5;\n  border-radius: 16px;\n  border-bottom-left-radius: 4px;\n}\n\n.cw-dots span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #aaa;\n  animation: bounce 1.2s infinite;\n}\n.cw-dots span:nth-child(2) { animation-delay: 0.2s; }\n.cw-dots span:nth-child(3) { animation-delay: 0.4s; }\n\n@keyframes bounce {\n  0%, 80%, 100% { transform: translateY(0); }\n  40%            { transform: translateY(-6px); }\n}\n\n/* Zone de saisie */\n.cw-chat-input-wrap {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  padding: 10px 14px;\n  border-top: 1px solid #f0f0f0;\n}\n\n.cw-chat-input {\n  flex: 1;\n  border: 1.5px solid #ddd;\n  border-radius: 10px;\n  padding: 9px 12px;\n  font-size: 13px;\n  font-family: inherit;\n  resize: none;\n  outline: none;\n  transition: border-color 0.2s;\n  max-height: 100px;\n  overflow-y: auto;\n}\n.cw-chat-input:focus { border-color: #1D546C; }\n.cw-chat-input:disabled { background: #f8f8f8; }\n\n.cw-chat-send {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #1D546C, #1A3D64);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: opacity 0.2s, transform 0.15s;\n  color: #fff;\n  font-size: 15px;\n}\n.cw-chat-send:hover:not([disabled]) { opacity: 0.88; transform: scale(1.08); }\n.cw-chat-send[disabled] { opacity: 0.4; cursor: not-allowed; }\n\n.cw-chat-note {\n  font-size: 10px;\n  color: #bbb;\n  text-align: center;\n  padding: 0 14px 8px;\n  margin: 0;\n}\n\n@media (max-width: 400px) {\n  .cw-panel { width: calc(100vw - 32px); right: 16px; }\n  .cw-fab   { right: 16px; bottom: 16px; }\n}\n"] }]
    }], null, { messagesEnd: [{
            type: ViewChild,
            args: ['messagesEnd']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChatWidgetComponent, { className: "ChatWidgetComponent", filePath: "app\\shared\\chat-widget\\chat-widget.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=chat-widget.component.js.map