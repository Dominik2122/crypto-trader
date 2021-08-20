import { Component, OnInit } from '@angular/core';
import { TreeColumn } from 'src/app/util/tree/ui/models/tree-column.model';
import { TreeNode } from 'src/app/util/tree/ui/models/tree-node.model';
import { Store } from '@ngrx/store';
import { TreeNodeCommandDispatcher } from 'src/app/util/tree/store/tree-node-command-dispatcher';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  treeColumns: Array<TreeColumn>;

  nodes: Array<TreeNode>;

  constructor(private readonly treeNodeCommandDispatcher: TreeNodeCommandDispatcher) {

  }


  ngOnInit() {
    this.treeNodeCommandDispatcher.fetchTreeNodes();
    this.treeNodeCommandDispatcher.selectTreeNodes().subscribe(x => {
      console.log(x)
      this.nodes = x;
    });
  }

}
