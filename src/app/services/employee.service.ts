// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addemployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employee', data);
  }

  updateemployee(id:number , data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employee/${id}`, data);
  }

  getemployeelist(): Observable<any> {
    return this._http.get('http://localhost:3000/employee');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employee/${id}`);
  }

}
