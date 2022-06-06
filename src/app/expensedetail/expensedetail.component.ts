import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';
@Component({
  selector: 'app-expensedetail',
  templateUrl: './expensedetail.component.html',
  styleUrls: ['./expensedetail.component.css']
})
export class ExpensedetailComponent implements OnInit {
  expense:any[]=[];

  constructor(private expenseservice:PatientserviceService) { }

  ngOnInit(): void {
    this.expenseservice. getexpensedetails().subscribe((data:any)=>this.expense=data.data);
  }

}