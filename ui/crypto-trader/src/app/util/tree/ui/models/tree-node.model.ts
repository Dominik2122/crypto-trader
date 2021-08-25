import {TreeNodeData} from "src/app/util/tree/ui/models/tree-node-data.model";

export class TreeNode {

  id: string;

  data: TreeNodeData;

  level: number;

  expanded: boolean;

  position: number;

  children?: Array<TreeNode>;

  parent?: TreeNode;

}
