import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from 'src/app/util/dropdown/ui/dropdown.component';




@NgModule({
  declarations: [


    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DropdownModule { }
