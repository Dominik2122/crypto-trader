import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRootComponent } from './home-root/home-root.component';
import {TreeModule} from "src/app/util/tree/tree.module";



@NgModule({
  declarations: [
    HomeRootComponent
  ],
  imports: [
    CommonModule,
    TreeModule
  ]
})
export class HomeModule { }
