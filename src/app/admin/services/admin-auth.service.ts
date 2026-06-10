import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLoginChallenge, AuthService, AuthUser } from '../../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly user$ = this.authService.user$;

  login(email: string, password: string): Observable<AuthUser | AdminLoginChallenge> {
    return this.authService.login(email, password);
  }

  verifyLogin(challenge: string, code: string): Observable<AuthUser> {
    return this.authService.verifyAdminLogin(challenge, code);
  }

  async logout() {
    this.authService.logout();
    this.router.navigate(['/espace-admin/login']);
  }

  getToken(): string | null {
    return this.authService.getToken();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isDevLoggedIn(): boolean {
    return false;
  }
}
