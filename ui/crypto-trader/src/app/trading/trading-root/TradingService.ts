import {Injectable} from "@angular/core";
import {TransactionRequest} from "src/app/shared/transactions/inftrastructure/TransactionRequest";
import {Storage} from "src/app/util/base/domain/storage";

@Injectable()
export class TradingService extends Storage<TransactionRequest> {

  constructor(

  ) {
    super()
  }


  prepareNewTransaction(cryptoName: string, amount: number) {
    this.set(new TransactionRequest(cryptoName, amount))
  }

  finalizeTransaction(): void {

  }

}
