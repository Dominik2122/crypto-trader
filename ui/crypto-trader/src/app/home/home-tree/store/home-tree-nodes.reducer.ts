import { createReducer, on } from '@ngrx/store';
import * as HomeTreeNodesActions from './home-tree-nodes.actions';
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";


export const homeTreeNodesFeatureKey = 'homeTreeNodes';

export interface HomeTreeNodesState {
  treeNodes: Array<HomeTreeNode>;
}

export const initialState: HomeTreeNodesState = {
  treeNodes: null
};


export const reducer = createReducer(
  initialState,
  on(HomeTreeNodesActions.fetchTreeNodesActionSuccess, (state, action) => {
    return Object.assign({}, state, { treeNodes: action.data });
  }),
);

