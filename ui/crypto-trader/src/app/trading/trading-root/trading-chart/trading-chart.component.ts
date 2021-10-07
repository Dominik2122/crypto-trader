import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";
import {ChartOptionsConfig} from "src/app/util/chart/domain/ChartOptionsConfig";
import {ChartDataConfig, ChartDataset} from "src/app/util/chart/domain/ChartDataConfig";
import {ChartXAxis, xAxisTime} from "src/app/util/chart/domain/ChartXAxis";

@Component({
  selector: 'app-trading-chart',
  templateUrl: './trading-chart.component.html',
  styleUrls: ['./trading-chart.component.scss']
})
export class TradingChartComponent implements OnInit {

  @Input()
  data: Array<HomeTreeNodePastData>

  @Input()
  id: string

  @Input()
  name: string

  chartConfig: ChartOptionsConfig

  chartData: ChartDataConfig


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if (changes.data) {
      this.createChart()
    }
  }


  private createChart() {
    this.chartConfig = new ChartOptionsConfig()
      .withXAxis(new ChartXAxis(
        'timeseries',
        {display: false, text: null},
        {parser: xAxisTime.DaysAndMonth}))
      .withType('line')

    this.chartData = new ChartDataConfig()
      .withLabels(this.data.map(data => data.date))
      .withDatasets([new ChartDataset(
        this.name,
        this.data.map(data => data.price),
        'green',
        'black',
        2
      )])
  }
}
