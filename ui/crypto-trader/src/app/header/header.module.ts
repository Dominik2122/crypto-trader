import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRootComponent } from './header-root/header-root.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import {DropdownModule} from "src/app/util/dropdown/dropdown.module";
import {DialogWindowModule} from "src/app/util/dialog-window/dialog-window.module";
import { HeaderAccountInfoDialogComponent } from 'src/app/header/header-root/header-account-info-dialog/header-account-info-dialog.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {HeaderAccountResource} from "src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountResource";
import {HeaderAccountService} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderAccountService";
import {HeaderAccountStorageService} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderAccountStorageService";



@NgModule({
	declarations: [
		HeaderRootComponent,
  HeaderAccountInfoDialogComponent
	],
	exports: [
		HeaderRootComponent
	],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    DropdownModule,
    DialogWindowModule,
    NgxSpinnerModule
  ],
  providers: [
    HeaderAccountResource,
    HeaderAccountService,
    HeaderAccountStorageService
  ]
})
export class HeaderModule { }
