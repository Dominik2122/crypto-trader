import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogWindowComponent} from 'src/app/util/dialog-window/ui/dialog-window/DialogWindowComponent';
import {NgxPopperjsModule} from 'ngx-popperjs';


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
