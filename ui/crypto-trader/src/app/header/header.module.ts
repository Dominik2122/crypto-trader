import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRootComponent } from './header-root/header-root.component';



@NgModule({
	declarations: [
		HeaderRootComponent
	],
	exports: [
		HeaderRootComponent
	],
	imports: [
		CommonModule
	]
})
export class HeaderModule { }
