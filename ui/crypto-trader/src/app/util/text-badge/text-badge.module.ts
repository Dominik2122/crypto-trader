import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextBadgeComponent} from './text-badge.component';


@NgModule({
	declarations: [
		TextBadgeComponent
	],
	exports: [
		TextBadgeComponent
	],
	imports: [
		CommonModule
	]
})
export class TextBadgeModule { }
