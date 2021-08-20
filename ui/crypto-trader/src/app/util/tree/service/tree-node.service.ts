import {Injectable} from "@angular/core";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Observable} from "rxjs";
import {TreeNodeCommandDispatcher} from "src/app/util/tree/store/tree-node-command-dispatcher";
import {map} from "rxjs/operators";

@Injectable()
export class TreeNodeService {

  constructor(private readonly treeNodeCommandDispatcher: TreeNodeCommandDispatcher) {

  }

  getNodes(): Observable<Array<TreeNode>> {
    return this.treeNodeCommandDispatcher.getTreeNodes()
  }

  selectTreeNodes(): Observable<Array<TreeNode>> {
    return this.treeNodeCommandDispatcher.getTreeNodes()
  }

}
