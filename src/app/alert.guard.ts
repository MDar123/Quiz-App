import { CanDeactivateFn } from '@angular/router';

export const alertGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  confirm('Are you sure you want to leave this page?');
  return true;
};
