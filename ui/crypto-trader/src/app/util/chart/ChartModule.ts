import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from 'src/app/util/chart/ChartComponent';


@NgModule({
  declarations: [
    ChartComponent
  ],
  exports: [
    ChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartModule {
}
