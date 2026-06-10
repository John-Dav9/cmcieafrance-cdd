import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { io, Socket } from 'socket.io-client';
import { AuthService } from './auth.service';
import { MemberAuthService } from './member-auth.service';

export interface SpiritualEvent {
  type: 'verse' | 'lyrics' | 'announcement';
  title?: string;
  content: string;
  reference?: string;
}

export interface PollEvent {
  id: string;
  question: string;
  options: string[];
  durationSeconds?: number;
}

export interface PollResult {
  pollId: string;
  results: { option: string; count: number; percent: number }[];
  totalVotes: number;
}

export interface PrayerReceived {
  id: string;
  author: string;
  text: string;
}

export type MediaMode = 'file' | 'stream';
export type MediaStatus = 'idle' | 'starting' | 'active' | 'stopping' | 'failed';

@Injectable({ providedIn: 'root' })
export class MeetingSocketService implements OnDestroy {
  private socket: Socket | null = null;

  participantCount$ = new BehaviorSubject<number>(0);
  spiritualEvent$   = new Subject<SpiritualEvent>();
  spiritualDismiss$ = new Subject<void>();
  pollStarted$      = new Subject<PollEvent>();
  pollResults$      = new Subject<PollResult>();
  pollClosed$       = new Subject<PollResult>();
  prayerReceived$   = new Subject<PrayerReceived>();
  prayerSupport$    = new Subject<{ prayerId: string; author: string }>();
  recordingStatus$  = new Subject<{ status: MediaStatus; error?: string }>();
  streamingStatus$  = new Subject<{ status: MediaStatus; error?: string }>();
  mediaCommand$     = new Subject<{
    meetingId: string;
    action: 'start' | 'stop';
    mode: MediaMode;
    streamKey?: string;
  }>();
  meetingEnded$     = new Subject<void>();

  constructor(
    private readonly auth: AuthService,
    private readonly memberAuth: MemberAuthService,
  ) {}

  connect(meetingId: string) {
    if (this.socket?.connected) return;

    const wsUrl = environment.apiBase.replace('/api', '');
    const token = this.memberAuth.getToken() || this.auth.getToken();
    this.socket = io(`${wsUrl}/meetings`, {
      transports: ['websocket'],
      auth: { token },
    });

    this.socket.on('connect', () => {
      this.socket!.emit('join-meeting', { meetingId });
    });

    this.socket.on('participant-count', (d: { count: number }) => {
      this.participantCount$.next(d.count);
    });

    this.socket.on('spiritual-event', (e: SpiritualEvent) => {
      this.spiritualEvent$.next(e);
    });

    this.socket.on('spiritual-dismissed', () => {
      this.spiritualDismiss$.next();
    });

    this.socket.on('poll-started', (p: PollEvent) => {
      this.pollStarted$.next(p);
    });

    this.socket.on('poll-results', (r: PollResult) => {
      this.pollResults$.next(r);
    });

    this.socket.on('poll-closed', (r: PollResult) => {
      this.pollClosed$.next(r);
    });

    this.socket.on('prayer-received', (p: PrayerReceived) => {
      this.prayerReceived$.next(p);
    });

    this.socket.on('prayer-support', (d: { prayerId: string; author: string }) => {
      this.prayerSupport$.next(d);
    });

    this.socket.on('recording-status', (d: { status: MediaStatus; error?: string }) => {
      this.recordingStatus$.next(d);
    });

    this.socket.on('streaming-status', (d: { status: MediaStatus; error?: string }) => {
      this.streamingStatus$.next(d);
    });

    this.socket.on('media-command', (command) => {
      this.mediaCommand$.next(command);
    });

    this.socket.on('meeting-ended', () => {
      this.meetingEnded$.next();
    });
  }

  disconnect(meetingId: string) {
    this.socket?.emit('leave-meeting', { meetingId });
    this.socket?.disconnect();
    this.socket = null;
  }

  // ── Émissions admin ────────────────────────────────────────────────────────

  showVerse(meetingId: string, reference: string, content: string) {
    this.socket?.emit('show-verse', { meetingId, reference, content });
  }

  showLyrics(meetingId: string, title: string, lines: string[]) {
    this.socket?.emit('show-lyrics', { meetingId, title, lines });
  }

  showAnnouncement(meetingId: string, message: string) {
    this.socket?.emit('show-announcement', { meetingId, message });
  }

  dismissSpiritualEvent(meetingId: string) {
    this.socket?.emit('dismiss-spiritual', { meetingId });
  }

  sendPrayerRequest(meetingId: string, author: string, text: string) {
    this.socket?.emit('prayer-request', { meetingId, author, text });
  }

  joinPrayer(meetingId: string, prayerId: string, author: string) {
    this.socket?.emit('prayer-joined', { meetingId, prayerId, author });
  }

  startPoll(meetingId: string, question: string, options: string[], durationSeconds?: number) {
    this.socket?.emit('start-poll', {
      meetingId,
      poll: { question, options, durationSeconds },
    });
  }

  answerPoll(meetingId: string, pollId: string, optionIndex: number) {
    this.socket?.emit('poll-answer', { meetingId, pollId, optionIndex });
  }

  closePoll(meetingId: string) {
    this.socket?.emit('close-poll', { meetingId });
  }

  reportMediaStatus(
    meetingId: string,
    mode: MediaMode,
    status: MediaStatus,
    error?: string,
  ) {
    this.socket?.emit('media-status', { meetingId, mode, status, error });
  }

  ngOnDestroy() {
    this.socket?.disconnect();
  }
}
