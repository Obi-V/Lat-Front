import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Roles } from '../interfaces/roles.enum';

export const esProfesorGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)

  const currentRol = authService.currentUser()!.role

  if( currentRol === Roles.PROFESOR) return true;

  return false;
};
