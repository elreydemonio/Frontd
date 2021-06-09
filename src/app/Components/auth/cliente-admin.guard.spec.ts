import { TestBed } from '@angular/core/testing';

import { ClienteAdminGuard } from './cliente-admin.guard';

describe('ClienteAdminGuard', () => {
  let guard: ClienteAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClienteAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
