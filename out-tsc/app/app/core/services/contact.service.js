import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const API_BASE = environment.apiBase;
export class ContactService {
    constructor(http) {
        this.http = http;
    }
    sendContact(data) {
        return this.http.post(`${API_BASE}/contact`, data);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(i0.ɵɵinject(i1.HttpClient)); };
ContactService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=contact.service.js.map