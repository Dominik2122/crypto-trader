import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderRootComponent} from 'src/app/header/header-root/HeaderRootComponent';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {DropdownModule} from 'src/app/util/dropdown/DropdownModule';
import {DialogWindowModule} from 'src/app/util/dialog-window/DialogWindowModule';
import {HeaderAccountInfoDialogComponent} from 'src/app/header/header-root/header-account-info-dialog/HeaderAccountInfoDialogComponent';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HeaderAccountResource} from 'src/app/header/header-root/header-account-info-dialog/infrastructure/HeaderAccountResource';
import {HeaderAccountService} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderAccountService';
import {HeaderAccountStorageService} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderAccountStorageService';
import {ChartModule} from 'src/app/util/chart/ChartModule';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {ButtonModule} from 'src/app/util/button/ButtonModule';
import {TextBadgeModule} from 'src/app/util/text-badge/TextBadgeModule';
import {UtilModule} from 'src/app/util/UtilModule';


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
    NgxSpinnerModule,
    ChartModule,
    NgxPopperjsModule,
    ButtonModule,
    TextBadgeModule,
    UtilModule
  ],
  providers: [
    HeaderAccountResource,
    HeaderAccountService,
    HeaderAccountStorageService
  ]
})
export class HeaderModule { }
