import {Component, OnInit} from '@angular/core';
import {pluck} from "rxjs/operators";
import {TradingInfo} from "src/app/trading/trading-root/trading-crypto-picker/TradingInfo";
import {ActivatedRoute} from "@angular/router";
import {TradingService} from "src/app/trading/trading-root/TradingService";

@Component({
  selector: 'app-trading-dashboard',
  templateUrl: './trading-dashboard.component.html',
  styleUrls: ['./trading-dashboard.component.scss']
})
export class TradingDashboardComponent implements OnInit {


  data: TradingInfo

  sellAvailable: boolean = true
  buyAvailable: boolean = true
  tradeAvailable: boolean = false

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly tradingService: TradingService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      pluck('crypto')
    ).subscribe((data: TradingInfo) => {
      this.data = data
    })
  }

  getBuyMaxAmount(): number {
    return Math.floor(this.data.balance * 100 / this.data.cryptoData.currentPrice) / 100
  }

  onSellAmount(amount: number): void {
    if (!!amount) {
      this.buyAvailable = false
      this.tradeAvailable = true
    } else {
      this.resetDisabled()
    }
    this.tradingService.prepareNewTransaction(this.data.cryptoData.name, -amount)

  }

  onBuyAmount(amount: number): void {
    if (!!amount) {
      this.sellAvailable = false
      this.tradeAvailable = true
    } else {
      this.resetDisabled()
    }
    this.tradingService.prepareNewTransaction(this.data.cryptoData.name, amount)

  }

  private resetDisabled() {
    this.sellAvailable = true
    this.buyAvailable = true
    this.tradeAvailable = false
  }


}
