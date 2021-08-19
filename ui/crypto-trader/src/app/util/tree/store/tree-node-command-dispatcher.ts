import { Store } from '@ngrx/store';
import { FetchTreeNodesAction } from 'src/app/util/tree/store/tree-node-actions';
import { selectTreeNodes } from 'src/app/util/tree/store/tree-node-reducer';
import { Observable } from 'rxjs';
import { TreeNode } from 'src/app/util/tree/ui/models/tree-node.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TreeNodeCommandDispatcher {

  constructor(private readonly store: Store) {
  }

  fetchTreeNodes(): void {
    this.store.dispatch(new FetchTreeNodesAction());
  }

  getTreeNodes(): Observable<Array<TreeNode>> {
    return this.store.select(selectTreeNodes);
  }

}
