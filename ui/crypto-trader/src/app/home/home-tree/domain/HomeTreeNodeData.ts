import {TreeNodeData} from "src/app/util/tree/ui/models/tree-node-data.model";

export class HomeTreeNodeData implements TreeNodeData {

  constructor(
  readonly name: string,
  readonly currentPrice: number,
  readonly netChange: number,
  readonly lastFetchingDate: string) {}

  static fromDTO(dto): HomeTreeNodeData {

    const date: Date = new Date(dto.price.date)
    return new HomeTreeNodeData(
      dto.name,
      Math.round(dto.price.value * 100)/100,
      Math.round((+dto.price.value - +dto.change.value)*100)/100,
      `${date.getDate()}.${date.getUTCMonth() + 1}.${date.getFullYear()}`
    )
  }

}
