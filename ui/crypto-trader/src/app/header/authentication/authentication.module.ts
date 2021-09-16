import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import {FormModule} from "src/app/util/form/form.module";



@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  exports: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ]
})
export class AuthenticationModule { }
