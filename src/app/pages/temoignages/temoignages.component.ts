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

  // Form
  form = { prenom: '', sujet: '', message: '', anonyme: false };
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
    if (!this.form.sujet || !this.form.message) return;
    this.sending = true;
    this.successMsg = '';
    this.errorMsg = '';
    this.http.post(`${this.base}/temoignages`, this.form).subscribe({
      next: () => {
        this.successMsg = 'Merci pour votre témoignage ! Il sera publié après modération.';
        this.sending = false;
        this.form = { prenom: '', sujet: '', message: '', anonyme: false };
      },
      error: (err: any) => {
        this.errorMsg = err?.error?.message ?? 'Une erreur est survenue. Réessayez dans quelques instants.';
        this.sending = false;
      },
    });
  }
}
