import {Component, Input, OnInit} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {faAngleDoubleDown, faArrowsAltV} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  @Input()
  treeColumns: Array<TreeColumn>

  @Input()
  node: TreeNode

  dragIcon = faArrowsAltV

  expandIcon = faAngleDoubleDown

  constructor() {
  }

  ngOnInit(): void {
  }

  getContext(index: number): string {
    return this.node.data[this.treeColumns[index].name]
  }

  isColumnShowingData(index: number): boolean {
    return true
  }

}
