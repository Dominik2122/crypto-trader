import { Component, OnInit } from '@angular/core';
import {TreeColumnModel} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  treeColumns: Array<TreeColumnModel>

  nodes: Array<TreeNode>

 ngOnInit() {}

}
