import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  filepath="http://localhost:5000/patient/display";
  constructor(private httpservice:HttpClient) { }
  getPatient():Observable<[]>{
    return this.httpservice.get<[]>(this.filepath);
  }
}
