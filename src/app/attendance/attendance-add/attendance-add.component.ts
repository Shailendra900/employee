import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { employeeAtt } from 'datatype';
import { Router } from '@angular/router';
import { FormRecord } from '@angular/forms';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.css'],
 
})
export class AttendanceAddComponent  implements OnInit{
submitMessage:string|undefined;
  constructor( private attandanceService:AttendanceService, private router:Router){}

  ngOnInit(): void {
    
  }
  submit(data: employeeAtt){
    this.attandanceService.postEmployee(data).subscribe((result)=>{
      this.submitMessage="Employee Sucessfully Added";
    });
    setTimeout(() => {
      this.getList();
      this.submitMessage=undefined
    }, 3000);
}
getList(){
  this.router.navigate(['add-att/list-att']);
}
}
