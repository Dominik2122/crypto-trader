import {Store} from "@ngrx/store";
import {State} from "src/app/account/domain/state/account-data.reducer";
import {Injectable} from "@angular/core";
import {fetchAccountData} from "src/app/account/domain/state/account-data.actions";
import {Observable} from "rxjs";
import {selectAccountBalance} from "src/app/account/domain/state/account-data.selectors";
import {tap} from "rxjs/operators";
import {log} from "util";

@Injectable()
export class AccountDataRepository {

  constructor(private store: Store<State>) {
  }

  fetchAccountData(): void {
    return this.store.dispatch(fetchAccountData({days: 14}))
  }

  selectAccountBalance(): Observable<number> {
    return this.store.select(selectAccountBalance).pipe(
      tap(x => console.log(x))
    )
  }

}
