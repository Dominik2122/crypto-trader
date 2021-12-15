import {BaseResource} from 'src/app/util/base/infrastructure/BaseResource';
import {Injectable} from '@angular/core';
import {UserLoginRequest} from 'src/app/authentication/domain/UserLoginRequest';
import {Observable} from 'rxjs';
import {ValidatedUser} from 'src/app/authentication/domain/ValidatedUser';
import {UserSignUpRequest} from 'src/app/authentication/domain/UserSignUpRequest';

@Injectable()
export class AuthResource extends BaseResource {

  login(request: UserLoginRequest): Observable<ValidatedUser> {
    return this.post<ValidatedUser>('user/token/', request);

  }


  signUp(request: UserSignUpRequest): Observable<ValidatedUser> {
    return this.post<ValidatedUser>('user/create/', request);
  }


}
