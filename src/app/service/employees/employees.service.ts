import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { EmployeeDTO } from 'src/model/employees/employee';
import { UserDTO } from 'src/model/user/user';
import { AbstractService } from '../abstract/abstractService';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends AbstractService {

  private relativePath = 'users'

  constructor(http: HttpClient,
    private cookieService: CookieService) {
    super(http);
   }

   listUsers(): Observable<EmployeeDTO[]> {
    let headers = this.getHeaders()
    let t = this.cookieService.get('barberAuthToken')
    headers = this.setToken(this.cookieService.get('barberAuthToken'), headers);
    return this.http.get<EmployeeDTO[]>(this.url + this.relativePath, { headers })
  }
}
