import {Component} from '@angular/core';
import {HomeTreeNodePastData} from 'src/app/home/home-tree/domain/HomeTreeNodePastData';

@Component({
  template: '<app-trading-chart [data]="data"></app-trading-chart>'
})
export class TradingChartWrapperComponent {
  data: Array<HomeTreeNodePastData>;
}
