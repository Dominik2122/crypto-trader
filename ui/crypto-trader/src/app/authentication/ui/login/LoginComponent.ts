import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormInput} from 'src/app/util/form/domain/FormInput';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './LoginComponent.html',
  styleUrls: ['./LoginComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  @Output()
  email: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  password: EventEmitter<string> = new EventEmitter<string>();

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
    });
  }

}
