import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserCryptoRootComponent} from "src/app/account/user-crypto/user-crypto-root/UserCryptoRootComponent";


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
export class UserCryptoRoutingModule {
}
