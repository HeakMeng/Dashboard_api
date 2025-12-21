import { Routes } from '@angular/router';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { Login } from './components/pages/login/login';
import { Admin } from './components/layouts/admin/admin';

export const routes: Routes = [ 
  {title: "Auth Login", path:'login', component: Login },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '', component: Admin, children: [
    {path: 'dashboard', component: Dashboard}
  ]}
];
