import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PushNotificationsService {
  constructor(private swPush: SwPush, private http: HttpClient) {}

  get supported() {
    return this.swPush.isEnabled;
  }

  async isSubscribed() {
    return Boolean(await firstValueFrom(this.swPush.subscription));
  }

  async subscribe() {
    const config = await firstValueFrom(this.http.get<{ enabled: boolean; publicKey: string | null }>(
      `${environment.apiBase}/notifications/configuration`,
    ));
    if (!config.enabled || !config.publicKey) throw new Error('Notifications non configurées');
    const subscription = await this.swPush.requestSubscription({ serverPublicKey: config.publicKey });
    await firstValueFrom(this.http.post(
      `${environment.apiBase}/notifications/subscriptions`,
      subscription.toJSON(),
    ));
  }

  async unsubscribe() {
    const subscription = await firstValueFrom(this.swPush.subscription);
    if (!subscription) return;
    await firstValueFrom(this.http.delete(
      `${environment.apiBase}/notifications/subscriptions`,
      { body: { endpoint: subscription.endpoint } },
    ));
    await subscription.unsubscribe();
  }
}
