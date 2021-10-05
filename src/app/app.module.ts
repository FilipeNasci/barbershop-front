import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { DashboardCardComponent } from './pages/dashboard-card/dashboard-card.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './service/signup/signup.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SalesComponent } from './pages/sales/sales.component';
import { LoginService } from './service/login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { EmployeesService } from './service/employees/employees.service';
import { EmpolyeeCardComponent } from './pages/empolyee-card/empolyee-card.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {NgxPaginationModule} from 'ngx-pagination';
import { ForgotItComponent } from './pages/forgot-it/forgot-it.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { PasswordService } from './service/password/password.service';

const maskConfig: Partial<IConfig> = {
  validation: false,
  dropSpecialCharacters: true
  // dropSpecialCharacters: false
  // o drop false, ao salvar mantem a mascara, comentado ele salva sem mascara
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AdminDashboardComponent,
    DashboardCardComponent,
    ScheduleComponent,
    EmployeesComponent,
    SalesComponent,
    EmpolyeeCardComponent,
    ForgotItComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxPaginationModule
  ],
  providers: [SignupService, LoginService, CookieService, EmployeesService, PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
