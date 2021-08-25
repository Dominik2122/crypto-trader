import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {TreeNodeDTO} from "src/app/home/home-tree/infrastructure/TreeNodeDTO";
import {TreeNodeData} from "src/app/util/tree/ui/models/tree-node-data.model";
import {HomeTreeNodeData} from "src/app/home/home-tree/domain/HomeTreeNodeData";

export class HomeTreeNode implements TreeNode {

  constructor(
  readonly id: string,
  readonly data: HomeTreeNodeData,
  readonly level: number,
  public expanded: boolean,
  public position: number,
  public children?: Array<TreeNode>,
  readonly parent?: TreeNode) {}

  static fromDTO(dto: TreeNodeDTO): HomeTreeNode {
    return new HomeTreeNode(
      'HOME-' + dto.id,
      HomeTreeNodeData.fromDTO(dto),
      0,
      false,
      null
    )
  }

  static fromArrayDTO(arrayDTO: Array<TreeNodeDTO>): Array<HomeTreeNode> {
    return arrayDTO.map((dto: TreeNodeDTO, index: number) => HomeTreeNode.fromDTO(dto).withPosition(index))
  }

  withPosition(position: number): HomeTreeNode {
    this.position = position
    return this
  }

}
