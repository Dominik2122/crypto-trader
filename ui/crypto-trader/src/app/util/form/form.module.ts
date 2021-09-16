import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './ui/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TextInputComponent } from './ui/form-inputs/text-input/text-input.component';
import { SelectFieldComponent } from './ui/form-inputs/select-field/select-field.component';
import { FormDirective } from './domain/form.directive';
import { PasswordInputComponent } from './ui/form-inputs/password-input/password-input.component';
import { EmailInputComponent } from './ui/form-inputs/email-input/email-input.component';
import { TextAreaComponent } from './ui/form-inputs/text-area/text-area.component';
import { NumberInputComponent } from './ui/form-inputs/number-input/number-input.component';



@NgModule({
  declarations: [
    FormComponent,
    TextInputComponent,
    SelectFieldComponent,
    FormDirective,
    PasswordInputComponent,
    EmailInputComponent,
    TextAreaComponent,
    NumberInputComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SelectFieldComponent,
    TextInputComponent
  ]
})
export class FormModule { }