import {BaseResource} from 'src/app/util/base/infrastructure/BaseResource';
import {TreeNode} from 'src/app/util/tree/ui/domain/TreeNode';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class TreeNodeResource extends BaseResource {

  abstract getTreeNodes(): Observable<Array<TreeNode>>;

  abstract putTreeNode?(url: string): Observable<Array<TreeNode>>;
}
