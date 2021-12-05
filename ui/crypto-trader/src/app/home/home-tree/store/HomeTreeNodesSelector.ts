import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromHomeTreeNodes from 'src/app/home/home-tree/store/HomeTreeNodesReducer';
import {HomeTreeNodesState} from 'src/app/home/home-tree/store/HomeTreeNodesReducer';


export const selectHomeTreeNodesState = createFeatureSelector<fromHomeTreeNodes.HomeTreeNodesState>(
  fromHomeTreeNodes.homeTreeNodesFeatureKey
);

export const selectHomeTreeNodes = createSelector(selectHomeTreeNodesState,
  (state: HomeTreeNodesState) => state.treeNodes);


