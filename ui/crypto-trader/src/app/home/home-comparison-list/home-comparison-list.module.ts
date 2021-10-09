import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComparisonListComponent} from './home-comparison-list.component';
import {ComparisonModule} from "src/app/util/comparison/comparison.module";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/home-tree-node.service";


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
