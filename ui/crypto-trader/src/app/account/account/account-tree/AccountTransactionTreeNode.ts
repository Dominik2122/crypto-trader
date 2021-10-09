import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Transaction} from "src/app/shared/transactions/domain/Transaction";
import {AccountTransactionTreeNodeData} from "src/app/account/account/account-tree/AccountTransactionTreeNodeData";

export class AccountTransactionTreeNode implements TreeNode {

  constructor(
    readonly id: string,
    readonly data: AccountTransactionTreeNodeData,
    readonly level: number,
    public expanded: boolean,
    public position: number
  ) {}

  static fromDomain(domain: Transaction): AccountTransactionTreeNode {
    return new AccountTransactionTreeNode(
      'HOME-' + domain.id,
      AccountTransactionTreeNodeData.fromDomain(domain),
      0,
      false,
      null,
    )
  }

  static fromArrayDomain(arrayDomain: Array<Transaction>): Array<AccountTransactionTreeNode> {
    return arrayDomain.map((domain: Transaction, index: number) => AccountTransactionTreeNode.fromDomain(domain).withPosition(index))
  }

  withPosition(position: number): AccountTransactionTreeNode {
    this.position = position
    return this
  }

}
