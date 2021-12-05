import {createAction, props} from '@ngrx/store';
import {HomeTreeNode} from 'src/app/home/home-tree/domain/HomeTreeNode';

export const fetchTreeNodesAction = createAction(
  '[HomeTreeNodes]fetchTreeNodesAction'
);

export const fetchTreeNodesActionSuccess = createAction(
  '[HomeTreeNodes]fetchTreeNodesAction Success',
  props<{ data: Array<HomeTreeNode> }>()
);
