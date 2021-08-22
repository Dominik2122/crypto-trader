import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTreeComponent } from './home-tree.component';
import {TreeModule} from "src/app/util/tree/tree.module";
import {TreeNodeResource} from "src/app/util/tree/infrastructure/tree-node-resource";
import {HomeTreeNodeResource} from "src/app/home/home-tree/infrastructure/home-tree-node-resource";



@NgModule({
  declarations: [
    HomeTreeComponent
  ],
  imports: [
    CommonModule,
    TreeModule
  ],
  exports: [
    HomeTreeComponent
  ],
  providers: [
    {provide: TreeNodeResource, useClass: HomeTreeNodeResource}
  ]
})
export class HomeTreeModule {}
