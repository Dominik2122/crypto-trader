import {Component, Input, OnInit} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/models/tree-column.model';
import {TreeNode} from 'src/app/util/tree/ui/models/tree-node.model';
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";


const treeColumns: Array<TreeColumn> = [
  new TreeColumn(null, 'Name', '0 1 40%', true, true),
  new TreeColumn(null, 'Price', '0 1 40%')
]


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input()
  columnHeaders: Array<string>

  @Input()
  columnFlex: Array<string>

  @Input()
  cssClass: Array<string>

  @Input()
  withDragAndDrop: Array<string>

  nodes: Array<TreeNode>;

  treeColumns: Array<TreeColumn>;

  constructor(private readonly treeNodeService: TreeNodeService) {
  }

  ngOnInit() {
    this.initTreeNodes()
  }

  initTreeNodes() {
    this.treeNodeService.fetchNodes()
    this.treeNodeService.getNodes().subscribe((treeNodes: Array<TreeNode>) => {
      this.nodes = treeNodes
    })
    this.treeColumns = treeColumns
  }

}
