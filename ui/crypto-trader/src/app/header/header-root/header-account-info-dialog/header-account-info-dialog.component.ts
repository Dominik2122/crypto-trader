import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {HeaderAccountService} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderAccountService";
import {HeaderAccount} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderAccount";

@Component({
  selector: 'app-header-account-info-dialog',
  templateUrl: './header-account-info-dialog.component.html',
  styleUrls: ['./header-account-info-dialog.component.scss']
})
export class HeaderAccountInfoDialogComponent implements OnInit {

  headerAccountData: HeaderAccount;

  isLoaded: boolean = false;

  constructor(private spinner: NgxSpinnerService,
              private headerAccountService: HeaderAccountService) {
  }


  ngOnInit(): void {
    this.fetchAndObserveAccountData()
  }

  private fetchAndObserveAccountData(): void {
    this.spinner.show();
    this.headerAccountService.fetchHeaderAccount()
    this.headerAccountService.selectHeaderAccount().subscribe((account: HeaderAccount) => {
      if (!!account) {
        this.isLoaded = true
        this.spinner.hide()
      }
      this.headerAccountData = account
    })
  }

}
