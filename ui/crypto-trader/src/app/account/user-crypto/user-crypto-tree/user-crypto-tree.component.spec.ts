import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserCryptoTreeComponent} from 'src/app/account/user-crypto/user-crypto-tree/user-crypto-tree.component';

describe('UserCryptoTreeComponent', () => {
  let component: UserCryptoTreeComponent;
  let fixture: ComponentFixture<UserCryptoTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCryptoTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCryptoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
