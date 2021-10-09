import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {fetchTreeNodesAction} from "src/app/home/home-tree/store/home-tree-nodes.actions";
import {selectHomeTreeNodes} from "src/app/home/home-tree/store/home-tree-nodes.selectors";
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";

@Injectable()
export class HomeTreeNodeCommandDispatcher {

  constructor(private readonly store: Store) {
  }

  fetchTreeNodes(): void {
    this.store.dispatch(fetchTreeNodesAction());
  }

  selectTreeNodes(): Observable<Array<HomeTreeNode>> {
    return this.store.select(selectHomeTreeNodes);
  }

}
