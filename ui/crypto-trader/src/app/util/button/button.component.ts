import { Component, OnInit } from '@angular/core';
import {ButtonColors} from "src/app/util/button/ButtonColors";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  color: ButtonColors = ButtonColors.BLUE

  constructor() { }

  ngOnInit(): void {
  }

}
