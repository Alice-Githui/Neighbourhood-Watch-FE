import { TestBed } from '@angular/core/testing';

import { GetallpostsService } from './getallposts.service';

describe('GetallpostsService', () => {
  let service: GetallpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
