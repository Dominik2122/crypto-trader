import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/domain/TreeColumn';
import {TreeNode} from 'src/app/util/tree/ui/domain/TreeNode';
import {TreeColumnComponent} from "src/app/util/tree/ui/tree-column/TreeColumnComponent";
import {TreeViewStrategy} from "src/app/util/tree/ui/domain/TreeViewStrategy";

@Component({
  selector: 'app-tree',
  templateUrl: './TreeComponent.html',
  styleUrls: ['./TreeComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.treeColumnCollection.forEach(
      (column: TreeColumnComponent, index: number) => {
        this.columns[index].setTemplate(column.template)
        this.columns[index].setPoppperContent(column.popperContent)
      })
  }

}
