import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberAuthService } from '../../../core/services/member-auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  form = { email: '', firstName: '', lastName: '', phone: '', city: '' };
  loading = false;
  error = '';
  redirectUrl = '/reunions';

  constructor(private auth: MemberAuthService, private router: Router) {}

  ngOnInit() {
    const state = history.state;
    this.form.email = state?.email ?? '';
    this.redirectUrl = state?.redirectUrl ?? '/reunions';
  }

  submit() {
    if (!this.form.firstName || !this.form.lastName || !this.form.phone) return;
    this.loading = true;
    this.error = '';

    this.auth.register(this.form).subscribe({
      next: () => this.router.navigateByUrl(this.redirectUrl),
      error: (err) => {
        this.error = err?.error?.message ?? 'Erreur lors de l\'inscription.';
        this.loading = false;
      },
    });
  }
}
