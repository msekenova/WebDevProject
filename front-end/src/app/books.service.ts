import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Books, User} from './model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  BASE_URL = 'http://localhost:3000';
  // tslint:disable-next-line:variable-name
  base_url = 'http://localhost:8000';
  constructor(private client: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.client.get<Books[]>(`${this.BASE_URL}/Books`);
  }
  getBook(title: string): Observable<Books>{
    return this.client.get<Books>( `${this.BASE_URL}/Books?title=${title}`);
  }
  deleteBook(title: string): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/Books?title=${title}`);
  }

  login(name, password): Observable<User> {
    return this.client.post<User>(`${this.base_url}/api/login/`, {
      name,
      password
    });
  }

  updateInfo(user: User): Observable<User>{
    return this.client.put<User>(`${this.base_url}/api/login/${user.id}`, user);
  }

  register(user: User): Observable<any>{
  return this.client.post(`${this.base_url}/api/login`, user);
  }
}
