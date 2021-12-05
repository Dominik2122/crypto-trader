import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {TreeNode} from 'src/app/util/tree/ui/domain/TreeNode';
import {TreeColumn} from 'src/app/util/tree/ui/domain/TreeColumn';
import {TreeColumnComponent} from 'src/app/util/tree/ui/tree-column/TreeColumnComponent';
import {TreeViewStrategy} from 'src/app/util/tree/ui/domain/TreeViewStrategy';

@Component({
  selector: 'app-tree-node-collection',
  templateUrl: './TreeNodeCollectionComponent.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeCollectionComponent implements OnInit {

  @Input()
  childTemplate: TemplateRef<any>;

  @Input()
  nodes: Array<TreeNode>;

  @Input()
  treeColumns: Array<TreeColumn>;

  @Input()
  treeColumnsTemplates: Array<TemplateRef<TreeColumnComponent>>;

  @Input()
  viewStrategy: TreeViewStrategy = TreeViewStrategy.DEFAULT;

  constructor() { }

  ngOnInit(): void {
  }

}
