import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRootComponent } from './header-root/header-root.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";



@NgModule({
	declarations: [
		HeaderRootComponent
	],
	exports: [
		HeaderRootComponent
	],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class HeaderModule { }
