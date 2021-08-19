import {Component, Input, OnInit} from '@angular/core';
import {TreeColumnModel} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  @Input()
  treeColumns: Array<TreeColumnModel>

  @Input()
  node: TreeNode

  constructor() {
  }

  ngOnInit(): void {
  }

  getContext(columnName: string): string {
    return 'data'
  }

  isColumnShowingData(columnName: string): boolean {
    return true
  }

}
