import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TreeNodeCollectionComponent} from 'src/app/util/tree/ui/tree-node-collection/tree-node-collection.component';

describe('TreeNodeCollectionComponent', () => {
  let component: TreeNodeCollectionComponent;
  let fixture: ComponentFixture<TreeNodeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeNodeCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
