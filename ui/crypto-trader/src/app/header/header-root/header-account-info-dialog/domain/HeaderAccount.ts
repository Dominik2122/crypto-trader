import {HeaderBalanceHistoryNode} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderBalanceHistoryNode";
import {HeaderAccountDTO} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountDTO";

export class HeaderAccount {

  constructor(
    readonly currentBalance: number,
    readonly balanceHistory: Array<HeaderBalanceHistoryNode>
  ) {}

  static fromDTO(dto: HeaderAccountDTO): HeaderAccount {
    return new HeaderAccount(dto.balance, HeaderBalanceHistoryNode.fromArrayDTO(dto.pastData))
  }

}
