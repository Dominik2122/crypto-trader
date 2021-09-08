import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromHomeTreeNodes from './home-tree-nodes.reducer';
import {HomeTreeNodesState} from "./home-tree-nodes.reducer";


export const selectHomeTreeNodesState = createFeatureSelector<fromHomeTreeNodes.HomeTreeNodesState>(
  fromHomeTreeNodes.homeTreeNodesFeatureKey
);

export const selectHomeTreeNodes = createSelector(selectHomeTreeNodesState,
  (state: HomeTreeNodesState) => state.treeNodes)


