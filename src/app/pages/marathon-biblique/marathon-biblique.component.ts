import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageContentService } from '../../core/services/page-content.service';
import { environment } from '../../../environments/environment';

interface ReadingDay  { day: number; date: string; reading: string; }
type CalendarCell = { date: Date | null; label?: string; dayNumber?: number; reading?: string; };

const EMAIL_KEY    = 'marathon-user-email';
const NAME_KEY     = 'marathon-user-name';
const PROGRESS_KEY = 'marathon-progress-local';

@Component({
  selector: 'app-marathon-biblique',
  standalone: false,
  templateUrl: './marathon-biblique.component.html',
  styleUrls: ['./marathon-biblique.component.css'],
})
export class MarathonBibliqueComponent implements OnInit, OnDestroy {

  private base = environment.apiBase;
  private unsubs: (() => void)[] = []; // conservé pour compatibilité ngOnDestroy
  private c: any = {};

  // ─── CMS ──────────────────────────────────────────────────────────────────
  get pageTitle()    { return this.c.heroTitle    || 'Marathons Bibliques'; }
  get pageSubtitle() { return this.c.heroSubtitle || 'Lisez la Parole de Dieu avec nous.'; }
  get ytUrl()        { return this.c.youtubeUrl   || 'https://www.youtube.com/playlist?list=PLuiootrwkQ8aexpj8YDMoeKGtIAbYBNv8'; }

  // ─── Marathons ────────────────────────────────────────────────────────────
  marathons: any[]   = [];
  loadingMarathons   = true;
  selectedId: string | null = null;
  nbInscrits: Record<string, number> = {};   // real-time via Firestore

  get marathon(): any | null {
    return this.marathons.find(m => m.id === this.selectedId) ?? null;
  }

  // ─── Calendrier ───────────────────────────────────────────────────────────
  weekdays = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
  @ViewChild('calendarShell') calendarShell?: ElementRef<HTMLElement>;

  // ─── Progression ──────────────────────────────────────────────────────────
  localProgress: Record<number, boolean> = {};
  serverProgression: any = null;   // { progressPercent, rank, totalParticipants, milestonesReached }
  loadingProgression = false;
  savingDay: number | null = null;

  get completedCount() { return Object.values(this.localProgress).filter(Boolean).length; }
  get totalDays()      { return this.marathon?.nbJours ?? 0; }
  get progressPercent(){ return this.totalDays ? Math.round((this.completedCount / this.totalDays) * 100) : 0; }

  // ─── Identification utilisateur ───────────────────────────────────────────
  userEmail    = '';
  userFullName = '';
  emailSet     = false;
  showEmailForm = false;
  emailInput    = '';
  emailError    = '';

  // ─── Inscription ──────────────────────────────────────────────────────────
  isJoinOpen    = false;
  isSubmitting  = false;
  submitSuccess = false;
  submitError   = '';
  joinForm = { fullName: '', email: '', phone: '', city: '' };

  constructor(
    private http: HttpClient,
    private pageContent: PageContentService,
  ) {}

  ngOnInit(): void {
    this.pageContent.getPage('marathon-biblique').subscribe(res => { if (res) this.c = res; });
    this.loadUserIdentity();
    this.loadMarathons();
  }

  ngOnDestroy(): void {
    this.unsubs.forEach(u => u());
  }

  // ─── Chargement des marathons ──────────────────────────────────────────────

  private loadMarathons(): void {
    this.loadingMarathons = true;
    this.http.get<any[]>(`${this.base}/marathon`).subscribe({
      next: (data) => {
        this.marathons = data ?? [];
        this.loadingMarathons = false;
        if (this.marathons.length > 0) {
          this.selectMarathon(this.marathons[0].id);
        }
        this.subscribeToCounters();
      },
      error: () => { this.loadingMarathons = false; },
    });
  }

  private subscribeToCounters(): void {
    for (const m of this.marathons) {
      this.nbInscrits[m.id] = m.nbInscrits ?? 0;
    }
  }

  selectMarathon(id: string): void {
    this.selectedId = id;
    this.resetProgressState();
    this.loadLocalProgress();
    if (this.emailSet) this.loadServerProgression();
  }

  // ─── Progression locale ────────────────────────────────────────────────────

