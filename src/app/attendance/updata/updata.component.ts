import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { emplotyee, employeeAtt } from 'datatype';

@Component({
  selector: 'app-updata',
  templateUrl: './updata.component.html',
  styleUrls: ['./updata.component.css']
})
export class UpdataComponent implements OnInit{
  employeeData: undefined | employeeAtt;
  EmptMessage:undefined | string;

  constructor(private attandanceService:AttendanceService, private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    let empId= this.route.snapshot.paramMap.get('id');
    empId && this.attandanceService.getEmp(empId).subscribe((data)=>{
    this.employeeData=data;
    })
    
  }

  submit(data: emplotyee){
    if(this.employeeData){
      data.id=this.employeeData.id;
    }
    this.attandanceService.updateEmployee(data).subscribe((result)=>{      
      this.EmptMessage="Employee has Updated";      
    });
    setTimeout(()=>{
      this.getList();
      this.EmptMessage=undefined
    },3000)
  }
getList(){
  this.router.navigate(['add-att/list-att']);
}

}
