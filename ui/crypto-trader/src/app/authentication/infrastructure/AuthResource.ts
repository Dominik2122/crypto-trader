import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserLoginRequest} from "src/app/authentication/domain/UserLoginRequest";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {User} from "src/app/authentication/domain/User";
import {ValidatedUser} from "src/app/authentication/domain/ValidatedUser";
import {UserSignUpRequest} from "src/app/authentication/domain/UserSignUpRequest";

@Injectable()
export class AuthResource extends BaseResource {

  constructor(
    http: HttpClient
  ) {super(http)}


  login(request: UserLoginRequest): Observable<ValidatedUser> {
    return this.post<ValidatedUser>('http://127.0.0.1:8000/api/user/token/', request)

  }


  signUp(request: UserSignUpRequest): Observable<ValidatedUser> {
    return this.post<ValidatedUser>('http://127.0.0.1:8000/api/user/create/', request)
  }


}
