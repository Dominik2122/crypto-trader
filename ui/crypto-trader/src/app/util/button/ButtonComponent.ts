import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ButtonColors} from "src/app/util/button/ButtonColors";

@Component({
  selector: 'app-button',
  templateUrl: './ButtonComponent.html',
  styleUrls: ['./ButtonComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input()
  color: ButtonColors = ButtonColors.BLUE


  @Input()
  disabled: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
