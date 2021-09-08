import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { TreeNode } from 'src/app/util/tree/ui/models/tree-node.model';
import { Injectable } from '@angular/core';
import {fetchTreeNodesAction} from "src/app/home/home-tree/store/home-tree-nodes.actions";
import {selectHomeTreeNodes} from "src/app/home/home-tree/store/home-tree-nodes.selectors";

@Injectable()
export class HomeTreeNodeCommandDispatcher {

  constructor(private readonly store: Store) {
  }

  fetchTreeNodes(): void {
    this.store.dispatch(fetchTreeNodesAction());
  }

  selectTreeNodes(): Observable<Array<TreeNode>> {
    return this.store.select(selectHomeTreeNodes);
  }

}
