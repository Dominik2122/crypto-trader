import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {HomeTreeNodeData} from "src/app/home/home-tree/domain/HomeTreeNodeData";
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";
import {HomeTreeNodeDTO} from "src/app/home/home-tree/infrastructure/HomeTreeNodeDTO";
import {Transaction} from "src/app/account/domain/Transaction";

export class AccountTreeNode implements TreeNode {

  constructor(
    readonly id: string,
    readonly data: HomeTreeNodeData,
    readonly level: number,
    public expanded: boolean,
    public position: number,
    public childData?: Array<HomeTreeNodePastData>,
    readonly parent?: TreeNode) {}

  static fromDomain(domain: Transaction): AccountTreeNode {
    return new AccountTreeNode(
      'HOME-' + domain.id,
      HomeTreeNodeData.fromDTO(domain),
      0,
      false,
      null,
      HomeTreeNodePastData.fromDTO(dto)
    )
  }

  static fromArrayDomain(arrayDomain: Array<HomeTreeNodeDTO>): Array<HomeTreeNode> {
    return arrayDTO.map((dto: HomeTreeNodeDTO, index: number) => HomeTreeNode.fromDTO(dto).withPosition(index))
  }

  withPosition(position: number): HomeTreeNode {
    this.position = position
    return this
  }

}
