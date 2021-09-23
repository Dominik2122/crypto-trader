import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {createPopper} from "@popperjs/core";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterViewInit {

  button = document.querySelector('#button');
  tooltip = document.querySelector('#tooltip');


  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", {static: false})
  btnDropdownRef: ElementRef;

  @ViewChild("popoverDropdownRef", {static: false})
  popoverDropdownRef: ElementRef;

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom",
        strategy: "fixed",
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [10, 20],
            },
          },
        ],
      }
    );
    createPopper(this.button, this.tooltip as HTMLElement, {
      placement: 'right',
    });
  }

  toggleDropdown(event) {
    event.preventDefault();
    this.dropdownPopoverShow = !this.dropdownPopoverShow
  }

}
