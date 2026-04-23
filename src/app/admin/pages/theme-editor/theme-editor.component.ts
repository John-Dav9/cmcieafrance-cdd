import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { AdminAuthService } from '../../services/admin-auth.service';
import { AppTheme } from '../../../core/services/theme.service';

const FONTS = ['Lora', 'Inter', 'Source Serif 4', 'Playfair Display', 'Merriweather', 'Roboto'];

@Component({
  selector: 'app-theme-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './theme-editor.component.html',
  styleUrls: ['./theme-editor.component.css'],
})
export class ThemeEditorComponent implements OnInit, OnDestroy {
  @ViewChild('previewFrame') previewFrame!: ElementRef<HTMLIFrameElement>;

  private http = inject(HttpClient);
  private auth = inject(AdminAuthService);
  private fb = inject(FormBuilder);
  private base = environment.apiBase;

  fonts = FONTS;
  saving = false;

  colorFields = [
    { key: 'brand', label: 'Couleur principale' },
    { key: 'brandSecondary', label: 'Couleur secondaire' },
    { key: 'cta', label: 'Boutons (CTA)' },
    { key: 'accent', label: 'Accent / liens' },
    { key: 'primaryBg', label: 'Fond de page' },
    { key: 'surface', label: 'Fond des cartes' },
    { key: 'text', label: 'Texte principal' },
    { key: 'muted', label: 'Texte secondaire' },
  ];
  savedMsg = '';
  logoFile: File | null = null;
  heroFile: File | null = null;
  previewReady = false;

  form = this.fb.group({
    brand:          ['#1D546C'],
    brandSecondary: ['#1A3D64'],
    cta:            ['#0C2B4E'],
    accent:         ['#00B7B5'],
    primaryBg:      ['#F4F4F4'],
    surface:        ['#FFFFFF'],
    text:           ['#111111'],
    muted:          ['#334155'],
    fontHeading:    ['Lora'],
    fontBody:       ['Inter'],
  });

  ngOnInit() {
    this.http.get<AppTheme>(`${this.base}/settings/theme`).subscribe({
      next: (t) => this.form.patchValue(t as any),
      error: () => {},
    });

    // Envoie le thème en preview dès que l'iframe est prête
    this.form.valueChanges.subscribe(() => this.sendPreview());
  }

  ngOnDestroy() {
    this.resetPreview();
  }

  onIframeLoad() {
    this.previewReady = true;
    this.sendPreview();
  }

  sendPreview() {
    if (!this.previewReady || !this.previewFrame?.nativeElement?.contentWindow) return;
    this.previewFrame.nativeElement.contentWindow.postMessage(
      { type: 'THEME_PREVIEW', theme: this.form.value },
      '*',
    );
  }

  resetPreview() {
    this.previewFrame?.nativeElement?.contentWindow?.postMessage({ type: 'THEME_RESET' }, '*');
  }

  onLogoChange(e: Event) {
    this.logoFile = (e.target as HTMLInputElement).files?.[0] ?? null;
    this.sendPreview();
  }

  onHeroChange(e: Event) {
    this.heroFile = (e.target as HTMLInputElement).files?.[0] ?? null;
  }

  async save() {
    this.saving = true;
    const token = await this.auth.getToken();
    const headers = { Authorization: `Bearer ${token}` };

    this.http.patch(`${this.base}/settings/theme`, this.form.value, { headers }).subscribe({
      next: async () => {
        if (this.logoFile) await this.uploadImage('logoUrl', this.logoFile, headers);
        if (this.heroFile) await this.uploadImage('heroImageUrl', this.heroFile, headers);
        this.savedMsg = 'Thème sauvegardé.';
        this.saving = false;
        setTimeout(() => (this.savedMsg = ''), 3000);
      },
      error: () => { this.saving = false; },
    });
  }

  private uploadImage(field: string, file: File, headers: any): Promise<void> {
    return new Promise((resolve) => {
      const fd = new FormData();
      fd.append('file', file);
      this.http
        .post(`${this.base}/settings/theme/image/${field}`, fd, { headers })
        .subscribe(() => resolve());
    });
  }
}
