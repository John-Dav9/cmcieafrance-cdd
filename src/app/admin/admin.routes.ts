import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'inscriptions',
        loadComponent: () =>
          import('./pages/inscriptions/inscriptions.component').then((m) => m.InscriptionsComponent),
      },
      {
        path: 'annonces',
        loadComponent: () =>
          import('./pages/annonces/annonces.component').then((m) => m.AnnoncesComponent),
      },
      {
        path: 'actualites',
        loadComponent: () =>
          import('./pages/actualites/actualites.component').then((m) => m.AdminActualitesComponent),
      },
      {
        path: 'bibliotheque',
        loadComponent: () =>
          import('./pages/bibliotheque/bibliotheque.component').then((m) => m.BibliothequeComponent),
      },
      {
        path: 'temoignages',
        loadComponent: () =>
          import('./pages/temoignages/temoignages.component').then((m) => m.TemoignagesComponent),
      },
      {
        path: 'theme',
        loadComponent: () =>
          import('./pages/theme-editor/theme-editor.component').then((m) => m.ThemeEditorComponent),
      },
      {
        path: 'pages',
        loadComponent: () =>
          import('./pages/pages-editor/pages-editor.component').then((m) => m.PagesEditorComponent),
      },
      {
        path: 'marathon',
        loadComponent: () =>
          import('./pages/marathon/marathon-admin.component').then((m) => m.MarathonAdminComponent),
      },
      {
        path: 'cultes',
        loadComponent: () =>
          import('./pages/cultes/cultes-editor.component').then((m) => m.CultesEditorComponent),
      },
      {
        path: 'prochain-culte',
        loadComponent: () =>
          import('./pages/prochain-culte/prochain-culte.component').then((m) => m.ProchainCulteComponent),
      },
      {
        path: 'email-templates',
        loadComponent: () =>
          import('./pages/email-templates/email-templates.component').then((m) => m.EmailTemplatesComponent),
      },
      {
        path: 'prieres',
        loadComponent: () =>
          import('./pages/prieres/prieres.component').then((m) => m.AdminPrieresComponent),
      },
      {
        path: 'newsletter',
        loadComponent: () =>
          import('./pages/newsletter/newsletter.component').then((m) => m.AdminNewsletterComponent),
      },
      {
        path: 'membres',
        loadComponent: () =>
          import('./pages/membres/membres.component').then((m) => m.AdminMembresComponent),
      },
      {
        path: 'parametres',
        loadComponent: () =>
          import('./pages/parametres/parametres.component').then((m) => m.AdminParametresComponent),
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./pages/messages/messages.component').then((m) => m.AdminMessagesComponent),
      },
      {
        path: 'reunions',
        loadComponent: () =>
          import('./pages/reunions/reunions-admin.component').then((m) => m.ReunionsAdminComponent),
      },
      {
        path: 'replays',
        loadComponent: () =>
          import('./pages/replays/replays.component').then((m) => m.AdminReplaysComponent),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('./pages/stats/stats.component').then((m) => m.AdminStatsComponent),
      },
      {
        path: 'audit',
        loadComponent: () =>
          import('./pages/audit/audit.component').then((m) => m.AuditComponent),
      },
      {
        path: 'cell-groups',
        loadComponent: () =>
          import('./pages/cell-groups/cell-groups.component').then((m) => m.CellGroupsAdminComponent),
      },
      {
        path: 'mentorship',
        loadComponent: () =>
          import('./pages/mentorship/mentorship.component').then((m) => m.MentorshipAdminComponent),
      },
    ],
  },
];
