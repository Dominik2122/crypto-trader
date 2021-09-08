import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparisonComponent } from './comparison.component';
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";
import {UtilModule} from "src/app/util/util.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



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
