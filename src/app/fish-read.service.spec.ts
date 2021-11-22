import { TestBed } from '@angular/core/testing';

import { FishReadService } from './fish-read.service';

describe('FishReadService', () => {
  let service: FishReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
