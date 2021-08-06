import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeSkeletonComponent} from "src/app/home-skeleton/home-skeleton.component";

const routes: Routes = [
  {
    path: "",
    component: HomeSkeletonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
