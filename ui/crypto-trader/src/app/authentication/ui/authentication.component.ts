import {Component, OnInit} from '@angular/core';
import {FormType} from "src/app/authentication/ui/FormType";


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isLoginPage: boolean = true;

  FormType = FormType

  constructor() {
  }

  ngOnInit(): void {
  }

  changeForm(formType: FormType) {
    if (formType === FormType.SIGNUP) {
      this.isLoginPage = false
    } else {
      this.isLoginPage = true
    }

  }

}
