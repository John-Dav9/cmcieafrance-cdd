import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MemberAuthService } from '../services/member-auth.service';

export const authenticatedGuard = () => {
  const adminAuth = inject(AuthService);
  const memberAuth = inject(MemberAuthService);
  const router = inject(Router);

  if (adminAuth.isLoggedIn() || memberAuth.isLoggedIn()) return true;
  return router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: '/replays' } });
};
