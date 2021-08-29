import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeColumnCollectionComponent } from './tree-column-collection.component';

describe('TreeColumnCollectionComponent', () => {
  let component: TreeColumnCollectionComponent;
  let fixture: ComponentFixture<TreeColumnCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeColumnCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeColumnCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
