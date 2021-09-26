import { Component, OnInit } from '@angular/core';
import {AccountDataService} from "src/app/account/domain/AccountDataService";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {


  constructor(private readonly accountDataService: AccountDataService) { }

  ngOnInit(): void {
    this.accountDataService.fetchAccountData(1)
    this.accountDataService.selectAccountBalance().subscribe((x) => {
      console.log(x)
    })
  }

}
