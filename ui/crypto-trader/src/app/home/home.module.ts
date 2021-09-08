import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRootComponent} from './home-root/home-root.component';
import {HomeRoutingModule} from "src/app/home/home-routing.module";
import {HomeTreeModule} from "src/app/home/home-tree/home-tree.module";
import {HomeTitleComponent} from './home-title/home-title.component';
import {HomeSkeletonComponent} from './home-root/home-skeleton/home-skeleton.component';
import {HomeComparisonListModule} from "src/app/home/home-comparison-list/home-comparison-list.module";


@NgModule({
  declarations: [
    HomeRootComponent,
    HomeTitleComponent,
    HomeSkeletonComponent,

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
