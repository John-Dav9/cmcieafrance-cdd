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
    ],
  },
];
