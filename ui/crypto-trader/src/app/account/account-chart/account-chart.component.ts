import { Component, OnInit } from '@angular/core';
import {ChartOptionsConfig} from "src/app/util/chart/domain/ChartOptionsConfig";
import {ChartDataConfig} from "src/app/util/chart/domain/ChartDataConfig";
import {FormInput} from "src/app/util/form/domain/FormInput";
import {AccountChartDateRange} from "src/app/account/account-chart/AccountChartDateRange";

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
        { value: AccountChartDateRange.DAY, legend: "Yesterday" },
        { value: AccountChartDateRange.WEEK, legend: "Week"  },
        { value: AccountChartDateRange.TWO_WEEKS, legend: "2 weeks"  },
        { value: AccountChartDateRange.MONTH, legend: "Month"  }
      ]
    },
  ];



  chartConfig: ChartOptionsConfig

  chartData: ChartDataConfig

  constructor() { }

  ngOnInit(): void {
  }

  observeForm(event): void {
    console.log(event)
  }

}
