import { TestBed } from '@angular/core/testing';

import { ConductorAuthGuard } from './conductor-auth.guard';

describe('ConductorAuthGuard', () => {
  let guard: ConductorAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConductorAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
