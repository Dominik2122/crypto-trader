import {TreeNodeData} from 'src/app/util/tree/ui/domain/TreeNodeData';

export class TreeNode {

  id: string;

  data: TreeNodeData;

  level: number;

  expanded: boolean;

  position: number;

  childData?: any;

  parent?: TreeNode;

}
