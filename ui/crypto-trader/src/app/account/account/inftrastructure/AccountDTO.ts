import {HeaderAccountPastDataDTO} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountPastDataDTO";
import {TransactionDTO} from "src/app/account/account/inftrastructure/TransactionDTO";

export class AccountDTO {

  constructor(
    readonly balance: number,
    readonly pastData: Array<HeaderAccountPastDataDTO>,
    readonly transactions: Array<TransactionDTO>
  ) {}

}
