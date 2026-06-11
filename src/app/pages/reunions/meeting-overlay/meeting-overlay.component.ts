import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MemberAuthService } from '../../../core/services/member-auth.service';
import { MeetingSocketService, PollEvent, PollResult, PrayerReceived, SpiritualEvent } from '../../../core/services/meeting-socket.service';
import { SPIRITUAL_BACKGROUNDS } from '../spiritual-backgrounds';
import {
  MeetingBackground,
  MeetingBackgroundsService,
} from '../../../core/services/meeting-backgrounds.service';

@Component({
  selector: 'app-meeting-overlay',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting-overlay.component.html',
  styleUrls: ['./meeting-overlay.component.scss'],
})
export class MeetingOverlayComponent implements OnInit, OnDestroy {
  @Input() meetingId = '';
  @Input() isAdmin = false;

  // Spiritual event
  spiritualEvent: SpiritualEvent | null = null;

  // Poll
  activePoll: PollEvent | null = null;
  pollResults: PollResult | null = null;
  selectedOption: number | null = null;
  pollClosed = false;

  // Prayer
  prayerRequests: (PrayerReceived & { supporters: string[] })[] = [];
  prayerText = '';
  showPrayerPanel = false;

  // Streaming banner
  streamingActive = false;
  backgrounds: MeetingBackground[] = [];

  private subs: Subscription[] = [];

  constructor(
    private socket: MeetingSocketService,
    private memberAuth: MemberAuthService,
    private backgroundsService: MeetingBackgroundsService,
  ) {}

  ngOnInit() {
    this.backgroundsService.list().subscribe({
      next: backgrounds => this.backgrounds = backgrounds,
    });
    this.subs.push(
      this.socket.spiritualEvent$.subscribe(e => { this.spiritualEvent = e; }),
      this.socket.spiritualDismiss$.subscribe(() => { this.spiritualEvent = null; }),
      this.socket.pollStarted$.subscribe(p => {
        this.activePoll = p;
        this.pollResults = null;
        this.selectedOption = null;
        this.pollClosed = false;
      }),
      this.socket.pollResults$.subscribe(r => { this.pollResults = r; }),
      this.socket.pollClosed$.subscribe(r => {
        this.pollResults = r;
        this.pollClosed = true;
        setTimeout(() => { this.activePoll = null; this.pollClosed = false; }, 8000);
      }),
      this.socket.prayerReceived$.subscribe(p => {
        this.prayerRequests.unshift({ ...p, supporters: [] });
        if (this.prayerRequests.length > 20) this.prayerRequests.pop();
      }),
      this.socket.prayerSupport$.subscribe(s => {
        const req = this.prayerRequests.find(p => p.id === s.prayerId);
        if (req && !req.supporters.includes(s.author)) req.supporters.push(s.author);
      }),
      this.socket.streamingStatus$.subscribe(s => {
        this.streamingActive = s.status === 'starting' || s.status === 'active';
      }),
    );
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  dismissSpiritual() {
    this.spiritualEvent = null;
  }

  votePoll(index: number) {
    if (this.selectedOption !== null || this.pollClosed || !this.activePoll) return;
    this.selectedOption = index;
    this.socket.answerPoll(this.meetingId, this.activePoll.id, index);
  }

  submitPrayer() {
    const member = this.memberAuth.member;
    const author = member ? `${member.firstName} ${member.lastName}` : 'Anonyme';
    if (!this.prayerText.trim()) return;
    this.socket.sendPrayerRequest(this.meetingId, author, this.prayerText.trim());
    this.prayerText = '';
    this.showPrayerPanel = false;
  }

  supportPrayer(req: PrayerReceived & { supporters: string[] }) {
    const member = this.memberAuth.member;
    const author = member ? `${member.firstName}` : 'Quelqu\'un';
    this.socket.joinPrayer(this.meetingId, req.id, author);
  }

  togglePrayerPanel() { this.showPrayerPanel = !this.showPrayerPanel; }

  lyricsLines(content: string): string[] {
    return content.split('\n').filter(l => l.trim());
  }

  get backgroundClass() {
    return SPIRITUAL_BACKGROUNDS.find(
      background => background.id === this.spiritualEvent?.backgroundId,
    )?.className ?? 'background-ocean';
  }

  get backgroundStyle() {
    const selected = this.backgrounds.find(
      background => background.slug === this.spiritualEvent?.backgroundId,
    );
    if (!selected) return {};
    const image = selected.imageUrl ? `url("${selected.imageUrl}")` : '';
    const backgroundImage = [selected.gradient, image].filter(Boolean).join(', ');
    return {
      '--dynamic-spiritual-background': backgroundImage || undefined,
      '--spiritual-text-color': selected.textColor,
      '--spiritual-overlay-color': selected.overlayColor,
    };
  }
}
