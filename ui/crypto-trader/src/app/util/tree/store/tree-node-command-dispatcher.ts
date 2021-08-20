import { Store } from '@ngrx/store';
import { FetchTreeNodesAction } from 'src/app/util/tree/store/tree-node-actions';
import { selectTreeNodes } from 'src/app/util/tree/store/tree-node-reducer';
import { Observable } from 'rxjs';
import { TreeNode } from 'src/app/util/tree/ui/models/tree-node.model';
import { Injectable } from '@angular/core';
import {take} from "rxjs/operators";

@Injectable()
export class TreeNodeCommandDispatcher {

  constructor(private readonly store: Store) {
  }

  fetchTreeNodes(): void {
    this.store.dispatch(new FetchTreeNodesAction());
  }

  selectTreeNodes(): Observable<Array<TreeNode>> {
    return this.store.select(selectTreeNodes);
  }

  getTreeNodes(): Observable<Array<TreeNode>> {
    return this.store.select(selectTreeNodes).pipe(
      take(1))
  }

}
