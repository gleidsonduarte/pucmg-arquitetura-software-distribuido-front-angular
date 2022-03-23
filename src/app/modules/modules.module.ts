import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AssociateComponent } from './associate/associate.component';
import { AuthComponent } from './auth/auth.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProviderComponent } from './provider/provider.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AssociateComponent,
    NotFoundComponent,
    ProviderComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    GreetingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    AssociateComponent,
    NotFoundComponent,
    ProviderComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    GreetingComponent
  ]
})
export class ModulesModule { }