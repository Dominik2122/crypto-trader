import {HeaderBalanceHistoryNode} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderBalanceHistoryNode";

export class HeaderAccount {

  constructor(
    readonly currentBalance: number,
    readonly balanceHistory: Array<HeaderBalanceHistoryNode>
  ) {

  }

}
