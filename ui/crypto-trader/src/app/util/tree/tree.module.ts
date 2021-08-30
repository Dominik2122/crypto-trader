import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


import {TreeComponent} from 'src/app/util/tree/ui/tree.component';
import {CommonModule} from "@angular/common";
import {TreeNodeCollectionComponent} from './ui/tree-node-collection/tree-node-collection.component';
import {TreeNodeComponent} from './ui/tree-node/tree-node.component';
import {TreeHeaderComponent} from './ui/tree-header/tree-header.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";
import {reducers, STORE_FEATURE} from "src/app/util/tree/store/tree-node-reducers";
import {TreeNodeEffects} from "src/app/util/tree/store/tree-node-effects";
import {TreeNodeCommandDispatcher} from 'src/app/util/tree/store/tree-node-command-dispatcher';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TreeColumnComponent } from './ui/tree-column/tree-column.component';



@NgModule({
  providers: [
  TreeNodeService,
  TreeNodeCommandDispatcher
],
  declarations: [
    TreeComponent,
    TreeNodeCollectionComponent,
    TreeNodeComponent,
    TreeHeaderComponent,
    TreeColumnComponent,
  ],
  exports: [
    TreeComponent,
    TreeNodeCollectionComponent,
    TreeColumnComponent
  ],
	imports: [
		CommonModule,
		FormsModule,
		StoreModule.forFeature(STORE_FEATURE, reducers),
		EffectsModule.forFeature([
			TreeNodeEffects
		]),
		FontAwesomeModule,
	]
})
export class TreeModule {}
