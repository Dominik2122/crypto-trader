import { TreeNodeState } from 'src/app/util/tree/store/tree-node-state';
import * as Actions from './tree-node-actions';
import { TreeNode } from 'src/app/util/tree/ui/models/tree-node.model';
import { FetchTreeNodesSuccessAction } from './tree-node-actions';

const defaultState = new TreeNodeState();

export function treeNodeReducer(state: TreeNodeState = defaultState, action: Actions.Actions): TreeNodeState {

  switch (action.type) {

    case Actions.TreeNodeActionTypes.FetchTreeNodesSuccess:
      if (action instanceof FetchTreeNodesSuccessAction) {
        const currentNodes: Array<TreeNode> = action.payload as Array<TreeNode>;
        return Object.assign(new TreeNodeState(), state, { treeNodes: currentNodes });
      }

    default:
      return state;
  }
}

export const selectTreeNodes = (state) => {
  return state.treeNode.treeNode.treeNodes;
};
