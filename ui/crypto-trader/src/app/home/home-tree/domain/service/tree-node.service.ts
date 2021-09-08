import {Injectable} from "@angular/core";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Observable} from "rxjs";
import {HomeTreeNodeCommandDispatcher} from "src/app/home/home-tree/store/home-tree-node-command-dispatcher";


@Injectable()
export class TreeNodeService {

  constructor(private readonly treeNodeCommandDispatcher: HomeTreeNodeCommandDispatcher) {

  }

  fetchNodes(): void {
    return this.treeNodeCommandDispatcher.fetchTreeNodes()
  }

  selectTreeNodes(): Observable<Array<TreeNode>> {
    return this.treeNodeCommandDispatcher.selectTreeNodes()
  }

}
