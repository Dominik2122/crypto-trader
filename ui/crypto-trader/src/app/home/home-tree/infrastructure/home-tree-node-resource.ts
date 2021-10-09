import {Injectable} from "@angular/core";
import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {TreeNodeResource} from "src/app/util/tree/infrastructure/tree-node-resource";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";
import {HomeTreeNodeDTO} from "src/app/home/home-tree/infrastructure/HomeTreeNodeDTO";

@Injectable()
export class HomeTreeNodeResource extends BaseResource implements TreeNodeResource {

  getTreeNodes(): Observable<Array<HomeTreeNode>> {
    return this.get<Array<HomeTreeNodeDTO>>('http://127.0.0.1:8000/api/crypto/home/').pipe(
      map((dto: Array<HomeTreeNodeDTO>) => HomeTreeNode.fromArrayDTO(dto))
    )
  }

}
