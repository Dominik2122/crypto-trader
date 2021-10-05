import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TradingRootComponent} from "src/app/trading/trading-root/trading-root.component";


const routes: Routes = [
  {
    path: '',
    component: TradingRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule {
}
