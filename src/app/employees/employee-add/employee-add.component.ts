import { Component, OnInit } from '@angular/core';
import { emplotyee } from 'datatype';
import { EmployeeService } from '../employee.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],

})
export class EmployeeAddComponent implements OnInit{
  getEmp:emplotyee[]|undefined;
  addEmployeeMessage:string|undefined;

  constructor(private employeeService:EmployeeService, private router:Router){}

  ngOnInit(): void {
    
  }

  submit(data: emplotyee){
    this.employeeService.postEmployee(data).subscribe((result)=>{
      this.addEmployeeMessage ="Add Employee Suseccfully";
    });
    setTimeout(() => {
      this.getList();
      this.addEmployeeMessage=undefined;
    }, 3000);

};
getEmployee(){
  this.employeeService.getEmployees().subscribe((result)=>{
    this.getEmp = result;
  })
};
getList(){
  this.router.navigate(['add-emp/list-emp'])
}

}
