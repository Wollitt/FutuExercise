import { TestBed } from '@angular/core/testing';

import { EmeraldAccountService } from './emerald-account.service';

describe('EmeraldAccountService', () => {
  let service: EmeraldAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmeraldAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
