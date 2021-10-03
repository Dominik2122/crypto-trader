import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRootComponent } from 'src/app/account/account-root/account-root.component';
import {RouterModule} from "@angular/router";
import {AccountRoutingModule} from "src/app/account/account-root-routing.module";
import {OwnedCryptoResource} from "src/app/account/user-crypto/infrastructure/OwnedCryptoResource";
import {ChartModule} from "src/app/util/chart/chart.module";
import {OwnedCryptoService} from "src/app/account/user-crypto/domain/OwnedCryptoService";
import {OwnedCryptoStorageService} from "src/app/account/user-crypto/domain/OwnedCryptoStorageService";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TreeModule} from "src/app/util/tree/tree.module";
import {UtilModule} from "src/app/util/util.module";
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";



@NgModule({
  declarations: [
    AccountRootComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    ChartModule,
    FontAwesomeModule,
    TreeModule,
    UtilModule,
    TextBadgeModule
  ],
  providers: [
    OwnedCryptoResource,
    OwnedCryptoService,
    OwnedCryptoStorageService
  ]
})
export class AccountRootModule { }
