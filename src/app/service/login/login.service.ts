import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from 'src/model/user/user';
import { AbstractService } from '../abstract/abstractService';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends AbstractService {

  private relativePath = 'users/sign-in'
  constructor(http: HttpClient) {
    super(http);
   }

   signin(user: UserDTO) {
    return this.http.post(this.url + this.relativePath, user)
  }
}
