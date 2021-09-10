import {Component, Input} from '@angular/core';
import {HomeTreeNodePastData} from "src/app/home/home-tree/domain/HomeTreeNodePastData";
import 'chartjs-adapter-moment';

@Component({
  selector: 'app-home-tree-child-component',
  templateUrl: './HomeTreeNodeChildComponent.html',
  styleUrls: ['./HomeTreeNodeChildComponent.scss']
})
export class HomeTreeNodeChildComponent {

  @Input()
  data: Array<HomeTreeNodePastData>


  ngOnInit() {

  }




}
