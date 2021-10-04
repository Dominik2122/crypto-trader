import {BalanceHistory} from "src/app/account/account/domain/BalanceHistory";
import {Transaction} from "src/app/shared/transactions/domain/Transaction";
import {AccountDTO} from "src/app/account/account/inftrastructure/AccountDTO";

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
      dto.transactions.map(transaction => Transaction.fromDTO(transaction)))
  }

}
