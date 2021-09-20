import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserLoginRequest} from "src/app/authentication/domain/UserLoginRequest";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {User} from "src/app/authentication/domain/User";

@Injectable()
export class AuthResource extends BaseResource {

  constructor(
    http: HttpClient
  ) {super(http)}


  login(request: UserLoginRequest): Observable<string> {
    return this.post<string>('http://127.0.0.1:8000/api/user/token/', request).pipe(
      tap((x) => console.log(x))
    )
  }


  signUp() {
    return this.post('http://127.0.0.1:8000/api/user/create/', {})
  }


}
