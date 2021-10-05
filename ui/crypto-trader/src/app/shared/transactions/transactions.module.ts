import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SellComponent} from "src/app/shared/transactions/ui/sell/sell.component";
import {TransactionResource} from "src/app/shared/transactions/inftrastructure/TransactionResource";
import {FormModule} from "src/app/util/form/form.module";
import {ButtonModule} from "src/app/util/button/button.module";
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";
import {UtilModule} from "src/app/util/util.module";



@NgModule({
  declarations: [
    SellComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    ButtonModule,
    TextBadgeModule,
    UtilModule
  ],
  exports: [
    SellComponent
  ],
  providers: [
    TransactionResource
  ]
})
export class TransactionsModule { }
