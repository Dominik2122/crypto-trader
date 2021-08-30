import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/models/tree-column.model';
import {TreeNode} from 'src/app/util/tree/ui/models/tree-node.model';
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";
import {TreeColumnComponent} from "src/app/util/tree/ui/tree-column/tree-column.component";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, AfterContentInit {

  @ContentChildren(TreeColumnComponent)
  treeColumnCollection: QueryList<TreeColumnComponent>

  @Input()
  columns: Array<TreeColumn>;

  @Input()
  cssClass: Array<string>;

  @Input()
  withDragAndDrop: Array<string>;

  viewStrategy: TreeViewStrategy = TreeViewStrategy.DEFAULT

  nodes: Array<TreeNode>;

  constructor(private readonly treeNodeService: TreeNodeService) {
  }

  ngOnInit() {
    this.initTreeNodes()
  }

  ngAfterContentInit() {
    this.setViewStrategy();
    this.initColumnTemplates()
  }

  initTreeNodes(): void {
    this.treeNodeService.fetchNodes()
    this.treeNodeService.selectTreeNodes().subscribe((treeNodes: Array<TreeNode>) => {
      this.nodes = treeNodes
    })
  }

  private setViewStrategy(): void {
    this.viewStrategy = this.treeColumnCollection.toArray().length === 0 ?
      TreeViewStrategy.DEFAULT : TreeViewStrategy.TEMPLATE;
  }

  private initColumnTemplates(): void {
    const treeColumnTemplates: Array<TemplateRef<any>> = []
    this.treeColumnCollection.toArray().map((columnComponent: TreeColumnComponent) => {
      treeColumnTemplates.push(columnComponent.templateFromContentChild)
    })
  }

}
