import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../core/services/pages.service';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(
    private pagesService: PagesService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.pagesService.getHome().subscribe((res) => (this.data = res));

    /* ✅ TITLE (très important pour Google) */
    this.titleService.setTitle(
      'CMCIEA France | Communauté Missionnaire Chrétienne Internationale et Eglises Associées en France'
    );

    /* ✅ META DESCRIPTION */
    this.metaService.updateTag({
      name: 'description',
      content:
        'CMCIEA France – Église Chercheurs de Dieu. Communauté Missionnaire Chrétienne Internationale. ' +
        'Marathon biblique, enseignements bibliques, prière, célébrations et ressources spirituelles en ligne.'
    });

    /* ✅ META KEYWORDS (invisible mais utile pour cohérence SEO) */
    this.metaService.updateTag({
      name: 'keywords',
      content: `
        cmciea,
        cmciea france,
        cmci france,
        cmciea france chercheurs de dieu,
        cmciea chercheurs de dieu,
        communauté missionnaire chrétienne internationale,
        église cmciea france,
        église chercheurs de dieu,
        cmciea paris,
        cmciea france marathon biblique
      `
    });

    /* ✅ SEO SÉMANTIQUE SUPPLÉMENTAIRE (optionnel mais pro) */
    this.metaService.updateTag({
      property: 'og:title',
      content: 'CMCIEA France – Église Chercheurs de Dieu'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Église CMCIEA France – Chercheurs de Dieu. Une communauté enracinée dans la Parole de Dieu.'
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      property: 'og:locale',
      content: 'fr_FR'
    });
  }
}