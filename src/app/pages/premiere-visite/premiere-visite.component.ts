import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageContentService } from '../../core/services/page-content.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-premiere-visite',
  templateUrl: './premiere-visite.component.html',
  styleUrls: ['./premiere-visite.component.css'],
})
export class PremiereVisiteComponent implements OnInit {
  c: any = {};
  nextCulte: any = null;

  constructor(private pageContent: PageContentService, private http: HttpClient) {}

  ngOnInit(): void {
    this.pageContent.getPage('premiere-visite').subscribe((res) => { if (res) this.c = res; });
    this.http.get<any>(`${environment.apiBase}/settings/next-culte`).subscribe({
      next: (data) => { if (data?.date) this.nextCulte = data; },
      error: () => {},
    });
  }

  get heroTitle()      { return this.c.heroTitle      || 'PREMIÈRE VISITE'; }
  get heroSubtitle()   { return this.c.intro          || 'Bienvenue à la CMCIEA-FRANCE. Rejoins-nous en ligne et en présentiel à Paris.'; }
  get infosPratiques() { return this.c.infosPratiques || ''; }

  get calendarUrl(): string | null {
    if (!this.nextCulte?.dateISO) return null;
    const start = new Date(this.nextCulte.dateISO);
    const end   = new Date(start.getTime() + 2 * 60 * 60 * 1000); // +2h
    const fmt   = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const title = encodeURIComponent(this.nextCulte.sujet || 'Culte CMCIEA-France');
    const loc   = encodeURIComponent('11 rue de l\'Étoile, 75017 Paris');
    const desc  = encodeURIComponent(this.nextCulte.message || 'Culte en présentiel CMCIEA-France Chercheurs de Dieu');
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&location=${loc}&details=${desc}`;
  }
}
