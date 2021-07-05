import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { DashboardCardComponent } from './pages/dashboard-card/dashboard-card.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AdminDashboardComponent,
    DashboardCardComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
