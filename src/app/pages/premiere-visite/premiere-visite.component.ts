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
}
