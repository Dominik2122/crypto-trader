import {Store} from "@ngrx/store";
import {State} from "src/app/account/account/domain/state/AccountDataReducer";
import {Injectable} from "@angular/core";
import {fetchAccountData} from "src/app/account/account/domain/state/AccountDataActions";
import {Observable} from "rxjs";
import {
  selectAccountBalance,
  selectAccountPastData,
  selectAccountTransactions
} from "src/app/account/account/domain/state/AccountDataSelectors";
import {Transaction} from "src/app/shared/transactions/domain/Transaction";
import {BalanceHistory} from "src/app/account/account/domain/BalanceHistory";


@Injectable()
export class AccountDataRepository {

  constructor(private store: Store<State>) {
  }

  fetchAccountData(days: number): void {
    return this.store.dispatch(fetchAccountData({days: days}))
  }

  selectAccountBalance(): Observable<number> {
    return this.store.select(selectAccountBalance)
  }

  selectAccountTransactions(): Observable<Array<Transaction>> {
    return this.store.select(selectAccountTransactions)
  }

  selectAccountPastData(): Observable<Array<BalanceHistory>> {
    return this.store.select(selectAccountPastData)
  }

}
