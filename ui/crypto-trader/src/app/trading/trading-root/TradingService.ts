import {Injectable} from "@angular/core";
import {TransactionRequest} from "src/app/shared/transactions/inftrastructure/TransactionRequest";
import {Storage} from "src/app/util/base/domain/storage";
import {TransactionResource} from "src/app/shared/transactions/inftrastructure/TransactionResource";
import {take} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class TradingService extends Storage<TransactionRequest> {

  sold$: BehaviorSubject<void> = new BehaviorSubject<void>(null)

  constructor(
    private readonly transactionResource: TransactionResource
  ) {
    super()
  }

  prepareNewTransaction(cryptoName: string, amount: number) {
    this.set(new TransactionRequest(cryptoName, amount))
  }

  finalizeTransaction(): void {
    this.transactionResource.tradeCrypto(
      this.get()
    )
      .pipe(
        take(1))
      .subscribe(() => {
        this.sold$.next()
      })
  }

  observeSold(): Observable<void> {
    return this.sold$.asObservable()
  }

}
