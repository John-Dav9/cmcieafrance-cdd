import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberAuthService } from '../../../core/services/member-auth.service';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-otp.component.html',
})
export class VerifyOtpComponent implements OnInit {
  email = '';
  code = '';
  loading = false;
  error = '';
  redirectUrl = '/reunions';

  constructor(private auth: MemberAuthService, private router: Router) {}

  ngOnInit() {
    const state = history.state;
    this.email = state?.email ?? '';
    this.redirectUrl = state?.redirectUrl ?? '/reunions';
    if (!this.email) this.router.navigate(['/auth/login']);
  }

  submit() {
    if (this.code.length < 4) return;
    this.loading = true;
    this.error = '';

    this.auth.verifyOtp(this.email, this.code.trim()).subscribe({
      next: () => this.router.navigateByUrl(this.redirectUrl),
      error: () => { this.error = 'Code incorrect ou expiré. Réessayez.'; this.loading = false; },
    });
  }

  resend() {
    this.code = '';
    this.error = '';
    this.auth.sendOtp(this.email).subscribe({
      next: () => this.error = '',
      error: () => this.error = 'Erreur lors du renvoi.',
    });
  }
}
