import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FieldComponent} from "src/app/util/form/ui/form-inputs/FieldComponent";
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-select-field',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements FieldComponent {

  config;
  group: FormGroup;

  options: Options

  value: number = 100;

  ngOnInit() {
    this.options = {
      floor: this.config.floor,
      ceil: this.config.ceil,
    };
    if (this.config.stepsArray) {
      this.options.stepsArray = this.config.stepsArray
    }
    if (this.config.showTicks) {
      this.options.showTicksValues = true
    }

  }

}
