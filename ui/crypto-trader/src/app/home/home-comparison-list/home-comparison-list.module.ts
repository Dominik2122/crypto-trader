import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComparisonListComponent } from './home-comparison-list.component';
import { HomeComparisonComponent } from './home-comparison/home-comparison.component';



@NgModule({
  declarations: [
    HomeComparisonListComponent,
    HomeComparisonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeComparisonListModule { }
