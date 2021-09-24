import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {HeaderAccountResource} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountResource";

@Component({
  selector: 'app-header-account-info-dialog',
  templateUrl: './header-account-info-dialog.component.html',
  styleUrls: ['./header-account-info-dialog.component.scss']
})
export class HeaderAccountInfoDialogComponent implements OnInit {

  isLoading: boolean = true;

  constructor(private spinner: NgxSpinnerService,
              private headerAccountResource: HeaderAccountResource) {}


  ngOnInit(): void {
    this.headerAccountResource.getAccount().subscribe((x) => console.log(x))
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 3000)
  }

  private fetchAccountData(): void {

  }

}
