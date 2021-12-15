import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {HomeTreeNodePastData} from 'src/app/home/home-tree/domain/HomeTreeNodePastData';
import {ChartOptionsConfig} from 'src/app/util/chart/domain/ChartOptionsConfig';
import {ChartDataConfig, ChartDataset} from 'src/app/util/chart/domain/ChartDataConfig';
import {ChartXAxis, xAxisTime} from 'src/app/util/chart/domain/ChartXAxis';

@Component({
  selector: 'app-trading-chart',
  templateUrl: './trading-chart.component.html',
  styleUrls: ['./trading-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingChartComponent implements OnChanges, OnInit {

  @Input()
  data: Array<HomeTreeNodePastData>;

  @Input()
  id: string;

  @Input()
  currentPrice: string;

  chartConfig: ChartOptionsConfig;

  chartData: ChartDataConfig;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data || changes.currentPrice) {
      this.createChart();
    }
  }

  ngOnInit(): void {
  }

  private createChart(): void {
    this.chartConfig = new ChartOptionsConfig()
      .withXAxis(new ChartXAxis(
        'timeseries',
        {display: false, text: null},
        {parser: xAxisTime.DaysAndMonth}))
      .withType('line');

    this.chartData = new ChartDataConfig()
      .withLabels(this.data.map(data => data.date))
      .withDatasets([new ChartDataset(
        'Current price: ' + this.currentPrice + '$',
        this.data.map(data => data.price),
        'green',
        'black',
        2
      )]);
  }
}
