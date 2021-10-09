import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FieldComponent} from "src/app/util/form/ui/form-inputs/FieldComponent";

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordInputComponent implements FieldComponent {
  config;
  group: FormGroup;
}
