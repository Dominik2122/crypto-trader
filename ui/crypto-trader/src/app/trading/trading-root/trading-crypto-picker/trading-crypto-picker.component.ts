import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormInput} from "src/app/util/form/domain/FormInput";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TradingInfo} from "src/app/trading/trading-root/trading-crypto-picker/TradingInfo";
import {pluck} from "rxjs/operators";

@Component({
  selector: 'app-trading-crypto-picker',
  templateUrl: './trading-crypto-picker.component.html',
  styleUrls: ['./trading-crypto-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingCryptoPickerComponent implements OnInit {

  placeholder: string = 'bitcoin'

  options: Array<string>

  formConfig = [
    {
      type: FormInput.SELECT,
      label: 'Select crypto to trade',
      name: 'crypto',
      showTicks: true,
      placeholder: this.placeholder,
      options: []
    },
  ];

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      pluck('crypto')
    ).subscribe((data: TradingInfo) => {
      this.placeholder = data.cryptoData.name
      this.options = data.otherCryptos
      this.createForm()
    })
  }

  observeForm(form: FormGroup) {
    form.valueChanges.subscribe((value) => {
      this.router.navigate(['trading'], {queryParams: {crypto: value.crypto}})
    })
  }

  private createForm() {
    this.formConfig = [
      {
        type: FormInput.SELECT,
        label: 'Select date range',
        name: 'crypto',
        showTicks: true,
        placeholder: this.placeholder,
        options: this.options
      },
    ];
  }

}
