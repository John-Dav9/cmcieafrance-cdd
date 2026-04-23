import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ChurchLifeComponent } from './pages/church-life/church-life.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MarathonBibliqueComponent } from './pages/marathon-biblique/marathon-biblique.component';
import { PremiereVisiteComponent } from './pages/premiere-visite/premiere-visite.component';
import { RessourcesDecouvrirComponent } from './pages/ressources-decouvrir/ressources-decouvrir.component';
import { MinistereEnfantsComponent } from './pages/ministere-enfants/ministere-enfants.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nous-connaitre', component: AboutComponent },
  { path: 'vie-de-leglise', component: ChurchLifeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'marathon-biblique', component: MarathonBibliqueComponent },
  { path: 'premiere-visite', component: PremiereVisiteComponent },
  { path: 'ressources/decouvrir', component: RessourcesDecouvrirComponent},
  { path: 'ministere-enfants', component: MinistereEnfantsComponent },
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
    path: 'mon-espace',
    loadComponent: () =>
      import('./pages/user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent),
  },
  {
    path: 'espace-admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
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