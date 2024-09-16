import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { alertGuard } from './alert.guard';

describe('alertGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alertGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
