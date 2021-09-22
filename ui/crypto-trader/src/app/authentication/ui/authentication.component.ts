import {Component, OnInit} from '@angular/core';
import {FormType} from "src/app/authentication/ui/FormType";
import {AuthService} from "src/app/authentication/domain/AuthService";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "src/app/authentication/domain/User";


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

  constructor(private readonly authService: AuthService,
              private readonly router: Router) {
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
    const obs$: Observable<void> = this.isLoginPage ?
      this.authService.login(this.email, this.password) :
      this.authService.signUp(this.login, this.email, this.password)
    obs$.subscribe(() => this.router.navigate(['/']))
  }


}
