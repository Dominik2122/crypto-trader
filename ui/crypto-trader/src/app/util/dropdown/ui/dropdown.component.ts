import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {createPopper} from "@popperjs/core";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterViewInit {

  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", {static: false}) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", {static: false})
  popoverDropdownRef: ElementRef;

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }

  toggleDropdown(event) {
    event.preventDefault();
    this.dropdownPopoverShow = !this.dropdownPopoverShow
  }

}
