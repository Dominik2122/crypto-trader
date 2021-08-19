import { Component, OnInit } from '@angular/core';
import {TreeColumnModel} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Store} from "@ngrx/store";
import {FetchTreeNodesAction} from "src/app/util/tree/store/tree-node-actions";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  treeColumns: Array<TreeColumnModel>

  nodes: Array<TreeNode>

  constructor(private readonly store: Store) {

  }


 ngOnInit() {
    this.store.dispatch(new FetchTreeNodesAction())
    this.nodes = this.store.select()
 }

}
