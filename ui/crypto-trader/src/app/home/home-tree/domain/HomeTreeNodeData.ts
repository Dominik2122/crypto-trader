import {TreeNodeData} from "src/app/util/tree/ui/models/tree-node-data.model";

export class HomeTreeNodeData implements TreeNodeData {

  constructor(
  readonly name: string,
  readonly currentPrice: string,
  readonly netChange: string,
  readonly percentageNetChange: number) {}

  static fromDTO(dto): HomeTreeNodeData {
    const currentPriceRounded: number = dto.price.value > 100 ?
      Math.round(dto.price.value ) :
      Math.round(dto.price.value * 100)/100
    const netChange: number = Math.round((+dto.price.value - + dto.change.value)*10)/10
    const percentageNetChange: number = Math.round(netChange / currentPriceRounded * 10000 ) / 100
    return new HomeTreeNodeData(
      dto.name,
      `${currentPriceRounded}$`,
      `${netChange}$`,
      percentageNetChange
    )
  }

}
