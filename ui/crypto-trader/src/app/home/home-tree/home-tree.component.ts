import {Component, OnInit} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";

@Component({
  selector: 'app-home-tree',
  templateUrl: './home-tree.component.html',
  styleUrls: ['./home-tree.component.scss']
})
export class HomeTreeComponent implements OnInit {

  homeTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Name', 'Current Price', 'Net change', 'Last update'])
    .withNames(['name', 'currentPrice', 'netChange','lastFetchingDate'])
    .withFlex(['0 1 40%', '0 1 20%', '0 1 20%', '0 1 20%'])
    .withDragAndDrop()
    .withExpand()
    .build(4)

  constructor() {
  }

  ngOnInit(): void {

  }

}
