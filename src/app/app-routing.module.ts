import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssociateComponent } from './modules/associate/associate.component';
import { AuthComponent } from './modules/auth/auth.component';
import { CreateAccountComponent } from './modules/create-account/create-account.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { GreetingComponent } from './modules/greeting/greeting.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ProviderComponent } from './modules/provider/provider.component';
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';

import { AuthGuard } from './shared/guard/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'greeting', pathMatch: 'full'},
      { path: 'greeting', component: GreetingComponent },
      { path: 'associate', component: AssociateComponent },
      { path: 'provider', component: ProviderComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
