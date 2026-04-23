import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-inscriptions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css'],
})
export class InscriptionsComponent implements OnInit {
  private api = inject(ApiService);

  inscriptions: any[] = [];
  loading = true;
  filtre = '';

  types = [
    { value: '', label: 'Tous' },
    { value: 'MARATHON', label: 'Marathon biblique' },
    { value: 'CULTE', label: 'Venir au culte' },
    { value: 'LECTURE_BIBLIQUE', label: 'Lecture biblique' },
  ];

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getInscriptions(this.filtre || undefined).subscribe({
      next: (data: any) => { this.inscriptions = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  delete(id: string) {
    if (!confirm('Supprimer cette inscription ?')) return;
    this.api.deleteInscription(id).subscribe(() => {
      this.inscriptions = this.inscriptions.filter((i) => i.id !== id);
    });
  }

  typeLabel(type: string) {
    return this.types.find((t) => t.value === type)?.label ?? type;
  }
}
