import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationComponent} from 'src/app/authentication/ui/authentication.component';
import {FormModule} from "src/app/util/form/form.module";
import {LoginComponent} from 'src/app/authentication/ui/login/login.component';
import {SignUpComponent} from 'src/app/authentication/ui/sign-up/sign-up.component';
import {AuthRoutingModule} from "src/app/authentication/auth-routing.module";
import {AuthService} from "src/app/authentication/domain/AuthService";
import {AuthResource} from "src/app/authentication/infrastructure/AuthResource";


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent
  ],
  exports: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormModule
  ],
  providers: [
    AuthService,
    AuthResource
  ]
})
export class AuthenticationModule { }
