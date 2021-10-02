
export class TransactionDTO {
  constructor(readonly id: number,
              readonly price: number,
              readonly date: string,
              readonly value: string,
              readonly amount: string,
              readonly crypto: string) {
  }

}
