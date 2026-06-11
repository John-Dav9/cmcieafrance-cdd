import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { AdminLoginChallenge, AuthService, AuthUser } from '../../core/services/auth.service';
import { MemberAuthService } from '../../core/services/member-auth.service';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private authService = inject(AuthService);
  private memberAuth = inject(MemberAuthService);
  private router = inject(Router);

  readonly user$ = this.authService.user$;

  login(email: string, password: string): Observable<AuthUser | AdminLoginChallenge> {
    return this.authService.login(email, password);
  }

  verifyLogin(challenge: string, code: string): Observable<AuthUser> {
    return this.authService.verifyAdminLogin(challenge, code);
  }

  async logout() {
    await firstValueFrom(this.authService.revokeSession()).catch(() => undefined);
    this.authService.logout();
    this.memberAuth.logout();
    this.router.navigate(['/espace-admin/login']);
  }

  getToken(): string | null {
    return this.authService.getToken() || (
      this.memberAuth.isAdmin() ? this.memberAuth.getToken() : null
    );
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn() || (
      this.memberAuth.isLoggedIn() && this.memberAuth.isAdmin()
    );
  }

  isDevLoggedIn(): boolean {
    return false;
  }
}
