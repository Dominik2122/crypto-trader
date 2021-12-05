import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRootComponent} from 'src/app/home/home-root/HomeRootComponent';
import {HomeRoutingModule} from 'src/app/home/HomeRoutingModule';
import {HomeTreeModule} from 'src/app/home/home-tree/HomeTreeModule';
import {HomeTitleComponent} from 'src/app/home/home-title/HomeTitleComponent';
import {HomeComparisonListModule} from 'src/app/home/home-comparison-list/HomeComparisonListModule';


@NgModule({
  declarations: [
    HomeRootComponent,
    HomeTitleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeTreeModule,
    HomeComparisonListModule
  ]
})
export class HomeModule {

}
