import Chart, {ChartConfiguration} from "chart.js/auto";
import {ChartData, ChartOptions, ChartType, Plugin} from "chart.js";


export class ChartConfig implements ChartConfiguration {

  type: ChartType;

  data: ChartData


  options: ChartOptions

  plugins: Array<Plugin>





  static Builder = class ChartConfigurationBuilder {


    withData(data: any) {
    this.type = 'line'
    }


    default() {

    }
  }
}
