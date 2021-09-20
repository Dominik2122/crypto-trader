import {Injectable} from "@angular/core";
import {PermissionService} from "src/app/authentication/domain/PermissionService";
import {UserLoginRequest} from "src/app/authentication/domain/UserLoginRequest";
import {UserSignUpRequest} from "src/app/authentication/domain/UserSignUpRequest";
import {AuthResource} from "src/app/authentication/infrastructure/AuthResource";
import {Observable} from "rxjs";
import {User} from "src/app/authentication/domain/User";
import {map} from "rxjs/operators";

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
      map((token: string) => {
        const user: User = new User(email, password, email, token)
        this.permissionService.setUser(user)
      })
    )
  }

  signUp(request: UserSignUpRequest) {

  }

  logout(): void {
    return this.permissionService.setUser(null)
  }

}
