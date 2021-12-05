import {ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef, ViewEncapsulation} from '@angular/core';
import {DropdownOption} from 'src/app/util/dropdown/ui/DropdownOption';


@Component({
  selector: 'app-dropdown',
  templateUrl: './DropdownComponent.html',
  styleUrls: ['./DropdownComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  @Input()
  name: string;

  @Input()
  dropdownOptions: Array<DropdownOption>;

  @ContentChild('dropdown')
  dropdownConfig: TemplateRef<any>;

}
