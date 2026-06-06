import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MeetingSocketService } from '../../../core/services/meeting-socket.service';
import { ReunionsService } from '../../../core/services/reunions.service';

type AdminTab = 'participants' | 'spiritual' | 'poll' | 'prayer' | 'streaming';

@Component({
  selector: 'app-admin-controls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.scss'],
})
export class AdminControlsComponent implements OnInit, OnDestroy {
  @Input() meetingId = '';
  @Input() jitsiRoomId = '';
  @Input() jitsiApi: any = null;
  @Output() close = new EventEmitter<void>();

  activeTab: AdminTab = 'participants';
  participants: any[] = [];
  recording = false;
  toast: { msg: string; type: 'success' | 'error' } | null = null;
  loadingActions: Record<string, boolean> = {};

  // Spirituel
  bibleResults: { reference: string; text: string }[] = [];
  bibleQuery = '';
  lyricsTitle = '';
  lyricsText = '';
  announcementText = '';

  // Sondage
  pollQuestion = '';
  pollOptions = ['', ''];
  pollDuration = 60;
  activePoll: any = null;
  pollResults: any = null;

  // Streaming
  streamYoutubeKey = '';
  streamFacebookKey = '';
  streamPlatforms: ('youtube' | 'facebook')[] = [];
  isStreaming = false;

  private refresh$: Subscription | null = null;
  private toastTimer: any = null;

  constructor(
    private reunionsService: ReunionsService,
    private socket: MeetingSocketService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.loadParticipants();
    this.refresh$ = interval(10000).subscribe(() => this.loadParticipants());

    this.socket.pollStarted$.subscribe(p => { this.activePoll = p; this.pollResults = null; });
    this.socket.pollResults$.subscribe(r => this.pollResults = r);
    this.socket.pollClosed$.subscribe(r => { this.pollResults = r; this.activePoll = null; });
    this.socket.streamingStatus$.subscribe(s => {
      this.isStreaming = s.status === 'started';
      this.showToast(s.status === 'started' ? 'Streaming démarré !' : 'Streaming arrêté', 'success');
    });
  }

  ngOnDestroy() {
    this.refresh$?.unsubscribe();
    clearTimeout(this.toastTimer);
  }

  setTab(tab: AdminTab) { this.activeTab = tab; }

  // ── Participants ───────────────────────────────────────────────────────────

  loadParticipants() {
    this.reunionsService.getParticipants(this.meetingId).subscribe({ next: p => this.participants = p });
  }

  muteParticipant(p: any) {
    const key = `mute-${p.id}`;
    this.loadingActions[key] = true;
    this.jitsiApi?.executeCommand('muteParticipant', p.id);
    this.reunionsService.muteParticipant(this.meetingId, p.id).subscribe({
      next: () => { this.showToast(`${p.displayName} coupé`, 'success'); delete this.loadingActions[key]; },
      error: () => { this.showToast(`${p.displayName} coupé (local)`, 'success'); delete this.loadingActions[key]; },
    });
  }

  kickParticipant(p: any) {
    if (!confirm(`Exclure ${p.displayName} ?`)) return;
    const key = `kick-${p.id}`;
    this.loadingActions[key] = true;
    this.jitsiApi?.executeCommand('kickParticipant', p.id);
    this.reunionsService.kickParticipant(this.meetingId, p.id).subscribe({
      next: () => { this.participants = this.participants.filter(x => x.id !== p.id); this.showToast(`${p.displayName} exclu`, 'success'); delete this.loadingActions[key]; },
      error: () => { this.participants = this.participants.filter(x => x.id !== p.id); delete this.loadingActions[key]; },
    });
  }

  grantModerator(p: any) {
    if (!confirm(`Promouvoir ${p.displayName} modérateur ?`)) return;
    const memberId = p.member?.id ?? p.id;
    this.reunionsService.grantModerator(this.meetingId, memberId).subscribe({
      next: () => { p.wasAdmin = true; this.showToast(`${p.displayName} est modérateur`, 'success'); },
      error: () => this.showToast('Impossible de promouvoir', 'error'),
    });
  }

  toggleRecording() {
    if (this.recording) {
      this.jitsiApi?.executeCommand('stopRecording', 'file');
      this.showToast('Enregistrement arrêté', 'success');
    } else {
      this.jitsiApi?.executeCommand('startRecording', { mode: 'file' });
      this.showToast('Enregistrement démarré', 'success');
    }
    this.recording = !this.recording;
  }

