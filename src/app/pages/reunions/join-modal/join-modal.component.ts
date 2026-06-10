import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberAuthService } from '../../../core/services/member-auth.service';

type Step = 'email' | 'otp' | 'magic-link' | 'register' | 'guest';

@Component({
  selector: 'app-join-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-modal.component.html',
  styleUrls: ['./join-modal.component.scss'],
})
export class JoinModalComponent implements OnInit {
  @Input() meetingId = '';
  @Input() publicMeeting = false;
  @Output() authSuccess = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  step: Step = 'email';
  email = '';
  code = '';
  form = { firstName: '', lastName: '', phone: '', city: '' };
  guestName = '';
  loading = false;
  error = '';

  constructor(private auth: MemberAuthService) {}

  ngOnInit() {
    if (this.publicMeeting) {
      this.step = 'guest';
      this.guestName = localStorage.getItem('cmciea_guest_name') ?? '';
    }
  }

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

        this.auth.sendOtp(email).subscribe({
          next: (result) => {
            this.loading = false;
            this.step = result.method === 'sms' ? 'otp' : 'magic-link';
          },
          error: (err) => {
            this.loading = false;
            this.error = err?.error?.message ?? 'Impossible d’envoyer le code de connexion.';
          },
        });
      },
      error: () => {
        this.error = 'Erreur de connexion au serveur.';
        this.loading = false;
      },
    });
  }

  submitOtp() {
    if (this.code.trim().length < 4) return;
    this.loading = true;
    this.error = '';
    this.auth.verifyOtp(this.email.trim().toLowerCase(), this.code.trim()).subscribe({
      next: () => {
        this.loading = false;
        this.authSuccess.emit();
      },
      error: () => {
        this.loading = false;
        this.error = 'Code incorrect ou expiré. Vérifiez puis réessayez.';
      },
    });
  }

  resendOtp() {
    this.loading = true;
    this.error = '';
    this.auth.sendOtp(this.email.trim().toLowerCase()).subscribe({
      next: () => {
        this.loading = false;
        this.code = '';
      },
      error: () => {
        this.loading = false;
        this.error = 'Le code n’a pas pu être renvoyé.';
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
    this.code = '';
    this.error = '';
  }

  submitGuest() {
    if (this.guestName.trim().length < 2) return;
    this.loading = true;
    this.error = '';
    this.auth.guest(this.guestName.trim()).subscribe({
      next: () => {
        localStorage.setItem('cmciea_guest_name', this.guestName.trim());
        this.loading = false;
        this.authSuccess.emit();
      },
      error: err => {
        this.loading = false;
        this.error = err?.error?.message ?? 'Accès visiteur impossible.';
      },
    });
  }

  useMemberAccess() {
    this.step = 'email';
    this.error = '';
  }
}
