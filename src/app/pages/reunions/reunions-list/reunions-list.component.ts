import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { MemberAuthService } from '../../../core/services/member-auth.service';
import { JoinResponse, JoinResult, Meeting, ReunionsService } from '../../../core/services/reunions.service';
import { JoinModalComponent } from '../join-modal/join-modal.component';

interface CalendarDay {
  date: Date;
  inCurrentMonth: boolean;
  meetings: Meeting[];
}

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
  calendarDays: CalendarDay[] = [];
  calendarView: 'month' | 'week' = 'month';
  calendarCursor = new Date();
  calendarLoading = false;
  loading = true;
  showJoinModal = false;
  selectedMeetingId = '';
  selectedMeetingPublic = false;
  waitingMeeting: { id: string; title: string } | null = null;
  waitingRejected = false;
  private refresh$: Subscription | null = null;
  private admissionPoll$: Subscription | null = null;

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
    this.admissionPoll$?.unsubscribe();
  }

  load() {
    this.reunionsService.getCurrent().subscribe({ next: (m) => { this.current = m; this.loading = false; } });
    this.reunionsService.getUpcoming().subscribe({ next: (m) => this.upcoming = m });
    this.loadCalendar();
  }

  setCalendarView(view: 'month' | 'week') {
    this.calendarView = view;
    this.loadCalendar();
  }

  navigateCalendar(direction: -1 | 1) {
    const next = new Date(this.calendarCursor);
    if (this.calendarView === 'month') next.setMonth(next.getMonth() + direction);
    else next.setDate(next.getDate() + 7 * direction);
    this.calendarCursor = next;
    this.loadCalendar();
  }

  goToToday() {
    this.calendarCursor = new Date();
    this.loadCalendar();
  }

  get calendarTitle() {
    if (this.calendarView === 'month') {
      return this.calendarCursor.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    }
    const start = this.startOfWeek(this.calendarCursor);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return `${start.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} – ${end.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}`;
  }

  dayLabel(day: CalendarDay) {
    return day.date.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', '');
  }

  isCurrentDay(date: Date) {
    return date.toDateString() === new Date().toDateString();
  }

  private loadCalendar() {
    const { start, end } = this.calendarRange();
    this.calendarLoading = true;
    this.reunionsService.getCalendar(start, end).subscribe({
      next: meetings => {
        this.calendarDays = this.buildCalendarDays(start, meetings);
        this.calendarLoading = false;
      },
      error: () => this.calendarLoading = false,
    });
  }

  private calendarRange() {
    if (this.calendarView === 'week') {
      const start = this.startOfWeek(this.calendarCursor);
      const end = new Date(start);
      end.setDate(end.getDate() + 6);
      end.setHours(23, 59, 59, 999);
      return { start, end };
    }

    const first = new Date(this.calendarCursor.getFullYear(), this.calendarCursor.getMonth(), 1);
    const start = this.startOfWeek(first);
    const end = new Date(start);
    end.setDate(end.getDate() + 41);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  }

  private buildCalendarDays(start: Date, meetings: Meeting[]) {
    const count = this.calendarView === 'month' ? 42 : 7;
    const currentMonth = this.calendarCursor.getMonth();
    return Array.from({ length: count }, (_, index) => {
      const date = new Date(start);
      date.setDate(date.getDate() + index);
      return {
        date,
        inCurrentMonth: this.calendarView === 'week' || date.getMonth() === currentMonth,
        meetings: meetings.filter(meeting =>
          new Date(meeting.startTime).toDateString() === date.toDateString()),
      };
    });
  }

  private startOfWeek(date: Date) {
    const start = new Date(date);
    const day = start.getDay();
    start.setDate(start.getDate() - (day === 0 ? 6 : day - 1));
    start.setHours(0, 0, 0, 0);
    return start;
  }

  joinMeeting(meetingId: string) {
    this.selectedMeetingId = meetingId;
    const selected = this.current?.id === meetingId
      ? this.current
      : this.upcoming.find(meeting => meeting.id === meetingId);
    this.selectedMeetingPublic = selected?.isPublic ?? false;
    const member = this.memberAuth.member;
    if (member?.role === 'meeting_moderator' && member.meetingModeratorFor !== meetingId) {
      this.memberAuth.logout();
      this.showJoinModal = true;
      return;
    }
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
        if ('waitingRoom' in result && result.waitingRoom) {
          this.startWaitingRoom(meetingId, result.participantId, result.meeting.title);
          return;
        }
        if ('jitsiToken' in result) this.enterMeeting(meetingId, result);
      },
      error: () => alert('Impossible de rejoindre la réunion. Veuillez réessayer.'),
    });
  }

  cancelWaiting() {
    this.admissionPoll$?.unsubscribe();
    this.admissionPoll$ = null;
    this.waitingMeeting = null;
    this.waitingRejected = false;
  }

  private startWaitingRoom(meetingId: string, participantId: string, title: string) {
    this.admissionPoll$?.unsubscribe();
    this.waitingMeeting = { id: meetingId, title };
    this.waitingRejected = false;
    this.admissionPoll$ = interval(2500).subscribe(() => {
      this.reunionsService.getAdmissionStatus(meetingId, participantId).subscribe({
        next: result => this.handleAdmissionResult(meetingId, result),
      });
    });
  }

  private handleAdmissionResult(meetingId: string, result: JoinResponse) {
    if ('rejected' in result && result.rejected) {
      this.admissionPoll$?.unsubscribe();
      this.waitingRejected = true;
      return;
    }
    if ('jitsiToken' in result) this.enterMeeting(meetingId, result);
  }

  private enterMeeting(meetingId: string, result: JoinResult) {
    this.admissionPoll$?.unsubscribe();
    this.waitingMeeting = null;
    this.router.navigate(['/reunions', meetingId, 'salle'], { state: { jitsiData: result } });
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
