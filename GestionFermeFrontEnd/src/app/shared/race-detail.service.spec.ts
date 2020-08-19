import { TestBed } from '@angular/core/testing';

import { RaceDetailService } from './race-detail.service';

describe('RaceDetailService', () => {
  let service: RaceDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
