import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from "src/app/home/HomeModule";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/AuthModule').then(m => m.AuthModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/AccountRootModule').then(m => m.AccountRootModule)
  },
  {
    path: 'trading',
    loadChildren: () => import('./trading/TradingModule').then(m => m.TradingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
