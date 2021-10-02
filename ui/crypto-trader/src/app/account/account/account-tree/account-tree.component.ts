import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {BalanceHistory} from "src/app/account/account/domain/BalanceHistory";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";
import {AccountDataService} from "src/app/account/account/domain/AccountDataService";
import {Transaction} from "src/app/account/account/domain/Transaction";
import {AccountTransactionTreeNode} from "src/app/account/account/account-tree/AccountTransactionTreeNode";
import {AccountPaginationService} from "src/app/account/account/account-tree/AccountPaginationService";

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

  currentPaginationPages: Array<number>
  currentPaginationPage:number = 0

  accountTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Date', 'Crypto', 'Price', 'Amount', 'Value'])
    .withFlex(['0 1 17%', '0 1 28%', '0 1 20%', '0 1 15%', '0 1 20%'])
    .build(this.NUMBER_OF_COLUMNS)

  viewStrategy: TreeViewStrategy = TreeViewStrategy.TEMPLATE

  constructor(private readonly accountDataService: AccountDataService,
              private readonly accountPaginationService: AccountPaginationService) {
  }

  ngOnInit(): void {
    this.createNodes()
    this.createPaginationTable()
  }

  clickPage(page: number): void {
    this.currentPaginationPage = page
    return this.accountPaginationService.clickPaginationPage(page)
  }

  private toNodes(transactions: Array<Transaction>): void {
    this.nodes = AccountTransactionTreeNode.fromArrayDomain(transactions)
  }

  private createNodes() {
    this.accountPaginationService.transactionsToShow().subscribe((transactions) => {
      this.transactions = transactions
      transactions && this.toNodes(transactions)
      this.initTree = transactions && transactions.length > 0
    })
  }

  private createPaginationTable() {
    this.accountPaginationService.currentPaginationPages().subscribe((pages: Array<number>) => {
      this.currentPaginationPages = pages
    })
  }


}




