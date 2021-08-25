import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {TreeNodeDTO} from "src/app/home/home-tree/infrastructure/TreeNodeDTO";
import {TreeNodeData} from "src/app/util/tree/ui/models/tree-node-data.model";

export class HomeTreeNodeData implements TreeNodeData {

  constructor(
  readonly name: string,
  readonly currentPrice: number,
  readonly netChange: number,
  readonly lastFetchingDate: Date) {}

  static fromDTO(dto): HomeTreeNodeData {
    return new HomeTreeNodeData(
      dto.name,
      dto.price.value,
      +dto.price.value - +dto.change.value,
      new Date(dto.price.date)
    )
  }

}
