import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingSellComponent } from './trading-sell.component';

describe('TradingSellComponent', () => {
  let component: TradingSellComponent;
  let fixture: ComponentFixture<TradingSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
