import {SelectFieldComponent} from "src/app/util/form/ui/form-inputs/select-field/SelectFieldComponent";
import {TextInputComponent} from "src/app/util/form/ui/form-inputs/text-input/TextInputComponent";
import {EmailInputComponent} from "src/app/util/form/ui/form-inputs/email-input/EmailInputComponent";
import {TextAreaComponent} from "src/app/util/form/ui/form-inputs/text-area/TextAreaComponent";
import {NumberInputComponent} from "src/app/util/form/ui/form-inputs/number-input/NumberInputComponent";
import {PasswordInputComponent} from "src/app/util/form/ui/form-inputs/password-input/PasswordInputComponent";
import {RangeInputComponent} from "src/app/util/form/ui/form-inputs/range/RangeInputComponent";


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
