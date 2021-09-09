import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from 'src/app/service/employees/employees.service';
import { EmployeeDTO } from 'src/model/employees/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  hidden: boolean;
  employees: EmployeeDTO[] = []
  perfis = ['Admin', 'Atendente', 'Teste']
  employee: EmployeeDTO
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService,

  ) { }

  ngOnInit(): void {
    this.hidden = false
    this.getAllEmployees()
    this.inicializarForm()
  }

  getAllEmployees() {
    this.hidden = false    
    this.employeesService.listUsers().subscribe(res => {
      this.employees = res
      this.hidden = true
    })

  }

  inicializarForm() {
    this.form = this.formBuilder.group({
      employee: [null],
      email: [null],
      phone: [null],
      cpf: [null],
      firstName: [null],
      lastName: [null],
      perfil: [null]
    });
  }

  selectEmpoyee() {
    let id = this.employeeSelected.value
    this.employees.find(e => {
      if (e.user_id == id)
        this.employee = e
    })

    const modal = document.getElementById("modal")
    if (modal)
      modal.style.display = "block"

  }

  atualizar() {
    // let editedEmployee: EmployeeDTO = {
    //   id: this.employeeSelected.value,
    //   firstName: this.name.value,
    //   lastName: this.lastName.value,
    //   birthDate: "this.birthDate.value",
    //   user_type: this.perfil.value,
    //   email: this.email.value,
    //   phone: this.phone.value,
    //   cpf: this.cpf.value,
    // }

    // console.log(editedEmployee)
  }

  get employeeSelected() { return this.form.get('employee') as FormControl; }
  get email() { return this.form.get('email') as FormControl; }
  get phone() { return this.form.get('phone') as FormControl; }
  get cpf() { return this.form.get('cpf') as FormControl; }
  get name() { return this.form.get('firstName') as FormControl; }
  get lastName() { return this.form.get('lastName') as FormControl; }
  get perfil() { return this.form.get('perfil') as FormControl; }

}
