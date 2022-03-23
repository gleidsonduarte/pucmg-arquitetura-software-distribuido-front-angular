import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserInterface } from 'src/app/shared/models/UserInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() alertMessage: string = '';
  user: UserInterface = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.authenticateUser(this.user)
      .subscribe(
        result => {
          const token = (result as any).data.token;
          if (token) {
            localStorage.setItem('token', token);
          }

          this.router.navigate(['']);
        },
        error => {
          this.alertMessage = error.error.error;
        }
      );
  }

}
