import { TestBed } from '@angular/core/testing';

import { PlatoserviceService } from './platoservice.service';

describe('PlatoserviceService', () => {
  let service: PlatoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
