import {Component, OnInit} from '@angular/core';
import {pluck, skip, take} from "rxjs/operators";
import {TradingInfo} from "src/app/trading/trading-root/trading-crypto-picker/TradingInfo";
import {ActivatedRoute, Router} from "@angular/router";
import {TradingService} from "src/app/trading/trading-root/TradingService";
import {Subject} from "rxjs";

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
  clearForm$: Subject<void> = new Subject<void>()


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly tradingService: TradingService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      pluck('crypto')
    ).subscribe((data: TradingInfo) => {
      this.data = data
      this.clearForm$.next()
    })

    this.observeSold()
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

  trade() {
    this.tradingService.finalizeTransaction()
  }

  private fetchTradingInfo() {
    this.tradingService.fetchTradingInfo(this.data.cryptoData.name)
      .pipe(take(1))
      .subscribe((tradingInfo: TradingInfo) => {
          this.data = tradingInfo
        }
      )
  }

  private observeSold() {
    this.tradingService.observeSold().pipe(skip(1)).subscribe(() => {
      this.resetDisabled()
      this.clearForm$.next()
      this.tradingService.set(null)
      this.fetchTradingInfo()
    })
  }


  private resetDisabled() {
    this.sellAvailable = true
    this.buyAvailable = true
    this.tradeAvailable = false
  }


}
