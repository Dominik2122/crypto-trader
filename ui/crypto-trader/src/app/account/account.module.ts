import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {AccountRoutingModule} from "src/app/account/account-routing.module";
import {ChartModule} from "src/app/util/chart/chart.module";
import { AccountChartComponent } from './account-chart/account-chart.component';
import {FormModule} from "src/app/util/form/form.module";



@NgModule({
  declarations: [
    AccountComponent,
    AccountChartComponent
  ],
  imports: [
    AccountRoutingModule,
    CommonModule,
    ChartModule,
    FormModule
  ]
})
export class AccountModule { }
