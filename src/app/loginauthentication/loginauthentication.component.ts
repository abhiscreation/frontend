import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginauthentication',
  templateUrl: './loginauthentication.component.html',
  styleUrls: ['./loginauthentication.component.css']
})
export class LoginauthenticationComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    const user:any= localStorage.getItem('User');
    if(user == null){
    this.router.navigateByUrl('/home',{replaceUrl:true})
    }
  }

}
