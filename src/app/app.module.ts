import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ThemeService } from './core/services/theme.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CulteModalComponent } from './shared/culte-modal/culte-modal.component';
import { ChatWidgetComponent } from './shared/chat-widget/chat-widget.component';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ChurchLifeComponent } from './pages/church-life/church-life.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MarathonBibliqueComponent } from './pages/marathon-biblique/marathon-biblique.component';
import { PremiereVisiteComponent } from './pages/premiere-visite/premiere-visite.component';
import { RessourcesDecouvrirComponent } from './pages/ressources-decouvrir/ressources-decouvrir.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ChurchLifeComponent,
    MessagesComponent,
    MarathonBibliqueComponent,
    RessourcesDecouvrirComponent,
    PremiereVisiteComponent
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    {
      provide: APP_INITIALIZER,
      useFactory: (theme: ThemeService) => () => theme.load(),
      deps: [ThemeService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
