import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HomeTreeNodeRepository} from 'src/app/home/home-tree/store/HomeTreeNodeRepository';
import {HomeTreeNode} from 'src/app/home/home-tree/domain/HomeTreeNode';


@Injectable()
export class HomeTreeNodeService {

  constructor(private readonly treeNodeCommandDispatcher: HomeTreeNodeRepository) {

  }

  fetchNodes(): void {
    return this.treeNodeCommandDispatcher.fetchTreeNodes();
  }

  selectTreeNodes(): Observable<Array<HomeTreeNode>> {
    return this.treeNodeCommandDispatcher.selectTreeNodes();
  }

}
