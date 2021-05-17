import { TestBed } from '@angular/core/testing';

import { PropietarioAuthGuard } from './propietario-auth.guard';

describe('PropietarioAuthGuard', () => {
  let guard: PropietarioAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PropietarioAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
