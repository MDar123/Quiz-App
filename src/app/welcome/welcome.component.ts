import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { FormsModule,FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import JSON from 'json5'
import { Login } from '../../../model';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit,OnDestroy{


loginform:Login={
email:'',
password:''
}
loginForm!: FormGroup;

constructor(private fb: FormBuilder , private route : Router) {}

ngOnInit(): void {
  this.loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
}
ngOnDestroy(){
// localStorage.clear();
// this.route.navigateByUrl('/welcome')
}
loginBtn()
{
if(this.loginForm.valid && this.loginForm.value.email == 'admin@gmail.com' && this.loginForm.value.password == 'admin123'){
this.loginform = this.loginForm.value
alert('Congratulations ! You are logged In')
console.log(this.loginform)
localStorage.setItem('username', this.loginform.email);
localStorage.setItem('password', this.loginform.password);
this.route.navigateByUrl('/test')
}
else{
alert('Plese Enter Admin Credentials');
}
}

}

