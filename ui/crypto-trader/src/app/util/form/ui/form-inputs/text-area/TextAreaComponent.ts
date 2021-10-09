import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './TextAreaComponent.html',
  styleUrls: ['./TextAreaComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
