import {PriceDTO} from "src/app/home/home-tree/infrastructure/PriceDTO";
import {PastDataDTO} from "src/app/home/home-tree/infrastructure/PastDataDTO";

export class HomeTreeNodeDTO {

  id: number;

  change: PriceDTO;

  name: string;

  price: PriceDTO;

  pastData: Array<PastDataDTO>


}
