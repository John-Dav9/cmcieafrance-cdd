import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MemberAuthService } from '../../core/services/member-auth.service';
import { PushNotificationsService } from '../../core/services/push-notifications.service';

const SCOPE_LABELS: Record<string, string> = {
  BIBLE_COMPLETE:    'Bible compl\u00e8te',
  ANCIEN_TESTAMENT:  'Ancien Testament',
  NOUVEAU_TESTAMENT: 'Nouveau Testament',
  LIVRES_CHOISIS:    'Livres choisis',
};

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  private base = environment.apiBase;

  // ─── Identification ────────────────────────────────────────────────────────
  emailInput = '';
  emailError = '';
  otpCode    = '';
  otpSent    = false;
  loading    = false;
  identified = false;

  // ─── Données dashboard ────────────────────────────────────────────────────
  dashboard: any = null;
  pushSupported = false;
  pushSubscribed = false;
  pushLoading = false;
  pushMessage = '';

  readonly scopeLabels = SCOPE_LABELS;

  constructor(
    private http: HttpClient,
    private memberAuth: MemberAuthService,
    private pushNotifications: PushNotificationsService,
  ) {}

  ngOnInit(): void {
    this.pushSupported = this.pushNotifications.supported;
    if (this.pushSupported) {
      this.pushNotifications.isSubscribed().then(value => this.pushSubscribed = value);
    }
    const member = this.memberAuth.member;
    if (this.memberAuth.isLoggedIn() && member) {
      this.emailInput = member.email;
      this.load();
    }
  }

  async togglePush(): Promise<void> {
    this.pushLoading = true;
    this.pushMessage = '';
    try {
      if (this.pushSubscribed) await this.pushNotifications.unsubscribe();
      else await this.pushNotifications.subscribe();
      this.pushSubscribed = !this.pushSubscribed;
      this.pushMessage = this.pushSubscribed
        ? 'Les rappels de réunion sont activés.'
        : 'Les notifications ont été désactivées.';
    } catch (error: any) {
      this.pushMessage = error?.message === 'Notifications non configurées'
        ? 'Les notifications ne sont pas encore configurées sur le serveur.'
        : 'Impossible de modifier les notifications.';
    } finally {
      this.pushLoading = false;
    }
  }

  // ─── Chargement ───────────────────────────────────────────────────────────

  identify(): void {
    const e = this.emailInput.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      this.emailError = 'Email invalide.';
      return;
    }
    this.emailError = '';
    this.loading = true;
    this.memberAuth.checkEmail(e).subscribe({
      next: ({ exists }) => {
        if (!exists) {
          this.loading = false;
          this.emailError = 'Aucun compte membre trouvé pour cet email.';
          return;
        }
        this.memberAuth.sendOtp(e).subscribe({
          next: () => {
            this.loading = false;
            this.otpSent = true;
          },
          error: (err) => {
            this.loading = false;
            this.emailError = err?.error?.message ?? 'Impossible d’envoyer le code de connexion.';
          },
        });
      },
      error: () => {
        this.loading = false;
        this.emailError = 'Impossible de vérifier cet email.';
      },
    });
  }

  verifyOtp(): void {
    if (!/^\d{4}$/.test(this.otpCode.trim())) {
      this.emailError = 'Saisis le code à 4 chiffres reçu.';
      return;
    }
    this.loading = true;
    this.emailError = '';
    this.memberAuth.verifyOtp(this.emailInput.trim().toLowerCase(), this.otpCode.trim()).subscribe({
      next: () => {
        this.otpSent = false;
        this.load();
      },
      error: (err) => {
        this.loading = false;
        this.emailError = err?.error?.message ?? 'Code invalide ou expiré.';
      },
    });
  }

  private load(): void {
    this.loading    = true;
    this.dashboard  = null;
    this.identified = false;

    this.http.get<any>(`${this.base}/user/dashboard`).subscribe({
      next: (data) => {
        this.dashboard  = data;
        this.identified = true;
        this.loading    = false;
      },
      error: (err) => {
        this.loading    = false;
        this.emailError = err?.error?.message ?? 'Aucun compte trouv\u00e9 pour cet email.';
      },
    });
  }

  logout(): void {
    this.memberAuth.logout();
    this.identified = false;
    this.dashboard  = null;
    this.emailInput = '';
    this.otpCode = '';
    this.otpSent = false;
  }

  // ─── Helpers chart ────────────────────────────────────────────────────────

  chartBarHeight(percent: number): number { return Math.max(4, percent * 1.6); }  // max ~160px

  barColor(statut: string, percent: number): string {
    if (percent === 100) return '#16a34a';
    if (statut === 'ACTIF') return '#4f7dff';
    return '#8b93a8';
  }

  milestoneReached(entry: any, ms: number): boolean {
    return entry.milestonesReached?.includes(ms) ?? false;
  }

}
