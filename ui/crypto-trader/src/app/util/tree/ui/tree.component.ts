import {
  AfterContentInit,
  Component, ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef
} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/models/tree-column.model';
import {TreeNode} from 'src/app/util/tree/ui/models/tree-node.model';
import {TreeColumnComponent} from "src/app/util/tree/ui/tree-column/tree-column.component";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements AfterContentInit {

  @ContentChildren(TreeColumnComponent)
  treeColumnCollection: QueryList<TreeColumnComponent>


  @ContentChild('child')
  treeChildTemplate: TemplateRef<any>

  @Input()
  columns: Array<TreeColumn>;

  @Input()
  cssClass: Array<string>;

  @Input()
  viewStrategy: TreeViewStrategy = TreeViewStrategy.DEFAULT

  @Input()
  nodes: Array<TreeNode>;

  columnTemplates: Array<TemplateRef<TreeColumnComponent>>;

  constructor() {
  }

  ngAfterContentInit() {
    this.setViewStrategy();
    this.initColumnTemplates()
  }

  private setViewStrategy(): void {
    this.viewStrategy = this.treeColumnCollection.toArray().length === 0 ?
      TreeViewStrategy.DEFAULT : TreeViewStrategy.TEMPLATE;
  }


  private initColumnTemplates(): void {
    const treeColumnTemplates: Array<TemplateRef<TreeColumnComponent>> = []
    this.treeColumnCollection.forEach(
      (column: TreeColumnComponent, index: number) => this.columns[index].setTemplate(column.template))
    this.columnTemplates = treeColumnTemplates
  }

}
