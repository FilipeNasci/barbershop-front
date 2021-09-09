import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/service/login/login.service';
import { UserDTO } from 'src/model/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private cookieService: CookieService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.inicializarForm()
  }

  inicializarForm() {
    this.form = this.formBuilder.group({
      email: [null],
      password: [null],
    });
  }

  login() {
    let user: UserDTO = {
      email: this.email.value,
      password: this.password.value
    }
    this.loginService.signin(user).subscribe((res: any) => {
      if(res.token){
        this.cookieService.set('barberAuthToken', res.token);
        this.router.navigate(['/admin-dashboard']);
        this.parseJwt(res.token)
      }
    }, () => {
      alert("Email e/ou senha inválidos!")
    })
  }

  parseJwt (token: any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    console.log(JSON.parse(jsonPayload));
};
  
  get email() { return this.form.get('email') as FormControl; }
  get password() { return this.form.get('password') as FormControl; }


}
