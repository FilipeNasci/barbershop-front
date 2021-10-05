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

  listUsers(limit: number, offset: number): Observable<EmployeeDTO[]> {
    let headers = this.getHeaders()
    headers = this.setToken(this.cookieService.get('barberAuthToken'), headers);
    console.log(this.url + this.relativePath  + '?take=' + limit + '?skip=' + offset)
    return this.http.get<EmployeeDTO[]>(this.url + this.relativePath  + '?take=' + limit + '&skip=' + offset, { headers })
  }

  getUserById(user_id: string): Observable<EmployeeDTO> {
    let headers = this.getHeaders()
    headers = this.setToken(this.cookieService.get('barberAuthToken'), headers);
    return this.http.get<EmployeeDTO>(this.url + this.relativePath + '/' + user_id, { headers })
  }

  getUserByEmail(email: string) {

  }

  getUserByCpf(cpf: string) {

  }
}
