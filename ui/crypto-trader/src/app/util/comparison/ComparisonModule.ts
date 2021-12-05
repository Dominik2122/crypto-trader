import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComparisonComponent} from 'src/app/util/comparison/ComparisonComponent';
import {TextBadgeModule} from 'src/app/util/text-badge/TextBadgeModule';
import {UtilModule} from 'src/app/util/UtilModule';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
	declarations: [
		ComparisonComponent
	],
	exports: [
		ComparisonComponent
	],
  imports: [
    CommonModule,
    TextBadgeModule,
    UtilModule,
    FontAwesomeModule
  ]
})
export class ComparisonModule { }
