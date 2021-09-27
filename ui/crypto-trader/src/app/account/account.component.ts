import {Component, OnInit} from '@angular/core';
import {AccountDataService} from "src/app/account/domain/AccountDataService";
import {BalanceHistory} from "src/app/account/domain/BalanceHistory";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  balanceHistory: Array<BalanceHistory>


  constructor(private readonly accountDataService: AccountDataService) {
  }

  ngOnInit(): void {
    this.accountDataService.fetchAccountData(5)
    this.accountDataService.selectAccountPastData().subscribe((balanceHistory) => {
      this.balanceHistory = balanceHistory
    })
  }

}
