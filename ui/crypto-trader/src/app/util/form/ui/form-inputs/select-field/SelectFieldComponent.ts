import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldComponent} from 'src/app/util/form/ui/form-inputs/FieldComponent';

@Component({
  selector: 'app-select-field',
  templateUrl: './SelectFieldComponent.html',
  styleUrls: ['./SelectFieldComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFieldComponent implements FieldComponent {
  config;
  group: FormGroup;
}
