import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  filepath="http://localhost:5000/patient/display";
  savepath="http://localhost:5000/patient/insert";
  expensepath="http://localhost:5000/expense/display";
  makepath="http://localhost:5000/expense/expenseinsert";
  constructor(private httpservice:HttpClient) { }

  getPatient():Observable<[]>{
    return this.httpservice.get<[]>(this.filepath);
  }
  saveUser(data:any){
    return  this.httpservice.post(this.savepath,data)
  }
  makeUser(data:any){
    return  this.httpservice.post(this.makepath,data)
  }
  getexpensedetails():Observable<[]>{
    return this.httpservice.get<[]>(this.expensepath)
  }

}

