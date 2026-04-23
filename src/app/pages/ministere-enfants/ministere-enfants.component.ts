import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageContentService } from '../../core/services/page-content.service';

@Component({
  selector: 'ministere-enfants',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './ministere-enfants.component.html',
  styleUrl: './ministere-enfants.component.css',
})
export class MinistereEnfantsComponent implements OnInit {
  c: any = {};

  constructor(private pageContent: PageContentService) {}

  ngOnInit(): void {
    this.pageContent.getPage('ministere-enfants').subscribe((res) => { if (res) this.c = res; });
  }

  get heroKicker()  { return this.c.heroKicker  || 'Département des enfants et des jeunes'; }
  get heroTitle()   { return this.c.heroTitle    || 'Que personne ne méprise ta jeunesse.'; }
  get missionText() { return this.c.description  || ''; }
  get imageUrl()    { return this.c.imageUrl      || ''; }
}
