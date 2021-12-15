import {Injectable} from '@angular/core';
import {BaseResource} from 'src/app/util/base/infrastructure/BaseResource';
import {TreeNodeResource} from 'src/app/util/tree/infrastructure/TreeNodeResource';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HomeTreeNode} from 'src/app/home/home-tree/domain/HomeTreeNode';
import {HomeTreeNodeDTO} from 'src/app/home/home-tree/infrastructure/HomeTreeNodeDTO';

@Injectable()
export class HomeTreeNodeResource extends BaseResource implements TreeNodeResource {

  getTreeNodes(): Observable<Array<HomeTreeNode>> {
    return this.get<Array<HomeTreeNodeDTO>>('crypto/home/').pipe(
      map((dto: Array<HomeTreeNodeDTO>) => HomeTreeNode.fromArrayDTO(dto))
    );
  }

}
