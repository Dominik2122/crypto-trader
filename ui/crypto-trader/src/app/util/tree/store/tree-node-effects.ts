import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FetchTreeNodesSuccessAction, TreeNodeActionTypes } from 'src/app/util/tree/store/tree-node-actions';
import { map, switchMap, take } from 'rxjs/operators';
import { TreeNodeResource } from 'src/app/util/tree/infrastructure/tree-node-resource';
import { TreeNode } from 'src/app/util/tree/ui/models/tree-node.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class TreeNodeEffects {

  @Effect()
  fetchTreeNodes$ = this.actions$
                        .pipe(
                          ofType(TreeNodeActionTypes.FetchTreeNodes),
                          take(1),
                          switchMap(() => {
                            return this.treeNodeResource.getTreeNode('').pipe(
                              map((treeNodes: Array<TreeNode>) => {
                                return new FetchTreeNodesSuccessAction(treeNodes);
                              })
                            );
                          })
                        );


  constructor(private readonly actions$: Actions,
              private readonly treeNodeResource: TreeNodeResource) {
  }

}
