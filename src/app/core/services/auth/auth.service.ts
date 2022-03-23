import ApiMicConfigs from 'src/app/core/configs/ApiMicConfigs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/models/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: UserInterface) {
    return this.http
      .post(`${ApiMicConfigs.basePath}/v1/auth/register`, user, {
        headers: ApiMicConfigs.headers
      });
  }

  authenticateUser(user: UserInterface) {
    return this.http
      .post(`${ApiMicConfigs.basePath}/v1/auth/authenticate`, user, {
        headers: ApiMicConfigs.headers
      });
  }

  userForgotPassword(user: UserInterface) {
    return this.http
      .post(`${ApiMicConfigs.basePath}/v1/auth/forgot-password`, user, {
        headers: ApiMicConfigs.headers
      });
  }

  userResetPassword(user: UserInterface) {
    return this.http
      .post(`${ApiMicConfigs.basePath}/v1/auth/reset-password`, user, {
        headers: ApiMicConfigs.headers
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
