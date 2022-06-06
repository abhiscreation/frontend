import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  email:string="";
password:string=""

constructor(private http:HttpClient,private router:Router){ }

Message:string=""
  ngOnit(){
  }
login(){
 let credentials={
email:this.email,
password:this.password
 }
 this.http.post("http://localhost:5000/login/login",credentials).subscribe((res:any)=>
 {
  localStorage.setItem('User',JSON.stringify(res))
  this.router.navigateByUrl('/navigation',{replaceUrl:true})
 },
 (error:any)=>
 {
  alert("Invalid Credentials")
 })
 
}
}
