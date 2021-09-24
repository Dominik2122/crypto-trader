import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {HeaderAccountService} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderAccountService";
import {HeaderAccount} from "src/app/header/header-root/header-account-info-dialog/domain/HeaderAccount";
import {ChartOptionsConfig} from "src/app/util/chart/domain/ChartOptionsConfig";
import {ChartXAxis, xAxisTime} from "src/app/util/chart/domain/ChartXAxis";
import {ChartDataConfig, ChartDataset} from "src/app/util/chart/domain/ChartDataConfig";

@Component({
  selector: 'app-header-account-info-dialog',
  templateUrl: './header-account-info-dialog.component.html',
  styleUrls: ['./header-account-info-dialog.component.scss']
})
export class HeaderAccountInfoDialogComponent implements OnInit {

  headerAccountData: HeaderAccount;

  isLoaded: boolean = false;

  chartConfig: ChartOptionsConfig

  chartData: ChartDataConfig

  constructor(private spinner: NgxSpinnerService,
              private headerAccountService: HeaderAccountService) {
  }


  ngOnInit(): void {
    console.log('init')
    this.fetchAndObserveAccountData()
  }

  private createChartConfig(): void {
    this.chartConfig = new ChartOptionsConfig()
      .withXAxis(new ChartXAxis(
        'timeseries',
        {display: false, text: null},
        {parser: xAxisTime.DaysAndMonth}))
      .withType('line')

    console.log(this.headerAccountData.balanceHistory.map(data => data.date))

    this.chartData = new ChartDataConfig()
      .withLabels(this.headerAccountData.balanceHistory.map(data => data.date))
      .withDatasets([new ChartDataset(
        'JAPA',
        this.headerAccountData.balanceHistory.map(data => data.balance),
        'green',
        'black',
        2
      )])
  }


  private fetchAndObserveAccountData(): void {
    this.spinner.show();
    this.headerAccountService.fetchHeaderAccount()
    this.headerAccountService.selectHeaderAccount().subscribe((account: HeaderAccount) => {
      if (!!account) {
        this.isLoaded = true
        this.spinner.hide()
      }
      this.headerAccountData = account
      this.createChartConfig()

    })
  }

}
