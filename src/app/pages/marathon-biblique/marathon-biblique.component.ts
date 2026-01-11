import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ParticipantsService } from 'src/app/core/services/participants.service';

interface ReadingDay {
  day: number;
  date: string; // "DD/MM"
  reading: string;
}

type CalendarCell = {
  date: Date | null;
  label?: string;      // "DD"
  dayNumber?: number;  // 1..45
  reading?: string;
};

@Component({
  selector: 'app-marathon-biblique',
  templateUrl: './marathon-biblique.component.html',
  styleUrls: ['./marathon-biblique.component.css']
})
export class MarathonBibliqueComponent implements OnInit {

  title = 'Marathon Biblique 45 Jours – Lire Toute la Bible Ensemble';

  subtitle =
    'Du 05 janvier au 18 février 2026 · De la Genèse à l’Apocalypse.\n' +
    'Participez au Marathon Biblique de 45 jours : un plan clair pour lire toute la Bible, seul ou en groupe, avec ressources et suivi quotidien.';

  youtubePlaylistUrl =
    'https://www.youtube.com/playlist?list=PLuiootrwkQ8aexpj8YDMoeKGtIAbYBNv8';

  weekdays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

  startDate = new Date(2026, 0, 5); // 05/01/2026
  endDate   = new Date(2026, 1, 18); // 18/02/2026

  // ✅ Progress checkboxes persistantes
  private readonly STORAGE_KEY = 'marathon-biblique-progress-v1';
  progress: Record<number, boolean> = {};

  @ViewChild('calendarShell') calendarShell?: ElementRef<HTMLElement>;

  constructor(private participantsService: ParticipantsService) {}

