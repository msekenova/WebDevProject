import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author, Book} from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  BASE_URL = 'http://127.0.0.1:8000/api/authors/';
  // tslint:disable-next-line:variable-name
  constructor(private client: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getAuthors(): Observable<Author[]> {
    return this.client.get<Author[]>(this.BASE_URL, this.httpOptions);
  }
  getAuthor(id: number): Observable<Author>{
    return this.client.get<Author>(`${this.BASE_URL}${id}`);
  }
}
