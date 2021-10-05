import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract/abstractService';

@Injectable({
  providedIn: 'root'
})
export class PasswordService extends AbstractService {

  private relativePath = 'passwords'

  constructor(http: HttpClient) {
    super(http);
   }

   sendToken(body: any) {
    console.log(this.url)
    let headers = this.getHeaders()
    return this.http.post(this.url + this.relativePath + '/send-token', body)
   }
}
