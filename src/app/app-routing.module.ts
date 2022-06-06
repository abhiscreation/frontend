import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PatientregistrationformComponent } from './patientregistrationform/patientregistrationform.component';
import { ExpensedetailComponent} from './expensedetail/expensedetail.component';
import { ExpenseComponent } from './expense/expense.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"table",component:TableComponent},
  {path:"navigation",component:NavigationComponent},
  {path:"patientregistrationform",component:PatientregistrationformComponent},
  {path:"expensedetail",component:ExpensedetailComponent},
  {path:"expense",component:ExpenseComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
