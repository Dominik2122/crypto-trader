import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
