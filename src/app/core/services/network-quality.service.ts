import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

export type ConnectionQuality = 'high' | 'medium' | 'low' | 'critical';

@Injectable({ providedIn: 'root' })
export class NetworkQualityService {
  readonly quality$ = new BehaviorSubject<ConnectionQuality>('high');

  private monitor: Subscription | null = null;
  private connection: any;
  private readonly connectionListener = () => this.measure();

  constructor(private http: HttpClient) {}

  start() {
    if (this.monitor) return;
    this.connection = (navigator as any).connection;
    this.connection?.addEventListener?.('change', this.connectionListener);
    this.measure();
    this.monitor = interval(30000).subscribe(() => this.measure());
  }

  stop() {
    this.monitor?.unsubscribe();
    this.monitor = null;
    this.connection?.removeEventListener?.('change', this.connectionListener);
  }

  private measure() {
    if (!navigator.onLine) {
      this.quality$.next('critical');
      return;
    }

    const downlink = Number(this.connection?.downlink);
    if (Number.isFinite(downlink) && downlink > 0) {
      this.quality$.next(
        downlink > 2 ? 'high' :
        downlink > 0.5 ? 'medium' :
        downlink > 0.1 ? 'low' : 'critical',
      );
      return;
    }

    const startedAt = performance.now();
    this.http.get(`${environment.apiBase}/health`, { responseType: 'text' }).subscribe({
      next: () => {
        const latency = performance.now() - startedAt;
        this.quality$.next(latency < 300 ? 'high' : latency < 800 ? 'medium' : 'low');
      },
      error: () => this.quality$.next('critical'),
    });
  }
}
