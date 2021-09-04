import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text-badge',
  templateUrl: './text-badge.component.html',
  styleUrls: ['./text-badge.component.scss']
})
export class TextBadgeComponent {

  @ViewChild('templateRef') element: ElementRef

  @Input()
  color: string;

  @Input()
  subtle: boolean = false

}
