import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private helper = new JwtHelperService();

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token') as string;
    const expiredToken = this.helper.isTokenExpired(token);
    if (expiredToken) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
