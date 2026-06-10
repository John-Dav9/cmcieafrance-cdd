import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface MemberUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  access_token: string;
}

@Injectable({ providedIn: 'root' })
export class MemberAuthService {
  private readonly TOKEN_KEY = 'cmciea_member_token';
  private currentMember$ = new BehaviorSubject<MemberUser | null>(this.loadMember());

  constructor(private http: HttpClient) {}

  private loadMember(): MemberUser | null {
    try {
      const raw = localStorage.getItem(this.TOKEN_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  // ── Vérifier si l'email existe en BDD ────────────────────
  checkEmail(email: string): Observable<{
    exists: boolean;
    hasPhone?: boolean;
    isOpen?: boolean;
  }> {
    return this.http.post<any>(`${environment.apiBase}/auth/check-email`, { email });
  }

  // ── Inscription rapide (nouveau membre) ───────────────────
  register(data: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    city?: string;
  }): Observable<any> {
    return this.http.post<any>(`${environment.apiBase}/auth/register`, data).pipe(
      tap(res => this.setSession(res)),
    );
  }

  guest(displayName: string): Observable<any> {
    return this.http.post<any>(`${environment.apiBase}/auth/guest`, { displayName }).pipe(
      tap(res => this.setSession(res)),
    );
  }

  acceptMeetingInvite(token: string): Observable<{ access_token: string; meetingId: string; member: MemberUser }> {
    return this.http.post<any>(
      `${environment.apiBase}/reunions/invitations/accept`,
      { token },
    ).pipe(tap(res => this.setSession(res)));
  }

  // ── Anciens endpoints (conservés pour compatibilité) ──────
  sendOtp(email: string): Observable<{ method: string; message: string }> {
    return this.http.post<any>(`${environment.apiBase}/auth/send-otp`, { email });
  }

  verifyOtp(email: string, code: string): Observable<{ access_token: string; member: MemberUser }> {
    return this.http.post<any>(`${environment.apiBase}/auth/verify-otp`, { email, code }).pipe(
      tap(res => this.setSession(res)),
    );
  }

  verifyMagicLink(token: string): Observable<{ access_token: string; member: MemberUser }> {
    return this.http.post<any>(`${environment.apiBase}/auth/magic-link/verify`, { token }).pipe(
      tap(res => this.setSession(res)),
    );
  }

  // ── Session ───────────────────────────────────────────────
  private setSession(res: { access_token: string; member: MemberUser }) {
    const user: MemberUser = { ...res.member, access_token: res.access_token };
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(user));
    this.currentMember$.next(user);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentMember$.next(null);
  }

  getToken(): string | null {
    return this.currentMember$.value?.access_token ?? null;
  }

  isLoggedIn(): boolean {
    const user = this.currentMember$.value;
    if (!user) return false;
    try {
      const payload = JSON.parse(atob(user.access_token.split('.')[1]));
      if (payload.exp * 1000 < Date.now()) { this.logout(); return false; }
      return true;
    } catch { return false; }
  }

  isAdmin(): boolean {
    const role = this.currentMember$.value?.role;
    return role === 'admin' || role === 'super_admin';
  }

  get member(): MemberUser | null { return this.currentMember$.value; }
  get member$(): Observable<MemberUser | null> { return this.currentMember$.asObservable(); }
}
