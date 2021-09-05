import {Component, OnInit} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";

@Component({
  selector: 'app-home-tree',
  templateUrl: './home-tree.component.html',
  styleUrls: ['./home-tree.component.scss']
})
export class HomeTreeComponent implements OnInit {

  NUMBER_OF_COLUMNS: number = 4;

  homeTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Name', 'Current Price', 'Net change', '%'])
    .withFlex(['0 1 35%', '0 1 20%', '0 1 22%', '0 1 23%'])
    .withExpand()
    .build(this.NUMBER_OF_COLUMNS)

  viewStrategy: TreeViewStrategy = TreeViewStrategy.TEMPLATE

  constructor() {
  }

  ngOnInit(): void {

  }

}
