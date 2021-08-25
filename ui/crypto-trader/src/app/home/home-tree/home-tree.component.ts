import { Component, OnInit } from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";

@Component({
  selector: 'app-home-tree',
  templateUrl: './home-tree.component.html',
  styleUrls: ['./home-tree.component.scss']
})
export class HomeTreeComponent implements OnInit {

  homeTreeColumns: Array<TreeColumn> = TreeColumn.Builder.build(4).withHeaders([''])

  constructor() { }

  ngOnInit(): void {

  }

}
