import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const DEFAULT = {
    brand: '#1D546C',
    brandSecondary: '#1A3D64',
    cta: '#0C2B4E',
    accent: '#00B7B5',
    primaryBg: '#F4F4F4',
    surface: '#FFFFFF',
    text: '#111111',
    muted: '#334155',
    fontHeading: 'Lora',
    fontBody: 'Inter',
};
export class ThemeService {
    constructor(http) {
        this.http = http;
        this.base = environment.apiBase;
        // Écoute les messages de l'admin pour la prévisualisation live
        window.addEventListener('message', (e) => {
            var _a, _b;
            if (((_a = e.data) === null || _a === void 0 ? void 0 : _a.type) === 'THEME_PREVIEW')
                this.apply(e.data.theme);
            if (((_b = e.data) === null || _b === void 0 ? void 0 : _b.type) === 'THEME_RESET')
                this.load();
        });
    }
    load() {
        return new Promise((resolve) => {
            this.http.get(`${this.base}/settings/theme`).subscribe({
                next: (theme) => { this.apply(theme); resolve(); },
                error: () => { this.apply(DEFAULT); resolve(); },
            });
        });
    }
    apply(theme) {
        const t = Object.assign({}, DEFAULT);
        for (const [k, v] of Object.entries(theme)) {
            if (v)
                t[k] = v;
        }
        const root = document.documentElement.style;
        root.setProperty('--brand', t.brand);
        root.setProperty('--brand-secondary', t.brandSecondary);
        root.setProperty('--cta', t.cta);
        root.setProperty('--cta-hover', t.brandSecondary);
        root.setProperty('--accent', t.accent);
        root.setProperty('--accent-hover', t.accent);
        root.setProperty('--primary-bg', t.primaryBg);
        root.setProperty('--surface', t.surface);
        root.setProperty('--text', t.text);
        root.setProperty('--muted', t.muted);
        root.setProperty('--font-heading', `'${t.fontHeading}', serif`);
        root.setProperty('--font-body', `'${t.fontBody}', sans-serif`);
        if (t.heroImageUrl)
            root.setProperty('--hero-image', `url('${t.heroImageUrl}')`);
    }
    getCurrent() {
        return this.http.get(`${this.base}/settings/theme`).toPromise()
            .then((r) => r !== null && r !== void 0 ? r : DEFAULT);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(i0.ɵɵinject(i1.HttpClient)); };
ThemeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=theme.service.js.map