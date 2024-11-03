import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { AttendanceAddComponent } from './attendance/attendance-add/attendance-add.component';
import { UpdataComponent } from './attendance/updata/updata.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'add-emp',
    children: [
      { path: '', component: EmployeeAddComponent },
      { path: 'list-emp', component: EmployeeListComponent },
    ]
  },
  {
    path: 'add-att',
    children: [
      { path: '', component: AttendanceAddComponent },
      {
        path: 'list-att',
        children: [
          { path: '', component: AttendanceListComponent },
          { path: 'update-att/:id', component: UpdataComponent },
        ]
      }
    ]
  },
  { path: 'update-att', component: UpdataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
