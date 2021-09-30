import {BalanceHistory} from "src/app/account/domain/BalanceHistory";
import {Transaction} from "src/app/account/domain/Transaction";
import {AccountDTO} from "src/app/account/inftrastructure/AccountDTO";

export class Account {

  constructor(
    readonly currentBalance: number,
    readonly pastData: Array<BalanceHistory>,
    readonly transactions: Array<Transaction>
  ) {
  }

  static fromDTO(dto: AccountDTO): Account {
    return new Account(dto.balance,
      BalanceHistory.fromArrayDTO(dto.pastData),
      Transaction.fromDTO(dto.transactions))
  }

}
