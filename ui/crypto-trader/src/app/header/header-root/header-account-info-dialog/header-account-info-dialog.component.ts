import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-header-account-info-dialog',
  templateUrl: './header-account-info-dialog.component.html',
  styleUrls: ['./header-account-info-dialog.component.scss']
})
export class HeaderAccountInfoDialogComponent implements OnInit {

  isLoading: boolean = true

  constructor(private spinner: NgxSpinnerService) {}


  ngOnInit(): void {

    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 3000)
  }

  private fetchAccountData(): void {

  }

}
