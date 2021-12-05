import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormInput} from 'src/app/util/form/domain/FormInput';
import {FormGroup} from '@angular/forms';
import {Options} from 'src/app/account/account/account-date-range-form/Options';


@Component({
  selector: 'app-account-date-range-form',
  templateUrl: './AccountDateRangeFormComponent.html',
  styleUrls: ['./AccountDateRangeFormComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountDateRangeFormComponent implements OnInit {

  @Output()
  days: EventEmitter<number> = new EventEmitter<number>();

  options = [
    { value: 1, legend: 'Yesterday' },
    { value: 2, legend: 'Week'  },
    { value: 3, legend: '2 weeks'  },
    { value: 4, legend: 'Month'  }
  ];

  formConfig = [
    {
      type: FormInput.RANGE,
      label: 'Select date range',
      name: 'range',
      showTicks: true,
      stepsArray: this.options
    },
  ];

  form: FormGroup;

  range: number;

  constructor() { }

  ngOnInit(): void {
  }

  observeForm(form: FormGroup): void {
    this.form = form;
    this.form.valueChanges.subscribe(value => {
      const option = this.options.find(option => option.value === value.range);
      this.days.next(Options[option.legend]);
      this.range = value.range;
    });
  }

}
