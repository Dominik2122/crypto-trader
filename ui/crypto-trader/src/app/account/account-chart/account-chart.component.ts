import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ChartOptionsConfig} from "src/app/util/chart/domain/ChartOptionsConfig";
import {ChartXAxis, xAxisTime} from "src/app/util/chart/domain/ChartXAxis";
import {ChartDataConfig, ChartDataset} from "src/app/util/chart/domain/ChartDataConfig";
import {BalanceHistory} from "src/app/account/domain/BalanceHistory";

@Component({
  selector: 'app-account-chart',
  templateUrl: './account-chart.component.html',
  styleUrls: ['./account-chart.component.scss']
})
export class AccountChartComponent implements OnInit {

  @Input()
  balanceHistory: Array<BalanceHistory>;

  isLoaded: boolean = false;

  chartConfig: ChartOptionsConfig

  chartData: ChartDataConfig

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.balanceHistory && this.balanceHistory) {
      this.isLoaded = true
      this.createChartConfig()
    }
  }

  ngOnInit(): void {
  }


  private createChartConfig(): void {
    this.chartConfig = new ChartOptionsConfig()
      .withXAxis(new ChartXAxis(
        'timeseries',
        {display: false, text: null},
        {parser: xAxisTime.DaysAndMonth}))
      .withType('line')

    this.chartData = new ChartDataConfig()
      .withLabels(this.balanceHistory.map(data => data.date))
      .withDatasets([new ChartDataset(
        'Balance',
        this.balanceHistory.map(data => data.balance),
        'green',
        'black',
        0.1
      )])
  }

}
