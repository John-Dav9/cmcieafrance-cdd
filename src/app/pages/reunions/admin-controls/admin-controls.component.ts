import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  MediaMode,
  MediaStatus,
  MeetingSocketService,
} from '../../../core/services/meeting-socket.service';
import { ReunionsService } from '../../../core/services/reunions.service';
import {
  SPIRITUAL_BACKGROUNDS,
  SpiritualBackgroundId,
} from '../spiritual-backgrounds';

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
  waitingParticipants: any[] = [];
  recording = false;
  recordingPending = false;
  toast: { msg: string; type: 'success' | 'error' } | null = null;
  loadingActions: Record<string, boolean> = {};

  // Spirituel
  bibleResults: { reference: string; text: string }[] = [];
  bibleQuery = '';
  cantiqueQuery = '';
  cantiqueResults: {
    id: string;
    title: string;
    number?: string;
    author?: string;
    lyrics: string;
  }[] = [];
  lyricsTitle = '';
  lyricsText = '';
  announcementText = '';
  readonly spiritualBackgrounds = SPIRITUAL_BACKGROUNDS;
  selectedBackground: SpiritualBackgroundId = 'ocean';
  spiritualSending = false;

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
  private socketSubscriptions = new Subscription();
  private toastTimer: any = null;
  private readonly recordingStatusHandler = (event: any) => {
    const mode = event?.mode as MediaMode;
    if (mode !== 'file' && mode !== 'stream') return;
    const status: MediaStatus = event?.error ? 'failed' : event?.on ? 'active' : 'idle';
    this.socket.reportMediaStatus(this.meetingId, mode, status, event?.error);
  };

  constructor(
    private reunionsService: ReunionsService,
    private socket: MeetingSocketService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.loadParticipants();
    this.refresh$ = interval(10000).subscribe(() => this.loadParticipants());

    this.socketSubscriptions.add(this.socket.pollStarted$.subscribe(p => {
      this.activePoll = p;
      this.pollResults = null;
    }));
    this.socketSubscriptions.add(this.socket.pollResults$.subscribe(r => this.pollResults = r));
    this.socketSubscriptions.add(this.socket.pollClosed$.subscribe(r => {
      this.pollResults = r;
      this.activePoll = null;
    }));
    this.socketSubscriptions.add(this.socket.recordingStatus$.subscribe(s => {
      this.recordingPending = s.status === 'starting' || s.status === 'stopping';
      this.recording = s.status === 'active' || s.status === 'starting';
      if (s.status === 'active') this.showToast('Enregistrement confirmé par Jitsi', 'success');
      if (s.status === 'failed') this.showToast(s.error || 'Échec de l’enregistrement', 'error');
    }));
    this.socketSubscriptions.add(this.socket.streamingStatus$.subscribe(s => {
      this.isStreaming = s.status === 'active' || s.status === 'starting';
      if (s.status === 'active') this.showToast('Diffusion confirmée par Jitsi', 'success');
      if (s.status === 'failed') this.showToast(s.error || 'Échec de la diffusion', 'error');
    }));
    this.socketSubscriptions.add(this.socket.mediaCommand$.subscribe(command => {
      if (command.meetingId === this.meetingId) this.executeMediaCommand(command);
    }));
    this.jitsiApi?.addListener?.('recordingStatusChanged', this.recordingStatusHandler);

    this.reunionsService.getRecordingStatus(this.meetingId).subscribe({
      next: state => {
        this.recording = state.status === 'active' || state.status === 'starting';
        this.recordingPending = state.status === 'starting' || state.status === 'stopping';
      },
    });
    this.http.get<{ status: MediaStatus }>(
      `${environment.apiBase}/streaming/${this.meetingId}/status`,
    ).subscribe({
      next: state => this.isStreaming = state.status === 'active' || state.status === 'starting',
    });
  }

  ngOnDestroy() {
    this.refresh$?.unsubscribe();
    this.socketSubscriptions.unsubscribe();
    this.jitsiApi?.removeListener?.('recordingStatusChanged', this.recordingStatusHandler);
    clearTimeout(this.toastTimer);
  }

  setTab(tab: AdminTab) { this.activeTab = tab; }

  // ── Participants ───────────────────────────────────────────────────────────

  loadParticipants() {
    this.reunionsService.getParticipants(this.meetingId).subscribe({ next: p => this.participants = p });
    this.reunionsService.getWaitingParticipants(this.meetingId).subscribe({
      next: p => this.waitingParticipants = p,
    });
  }

  admitParticipant(p: any) {
    const key = `admit-${p.id}`;
    this.loadingActions[key] = true;
    this.reunionsService.admitParticipant(this.meetingId, p.id).subscribe({
      next: () => {
        this.waitingParticipants = this.waitingParticipants.filter(item => item.id !== p.id);
        this.showToast(`${p.displayName} peut rejoindre la réunion`, 'success');
        delete this.loadingActions[key];
      },
      error: () => {
        this.showToast('Admission impossible', 'error');
        delete this.loadingActions[key];
      },
    });
  }

  rejectParticipant(p: any) {
    const key = `reject-${p.id}`;
    this.loadingActions[key] = true;
    this.reunionsService.rejectParticipant(this.meetingId, p.id).subscribe({
      next: () => {
        this.waitingParticipants = this.waitingParticipants.filter(item => item.id !== p.id);
        delete this.loadingActions[key];
      },
      error: () => {
        this.showToast('Refus impossible', 'error');
        delete this.loadingActions[key];
      },
    });
  }

  muteParticipant(p: any) {
    if (!p.jitsiParticipantId) {
      this.showToast('Identifiant Jitsi du participant indisponible', 'error');
      return;
    }
    const key = `mute-${p.id}`;
    this.loadingActions[key] = true;
    this.jitsiApi?.executeCommand('muteParticipant', p.jitsiParticipantId);
    this.reunionsService.muteParticipant(this.meetingId, p.jitsiParticipantId).subscribe({
      next: () => { this.showToast(`${p.displayName} coupé`, 'success'); delete this.loadingActions[key]; },
      error: () => { this.showToast(`${p.displayName} coupé (local)`, 'success'); delete this.loadingActions[key]; },
    });
  }

  kickParticipant(p: any) {
    if (!confirm(`Exclure ${p.displayName} ?`)) return;
    if (!p.jitsiParticipantId) {
      this.showToast('Identifiant Jitsi du participant indisponible', 'error');
      return;
    }
    const key = `kick-${p.id}`;
    this.loadingActions[key] = true;
    this.jitsiApi?.executeCommand('kickParticipant', p.jitsiParticipantId);
    this.reunionsService.kickParticipant(this.meetingId, p.jitsiParticipantId).subscribe({
      next: () => { this.participants = this.participants.filter(x => x.id !== p.id); this.showToast(`${p.displayName} exclu`, 'success'); delete this.loadingActions[key]; },
      error: () => { this.participants = this.participants.filter(x => x.id !== p.id); delete this.loadingActions[key]; },
    });
  }

  grantModerator(p: any) {
    if (!confirm(`Promouvoir ${p.displayName} modérateur ?`)) return;
    const memberId = p.member?.id;
    if (!memberId) {
      this.showToast('Ce participant doit être lié à un compte membre', 'error');
      return;
    }
    this.reunionsService.grantModerator(this.meetingId, memberId).subscribe({
      next: () => { p.wasAdmin = true; this.showToast(`${p.displayName} est modérateur`, 'success'); },
      error: () => this.showToast('Impossible de promouvoir', 'error'),
    });
  }

  toggleRecording() {
    if (this.recordingPending) return;
    this.recordingPending = true;
    const request = this.recording
      ? this.reunionsService.stopRecording(this.meetingId)
      : this.reunionsService.startRecording(this.meetingId);
    request.subscribe({
      next: res => this.showToast(res.message, 'success'),
      error: err => {
        this.recordingPending = false;
        this.showToast(err?.error?.message ?? 'Commande d’enregistrement impossible', 'error');
      },
    });
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

  async sendVerse(v: { reference: string; text: string }) {
    await this.sendSpiritual(
      () => this.socket.showVerse(
        this.meetingId,
        v.reference,
        v.text,
        this.selectedBackground,
      ),
      `Verset "${v.reference}" diffusé`,
    );
  }

  searchCantiques() {
    const query = this.cantiqueQuery.trim();
    this.http.get<any[]>(
      `${environment.apiBase}/cantiques/meeting/${this.meetingId}?q=${encodeURIComponent(query)}`,
    ).subscribe({
      next: results => this.cantiqueResults = results,
      error: () => this.showToast('Catalogue de cantiques indisponible', 'error'),
    });
  }

  selectCantique(cantique: { title: string; number?: string; lyrics: string }) {
    this.lyricsTitle = cantique.number
      ? `${cantique.number} - ${cantique.title}`
      : cantique.title;
    this.lyricsText = cantique.lyrics;
    this.showToast('Cantique chargé, prêt à être diffusé', 'success');
  }

  async sendLyrics() {
    if (!this.lyricsTitle.trim() || !this.lyricsText.trim()) return;
    const lines = this.lyricsText.split('\n').filter(l => l.trim());
    const sent = await this.sendSpiritual(
      () => this.socket.showLyrics(
        this.meetingId,
        this.lyricsTitle,
        lines,
        this.selectedBackground,
      ),
      'Paroles diffusées',
    );
    if (sent) {
      this.lyricsTitle = '';
      this.lyricsText = '';
    }
  }

  async sendAnnouncement() {
    if (!this.announcementText.trim()) return;
    const sent = await this.sendSpiritual(
      () => this.socket.showAnnouncement(
        this.meetingId,
        this.announcementText,
        this.selectedBackground,
      ),
      'Annonce envoyée',
    );
    if (sent) this.announcementText = '';
  }

  dismissSpiritualEvent() {
    this.socket.dismissSpiritualEvent(this.meetingId).catch(() => {
      this.showToast('Impossible de masquer le contenu', 'error');
    });
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
      next: () => this.showToast('Démarrage de la diffusion demandé', 'success'),
      error: err => this.showToast(err?.error?.message ?? 'Erreur de diffusion', 'error'),
    });
  }

  stopStreaming() {
    this.http.post(`${environment.apiBase}/streaming/stop`, { meetingId: this.meetingId }).subscribe({
      next: () => this.showToast('Arrêt de la diffusion demandé', 'success'),
      error: err => this.showToast(err?.error?.message ?? 'Erreur de diffusion', 'error'),
    });
  }

  private executeMediaCommand(command: {
    action: 'start' | 'stop';
    mode: MediaMode;
    streamKey?: string;
  }) {
    try {
      if (!this.jitsiApi) throw new Error('Interface Jitsi indisponible');
      if (command.action === 'start') {
        const options = command.mode === 'stream'
          ? { mode: 'stream', rtmpStreamKey: command.streamKey }
          : { mode: 'file' };
        this.jitsiApi.executeCommand('startRecording', options);
        this.socket.reportMediaStatus(this.meetingId, command.mode, 'starting');
      } else {
        this.jitsiApi.executeCommand('stopRecording', command.mode);
        this.socket.reportMediaStatus(this.meetingId, command.mode, 'stopping');
      }
    } catch (error: any) {
      this.socket.reportMediaStatus(
        this.meetingId,
        command.mode,
        'failed',
        error?.message ?? 'Commande Jitsi impossible',
      );
    }
  }

  // ── Toast ──────────────────────────────────────────────────────────────────

  private showToast(msg: string, type: 'success' | 'error') {
    clearTimeout(this.toastTimer);
    this.toast = { msg, type };
    this.toastTimer = setTimeout(() => this.toast = null, 3000);
  }

  private async sendSpiritual(action: () => Promise<any>, successMessage: string) {
    if (this.spiritualSending) return false;
    this.spiritualSending = true;
    try {
      const response = await action();
      if (!response?.sent) throw new Error('Diffusion non confirmée');
      this.showToast(successMessage, 'success');
      return true;
    } catch (error: any) {
      this.showToast(error?.message ?? 'Diffusion impossible', 'error');
      return false;
    } finally {
      this.spiritualSending = false;
    }
  }

  isLoading(key: string) { return !!this.loadingActions[key]; }
}
