import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import * as HomeTreeNodesActions from './home-tree-nodes.actions';
import {TreeNodeResource} from "src/app/util/tree/infrastructure/tree-node-resource";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";



@Injectable()
export class HomeTreeNodesEffects {

  fetchTreeNodes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeTreeNodesActions.fetchTreeNodesAction),
      switchMap(() =>
      this.treeNodeResource.getTreeNodes().pipe(
        map((treeNodes: Array<TreeNode>) =>
          HomeTreeNodesActions.fetchTreeNodesActionSuccess({data : treeNodes}))
      )))
  });



  constructor(private actions$: Actions,
              private readonly treeNodeResource: TreeNodeResource) {}

}
