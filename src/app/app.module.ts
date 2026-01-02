import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ChurchLifeComponent } from './pages/church-life/church-life.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MarathonBibliqueComponent } from './pages/marathon-biblique/marathon-biblique.component';
import { PremiereVisiteComponent } from './pages/premiere-visite/premiere-visite.component';
import { RessourcesDecouvrirComponent } from './pages/ressources-decouvrir/ressources-decouvrir.component';

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
    CommonModule, // ✅ OBLIGATOIRE pour *ngFor
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
