import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRootComponent } from 'src/app/account/account-root/account-root.component';
import {RouterModule} from "@angular/router";
import {AccountRoutingModule} from "src/app/account/account-root-routing.module";



@NgModule({
  declarations: [
    AccountRootComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule
  ]
})
export class AccountRootModule { }
