import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {fetchTreeNodesAction} from 'src/app/home/home-tree/store/HomeTreeNodesActions';
import {selectHomeTreeNodes} from 'src/app/home/home-tree/store/HomeTreeNodesSelector';
import {HomeTreeNode} from 'src/app/home/home-tree/domain/HomeTreeNode';

@Injectable()
export class HomeTreeNodeRepository {

  constructor(private readonly store: Store) {
  }

  fetchTreeNodes(): void {
    this.store.dispatch(fetchTreeNodesAction());
  }

  selectTreeNodes(): Observable<Array<HomeTreeNode>> {
    return this.store.select(selectHomeTreeNodes);
  }

}
