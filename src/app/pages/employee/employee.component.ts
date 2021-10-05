import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/service/employees/employees.service';
import { EmployeeDTO } from 'src/model/employees/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: EmployeeDTO
  loading: boolean = true
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    
  ) { }

  ngOnInit(): void {
    // this.employee = this.route.snapshot.queryParams['user_id']
    const user_id = this.route.snapshot.queryParams['user_id']
    this.getEmployeeById(user_id)
  }

  getEmployeeById(user_id: string) {
    this.loading = false
    this.employeesService.getUserById(user_id).subscribe(res => {
      this.employee = res
      console.log(this.employee)
      this.loading = true
    })

  }

}
