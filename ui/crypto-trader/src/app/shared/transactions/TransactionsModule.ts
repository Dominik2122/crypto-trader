import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SellComponent} from 'src/app/shared/transactions/ui/sell/SellComponent';
import {TransactionResource} from 'src/app/shared/transactions/inftrastructure/TransactionResource';
import {FormModule} from 'src/app/util/form/FormModule';
import {ButtonModule} from 'src/app/util/button/ButtonModule';
import {TextBadgeModule} from 'src/app/util/text-badge/TextBadgeModule';
import {UtilModule} from 'src/app/util/UtilModule';


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
