import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {faAngleDoubleDown, faArrowsAltV} from "@fortawesome/free-solid-svg-icons";
import {TreeColumnComponent} from "src/app/util/tree/ui/tree-column/tree-column.component";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";
import {ExpandTreeNodeRepository} from "src/app/util/tree/domain/ExpandTreeNodeRepository";

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {

  @Input()
  childTemplate: TemplateRef<any>

  @Input()
  treeColumns: Array<TreeColumn>

  @Input()
  node: TreeNode

  @Input()
  treeColumnsTemplates: Array<TemplateRef<TreeColumnComponent>>;

  @Input()
  viewStrategy: TreeViewStrategy = TreeViewStrategy.DEFAULT

  TreeViewStrategy = TreeViewStrategy
  dragIcon = faArrowsAltV
  expandIcon = faAngleDoubleDown

  isExpanded;

  constructor(private readonly expandTreeNodeRepository: ExpandTreeNodeRepository<TreeNode>) {
  }


  getContext(index: number): string {
    return this.node.data[this.treeColumns[index].name]
  }

  expandNode(node: TreeNode) {
    this.expandTreeNodeRepository.set(node)
    this.isExpanded = !this.isExpanded
  }

}
