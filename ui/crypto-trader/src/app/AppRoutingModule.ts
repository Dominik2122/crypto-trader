import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/home/HomeModule').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/authentication/AuthModule').then(m => m.AuthModule)
  },
  {
    path: 'account',
    loadChildren: () => import('src/app/account/AccountRootModule').then(m => m.AccountRootModule)
  },
  {
    path: 'trading',
    loadChildren: () => import('src/app/trading/TradingModule').then(m => m.TradingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
