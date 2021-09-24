import {HeaderAccountPastDataDTO} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountPastDataDTO";

export class HeaderBalanceHistoryNode {
  constructor(readonly date: Date,
              readonly balance: number) {

  }

  static fromArrayDTO(arrayDTO: Array<HeaderAccountPastDataDTO>): Array<HeaderBalanceHistoryNode> {
    return arrayDTO.map(dto => new HeaderBalanceHistoryNode(new Date(dto.date), dto.balance))
  }


}
