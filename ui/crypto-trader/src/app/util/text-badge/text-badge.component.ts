import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-text-badge',
  templateUrl: './text-badge.component.html',
  styleUrls: ['./text-badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBadgeComponent {

  @ViewChild('templateRef') element: ElementRef

  @Input()
  color: string;

  @Input()
  subtle: boolean = false

}
