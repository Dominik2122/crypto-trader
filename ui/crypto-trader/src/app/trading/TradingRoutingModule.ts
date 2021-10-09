import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TradingRootComponent} from "src/app/trading/trading-root/TradingRootComponent";
import {TradingCryptoPickerResolver} from "src/app/trading/trading-root/TradingCryptoPickerResolver";


const routes: Routes = [
  {
    path: '',
    component: TradingRootComponent,
    resolve: {
      crypto: TradingCryptoPickerResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule {
}
