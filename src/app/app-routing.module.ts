import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { LoginComponent } from './pages/login/login.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'sales', component: SalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
