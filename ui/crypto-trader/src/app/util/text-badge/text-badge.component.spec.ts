import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBadgeComponent } from './text-badge.component';

describe('TextBadgeComponent', () => {
  let component: TextBadgeComponent;
  let fixture: ComponentFixture<TextBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
