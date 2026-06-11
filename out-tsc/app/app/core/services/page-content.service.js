import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PageContentService {
    constructor(http) {
        this.http = http;
        this.base = environment.apiBase;
        // Contenu en mémoire pour la prévisualisation live admin
        this.previewContent = {};
        this.previewMode = false;
        window.addEventListener('message', (e) => {
            var _a, _b;
            if (((_a = e.data) === null || _a === void 0 ? void 0 : _a.type) === 'CONTENT_PREVIEW') {
                this.previewContent[e.data.pageId] = e.data.content;
                this.previewMode = true;
            }
            if (((_b = e.data) === null || _b === void 0 ? void 0 : _b.type) === 'CONTENT_RESET') {
                this.previewContent = {};
                this.previewMode = false;
            }
        });
    }
    getPage(pageId) {
        if (this.previewMode && this.previewContent[pageId]) {
            return of(this.previewContent[pageId]);
        }
        return this.http
            .get(`${this.base}/settings/pages/${pageId}`)
            .pipe(catchError(() => of(null)));
    }
}
PageContentService.ɵfac = function PageContentService_Factory(t) { return new (t || PageContentService)(i0.ɵɵinject(i1.HttpClient)); };
PageContentService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PageContentService, factory: PageContentService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageContentService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=page-content.service.js.map