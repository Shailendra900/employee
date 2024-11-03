import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emplotyee, employeeAtt } from 'datatype';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor( private http:HttpClient) { }
  postEmployee(data:employeeAtt): Observable<employeeAtt[]>{
    return this.http.post<employeeAtt[]>('http://localhost:3000/employeeAtt',data)
  }
  updateEmployee(data: emplotyee) {
    return this.http.put<emplotyee>(`http://localhost:3000/employeeAtt/${data.id}`, data);
  }
  getEmployees(): Observable<employeeAtt[]>{
    return this.http.get<employeeAtt[]>('http://localhost:3000/employeeAtt')
  }
  deleteEmpoyee(id:number): Observable<employeeAtt[]>{
    return this.http.delete<employeeAtt[]>( `http://localhost:3000/employeeAtt/${id}`);
  }
  getEmp(id: string) {
    return this.http.get<employeeAtt>(`http://localhost:3000/employeeAtt/${id}`);
  }
}
