import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthToken, Book, User} from '../model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://127.0.0.1:8000/api/users';
  constructor(private http: HttpClient) { }

  getUserInfo(id: number): Observable<User>{
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<User>(url);
  }

}
