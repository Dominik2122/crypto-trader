import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-trading-root',
  templateUrl: './trading-root.component.html',
  styleUrls: ['./trading-root.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
