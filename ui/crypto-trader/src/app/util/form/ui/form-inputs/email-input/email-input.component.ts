import { Component } from '@angular/core';
import {FieldComponent} from "src/app/util/form/ui/form-inputs/FieldComponent";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements FieldComponent {

  config;
  group: FormGroup;

}
