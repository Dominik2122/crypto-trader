import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
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

  @Input()
  maxAmount: number

  @Input()
  disable: boolean = false

  @Output()
  amount$: EventEmitter<number> = new EventEmitter<number>()

  amount: number = 0;

  form: FormGroup;

  config

  ngOnInit(): void {
    this.createFormConfig()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disable) {
      this.createFormConfig()
    }
  }

  observeForm(form: FormGroup) {
    this.form = form;
    this.form.valueChanges.subscribe(value => {
      if (value.amount < 0) {
        this.setValue(0)
      } else if (value.amount > this.maxAmount) {
        this.setValue(this.maxAmount)
      } else {
        this.amount = value.amount;
        this.amount$.next(value.amount)
      }

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
    return this.amount <= 0
  }

  isPlusDisabled(): boolean {
    return this.amount >= this.maxAmount
  }

  private createFormConfig() {
    this.config = [
      {
        type: FormInput.NUMBER,
        label: this.label,
        name: 'amount',
        placeholder: 'Insert',
        disabled: this.disable
      }
    ];
  }

  private setValue(value: number) {
    this.form.controls.amount.setValue(value)
  }
}
