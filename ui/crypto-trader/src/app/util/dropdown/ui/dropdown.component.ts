import {Component, ContentChild, Input, TemplateRef } from '@angular/core';
import {DropdownOption} from "src/app/util/dropdown/ui/DropdownOption";


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input()
  name: string;

  @Input()
  dropdownOptions: Array<DropdownOption>;

  @ContentChild('dropdown')
  dropdownConfig: TemplateRef<any>

}
