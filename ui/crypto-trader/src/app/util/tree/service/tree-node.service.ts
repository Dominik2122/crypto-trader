import {Injectable} from "@angular/core";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Observable} from "rxjs";

@Injectable()
export class TreeNodeService {

  constructor() {

  }

  getNodes(): Observable<TreeNode> {
    return null;
  }

}
