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
    { label: 'Membres',          icon: '👥', route: '/espace-admin/membres' },
    { label: 'Paramètres',       icon: '⚙️', route: '/espace-admin/parametres' },
    { label: 'Inscriptions',    icon: '✎', route: '/espace-admin/inscriptions' },
    { label: 'Annonces',        icon: '📢', route: '/espace-admin/annonces' },
    { label: 'Actualités',      icon: '📰', route: '/espace-admin/actualites' },
    { label: 'Bibliothèque',    icon: '📖', route: '/espace-admin/bibliotheque' },
    { label: 'Témoignages',     icon: '💬', route: '/espace-admin/temoignages' },
    { label: 'Marathons bibliques', icon: '📅', route: '/espace-admin/marathon' },
    { label: 'Horaires des cultes', icon: '🕐', route: '/espace-admin/cultes' },
    { label: 'Prochain culte présentiel', icon: '📅', route: '/espace-admin/prochain-culte' },
    { label: 'Modèles d\'emails',  icon: '✉️', route: '/espace-admin/email-templates' },
    { label: 'Demandes de prière', icon: '🙏', route: '/espace-admin/prieres' },
    { label: 'Newsletter',         icon: '📧', route: '/espace-admin/newsletter' },
    { label: 'Messages / Prédications', icon: '🎙️', route: '/espace-admin/messages' },
    { label: 'Réunions en ligne',   icon: '📹', route: '/espace-admin/reunions' },
    { label: 'Replays / Sermons',   icon: '▶️', route: '/espace-admin/replays' },
    { label: 'Groupes de cellule',  icon: '🏘️', route: '/espace-admin/cell-groups' },
    { label: 'Journal d\'audit',    icon: '📋', route: '/espace-admin/audit' },
    { label: 'Statistiques',        icon: '📊', route: '/espace-admin/stats' },
    { label: 'Thème & couleurs',   icon: '🎨', route: '/espace-admin/theme' },
    { label: 'Pages & contenu',    icon: '✏️', route: '/espace-admin/pages' },
  ];

  logout() {
    this.auth.logout();
  }
}
