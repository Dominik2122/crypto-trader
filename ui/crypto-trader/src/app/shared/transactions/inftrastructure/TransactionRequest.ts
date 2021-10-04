export class TransactionRequest {
  constructor(
    public readonly crypto: string,
    public readonly amount: number,
  ) {
  }
}
