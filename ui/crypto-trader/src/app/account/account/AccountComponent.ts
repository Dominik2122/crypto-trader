import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountDataService} from "src/app/account/account/domain/AccountDataService";
import {BalanceHistory} from "src/app/account/account/domain/BalanceHistory";

@Component({
  selector: 'app-account',
  templateUrl: './AccountComponent.html',
  styleUrls: ['./AccountComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {

  balanceHistory: Array<BalanceHistory>

  days: number = 1


  constructor(
    private readonly accountDataService: AccountDataService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.accountDataService.fetchAccountData(this.days)
    this.accountDataService.selectAccountPastData().subscribe((balanceHistory) => {
      this.balanceHistory = balanceHistory
      this.changeDetectorRef.detectChanges()
    })
  }

  onDaysChanges(days: number) {
    this.days = days
    this.accountDataService.fetchAccountData(this.days)
    this.changeDetectorRef.detectChanges()
  }

}
