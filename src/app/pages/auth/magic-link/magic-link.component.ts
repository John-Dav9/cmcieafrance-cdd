import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberAuthService } from '../../../core/services/member-auth.service';

@Component({
  selector: 'app-magic-link',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="auth-page">
      <div class="auth-card auth-card--center">
        <div class="auth-logo">
          <img src="assets/images/logo-cmciea-france.png" alt="CMCIEA France" />
        </div>
        <div *ngIf="loading" class="auth-status">
          <div class="spinner"></div>
          <p>Connexion en cours...</p>
        </div>
        <div *ngIf="error" class="auth-status">
          <p class="error-msg">{{ error }}</p>
          <a routerLink="/auth/login" class="btn-primary">Recommencer</a>
        </div>
        <div *ngIf="!loading && !error" class="auth-status">
          <div class="auth-sent-icon">✉️</div>
          <h2>Email envoyé !</h2>
          <p>Vérifiez votre boite mail et cliquez sur le lien de connexion.<br/>Le lien est valable 15 minutes.</p>
        </div>
      </div>
    </div>
  `,
})
export class MagicLinkComponent implements OnInit {
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private auth: MemberAuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      this.loading = true;
      this.auth.verifyMagicLink(token).subscribe({
        next: () => this.router.navigate(['/reunions']),
        error: () => { this.error = 'Lien invalide ou expiré.'; this.loading = false; },
      });
    }
  }
}
