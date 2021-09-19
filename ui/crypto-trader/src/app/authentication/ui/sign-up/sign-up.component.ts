import { Component, OnInit } from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  config = [
    {
      type: FormInput.TEXT,
      label: 'Login',
      name: 'login',
      placeholder: 'Enter your login'
    },
    {
      type: FormInput.EMAIL,
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email'
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
