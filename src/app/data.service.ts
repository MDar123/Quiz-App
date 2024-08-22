import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
attemptedQ:number=0;
pointsEarned:number=0
constructor(private route : Router) {}
showDataToResult(attempted: any , points: any){
this.attemptedQ = attempted;
this.pointsEarned = points;
}
}
