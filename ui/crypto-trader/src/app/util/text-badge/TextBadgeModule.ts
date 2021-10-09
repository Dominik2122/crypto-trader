import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextBadgeComponent} from 'src/app/util/text-badge/TextBadgeComponent';


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
