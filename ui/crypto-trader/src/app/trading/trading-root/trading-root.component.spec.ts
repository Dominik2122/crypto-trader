import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingRootComponent } from './trading-root.component';

describe('TradingRootComponent', () => {
  let component: TradingRootComponent;
  let fixture: ComponentFixture<TradingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
