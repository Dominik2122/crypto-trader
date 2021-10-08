import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";
import {FormGroup} from "@angular/forms";
import {ButtonColors} from "src/app/util/button/ButtonColors";
import {TradingService} from "src/app/trading/trading-root/TradingService";


@Component({
  selector: 'app-trading-buy',
  templateUrl: './trading-buy.component.html',
  styleUrls: ['./trading-buy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TradingBuyComponent implements OnInit {

  @Input()
  label: string

  amount: number = 0;

  form: FormGroup;

  config

  constructor(
    private readonly tradingService: TradingService
  ) {
  }

  ngOnInit(): void {
    this.createFormConfig()
  }

  observeForm(form: FormGroup) {
    this.form = form;
    this.form.valueChanges.subscribe(value => {
      if (value.amount < 0) {
        this.setValue(0)
      }
      this.amount = value.amount;

    })
  }

  increaseValue() {
    this.amount = ++this.amount
    this.setValue(this.amount)
  }

  decreaseValue() {
    this.amount = --this.amount
    this.setValue(this.amount)
  }

  isMinusDisabled(): boolean {
    return this.amount < 0
  }

  private createFormConfig() {
    this.config = [
      {
        type: FormInput.NUMBER,
        label: this.label,
        name: 'amount',
        placeholder: 'Insert'
      }
    ];
  }

  private setValue(value: number) {
    this.form.controls.amount.setValue(value)
  }
}
