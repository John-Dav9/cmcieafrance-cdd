import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ChurchLifeComponent } from './pages/church-life/church-life.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MarathonBibliqueComponent } from './pages/marathon-biblique/marathon-biblique.component';
import { PremiereVisiteComponent } from './pages/premiere-visite/premiere-visite.component';
import { RessourcesDecouvrirComponent } from './pages/ressources-decouvrir/ressources-decouvrir.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nous-connaitre', component: AboutComponent },
  { path: 'vie-de-leglise', component: ChurchLifeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'marathon-biblique', component: MarathonBibliqueComponent },
  { path: 'premiere-visite', component: PremiereVisiteComponent },
  { path: 'ressources/decouvrir', component: RessourcesDecouvrirComponent},
  { path: 'ministere-enfants', redirectTo: '/departements', pathMatch: 'full' },
  { path: 'actualites', loadComponent: () => import('./pages/actualites/actualites.component').then(m => m.ActualitesComponent) },
  {
  path: 'actualites/marathon-biblique',
  loadComponent: () =>
    import('./pages/articles/marathon-biblique/marathon-biblique.component')
      .then(m => m.MarathonBibliqueComponent),
  },
  {
  path: 'actualites/voeux-2026-pasteur-fernand',
  loadComponent: () =>
    import('./pages/articles/voeux2026-pasteur-fernand/voeux2026-pasteur-fernand.component')
      .then(m => m.Voeux2026PasteurFernandComponent),
  },

  {
    path: 'departements',
    loadComponent: () => import('./pages/departements/departements.component').then(m => m.DepartementsComponent),
  },
  {
    path: 'departements/:slug',
    loadComponent: () => import('./pages/departements/departement-detail/departement-detail.component').then(m => m.DepartementDetailComponent),
  },
  {
    path: 'mon-espace',
    loadComponent: () =>
      import('./pages/user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent),
  },
  {
    path: 'espace-admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: 'prieres',
    loadComponent: () => import('./pages/prieres/prieres.component').then(m => m.PrieresComponent),
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/legal/mentions-legales.component').then(m => m.MentionsLegalesComponent),
  },
  {
    path: 'politique-confidentialite',
    loadComponent: () => import('./pages/legal/politique-confidentialite.component').then(m => m.PolitiqueConfidentialiteComponent),
  },
  // ── Réunions ──────────────────────────────────────────────────────────────
  {
    path: 'reunions',
    loadComponent: () => import('./pages/reunions/reunions-list/reunions-list.component')
      .then(m => m.ReunionsListComponent),
  },
  {
    path: 'reunions/:id/salle',
    loadComponent: () => import('./pages/reunions/reunion-room/reunion-room.component')
      .then(m => m.ReunionRoomComponent),
  },

  // ── Auth membre ───────────────────────────────────────────────────────────
  {
    path: 'auth/login',
    loadComponent: () => import('./pages/auth/login/login.component')
      .then(m => m.LoginComponent),
  },
  {
    path: 'auth/verify-otp',
    loadComponent: () => import('./pages/auth/verify-otp/verify-otp.component')
      .then(m => m.VerifyOtpComponent),
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./pages/auth/register/register.component')
      .then(m => m.RegisterComponent),
  },
  {
    path: 'auth/magic-link',
    loadComponent: () => import('./pages/auth/magic-link/magic-link.component')
      .then(m => m.MagicLinkComponent),
  },
  {
    path: 'auth/magic-link-sent',
    loadComponent: () => import('./pages/auth/magic-link/magic-link.component')
      .then(m => m.MagicLinkComponent),
  },

  {
    path: 'en-direct',
    loadComponent: () => import('./pages/en-direct/en-direct.component').then(m => m.EnDirectComponent),
  },
  {
    path: 'bible',
    loadComponent: () => import('./pages/bible/bible.component').then(m => m.BibleComponent),
  },
  {
    path: 'groupes-de-cellule',
    loadComponent: () => import('./pages/cell-groups-public/cell-groups-public.component').then(m => m.CellGroupsPublicComponent),
  },
  {
    path: 'replays',
    loadComponent: () => import('./pages/replay/replay.component').then(m => m.ReplayComponent),
  },
  {
    path: 'temoignages',
    loadComponent: () => import('./pages/temoignages/temoignages.component').then(m => m.TemoignagesComponent),
  },
  {
    path: 'bibliotheque',
    loadComponent: () => import('./pages/bibliotheque/bibliotheque.component').then(m => m.BibliothequeComponent),
  },
  {
    path: 'annonces',
    loadComponent: () => import('./pages/annonces/annonces.component').then(m => m.AnnoncesComponent),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
})
],
  exports: [RouterModule],
})
export class AppRoutingModule {}