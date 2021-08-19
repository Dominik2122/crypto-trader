import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";


const treeNodes: Array<TreeNode> = [
  {
    id: '1',
    data: {
      name: 'Bitcoin',
      price: 10000
    },
    level: 0,
    expanded: false,
    position: 0
  },
  {
    id: '2',
    data: {
      name: 'DogeCoin',
      price: 10
    },
    level: 0,
    expanded: false,
    position: 1
  }

]

export class TreeNodeResource extends BaseResource {

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
