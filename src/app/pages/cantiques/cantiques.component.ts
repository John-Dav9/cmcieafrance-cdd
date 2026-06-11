import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cantiques',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cantiques.component.html',
  styleUrls: ['./cantiques.component.css'],
})
export class CantiquesComponent implements OnInit {
  private http = inject(HttpClient);
  private base = environment.apiBase;

  cantiques: any[] = [];
  loading = true;
  selected: any = null;
  searchQuery = '';
  private search$ = new Subject<string>();

  ngOnInit() {
    this.load('');

    this.search$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((q) => this.http.get<any[]>(`${this.base}/cantiques/public?q=${encodeURIComponent(q)}`)),
    ).subscribe({
      next: (data) => { this.cantiques = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  load(q: string) {
    this.loading = true;
    this.http.get<any[]>(`${this.base}/cantiques/public?q=${encodeURIComponent(q)}`).subscribe({
      next: (data) => { this.cantiques = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  onSearch() {
    this.loading = true;
    this.search$.next(this.searchQuery);
  }

  open(c: any) { this.selected = c; }
  close() { this.selected = null; }
}
