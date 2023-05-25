import { TestBed } from '@angular/core/testing';

import { PostActivityServiceService } from './post-activity-service.service';

describe('PostActivityServiceService', () => {
  let service: PostActivityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostActivityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
