import {Component, Input, OnInit} from '@angular/core';
import {TransactionResource} from "src/app/shared/transactions/inftrastructure/TransactionResource";
import {TransactionRequest} from "src/app/shared/transactions/inftrastructure/TransactionRequest";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  @Input()
  crypto: string;

  @Input()
  maxAmount: number;

  amount: number;


  constructor(
    private readonly transactionResource: TransactionResource
  ) {
  }

  ngOnInit(): void {
  }


  sellCrypto() {
    this.transactionResource.tradeCrypto(new TransactionRequest(this.crypto, this.amount))
  }

}
