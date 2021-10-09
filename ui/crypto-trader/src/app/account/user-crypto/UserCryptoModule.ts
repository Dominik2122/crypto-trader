import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserCryptoRootComponent} from "src/app/account/user-crypto/user-crypto-root/UserCryptoRootComponent";
import {UserCryptoRoutingModule} from "src/app/account/user-crypto/UserCryptoRoutingModule";
import {AccountRootModule} from "src/app/account/AccountRootModule";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {UserCryptoChartComponent} from "src/app/account/user-crypto/user-crypto-chart/UserCryptoChartComponent";
import {ChartModule} from "src/app/util/chart/ChartModule";
import {UserCryptoTreeComponent} from "src/app/account/user-crypto/user-crypto-tree/UserCryptoTreeComponent";
import {TreeModule} from "src/app/util/tree/TreeModule";
import {UtilModule} from "src/app/util/UtilModule";
import {TextBadgeModule} from "src/app/util/text-badge/TextBadgeModule";
import {ButtonModule} from "src/app/util/button/ButtonModule";
import {NgxPopperjsModule} from "ngx-popperjs";
import {TransactionsModule} from "src/app/shared/transactions/TransactionsModule";
import {FormModule} from "src/app/util/form/FormModule";


@NgModule({
  declarations: [
    UserCryptoRootComponent,
    UserCryptoChartComponent,
    UserCryptoTreeComponent
  ],
  imports: [
    FontAwesomeModule,
    UserCryptoRoutingModule,
    CommonModule,
    AccountRootModule,
    ChartModule,
    TreeModule,
    UtilModule,
    TextBadgeModule,
    ButtonModule,
    NgxPopperjsModule,
    TransactionsModule,
    FormModule
  ]
})
export class UserCryptoModule { }