  // Clé inclut l'email pour isoler la progression par utilisateur sur l'appareil
  private progressKey(): string {
    const suffix = this.emailSet ? `-${this.userEmail}` : '';
    return `${PROGRESS_KEY}-${this.selectedId}${suffix}`;
  }

  private loadLocalProgress(): void {
    try {
      const raw = localStorage.getItem(this.progressKey());
      this.localProgress = raw ? JSON.parse(raw) : {};
    } catch {
      this.localProgress = {};
    }
  }

  private saveLocalProgress(): void {
    localStorage.setItem(this.progressKey(), JSON.stringify(this.localProgress));
  }

  isChecked(day?: number): boolean { return day ? !!this.localProgress[day] : false; }

  trackCell(_index: number, cell: { date: Date | null; dayNumber?: number }): string {
    return cell.date ? cell.date.toISOString() : `empty-${_index}`;
  }

  onDayChange(day: number, newChecked: boolean): void {
    this.saveLocalProgress();

    if (!this.selectedId || !this.emailSet) return;

    this.savingDay = day;
    this.http.post(`${this.base}/marathon/${this.selectedId}/progression`, {
      email:   this.userEmail,
      day,
      checked: newChecked,
    }).subscribe({
      next:  (res: any) => { this.serverProgression = { ...this.serverProgression, ...res }; this.savingDay = null; },
      error: () => { this.savingDay = null; },
    });
  }

  // ─── Progression serveur + rang ──────────────────────────────────────────

  private loadServerProgression(): void {
    if (!this.selectedId || !this.userEmail) return;
    this.loadingProgression = true;

    this.http.get<any>(`${this.base}/marathon/${this.selectedId}/progression?email=${encodeURIComponent(this.userEmail)}`).subscribe({
      next: (data) => {
        this.serverProgression = data;
        // Remplace entièrement la progression locale par celle du serveur
        // (évite de conserver des jours d'un autre utilisateur sur le même appareil)
        this.localProgress = {};
        if (data?.progress) {
          Object.entries(data.progress).forEach(([k, v]) => {
            this.localProgress[parseInt(k)] = v as boolean;
          });
        }
        this.saveLocalProgress();
        this.loadingProgression = false;
      },
      error: () => { this.loadingProgression = false; },
    });
  }

  // ─── Identification ────────────────────────────────────────────────────────

  private loadUserIdentity(): void {
    const email = localStorage.getItem(EMAIL_KEY);
    const name  = localStorage.getItem(NAME_KEY);
    if (email) {
      this.userEmail    = email;
      this.userFullName = name ?? '';
      this.emailSet     = true;
    }
  }

