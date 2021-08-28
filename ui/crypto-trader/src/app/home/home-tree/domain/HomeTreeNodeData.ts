import {TreeNodeData} from "src/app/util/tree/ui/models/tree-node-data.model";

export class HomeTreeNodeData implements TreeNodeData {

  constructor(
  readonly name: string,
  readonly currentPrice: number,
  readonly netChange: number,
  readonly lastFetchingDate: string) {}

  static fromDTO(dto): HomeTreeNodeData {
    const currentPriceRounded: number = dto.price.value > 100 ?
      Math.round(dto.price.value ) :
      Math.round(dto.price.value * 100)/100

    const date: Date = new Date(dto.price.date)
    return new HomeTreeNodeData(
      dto.name,
      currentPriceRounded,
      Math.round((+dto.price.value - + dto.change.value)*10)/10,
      `${date.getHours()}:${date.getMinutes()}`
    )
  }

}
