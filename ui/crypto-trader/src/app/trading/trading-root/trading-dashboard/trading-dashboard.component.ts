import {Component, OnInit} from '@angular/core';
import {pluck} from "rxjs/operators";
import {TradingInfo} from "src/app/trading/trading-root/trading-crypto-picker/TradingInfo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-trading-dashboard',
  templateUrl: './trading-dashboard.component.html',
  styleUrls: ['./trading-dashboard.component.scss']
})
export class TradingDashboardComponent implements OnInit {


  data: TradingInfo


  constructor(private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      pluck('crypto')
    ).subscribe((data: TradingInfo) => {
      this.data = data
      console.log(data)
    })
  }


}
