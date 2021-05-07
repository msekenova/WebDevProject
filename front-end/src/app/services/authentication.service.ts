import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  BASE_URL = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(`${(this.BASE_URL)}` + 'token/obtain/', JSON.stringify(credentials), httpOptions);
  }

  register(user: User): Observable<any> {
    console.log(JSON.stringify(user));
    return this.http.post(`${(this.BASE_URL)}` + 'user/create/', JSON.stringify(user), httpOptions);
  }
}
