import {TransactionDTO} from "src/app/account/account/inftrastructure/TransactionDTO";

export class Transaction {
  constructor(readonly id: number,
              readonly date: Date,
              readonly price: number,
              readonly value: number,
              readonly amount: number,
              readonly crypto: string) {
  }

  static fromDTO(dtos: Array<TransactionDTO>): Array<Transaction> {
    return dtos.map((dto) => new Transaction(
      dto.id,
      new Date(dto.date),
      dto.price,
      +dto.value,
     +dto.amount,
      dto.crypto
    ))
  }
}
