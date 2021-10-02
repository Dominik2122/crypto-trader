import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from 'src/app/account/account/account.component';
import {ChartModule} from "src/app/util/chart/chart.module";
import { AccountDateRangeFormComponent } from 'src/app/account/account/account-date-range-form/account-date-range-form.component';
import {FormModule} from "src/app/util/form/form.module";
import { EffectsModule } from '@ngrx/effects';
import { AccountDataEffects } from 'src/app/account/account/domain/state/account-data.effects';
import {StoreModule} from "@ngrx/store";
import {accountDataFeatureKey, reducer} from "src/app/account/account/domain/state/account-data.reducer";
import {AccountDataService} from "src/app/account/account/domain/AccountDataService";
import {AccountDataRepository} from "src/app/account/account/domain/state/AccountDataRepository";
import {AccountResource} from "src/app/account/account/inftrastructure/AccountResource";
import { AccountChartComponent } from 'src/app/account/account/account-chart/account-chart.component';
import { AccountTreeComponent } from 'src/app/account/account/account-tree/account-tree.component';
import {TreeModule} from "src/app/util/tree/tree.module";
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";
import {UtilModule} from "src/app/util/util.module";
import {AccountPaginationService} from "src/app/account/account/account-tree/AccountPaginationService";
import {AccountRoutingModule} from "src/app/account/account/account-routing.module";



@NgModule({
  declarations: [
    AccountComponent,
    AccountDateRangeFormComponent,
    AccountChartComponent,
    AccountTreeComponent
  ],
	imports: [
		AccountRoutingModule,
		CommonModule,
		ChartModule,
		FormModule,
		StoreModule.forFeature(accountDataFeatureKey, reducer),
		EffectsModule.forFeature([AccountDataEffects]),
		TreeModule,
		TextBadgeModule,
		UtilModule
	],
  providers: [
    AccountDataService,
    AccountDataRepository,
    AccountResource,
    AccountPaginationService
  ]
})
export class AccountModule { }
