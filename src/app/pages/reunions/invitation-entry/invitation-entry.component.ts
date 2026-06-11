import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberAuthService } from '../../../core/services/member-auth.service';
import { ReunionsService } from '../../../core/services/reunions.service';

@Component({
  selector: 'app-invitation-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="entry">
      <section>
        <div class="mark">{{ failed ? '!' : 'C' }}</div>
        <h1>{{ failed ? 'Lien non valide' : 'Ouverture de la réunion' }}</h1>
        <p>{{ message }}</p>
        <form *ngIf="accessToken && !failed && !loading" (ngSubmit)="acceptSimpleAccess()">
          <input [(ngModel)]="displayName" name="displayName" autocomplete="name"
                 placeholder="Votre prénom et votre nom" maxlength="100" autofocus required>
          <button [disabled]="displayName.trim().length < 2">Entrer dans la réunion</button>
        </form>
        <div class="loader" *ngIf="loading && !failed"></div>
        <button *ngIf="failed" (click)="goToMeetings()">Voir les réunions</button>
      </section>
    </main>
  `,
  styles: [`
    .entry{min-height:100vh;display:grid;place-items:center;padding:20px;background:#171a20;color:#fff;font-family:Inter,"Segoe UI",sans-serif}
    section{width:min(440px,100%);padding:38px 28px;text-align:center;border:1px solid rgba(255,255,255,.1);border-radius:22px;background:#20242b}
    .mark{width:64px;height:64px;margin:0 auto 20px;display:grid;place-items:center;border-radius:18px;background:rgba(232,168,56,.14);color:#efbd5c;font-size:28px;font-weight:800}
    h1{margin:0 0 10px;font-size:25px}p{color:#adb4bf;line-height:1.6}.loader{width:30px;height:30px;margin:24px auto 0;border:3px solid rgba(255,255,255,.12);border-top-color:#e8a838;border-radius:50%;animation:spin .8s linear infinite}
    form{display:grid;gap:12px;margin-top:20px}input{padding:14px;border:1px solid rgba(255,255,255,.16);border-radius:11px;background:#171a20;color:#fff;font-size:16px;outline:none}input:focus{border-color:#e8a838}
    button{margin-top:18px;padding:12px 18px;border:0;border-radius:10px;background:#e8a838;color:#172028;font-weight:750;cursor:pointer}form button{margin-top:0}button:disabled{opacity:.45;cursor:not-allowed}@keyframes spin{to{transform:rotate(360deg)}}
  `],
})
export class InvitationEntryComponent implements OnInit {
  failed = false;
  loading = true;
  accessToken = '';
  displayName = localStorage.getItem('cmciea_guest_name') ?? '';
  message = 'Patientez un instant. Aucun code ni mot de passe n’est nécessaire.';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: MemberAuthService,
    private reunions: ReunionsService,
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    const accessToken = this.route.snapshot.queryParamMap.get('access');
    if (accessToken) {
      this.accessToken = accessToken;
      this.loading = false;
      this.message = 'Saisissez simplement votre nom. Aucun code ni mot de passe n’est nécessaire.';
      history.replaceState({}, '', '/reunions/invitation');
      return;
    }
    if (!token) {
      this.fail('Le lien d’invitation est incomplet.');
      return;
    }
    history.replaceState({}, '', '/reunions/invitation');
    this.auth.acceptMeetingInvite(token).subscribe({
      next: session => {
        this.reunions.join(session.meetingId).subscribe({
          next: result => {
            if ('jitsiToken' in result) {
              this.router.navigate(
                ['/reunions', session.meetingId, 'salle'],
                { state: { jitsiData: result }, replaceUrl: true },
              );
            } else {
              this.fail('La réunion ne peut pas être ouverte pour le moment.');
            }
          },
          error: err => this.fail(err?.error?.message ?? 'Impossible de rejoindre la réunion.'),
        });
      },
      error: err => this.fail(err?.error?.message ?? 'Ce lien a expiré ou a été révoqué.'),
    });
  }

  acceptSimpleAccess() {
    const displayName = this.displayName.trim();
    if (displayName.length < 2 || !this.accessToken) return;
    this.loading = true;
    this.auth.acceptMeetingAccess(this.accessToken, displayName).subscribe({
      next: session => {
        localStorage.setItem('cmciea_guest_name', displayName);
        this.reunions.join(session.meetingId).subscribe({
          next: result => {
            if ('jitsiToken' in result) {
              this.router.navigate(
                ['/reunions', session.meetingId, 'salle'],
                { state: { jitsiData: result }, replaceUrl: true },
              );
            } else {
              this.fail('La réunion ne peut pas être ouverte pour le moment.');
            }
          },
          error: err => this.fail(err?.error?.message ?? 'Impossible de rejoindre la réunion.'),
        });
      },
      error: err => this.fail(err?.error?.message ?? 'Ce lien a expiré ou a été révoqué.'),
    });
  }

  goToMeetings() {
    this.router.navigate(['/reunions']);
  }

  private fail(message: string) {
    this.failed = true;
    this.loading = false;
    this.message = message;
  }
}
