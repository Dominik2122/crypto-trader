import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TreeColumn} from "src/app/util/tree/ui/models/tree-column.model";

@Component({
  selector: 'app-tree-header',
  templateUrl: './tree-header.component.html',
  styleUrls: ['./tree-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeHeaderComponent implements OnInit {

  @Input()
  treeColumns: Array<TreeColumn>

  constructor() { }

  ngOnInit(): void {
  }

}
