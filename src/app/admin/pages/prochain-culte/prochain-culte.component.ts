import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
  selector: 'app-prochain-culte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prochain-culte.component.html',
  styleUrls: ['./prochain-culte.component.css'],
})
export class ProchainCulteComponent implements OnInit {
  private http = inject(HttpClient);
  private auth = inject(AdminAuthService);
  private base = environment.apiBase;

  form = { sujet: '', date: '', message: '' };
  flyerUrl: string | null = null;
  flyerFile: File | null = null;
  flyerPreview: string | null = null;

  loading       = true;
  saving        = false;
  uploadingFlyer = false;
  broadcasting  = false;

  savedMsg    = '';
  broadcastMsg = '';
  errorMsg    = '';

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.http.get<any>(`${this.base}/settings/next-culte`).subscribe({
      next: (data) => {
        if (data) {
          this.form    = { sujet: data.sujet ?? '', date: data.date ?? '', message: data.message ?? '' };
          this.flyerUrl = data.flyerUrl ?? null;
        }
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  onFlyerChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0];
    if (!file) return;
    this.flyerFile = file;
    const reader   = new FileReader();
    reader.onload  = (e) => { this.flyerPreview = e.target?.result as string; };
    reader.readAsDataURL(file);
  }

  async save() {
    this.saving  = true;
    this.savedMsg = '';
    this.errorMsg = '';
    const token   = await this.auth.getToken();
    const headers = { Authorization: `Bearer ${token}` };

    this.http.patch(`${this.base}/settings/next-culte`, this.form, { headers }).subscribe({
      next: () => {
        this.saving   = false;
        this.savedMsg = 'Informations sauvegardées.';
        setTimeout(() => (this.savedMsg = ''), 3000);
      },
      error: (err: any) => {
        this.saving   = false;
        this.errorMsg = err?.error?.message ?? 'Erreur lors de la sauvegarde.';
      },
    });
  }

  async uploadFlyer() {
    if (!this.flyerFile) return;
    this.uploadingFlyer = true;
    this.errorMsg = '';
    const token   = await this.auth.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    const fd      = new FormData();
    fd.append('file', this.flyerFile);

    this.http.post<{ url: string }>(`${this.base}/settings/next-culte/flyer`, fd, { headers }).subscribe({
      next: (res) => {
        this.flyerUrl       = res.url;
        this.flyerPreview   = null;
        this.flyerFile      = null;
        this.uploadingFlyer = false;
        this.savedMsg = 'Flyer uploadé avec succès.';
        setTimeout(() => (this.savedMsg = ''), 3000);
      },
      error: (err: any) => {
        this.uploadingFlyer = false;
        this.errorMsg = err?.error?.message ?? 'Erreur lors de l\'upload.';
      },
    });
  }

  async broadcast() {
    if (!confirm('Envoyer cet email à TOUS les inscrits de la base de données ? Cette action est irréversible.')) return;

    this.broadcasting  = true;
    this.broadcastMsg  = '';
    this.errorMsg      = '';
    const token        = await this.auth.getToken();
    const headers      = { Authorization: `Bearer ${token}` };

    this.http.post<{ envoyes: number }>(`${this.base}/settings/next-culte/broadcast`, {}, { headers }).subscribe({
      next: (res) => {
        this.broadcasting = false;
        this.broadcastMsg = `✅ Email envoyé à ${res.envoyes} destinataire(s).`;
      },
      error: (err: any) => {
        this.broadcasting = false;
        this.errorMsg = err?.error?.message ?? 'Erreur lors de l\'envoi.';
      },
    });
  }
}
