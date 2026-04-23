import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { user } from '@angular/fire/auth';
import { AdminAuthService } from '../services/admin-auth.service';

export const authGuard = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  const adminAuth = inject(AdminAuthService);

  return user(auth).pipe(
    take(1),
    map((u) => {
      if (u || adminAuth.isDevLoggedIn()) return true;
      router.navigate(['/espace-admin/login']);
      return false;
    }),
  );
};
