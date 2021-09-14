import {ChartType} from "chart.js";
import {ChartXAxis} from "src/app/util/chart/domain/ChartXAxis";

export class ChartOptionsConfig {

  xAxis: ChartXAxis

  type: ChartType

  title: string

  withXAxis(xAxis: ChartXAxis): ChartOptionsConfig {
    this.xAxis = xAxis
    return this
  }

  withType(type: ChartType): ChartOptionsConfig {
    this.type = type
    return this
  }

  withTitle(title: string): ChartOptionsConfig {
    this.title = title
    return this
  }


  build() {
    return {
      type: this.type,
      options: {
        plugins: {
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
    }
  }

}
