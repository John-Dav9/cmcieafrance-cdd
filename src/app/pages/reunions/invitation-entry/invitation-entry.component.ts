import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberAuthService } from '../../../core/services/member-auth.service';
import { ReunionsService } from '../../../core/services/reunions.service';

@Component({
  selector: 'app-invitation-entry',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="entry">
      <section>
        <div class="mark">{{ failed ? '!' : 'C' }}</div>
        <h1>{{ failed ? 'Lien non valide' : 'Ouverture de la réunion' }}</h1>
        <p>{{ message }}</p>
        <div class="loader" *ngIf="!failed"></div>
        <button *ngIf="failed" (click)="goToMeetings()">Voir les réunions</button>
      </section>
    </main>
  `,
  styles: [`
    .entry{min-height:100vh;display:grid;place-items:center;padding:20px;background:#171a20;color:#fff;font-family:Inter,"Segoe UI",sans-serif}
    section{width:min(440px,100%);padding:38px 28px;text-align:center;border:1px solid rgba(255,255,255,.1);border-radius:22px;background:#20242b}
    .mark{width:64px;height:64px;margin:0 auto 20px;display:grid;place-items:center;border-radius:18px;background:rgba(232,168,56,.14);color:#efbd5c;font-size:28px;font-weight:800}
    h1{margin:0 0 10px;font-size:25px}p{color:#adb4bf;line-height:1.6}.loader{width:30px;height:30px;margin:24px auto 0;border:3px solid rgba(255,255,255,.12);border-top-color:#e8a838;border-radius:50%;animation:spin .8s linear infinite}
    button{margin-top:18px;padding:12px 18px;border:0;border-radius:10px;background:#e8a838;color:#172028;font-weight:750;cursor:pointer}@keyframes spin{to{transform:rotate(360deg)}}
  `],
})
export class InvitationEntryComponent implements OnInit {
  failed = false;
  message = 'Patientez un instant. Aucun code ni mot de passe n’est nécessaire.';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: MemberAuthService,
    private reunions: ReunionsService,
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!token) {
      this.fail('Le lien d’invitation est incomplet.');
      return;
    }
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

  goToMeetings() {
    this.router.navigate(['/reunions']);
  }

  private fail(message: string) {
    this.failed = true;
    this.message = message;
  }
}
