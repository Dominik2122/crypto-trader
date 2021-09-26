import {SelectFieldComponent} from "src/app/util/form/ui/form-inputs/select-field/select-field.component";
import {TextInputComponent} from "src/app/util/form/ui/form-inputs/text-input/text-input.component";
import {EmailInputComponent} from "src/app/util/form/ui/form-inputs/email-input/email-input.component";
import {TextAreaComponent} from "src/app/util/form/ui/form-inputs/text-area/text-area.component";
import {NumberInputComponent} from "src/app/util/form/ui/form-inputs/number-input/number-input.component";
import {PasswordInputComponent} from "src/app/util/form/ui/form-inputs/password-input/password-input.component";
import {RangeInputComponent} from "src/app/util/form/ui/form-inputs/range/range-input.component";



export enum FormInput {
  SELECT = 'selectField',
  TEXT = 'textInput',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  TEXTAREA = 'textArea',
  RANGE = 'range'
}



export const formInput = {
  selectField: SelectFieldComponent,
  textInput: TextInputComponent,
  password: PasswordInputComponent,
  email: EmailInputComponent,
  number: NumberInputComponent,
  textArea: TextAreaComponent,
  range: RangeInputComponent,
}
