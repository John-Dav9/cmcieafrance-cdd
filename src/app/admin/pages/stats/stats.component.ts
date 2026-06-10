import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class AdminStatsComponent implements OnInit {
  private api = inject(ApiService);

  data: any = null;
  loading = true;

  ngOnInit() { this.load(); }

  load() {
    this.api.getStatsOverview().subscribe({
      next: (d) => { this.data = d; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  get maxParticipants(): number {
    if (!this.data?.recentMeetings?.length) return 1;
    return Math.max(...this.data.recentMeetings.map((m: any) => m.participants), 1);
  }

  barHeight(count: number): number {
    return Math.round((count / this.maxParticipants) * 100);
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  sourceLabel(s: string): string {
    const map: Record<string, string> = {
      marathon: 'Marathon biblique',
      newsletter: 'Newsletter',
      registration: 'Inscription directe',
      invitation: 'Invitation',
    };
    return map[s] ?? s;
  }

  sourceColor(s: string): string {
    const map: Record<string, string> = {
      marathon: '#1D546C',
      newsletter: '#E8A838',
      registration: '#10b981',
      invitation: '#8b5cf6',
    };
    return map[s] ?? '#6b7280';
  }

  monthLabel(m: string): string {
    const [year, month] = m.split('-');
    return new Date(Number(year), Number(month) - 1).toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' });
  }

  get maxMonthCount(): number {
    if (!this.data?.membersByMonth?.length) return 1;
    return Math.max(...this.data.membersByMonth.map((m: any) => Number(m.count)), 1);
  }
}
