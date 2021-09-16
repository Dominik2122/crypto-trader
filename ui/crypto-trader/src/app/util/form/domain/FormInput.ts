import {SelectFieldComponent} from "src/app/util/form/ui/form-inputs/select-field/select-field.component";
import {TextInputComponent} from "src/app/util/form/ui/form-inputs/text-input/text-input.component";
import {EmailInputComponent} from "src/app/util/form/ui/form-inputs/email-input/email-input.component";
import {TextAreaComponent} from "src/app/util/form/ui/form-inputs/text-area/text-area.component";
import {NumberInputComponent} from "src/app/util/form/ui/form-inputs/number-input/number-input.component";



export enum FormInput {
  SELECT = 'selectField',
  TEXT = 'textInput',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  TEXTAREA = 'textArea',
}



export const formInput = {
  selectField: SelectFieldComponent,
  textInput: TextInputComponent,
  password: TextInputComponent,
  email: EmailInputComponent,
  number: NumberInputComponent,
  textArea: TextAreaComponent,
}
