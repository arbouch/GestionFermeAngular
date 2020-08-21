import { TestBed } from '@angular/core/testing';

import { FermeDetailService } from './ferme-detail.service';

describe('FermeDetailService', () => {
  let service: FermeDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FermeDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
