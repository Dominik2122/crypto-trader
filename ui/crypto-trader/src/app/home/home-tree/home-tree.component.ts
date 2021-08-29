import {Component, OnInit} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";

@Component({
  selector: 'app-home-tree',
  templateUrl: './home-tree.component.html',
  styleUrls: ['./home-tree.component.scss']
})
export class HomeTreeComponent implements OnInit {

  homeTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Name', 'Current Price', 'Net change', '% net change'])
    .withNames(['name', 'currentPrice', 'netChange','percentageNetChange'])
    .withFlex(['0 1 45%', '0 1 15%', '0 1 15%', '0 1 25%'])
    .withDragAndDrop()
    .withExpand()
    .build(4)

  constructor() {
  }

  ngOnInit(): void {

  }

}
