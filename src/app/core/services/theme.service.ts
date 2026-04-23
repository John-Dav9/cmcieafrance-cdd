import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface AppTheme {
  brand: string;
  brandSecondary: string;
  cta: string;
  accent: string;
  primaryBg: string;
  surface: string;
  text: string;
  muted: string;
  fontHeading: string;
  fontBody: string;
  logoUrl?: string;
  heroImageUrl?: string;
}

const DEFAULT: AppTheme = {
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

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private base = environment.apiBase;

  constructor(private http: HttpClient) {
    // Écoute les messages de l'admin pour la prévisualisation live
    window.addEventListener('message', (e) => {
      if (e.data?.type === 'THEME_PREVIEW') this.apply(e.data.theme);
      if (e.data?.type === 'THEME_RESET') this.load();
    });
  }

  load(): Promise<void> {
    return new Promise((resolve) => {
      this.http.get<AppTheme>(`${this.base}/settings/theme`).subscribe({
        next: (theme) => { this.apply(theme); resolve(); },
        error: () => { this.apply(DEFAULT); resolve(); },
      });
    });
  }

  apply(theme: Partial<AppTheme>) {
    const t = { ...DEFAULT };
    for (const [k, v] of Object.entries(theme)) {
      if (v) (t as any)[k] = v;
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
    if (t.heroImageUrl) root.setProperty('--hero-image', `url('${t.heroImageUrl}')`);
  }

  getCurrent(): Promise<AppTheme> {
    return this.http.get<AppTheme>(`${this.base}/settings/theme`).toPromise()
      .then((r) => r ?? DEFAULT);
  }
}
