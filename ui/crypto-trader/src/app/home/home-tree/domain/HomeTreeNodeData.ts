import {TreeNodeData} from "src/app/util/tree/ui/domain/TreeNodeData";

export class HomeTreeNodeData implements TreeNodeData {

  constructor(
  readonly name: string,
  readonly currentPrice: number,
  readonly netChange: number,
  readonly percentageNetChange: number) {}

  static fromDTO(dto): HomeTreeNodeData {
    const currentPrice: number = dto.price.value
    const netChange: number = +dto.price.value - +dto.change.value
    const percentageNetChange: number = netChange / currentPrice * 100
    return new HomeTreeNodeData(
      dto.name,
      currentPrice,
      netChange,
      percentageNetChange
    )
  }

}
