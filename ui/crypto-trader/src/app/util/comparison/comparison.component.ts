import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {Crypto} from "src/app/util/comparison/models/Crypto";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComparisonComponent {

  @Input()
  main: Crypto

  @Input()
  secondary: Crypto

  header: string;

  percentageDifference: number;

  difference: number;

  isPositive: boolean;

  upIcon = faArrowUp
  downIcon = faArrowDown

  ngOnChanges() {
    this.createHeader();
    this.createDifference();
    this.createPercentageDifference();
    this.isPositive = this.difference > 0
  }

  private createHeader() {
    const first: string = [...this.main.name].slice(0, 3).join('').toUpperCase()
    const second: string = [...this.secondary.name].slice(0, 3).join('').toUpperCase()
    this.header = `${first}/${second}`
  }

  private createDifference() {
    this.difference = this.main.value - this.main.lastValue - this.secondary.value + this.secondary.lastValue
  }

  private createPercentageDifference() {
    this.percentageDifference = Math.round(this.difference / (this.main.lastValue - this.secondary.lastValue) * 1000) / 10
  }

}
