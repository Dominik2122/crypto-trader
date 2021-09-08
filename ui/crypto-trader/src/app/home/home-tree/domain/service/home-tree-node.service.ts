import {Injectable} from "@angular/core";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Observable} from "rxjs";
import {HomeTreeNodeCommandDispatcher} from "src/app/home/home-tree/store/home-tree-node-command-dispatcher";
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";


@Injectable()
export class HomeTreeNodeService {

  constructor(private readonly treeNodeCommandDispatcher: HomeTreeNodeCommandDispatcher) {

  }

  fetchNodes(): void {
    return this.treeNodeCommandDispatcher.fetchTreeNodes()
  }

  selectTreeNodes(): Observable<Array<HomeTreeNode>> {
    return this.treeNodeCommandDispatcher.selectTreeNodes()
  }

}
