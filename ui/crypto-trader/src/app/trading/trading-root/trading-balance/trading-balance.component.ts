import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {OwnedCrypto} from "src/app/account/user-crypto/domain/OwnedCrypto";
import {TradingService} from "src/app/trading/trading-root/TradingService";
import {TransactionRequest} from "src/app/shared/transactions/inftrastructure/TransactionRequest";

@Component({
  selector: 'app-trading-balance',
  templateUrl: './trading-balance.component.html',
  styleUrls: ['./trading-balance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingBalanceComponent implements OnInit {

  @Input()
  balance: number

  @Input()
  ownedCrypto: OwnedCrypto

  transaction: TransactionRequest

  priceAdded: number

  constructor(
    private readonly tradingService: TradingService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.tradingService.observe().subscribe((transaction) => {
      this.transaction = transaction
      this.createPriceAdded()
      this.changeDetectorRef.detectChanges()
    })
  }

  createPriceAdded(): void {
    if (this.transaction) {
      this.priceAdded = -this.transaction.amount * this.ownedCrypto.price
    } else {
      this.priceAdded = null
    }
    this.changeDetectorRef.detectChanges()
  }

}
