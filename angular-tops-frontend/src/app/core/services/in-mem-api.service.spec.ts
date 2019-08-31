import { TestBed } from '@angular/core/testing';

import { InMemApiService } from './in-mem-api.service';

describe('InMemCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemApiService = TestBed.get(InMemApiService);
    expect(service).toBeTruthy();
  });
});
