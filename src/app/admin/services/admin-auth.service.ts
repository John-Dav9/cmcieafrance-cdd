import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private readonly DEV_SESSION_KEY = 'admin-dev-session';

  readonly user$ = user(this.auth);

  private isLocalhostRuntime(): boolean {
    if (typeof window === 'undefined') return false;
    const host = window.location.hostname;
    return host === 'localhost' || host === '127.0.0.1' || host === '[::1]';
  }

  private isDevBypassAllowed(): boolean {
    return (
      !environment.production &&
      this.isLocalhostRuntime() &&
      environment.devAdmin?.enabled === true &&
      !!environment.devAdmin.email &&
      !!environment.devAdmin.password &&
      !!environment.devAdmin.token
    );
  }

  login(email: string, password: string): Observable<any> {
    if (
      this.isDevBypassAllowed() &&
      email === environment.devAdmin.email &&
      password === environment.devAdmin.password
    ) {
      localStorage.setItem(this.DEV_SESSION_KEY, '1');
      return of({ dev: true });
    }

    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  async logout() {
    localStorage.removeItem(this.DEV_SESSION_KEY);
    await signOut(this.auth);
    this.router.navigate(['/espace-admin/login']);
  }

  async getToken(): Promise<string | null> {
    if (this.isDevLoggedIn()) {
      return environment.devAdmin.token;
    }

    const currentUser = this.auth.currentUser;
    if (!currentUser) return null;
    return currentUser.getIdToken();
  }

  isLoggedIn(): boolean {
    return this.isDevLoggedIn() || !!this.auth.currentUser;
  }

  isDevLoggedIn(): boolean {
    return (
      this.isDevBypassAllowed() &&
      localStorage.getItem(this.DEV_SESSION_KEY) === '1'
    );
  }
}
