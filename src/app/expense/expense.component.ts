import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(private patient: PatientserviceService){}
  makeuser(data:any){
this.patient.makeUser(data).subscribe((result:any)=>{
  console.warn(result)
  alert("Patient Expenses saved successfully")
})
}

  ngOnInit(): void {
  }

}


