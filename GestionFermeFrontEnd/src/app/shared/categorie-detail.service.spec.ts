import { TestBed } from '@angular/core/testing';

import { CategorieDetailService } from './categorie-detail.service';

describe('CategorieDetailService', () => {
  let service: CategorieDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
