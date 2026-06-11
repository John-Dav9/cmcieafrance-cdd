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
import * as i0 from "@angular/core";
import * as i1 from "@angular/service-worker";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        {
            provide: APP_INITIALIZER,
            useFactory: (theme) => () => theme.load(),
            deps: [ThemeService],
            multi: true,
        },
    ], imports: [BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CulteModalComponent,
        ChatWidgetComponent,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: true, registrationStrategy: 'registerWhenStable:30000' })] });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
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
                        useFactory: (theme) => () => theme.load(),
                        deps: [ThemeService],
                        multi: true,
                    },
                ],
                bootstrap: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [HomeComponent,
        AboutComponent,
        ChurchLifeComponent,
        MessagesComponent,
        MarathonBibliqueComponent,
        RessourcesDecouvrirComponent,
        PremiereVisiteComponent], imports: [BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        CulteModalComponent,
        ChatWidgetComponent, i1.ServiceWorkerModule] }); })();
//# sourceMappingURL=app.module.js.map