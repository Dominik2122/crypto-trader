import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TradingFormComponent} from 'src/app/trading/trading-root/trading-buy/trading-form.component';

describe('TradingBuyComponent', () => {
  let component: TradingFormComponent;
  let fixture: ComponentFixture<TradingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
