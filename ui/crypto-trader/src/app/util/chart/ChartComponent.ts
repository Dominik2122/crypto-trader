import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import Chart from 'chart.js/auto';
import {ChartOptionsConfig} from 'src/app/util/chart/domain/ChartOptionsConfig';
import {ChartDataConfig} from 'src/app/util/chart/domain/ChartDataConfig';


@Component({
  selector: 'app-chart',
  templateUrl: './ChartComponent.html',
  styleUrls: ['./ChartComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnChanges, AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;

  @Input()
  id: string;

  @Input()
  chartConfig: ChartOptionsConfig;

  @Input()
  chartData: ChartDataConfig;

  chart: Chart;

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.chartConfig || changes.chartData) && this.chart) {
      this.chart.data = this.chartData.addData() && this.chartData.addData().data;
      this.chart && this.chart.update();
    }
  }

  ngAfterViewInit(): void {
    this.reloadChart();
  }

  private reloadChart(): void {
    // @ts-ignore
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
        ...this.chartConfig.build(),
        ...this.chartData.addData()
      }
    );
  }

}


