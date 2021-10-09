import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TreeNode} from "src/app/util/tree/ui/domain/TreeNode";
import {TreeColumn} from "src/app/util/tree/ui/domain/TreeColumn";
import {TreeViewStrategy} from "src/app/util/tree/ui/domain/TreeViewStrategy";
import {AccountDataService} from "src/app/account/account/domain/AccountDataService";
import {Transaction} from "src/app/shared/transactions/domain/Transaction";
import {AccountPaginationService} from "src/app/account/account/account-tree/AccountPaginationService";
import {AccountTransactionTreeNode} from "src/app/account/account/account-tree/AccountTransactionTreeNode";

@Component({
  selector: 'app-account-tree',
  templateUrl: './AccountTreeComponent.html',
  styleUrls: ['./AccountTreeComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTreeComponent implements OnInit {

  transactions: Array<Transaction>

  NUMBER_OF_COLUMNS: number = 5;

  nodes: Array<TreeNode>;

  initTree: boolean = false

  currentPaginationPages: Array<number>
  currentPaginationPage: number = 0

  accountTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Date', 'Crypto', 'Price', 'Amount', 'Value'])
    .withFlex(['0 1 17%', '0 1 28%', '0 1 20%', '0 1 15%', '0 1 20%'])
    .build(this.NUMBER_OF_COLUMNS)

  viewStrategy: TreeViewStrategy = TreeViewStrategy.TEMPLATE

  constructor(
    private readonly accountDataService: AccountDataService,
    private readonly accountPaginationService: AccountPaginationService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.createNodes()
    this.createPaginationTable()
  }

  clickPage(page: number): void {
    this.currentPaginationPage = page
    this.accountPaginationService.clickPaginationPage(page)
    this.changeDetectorRef.detectChanges()
  }

  private toNodes(transactions: Array<Transaction>): void {
    this.nodes = AccountTransactionTreeNode.fromArrayDomain(transactions)
  }

  private createNodes() {
    this.accountPaginationService.transactionsToShow().subscribe((transactions) => {
      this.transactions = transactions
      transactions && this.toNodes(transactions)
      this.initTree = transactions && transactions.length > 0
      this.changeDetectorRef.detectChanges()
    })
  }

  private createPaginationTable() {
    this.accountPaginationService.currentPaginationPages().subscribe((pages: Array<number>) => {
      this.currentPaginationPages = pages
      this.changeDetectorRef.detectChanges()
    })
  }


}




