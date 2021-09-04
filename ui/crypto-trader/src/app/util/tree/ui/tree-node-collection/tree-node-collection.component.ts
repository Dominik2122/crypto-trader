import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeColumnComponent} from "src/app/util/tree/ui/tree-column/tree-column.component";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";

@Component({
  selector: 'app-tree-node-collection',
  templateUrl: './tree-node-collection.component.html'
})
export class TreeNodeCollectionComponent implements OnInit {

  @Input()
  nodes: Array<TreeNode>

  @Input()
  treeColumns: Array<TreeColumn>

  @Input()
  treeColumnsTemplates: Array<TemplateRef<TreeColumnComponent>>;

  @Input()
  viewStrategy: TreeViewStrategy = TreeViewStrategy.DEFAULT


  constructor() { }

  ngOnInit(): void {
  }

}
