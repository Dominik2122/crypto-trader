import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FieldComponent} from "src/app/util/form/ui/form-inputs/FieldComponent";

@Component({
  selector: 'app-number-input',
  templateUrl: './NumberInputComponent.html',
  styleUrls: ['./NumberInputComponent.scss']
})
export class NumberInputComponent implements FieldComponent {

  config;
  group: FormGroup;

}


