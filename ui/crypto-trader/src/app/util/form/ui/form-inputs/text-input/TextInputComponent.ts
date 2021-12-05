import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldComponent} from 'src/app/util/form/ui/form-inputs/FieldComponent';

@Component({
  selector: 'app-text-input',
  templateUrl: './TextInputComponent.html',
  styleUrls: ['./TextInputComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent implements FieldComponent {

  config;
  group: FormGroup;

}
