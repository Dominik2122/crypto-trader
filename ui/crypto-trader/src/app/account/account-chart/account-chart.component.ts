import { Component, OnInit } from '@angular/core';
import {ChartOptionsConfig} from "src/app/util/chart/domain/ChartOptionsConfig";
import {ChartDataConfig} from "src/app/util/chart/domain/ChartDataConfig";
import {FormInput} from "src/app/util/form/domain/FormInput";
import {AccountChartDateRange} from "src/app/account/account-chart/AccountChartDateRange";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-account-chart',
  templateUrl: './account-chart.component.html',
  styleUrls: ['./account-chart.component.scss']
})
export class AccountChartComponent implements OnInit {

  formConfig = [
    {
      type: FormInput.RANGE,
      label: 'Select date range',
      name: 'range',
      showTicks: true,
      stepsArray: [
        { value: 1, legend: "Yesterday" },
        { value: 2, legend: "Week"  },
        { value: 3, legend: "2 weeks"  },
        { value: 4, legend: "Month"  }
      ]
    },
  ];

  form: FormGroup;

  range: number

  chartConfig: ChartOptionsConfig

  chartData: ChartDataConfig

  constructor() { }

  ngOnInit(): void {
  }

  observeForm(form: FormGroup): void {
    this.form = form;
    this.form.valueChanges.subscribe(value => {
      console.log(value)
      this.range = value.range;
    })
  }

}
