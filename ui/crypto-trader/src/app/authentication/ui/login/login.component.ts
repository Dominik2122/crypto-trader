import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";
import {FormGroup} from "@angular/forms";
import {UserLoginRequest} from "src/app/authentication/domain/UserLoginRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  email: EventEmitter<string> = new EventEmitter<string>()

  @Output()
  password: EventEmitter<string> = new EventEmitter<string>()

  form: FormGroup;

  config = [
    {
      type: FormInput.EMAIL,
      label: 'Email',
      name: 'email',
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
      this.email.emit(value.email);
      this.password.emit(value.password);
    })
  }

}
