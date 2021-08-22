import {Component, Input, OnInit} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/models/tree-column.model';
import {TreeNode} from 'src/app/util/tree/ui/models/tree-node.model';
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";


const treeColumns: Array<TreeColumn> = [
  new TreeColumn(null, 'Name', '0 1 40%'),
  new TreeColumn(null, 'Price', '0 1 40%')
]


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input()
  treeColumns: Array<TreeColumn>;

  @Input()
  nodes: Array<TreeNode>;

  constructor(private readonly treeNodeService: TreeNodeService) {

  }

  ngOnInit() {
    this.treeNodeService.fetchNodes()
    this.treeNodeService.getNodes().subscribe((treeNodes: Array<TreeNode>) => {
      console.log(treeNodes)
      this.nodes = treeNodes
    })
    this.treeColumns = treeColumns
  }

}
