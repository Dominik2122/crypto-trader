import { Component, OnInit } from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  config = [
    {
      type: FormInput.TEXT,
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
    },
    {
      type: FormInput.SELECT,
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
