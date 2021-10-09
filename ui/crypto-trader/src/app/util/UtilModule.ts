import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PricePipe} from 'src/app/util/pipes/PricePipe';


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
