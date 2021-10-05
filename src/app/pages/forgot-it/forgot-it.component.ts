import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from 'src/app/service/employees/employees.service';
import { PasswordService } from 'src/app/service/password/password.service';

@Component({
  selector: 'app-forgot-it',
  templateUrl: './forgot-it.component.html',
  styleUrls: ['./forgot-it.component.scss']
})
export class ForgotItComponent implements OnInit {
  
  form: FormGroup
  showEmail: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeesService,
    private passwordService: PasswordService,

  ) { }

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm() {
    this.form = this.formBuilder.group({
      birthDate: [null],
      cpf: [null],
      email: [null]
    });
  }

  changeForm(tipo: string) {
    if(tipo == 'email') {
      this.showEmail = true
      this.cpf.setValue("")
    } else {
      this.showEmail = false
      this.email.setValue("")
    }
  }

  checkIfUserExist() {
    if(this.showEmail) {
      let body = {
        email: this.email.value,
        birthDate: '1998-10-01'
      }
      this.passwordService.sendToken(body).subscribe(res => {
        console.log(res)
      })
    } else {
      let body = {
        cpf: this.cpf.value,
        birthDate: '2011-10-05T14:48:00.000Z'
      }
    }
  }

  get email() { return this.form.get('email') as FormControl; }
  get cpf() { return this.form.get('cpf') as FormControl; }


}
