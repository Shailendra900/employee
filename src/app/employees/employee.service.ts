import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { emplotyee } from 'datatype';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) { }

  getEmployees(): Observable<emplotyee[]>{
    return this.http.get<emplotyee[]>('http://localhost:3000/employee');
  }

  postEmployee(data:emplotyee): Observable<emplotyee[]>{
    return this.http.post<emplotyee[]>('http://localhost:3000/employee',data);
  }
  deleteEmpoyee(id:number): Observable<emplotyee[]>{
    return this.http.delete<emplotyee[]>( `http://localhost:3000/employee/${id}`);
  }
}
