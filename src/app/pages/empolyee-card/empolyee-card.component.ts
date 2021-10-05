import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDTO } from 'src/model/employees/employee';

@Component({
  selector: 'app-empolyee-card',
  templateUrl: './empolyee-card.component.html',
  styleUrls: ['./empolyee-card.component.scss']
})
export class EmpolyeeCardComponent implements OnInit {

  @Input() employee: EmployeeDTO
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['/editEmployee'], {
      queryParams: {user_id: this.employee.user_id}
    })

  }

}
