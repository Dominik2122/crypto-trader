import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-home-root',
  templateUrl: './HomeRootComponent.html',
  styleUrls: ['./HomeRootComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
