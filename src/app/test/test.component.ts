import { Component, OnInit, HostListener, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {interval} from 'rxjs'
import { DataService } from '../data.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
ngOnInit(){
const username:any = localStorage.getItem('username');
this.user = username;
setTimeout((timer:any) =>{
  this.questioninterval$.unsubscribe();
  this.route.navigateByUrl('/result');
this.toaster.success('Congratulations ! You have completed your Quiz');  
  } , 500000);
this.clock();
}

//  Below Listed all used properties in the project

//  ---start---


questionArray:any[];
questionCount:number = 0;
user:any;
questioninterval$:any;
counter = 50;
isSelected = false;
isAttempted=false;
isCurrentAnswer:any;
SelectedAnswer:any;
points:number=0;
AttemptedQuestions:number=0;
//  ---end---
  constructor(private route:Router , private service : DataService,private toaster : ToastrService) {
    this.questionArray = [
      {
        "questionLabel": "Which of the following is not a datatype in typescript",
        "options": [
          { "label": "date", "correct": true },
          { "label": "void" },
          { "label": "number" },
          { "label": "string" }
        ]
      },
      {
        "questionLabel": "What is the output of the following code?",
        "options": [
          { "label": "10", "correct": true },
          { "label": "undefined" },
          { "label": "error" },
          { "label": "NaN" }
        ],
      },
      {
        "questionLabel": "Which keyword is used to declare a variable in JavaScript?",
        "options": [
          { "label": "var" , "correct": true},
          { "label": "let" },
          { "label": "const" },
          { "label": "int" }
        ]
      },
      {
        "questionLabel": "What is the purpose of the 'this' keyword in JavaScript?",
        "options": [
          { "label": "Refers to the global object" },
          { "label": "Refers to the current function" },
          { "label": "Refers to the object that owns the method", "correct": true },
          { "label": "Refers to the window object" }
        ]
      },
      {
        "questionLabel": "What is the correct syntax for creating an object in JavaScript?",
        "options": [
          { "label": "var obj = Object();" },
          { "label": "var obj = new Object();" },
          { "label": "var obj = {}", "correct": true },
          { "label": "var obj = {'key': 'value'};" }
        ]
      },
      {
        "questionLabel": "What is the result of typeof null?",
        "options": [
          { "label": "object", "correct": true },
          { "label": "null" },
          { "label": "undefined" },
          { "label": "string" }
        ]
      },
      {
        "questionLabel": "Which method is used to add elements to the end of an array?",
        "options": [
          { "label": "push()", "correct": true },
          { "label": "pop()" },
          { "label": "shift()" },
          { "label": "unshift()" }
        ]
      },
      {
        "questionLabel": "What is the difference between var and let?",
        "options": [
          { "label": "var is block-scoped, let is function-scoped" },
          { "label": "let is block-scoped, var is function-scoped", "correct": true },
          { "label": "There is no difference" },
          { "label": "var is newer than let" }
        ]
      },
      {
        "questionLabel": "What is the purpose of the arrow function in JavaScript?",
        "options": [
          { label: "To define a function" },
          { label: "To create an object" },
          { label: "To create a class" },
          { label: "To create a concise function syntax", "correct": true }
        ]
      },
      {
        "questionLabel": "Which of the following is not a JavaScript data type?",
        "options": [
          { label: "number" },
          { label: "string" },
          { label: "boolean" },
          { label: "integer", "correct": true }
        ]
      }
    ];
  }


// Making next Button

//  ---start---

nextBtn(){
  
if(this.questionCount < this.questionArray.length-1){
// console.log(this.questionCount)
this.questionCount++;
this.counter=50
console.log(this.questionCount)
}
else{
alert('Your Test is Finshed');
this.route.navigateByUrl('/result');
this.toaster.success('Congratulations ! You have completed your Quiz')
}
if(this.questionCount > this.questionArray.length-1){
this.route.navigateByUrl('/result');
this.toaster.success('Congratulations ! You have completed your Quiz')
}
}

//  ---end---

// Making previous Button

//  ---start---

previousBtn(){
  if(this.questionCount>0){
  // console.log(this.questionCount)
    this.questionCount--
  }
else{
  alert('No previous Question')
}
  }
  
  //  ---end---

// Making clock function

//   ---start---

clock(){

this.counter = 50;
this.questioninterval$ = interval(1000).subscribe( ()=>{
this.counter--;
if(this.counter == 0){
this.nextQuestion();
}
})

}

//  ---end---

// Making nextQuestion method 

//  ---start---
nextQuestion(){
if(!(this.questionCount == this.questionArray.length-1)){
this.questionCount++
this.clock();
}
else{}
}
//  ---end---

// Making Onselect Method

//  ---start---

onSelect(question:any,options:any,option:any){
debugger
console.log(question)
if(question.isAttempted == true){
return
}
if(!(option=='')){
  question.isAttempted = true;
  this.AttemptedQuestions+=1;
  // console.log(this.AttemptedQuestions);
  }
console.log(option)
options.forEach((element: { isSelected: boolean; }) => {
element.isSelected=false;
});
this.isCurrentAnswer = true;
if(option.correct){
this.points++;
}
option.isSelected = true;
this.service.showDataToResult(this.AttemptedQuestions,this.points);
}

//  ---end---

result(){
this.questionCount++
console.log(this.questionCount)
if(this.questionCount ==10){
  this.route.navigateByUrl('/result');
  this.toaster.success('Congratulations ! You have completed your Quiz')
  }
}

@HostListener('window:beforeunload',[`$event`]) BeforeUnloadHander(event:any){
var isFormDirty = true;
console.log(isFormDirty);
if(isFormDirty){
  return false
}
else{
  return true;
  }
 }
}