  endMeeting() {
    if (!confirm('Terminer la réunion pour tous ?')) return;
    this.reunionsService.end(this.meetingId).subscribe({ next: () => this.jitsiApi?.executeCommand('hangup') });
  }

  // ── Outils spirituels ──────────────────────────────────────────────────────

  searchBible() {
    if (this.bibleQuery.trim().length < 2) return;
    this.http.get<any[]>(`${environment.apiBase}/bible/search?q=${encodeURIComponent(this.bibleQuery)}`).subscribe({
      next: r => this.bibleResults = r,
    });
  }

  sendVerse(v: { reference: string; text: string }) {
    this.socket.showVerse(this.meetingId, v.reference, v.text);
    this.showToast(`Verset "${v.reference}" diffusé`, 'success');
  }

  sendLyrics() {
    if (!this.lyricsTitle.trim() || !this.lyricsText.trim()) return;
    const lines = this.lyricsText.split('\n').filter(l => l.trim());
    this.socket.showLyrics(this.meetingId, this.lyricsTitle, lines);
    this.showToast('Paroles diffusées', 'success');
    this.lyricsTitle = ''; this.lyricsText = '';
  }

  sendAnnouncement() {
    if (!this.announcementText.trim()) return;
    this.socket.showAnnouncement(this.meetingId, this.announcementText);
    this.showToast('Annonce envoyée', 'success');
    this.announcementText = '';
  }

  dismissSpiritualEvent() {
    this.socket.dismissSpiritualEvent(this.meetingId);
  }

  // ── Sondages ───────────────────────────────────────────────────────────────

  addPollOption() { if (this.pollOptions.length < 6) this.pollOptions.push(''); }
  removePollOption(i: number) { if (this.pollOptions.length > 2) this.pollOptions.splice(i, 1); }

  launchPoll() {
    const options = this.pollOptions.filter(o => o.trim());
    if (!this.pollQuestion.trim() || options.length < 2) return;
    this.socket.startPoll(this.meetingId, this.pollQuestion, options, this.pollDuration || undefined);
    this.showToast('Sondage lancé !', 'success');
    this.pollQuestion = ''; this.pollOptions = ['', ''];
  }

  closePoll() {
    this.socket.closePoll(this.meetingId);
    this.showToast('Sondage terminé', 'success');
  }

  // ── Streaming ─────────────────────────────────────────────────────────────

  togglePlatform(p: 'youtube' | 'facebook') {
    const i = this.streamPlatforms.indexOf(p);
    if (i >= 0) this.streamPlatforms.splice(i, 1);
    else this.streamPlatforms.push(p);
  }

  hasPlatform(p: string) { return this.streamPlatforms.includes(p as any); }

  startStreaming() {
    const targets: any[] = [];
    if (this.hasPlatform('youtube') && this.streamYoutubeKey) {
      targets.push({ platform: 'youtube', streamKey: this.streamYoutubeKey });
    }
    if (this.hasPlatform('facebook') && this.streamFacebookKey) {
      targets.push({ platform: 'facebook', streamKey: this.streamFacebookKey });
    }
    if (!targets.length) { this.showToast('Configurez au moins une destination', 'error'); return; }

    this.http.post(`${environment.apiBase}/streaming/start`, {
      meetingId: this.meetingId, jitsiRoomId: this.jitsiRoomId, targets,
    }).subscribe({
      next: () => this.showToast('Streaming démarré', 'success'),
      error: () => this.showToast('Erreur streaming', 'error'),
    });
  }

  stopStreaming() {
    this.http.post(`${environment.apiBase}/streaming/stop`, { meetingId: this.meetingId }).subscribe({
      next: () => this.showToast('Streaming arrêté', 'success'),
      error: () => this.showToast('Erreur', 'error'),
    });
  }

  // ── Toast ──────────────────────────────────────────────────────────────────

  private showToast(msg: string, type: 'success' | 'error') {
    clearTimeout(this.toastTimer);
    this.toast = { msg, type };
    this.toastTimer = setTimeout(() => this.toast = null, 3000);
  }

  isLoading(key: string) { return !!this.loadingActions[key]; }
}
