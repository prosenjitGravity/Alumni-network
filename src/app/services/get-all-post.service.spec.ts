import { TestBed } from '@angular/core/testing';

import { GetAllPostService } from './get-all-post.service';

describe('GetAllPostService', () => {
  let service: GetAllPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
