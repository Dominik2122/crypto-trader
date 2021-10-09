import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FieldComponent} from "src/app/util/form/ui/form-inputs/FieldComponent";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailInputComponent implements FieldComponent {

  config;
  group: FormGroup;

}
