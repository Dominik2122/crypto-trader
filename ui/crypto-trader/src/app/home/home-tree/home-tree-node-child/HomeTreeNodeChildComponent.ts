import {Component, Input} from '@angular/core';
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";


@Component({
  selector: 'app-home-tree-child-component',
  templateUrl: './HomeTreeNodeChildComponent.html',
  styleUrls: ['./HomeTreeNodeChildComponent.scss']
})
export class HomeTreeNodeChildComponent {

  @Input()
  treeNode: HomeTreeNode

  constructor() {
  }

}
