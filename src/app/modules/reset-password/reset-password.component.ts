import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/models/UserInterface';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  @Input() alertMessage: string = '';
  user: UserInterface = {
    email: '',
    token: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  resetPassword() {
    this.authService.userResetPassword(this.user)
      .subscribe(
        result => {
          this.router.navigate(['login']);
        },
        error => {
          this.alertMessage = error.error.error;
        }
      );
  }

}
