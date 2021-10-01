import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import Chart from "chart.js/auto";
import {ChartData} from "chart.js";
import {ChartOptionsConfig} from "src/app/util/chart/domain/ChartOptionsConfig";
import {ChartDataConfig} from "src/app/util/chart/domain/ChartDataConfig";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;

  @Input()
  id: string

  @Input()
  chartConfig: ChartOptionsConfig

  @Input()
  chartData: ChartDataConfig

  chart: Chart

  ngOnChanges(changes: SimpleChanges) {
    if (changes.chartConfig || changes.chartData) {
        this.chart.data = this.chartData.addData().data
        this.chart && this.chart.update()
    }
  }

  ngAfterViewInit() {
    this.reloadChart()
  }

  private reloadChart() {
    // @ts-ignore
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
        ...this.chartConfig.build(),
        ...this.chartData.addData()
      }
    )
  }

}


