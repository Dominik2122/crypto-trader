import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";

@Component({
  selector: 'app-tree-node-collection',
  templateUrl: './tree-node-collection.component.html',
  styleUrls: ['./tree-node-collection.component.scss']
})
export class TreeNodeCollectionComponent implements OnInit {

  @Input()
  nodes: Array<TreeNode>

  @Input()
  treeColumns: Array<TreeColumn>

  constructor() { }

  ngOnInit(): void {
  }

}
