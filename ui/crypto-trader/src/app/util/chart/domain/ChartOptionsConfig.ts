import {ChartType} from 'chart.js';
import {ChartXAxis} from 'src/app/util/chart/domain/ChartXAxis';

export class ChartOptionsConfig {

  xAxis: ChartXAxis;
  yAxisTick = true;

  type: ChartType;

  title: string;
  displayLegend = true;

  withXAxis(xAxis: ChartXAxis): ChartOptionsConfig {
    this.xAxis = xAxis;
    return this;
  }

  withDisabledYAxisTicks(): ChartOptionsConfig {
    this.yAxisTick;
    return this;
  }

  withType(type: ChartType): ChartOptionsConfig {
    this.type = type;
    return this;
  }

  withTitle(title: string): ChartOptionsConfig {
    this.title = title;
    return this;
  }

  withoutLegend(): ChartOptionsConfig {
    this.displayLegend = false;
    return this;
  }


  build() {
    return {
      type: this.type,
      options: {
        plugins: {
          legend: {
            display: this.displayLegend
          },
          title: {
            text: this.title,
            display: !!this.title
          }
        },
        scales: {
          x: this.xAxis,
        },
        y: {
          title: {
            display: true,
            text: 'value'
          }
        }
      }
    };
  }

}
