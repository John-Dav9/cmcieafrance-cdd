import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cell-groups-public',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell-groups-public.component.html',
  styleUrls: ['./cell-groups-public.component.scss'],
})
export class CellGroupsPublicComponent implements OnInit {
  groups: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(`${environment.apiBase}/cell-groups`).subscribe({
      next: g => { this.groups = g; this.loading = false; },
      error: () => this.loading = false,
    });
  }
}
