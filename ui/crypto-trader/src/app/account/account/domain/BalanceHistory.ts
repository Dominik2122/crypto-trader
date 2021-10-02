import {AccountPastDataDTO} from "src/app/account/account/inftrastructure/AccountPastDataDTO";

export class BalanceHistory {
  constructor(readonly date: Date,
              readonly balance: number) {

  }

  static fromArrayDTO(arrayDTO: Array<AccountPastDataDTO>): Array<BalanceHistory> {
    return arrayDTO.map(dto => new BalanceHistory(new Date(dto.date), dto.balance))
  }


}
