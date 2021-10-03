import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRootComponent } from 'src/app/account/account-root/account-root.component';
import {RouterModule} from "@angular/router";
import {AccountRoutingModule} from "src/app/account/account-root-routing.module";
import {OwnedCryptoResource} from "src/app/account/user-crypto/infrastructure/OwnedCryptoResource";
import { UserCryptoChartComponent } from './user-crypto/user-crypto-chart/user-crypto-chart.component';
import { UserCryptoTreeComponent } from './user-crypto/user-crypto-tree/user-crypto-tree.component';



@NgModule({
  declarations: [
    AccountRootComponent,
    UserCryptoChartComponent,
    UserCryptoTreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule
  ],
  providers: [
    OwnedCryptoResource
  ]
})
export class AccountRootModule { }
