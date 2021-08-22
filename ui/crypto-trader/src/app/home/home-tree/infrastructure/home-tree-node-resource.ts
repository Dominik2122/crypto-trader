import {Injectable} from "@angular/core";
import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {TreeNodeResource} from "src/app/util/tree/infrastructure/tree-node-resource";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";

const treeNodes: Array<TreeNode> = [
  {
    id: '1',
    data: {
      name: 'Bitcoin',
      price: 20000
    },
    level: 0,
    expanded: false,
    position: 0
  },
  {
    id: '2',
    data: {
      name: 'DogeCoin',
      price: 100
    },
    level: 0,
    expanded: false,
    position: 1
  }

]

@Injectable()
export class HomeTreeNodeResource extends BaseResource implements TreeNodeResource {

  constructor(http: HttpClient) {
    super(http)
  }

  getTreeNode(url: string): Observable<Array<TreeNode>> {
    return of(treeNodes)
  }

  putTreeNode(url: string): Observable<Array<TreeNode>> {
    return of(treeNodes)
  }

}
