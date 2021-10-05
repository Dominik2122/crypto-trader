import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingTreeComponent } from './trading-tree.component';

describe('TradingTreeComponent', () => {
  let component: TradingTreeComponent;
  let fixture: ComponentFixture<TradingTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
