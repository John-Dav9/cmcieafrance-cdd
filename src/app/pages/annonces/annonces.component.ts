import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-annonces',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
})
export class AnnoncesComponent implements OnInit {
  private http = inject(HttpClient);
  private base = environment.apiBase;

  annonces: any[] = [];
  loading = true;

  ngOnInit() {
    this.http.get<any[]>(`${this.base}/annonces`).subscribe({
      next: (data) => { this.annonces = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }
}
