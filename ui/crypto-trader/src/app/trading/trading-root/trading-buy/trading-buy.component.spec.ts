import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingBuyComponent } from './trading-buy.component';

describe('TradingBuyComponent', () => {
  let component: TradingBuyComponent;
  let fixture: ComponentFixture<TradingBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
