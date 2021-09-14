import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeTreeComponent} from './home-tree.component';
import {TreeModule} from "src/app/util/tree/tree.module";
import {TreeNodeResource} from "src/app/util/tree/infrastructure/tree-node-resource";
import {HomeTreeNodeResource} from "src/app/home/home-tree/infrastructure/home-tree-node-resource";
import {TextBadgeModule} from "src/app/util/text-badge/text-badge.module";
import {UtilModule} from "src/app/util/util.module";
import {EffectsModule} from "@ngrx/effects";

import {HomeTreeNodesEffects} from './store/home-tree-nodes.effects';
import {StoreModule} from "@ngrx/store";
import {homeTreeNodesFeatureKey, reducer} from "src/app/home/home-tree/store/home-tree-nodes.reducer";
import {HomeTreeNodeCommandDispatcher} from "src/app/home/home-tree/store/home-tree-node-command-dispatcher";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/home-tree-node.service";
import {HomeTreeNodeChildComponent} from "src/app/home/home-tree/home-tree-node-child/HomeTreeNodeChildComponent";
import {ChartModule} from "src/app/util/chart/chart.module";


@NgModule({
  declarations: [
    HomeTreeComponent,
    HomeTreeNodeChildComponent
  ],
	imports: [
		CommonModule,
		TreeModule,
		TextBadgeModule,
		UtilModule,
		StoreModule.forFeature(homeTreeNodesFeatureKey, reducer),
		EffectsModule.forFeature([HomeTreeNodesEffects]),
		ChartModule
	],
  exports: [
    HomeTreeComponent
  ],
  providers: [
    {provide: TreeNodeResource, useClass: HomeTreeNodeResource},
    HomeTreeNodeCommandDispatcher,
    HomeTreeNodeService
  ]
})
export class HomeTreeModule {
}
