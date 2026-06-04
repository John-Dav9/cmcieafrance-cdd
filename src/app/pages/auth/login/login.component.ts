import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberAuthService } from '../../../core/services/member-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  loading = false;
  error = '';

  constructor(private auth: MemberAuthService, private router: Router) {}

  submit() {
    if (!this.email.trim()) return;
    this.loading = true;
    this.error = '';

    this.auth.checkEmail(this.email.trim().toLowerCase()).subscribe({
      next: (res) => {
        if (!res.exists) {
          if (!res.isOpen) {
            this.error = 'Les inscriptions sont fermées. Contactez-nous.';
            this.loading = false;
            return;
          }
          this.router.navigate(['/auth/register'], { state: { email: this.email } });
          return;
        }
        this.auth.sendOtp(this.email.trim().toLowerCase()).subscribe({
          next: (otp) => {
            if (otp.method === 'sms') {
              this.router.navigate(['/auth/verify-otp'], { state: { email: this.email, method: 'sms' } });
            } else {
              this.router.navigate(['/auth/magic-link-sent'], { state: { email: this.email } });
            }
          },
          error: () => { this.error = 'Erreur lors de l\'envoi. Réessayez.'; this.loading = false; },
        });
      },
      error: () => { this.error = 'Erreur de connexion. Réessayez.'; this.loading = false; },
    });
  }
}
