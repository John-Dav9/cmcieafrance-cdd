import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../core/services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
    this.pagesService.getHome().subscribe((res) => (this.data = res));
  }
}