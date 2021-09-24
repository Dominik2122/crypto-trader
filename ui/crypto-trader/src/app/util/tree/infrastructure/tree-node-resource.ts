import {BaseResource} from "src/app/util/base/infrastructure/base-resource";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';

@Injectable()
export abstract class TreeNodeResource extends BaseResource {

  abstract getTreeNodes(): Observable<Array<TreeNode>>

  abstract putTreeNode?(url: string): Observable<Array<TreeNode>>
}
