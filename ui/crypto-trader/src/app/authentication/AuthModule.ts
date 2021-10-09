import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationComponent} from 'src/app/authentication/ui/AuthenticationComponent';
import {FormModule} from "src/app/util/form/FormModule";
import {LoginComponent} from 'src/app/authentication/ui/login/LoginComponent';
import {SignUpComponent} from 'src/app/authentication/ui/sign-up/SignUpComponent';
import {AuthRoutingModule} from "src/app/authentication/AuthRoutingModule";
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
export class AuthModule { }
