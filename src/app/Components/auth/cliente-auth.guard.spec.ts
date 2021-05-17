import { TestBed } from '@angular/core/testing';

import { ClienteAuthGuard } from './cliente-auth.guard';

describe('ClienteAuthGuard', () => {
  let guard: ClienteAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClienteAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
