import {TransactionDTO} from "src/app/shared/transactions/inftrastructure/TransactionDTO";

export class Transaction {
  constructor(
    readonly id: number,
    readonly crypto: string,
    readonly date: Date,
    readonly price: number,
    readonly amount: number,
    readonly value: number,
  ) {
  }

  static fromDTO(dto: TransactionDTO): Transaction {
    return new Transaction(
      dto.id,
      dto.crypto,
      new Date(dto.date),
      dto.price,
      parseFloat(dto.amount),
      parseFloat(dto.value)
    )
  }
}
