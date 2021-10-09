import {Crypto} from "src/app/util/comparison/domain/Crypto";
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";


export class HomeCrypto extends Crypto {

  static fromTreeNode(node: HomeTreeNode): HomeCrypto {
    const nodeData = node.data
    return new HomeCrypto(nodeData.name, nodeData.currentPrice, nodeData.currentPrice - nodeData.netChange)
  }

}
