import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradingRootComponent } from './trading-root/trading-root.component';
import {TradingRoutingModule} from "src/app/trading/trading-routing.module";
import {TreeModule} from "src/app/util/tree/tree.module";
import {UtilModule} from "src/app/util/util.module";
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";
import {HomeTreeModule} from "src/app/home/home-tree/home-tree.module";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/home-tree-node.service";
import {ButtonModule} from "src/app/util/button/button.module";
import {TransactionsModule} from "src/app/shared/transactions/transactions.module";
import { TradingCryptoPickerComponent } from './trading-root/trading-crypto-picker/trading-crypto-picker.component';
import {FormModule} from "src/app/util/form/form.module";
import {TradingCryptoPickerResolver} from "src/app/trading/trading-root/TradingCryptoPickerResolver";
import {HeaderAccountResource} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountResource";
import {OwnedCryptoResource} from "src/app/account/user-crypto/infrastructure/OwnedCryptoResource";
import {HomeTreeNodeResource} from "src/app/home/home-tree/infrastructure/home-tree-node-resource";
import { TradingDashboardComponent } from './trading-root/trading-dashboard/trading-dashboard.component';
import { TradingChartComponent } from './trading-root/trading-chart/trading-chart.component';
import { TradingSellComponent } from './trading-root/trading-sell/trading-sell.component';
import { TradingFormComponent } from 'src/app/trading/trading-root/trading-buy/trading-form.component';
import { TradingBalanceComponent } from './trading-root/trading-balance/trading-balance.component';
import {ChartModule} from "src/app/util/chart/chart.module";
import {TradingService} from "src/app/trading/trading-root/TradingService";



@NgModule({
  declarations: [
    TradingRootComponent,
    TradingCryptoPickerComponent,
    TradingDashboardComponent,
    TradingChartComponent,
    TradingSellComponent,
    TradingFormComponent,
    TradingBalanceComponent
  ],
	imports: [
		TradingRoutingModule,
		CommonModule,
		UtilModule,
		TextBadgeModule,
		ButtonModule,
		TransactionsModule,
		FormModule,
		ChartModule
	],
  providers: [
    TradingCryptoPickerResolver,
    HeaderAccountResource,
    OwnedCryptoResource,
    HomeTreeNodeResource,
    TradingService
  ]
})
export class TradingModule { }
