import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRootComponent } from './home-root/home-root.component';
import {TreeModule} from "src/app/util/tree/tree.module";
import {HomeRoutingModule} from "src/app/home/home-routing.module";



@NgModule({
  declarations: [
    HomeRootComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TreeModule
  ]
})
export class HomeModule { }
