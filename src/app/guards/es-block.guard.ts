import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Roles } from '../interfaces/roles.enum';

export const esAdminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)
  const currentRol = authService.currentUser()!.role

    if( currentRol === Roles.BLOQUEADO) return true;
  router.navigateByUrl('/pages/principal')
  return false;
};
