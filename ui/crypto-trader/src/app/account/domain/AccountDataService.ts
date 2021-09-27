import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AccountDataRepository} from "src/app/account/domain/state/AccountDataRepository";
import {BalanceHistory} from "src/app/account/domain/BalanceHistory";

@Injectable()
export class AccountDataService {
  constructor(private accountDataRepository: AccountDataRepository) {
  }

  fetchAccountData(days: number): void {
    return this.accountDataRepository.fetchAccountData(days)
  }

  selectAccountBalance(): Observable<number> {
    return this.accountDataRepository.selectAccountBalance()
  }

  selectAccountPastData(): Observable<Array<BalanceHistory>> {
    return this.accountDataRepository.selectAccountPastData()
  }


}
