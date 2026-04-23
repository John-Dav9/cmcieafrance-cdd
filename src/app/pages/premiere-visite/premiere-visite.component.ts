import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../core/services/page-content.service';

@Component({
  selector: 'app-premiere-visite',
  templateUrl: './premiere-visite.component.html',
  styleUrls: ['./premiere-visite.component.css'],
})
export class PremiereVisiteComponent implements OnInit {
  c: any = {};

  constructor(private pageContent: PageContentService) {}

  ngOnInit(): void {
    this.pageContent.getPage('premiere-visite').subscribe((res) => { if (res) this.c = res; });
  }

  get heroTitle()      { return this.c.heroTitle      || 'PREMIÈRE VISITE'; }
  get heroSubtitle()   { return this.c.intro          || 'Bienvenue à la CMCIEA-FRANCE. Rejoins-nous en ligne et en présentiel à Paris.'; }
  get infosPratiques() { return this.c.infosPratiques || ''; }
}
