import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MemberAuthService } from '../../core/services/member-auth.service';
export const authGuard = () => {
    const authService = inject(AuthService);
    const memberAuth = inject(MemberAuthService);
    const router = inject(Router);
    if (authService.isLoggedIn() ||
        (memberAuth.isLoggedIn() && memberAuth.isAdmin()))
        return true;
    router.navigate(['/espace-admin/login']);
    return false;
};
//# sourceMappingURL=auth.guard.js.map