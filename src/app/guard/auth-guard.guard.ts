import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router= inject (Router)
  if (sessionStorage.getItem('token') != null)
    return true;
  else {
    alert("You need to log-in first to visit this page");
    router.navigate(['/home-page'],{
      queryParams:{returnUrl:state.url}
    })

    return false;
  }
};
