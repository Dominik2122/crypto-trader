import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTreeComponent } from './home-tree.component';

describe('HomeTreeComponent', () => {
  let component: HomeTreeComponent;
  let fixture: ComponentFixture<HomeTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
