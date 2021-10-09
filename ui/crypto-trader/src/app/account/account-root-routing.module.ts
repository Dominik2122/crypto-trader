import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountRootComponent} from "src/app/account/account-root/account-root.component";


const routes: Routes = [
  {
    path: '',
    component: AccountRootComponent,
    children: [
      {
        path: 'crypto',
        loadChildren: () => import('./user-crypto/user-crypto.module').then(m => m.UserCryptoModule)
      },
      {
        path: '',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
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
