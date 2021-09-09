import {TreeNodeDTO} from "src/app/home/home-tree/infrastructure/TreeNodeDTO";

export class HomeTreeNodeHistoryPrice {

  constructor() {
  }


  static fromDTO(dto: TreeNodeDTO): Array<HomeTreeNodeHistoryPrice> {
    const prices: Array<HomeTreeNodeHistoryPrice> = []
    for (const price of []) {
      prices.push(new HomeTreeNodeHistoryPrice())
    }
    return prices
  }
}
