import { Component, Input, OnInit } from '@angular/core';
import { EmployeeDTO } from 'src/model/employees/employee';

@Component({
  selector: 'app-empolyee-card',
  templateUrl: './empolyee-card.component.html',
  styleUrls: ['./empolyee-card.component.scss']
})
export class EmpolyeeCardComponent implements OnInit {

  @Input() employee: EmployeeDTO
  
  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    console.log('foi')
  }

}
