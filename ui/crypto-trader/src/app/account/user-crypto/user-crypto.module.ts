import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserCryptoRootComponent} from "src/app/account/user-crypto/user-crypto-root/user-crypto-root.component";
import {UserCryptoRootRoutingModule} from "src/app/account/user-crypto/user-crypto-root-routing.module";
import {AccountRootModule} from "src/app/account/account-root.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {UserCryptoChartComponent} from "src/app/account/user-crypto/user-crypto-chart/user-crypto-chart.component";
import {ChartModule} from "src/app/util/chart/chart.module";
import {UserCryptoTreeComponent} from "src/app/account/user-crypto/user-crypto-tree/user-crypto-tree.component";
import {TreeModule} from "src/app/util/tree/tree.module";
import {UtilModule} from "src/app/util/util.module";
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";



@NgModule({
  declarations: [
    UserCryptoRootComponent,
    UserCryptoChartComponent,
    UserCryptoTreeComponent
  ],
  imports: [
    FontAwesomeModule,
    UserCryptoRootRoutingModule,
    CommonModule,
    AccountRootModule,
    ChartModule,
    TreeModule,
    UtilModule,
    TextBadgeModule
  ]
})
export class UserCryptoModule { }
