import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AccountDataRepository} from "src/app/account/domain/state/AccountDataRepository";

@Injectable()
export class AccountDataService {
  constructor(private accountDataRepository: AccountDataRepository) {
  }

  fetchAccountData(days: number): void {
    return this.accountDataRepository.fetchAccountData()
  }

  selectAccountBalance(): Observable<number> {
    return this.accountDataRepository.selectAccountBalance()
  }


}
