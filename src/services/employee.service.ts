import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "../model/employee.model";

@Injectable({
  providedIn: 'root',
})
export class Employee{

  constructor(private http: HttpClient){

  }
  onLogin(loginObj: LoginModel){
    return this.http.post("/api/EmployeeManagement/login", loginObj);
  }
}