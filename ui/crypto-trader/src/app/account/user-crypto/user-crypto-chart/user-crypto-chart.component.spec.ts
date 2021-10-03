import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCryptoChartComponent } from 'src/app/account/user-crypto/user-crypto-chart/user-crypto-chart.component';

describe('UserCryptoChartComponent', () => {
  let component: UserCryptoChartComponent;
  let fixture: ComponentFixture<UserCryptoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCryptoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCryptoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
