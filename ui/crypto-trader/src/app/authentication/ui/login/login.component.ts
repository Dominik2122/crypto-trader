import { Component, OnInit } from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  private login: string;
  private password: string;

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

  observeForm(form: FormGroup) {
    this.form = form;
    this.form.valueChanges.subscribe(value => {
      this.login = value.login;
      this.password = value.password;
    })
  }


}
