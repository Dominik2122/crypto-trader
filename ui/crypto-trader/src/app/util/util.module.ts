import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './pipes/price.pipe';



@NgModule({
	declarations: [
		PricePipe
	],
	exports: [
		PricePipe
	],
	imports: [
		CommonModule
	]
})
export class UtilModule { }
