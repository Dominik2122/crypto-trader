import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccountComponent} from 'src/app/account/account/AccountComponent';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
