import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NetworkQualityService {
    constructor(http) {
        this.http = http;
        this.quality$ = new BehaviorSubject('high');
        this.monitor = null;
        this.connectionListener = () => this.measure();
    }
    start() {
        var _a, _b;
        if (this.monitor)
            return;
        this.connection = navigator.connection;
        (_b = (_a = this.connection) === null || _a === void 0 ? void 0 : _a.addEventListener) === null || _b === void 0 ? void 0 : _b.call(_a, 'change', this.connectionListener);
        this.measure();
        this.monitor = interval(30000).subscribe(() => this.measure());
    }
    stop() {
        var _a, _b, _c;
        (_a = this.monitor) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.monitor = null;
        (_c = (_b = this.connection) === null || _b === void 0 ? void 0 : _b.removeEventListener) === null || _c === void 0 ? void 0 : _c.call(_b, 'change', this.connectionListener);
    }
    measure() {
        var _a;
        if (!navigator.onLine) {
            this.quality$.next('critical');
            return;
        }
        const downlink = Number((_a = this.connection) === null || _a === void 0 ? void 0 : _a.downlink);
        if (Number.isFinite(downlink) && downlink > 0) {
            this.quality$.next(downlink > 2 ? 'high' :
                downlink > 0.5 ? 'medium' :
                    downlink > 0.1 ? 'low' : 'critical');
            return;
        }
        const startedAt = performance.now();
        this.http.get(`${environment.apiBase}/health`, { responseType: 'text' }).subscribe({
            next: () => {
                const latency = performance.now() - startedAt;
                this.quality$.next(latency < 300 ? 'high' : latency < 800 ? 'medium' : 'low');
            },
            error: () => this.quality$.next('critical'),
        });
    }
}
NetworkQualityService.ɵfac = function NetworkQualityService_Factory(t) { return new (t || NetworkQualityService)(i0.ɵɵinject(i1.HttpClient)); };
NetworkQualityService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NetworkQualityService, factory: NetworkQualityService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NetworkQualityService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=network-quality.service.js.map