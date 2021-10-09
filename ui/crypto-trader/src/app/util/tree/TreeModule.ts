import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


import {TreeComponent} from 'src/app/util/tree/ui/TreeComponent';
import {CommonModule} from "@angular/common";
import {TreeNodeCollectionComponent} from 'src/app/util/tree/ui/tree-node-collection/TreeNodeCollectionComponent';
import {TreeNodeComponent} from 'src/app/util/tree/ui/tree-node/TreeNodeComponent';
import {TreeHeaderComponent} from 'src/app/util/tree/ui/tree-header/TreeHeaderComponent';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TreeColumnComponent} from 'src/app/util/tree/ui/tree-column/TreeColumnComponent';
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
