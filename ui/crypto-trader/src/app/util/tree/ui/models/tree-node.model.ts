export class TreeNode {

  id: string;

  data: any;

  level: number;

  expanded: boolean;

  position: number;

  children?: Array<TreeNode>;

  parent?: TreeNode;

}
