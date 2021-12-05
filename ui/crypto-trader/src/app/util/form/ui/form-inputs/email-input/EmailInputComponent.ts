import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FieldComponent} from 'src/app/util/form/ui/form-inputs/FieldComponent';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './EmailInputComponent.html',
  styleUrls: ['./EmailInputComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailInputComponent implements FieldComponent {

  config;
  group: FormGroup;

}
