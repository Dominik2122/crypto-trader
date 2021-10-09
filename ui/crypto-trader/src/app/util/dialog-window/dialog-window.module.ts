import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogWindowComponent} from './ui/dialog-window/dialog-window.component';
import {NgxPopperjsModule} from "ngx-popperjs";


@NgModule({
  declarations: [
    DialogWindowComponent
  ],
  exports: [
    DialogWindowComponent
  ],
  imports: [
    CommonModule,
    NgxPopperjsModule
  ]
})
export class DialogWindowModule { }
