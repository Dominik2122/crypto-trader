import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from 'src/app/util/button/ButtonComponent';


@NgModule({
	declarations: [
		ButtonComponent
	],
	exports: [
		ButtonComponent
	],
	imports: [
		CommonModule
	]
})
export class ButtonModule { }
