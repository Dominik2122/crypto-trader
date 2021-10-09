import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComparisonListComponent} from './home-comparison-list.component';

describe('HomeComparisonListComponent', () => {
  let component: HomeComparisonListComponent;
  let fixture: ComponentFixture<HomeComparisonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComparisonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComparisonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
