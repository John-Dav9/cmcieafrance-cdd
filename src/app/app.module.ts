import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ThemeService } from './core/services/theme.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { CulteModalComponent } from './shared/culte-modal/culte-modal.component';
import { ChatWidgetComponent } from './shared/chat-widget/chat-widget.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ChurchLifeComponent } from './pages/church-life/church-life.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MarathonBibliqueComponent } from './pages/marathon-biblique/marathon-biblique.component';
import { PremiereVisiteComponent } from './pages/premiere-visite/premiere-visite.component';
import { RessourcesDecouvrirComponent } from './pages/ressources-decouvrir/ressources-decouvrir.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ChurchLifeComponent,
    MessagesComponent,
    MarathonBibliqueComponent,
    RessourcesDecouvrirComponent,
    PremiereVisiteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CulteModalComponent,
    ChatWidgetComponent,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true, registrationStrategy: 'registerWhenStable:30000' }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: (theme: ThemeService) => () => theme.load(),
      deps: [ThemeService],
      multi: true,
    },
  ],
  bootstrap: [],
})
export class AppModule {}
