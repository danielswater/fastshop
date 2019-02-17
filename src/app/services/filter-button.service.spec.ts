import { TestBed } from '@angular/core/testing';

import { FilterButtonService } from './filter-button.service';

describe('FilterButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterButtonService = TestBed.get(FilterButtonService);
    expect(service).toBeTruthy();
  });
});
