import { Component, OnInit } from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  config = [
    {
      type: FormInput.TEXT,
      label: 'Login',
      name: 'login',
      placeholder: 'Enter your login'
    },
    {
      type: FormInput.PASSWORD,
      label: 'Password',
      name: 'password',
      placeholder: 'Enter your password',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
