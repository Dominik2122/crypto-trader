import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComparisonComponent } from './home-comparison.component';

describe('HomeComparisonComponent', () => {
  let component: HomeComparisonComponent;
  let fixture: ComponentFixture<HomeComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
