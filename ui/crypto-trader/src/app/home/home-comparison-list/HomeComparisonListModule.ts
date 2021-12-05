import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComparisonListComponent} from 'src/app/home/home-comparison-list/HomeComparisonListComponent';
import {ComparisonModule} from 'src/app/util/comparison/ComparisonModule';
import {HomeTreeNodeService} from 'src/app/home/home-tree/domain/service/HomeTreeNodeService';


@NgModule({
  providers: [
    HomeTreeNodeService
  ],
  declarations: [
    HomeComparisonListComponent
  ],
  exports: [
    HomeComparisonListComponent
  ],
  imports: [
    CommonModule,
    ComparisonModule
  ]
})
export class HomeComparisonListModule { }
