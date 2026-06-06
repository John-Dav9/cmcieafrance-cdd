import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import type { JoinResult } from './reunions.service';

@Injectable({ providedIn: 'root' })
export class MeetingService {

  private _isActive   = new BehaviorSubject<boolean>(false);
  private _isFloating = new BehaviorSubject<boolean>(false);
  private _isConnecting = new BehaviorSubject<boolean>(true);
  private _title      = new BehaviorSubject<string>('');
  private _timer      = new BehaviorSubject<string>('00:00');
  private _quality    = new BehaviorSubject<string>('high');

  isActive$     = this._isActive.asObservable();
  isFloating$   = this._isFloating.asObservable();
  isConnecting$ = this._isConnecting.asObservable();
  title$        = this._title.asObservable();
  timer$        = this._timer.asObservable();
  quality$      = this._quality.asObservable();

  jitsiApi: any = null;
  currentMeetingData: JoinResult | null = null;

  private elapsed = 0;
  private timerRef: any = null;

  constructor(private zone: NgZone, private router: Router) {}

  // ── Démarrer la réunion ────────────────────────────────
  startMeeting(title: string) {
    this._title.next(title);
    this._isActive.next(true);
    this._isConnecting.next(true);
    this._isFloating.next(false);
  }

  // ── Appelé quand Jitsi confirme la connexion ──────────
  onJoined(api: any) {
    this.jitsiApi = api;
    this._isConnecting.next(false);
    this.startTimer();
  }

  // ── Basculer mode flottant ────────────────────────────
  setFloating(val: boolean) {
    this._isFloating.next(val);
  }

  get isFloating(): boolean {
    return this._isFloating.value;
  }

  get isActive(): boolean {
    return this._isActive.value;
  }

  // ── Terminer la réunion ───────────────────────────────
  endMeeting() {
    this.jitsiApi?.dispose();
    this.jitsiApi = null;
    this._isActive.next(false);
    this._isFloating.next(false);
    this._isConnecting.next(true);
    this._title.next('');
    this.stopTimer();
    this.router.navigate(['/reunions']);
  }

  // ── Quitter (raccourci hangup) ────────────────────────
  hangup() {
    this.jitsiApi?.executeCommand('hangup');
  }

  // ── Qualité réseau ────────────────────────────────────
  setQuality(q: string) {
    this._quality.next(q);
  }

  // ── Timer ─────────────────────────────────────────────
  private startTimer() {
    this.elapsed = 0;
    this.timerRef = setInterval(() => {
      this.zone.run(() => {
        this.elapsed++;
        const h = Math.floor(this.elapsed / 3600);
        const m = Math.floor((this.elapsed % 3600) / 60).toString().padStart(2, '0');
        const s = (this.elapsed % 60).toString().padStart(2, '0');
        this._timer.next(h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`);
      });
    }, 1000);
  }

  private stopTimer() {
    clearInterval(this.timerRef);
    this._timer.next('00:00');
    this.elapsed = 0;
  }
}
