import {Component, OnInit} from '@angular/core';
import {FormType} from "src/app/authentication/ui/FormType";
import {AuthService} from "src/app/authentication/domain/AuthService";


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  isLoginPage: boolean = true;

  FormType = FormType

  private email: string
  private password: string

  constructor(private readonly authService: AuthService) {
  }

  changeForm(formType: FormType) {
    if (formType === FormType.SIGNUP) {
      this.isLoginPage = false
    } else {
      this.isLoginPage = true
    }
  }

  observeEmail(email: string) {
    this.email = email
  }

  observePassword(password: string) {
    this.password = password
  }


  submit() {
    if (this.isLoginPage) {
      this.authService.login(this.email, this.password).subscribe()
    } else {

    }
  }


}
