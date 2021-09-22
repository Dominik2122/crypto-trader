import {Injectable} from "@angular/core";
import {PermissionService} from "src/app/authentication/domain/PermissionService";
import {UserLoginRequest} from "src/app/authentication/domain/UserLoginRequest";
import {UserSignUpRequest} from "src/app/authentication/domain/UserSignUpRequest";
import {AuthResource} from "src/app/authentication/infrastructure/AuthResource";
import {Observable} from "rxjs";
import {User} from "src/app/authentication/domain/User";
import {map} from "rxjs/operators";
import {ValidatedUser} from "src/app/authentication/domain/ValidatedUser";

@Injectable()
export class AuthService {

  constructor(
    private readonly permissionService: PermissionService,
    private readonly authResource: AuthResource
  ) {

  }

  login(email: string, password: string): Observable<void> {
    const request: UserLoginRequest = new UserLoginRequest(email, password)
    return this.authResource.login(request).pipe(
      map((response: ValidatedUser) => {
        const user: User = new User(response.userLogin,  email, response.token, response.isAdmin)
        this.permissionService.setUser(user)
      })
    )
  }

  signUp(login: string, email: string, password: string) {
    const request: UserSignUpRequest = new UserSignUpRequest(login, email, password)
    return this.authResource.signUp(request).pipe(
      map((response: ValidatedUser) => {
        const user: User = new User(login,  email, response.token, response.isAdmin)
        this.permissionService.setUser(user)
      })
    )
  }

  logout(): void {
    return this.permissionService.setUser(null)
  }

}
