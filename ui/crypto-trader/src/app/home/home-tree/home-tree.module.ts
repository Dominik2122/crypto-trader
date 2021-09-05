import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTreeComponent } from './home-tree.component';
import {TreeModule} from "src/app/util/tree/tree.module";
import {TreeNodeResource} from "src/app/util/tree/infrastructure/tree-node-resource";
import {HomeTreeNodeResource} from "src/app/home/home-tree/infrastructure/home-tree-node-resource";
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";
import {UtilModule} from "src/app/util/util.module";



@NgModule({
  declarations: [
    HomeTreeComponent
  ],
	imports: [
		CommonModule,
		TreeModule,
		TextBadgeModule,
		UtilModule
	],
  exports: [
    HomeTreeComponent
  ],
  providers: [
    {provide: TreeNodeResource, useClass: HomeTreeNodeResource}
  ]
})
export class HomeTreeModule {}
