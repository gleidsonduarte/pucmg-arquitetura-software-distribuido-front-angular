import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/shared/models/UserInterface';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  @Input() alertMessage: string = '';
  user: UserInterface = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService,private router: Router) { }

  createAccount() {
    this.authService.registerUser(this.user)
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
