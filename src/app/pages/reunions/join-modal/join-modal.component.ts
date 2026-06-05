import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberAuthService } from '../../../core/services/member-auth.service';

type Step = 'email' | 'register';

@Component({
  selector: 'app-join-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-modal.component.html',
  styleUrls: ['./join-modal.component.scss'],
})
export class JoinModalComponent {
  @Input() meetingId = '';
  @Output() authSuccess = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  step: Step = 'email';
  email = '';
  form = { firstName: '', lastName: '', phone: '', city: '' };
  loading = false;
  error = '';

  constructor(private auth: MemberAuthService) {}

  // ── Étape 1 : vérification email ──────────────────────────
  submitEmail() {
    const email = this.email.trim().toLowerCase();
    if (!email) return;

    this.loading = true;
    this.error = '';

    this.auth.checkEmail(email).subscribe({
      next: (res) => {
        this.loading = false;

        if (!res.exists) {
          // Email inconnu → formulaire d'inscription rapide
          if (!res.isOpen) {
            this.error = 'Les inscriptions sont fermées. Contactez-nous.';
            return;
          }
          this.step = 'register';
          return;
        }

        // Email connu → connexion directe sans OTP
        this.auth.quickLogin(email).subscribe({
          next: () => this.authSuccess.emit(),
          error: () => {
            this.error = 'Erreur de connexion. Veuillez réessayer.';
          },
        });
      },
      error: () => {
        this.error = 'Erreur de connexion au serveur.';
        this.loading = false;
      },
    });
  }

  // ── Étape 2 : inscription rapide (nouveau membre) ─────────
  submitRegister() {
    const { firstName, lastName, phone } = this.form;
    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
      this.error = 'Veuillez remplir les champs obligatoires.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.auth.register({
      email: this.email.trim().toLowerCase(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim(),
      city: this.form.city.trim(),
    }).subscribe({
      next: () => {
        this.loading = false;
        this.authSuccess.emit();
      },
      error: (err) => {
        this.error = err?.error?.message ?? 'Erreur lors de l\'inscription.';
        this.loading = false;
      },
    });
  }

  back() {
    this.step = 'email';
    this.error = '';
  }
}
