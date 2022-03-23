import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/models/UserInterface';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  @Input() alertMessage: string = '';
  user: UserInterface = {
    email: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  forgotPassword() {
    this.authService.userForgotPassword(this.user)
      .subscribe(
        result => {
          this.router.navigate(['reset-password']);
        },
        error => {
          this.alertMessage = error.error.error;
        }
      );
  }

}
