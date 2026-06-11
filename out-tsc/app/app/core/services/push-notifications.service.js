import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/service-worker";
import * as i2 from "@angular/common/http";
export class PushNotificationsService {
    constructor(swPush, http) {
        this.swPush = swPush;
        this.http = http;
    }
    get supported() {
        return this.swPush.isEnabled;
    }
    async isSubscribed() {
        return Boolean(await firstValueFrom(this.swPush.subscription));
    }
    async subscribe() {
        const config = await firstValueFrom(this.http.get(`${environment.apiBase}/notifications/configuration`));
        if (!config.enabled || !config.publicKey)
            throw new Error('Notifications non configurées');
        const subscription = await this.swPush.requestSubscription({ serverPublicKey: config.publicKey });
        await firstValueFrom(this.http.post(`${environment.apiBase}/notifications/subscriptions`, subscription.toJSON()));
    }
    async unsubscribe() {
        const subscription = await firstValueFrom(this.swPush.subscription);
        if (!subscription)
            return;
        await firstValueFrom(this.http.delete(`${environment.apiBase}/notifications/subscriptions`, { body: { endpoint: subscription.endpoint } }));
        await subscription.unsubscribe();
    }
}
PushNotificationsService.ɵfac = function PushNotificationsService_Factory(t) { return new (t || PushNotificationsService)(i0.ɵɵinject(i1.SwPush), i0.ɵɵinject(i2.HttpClient)); };
PushNotificationsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PushNotificationsService, factory: PushNotificationsService.ɵfac, providedIn: 'root' });
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PushNotificationsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SwPush }, { type: i2.HttpClient }], null); })();
//# sourceMappingURL=push-notifications.service.js.map