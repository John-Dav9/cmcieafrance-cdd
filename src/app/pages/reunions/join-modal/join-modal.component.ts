import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberAuthService } from '../../../core/services/member-auth.service';

type Step = 'email' | 'otp' | 'register' | 'magic_sent';

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
  code = '';
  form = { firstName: '', lastName: '', phone: '', city: '' };
  loading = false;
  error = '';

  constructor(private auth: MemberAuthService) {}

  submitEmail() {
    if (!this.email.trim()) return;
    this.loading = true;
    this.error = '';

    this.auth.checkEmail(this.email.trim().toLowerCase()).subscribe({
      next: (res) => {
        this.loading = false;
        if (!res.exists) {
          if (!res.isOpen) {
            this.error = 'Les inscriptions sont fermées. Contactez-nous.';
            return;
          }
          this.step = 'register';
          return;
        }
        this.auth.sendOtp(this.email.trim().toLowerCase()).subscribe({
          next: (otp) => {
            this.step = otp.method === 'sms' ? 'otp' : 'magic_sent';
          },
          error: () => this.error = 'Erreur lors de l\'envoi. Réessayez.',
        });
      },
      error: () => { this.error = 'Erreur de connexion.'; this.loading = false; },
    });
  }

  submitOtp() {
    if (this.code.length < 4) return;
    this.loading = true;
    this.error = '';

    this.auth.verifyOtp(this.email.toLowerCase(), this.code.trim()).subscribe({
      next: () => { this.loading = false; this.authSuccess.emit(); },
      error: () => { this.error = 'Code incorrect ou expiré.'; this.loading = false; },
    });
  }

  submitRegister() {
    if (!this.form.firstName || !this.form.lastName || !this.form.phone) return;
    this.loading = true;
    this.error = '';

    this.auth.register({ email: this.email.toLowerCase(), ...this.form }).subscribe({
      next: () => { this.loading = false; this.authSuccess.emit(); },
      error: (err) => {
        this.error = err?.error?.message ?? 'Erreur lors de l\'inscription.';
        this.loading = false;
      },
    });
  }

  resendOtp() {
    this.code = '';
    this.auth.sendOtp(this.email.toLowerCase()).subscribe();
  }

  back() {
    this.step = 'email';
    this.error = '';
    this.code = '';
  }
}
