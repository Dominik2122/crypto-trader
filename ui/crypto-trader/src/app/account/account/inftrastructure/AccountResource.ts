import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ValidatedUser} from "src/app/authentication/domain/ValidatedUser";
import {UserSignUpRequest} from "src/app/authentication/domain/UserSignUpRequest";
import {HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AccountDTO} from "src/app/account/account/inftrastructure/AccountDTO";
import {Account} from "src/app/account/account/domain/Account";

@Injectable()
export class AccountResource extends BaseResource {

  fetchData(days?: number): Observable<Account> {
    const queryParams = new HttpParams().append('days', days ? `${days}` : '14')
    return this.get<AccountDTO>('http://127.0.0.1:8000/api/account/account-info', queryParams).pipe(
      map((account) => Account.fromDTO(account))
    )
  }


  signUp(request: UserSignUpRequest): Observable<ValidatedUser> {
    return this.post<ValidatedUser>('http://127.0.0.1:8000/api/user/create/', request)
  }


}
