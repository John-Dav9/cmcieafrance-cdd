import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const API_BASE = environment.apiBase;
export class PagesService {
    constructor(http) {
        this.http = http;
    }
    getHome() {
        return this.http.get(`${API_BASE}/pages/home`);
    }
    getAbout() {
        return this.http.get(`${API_BASE}/pages/about`);
    }
    getChurchLife() {
        return this.http.get(`${API_BASE}/pages/church-life`);
    }
}
PagesService.ɵfac = function PagesService_Factory(t) { return new (t || PagesService)(i0.ɵɵinject(i1.HttpClient)); };
PagesService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PagesService, factory: PagesService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=pages.service.js.map