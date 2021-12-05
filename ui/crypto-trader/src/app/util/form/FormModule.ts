import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from 'src/app/util/form/ui/form/FormComponent';
import {ReactiveFormsModule} from '@angular/forms';
import {TextInputComponent} from 'src/app/util/form/ui/form-inputs/text-input/TextInputComponent';
import {SelectFieldComponent} from 'src/app/util/form/ui/form-inputs/select-field/SelectFieldComponent';
import {FormDirective} from './domain/form.directive';
import {PasswordInputComponent} from 'src/app/util/form/ui/form-inputs/password-input/PasswordInputComponent';
import {EmailInputComponent} from 'src/app/util/form/ui/form-inputs/email-input/EmailInputComponent';
import {TextAreaComponent} from 'src/app/util/form/ui/form-inputs/text-area/TextAreaComponent';
import {NumberInputComponent} from 'src/app/util/form/ui/form-inputs/number-input/NumberInputComponent';
import {RangeInputComponent} from 'src/app/util/form/ui/form-inputs/range/RangeInputComponent';
import {NgxSliderModule} from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    FormComponent,
    TextInputComponent,
    SelectFieldComponent,
    FormDirective,
    PasswordInputComponent,
    EmailInputComponent,
    TextAreaComponent,
    NumberInputComponent,
    RangeInputComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSliderModule
  ],
  entryComponents: [
    SelectFieldComponent,
    TextInputComponent
  ]
})
export class FormModule { }
