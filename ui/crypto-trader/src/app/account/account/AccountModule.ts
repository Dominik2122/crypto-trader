import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountComponent} from 'src/app/account/account/AccountComponent';
import {ChartModule} from "src/app/util/chart/ChartModule";
import {AccountDateRangeFormComponent} from 'src/app/account/account/account-date-range-form/AccountDateRangeFormComponent';
import {FormModule} from "src/app/util/form/FormModule";
import {EffectsModule} from '@ngrx/effects';
import {AccountDataEffects} from 'src/app/account/account/domain/state/AccountDataEffects';
import {StoreModule} from "@ngrx/store";
import {accountDataFeatureKey, reducer} from "src/app/account/account/domain/state/AccountDataReducer";
import {AccountDataService} from "src/app/account/account/domain/AccountDataService";
import {AccountDataRepository} from "src/app/account/account/domain/state/AccountDataRepository";
import {AccountResource} from "src/app/account/account/inftrastructure/AccountResource";
import {AccountChartComponent} from 'src/app/account/account/account-chart/AccountChartComponent';
import {AccountTreeComponent} from 'src/app/account/account/account-tree/AccountTreeComponent';
import {TreeModule} from "src/app/util/tree/TreeModule";
import {TextBadgeModule} from "src/app/util/text-badge/TextBadgeModule";
import {UtilModule} from "src/app/util/UtilModule";
import {AccountPaginationService} from "src/app/account/account/account-tree/AccountPaginationService";
import {AccountRoutingModule} from "src/app/account/account/AccountRoutingModule";


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
