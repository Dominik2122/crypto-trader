import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-account-root',
  templateUrl: './AccountRootComponent.html',
  styleUrls: ['./AccountRootComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
