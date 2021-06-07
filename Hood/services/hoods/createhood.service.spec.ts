import { TestBed } from '@angular/core/testing';

import { CreatehoodService } from './createhood.service';

describe('CreatehoodService', () => {
  let service: CreatehoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatehoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
