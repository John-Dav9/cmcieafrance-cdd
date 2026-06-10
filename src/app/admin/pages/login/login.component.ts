import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AdminAuthService);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    code: [''],
  });

  loading = false;
  error = '';
  challenge = '';
  emailHint = '';

  get waitingForCode() { return !!this.challenge; }

  submit() {
    if (this.waitingForCode) {
      this.verifyCode();
      return;
    }
    if (this.form.controls.email.invalid || this.form.controls.password.invalid) return;
    this.loading = true;
    this.error = '';

    const { email, password } = this.form.value;
    this.auth.login(email!, password!).subscribe({
      next: result => {
        if ('requires_2fa' in result) {
          this.challenge = result.challenge;
          this.emailHint = result.email_hint;
          this.form.controls.code.setValidators([
            Validators.required,
            Validators.pattern(/^\d{6}$/),
          ]);
          this.form.controls.code.updateValueAndValidity();
          this.loading = false;
          return;
        }
        this.router.navigate(['/espace-admin/dashboard']);
      },
      error: err => {
        this.error = err?.error?.message ?? 'Email ou mot de passe incorrect.';
        this.loading = false;
      },
    });
  }

  verifyCode() {
    const code = this.form.controls.code.value?.trim() ?? '';
    if (!/^\d{6}$/.test(code)) {
      this.error = 'Saisissez le code à 6 chiffres reçu par email.';
      return;
    }
    this.loading = true;
    this.error = '';
    this.auth.verifyLogin(this.challenge, code).subscribe({
      next: () => this.router.navigate(['/espace-admin/dashboard']),
      error: err => {
        this.error = err?.error?.message ?? 'Code invalide ou expiré.';
        this.loading = false;
      },
    });
  }

  restart() {
    this.challenge = '';
    this.emailHint = '';
    this.form.controls.code.clearValidators();
    this.form.controls.code.setValue('');
    this.form.controls.code.updateValueAndValidity();
    this.error = '';
  }
}
