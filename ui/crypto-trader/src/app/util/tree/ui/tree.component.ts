import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/models/tree-column.model';
import {TreeNode} from 'src/app/util/tree/ui/models/tree-node.model';
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";
import {TreeNodeCollectionComponent} from "src/app/util/tree/ui/tree-node-collection/tree-node-collection.component";
import {TreeColumnComponent} from "src/app/util/tree/ui/tree-column/tree-column.component";



@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @ContentChildren(TreeColumnComponent)
  treeColumnCollection: QueryList<TreeColumnComponent>

  @ViewChild('templateReff', {static: true})
  templateRef: ElementRef

  @ContentChild("templateRef")
  template: TemplateRef<any>;


  @Input()
  columns: Array<TreeColumn>;

  @Input()
  cssClass: Array<string>;

  @Input()
  withDragAndDrop: Array<string>;

  nodes: Array<TreeNode>;

  constructor(private readonly treeNodeService: TreeNodeService) {
  }

  ngOnInit() {
    this.initTreeNodes()
  }

  ngAfterContentInit() {
    console.log(this.treeColumnCollection.toArray())
  }

  onClick() {
    console.log(this.templateRef)
    console.log(this.treeColumnCollection.toArray())
  }

  initTreeNodes(): void {
    this.treeNodeService.fetchNodes()
    this.treeNodeService.selectTreeNodes().subscribe((treeNodes: Array<TreeNode>) => {
      this.nodes = treeNodes
    })
  }

}
