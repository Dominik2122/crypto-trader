import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Crypto} from "src/app/util/comparison/models/Crypto";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/home-tree-node.service";
import {filter} from "rxjs/operators";
import {HomeCrypto} from "src/app/home/home-comparison-list/domain/HomeCrypto";

@Component({
  selector: 'app-home-comparison-list',
  templateUrl: './home-comparison-list.component.html',
  styleUrls: ['./home-comparison-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComparisonListComponent implements OnInit {

  main: Crypto

  secondaries: Array<Crypto>

  constructor(private readonly treeNodeService: HomeTreeNodeService) { }

  ngOnInit(): void {
    this.treeNodeService.selectTreeNodes().pipe(
      filter(x => !!x)
    ).subscribe(x => {
      this.main = HomeCrypto.fromTreeNode(x[3])
      this.secondaries = x.map((x) => HomeCrypto.fromTreeNode(x))
    })
  }
}
