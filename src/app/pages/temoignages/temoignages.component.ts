import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.css'],
})
export class TemoignagesComponent implements OnInit {
  private http = inject(HttpClient);
  private base = environment.apiBase;

  temoignages: any[] = [];
  loading = true;

  // Form matches backend entity: nom, contenu, ville
  form = { nom: '', contenu: '', ville: '', anonyme: false };
  sending = false;
  successMsg = '';
  errorMsg = '';

  ngOnInit() {
    this.http.get<any[]>(`${this.base}/temoignages`).subscribe({
      next: (data) => { this.temoignages = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  submit() {
    if (!this.form.contenu) return;
    this.sending = true;
    this.successMsg = '';
    this.errorMsg = '';

    const payload = {
      nom: this.form.anonyme ? 'Anonyme' : (this.form.nom || 'Anonyme'),
      contenu: this.form.contenu,
      ville: this.form.ville || undefined,
    };

    this.http.post(`${this.base}/temoignages`, payload).subscribe({
      next: () => {
        this.successMsg = 'Merci pour votre témoignage ! Il sera publié après modération.';
        this.sending = false;
        this.form = { nom: '', contenu: '', ville: '', anonyme: false };
      },
      error: (err: any) => {
        this.errorMsg = err?.error?.message ?? 'Une erreur est survenue. Réessayez dans quelques instants.';
        this.sending = false;
      },
    });
  }
}
