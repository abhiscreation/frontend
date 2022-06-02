import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  email:string="";
password:string=""

constructor(private http:HttpClient){ }

Message:string=""
  ngOnit(){
   
  }
login(){
 let credentials={
email:this.email,
password:this.password
 }
 this.http.post("http://localhost:5000/login/login",credentials).subscribe((res:any)=>{
this.Message="Login Successfully"
 },
 (error:any)=>{
  this.Message="Incorrect username or password"
 })
 
}
}
