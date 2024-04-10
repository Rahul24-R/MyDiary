import { TestBed } from '@angular/core/testing';

import { UserdetailsServiceService } from './userdetails-service.service';

describe('UserdetailsServiceService', () => {
  let service: UserdetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
