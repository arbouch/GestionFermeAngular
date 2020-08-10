import { TestBed } from '@angular/core/testing';

import { VeterinaireDetailService } from './veterinaire-detail.service';

describe('VeterinaireDetailService', () => {
  let service: VeterinaireDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinaireDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
