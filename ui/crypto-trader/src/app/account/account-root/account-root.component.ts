import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-account-root',
  templateUrl: './account-root.component.html',
  styleUrls: ['./account-root.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
