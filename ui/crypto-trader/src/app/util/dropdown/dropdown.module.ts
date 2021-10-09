import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from 'src/app/util/dropdown/ui/dropdown.component';
import {NgxPopperjsModule} from "ngx-popperjs";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    NgxPopperjsModule,
    RouterModule
  ]
})
export class DropdownModule { }
