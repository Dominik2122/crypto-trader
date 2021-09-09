import {Component, OnInit} from '@angular/core';
import {ExpandTreeNodeRepository} from "src/app/util/tree/domain/ExpandTreeNodeRepository";
import {HomeTreeNode} from "src/app/home/home-tree/domain/HomeTreeNode";


@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss']
})
export class HomeRootComponent implements OnInit {

  constructor(private readonly expandTreeNodeRepository: ExpandTreeNodeRepository<HomeTreeNode>) { }

  ngOnInit(): void {
    this.expandTreeNodeRepository.observe().subscribe((x: HomeTreeNode) => {
      console.log(x.data.currentPrice)
    })
  }


}
