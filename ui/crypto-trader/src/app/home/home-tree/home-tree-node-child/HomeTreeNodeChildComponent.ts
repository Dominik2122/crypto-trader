import {Component, Input, SimpleChanges} from '@angular/core';
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";


@Component({
  selector: 'app-home-tree-child-component',
  templateUrl: './HomeTreeNodeChildComponent.html',
  styleUrls: ['./HomeTreeNodeChildComponent.scss']
})
export class HomeTreeNodeChildComponent {

  @Input()
  data: HomeTreeNodePastData

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if (changes.data) {
      console.log(changes.data)
    }
  }

}
