import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent {
  private auth = inject(AdminAuthService);

  menuOpen = false;

  navItems = [
    { label: 'Tableau de bord', icon: '⊞', route: '/espace-admin/dashboard' },
    { label: 'Inscriptions',    icon: '✎', route: '/espace-admin/inscriptions' },
    { label: 'Annonces',        icon: '📢', route: '/espace-admin/annonces' },
    { label: 'Actualités',      icon: '📰', route: '/espace-admin/actualites' },
    { label: 'Bibliothèque',    icon: '📖', route: '/espace-admin/bibliotheque' },
    { label: 'Témoignages',     icon: '💬', route: '/espace-admin/temoignages' },
    { label: 'Marathons bibliques', icon: '📅', route: '/espace-admin/marathon' },
    { label: 'Horaires des cultes', icon: '🕐', route: '/espace-admin/cultes' },
    { label: 'Prochain culte présentiel', icon: '📅', route: '/espace-admin/prochain-culte' },
    { label: 'Thème & couleurs',   icon: '🎨', route: '/espace-admin/theme' },
    { label: 'Pages & contenu',    icon: '✏️', route: '/espace-admin/pages' },
  ];

  logout() {
    this.auth.logout();
  }
}
