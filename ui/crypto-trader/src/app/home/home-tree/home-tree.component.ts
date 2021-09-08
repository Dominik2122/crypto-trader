import {Component, OnInit} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/home-tree-node.service";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";

@Component({
  selector: 'app-home-tree',
  templateUrl: './home-tree.component.html',
  styleUrls: ['./home-tree.component.scss']
})
export class HomeTreeComponent implements OnInit {

  NUMBER_OF_COLUMNS: number = 4;

  nodes: Array<TreeNode>;

  homeTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Name', 'Current Price', 'Net change', '%'])
    .withFlex(['0 1 35%', '0 1 20%', '0 1 22%', '0 1 23%'])
    .withExpand()
    .build(this.NUMBER_OF_COLUMNS)

  viewStrategy: TreeViewStrategy = TreeViewStrategy.TEMPLATE

  constructor(private readonly treeNodeService: HomeTreeNodeService) {
  }

  ngOnInit(): void {
    this.treeNodeService.fetchNodes()
    this.treeNodeService.selectTreeNodes().subscribe((treeNodes: Array<TreeNode>) => {
      this.nodes = treeNodes
    })
  }
}
