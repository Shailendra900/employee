import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { emplotyee } from 'datatype';
import { MatTableDataSource } from '@angular/material/table'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  getEmp: emplotyee[] = []; 
  displayedColumns: string[] = ['id', 'name', 'city', 'gender','actions'];
  dataSource = new MatTableDataSource<emplotyee>(this.getEmp);  
  deleteMessage:string|undefined;


  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
   this.getList();
      }
  deletEmployee(id:number){
    this.employeeService.deleteEmpoyee(id).subscribe((result)=>{
      this.getList();
      this.deleteMessage="Employee Deleted"
    })
  }
  getAdd(){
    this.router.navigate(['add-emp']);
  }

  getList(){
    this.employeeService.getEmployees().subscribe((result) => {
      this.getEmp = result;
      this.dataSource.data = this.getEmp;  
    });

  }

}
