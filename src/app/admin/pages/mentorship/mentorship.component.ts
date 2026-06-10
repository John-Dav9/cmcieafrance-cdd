import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-mentorship-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <header><div><span>Communauté</span><h1>Demandes de mentorat</h1></div><button (click)="load()">Actualiser</button></header>
      <p class="empty" *ngIf="!loading && !requests.length">Aucune demande de mentorat.</p>
      <article *ngFor="let request of requests">
        <div class="request-head">
          <div><strong>{{ request.requester?.firstName }} {{ request.requester?.lastName }}</strong><span>{{ request.requester?.email }}</span></div>
          <em [class.assigned]="request.status==='assigned'">{{ label(request.status) }}</em>
        </div>
        <h2>{{ request.topic }}</h2><p>{{ request.message }}</p>
        <div class="actions">
          <select [(ngModel)]="request.selectedMentorId">
            <option value="">Choisir un mentor</option>
            <option *ngFor="let member of members" [value]="member.id">{{ member.firstName }} {{ member.lastName }}</option>
          </select>
          <button (click)="assign(request)" [disabled]="!request.selectedMentorId">Affecter</button>
          <button class="close" (click)="close(request)" *ngIf="request.status!=='closed'">Clôturer</button>
        </div>
      </article>
    </div>`,
  styles: [`
    .page{max-width:980px;padding:26px}.page header{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}
    header span{color:#a36d13;font-size:11px;font-weight:800;text-transform:uppercase}h1{margin:4px 0;font-size:24px}
    header button,.actions button{padding:9px 13px;border:0;border-radius:8px;cursor:pointer}
    article{margin-bottom:12px;padding:20px;border:1px solid #e2e6ea;border-radius:14px;background:#fff}
    .request-head{display:flex;justify-content:space-between}.request-head div{display:flex;flex-direction:column}.request-head span{color:#7a838d;font-size:12px}
    em{color:#9a6a19;font-style:normal;font-size:12px}.assigned{color:#14733b}h2{margin:16px 0 7px;font-size:17px}p{color:#59636e;line-height:1.55}
    .actions{display:flex;gap:8px;margin-top:16px}.actions select{min-width:240px;padding:9px;border:1px solid #d6dce2;border-radius:8px}
    .actions button{color:#fff;background:#1d546c}.actions .close{background:#eceff2;color:#4e5660}.empty{color:#7b858f}
  `],
})
export class MentorshipAdminComponent implements OnInit {
  requests: any[] = [];
  members: any[] = [];
  loading = true;
  constructor(private http: HttpClient) {}
  ngOnInit() { this.load(); this.http.get<any[]>(`${environment.apiBase}/membres`).subscribe(m => this.members = m); }
  load() { this.http.get<any[]>(`${environment.apiBase}/mentorship`).subscribe(r => { this.requests = r; this.loading = false; }); }
  assign(request: any) {
    this.http.patch(`${environment.apiBase}/mentorship/${request.id}/assign`, { mentorId: request.selectedMentorId })
      .subscribe(() => this.load());
  }
  close(request: any) {
    this.http.patch(`${environment.apiBase}/mentorship/${request.id}/status`, { status: 'closed' })
      .subscribe(() => this.load());
  }
  label(status: string) { return status === 'pending' ? 'En attente' : status === 'assigned' ? 'Assigné' : 'Clôturé'; }
}
