import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';


export class AbstractService {
    public url = environment.url;
    public http: HttpClient;

    constructor(httpParameter: HttpClient) {
        this.http = httpParameter;
    }

    public getHeaders() {
        const headers = new HttpHeaders();
        return headers.set('Content-Type', 'application/json');        
    }

    public setToken(token: String, headers: HttpHeaders){
        return headers.set('Authorization', `Bearer ${token}`)
    }
}