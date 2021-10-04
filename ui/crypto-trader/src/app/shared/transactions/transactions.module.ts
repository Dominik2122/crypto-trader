import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SellComponent} from "src/app/shared/transactions/ui/sell/sell.component";
import {TransactionResource} from "src/app/shared/transactions/inftrastructure/TransactionResource";



@NgModule({
  declarations: [
    SellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SellComponent
  ],
  providers: [
    TransactionResource
  ]
})
export class TransactionsModule { }
