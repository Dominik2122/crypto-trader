import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {HomeTreeNodeData} from "src/app/home/home-tree/domain/HomeTreeNodeData";
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";
import {HomeTreeNodeDTO} from "src/app/home/home-tree/infrastructure/HomeTreeNodeDTO";
import {Transaction} from "src/app/account/account/domain/Transaction";
import {OwnedCryptoTreeNodeData} from "src/app/account/user-crypto/user-crypto-tree/OwnedCryptoTreeNodeData";
import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";

export class OwnedCryptoTreeNode implements TreeNode {

  constructor(
    readonly id: string,
    readonly data: OwnedCryptoTreeNodeData,
    readonly level: number,
    public expanded: boolean,
    public position: number
  ) {
  }

  static fromDomain(domain: OwnedCrypto): OwnedCryptoTreeNode {
    return new OwnedCryptoTreeNode(
      'OWNED-CRYPTO-' + Math.floor(Math.random() * 10000),
      OwnedCryptoTreeNodeData.fromDomain(domain),
      0,
      false,
      null,
    )
  }

}
