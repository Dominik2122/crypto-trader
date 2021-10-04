import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {TransactionDTO} from "src/app/shared/transactions/inftrastructure/TransactionDTO";
import {Transaction} from "src/app/shared/transactions/domain/Transaction";
import {TransactionRequest} from "src/app/shared/transactions/inftrastructure/TransactionRequest";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class TransactionResource extends BaseResource {

  tradeCrypto(request: TransactionRequest): Observable<Transaction> {
    return this.post<TransactionDTO>(
      'http://127.0.0.1:8000/api/account/transactions/',
      request
    ).pipe(
      map(transactionDTO => Transaction.fromDTO(transactionDTO))
    )
  }

}