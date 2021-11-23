import { TestBed } from '@angular/core/testing';

import { ServerAccessService } from './server-access.service';

describe('ServerAccessService', () => {
  let service: ServerAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
