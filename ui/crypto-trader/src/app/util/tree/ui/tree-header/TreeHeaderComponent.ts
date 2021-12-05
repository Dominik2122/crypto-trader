import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TreeColumn} from 'src/app/util/tree/ui/domain/TreeColumn';

@Component({
  selector: 'app-tree-header',
  templateUrl: './TreeHeaderComponent.html',
  styleUrls: ['./TreeHeaderComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeHeaderComponent implements OnInit {

  @Input()
  treeColumns: Array<TreeColumn>;

  constructor() { }

  ngOnInit(): void {
  }

}
