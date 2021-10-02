import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserCryptoRootComponent} from "src/app/account/user-crypto/user-crypto-root/user-crypto-root.component";


const routes: Routes = [
  {
    path: '',
    component: UserCryptoRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCryptoRootRoutingModule {
}
