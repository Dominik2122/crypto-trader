import {HomeTreeNodeDTO} from 'src/app/home/home-tree/infrastructure/HomeTreeNodeDTO';

export class HomeTreeNodePastData {

  constructor(
    public readonly price: number,
    public readonly date: Date
  ) {
  }

  static fromDTO(dto: HomeTreeNodeDTO): Array<HomeTreeNodePastData> {
    const prices: Array<HomeTreeNodePastData> = [];

    for (const price of dto.pastData) {
      prices.push(new HomeTreeNodePastData(parseFloat(price.value), new Date(price.date)));
    }
    return prices;
  }
}
