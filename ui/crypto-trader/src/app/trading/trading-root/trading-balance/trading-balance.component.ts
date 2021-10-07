import {Component, Input, OnInit} from '@angular/core';
import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";
import {TradingService} from "src/app/trading/trading-root/TradingService";
import {TransactionRequest} from "src/app/shared/transactions/inftrastructure/TransactionRequest";

@Component({
  selector: 'app-trading-balance',
  templateUrl: './trading-balance.component.html',
  styleUrls: ['./trading-balance.component.scss']
})
export class TradingBalanceComponent implements OnInit {

  @Input()
  balance: number

  @Input()
  ownedCrypto: OwnedCrypto

  transaction: TransactionRequest

  priceAdded: number

  constructor(
    private readonly tradingService: TradingService
  ) {
  }

  ngOnInit(): void {
    this.tradingService.observe().subscribe((transaction) => {
      this.transaction = transaction
      this.createPriceAdded()
    })
  }

  createPriceAdded(): void {
    this.priceAdded = this.transaction.amount * this.ownedCrypto.price
  }

}
