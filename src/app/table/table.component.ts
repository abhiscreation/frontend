import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Patient:any[]=[];
  constructor(private patservice:PatientserviceService){}
  ngOnInit(): void {
    this.patservice.getPatient().subscribe((data:any)=>this.Patient=data.data);
  }
}
