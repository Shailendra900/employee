import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { emplotyee, employeeAtt } from 'datatype';
import { MatTableDataSource } from '@angular/material/table'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent  implements OnInit{
  getEmployees:employeeAtt[]=[];

  displayedColumns: string[] = ['name', 'possition', 'date','actions'];
  dataSource = new MatTableDataSource<employeeAtt>(this.getEmployees);  
  deleteMessage:string|undefined;


  constructor(private attandanceService:AttendanceService, private router:Router ) {}

  ngOnInit(): void {
    this.getList();
    }
    getAtt(){
      this.router.navigate(['add-att'])
    }
    getUpdata(id:number){
      this.router.navigate([`add-att/list-att/update-att/${id}`])
    }
    deletEmployee(id:number){
      this.attandanceService.deleteEmpoyee(id).subscribe((result)=>{
        this.getList();
        this.deleteMessage="Attendance Deleted"
      });
      setTimeout(() => {
        this.deleteMessage=undefined;
        
      }, 1000);
    }  
    
  updateEmployee(data: emplotyee){
    this.attandanceService.updateEmployee(data).subscribe((result)=>{
      this.getList();
    });
}
    getList(){
      this.attandanceService.getEmployees().subscribe((result)=>{
        this.getEmployees=result;
        this.dataSource.data = this.getEmployees;  
  
      })   
    }
}
