import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeNodeService} from "src/app/util/tree/service/tree-node.service";
import {map} from "rxjs/operators";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";

@Injectable()
export class TreeColumnService {

  treeColumns: TreeColumn

  constructor(private readonly treeNodeService: TreeNodeService) {

  }

  getColumns(): Observable<TreeColumn> {
    return this.treeNodeService.getNodes().pipe(
      map((treeNodes: Array<TreeNode>) => {
        const treeNode: TreeNode = treeNodes[0]
        const treeColumn: TreeColumn = new TreeColumn( )

        return treeColumn
      })
    )
  }


}
