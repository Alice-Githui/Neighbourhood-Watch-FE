import { TestBed } from '@angular/core/testing';

import { GetbusinessesService } from './getbusinesses.service';

describe('GetbusinessesService', () => {
  let service: GetbusinessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetbusinessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
