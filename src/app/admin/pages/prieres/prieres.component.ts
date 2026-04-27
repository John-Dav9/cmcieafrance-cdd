import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-prieres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prieres.component.html',
  styleUrls: ['./prieres.component.css'],
})
export class AdminPrieresComponent implements OnInit {
  private api = inject(ApiService);

  prieres: any[] = [];
  loading = true;

  readonly statutLabels: Record<string, string> = {
    en_attente:     'En attente',
    pris_en_charge: 'Pris en charge',
    ferme:          'Fermé',
  };

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.api.getPrieres().subscribe({
      next: (data: any) => { this.prieres = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  updateStatut(id: string, statut: string) {
    this.api.updatePriereStatut(id, statut).subscribe({ next: () => this.load() });
  }

  supprimer(id: string) {
    if (!confirm('Supprimer cette demande de prière ?')) return;
    this.api.deletePriere(id).subscribe({ next: () => this.load() });
  }

  get enAttente() { return this.prieres.filter(p => p.statut === 'en_attente'); }
  get prisEnCharge() { return this.prieres.filter(p => p.statut === 'pris_en_charge'); }
  get fermes() { return this.prieres.filter(p => p.statut === 'ferme'); }
}
