import {Action} from "@ngrx/store";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";

export enum TreeNodeActionTypes {
  FetchTreeNodes = '[TreeNode]FetchTreeNodes',
  FetchTreeNodesSuccess = '[TreeNode]FetchTreeNodes'
}


export class FetchTreeNodesAction implements Action {
  type: string = TreeNodeActionTypes.FetchTreeNodes;

  constructor() {
  }

}

export class FetchTreeNodesSuccessAction implements Action {
  type: string = TreeNodeActionTypes.FetchTreeNodesSuccess;

  constructor(public payload?: Array<TreeNode>) {
  }

}


export type Actions =
  FetchTreeNodesAction |
  FetchTreeNodesSuccessAction
