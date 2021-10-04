import {HeaderAccountPastDataDTO} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountPastDataDTO";
import {TransactionDTO} from "src/app/shared/transactions/inftrastructure/TransactionDTO";


export class AccountDTO {

  constructor(
    readonly balance: number,
    readonly pastData: Array<HeaderAccountPastDataDTO>,
    readonly transactions: Array<TransactionDTO>
  ) {}

}
