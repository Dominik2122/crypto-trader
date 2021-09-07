import { TestBed } from '@angular/core/testing';

import { HomeComparisonService } from './home-comparison.service';

describe('HomeComparisonService', () => {
  let service: HomeComparisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeComparisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
