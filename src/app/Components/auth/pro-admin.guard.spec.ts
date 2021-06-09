import { TestBed } from '@angular/core/testing';

import { ProAdminGuard } from './pro-admin.guard';

describe('ProAdminGuard', () => {
  let guard: ProAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
