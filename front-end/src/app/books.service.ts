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

  login(email, password): Observable<User> {
    return this.client.post<User>(`${this.BASE_URL}/User`, {
      email,
      password
    });
  }

  getInfo(id: number): Observable<User>{
    return this.client.get<User>( `${this.BASE_URL}/User?id=${id}`);
  }

  updateInfo(user: User): Observable<User>{
    return this.client.put<User>(`${this.BASE_URL}/User${user.id}`, user);
  }

  register(email, password): Observable<any>{
  return this.client.post(`${this.BASE_URL}/User`, {
    email,
    password
  });
  }
}
