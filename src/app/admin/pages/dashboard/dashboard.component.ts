import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  private api = inject(ApiService);

  cards = [
    { label: 'Inscriptions',      desc: 'Marathon, culte, lecture biblique', route: '/espace-admin/inscriptions',  icon: '✎',  color: '#4f7dff' },
    { label: 'Annonces',          desc: 'Publier & envoyer aux inscrits',    route: '/espace-admin/annonces',      icon: '📢', color: '#f59e0b' },
    { label: 'Actualités',        desc: 'Articles & publications',           route: '/espace-admin/actualites',    icon: '📰', color: '#10b981' },
    { label: 'Bibliothèque',      desc: 'Livres & traités PDF',              route: '/espace-admin/bibliotheque',  icon: '📖', color: '#8b5cf6' },
    { label: 'Témoignages',       desc: 'Modérer les soumissions',           route: '/espace-admin/temoignages',   icon: '💬', color: '#ef4444' },
    { label: 'Marathons',         desc: 'Créer & gérer les marathons',       route: '/espace-admin/marathon',      icon: '🏃', color: '#1D546C' },
    { label: 'Demandes de prière',desc: 'Voir & prendre en charge',          route: '/espace-admin/prieres',       icon: '🙏', color: '#7c3aed' },
    { label: 'Newsletter',        desc: 'Abonnés & envois',                  route: '/espace-admin/newsletter',    icon: '📧', color: '#0891b2' },
  ];

  stats = {
    marathonsActifs: 0,
    totalInscritsMarathon: 0,
    demandesPriere: 0,
    abonnesNewsletter: 0,
    tauxCompletionMoyen: 0,
  };

  marathonsActifs: any[] = [];
  loading = true;

  ngOnInit() {
    this.loadStats();
  }

  private loadStats() {
    this.loading = true;

    this.api.getMarathonsAdmin().subscribe({
      next: (marathons: any) => {
        const actifs = marathons.filter((m: any) => m.statut === 'ACTIF');
        this.marathonsActifs = actifs.slice(0, 5);
        this.stats.marathonsActifs = actifs.length;
        this.stats.totalInscritsMarathon = marathons.reduce((s: number, m: any) => s + (m.nbInscrits ?? 0), 0);

        const completed = marathons.filter((m: any) => m.nbInscrits > 0);
        if (completed.length > 0) {
          this.stats.tauxCompletionMoyen = Math.round(
            completed.reduce((s: number, m: any) => s + (m.completionRate ?? 0), 0) / completed.length,
          );
        }
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });

    this.api.getPrieres().subscribe({
      next: (data: any) => {
        this.stats.demandesPriere = data.filter((p: any) => p.statut === 'en_attente').length;
      },
      error: () => {},
    });

    this.api.getNewsletterSubscribers().subscribe({
      next: (data: any) => { this.stats.abonnesNewsletter = data.length; },
      error: () => {},
    });
  }
}
