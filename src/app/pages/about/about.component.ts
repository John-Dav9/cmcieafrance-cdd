import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../core/services/pages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  data: any;

  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
    this.pagesService.getAbout().subscribe((res) => (this.data = res));
  }
}