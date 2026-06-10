import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-bibliotheque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css'],
})
export class BibliothequeComponent implements OnInit {
  private http = inject(HttpClient);
  private base = environment.apiBase;

  livres: any[] = [];
  loading = true;
  selected: any = null;

  ngOnInit() {
    this.http.get<any[]>(`${this.base}/bibliotheque`).subscribe({
      next: (data) => { this.livres = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  open(livre: any) {
    this.selected = livre;
  }

  close() {
    this.selected = null;
  }
}
