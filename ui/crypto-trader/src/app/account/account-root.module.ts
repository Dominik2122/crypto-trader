import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRootComponent} from 'src/app/account/account-root/account-root.component';
import {RouterModule} from "@angular/router";
import {AccountRoutingModule} from "src/app/account/account-root-routing.module";
import {OwnedCryptoResource} from "src/app/account/user-crypto/infrastructure/OwnedCryptoResource";
import {OwnedCryptoService} from "src/app/account/user-crypto/domain/OwnedCryptoService";
import {OwnedCryptoStorageService} from "src/app/account/user-crypto/domain/OwnedCryptoStorageService";


@NgModule({
  declarations: [
    AccountRootComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule
  ],
  providers: [
    OwnedCryptoResource,
    OwnedCryptoService,
    OwnedCryptoStorageService
  ]
})
export class AccountRootModule { }
