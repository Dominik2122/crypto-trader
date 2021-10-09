import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormType} from "src/app/authentication/ui/FormType";
import {AuthService} from "src/app/authentication/domain/AuthService";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-authentication',
  templateUrl: './AuthenticationComponent.html',
  styleUrls: ['./AuthenticationComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
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
