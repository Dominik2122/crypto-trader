import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {OwnedCryptoService} from 'src/app/account/user-crypto/domain/OwnedCryptoService';
import {ChartOptionsConfig} from 'src/app/util/chart/domain/ChartOptionsConfig';
import {ChartXAxis, xAxisTime} from 'src/app/util/chart/domain/ChartXAxis';
import {ChartDataConfig, ChartDataset} from 'src/app/util/chart/domain/ChartDataConfig';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {OwnedCrypto} from 'src/app/account/user-crypto/domain/OwnedCrypto';

@Component({
  selector: 'app-user-crypto-chart',
  templateUrl: './UserCryptoChartComponent.html',
  styleUrls: ['./UserCryptoChartComponent.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCryptoChartComponent implements OnInit {


  chartConfig: ChartOptionsConfig;

  amountChartConfig: ChartOptionsConfig;

  showValues = true;

  chartData: ChartDataConfig;
  amountChartData: ChartDataConfig;

  chartCreated = false;

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;


  private cryptos: Array<OwnedCrypto>;

  constructor(
    private readonly ownedCryptoService: OwnedCryptoService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.initChartConfig();
  }

  private initChartConfig(): void {
    this.ownedCryptoService.getCryptos().subscribe((cryptos: Array<OwnedCrypto>) => {
      this.cryptos = cryptos;
      this.showValues ? this.createChartConfig() : this.createAmountChartConfig();
      this.chartCreated = cryptos && cryptos.length > 0;
      this.changeDetectorRef.detectChanges();
    });
  }


  private createChartConfig(): void {
    this.chartConfig = new ChartOptionsConfig()
      .withXAxis(new ChartXAxis('timeseries',
        {display: false, text: null},
        {parser: xAxisTime.DaysAndMonth},
        false))
      .withTitle('Your crypto values')
      .withType('pie');

    this.chartData = new ChartDataConfig()
      .withLabels(this.cryptos.map(data => data.name))
      .withDatasets([new ChartDataset(
        'Balance',
        this.cryptos.map(data => Math.abs(data.value)),
        ['green', 'red', 'blue', 'yellow', 'brown', 'orange', 'pink', 'black', 'white', 'gray'],
        ['green', 'red', 'blue', 'yellow', 'brown', 'orange', 'pink', 'black', 'white', 'gray'],
        1
      )]);
  }


  private createAmountChartConfig(): void {
    this.amountChartConfig = new ChartOptionsConfig()
      .withTitle('Amount of your cryptos')
      .withoutLegend()
      .withType('bar');

    this.amountChartData = new ChartDataConfig()
      .withLabels(this.cryptos.map(data => data.name))
      .withDatasets([new ChartDataset(
        null,
        this.cryptos.map(data => Math.abs(data.amount)),
        ['green', 'red', 'blue', 'yellow', 'brown', 'orange', 'pink', 'black', 'white', 'gray'],
        ['green', 'red', 'blue', 'yellow', 'brown', 'orange', 'pink', 'black', 'white', 'gray'],
        1
      )]);
  }


  toggleChart() {
    this.showValues = !this.showValues;
    if (this.showValues) {
      this.createChartConfig();
    } else {
      this.createAmountChartConfig();
    }
  }


}
