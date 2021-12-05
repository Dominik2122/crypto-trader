import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeRootComponent} from 'src/app/home/home-root/HomeRootComponent';


const routes: Routes = [
  {
    path: '',
    component: HomeRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
