import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';
import { SelectorMatcher } from '@angular/compiler';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Patient:any[]=[];
  PatientName: any;
  PatientAge: any;
  _id: any;
  RegistrationDate: any;
  Disease:any;
  searchText:any;
  constructor(private patservice:PatientserviceService){}
  ngOnInit(): void {
    this.patservice.getPatient().subscribe((data:any)=>this.Patient=data.data);
  }
  search(){
    
    if(this.searchText ==""){
      this.ngOnInit();
    }
    else{
      this.Patient = this.Patient.filter(res =>{
        console.log(res.PatientName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()))
        if(res.PatientName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())==null){
          if(res._id.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())){
            return res._id.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
          }
          else{
            if(res.PatientAge.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()))
            return res.PatientAge.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
          }
        }else{
          return res.PatientName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
        }
         
      })
      
    }
  }
}