  confirmEmail(): void {
    const e = this.emailInput.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      this.emailError = 'Email invalide.';
      return;
    }
    this.userEmail     = e;
    this.emailSet      = true;
    this.showEmailForm = false;
    this.emailError    = '';
    localStorage.setItem(EMAIL_KEY, e);
    // Réinitialise la progression affichée avant de charger celle du serveur
    this.localProgress = {};
    this.loadServerProgression();
  }

  forgetMe(): void {
    localStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(NAME_KEY);
    this.userEmail = '';
    this.userFullName = '';
    this.emailSet = false;
    this.serverProgression = null;
    this.showEmailForm = false;
  }

  // ─── Inscription ──────────────────────────────────────────────────────────

  openJoinInline(): void {
    this.isJoinOpen   = true;
    this.submitSuccess = false;
    this.submitError  = '';
    if (this.userEmail) this.joinForm.email = this.userEmail;
    if (this.userFullName) this.joinForm.fullName = this.userFullName;
  }

  closeJoinInline(): void { this.isJoinOpen = false; this.isSubmitting = false; }

  submitJoin(): void {
    this.submitError   = '';
    this.submitSuccess = false;

    const fullName = this.joinForm.fullName.trim();
    const email    = this.joinForm.email.trim().toLowerCase();

    if (!fullName || fullName.length < 2) { this.submitError = 'Nom complet requis.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { this.submitError = 'Email invalide.'; return; }
    if (!this.selectedId) { this.submitError = 'Aucun marathon s\u00e9lectionn\u00e9.'; return; }

    this.isSubmitting = true;

    this.http.post(`${this.base}/marathon/${this.selectedId}/inscrire`, {
      fullName,
      email,
      phone: this.joinForm.phone.trim() || undefined,
      city:  this.joinForm.city.trim()  || undefined,
    }).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.isSubmitting  = false;

        this.userEmail    = email;
        this.userFullName = fullName;
        this.emailSet     = true;
        localStorage.setItem(EMAIL_KEY, email);
        localStorage.setItem(NAME_KEY, fullName);

        // Repart de zéro : le nouvel inscrit n'a aucune progression
        this.localProgress = {};
        this.serverProgression = null;

        this.joinForm = { fullName: '', email: '', phone: '', city: '' };
        setTimeout(() => { this.closeJoinInline(); this.loadServerProgression(); }, 1500);
      },
      error: (err) => {
        this.submitError  = err?.error?.message ?? 'Erreur lors de l\u2019inscription.';
        this.isSubmitting = false;
      },
    });
  }

  // ─── Calendrier ───────────────────────────────────────────────────────────

  private parseLocalDate(s: string): Date {
    // Dates stockées au format "YYYY-MM-DD" sont parsées en UTC par défaut,
    // ce qui décale le jour pour les fuseaux horaires hors Europe.
    if (s && !s.includes('T')) return new Date(s + 'T00:00:00');
    return new Date(s);
  }

  get calendarCells(): CalendarCell[] {
    if (!this.marathon?.planLecture?.length) return [];

    const plan: ReadingDay[]  = this.marathon.planLecture;
    const planByDate = new Map(plan.map((d: ReadingDay) => [d.date, d]));

    const start = this.parseLocalDate(this.marathon.dateDebut);
    const end   = this.parseLocalDate(this.marathon.dateFin);
    const cells: CalendarCell[] = [];

    const offset = start.getDay();
    for (let i = 0; i < offset; i++) cells.push({ date: null });

    const current = new Date(start);
    while (current <= end) {
      const dd  = String(current.getDate()).padStart(2, '0');
      const mm  = String(current.getMonth() + 1).padStart(2, '0');
      const key = `${dd}/${mm}`;
      const p   = planByDate.get(key);
      cells.push({ date: new Date(current), label: dd, dayNumber: p?.day, reading: p?.reading ?? '' });
      current.setDate(current.getDate() + 1);
    }
    while (cells.length % 7 !== 0) cells.push({ date: null });
    return cells;
  }

  scrollToToday(): void {
    const shell = this.calendarShell?.nativeElement;
    if (!shell) return;
    const todayCell = shell.querySelector('.calendar-cell.is-today') as HTMLElement | null;
    if (!todayCell) return;
    todayCell.scrollIntoView({ behavior: 'smooth', block: 'center' });
    todayCell.classList.add('pulse');
    window.setTimeout(() => todayCell.classList.remove('pulse'), 800);
  }

  isToday(date: Date | null): boolean {
    if (!date) return false;
    return date.toDateString() === new Date().toDateString();
  }

  formatReading(text: string): string {
    return (text || '').replace(/;\s*/g, '<br>');
  }

  // ─── Leaderboard ──────────────────────────────────────────────────────────

  leaderboard: any[]    = [];
  loadingLeaderboard    = false;
  showLeaderboard       = false;

  toggleLeaderboard(): void {
    this.showLeaderboard = !this.showLeaderboard;
    if (this.showLeaderboard && !this.leaderboard.length) {
      this.loadLeaderboard();
    }
  }

  private loadLeaderboard(): void {
    if (!this.selectedId) return;
    this.loadingLeaderboard = true;
    this.http.get<any[]>(`${this.base}/marathon/${this.selectedId}/leaderboard`).subscribe({
      next: (data) => { this.leaderboard = data ?? []; this.loadingLeaderboard = false; },
      error: () => { this.loadingLeaderboard = false; },
    });
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private resetProgressState(): void {
    this.localProgress     = {};
    this.serverProgression = null;
    this.submitSuccess     = false;
    this.submitError       = '';
    this.isJoinOpen        = false;
    this.leaderboard       = [];
    this.showLeaderboard   = false;
  }

  get currentNbInscrits(): number {
    return this.selectedId ? (this.nbInscrits[this.selectedId] ?? this.marathon?.nbInscrits ?? 0) : 0;
  }
}
