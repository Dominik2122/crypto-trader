import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCryptoRootComponent } from 'src/app/account/user-crypto/user-crypto-root/user-crypto-root.component';

describe('UserCryptoRootComponent', () => {
  let component: UserCryptoRootComponent;
  let fixture: ComponentFixture<UserCryptoRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCryptoRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCryptoRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
