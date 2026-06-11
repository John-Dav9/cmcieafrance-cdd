import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../core/services/pages.service';
import { PageContentService } from '../../core/services/page-content.service';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  data: any;
  c: any = {};

  constructor(
    private pagesService: PagesService,
    private pageContent: PageContentService,
  ) {}

  ngOnInit(): void {
    this.pagesService.getAbout().subscribe((res) => (this.data = res));
    this.pageContent.getPage('nous-connaitre').subscribe((res) => { if (res) this.c = res; });
  }

  get histoireTitle()   { return this.c.histoireTitle   || (this.data?.histoire?.title)   || 'Notre histoire'; }
  get histoireContent() { return this.c.histoireContent || (this.data?.histoire?.content) || ''; }
  get visionTitle()     { return this.c.visionTitle     || (this.data?.vision?.title)     || 'Notre vision'; }
  get visionContent()   { return this.c.visionContent   || (this.data?.vision?.content)   || ''; }
}
