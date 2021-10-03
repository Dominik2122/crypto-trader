import {Component, OnInit} from '@angular/core';
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";
import {OwnedCryptoTreeNode} from "src/app/account/user-crypto/user-crypto-tree/OwnedCryptoTreeNode";
import {OwnedCryptoService} from "src/app/account/user-crypto/domain/OwnedCryptoService";
import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";

@Component({
  selector: 'app-user-crypto-tree',
  templateUrl: './user-crypto-tree.component.html',
  styleUrls: ['./user-crypto-tree.component.scss']
})
export class UserCryptoTreeComponent implements OnInit {

  ownedCrypto: Array<OwnedCrypto>

  NUMBER_OF_COLUMNS: number = 5;

  nodes: Array<TreeNode>;

  initTree: boolean = false

  accountTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Crypto', 'Price', 'Amount', 'Value'])
    .withFlex(['0 1 25%', '0 1 25%', '0 1 25%', '0 1 25%'])
    .build(this.NUMBER_OF_COLUMNS)

  viewStrategy: TreeViewStrategy = TreeViewStrategy.TEMPLATE

  constructor(
    private readonly ownedCryptoService: OwnedCryptoService
  ) {
  }

  ngOnInit(): void {
    this.createNodes()
  }


  private toNodes(cryptos: Array<OwnedCrypto>): void {
    this.nodes = cryptos.map((crypto) => OwnedCryptoTreeNode.fromDomain(crypto))
  }

  private createNodes() {
    this.ownedCryptoService.getCryptos().subscribe((ownedCrypto) => {
      this.ownedCrypto = ownedCrypto
      ownedCrypto && this.toNodes(ownedCrypto)
      this.initTree = ownedCrypto && ownedCrypto.length > 0
    })
  }

}
