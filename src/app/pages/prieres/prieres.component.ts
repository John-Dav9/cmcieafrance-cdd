import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-prieres',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prieres.component.html',
  styleUrls: ['./prieres.component.css'],
})
export class PrieresComponent {
  private http = inject(HttpClient);
  private base = environment.apiBase;

  form = { prenom: '', sujet: '', message: '', anonyme: false };

  sending = false;
  successMsg = '';
  errorMsg = '';

  submit() {
    if (!this.form.sujet || !this.form.message) return;
    this.sending = true;
    this.successMsg = '';
    this.errorMsg = '';

    this.http.post(`${this.base}/prieres`, this.form).subscribe({
      next: () => {
        this.successMsg = 'Votre demande a été transmise. Nous prions avec vous 🙏';
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
