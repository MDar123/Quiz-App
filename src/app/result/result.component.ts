import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  constructor(private service : DataService,private toaster : ToastrService) { }
  ngOnInit(){
  if(this.points <= 3){
  this.teststatus = 'Failed'
  }else{
    this.teststatus = 'Passed'
  }
  if(this.teststatus == 'Passed'){
  this.toaster.success(`Congratulations ! You have ${this.teststatus}`)
  }else{
    this.toaster.error(`Sorry ! You have ${this.teststatus} Try Again`)
  }
  }
  attemptedQuestions = this.service.attemptedQ;
  points = this.service.pointsEarned
  teststatus='';
}
