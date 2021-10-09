import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Crypto} from "src/app/util/comparison/domain/Crypto";
import {HomeTreeNodeService} from "src/app/home/home-tree/domain/service/HomeTreeNodeService";
import {filter} from "rxjs/operators";
import {HomeCrypto} from "src/app/home/home-comparison-list/domain/HomeCrypto";

@Component({
  selector: 'app-home-comparison-list',
  templateUrl: './HomeComparisonListComponent.html',
  styleUrls: ['./HomeComparisonListComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComparisonListComponent implements OnInit {

  main: Crypto

  secondaries: Array<Crypto>

  constructor(
    private readonly treeNodeService: HomeTreeNodeService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.treeNodeService.selectTreeNodes().pipe(
      filter(x => !!x)
    ).subscribe(nodes => {
      this.main = HomeCrypto.fromTreeNode(nodes[3])
      this.secondaries = nodes.map((x) => HomeCrypto.fromTreeNode(x))
      this.changeDetectorRef.detectChanges()

    })
  }
}
