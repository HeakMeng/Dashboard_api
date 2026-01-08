import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../../../model/employee.model';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../../services/employee.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  loginObj: LoginModel = new LoginModel
  employeeService = inject(Employee); 
  router = inject(Router);
  onLogin(){
    if(!this.loginObj.userName || !this.loginObj.password){
      alert('Please enter both username and password');
      return;
    }
    
    this.employeeService.onLogin(this.loginObj).subscribe({
      next:(result: any) => {
        console.log('API Response:', result);
        if(result.result){
          Swal.fire({
            title: "Login Success!",
            icon: "success",
            draggable: true
          });
          localStorage.setItem('employeeData', JSON.stringify(result.data));
          this.router.navigateByUrl('/dashboard');
        }else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Wrong credetial</a>'
          });
        }
      },
      error:(error) => {
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
      }
    });
  }
};