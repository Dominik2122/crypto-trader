import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {TransactionResource} from "src/app/shared/transactions/inftrastructure/TransactionResource";
import {TransactionRequest} from "src/app/shared/transactions/inftrastructure/TransactionRequest";
import {FormGroup} from "@angular/forms";
import {FormInput} from "src/app/util/form/domain/FormInput";
import {ButtonColors} from "src/app/util/button/ButtonColors";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-sell',
  templateUrl: './SellComponent.html',
  styleUrls: ['./SellComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SellComponent implements OnInit {

  @Input()
  crypto: string;

  @Input()
  cryptoPrice: number;

  @Input()
  maxAmount: number;

  @Output()
  sold: EventEmitter<void> = new EventEmitter<void>()

  amount: number;

  form: FormGroup;

  ButtonColors = ButtonColors


  config = [
    {
      type: FormInput.NUMBER,
      label: 'Amount',
      name: 'amount',
      placeholder: 'Insert the amount you would like to sell'
    }
  ];

  constructor(
    private readonly transactionResource: TransactionResource
  ) {
  }

  ngOnInit(): void {

  }

  observeForm(form: FormGroup) {
    this.form = form;
    this.form.valueChanges.subscribe(value => {
      this.amount = value.amount;
    })
  }

  onSellAmount() {
    this.sellCrypto(-this.amount)
  }

  onSellAll() {
    this.sellCrypto(-this.maxAmount)
  }

  sellCrypto(amount: number) {
    this.transactionResource.tradeCrypto(new TransactionRequest(this.crypto, amount))
      .pipe(
        take(1))
      .subscribe(() => {
        this.sold.emit()
      })
  }

}
