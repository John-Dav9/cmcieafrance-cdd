import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const API_BASE = environment.apiBase;
export class MessagesService {
    constructor(http) {
        this.http = http;
    }
    getMessages() {
        return this.http.get(`${API_BASE}/messages`);
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(i0.ɵɵinject(i1.HttpClient)); };
MessagesService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessagesService, factory: MessagesService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessagesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=messages.service.js.map