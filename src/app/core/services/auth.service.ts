import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AuthUser {
  email: string;
  fullName?: string;
  role: string;
  access_token: string;
}

export interface AdminLoginChallenge {
  requires_2fa: true;
  challenge: string;
  email_hint: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'cmciea_token';
  private currentUser$ = new BehaviorSubject<AuthUser | null>(this.loadUser());

  constructor(private http: HttpClient) {}

  private loadUser(): AuthUser | null {
    try {
      const legacy = localStorage.getItem(this.TOKEN_KEY);
      if (legacy) {
        sessionStorage.setItem(this.TOKEN_KEY, legacy);
        localStorage.removeItem(this.TOKEN_KEY);
      }
      const raw = sessionStorage.getItem(this.TOKEN_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  login(email: string, password: string): Observable<AuthUser | AdminLoginChallenge> {
    return this.http.post<AuthUser | AdminLoginChallenge>(
      `${environment.apiBase}/auth/login`,
      { email, password },
    ).pipe(
      tap(result => {
        if ('access_token' in result) this.setSession(result);
      }),
    );
  }

  verifyAdminLogin(challenge: string, code: string): Observable<AuthUser> {
    return this.http.post<AuthUser>(
      `${environment.apiBase}/auth/login/verify`,
      { challenge, code },
    ).pipe(tap(user => this.setSession(user)));
  }

  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUser$.next(null);
  }

  revokeSession(): Observable<{ loggedOut: boolean }> {
    return this.http.post<{ loggedOut: boolean }>(`${environment.apiBase}/auth/logout`, {});
  }

  getToken(): string | null {
    return this.currentUser$.value?.access_token ?? null;
  }

  isLoggedIn(): boolean {
    const user = this.currentUser$.value;
    if (!user) return false;
    try {
      const payload = JSON.parse(atob(user.access_token.split('.')[1]));
      if (payload.exp * 1000 < Date.now()) {
        this.logout();
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  isAdmin(): boolean {
    const role = this.currentUser$.value?.role;
    return role === 'admin' || role === 'super_admin';
  }

  isSuperAdmin(): boolean {
    return this.currentUser$.value?.role === 'super_admin';
  }

  get user(): AuthUser | null {
    return this.currentUser$.value;
  }

  get user$(): Observable<AuthUser | null> {
    return this.currentUser$.asObservable();
  }

  private setSession(user: AuthUser) {
    sessionStorage.setItem(this.TOKEN_KEY, JSON.stringify(user));
    this.currentUser$.next(user);
  }
}
