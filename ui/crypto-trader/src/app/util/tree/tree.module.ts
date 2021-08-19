import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


import {TreeComponent} from 'src/app/util/tree/ui/tree.component';
import {CommonModule} from "@angular/common";
import { TreeNodeCollectionComponent } from './ui/tree-node-collection/tree-node-collection.component';
import { TreeNodeComponent } from './ui/tree-node/tree-node.component';
import { TreeHeaderComponent } from './ui/tree-header/tree-header.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";


@NgModule({
  declarations: [
    TreeComponent,
    TreeNodeCollectionComponent,
    TreeNodeComponent,
    TreeHeaderComponent
  ],
  exports: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('', {}),
    EffectsModule.forFeature([]),
  ],
  providers: [
    TreeNodeService
  ]
})
export class TreeModule {
}
