import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserCryptoRootComponent} from "src/app/account/user-crypto/user-crypto-root/user-crypto-root.component";
import {UserCryptoRootRoutingModule} from "src/app/account/user-crypto/user-crypto-root-routing.module";



@NgModule({
  declarations: [
    UserCryptoRootComponent
  ],
  imports: [
    UserCryptoRootRoutingModule,
    CommonModule
  ]
})
export class UserCryptoModule { }
