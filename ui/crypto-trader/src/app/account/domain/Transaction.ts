import {TransactionDTO} from "src/app/account/inftrastructure/TransactionDTO";

export class Transaction {
  constructor(id: number,
              date: Date,
              price: number,
              value: number,
              amount: number,
              crypto: string) {
  }

  static fromDTO(dtos: Array<TransactionDTO>): Array<Transaction> {
    return dtos.map((dto) => new Transaction(
      dto.id,
      new Date(dto.date),
      dto.price,
      1,
     1,
      dto.crypto
    ))
  }
}
