import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  constructor(private service : DataService) { }
  ngOnInit(){
  if(this.points <= 3){
  this.teststatus = 'Failed'
  }else{
    this.teststatus = 'Passed'
  }
  }
  attemptedQuestions = this.service.attemptedQ;
  points = this.service.pointsEarned
  teststatus='';
}
