import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

export const loginGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const tokenGet = cookieService.get('Authorization');
  var token = tokenGet;

  if (tokenGet) {
    token = token.replace('Bearer', '');
    const decodedToken: any = jwtDecode(token);
    const expirationDate = decodedToken.exp * 1000;
    const currentTime = new Date().getTime();

    console.log('token süresi' + expirationDate);
    console.log('Şimdiki zaman' + currentTime);
    console.log(expirationDate < currentTime);
    if (expirationDate < currentTime) {
      //token expired
      alert('inaktiflikten dolayı çıkış yapılmıştır');
      localStorage.clear();
      return router.createUrlTree(['login'], {
        queryParams: { returnUrl: state.url },
      });
    } else {
      return true;
    }
  } else {
    alert('Lütfen Giriş Yapınız');
    return router.createUrlTree(['login'], {
      queryParams: { returnUrl: state.url },
    });
  }
  return true;
};
