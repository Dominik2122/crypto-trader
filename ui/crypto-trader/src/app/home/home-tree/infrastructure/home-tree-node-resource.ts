import {Injectable} from "@angular/core";
import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {TreeNodeResource} from "src/app/util/tree/infrastructure/tree-node-resource";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {TreeNodeDTO} from "src/app/home/home-tree/infrastructure/TreeNodeDTO";
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";

@Injectable()
export class HomeTreeNodeResource extends BaseResource implements TreeNodeResource {

  constructor(http: HttpClient) {
    super(http)
  }

  getTreeNode(): Observable<Array<HomeTreeNode>> {
    return this.get<Array<TreeNodeDTO>>('http://127.0.0.1:8000/api/crypto/home/').pipe(
      map((dto: Array<TreeNodeDTO>) => HomeTreeNode.fromArrayDTO(dto))
    )
  }

}
