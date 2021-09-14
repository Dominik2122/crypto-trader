import {Component, Input} from '@angular/core';
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";
import 'chartjs-adapter-moment';
import {ChartOptionsConfig} from "src/app/util/chart/domain/ChartOptionsConfig";
import {ChartXAxis, xAxisTime} from "src/app/util/chart/domain/ChartXAxis";
import {ChartDataConfig, ChartDataset} from "src/app/util/chart/domain/ChartDataConfig";


@Component({
  selector: 'app-home-tree-child-component',
  templateUrl: './HomeTreeNodeChildComponent.html',
  styleUrls: ['./HomeTreeNodeChildComponent.scss']
})
export class HomeTreeNodeChildComponent {

  @Input()
  data: Array<HomeTreeNodePastData>

  @Input()
  id: string

  @Input()
  name: string

  chartConfig: ChartOptionsConfig

  chartData: ChartDataConfig


  ngOnInit() {
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
