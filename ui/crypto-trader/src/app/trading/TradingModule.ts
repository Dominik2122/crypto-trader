import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TradingRootComponent} from 'src/app/trading/trading-root/TradingRootComponent';
import {TradingRoutingModule} from 'src/app/trading/TradingRoutingModule';
import {UtilModule} from 'src/app/util/UtilModule';
import {TextBadgeModule} from 'src/app/util/text-badge/TextBadgeModule';
import {ButtonModule} from 'src/app/util/button/ButtonModule';
import {TransactionsModule} from 'src/app/shared/transactions/TransactionsModule';
import {TradingCryptoPickerComponent} from './trading-root/trading-crypto-picker/trading-crypto-picker.component';
import {FormModule} from 'src/app/util/form/FormModule';
import {TradingCryptoPickerResolver} from 'src/app/trading/trading-root/TradingCryptoPickerResolver';
import {
  HeaderAccountResource
} from 'src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountResource';
import {OwnedCryptoResource} from 'src/app/account/user-crypto/infrastructure/OwnedCryptoResource';
import {HomeTreeNodeResource} from 'src/app/home/home-tree/infrastructure/HomeTreeNodeResource';
import {TradingDashboardComponent} from './trading-root/trading-dashboard/trading-dashboard.component';
import {TradingChartComponent} from './trading-root/trading-chart/trading-chart.component';
import {TradingFormComponent} from 'src/app/trading/trading-root/trading-form/TradingFormComponent';
import {TradingBalanceComponent} from 'src/app/trading/trading-root/trading-balance/TradingBalanceComponent';
import {ChartModule} from 'src/app/util/chart/ChartModule';
import {TradingService} from 'src/app/trading/trading-root/TradingService';
import {TradingChartWrapperComponent} from "src/app/trading/trading-root/trading-chart/e2e/TradingChartWrapperComponent";


@NgModule({
  declarations: [
    TradingRootComponent,
    TradingCryptoPickerComponent,
    TradingDashboardComponent,
    TradingChartComponent,
    TradingFormComponent,
    TradingBalanceComponent,
    TradingChartWrapperComponent
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
export class TradingModule {
}
