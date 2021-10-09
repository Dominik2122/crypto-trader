import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './DialogWindowComponent.html',
  styleUrls: ['./DialogWindowComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogWindowComponent {

  @Input()
  template: TemplateRef<ElementRef>

  @ViewChild('popperContent') popperContento


  @Output()
  readonly clicked: EventEmitter<void> = new EventEmitter<void>()

  text = "ADaSDADSD"

  ngOnInit() {
    setTimeout(() => this.text = 'adadasd', 3000)
  }

  onClick() {
    this.clicked.emit()
  }

}
