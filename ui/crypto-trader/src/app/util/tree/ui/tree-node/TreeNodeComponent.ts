import {ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/domain/TreeColumn";
import {TreeNode} from "src/app/util/tree/ui/domain/TreeNode";
import {faAngleDoubleDown, faArrowsAltV} from "@fortawesome/free-solid-svg-icons";
import {TreeViewStrategy} from "src/app/util/tree/ui/domain/TreeViewStrategy";
import {ExpandTreeNodeRepository} from "src/app/util/tree/domain/ExpandTreeNodeRepository";

@Component({
  selector: 'app-tree-node',
  templateUrl: './TreeNodeComponent.html',
  styleUrls: ['./TreeNodeComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeComponent {

  @Input()
  childTemplate: TemplateRef<any>

  @Input()
  treeColumns: Array<TreeColumn>

  @Input()
  node: TreeNode

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
