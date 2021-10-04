import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


import {TreeComponent} from 'src/app/util/tree/ui/tree.component';
import {CommonModule} from "@angular/common";
import {TreeNodeCollectionComponent} from './ui/tree-node-collection/tree-node-collection.component';
import {TreeNodeComponent} from './ui/tree-node/tree-node.component';
import {TreeHeaderComponent} from './ui/tree-header/tree-header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TreeColumnComponent } from './ui/tree-column/tree-column.component';
import {ExpandTreeNodeRepository} from "src/app/util/tree/domain/ExpandTreeNodeRepository";
import {NgxPopperjsModule} from "ngx-popperjs";




@NgModule({
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
    NgxPopperjsModule,
		CommonModule,
		FormsModule,
		FontAwesomeModule,
	],
  providers: [
    ExpandTreeNodeRepository
  ]
})
export class TreeModule {}
