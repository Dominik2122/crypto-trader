import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output()
  readonly email: EventEmitter<string> = new EventEmitter<string>()

  @Output()
  readonly password: EventEmitter<string> = new EventEmitter<string>()

  @Output()
  readonly login: EventEmitter<string> = new EventEmitter<string>()

  form: FormGroup;


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

  observeForm(form: FormGroup) {
    this.form = form;
    this.form.valueChanges.subscribe(value => {
      this.email.emit(value.email);
      this.login.emit(value.login);
      this.password.emit(value.password);
    })
  }


}
