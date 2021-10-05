import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TreeNode} from "src/app/util/tree/ui/models/tree-node.model";
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";
import {TreeViewStrategy} from "src/app/util/tree/ui/models/TreeViewStrategy";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/home-tree-node.service";
import {ButtonColors} from "src/app/util/button/ButtonColors";

@Component({
  selector: 'app-trading-tree',
  templateUrl: './trading-tree.component.html',
  styleUrls: ['./trading-tree.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TradingTreeComponent implements OnInit {

  NUMBER_OF_COLUMNS: number = 5;

  @ViewChild('popperContentRRR')
  popperContent

  popper

  nodes: Array<TreeNode>;

  homeTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Name', 'Price'])
    .withFlex(['0 1 35%', '0 1 20%', '0 1 22%', '0 1 23%'])
    .withExpand()
    .build(this.NUMBER_OF_COLUMNS)

  viewStrategy: TreeViewStrategy = TreeViewStrategy.TEMPLATE

  ButtonColors = ButtonColors

  constructor(private readonly treeNodeService: HomeTreeNodeService) {
  }

  ngOnInit(): void {
    this.treeNodeService.fetchNodes()
    this.treeNodeService.selectTreeNodes().subscribe((treeNodes: Array<TreeNode>) => {
      this.nodes = treeNodes
    })
  }

  ngAfterViewInit() {
    this.popper = this.popperContent
    console.log(this.popperContent)
  }

  onSold() {
    // this.popper = this.popperContent
    console.log(this.popper)
    console.log('sold')
  }
}
