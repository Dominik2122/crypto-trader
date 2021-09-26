import {Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
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

  popperOnUpdate() {
    console.log('abc')
  }

  onClickPopper(popperContent) {
    console.log(this.popperContento.elRef)
    setTimeout(() => {
      console.log('it should be updated')
      console.log(popperContent.popperInstance)
      popperContent.createPopper()
    }, 5000)
  }

}
