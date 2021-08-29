import {Component, ContentChildren, ElementRef, Input, OnInit, QueryList, ViewChild} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/models/tree-column.model';
import {TreeNode} from 'src/app/util/tree/ui/models/tree-node.model';
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";
import {TreeColumnCollectionRef} from "src/app/util/tree/ui/models/TreeColumnCollectionRef";



@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @ContentChildren(TreeColumnCollectionRef)
  treeColumnCollection: QueryList<TreeColumnCollectionRef>

  @ViewChild('templateReff', {static: true})
  templateRef: ElementRef


  @Input()
  columns: Array<TreeColumn>;

  @Input()
  cssClass: Array<string>;

  @Input()
  withDragAndDrop: Array<string>;

  @Input()
  template: any;


  nodes: Array<TreeNode>;

  constructor(private readonly treeNodeService: TreeNodeService) {
  }

  ngOnInit() {
    this.initTreeNodes()
  }

  ngAfterViewInit() {
    console.log(this.treeColumnCollection)

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
