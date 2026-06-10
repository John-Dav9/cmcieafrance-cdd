import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
})
export class AuditComponent implements OnInit {
  logs: any[] = [];
  loading = true;
  filterAction = '';
  filterType = '';

  resourceTypes = ['reunion', 'membre', 'replay', 'streaming', 'cell-group'];

  constructor(private http: HttpClient) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    const params = new URLSearchParams();
    if (this.filterAction) params.set('action', this.filterAction);
    if (this.filterType)   params.set('resourceType', this.filterType);
    params.set('limit', '200');

    this.http.get<any[]>(`${environment.apiBase}/audit?${params}`).subscribe({
      next: l => { this.logs = l; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  formatDate(d: string) {
    return new Date(d).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  actionColor(action: string): string {
    if (action.includes('create') || action.includes('start')) return 'green';
    if (action.includes('delete') || action.includes('kick') || action.includes('stop')) return 'red';
    if (action.includes('update') || action.includes('grant')) return 'orange';
    return 'gray';
  }
}
