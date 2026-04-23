import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

const EMAIL_KEY = 'marathon-user-email';
const NAME_KEY  = 'marathon-user-name';

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
  loading    = false;
  identified = false;

  // ─── Données dashboard ────────────────────────────────────────────────────
  dashboard: any = null;

  readonly scopeLabels = SCOPE_LABELS;

  ngOnInit(): void {
    const saved = localStorage.getItem(EMAIL_KEY);
    if (saved) { this.emailInput = saved; this.load(saved); }
  }

  // ─── Chargement ───────────────────────────────────────────────────────────

  identify(): void {
    const e = this.emailInput.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      this.emailError = 'Email invalide.';
      return;
    }
    this.emailError = '';
    this.load(e);
  }

  private load(email: string): void {
    this.loading    = true;
    this.dashboard  = null;
    this.identified = false;

    this.http.get<any>(`${this.base}/user/dashboard?email=${encodeURIComponent(email)}`).subscribe({
      next: (data) => {
        this.dashboard  = data;
        this.identified = true;
        this.loading    = false;
        localStorage.setItem(EMAIL_KEY, email);
        if (data.fullName) localStorage.setItem(NAME_KEY, data.fullName);
      },
      error: (err) => {
        this.loading    = false;
        this.emailError = err?.error?.message ?? 'Aucun compte trouv\u00e9 pour cet email.';
      },
    });
  }

  logout(): void {
    localStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(NAME_KEY);
    this.identified = false;
    this.dashboard  = null;
    this.emailInput = '';
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

  constructor(private http: HttpClient) {}
}
