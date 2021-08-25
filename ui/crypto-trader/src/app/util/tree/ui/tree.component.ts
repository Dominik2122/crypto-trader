import {Component, Input, OnInit} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/models/tree-column.model';
import {TreeNode} from 'src/app/util/tree/ui/models/tree-node.model';
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";


const treeColumns: Array<TreeColumn> = [
  new TreeColumn('name',null, 'name', '0 1 40%', true, true),
  new TreeColumn( 'netChange' , null, 'netChange', '0 1 40%')
]


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input()
  columns: Array<TreeColumn>;

  @Input()
  cssClass: Array<string>;

  @Input()
  withDragAndDrop: Array<string>;

  nodes: Array<TreeNode>;

  treeColumns: Array<TreeColumn>;

  constructor(private readonly treeNodeService: TreeNodeService) {
  }

  ngOnInit() {
    this.initTreeNodes()
  }

  initTreeNodes(): void {
    this.treeNodeService.fetchNodes()
    this.treeNodeService.selectTreeNodes().subscribe((treeNodes: Array<TreeNode>) => {
      this.nodes = treeNodes
    })
    this.treeColumns = treeColumns
  }

}
