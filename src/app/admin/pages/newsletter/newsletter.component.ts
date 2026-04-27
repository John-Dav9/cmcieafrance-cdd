import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class AdminNewsletterComponent implements OnInit {
  private api = inject(ApiService);

  subscribers: any[] = [];
  loading = true;

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getNewsletterSubscribers().subscribe({
      next: (data: any) => { this.subscribers = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  desabonner(id: string) {
    if (!confirm('Désabonner cet abonné ?')) return;
    this.api.deleteNewsletterSubscriber(id).subscribe({ next: () => this.load() });
  }

  exportCSV() {
    const header = ['Prénom', 'Email', 'Inscrit le'];
    const rows = this.subscribers.map(s => [
      s.prenom ?? '',
      s.email,
      s.createdAt ? new Date(s.createdAt).toLocaleDateString('fr-FR') : '',
    ].join(';'));
    const csv = [header.join(';'), ...rows].join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-abonnes.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
}
