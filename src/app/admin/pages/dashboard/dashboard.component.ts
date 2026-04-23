import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  cards = [
    { label: 'Inscriptions', desc: 'Marathon, culte, lecture biblique', route: '/espace-admin/inscriptions', icon: '✎', color: '#4f7dff' },
    { label: 'Annonces', desc: 'Publier & envoyer aux inscrits', route: '/espace-admin/annonces', icon: '📢', color: '#f59e0b' },
    { label: 'Actualités', desc: 'Articles & publications', route: '/espace-admin/actualites', icon: '📰', color: '#10b981' },
    { label: 'Bibliothèque', desc: 'Livres & traités PDF', route: '/espace-admin/bibliotheque', icon: '📖', color: '#8b5cf6' },
    { label: 'Témoignages', desc: 'Modérer les soumissions', route: '/espace-admin/temoignages', icon: '💬', color: '#ef4444' },
  ];
}
