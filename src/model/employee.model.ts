export class LoginModel{

//   curl -X 'POST' \
//   'https://projectapi.gerasim.in/api/EmployeeManagement/login' \
//   -H 'accept: text/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "userName": "mengheakpheng9@gmail.com",
//   "password": "1122"
// }'
  userName: string
  password: string;
  
  constructor(){
    this.userName = '';
    this.password = '';
  }
}