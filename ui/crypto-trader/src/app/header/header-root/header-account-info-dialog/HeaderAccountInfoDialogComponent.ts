import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {HeaderAccountService} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderAccountService';
import {HeaderAccount} from 'src/app/header/header-root/header-account-info-dialog/domain/HeaderAccount';
import {ChartOptionsConfig} from 'src/app/util/chart/domain/ChartOptionsConfig';
import {ChartXAxis, xAxisTime} from 'src/app/util/chart/domain/ChartXAxis';
import {ChartDataConfig, ChartDataset} from 'src/app/util/chart/domain/ChartDataConfig';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {User} from 'src/app/authentication/domain/User';

@Component({
  selector: 'app-header-account-info-dialog',
  templateUrl: './HeaderAccountInfoDialogComponent.html',
  styleUrls: ['./HeaderAccountInfoDialogComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderAccountInfoDialogComponent {

  @Input()
  showDialog = false;


  @Input()
  user: User;

  headerAccountData: HeaderAccount;

  isLoaded = false;

  chartConfig: ChartOptionsConfig;

  chartData: ChartDataConfig;

  faUserAlt = faUserAlt;

  constructor(private spinner: NgxSpinnerService,
              private headerAccountService: HeaderAccountService,
              private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }


  ngOnInit(): void {
    this.fetchAndObserveAccountData();
    this.spinner.show();
  }


  onUserClick() {
    this.showDialog = !this.showDialog;
    this.initChart();
    this.changeDetectorRef.detectChanges();
  }

  private initChart() {
    if (!!this.headerAccountData) {
      this.createChartConfig();
      this.isLoaded = true;
      this.spinner.hide();
    }
  }


  private createChartConfig(): void {
    this.chartConfig = new ChartOptionsConfig()
      .withXAxis(new ChartXAxis(
        'timeseries',
        {display: false, text: null},
        { parser: xAxisTime.DaysAndMonth} ))
      .withType('line');

    this.chartData = new ChartDataConfig()
      .withLabels(this.headerAccountData.pastData.map(data => data.date))
      .withDatasets([new ChartDataset(
        'Balance',
        this.headerAccountData.pastData.map(data => data.balance),
        'green',
        'black',
        0.1
      )]);
  }

  private fetchAndObserveAccountData(): void {
    this.headerAccountService.fetchHeaderAccount();
    this.headerAccountService.selectHeaderAccount().subscribe((account: HeaderAccount) => {
      this.headerAccountData = account;
    });
  }

}
