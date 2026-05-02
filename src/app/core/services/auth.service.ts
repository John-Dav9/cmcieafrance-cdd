import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AuthUser {
  email: string;
  role: string;
  access_token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'cmciea_token';
  private currentUser$ = new BehaviorSubject<AuthUser | null>(this.loadUser());

  constructor(private http: HttpClient) {}

  private loadUser(): AuthUser | null {
    try {
      const raw = localStorage.getItem(this.TOKEN_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  login(email: string, password: string): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${environment.apiBase}/auth/login`, { email, password }).pipe(
      tap(user => {
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(user));
        this.currentUser$.next(user);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUser$.next(null);
  }

  getToken(): string | null {
    return this.currentUser$.value?.access_token ?? null;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser$.value;
  }

  isAdmin(): boolean {
    return this.currentUser$.value?.role === 'admin';
  }

  get user$(): Observable<AuthUser | null> {
    return this.currentUser$.asObservable();
  }
}