  ngOnInit(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      this.progress = raw ? JSON.parse(raw) : {};
    } catch {
      this.progress = {};
    }
  }

  // ✅ Plan de lecture (45 jours)
  readingPlan: ReadingDay[] = [
    { day: 1,  date: '05/01', reading: 'Genèse 1–26' },
    { day: 2,  date: '06/01', reading: 'Genèse 27–47' },
    { day: 3,  date: '07/01', reading: 'Genèse 48–50 ; Exode 1–20' },
    { day: 4,  date: '08/01', reading: 'Exode 21–40 ; Lévitique 1–2' },
    { day: 5,  date: '09/01', reading: 'Lévitique 3–22' },
    { day: 6,  date: '10/01', reading: 'Lévitique 23–27 ; Nombres 1–12' },
    { day: 7,  date: '11/01', reading: 'Nombres 13–32' },
    { day: 8,  date: '12/01', reading: 'Nombres 33–36 ; Deutéronome 1–17' },
    { day: 9,  date: '13/01', reading: 'Deutéronome 18–34 ; Josué 1–5' },
    { day: 10, date: '14/01', reading: 'Josué 6–24 ; Juges 1–3' },
    { day: 11, date: '15/01', reading: 'Juges 4–21 ; Ruth 1–2' },
    { day: 12, date: '16/01', reading: 'Ruth 3–4 ; 1 Samuel 1–19' },
    { day: 13, date: '17/01', reading: '1 Samuel 20–31 ; 2 Samuel 1–12' },
    { day: 14, date: '18/01', reading: '2 Samuel 13–24 ; 1 Rois 1–6' },
    { day: 15, date: '19/01', reading: '1 Rois 7–21' },
    { day: 16, date: '20/01', reading: '1 Rois 22 ; 2 Rois 1–18' },
    { day: 17, date: '21/01', reading: '2 Rois 19–25 ; 1 Chroniques 1–15' },
    { day: 18, date: '22/01', reading: '1 Chroniques 16–29 ; 2 Chroniques 1–12' },
    { day: 19, date: '23/01', reading: '2 Chroniques 13–35' },
    { day: 20, date: '24/01', reading: '2 Chroniques 36 ; Esdras 1–10 ; Néhémie 1–12' },
    { day: 21, date: '25/01', reading: 'Néhémie 13 ; Esther 1–10 ; Job 1–26' },
    { day: 22, date: '26/01', reading: 'Job 27–42 ; Psaumes 1–36' },
    { day: 23, date: '27/01', reading: 'Psaumes 37–91' },
    { day: 24, date: '28/01', reading: 'Psaumes 92–150 ; Proverbes 1–4' },
    { day: 25, date: '29/01', reading: 'Proverbes 5–31 ; Ecclésiaste 1–9' },
    { day: 26, date: '30/01', reading: 'Ecclésiaste 10–12 ; Cantique des Cantiques 1–8 ; Ésaïe 1–27' },
    { day: 27, date: '31/01', reading: 'Ésaïe 28–56' },
    { day: 28, date: '01/02', reading: 'Ésaïe 57–66 ; Jérémie 1–15' },
    { day: 29, date: '02/02', reading: 'Jérémie 16–37' },
    { day: 30, date: '03/02', reading: 'Jérémie 38–52 ; Lamentations 1–5' },
    { day: 31, date: '04/02', reading: 'Ézéchiel 1–23' },
    { day: 32, date: '05/02', reading: 'Ézéchiel 24–43' },
    { day: 33, date: '06/02', reading: 'Ézéchiel 44–48 ; Daniel 1–12 ; Osée 1–2' },
    { day: 34, date: '07/02', reading: 'Osée 3–14 ; Joël 1–3 ; Amos 1–9 ; Abdias ; Jonas 1–4 ; Michée 1–7 ; Nahum 1–3 ; Habacuc 1–2' },
    { day: 35, date: '08/02', reading: 'Habacuc 3 ; Sophonie 1–3 ; Aggée 1–2 ; Zacharie 1–14 ; Malachie 1–4 ; Matthieu 1–9' },
    { day: 36, date: '09/02', reading: 'Matthieu 10–28' },
    { day: 37, date: '10/02', reading: 'Marc 1–16 ; Luc 1–2' },
    { day: 38, date: '11/02', reading: 'Luc 3–19' },
    { day: 39, date: '12/02', reading: 'Luc 20–24 ; Jean 1–12' },
    { day: 40, date: '13/02', reading: 'Jean 13–21 ; Actes 1–12' },
    { day: 41, date: '14/02', reading: 'Actes 13–28 ; Romains 1–7' },
    { day: 42, date: '15/02', reading: 'Romains 8–16 ; 1 Corinthiens 1–16 ; 2 Corinthiens 1–4' },
    { day: 43, date: '16/02', reading: '2 Corinthiens 5–13 ; Galates 1–6 ; Éphésiens 1–6 ; Philippiens 1–4 ; Colossiens 1–4 ; 1 Thessaloniciens 1–5 ; 2 Thessaloniciens 1–2' },
    { day: 44, date: '17/02', reading: '2 Thessaloniciens 3 ; 1 Timothée 1–6 ; 2 Timothée 1–4 ; Tite 1–3 ; Philémon ; Hébreux 1–13 ; Jacques 1–5 ; 1 Pierre 1–4' },
    { day: 45, date: '18/02', reading: '1 Pierre 5 ; 2 Pierre 1–3 ; 1 Jean 1–5 ; 2 Jean ; 3 Jean ; Jude ; Apocalypse 1–22' },
  ];

  // ✅ remplace ; par retours à la ligne
  formatReading(text: string): string {
    return (text || '').replace(/;\s*/g, '<br>');
  }

  // ✅ Construction du calendrier (grille)
  get calendarCells(): CalendarCell[] {
    const cells: CalendarCell[] = [];
    const planByDate = new Map<string, { day: number; reading: string }>();
    this.readingPlan.forEach(d => planByDate.set(d.date, { day: d.day, reading: d.reading }));

    // offset pour commencer au bon jour de semaine
    const offset = this.startDate.getDay();
    for (let i = 0; i < offset; i++) cells.push({ date: null });

    const current = new Date(this.startDate);
    while (current <= this.endDate) {
      const dd = String(current.getDate()).padStart(2, '0');
      const mm = String(current.getMonth() + 1).padStart(2, '0');
      const key = `${dd}/${mm}`;
      const plan = planByDate.get(key);

      cells.push({
        date: new Date(current),
        label: dd,
        dayNumber: plan?.day,
        reading: plan?.reading ?? ''
      });

      current.setDate(current.getDate() + 1);
    }

    while (cells.length % 7 !== 0) cells.push({ date: null });
    return cells;
  }

  // ✅ “Aujourd’hui” : scroll vers la cellule du jour courant (si elle existe dans le plan)
  scrollToToday(): void {
    const shell = this.calendarShell?.nativeElement;
    if (!shell) return;

    const todayCell = shell.querySelector('.calendar-cell.is-today') as HTMLElement | null;
    if (!todayCell) return;

    todayCell.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });

    todayCell.classList.add('pulse');
    window.setTimeout(() => todayCell.classList.remove('pulse'), 800);
  }

  // ✅ Checkboxes persistantes
  isChecked(day?: number): boolean {
    if (!day) return false;
    return !!this.progress[day];
  }

  toggleChecked(day?: number, event?: Event): void {
    if (!day) return;
    const target = event?.target as HTMLInputElement | null;
    const checked = target && typeof target.checked === 'boolean'
      ? target.checked
      : !this.progress[day];
    this.progress[day] = checked;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progress));
  }

  isToday(date: Date | null): boolean {
    if (!date) return false;
    const t = new Date();
    return date.toDateString() === t.toDateString();
  }

  get completedCount(): number {
    return Object.values(this.progress).filter(Boolean).length;
  }

  get totalDays(): number {
    return this.readingPlan.length;
  }

  get progressPercent(): number {
    return this.totalDays ? Math.round((this.completedCount / this.totalDays) * 100) : 0;
  }

  // ===== Participation (Firestore) =====
  isJoinOpen = false;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  joinForm = {
    fullName: '',
    email: '',
    phone: '',
    city: ''
  };

  openJoinInline(): void {
    this.isJoinOpen = true;
    this.submitSuccess = false;
    this.submitError = '';
  }

  closeJoinInline(): void {
    this.isJoinOpen = false;
    this.isSubmitting = false;
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  async submitJoin(): Promise<void> {
    this.submitError = '';
    this.submitSuccess = false;

    const fullName = this.joinForm.fullName.trim();
    const email = this.joinForm.email.trim();

    if (!fullName || fullName.length < 2) {
      this.submitError = 'Veuillez saisir votre nom complet.';
      return;
    }
    if (!email || !this.isValidEmail(email)) {
      this.submitError = 'Veuillez saisir un email valide.';
      return;
    }

    this.isSubmitting = true;

    try {
      await this.participantsService.register({
        fullName,
        email,
        phone: this.joinForm.phone.trim() || undefined,
        city: this.joinForm.city.trim() || undefined
      });

      this.submitSuccess = true;

      this.joinForm = { fullName: '', email: '', phone: '', city: '' };

      setTimeout(() => this.closeJoinInline(), 1200);
    } catch {
      this.submitError = "Une erreur est survenue. Réessayez ou contactez l'équipe.";
    } finally {
      this.isSubmitting = false;
    }
  }
}
