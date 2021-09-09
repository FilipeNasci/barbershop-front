import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SignupService } from 'src/app/service/signup/signup.service';
import { JwtUtils } from 'src/app/utils/jwt-utils';
import { EmployeeDTO } from 'src/model/employees/employee';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  perfil: string[] = ["admin", "normal"]
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm() {
    this.form = this.formBuilder.group({
      user_type: [null],
      firstName: [null],
      lastName: [null],
      birthDate: [null],
      phone: [null],
      cpf: [null],
      email: [null],
      password: [null],
      passwordConfirmation: [null]
    });
  }

  signup() {
    let units: any[] = [];
    for (const un of JwtUtils.parseJwt(this.cookieService.get('barberAuthToken')).units) {
      let objUnit = {unit_id: un}
      units.push(objUnit)
    }

    let employee: EmployeeDTO = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      birthDate: this.birthDate.value,
      user_type: this.user_type.value,
      email: this.email.value,
      phone: this.phone.value,
      cpf: this.cpf.value,
      password: this.password.value,
      passwordConfirmation: this.passwordConfirmation.value,
      // company_id: JwtUtils.parseJwt(this.cookieService.get('barberAuthToken')).company_id,
      units
    }


    if (true) {
      this.signupService.signup(employee).subscribe((res) => {
        alert('Cadastro efetuado com sucesso!')
        this.form.reset()
      }, error => {
        alert('Não foi possivel realizar o cadastro!')
      })
    }
  }

  validate(): boolean {
    if (!this.user_type.value || !this.firstName.value || !this.lastName.value || !this.email.value || !this.cpf.value || !this.password.value || !this.passwordConfirmation.value) {
      alert('Preencha todos os campos necessários.')
      return false
    }
    return true
  }

  get user_type() { return this.form.get('user_type') as FormControl; }
  get firstName() { return this.form.get('firstName') as FormControl; }
  get lastName() { return this.form.get('lastName') as FormControl; }
  get birthDate() { return this.form.get('birthDate') as FormControl; }
  get phone() { return this.form.get('phone') as FormControl; }
  get cpf() { return this.form.get('cpf') as FormControl; }
  get email() { return this.form.get('email') as FormControl; }
  get password() { return this.form.get('password') as FormControl; }
  get passwordConfirmation() { return this.form.get('passwordConfirmation') as FormControl; }


}
