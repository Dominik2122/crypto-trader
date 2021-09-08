import { createAction, props } from '@ngrx/store';
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";

export const fetchTreeNodesAction = createAction(
  '[HomeTreeNodes]fetchTreeNodesAction'
);

export const fetchTreeNodesActionSuccess = createAction(
  '[HomeTreeNodes]fetchTreeNodesAction Success',
  props<{ data: Array<TreeNode> }>()
);
