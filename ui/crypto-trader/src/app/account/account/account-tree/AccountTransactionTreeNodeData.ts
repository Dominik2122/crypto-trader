import {TreeNodeData} from 'src/app/util/tree/ui/domain/TreeNodeData';
import {Transaction} from 'src/app/shared/transactions/domain/Transaction';

export class AccountTransactionTreeNodeData implements TreeNodeData {

  constructor(
    readonly date: string,
    readonly price: number,
    readonly value: number,
    readonly amount: number,
    readonly crypto: string
  ) {}

  static fromDomain(domain: Transaction): AccountTransactionTreeNodeData {
    return new AccountTransactionTreeNodeData(
      `${domain.date.getDate()}/${domain.date.getMonth() + 1}/${domain.date.getFullYear() - 2000}`,
      domain.price,
      domain.value,
      domain.amount,
      domain.crypto);
  }

}
