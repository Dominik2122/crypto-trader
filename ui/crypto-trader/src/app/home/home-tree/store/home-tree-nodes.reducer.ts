import { createReducer, on } from '@ngrx/store';
import * as HomeTreeNodesActions from './home-tree-nodes.actions';
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";


export const homeTreeNodesFeatureKey = 'homeTreeNodes';

export interface HomeTreeNodesState {
  treeNodes: Array<TreeNode>;
}

export const initialState: HomeTreeNodesState = {
  treeNodes: null
};


export const reducer = createReducer(
  initialState,
  on(HomeTreeNodesActions.fetchTreeNodesActionSuccess, (state, action) => {
    console.log(action.data)
    return Object.assign({}, state, { treeNodes: action.data });
  }),
);

