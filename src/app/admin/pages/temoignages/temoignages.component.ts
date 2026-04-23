import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-temoignages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.css'],
})
export class TemoignagesComponent implements OnInit {
  private api = inject(ApiService);

  temoignages: any[] = [];
  loading = true;
  filtre = 'EN_ATTENTE';

  statuts = [
    { value: '', label: 'Tous' },
    { value: 'EN_ATTENTE', label: 'En attente' },
    { value: 'APPROUVE', label: 'Approuvés' },
    { value: 'REJETE', label: 'Rejetés' },
  ];

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getTemoignagesAdmin(this.filtre || undefined).subscribe({
      next: (data: any) => { this.temoignages = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  approuver(id: string) {
    this.api.modererTemoignage(id, 'APPROUVE').subscribe(() => {
      const t = this.temoignages.find((t) => t.id === id);
      if (t) t.statut = 'APPROUVE';
    });
  }

  rejeter(id: string) {
    this.api.modererTemoignage(id, 'REJETE').subscribe(() => {
      const t = this.temoignages.find((t) => t.id === id);
      if (t) t.statut = 'REJETE';
    });
  }

  delete(id: string) {
    if (!confirm('Supprimer ce témoignage ?')) return;
    this.api.deleteTemoignage(id).subscribe(() => {
      this.temoignages = this.temoignages.filter((t) => t.id !== id);
    });
  }

  statutLabel(s: string) {
    return this.statuts.find((st) => st.value === s)?.label ?? s;
  }
}
