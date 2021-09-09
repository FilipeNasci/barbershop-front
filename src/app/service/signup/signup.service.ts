import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from '../abstract/abstractService';
import { EmployeeDTO } from 'src/model/employees/employee';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignupService extends AbstractService {

  private relativePath = 'users/sign-up'

  constructor(http: HttpClient,
    private cookieService: CookieService) {
    super(http);
  }

  signup(employee: EmployeeDTO) {
    let headers = this.getHeaders()
    let t = this.cookieService.get('barberAuthToken')
    headers = this.setToken(this.cookieService.get('barberAuthToken'), headers);
    return this.http.post(this.url + this.relativePath, employee, { headers })
  }
}
