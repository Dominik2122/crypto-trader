import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TradingChartComponent} from 'src/app/trading/trading-root/trading-chart/trading-chart.component';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {ChartModule} from 'src/app/util/chart/ChartModule';
import {HomeTreeNodePastData} from 'src/app/home/home-tree/domain/HomeTreeNodePastData';
import {
  TradingChartWrapperComponent
} from 'src/app/trading/trading-root/trading-chart/e2e/TradingChartWrapperComponent';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('TradingChartComponent', () => {
  let component: TradingChartWrapperComponent;
  let fixture: ComponentFixture<TradingChartWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartModule],
      declarations: [
        TradingChartWrapperComponent,
        TradingChartComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingChartWrapperComponent);
    component = fixture.componentInstance;
    component.data = [
      new HomeTreeNodePastData(10, new Date()),
      new HomeTreeNodePastData(12, new Date()),
      new HomeTreeNodePastData(13, new Date()),
      new HomeTreeNodePastData(15, new Date()),
      new HomeTreeNodePastData(15, new Date()),
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
