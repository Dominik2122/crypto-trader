import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-text-badge',
  templateUrl: './TextBadgeComponent.html',
  styleUrls: ['./TextBadgeComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBadgeComponent {

  @ViewChild('templateRef') element: ElementRef;

  @Input()
  color: string;

  @Input()
  subtle = false;

}
