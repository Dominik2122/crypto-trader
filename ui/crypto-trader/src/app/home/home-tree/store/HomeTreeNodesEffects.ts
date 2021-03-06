import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import * as HomeTreeNodesActions from 'src/app/home/home-tree/store/HomeTreeNodesActions';
import {TreeNodeResource} from 'src/app/util/tree/infrastructure/TreeNodeResource';
import {HomeTreeNode} from 'src/app/home/home-tree/domain/HomeTreeNode';


@Injectable()
export class HomeTreeNodesEffects {

  fetchTreeNodes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeTreeNodesActions.fetchTreeNodesAction),
      switchMap(() =>
      this.treeNodeResource.getTreeNodes().pipe(
        map((treeNodes: Array<HomeTreeNode>) =>
          HomeTreeNodesActions.fetchTreeNodesActionSuccess({data : treeNodes}))
      )));
  });



  constructor(private actions$: Actions,
              private readonly treeNodeResource: TreeNodeResource) {}

}
