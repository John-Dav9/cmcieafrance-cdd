import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

interface BibleResult { reference: string; text: string; }

@Component({
  selector: 'app-bible',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss'],
})
export class BibleComponent implements OnInit {
  query = '';
  results: BibleResult[] = [];
  classics: BibleResult[] = [];
  selected: BibleResult | null = null;
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<BibleResult[]>(`${environment.apiBase}/bible/classics`).subscribe({
      next: v => this.classics = v,
    });
  }

  search() {
    if (this.query.trim().length < 2) return;
    this.loading = true;
    this.http.get<BibleResult[]>(`${environment.apiBase}/bible/search?q=${encodeURIComponent(this.query)}`).subscribe({
      next: r => { this.results = r; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  select(v: BibleResult) { this.selected = v; }
  clearSelected() { this.selected = null; }
}
