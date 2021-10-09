import {TreeNode} from "src/app/util/tree/ui/domain/TreeNode";
import {HomeTreeNodeData} from "src/app/home/home-tree/domain/HomeTreeNodeData";
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";
import {HomeTreeNodeDTO} from "src/app/home/home-tree/infrastructure/HomeTreeNodeDTO";

export class HomeTreeNode implements TreeNode {

  constructor(
  readonly id: string,
  readonly data: HomeTreeNodeData,
  readonly level: number,
  public expanded: boolean,
  public position: number,
  public childData?: Array<HomeTreeNodePastData>,
  readonly parent?: TreeNode) {}

  static fromDTO(dto: HomeTreeNodeDTO): HomeTreeNode {
    return new HomeTreeNode(
      'HOME-' + dto.id,
      HomeTreeNodeData.fromDTO(dto),
      0,
      false,
      null,
      HomeTreeNodePastData.fromDTO(dto)
    )
  }

  static fromArrayDTO(arrayDTO: Array<HomeTreeNodeDTO>): Array<HomeTreeNode> {
    return arrayDTO.map((dto: HomeTreeNodeDTO, index: number) => HomeTreeNode.fromDTO(dto).withPosition(index))
  }

  withPosition(position: number): HomeTreeNode {
    this.position = position
    return this
  }

}
