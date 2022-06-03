import { Component, OnInit } from '@angular/core';
import {PatientserviceService} from "../patientservice.service";

@Component({
  selector: 'app-patientregistrationform',
  templateUrl: './patientregistrationform.component.html',
  styleUrls: ['./patientregistrationform.component.css']
})
export class PatientregistrationformComponent implements OnInit {

  constructor(private patient:PatientserviceService){}
  saveuser(data:any){
this.patient.saveUser(data).subscribe((result:any)=>{
  console.warn(result)
})
  }

  ngOnInit(): void {
  }

}
