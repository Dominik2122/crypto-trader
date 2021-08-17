import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


import {TreeComponent} from './tree.component';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    TreeComponent
  ],
  exports: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TreeModule {
}
