import { TestBed } from '@angular/core/testing';

import { GethoodsService } from './gethoods.service';

describe('GethoodsService', () => {
  let service: GethoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GethoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
