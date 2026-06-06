import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-replay',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss'],
})
export class ReplayComponent implements OnInit {
  replays: any[] = [];
  filtered: any[] = [];
  loading = true;
  search = '';
  selected: any = null;
  safeUrl: SafeResourceUrl | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiBase}/replays`).subscribe({
      next: (data) => { this.replays = data; this.filtered = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  applySearch() {
    const q = this.search.toLowerCase();
    this.filtered = !q ? this.replays : this.replays.filter(r =>
      r.title?.toLowerCase().includes(q) ||
      r.speakerName?.toLowerCase().includes(q) ||
      r.description?.toLowerCase().includes(q) ||
      (r.tags ?? []).some((t: string) => t.toLowerCase().includes(q))
    );
  }

  aiSummary: string | null = null;
  loadingSummary = false;
  recommendations: any[] = [];
  podcastUrl = `${environment.apiBase}/replays/podcast/feed.xml`;

  open(r: any) {
    this.selected = r;
    this.safeUrl = this.buildEmbedUrl(r.videoUrl);
    this.aiSummary = null;
    this.recommendations = [];
    this.loadRecommendations(r.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  close() { this.selected = null; this.safeUrl = null; this.aiSummary = null; }

  loadSummary() {
    if (!this.selected) return;
    this.loadingSummary = true;
    this.http.post<{ summary: string }>(`${environment.apiBase}/replays/${this.selected.id}/summarize`, {}).subscribe({
      next: r => { this.aiSummary = r.summary; this.loadingSummary = false; },
      error: () => { this.aiSummary = 'Résumé temporairement indisponible.'; this.loadingSummary = false; },
    });
  }

  loadRecommendations(id: string) {
    this.http.get<any[]>(`${environment.apiBase}/replays/${id}/recommendations`).subscribe({
      next: r => this.recommendations = r,
    });
  }

  private buildEmbedUrl(url: string): SafeResourceUrl | null {
    if (!url) return null;
    // YouTube
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (yt) return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${yt[1]}?autoplay=1`);
    // Vimeo
    const vm = url.match(/vimeo\.com\/(\d+)/);
    if (vm) return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${vm[1]}?autoplay=1`);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  formatDuration(s: number | null): string {
    if (!s) return '';
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return h > 0 ? `${h}h${String(m).padStart(2,'0')}` : `${m}:${String(sec).padStart(2,'0')}`;
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
