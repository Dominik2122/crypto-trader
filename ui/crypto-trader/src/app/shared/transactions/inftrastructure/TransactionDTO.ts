export class TransactionDTO {
 constructor(
   readonly id: number,
   readonly crypto: string,
   readonly date: string,
   readonly price: number,
   readonly amount: string,
   readonly value: string,
 ) {}
}
