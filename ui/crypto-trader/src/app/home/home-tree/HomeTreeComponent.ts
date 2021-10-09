import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/domain/TreeColumn";
import {TreeViewStrategy} from "src/app/util/tree/ui/domain/TreeViewStrategy";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/HomeTreeNodeService";
import {TreeNode} from "src/app/util/tree/ui/domain/TreeNode";

@Component({
  selector: 'app-home-tree',
  templateUrl: './HomeTreeComponent.html',
  styleUrls: ['./HomeTreeComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTreeComponent implements OnInit {

  NUMBER_OF_COLUMNS: number = 5;

  nodes: Array<TreeNode>;

  homeTreeColumns: Array<TreeColumn> = new TreeColumn.Builder()
    .withHeaders(['Name', 'Current Price', 'Net change', '%'])
    .withFlex(['0 1 35%', '0 1 20%', '0 1 22%', '0 1 23%'])
    .withExpand()
    .build(this.NUMBER_OF_COLUMNS)

  viewStrategy: TreeViewStrategy = TreeViewStrategy.TEMPLATE

  constructor(
    private readonly treeNodeService: HomeTreeNodeService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.treeNodeService.fetchNodes()
    this.treeNodeService.selectTreeNodes().subscribe((treeNodes: Array<TreeNode>) => {
      this.nodes = treeNodes
      this.changeDetectorRef.detectChanges()
    })
  }
}
