import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router'
import { inject } from '@angular/core';
export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const userdata = localStorage.getItem('username');
  if(userdata){
  return true;
}
else{
    alert('Please Login First');
    router.navigate(['/']);
    return false
  }
};
