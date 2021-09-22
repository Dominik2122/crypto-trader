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
  private login: string

  constructor(private readonly authService: AuthService) {
  }

  changeForm(formType: FormType) {
    this.isLoginPage = formType === FormType.LOGIN
  }

  observeEmail(email: string) {
    this.email = email
  }

  observeLogin(email: string) {
    this.login = email
  }

  observePassword(password: string) {
    this.password = password
  }


  submit() {
    if (this.isLoginPage) {
      this.authService.login(this.email, this.password).subscribe()
    } else {
      this.authService.signUp(this.login, this.email, this.password).subscribe()
    }
  }


}
