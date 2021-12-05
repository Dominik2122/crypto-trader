import {HeaderBalanceHistoryNode} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderBalanceHistoryNode';
import {HeaderAccountDTO} from 'src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountDTO';
import {Account} from 'src/app/account/account/domain/Account';

export class HeaderAccount extends Account {

  constructor(
    currentBalance: number,
    balanceHistory: Array<HeaderBalanceHistoryNode>
  ) {
    super(currentBalance, balanceHistory, null);
  }

  static fromDTO(dto: HeaderAccountDTO): HeaderAccount {
    return new HeaderAccount(dto.balance, HeaderBalanceHistoryNode.fromArrayDTO(dto.pastData));
  }

}
