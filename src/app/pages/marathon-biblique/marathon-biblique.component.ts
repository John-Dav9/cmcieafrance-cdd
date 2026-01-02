import { Component, OnInit } from '@angular/core';

interface ReadingDay {
  day: number;
  date: string; // "DD/MM"
  reading: string;
}

type CalendarCell = {
  date: Date | null;
  label?: string;
  dayNumber?: number;
  reading?: string;
};

@Component({
  selector: 'app-marathon-biblique',
  templateUrl: './marathon-biblique.component.html',
  styleUrls: ['./marathon-biblique.component.css']
})
export class MarathonBibliqueComponent implements OnInit {

  title = 'Marathon Biblique – 45 jours';
  subtitle = 'Du 05 janvier au 18 février 2026 · De la Genèse à l’Apocalypse';

  youtubePlaylistUrl =
    'https://www.youtube.com/playlist?list=PLuiootrwkQ8aexpj8YDMoeKGtIAbYBNv8';

  weekdays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

  startDate = new Date(2026, 0, 5);
  endDate = new Date(2026, 1, 18);

  private readonly STORAGE_KEY = 'marathon-biblique-progress-v1';
  progress: Record<number, boolean> = {};

  ngOnInit(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      this.progress = raw ? JSON.parse(raw) : {};
    } catch {
      this.progress = {};
    }
  }

  readingPlan: ReadingDay[] = [
    { day: 1, date: '05/01', reading: 'Genèse 1–11' },
    { day: 2, date: '06/01', reading: 'Genèse 12–23' },
    { day: 3, date: '07/01', reading: 'Genèse 24–36' },
    { day: 4, date: '08/01', reading: 'Genèse 37–50' },
    { day: 5, date: '09/01', reading: 'Exode 1–18' },
    { day: 6, date: '10/01', reading: 'Exode 19–40' },
    { day: 7, date: '11/01', reading: 'Lévitique 1–13' },
    { day: 8, date: '12/01', reading: 'Lévitique 14–27' },
    { day: 9, date: '13/01', reading: 'Nombres 1–21' },
    { day: 10, date: '14/01', reading: 'Nombres 22–36' },
    { day: 11, date: '15/01', reading: 'Deutéronome 1–17' },
    { day: 12, date: '16/01', reading: 'Deutéronome 18–34' },
    { day: 13, date: '17/01', reading: 'Josué 1–12' },
    { day: 14, date: '18/01', reading: 'Josué 13–24' },
    { day: 15, date: '19/01', reading: 'Juges 1–12' },
    { day: 16, date: '20/01', reading: 'Juges 13–21 ; Ruth' },
    { day: 17, date: '21/01', reading: '1 Samuel 1–15' },
    { day: 18, date: '22/01', reading: '1 Samuel 16–31' },
    { day: 19, date: '23/01', reading: '2 Samuel 1–12' },
    { day: 20, date: '24/01', reading: '2 Samuel 13–24' },
    { day: 21, date: '25/01', reading: '1 Rois 1–11' },
    { day: 22, date: '26/01', reading: '1 Rois 12–22' },
    { day: 23, date: '27/01', reading: '2 Rois 1–17' },
    { day: 24, date: '28/01', reading: '2 Rois 18–25' },
    { day: 25, date: '29/01', reading: '1 Chroniques 1–16' },
    { day: 26, date: '30/01', reading: '1 Chroniques 17–29' },
    { day: 27, date: '31/01', reading: '2 Chroniques 1–20' },
    { day: 28, date: '01/02', reading: '2 Chroniques 21–36' },
    { day: 29, date: '02/02', reading: 'Esdras ; Néhémie' },
    { day: 30, date: '03/02', reading: 'Esther ; Job 1–21' },
    { day: 31, date: '04/02', reading: 'Job 22–42' },
    { day: 32, date: '05/02', reading: 'Psaumes 1–50' },
    { day: 33, date: '06/02', reading: 'Psaumes 51–100' },
    { day: 34, date: '07/02', reading: 'Psaumes 101–150' },
    { day: 35, date: '08/02', reading: 'Proverbes ; Ecclésiaste ; Cantique' },
    { day: 36, date: '09/02', reading: 'Ésaïe 1–33' },
    { day: 37, date: '10/02', reading: 'Ésaïe 34–66' },
    { day: 38, date: '11/02', reading: 'Jérémie ; Lamentations' },
    { day: 39, date: '12/02', reading: 'Ézéchiel' },
    { day: 40, date: '13/02', reading: 'Daniel ; Osée ; Joël' },
    { day: 41, date: '14/02', reading: 'Amos ; Abdias ; Jonas ; Michée' },
    { day: 42, date: '15/02', reading: 'Nahum ; Habacuc ; Sophonie ; Aggée ; Zacharie ; Malachie' },
    { day: 43, date: '16/02', reading: 'Matthieu ; Marc' },
    { day: 44, date: '17/02', reading: 'Luc ; Jean ; Actes' },
    { day: 45, date: '18/02', reading: 'Romains → Apocalypse' }
  ];

  get calendarCells(): CalendarCell[] {
    const cells: CalendarCell[] = [];
    const planByDate = new Map<string, { day: number; reading: string }>();
    this.readingPlan.forEach(d => planByDate.set(d.date, { day: d.day, reading: d.reading }));

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

  isChecked(day?: number): boolean {
    if (!day) return false;
    return !!this.progress[day];
  }

  toggleChecked(day?: number, event?: Event): void {
    if (!day) return;
    const checked = (event?.target as HTMLInputElement)?.checked ?? false;
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
}
