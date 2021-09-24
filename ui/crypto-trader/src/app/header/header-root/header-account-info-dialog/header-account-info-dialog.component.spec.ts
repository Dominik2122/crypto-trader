import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAccountInfoDialogComponent } from 'src/app/header/header-root/header-account-info-dialog/header-account-info-dialog.component';

describe('HeaderAccountInfoDialogComponent', () => {
  let component: HeaderAccountInfoDialogComponent;
  let fixture: ComponentFixture<HeaderAccountInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAccountInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAccountInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
