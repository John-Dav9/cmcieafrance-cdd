import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
})
export class ChatWidgetComponent {
  private http = inject(HttpClient);

  open = false;
  tab: 'home' | 'site' | 'spiritual' = 'home';

  // Contact form
  form = { nom: '', email: '', message: '' };
  sending = false;
  sent = false;
  error = '';

  readonly whatsappUrl = 'https://wa.me/33744896818';
  readonly pastorEmail = 'mailto:contact@cmciea-france.com';

  toggle() {
    this.open = !this.open;
    if (!this.open) this.tab = 'home';
  }

  selectTab(t: 'site' | 'spiritual') {
    this.tab = t;
  }

  back() {
    this.tab = 'home';
    this.sent = false;
    this.error = '';
  }

  send() {
    if (!this.form.nom || !this.form.email || !this.form.message) return;
    this.sending = true;
    this.error = '';

    this.http.post(`${environment.apiBase}/contact`, this.form).subscribe({
      next: () => {
        this.sent = true;
        this.sending = false;
        this.form = { nom: '', email: '', message: '' };
      },
      error: () => {
        this.error = 'Une erreur est survenue. Veuillez réessayer.';
        this.sending = false;
      },
    });
  }
}
