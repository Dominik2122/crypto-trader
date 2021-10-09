import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTitleComponent implements OnInit {

  action: string = ''
  actions: Array<string> = ['', '', 'Invest in']

  constructor() {
  }

  ngOnInit(): void {
    this.initTitleAction()
  }

  initTitleAction(): void {
    let i: number = 0
    this.action = this.actions[i];
    setInterval(() => {
      i = i == 2 ? 0 : ++i;
      this.action = this.actions[i];
    }, 5000)
  }

}
