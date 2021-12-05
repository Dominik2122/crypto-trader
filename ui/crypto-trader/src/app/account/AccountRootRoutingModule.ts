import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountRootComponent} from 'src/app/account/account-root/AccountRootComponent';


const routes: Routes = [
  {
    path: '',
    component: AccountRootComponent,
    children: [
      {
        path: 'crypto',
        loadChildren: () => import('./user-crypto/UserCryptoModule').then(m => m.UserCryptoModule)
      },
      {
        path: '',
        loadChildren: () => import('./account/AccountModule').then(m => m.AccountModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
