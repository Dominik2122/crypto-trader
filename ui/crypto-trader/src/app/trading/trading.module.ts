import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradingRootComponent } from './trading-root/trading-root.component';
import {TradingRoutingModule} from "src/app/trading/trading-routing.module";
import { TradingTreeComponent } from './trading-root/trading-tree/trading-tree.component';
import {TreeModule} from "src/app/util/tree/tree.module";
import {UtilModule} from "src/app/util/util.module";
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";
import {HomeTreeModule} from "src/app/home/home-tree/home-tree.module";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/home-tree-node.service";
import {ButtonModule} from "src/app/util/button/button.module";
import {TransactionsModule} from "src/app/shared/transactions/transactions.module";



@NgModule({
  declarations: [
    TradingRootComponent,
    TradingTreeComponent
  ],
  imports: [
    TradingRoutingModule,
    CommonModule,
    TreeModule,
    UtilModule,
    TextBadgeModule,
    HomeTreeModule,
    ButtonModule,
    TransactionsModule
  ],
  providers: [
    HomeTreeNodeService
  ]
})
export class TradingModule { }
