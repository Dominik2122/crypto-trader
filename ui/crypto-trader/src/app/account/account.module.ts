import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {AccountRoutingModule} from "src/app/account/account-routing.module";
import {ChartModule} from "src/app/util/chart/chart.module";
import { AccountDateRangeFormComponent } from 'src/app/account/account-date-range-form/account-date-range-form.component';
import {FormModule} from "src/app/util/form/form.module";
import { EffectsModule } from '@ngrx/effects';
import { AccountDataEffects } from 'src/app/account/domain/state/account-data.effects';
import {StoreModule} from "@ngrx/store";
import {accountDataFeatureKey, reducer} from "src/app/account/domain/state/account-data.reducer";
import {AccountDataService} from "src/app/account/domain/AccountDataService";
import {AccountDataRepository} from "src/app/account/domain/state/AccountDataRepository";
import {AccountResource} from "src/app/account/inftrastructure/AccountResource";
import { AccountChartComponent } from './account-chart/account-chart.component';
import { AccountTreeComponent } from './account-tree/account-tree.component';



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
    EffectsModule.forFeature([AccountDataEffects])
  ],
  providers: [
    AccountDataService,
    AccountDataRepository,
    AccountResource
  ]
})
export class AccountModule { }
