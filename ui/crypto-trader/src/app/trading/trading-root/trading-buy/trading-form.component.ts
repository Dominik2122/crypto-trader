import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";
import {FormGroup} from "@angular/forms";
import {distinctUntilChanged, map} from "rxjs/operators";


@Component({
  selector: 'app-trading-form',
  templateUrl: './trading-form.component.html',
  styleUrls: ['./trading-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingFormComponent implements OnInit {

  @Input()
  label: string

  @Input()
  maxAmount: number

  @Input()
  disable: boolean = false

  @Input()
  clear: boolean = false

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

    if (changes.clear && changes.clear.currentValue) {
      this.clearForm()
      this.clear = false
    }
  }

  observeForm(form: FormGroup) {
    this.form = form;
    this.form.valueChanges.pipe(
      map(value => value.amount),
      distinctUntilChanged()
    ).subscribe(amount => {
      if (amount < 0) {
        this.setValue(0)
      } else if (amount > this.maxAmount) {
        this.setValue(this.maxAmount)
      } else {
        this.amount = amount;
        this.amount$.next(amount)
      }

    })
  }

  increaseValue() {
    this.amount = this.amount ? ++this.amount : 1
    this.setValue(this.amount)
  }

  decreaseValue() {
    this.amount = --this.amount
    this.setValue(this.amount)
  }

  isMinusDisabled(): boolean {
    return this.amount <= 0 || !this.amount
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

  private clearForm() {
    this.setValue(undefined)
  }
}
