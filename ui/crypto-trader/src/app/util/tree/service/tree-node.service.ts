import {Injectable} from "@angular/core";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Observable} from "rxjs";
import {TreeNodeCommandDispatcher} from "src/app/util/tree/store/tree-node-command-dispatcher";

@Injectable()
export class TreeNodeService {

  constructor(private readonly treeNodeCommandDispatcher: TreeNodeCommandDispatcher) {

  }

  fetchNodes(): void {
    return this.treeNodeCommandDispatcher.fetchTreeNodes()
  }

  getNodes(): Observable<Array<TreeNode>> {
    return this.treeNodeCommandDispatcher.getTreeNodes()
  }

  selectTreeNodes(): Observable<Array<TreeNode>> {
    return this.treeNodeCommandDispatcher.selectTreeNodes()
  }

}
