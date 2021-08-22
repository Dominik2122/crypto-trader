import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRootComponent } from './home-root/home-root.component';
import {HomeRoutingModule} from "src/app/home/home-routing.module";
import {HomeTreeModule} from "src/app/home/home-tree/home-tree.module";



@NgModule({
  declarations: [
    HomeRootComponent,

  ],
	imports: [
		CommonModule,
		HomeRoutingModule,
		HomeTreeModule
	]
})
export class HomeModule { }
