import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { MemberAuthService } from '../../../core/services/member-auth.service';
import { Meeting, ReunionsService } from '../../../core/services/reunions.service';
import { JoinModalComponent } from '../join-modal/join-modal.component';

@Component({
  selector: 'app-reunions-list',
  standalone: true,
  imports: [CommonModule, JoinModalComponent],
  templateUrl: './reunions-list.component.html',
  styleUrls: ['./reunions-list.component.scss'],
})
export class ReunionsListComponent implements OnInit, OnDestroy {
  current: Meeting | null = null;
  upcoming: Meeting[] = [];
  loading = true;
  showJoinModal = false;
  selectedMeetingId = '';
  private refresh$: Subscription | null = null;

  constructor(
    private reunionsService: ReunionsService,
    private memberAuth: MemberAuthService,
    private adminAuth: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.load();
    this.refresh$ = interval(30000).subscribe(() => this.load());
  }

  ngOnDestroy() {
    this.refresh$?.unsubscribe();
  }

  load() {
    this.reunionsService.getCurrent().subscribe({ next: (m) => { this.current = m; this.loading = false; } });
    this.reunionsService.getUpcoming().subscribe({ next: (m) => this.upcoming = m });
  }

  joinMeeting(meetingId: string) {
    this.selectedMeetingId = meetingId;
    if (this.adminAuth.isLoggedIn() || this.memberAuth.isLoggedIn()) {
      this.doJoin(meetingId);
    } else {
      this.showJoinModal = true;
    }
  }

  doJoin(meetingId: string) {
    this.showJoinModal = false;
    this.reunionsService.join(meetingId).subscribe({
      next: (result) => {
        this.router.navigate(['/reunions', meetingId, 'salle'], { state: { jitsiData: result } });
      },
      error: () => alert('Impossible de rejoindre la réunion. Veuillez réessayer.'),
    });
  }

  onAuthSuccess() {
    this.doJoin(this.selectedMeetingId);
  }

  onModalClose() {
    this.showJoinModal = false;
  }

  formatTime(dateStr: string): string {
    return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  }

  isToday(dateStr: string): boolean {
    const d = new Date(dateStr);
    const today = new Date();
    return d.toDateString() === today.toDateString();
  }
}
