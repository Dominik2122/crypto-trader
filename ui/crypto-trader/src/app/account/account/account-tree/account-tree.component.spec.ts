import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountTreeComponent} from 'src/app/account/account/account-tree/account-tree.component';

describe('AccountTreeComponent', () => {
  let component: AccountTreeComponent;
  let fixture: ComponentFixture<AccountTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
