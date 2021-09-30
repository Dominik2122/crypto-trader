import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {BalanceHistory} from "src/app/account/domain/BalanceHistory";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";
import {AccountDataService} from "src/app/account/domain/AccountDataService";
import {Transaction} from "src/app/account/domain/Transaction";
import {AccountTransactionTreeNode} from "src/app/account/account-tree/AccountTransactionTreeNode";

@Component({
  selector: 'app-account-tree',
  templateUrl: './account-tree.component.html',
  styleUrls: ['./account-tree.component.scss']
})
export class AccountTreeComponent implements OnInit {

  transactions: Array<Transaction>

  NUMBER_OF_COLUMNS: number = 5;

  nodes: Array<TreeNode>;

  initTree: boolean = false

  accountTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Date', 'Price', 'Value', 'Amount', 'Crypto'])
    .withFlex(['0 1 17%', '0 1 20%', '0 1 20%', '0 1 15%', '0 1 28%'])
    .build(this.NUMBER_OF_COLUMNS)

  viewStrategy: TreeViewStrategy = TreeViewStrategy.TEMPLATE

  constructor(private readonly accountDataService: AccountDataService) {
  }

  ngOnInit(): void {
    this.accountDataService.selectAccountTransactions().subscribe((transactions) => {
      this.transactions = transactions
      transactions && this.toNodes(transactions)
      this.initTree = transactions && transactions.length > 0
    })
  }

  private toNodes(transactions: Array<Transaction>): void {
    this.nodes = AccountTransactionTreeNode.fromArrayDomain(transactions)
  }

  private nodesToShow() {

  }

  private createPaginationTable() {

  }

  private currentPaginationPage() {

  }
}




