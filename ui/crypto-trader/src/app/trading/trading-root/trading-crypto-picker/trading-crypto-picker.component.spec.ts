import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingCryptoPickerComponent } from './trading-crypto-picker.component';

describe('TradingCryptoPickerComponent', () => {
  let component: TradingCryptoPickerComponent;
  let fixture: ComponentFixture<TradingCryptoPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingCryptoPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingCryptoPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
